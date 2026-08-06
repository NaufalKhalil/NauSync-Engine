import { listDir, copyPath, movePath, deletePath, purgePath, resolveForRclone, streamArchiveToRemote } from './fsops.js';
import { listRootNames, isConfidential, containsBlockedPath, safeResolve } from './pathGuard.js';
import { uploadToDrive, RCLONE_SPEED_FLAGS } from './rclone.js';
import { toEmbedPayload, COLORS } from './embeds.js';
import { config } from './config.js';
import fs from 'fs';
import path from 'node:path';
import os from 'node:os';
import { exec, spawn, execFile } from 'child_process';
import { promisify } from 'util';
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } from 'discord.js';
import { verifyPin, changePin, verifyAndRotatePin, resendPendingSilentPinIfAny, sendAlertEmail } from './pinStore.js';

const execAsync = promisify(exec);
const execFileAsync = promisify(execFile);

// --- Batas ukuran yang wajib PIN (copy/download) ---
// Bukan cuma soal keamanan (cegah hacker yang berhasil masuk Discord asal
// copy/download berulang-ulang), tapi juga proteksi teknis: transfer file
// gede tanpa PIN gate bisa bikin bot ke-flood command yang sama berkali2
// (RAM/CPU numpuk dari beberapa proses rclone/compress paralel) dan bikin
// storage lokal + Google Drive penuh tak terkendali kalau di-spam.
const PIN_SIZE_THRESHOLD = 50 * 1024 * 1024; // 50MB

// Dipakai di command berbahaya (shutdown/restart/purge/dll): ambil argumen
// TERAKHIR sebagai PIN, verifikasi, dan return sisa argumen sebelumnya
// (argumen "asli" command itu, tanpa PIN-nya). Lempar Error kalau PIN
// salah/kosong/lockout — otomatis ke-catch oleh try/catch di handleCommand
// dan tampil sebagai balasan "Gagal: ...".
// `reason` dipakai buat 2 hal: (1) label di email rotasi PIN otomatis
// (lihat verifyAndRotatePin di pinStore.js), (2) label di email alert
// "command berhasil dieksekusi" yang dikirim SETELAH aksi command-nya
// benar-benar selesai (lihat pemanggilan sendAlertEmail di tiap case).
async function requirePin(args, reason, opts = {}) {
  if (args.length === 0) {
    throw new Error('Command ini butuh PIN keamanan di argumen terakhir. Contoh: `shutdown Ab3xQ9kZ`.');
  }
  const pin = args[args.length - 1];
  await verifyAndRotatePin(pin, reason, opts);
  return args.slice(0, -1);
}

// Penanda versi kode yang sedang berjalan — tampil di log startup (index.js)
// dan di "help", supaya gampang mastiin apakah bot beneran udah pakai file
// commands.js terbaru atau masih versi lama (mis. abis edit tapi restart-nya
// gagal reload / salah file yang ditimpa). Naikkan angkanya tiap kali bikin
// perubahan besar ke command handling.
export const BUILD_TAG = 'cmds-v21-embed-ui';

// --- FITUR: "current directory" per sesi bot, biar user tidak perlu ketik ---
// path panjang berulang-ulang tiap mau list/copy/move/delete/download.
// Konsepnya mirip `cd` di terminal: sekali pindah folder dengan "cd <folder>",
// command lain (list, copy, move, delete, download) otomatis dianggap relatif
// terhadap folder itu, kecuali user awali dengan "/" (artinya relatif ke root
// BASE_DIR) atau pakai "..".
// State ini disimpan di memory proses (bukan per-user), cukup karena bot ini
// memang cuma dipakai 1 owner.
let currentDir = '.'; // relatif terhadap BASE_DIR, pakai format "/"

// Menyimpan hasil "list" TERAKHIR (array virtual path lengkap, urut sesuai
// nomor yang ditampilkan ke user), supaya user bisa merujuk item lewat
// nomornya pakai ":<angka>" alih-alih ngetik ulang nama folder/file yang
// panjang. Contoh: abis "list Documents" nampilin "2. 📁 Skripsi/", user
// bisa langsung "cd :2" tanpa ngetik "cd Skripsi".
//
// Sengaja pakai prefix ":" (bukan angka polos) karena ":" adalah salah satu
// karakter yang TIDAK VALID di nama file/folder Windows — jadi ":3" pasti
// tidak akan pernah tertukar/bentrok dengan nama file/folder asli yang
// kebetulan berupa angka. State ini di-reset tiap kali "list" baru
// dijalankan (bukan per-user, cukup karena bot ini cuma dipakai 1 owner).
let lastListing = [];

// Deteksi argumen berformat ":<angka>" (persis titik dua diikuti digit,
// tanpa apa pun lagi) dan terjemahkan jadi virtual path lengkap dari hasil
// "list" terakhir. Return null kalau inputPath bukan format index (berarti
// harus diproses sebagai path biasa oleh resolvePathArg).
function resolveIndexRef(inputPath) {
  const match = /^:(\d+)$/.exec(inputPath);
  if (!match) return null;

  if (lastListing.length === 0) {
    throw new Error('Belum ada hasil "list" yang bisa dirujuk pakai nomor. Jalankan "list" dulu.');
  }

  const idx = parseInt(match[1], 10) - 1;
  if (idx < 0 || idx >= lastListing.length) {
    throw new Error(`Nomor ":${match[1]}" tidak ada di hasil "list" terakhir (cuma ada 1-${lastListing.length}). Jalankan "list" lagi kalau perlu.`);
  }

  return lastListing[idx];
}

// --- FITUR: Batch reference (":N-:M" dan/atau ":N,:M,:P") ---
// Dipakai di copy/move/delete/purge supaya bisa proses BANYAK item sekaligus
// dari hasil "list" terakhir, tanpa perlu ulang command satu-satu.
//
// Format yang didukung (harus PERSIS diawali ":", sama seperti referensi
// index tunggal ":N" yang sudah ada):
//   ":3-:7"        -> range nomor 3 sampai 7 (inklusif kedua ujung)
//   ":3,:5,:9"     -> daftar nomor spesifik, dipisah koma
//   ":3-:7,:9,:12" -> boleh digabung (range + individual)
//
// KENAPA AMAN dianggap batch begitu ada "," atau "-": ":" adalah karakter
// yang TIDAK VALID di nama file/folder Windows (lihat komentar resolveIndexRef
// di atas), jadi argumen apa pun yang diawali ":" SUDAH PASTI referensi index,
// bukan nama file asli — aman diproses sebagai batch tanpa risiko "nabrak"
// nama file yang kebetulan mirip.
//
// Return null kalau inputPath BUKAN format batch (mis. ":7" polos tanpa "," /
// "-" tetap lewat jalur LAMA resolveIndexRef sebagai index tunggal, behavior
// existing tidak berubah sama sekali). Lempar Error kalau SUDAH terdeteksi
// sebagai format batch tapi rusak/nomor di luar jangkauan — supaya user dapat
// pesan jelas, bukan diam-diam salah proses.
function parseBatchToken(token) {
  const rangeMatch = /^:(\d+)-:(\d+)$/.exec(token);
  if (rangeMatch) {
    return { start: parseInt(rangeMatch[1], 10), end: parseInt(rangeMatch[2], 10) };
  }
  const singleMatch = /^:(\d+)$/.exec(token);
  if (singleMatch) {
    const n = parseInt(singleMatch[1], 10);
    return { start: n, end: n };
  }
  return null;
}

function resolveBatchRefs(inputPath) {
  if (typeof inputPath !== 'string' || !inputPath.startsWith(':')) return null;
  if (!inputPath.includes(',') && !inputPath.includes('-')) return null; // ":7" polos -> index tunggal, bukan batch

  if (lastListing.length === 0) {
    throw new Error('Belum ada hasil "list" yang bisa dirujuk pakai nomor batch. Jalankan "list" dulu.');
  }

  const tokens = inputPath.split(',').map((t) => t.trim()).filter(Boolean);
  const indices = new Set();

  for (const token of tokens) {
    const parsed = parseBatchToken(token);
    if (!parsed) {
      throw new Error(`Format batch "${token}" tidak valid. Contoh yang benar: \`:3-:7\` (range) atau \`:3,:5,:9\` (daftar), bisa digabung \`:3-:7,:9\`.`);
    }
    const lo = Math.min(parsed.start, parsed.end);
    const hi = Math.max(parsed.start, parsed.end);
    for (let n = lo; n <= hi; n++) {
      const idx = n - 1;
      if (idx < 0 || idx >= lastListing.length) {
        throw new Error(`Nomor ":${n}" tidak ada di hasil "list" terakhir (cuma ada 1-${lastListing.length}). Jalankan "list" lagi kalau perlu.`);
      }
      indices.add(idx);
    }
  }

  // Urut sesuai nomor asli (bukan urutan token ditulis) & buang duplikat
  // otomatis lewat Set (mis. ":3-:7,:5" -> nomor 5 cuma diproses sekali).
  return [...indices].sort((a, b) => a - b).map((idx) => lastListing[idx]);
}

// Batas jumlah item yang ditampilkan namanya satu-satu di pesan konfirmasi/
// ringkasan batch, biar tidak kepanjangan nabrak limit ~2000 karakter Discord
// kalau batch-nya isinya puluhan item. Sisanya cukup diringkas "+N lainnya".
const BATCH_DISPLAY_LIMIT = 15;

function formatBatchItemList(virtualPaths) {
  const shown = virtualPaths.slice(0, BATCH_DISPLAY_LIMIT).map((v) => `• \`${toDisplayPath(v)}\``);
  const rest = virtualPaths.length - shown.length;
  return shown.join('\n') + (rest > 0 ? `\n_(+${rest} lainnya)_` : '');
}

// Nyimpen ID pesan hasil "preview" yang masih "aktif" (belum di-clear), supaya
// command "clear" cuma hapus pesan-pesan itu — bukan seluruh riwayat chat.
//
// PENTING: array ini di-PERSIST ke file (bukan cuma di memory) — soalnya
// kalau bot di-restart, PC restart, atau mati listrik SEBELUM sempat
// "clear", array in-memory bakal ke-reset kosong padahal pesan preview-nya
// (termasuk yang berasal dari folder RAHASIA) MASIH kelihatan di riwayat
// chat Discord. Tanpa persist, bot jadi "lupa" ID pesan itu selamanya dan
// "clear" tidak akan pernah bisa menghapusnya lagi walau bot sudah nyala
// ulang. Dengan disimpan ke file, begitu bot start lagi, daftar ID lama
// otomatis ke-load kembali dan "clear" tetap bisa menghapusnya normal.
const PREVIEW_STORE_FILE = path.resolve('./previewMessages.store.json');

function loadPreviewMessages() {
  try {
    if (!fs.existsSync(PREVIEW_STORE_FILE)) return [];
    const raw = JSON.parse(fs.readFileSync(PREVIEW_STORE_FILE, 'utf-8'));
    return Array.isArray(raw) ? raw : [];
  } catch {
    // File corrupt/rusak -> jangan sampai bikin bot gagal start gara-gara
    // ini, cukup anggap kosong (skenario terburuknya cuma balik ke masalah
    // lama: preview lama harus dihapus manual).
    return [];
  }
}

function savePreviewMessages() {
  try {
    fs.writeFileSync(PREVIEW_STORE_FILE, JSON.stringify(previewMessages, null, 2), 'utf-8');
  } catch (err) {
    console.warn(`⚠️ Gagal simpan previewMessages.store.json: ${err.message}`);
  }
}

const previewMessages = loadPreviewMessages();

function displayDir() {
  return currentDir === '.' ? '/' : `/${currentDir}`;
}

// Sama seperti displayDir(), tapi buat virtual path arbitrer (bukan cuma
// currentDir) — dipakai di hasil copy/move/delete supaya yang ditampilkan
// ke user path VIRTUAL yang rapi ("/Documents/CV.pdf"), bukan path disk asli
// yang panjang ("D:\Users\Naufal Khalil\Documents\CV.pdf").
function toDisplayPath(virtualPath) {
  return virtualPath === '.' ? '/' : `/${virtualPath}`;
}

// Gabungkan sebuah argumen path yang diketik user dengan currentDir yang aktif.
// - "" atau "." -> currentDir apa adanya
// - diawali "/" -> dianggap relatif terhadap root BASE_DIR (bukan currentDir)
// - selain itu -> digabung dengan currentDir (mendukung "..", "../..", dst)
function resolvePathArg(inputPath) {
  if (!inputPath || inputPath === '.') return currentDir;

  // ":<angka>" -> rujuk langsung ke item bernomor itu dari hasil "list"
  // terakhir (virtual path lengkap, sudah relatif terhadap root sandbox,
  // BUKAN relatif terhadap currentDir) — jadi bisa langsung dipakai sebagai
  // hasil akhir, lewati logic gabung-dengan-currentDir di bawah.
  const indexTarget = resolveIndexRef(inputPath);
  if (indexTarget !== null) return indexTarget;

  const normalizedInput = inputPath.replace(/\\/g, '/');

  let combined;
  if (normalizedInput.startsWith('/')) {
    const stripped = normalizedInput.replace(/^\/+/, '');
    combined = stripped === '' ? '.' : path.posix.normalize(stripped);
  } else {
    const base = currentDir === '.' ? '' : currentDir;
    combined = path.posix.normalize(path.posix.join(base, normalizedInput));
  }

  if (combined === '' || combined === '.') return '.';

  // BUG FIX: kalau hasil gabungan path masih diawali "..", artinya user
  // mencoba naik lebih tinggi dari root sandbox (mis. "cd .." diulang
  // sampai lebih tinggi dari BASE_DIR, atau path absolut kayak "/../../etc").
  // Sebelumnya string ".." / "../.." ini lolos dan currentDir jadi rusak,
  // bikin navigasi berikutnya ("cd Project") ikut nyasar ke luar sandbox
  // (kadang sampai ke root drive Windows kalau safeResolve kebetulan tidak
  // menahannya). Clamp ke root ('.') di sini, jangan biarkan lolos sama sekali.
  if (combined === '..' || combined.startsWith('../')) return '.';

  return combined;
}

function buildHelpText() {
  const rootsList = listRootNames().map((name) => `• \`${name}\``).join('\n');

  return `**📦 Nausync Cloud** \`(${BUILD_TAG})\`

**Navigasi**
• \`cd <folder>\`
• \`cd ..\`
• \`cdl <folder>\` (alias \`cdlist\`)
• \`root\`
• \`pwd\`
• \`list [folder]\` _(alias: ls)_

**File**
• \`copy <src> <dst>\` 🔐*
• \`move <src> <dst>\` 🔐*
• \`delete <path>\` 🔐*
• \`purge <path> <pin>\` 🔐
• \`info <path>\`
• \`preview <path>\` 🔐*
• \`download <path>\` 🔐*
• \`dz <path>\` 🔐* _(alias: downloadzip, dlzip)_
• \`clear\`
• \`clearchat <pin>\` 🔐 _(alias: clearall)_

**Laptop**
• \`baterai\`
• \`disk\`
• \`network\` 🔐*
• \`mode server\`
• \`mode hemat\`
• \`msg "<pesan>" <durasi>\` _(alias: message)_
• \`shutdown <pin>\` 🔐
• \`restart <pin>\` 🔐
• \`cancel\`

**Keamanan**
• \`chgpin <pin_lama>\` 🔐

🔐 = selalu butuh PIN keamanan.
🔐* = butuh PIN CUMA kalau kondisi tertentu terpenuhi (cek \`?copy\`/\`?move\`/\`?preview\`/\`?download\`/\`?network\`).
PIN dikirim ke email, cek \`?chgpin\`.

Ketik \`?<command>\` buat penjelasan detail tiap command, mis. \`?root\`.

**Folder root:**
${rootsList}`;
}

// Batas durasi & panjang pesan untuk command "msg" (lihat pemakaiannya di
// DETAILED_HELP.msg di bawah, dan di validasi command "msg" lebih jauh ke
// bawah lagi). Dipindah ke atas (sebelum DETAILED_HELP) karena DETAILED_HELP
// dievaluasi lebih dulu saat module ini di-load — kalau const ini masih
// dideklarasikan di bawah, DETAILED_HELP.msg bakal coba membacanya SEBELUM
// baris deklarasinya sempat jalan, dan "const" ada di temporal dead zone
// sampai baris deklarasinya benar-benar dieksekusi -> ReferenceError
// "Cannot access before initialization" tiap kali bot start.
const MSG_MIN_SECONDS = 1;
const MSG_MAX_SECONDS = 600; // 10 menit — cukup buat pengingat, tapi dibatasi biar tidak "mengunci" layar berjam-jam kalau typo/disalahgunakan
const MSG_MAX_LENGTH = 500;

// Penjelasan detail per-command, sengaja TIDAK dimasukkan ke "help" utama
// (biar "help" tetap ringkas) — cuma bisa diakses lewat command tersembunyi
// "?<nama>", mis. "?pwd" atau "?download". Prefix "?" dipilih dengan alasan
// sama seperti ":" di lastListing: karakter ini TIDAK VALID di nama file
// Windows, jadi "?pwd" nggak akan pernah tertukar dengan path/nama asli.
const DETAILED_HELP = {
  help: '**help** — daftar command\n\n' +
    '**Cara pakai:**\n' +
    '• `help` nampilin daftar semua command (ringkas)\n' +
    '• `?<command>` nampilin penjelasan detail command tertentu, mis. `?cd` atau `?download`\n\n' +
    '**2 aturan umum yang berlaku di hampir semua command:**\n' +
    '• Path yang kamu ketik itu relatif ke folder aktif (`pwd`) — awali dengan `/` kalau mau langsung dari root, mis. `list /Documents/Kerja`\n' +
    '• Abis `list`, tiap item dapat nomor yang bisa dirujuk pakai `:<nomor>` di command berikutnya, mis. `cd :2` (lihat `?:` buat detail, termasuk batch)',

  pwd: '**pwd** — lihat folder aktif\n\n' +
    '**Format:** `pwd`\n\n' +
    '**Cara kerja:**\n' +
    '• Nunjukin folder mana yang lagi "aktif" sekarang (hasil `cd` terakhir)\n' +
    '• Semua command lain (list/copy/move/delete/download/preview) yang argumennya bukan path lengkap otomatis dianggap relatif ke folder aktif ini',

  cdl: '**cdl** — pindah folder SEKALIGUS lihat isinya (alias: `cdlist`)\n\n' +
    '**Format:** `cdl <folder>` atau `cdlist <folder>`\n\n' +
    '**Cara kerja:**\n' +
    '• Gabungan `cd` + `list` dalam 1 command — nggak perlu ketik 2 command terpisah tiap mau masuk & langsung liat isi folder\n' +
    '• Aturan path-nya sama kayak `cd` (relatif ke folder aktif, `/` buat dari root, `..` buat naik, bisa juga pakai `:angka`)\n\n' +
    '⚠️ **Beda penting dari `cd`:** kalau targetnya ternyata FILE (bukan folder), `cdl` TIDAK otomatis preview kayak `cd` — malah kasih PERINGATAN, karena "list" sebuah file itu tidak masuk akal (file tidak punya isi buat di-list). Pakai `cd <file>` atau `preview <file>` kalau memang mau lihat isi file.',

  cd: '**cd** — pindah folder aktif (atau preview kalau target file)\n\n' +
    '**Format:**\n' +
    '`cd <folder>`\n' +
    '`cd <file> <pin>` (shortcut preview, kalau file rahasia/≥50MB)\n\n' +
    '**Cara kerja:**\n' +
    '• Pindah ke folder itu, relatif ke folder aktif sekarang\n' +
    '• `cd ..` naik satu tingkat — nggak bisa naik lebih tinggi dari root sandbox\n' +
    '• Awali path dengan `/` buat langsung loncat dari root virtual, mis. `cd /Documents/Kerja`\n' +
    '• Bisa juga pakai nomor dari `list` terakhir: `cd :2`\n' +
    '• 🆕 Kalau targetnya ternyata FILE (bukan folder), otomatis jadi shortcut preview versi attachment-apa-adanya — cocok buat intip cepat\n\n' +
    '🔒 **Wajib PIN kalau:** file-nya ada di folder RAHASIA atau ukurannya ≥50MB',

  root: '**root** — langsung balik ke root sandbox\n\n' +
    '**Format:** `root`\n\n' +
    '**Cara kerja:**\n' +
    '• Dipakai kalau folder aktif sekarang udah jauh nyasar ke dalam (mis. `/Documents/Kerja/2024/Laporan`)\n' +
    '• Langsung balik ke root virtual tanpa `cd ..` berkali-kali atau ngetik `cd /`\n' +
    '• Efeknya sama persis kayak `cd /`, cuma lebih singkat',

  get ls() { return DETAILED_HELP.list; },
  list: '**list** / **ls** — lihat isi folder\n\n' +
    '**Format:** (kedua nama ini alias, hasilnya sama persis)\n' +
    '`list` / `ls` — isi folder aktif\n' +
    '`list <folder>` / `ls <folder>` — isi folder lain tanpa perlu pindah dulu\n\n' +
    '**Cara kerja:**\n' +
    '• Tiap item dapat nomor urut yang bisa dirujuk pakai `:<nomor>` di command berikutnya (cd/copy/move/delete/download/dz/preview)\n' +
    '• Kalau isinya kepanjangan buat 1 pesan Discord, otomatis dipecah jadi beberapa halaman pakai tombol ◀️▶️',

  copy: '**copy** — copy file/folder\n\n' +
    '**Format:**\n' +
    '`copy <src> <dst>`\n' +
    '`copy <src> <dst> <pin>` (kalau src rahasia dan/atau ≥50MB)\n\n' +
    '**Cara kerja:**\n' +
    '• src & dst boleh nama folder/file biasa, path lengkap (`/Documents/x`), atau nomor dari `list` terakhir (`:3`)\n' +
    '• Folder di-copy beserta isinya (recursive)\n' +
    '• File asal tidak terhapus\n\n' +
    '🔒 **Wajib PIN kalau:**\n' +
    '• src ada di folder RAHASIA (CONFIDENTIAL_PATHS), dan/atau\n' +
    '• Ukurannya ≥50MB\n' +
    '_(mencegah bot crash/storage penuh, copy berulang kalau Discord-mu kena hack, dan data rahasia diduplikat diam-diam)_\n\n' +
    '🆕 **Batch:**\n' +
    '`copy :3-:7 <folder_tujuan>` (range) atau `copy :3,:5,:9 <folder_tujuan>` (daftar)\n' +
    '• Copy BANYAK item ke satu folder tujuan yang sama, nama file tetap sama seperti aslinya\n' +
    '• Kalau ADA SATU SAJA item yang butuh PIN, seluruh batch minta PIN sekali di akhir',

  move: '**move** — pindah/rename file/folder\n\n' +
    '**Format:**\n' +
    '`move <src> <dst>`\n' +
    '`move <src> <dst> <pin>` (kalau src rahasia dan/atau ≥50MB)\n\n' +
    '**Cara kerja:**\n' +
    '• Sama aturan path-nya kayak `copy`, tapi file asal BERPINDAH (bukan diduplikat)\n' +
    '• Juga dipakai buat rename: `move CV.pdf "CV Baru.pdf"`\n' +
    '• Folder root yang diizinkan sendiri (mis. seluruh "Documents") nggak bisa dipindah/di-rename, cuma isinya\n\n' +
    '🔒 **Wajib PIN kalau:** src ada di folder RAHASIA dan/atau ukurannya ≥50MB — sama gatenya kayak `copy`\n\n' +
    '🆕 **Batch:**\n' +
    '`move :3-:7 <folder_tujuan>` atau `move :3,:5,:9 <folder_tujuan>`\n' +
    '• Sama seperti batch `copy`, tapi memindah (bukan menduplikat) semua item ke satu folder tujuan yang sama',

  delete: '**delete** — hapus file/folder (TIDAK permanen)\n\n' +
    '**Format:**\n' +
    '`delete <path>`\n' +
    '`delete <path> <pin>` (kalau ada di folder RAHASIA)\n\n' +
    '**Cara kerja:**\n' +
    '• Mindahin file/folder ke folder ".trash" tersembunyi di root yang sama — bukan dihapus dari disk\n' +
    '• Folder ".trash" disembunyikan dari `list`, tapi tetap bisa diakses manual (mis. `list Documents/.trash`)\n' +
    '• Otomatis dihapus PERMANEN setelah beberapa hari (lihat `?purge`) kalau tidak dipulihkan manual duluan\n' +
    '• Folder root yang diizinkan sendiri nggak bisa dihapus, cuma isinya\n\n' +
    '🔒 **Wajib PIN kalau:** path-nya ada di folder RAHASIA (CONFIDENTIAL_PATHS) — tiap penghapusan folder rahasia dikirim alert ke email\n\n' +
    '💡 Buat hapus beneran permanen SEKARANG JUGA (bukan nunggu retensi), pakai `purge`\n\n' +
    '🆕 **Batch:**\n' +
    '`delete :3-:7` atau `delete :3,:5,:9`\n' +
    '• Hapus (ke trash) BANYAK item sekaligus dari hasil `list` terakhir\n' +
    '• Kalau ADA item rahasia di dalamnya, seluruh batch minta PIN sekali di akhir',

  purge: '**purge** — hapus PERMANEN (butuh PIN + konfirmasi)\n\n' +
    '**Format:** `purge <path> <pin>`\n\n' +
    '**Cara kerja:**\n' +
    '• Beda sama `delete` — ini langsung hapus dari disk, TIDAK masuk ".trash", TIDAK BISA dibatalkan\n' +
    '• Butuh PIN keamanan di argumen terakhir (lihat `?chgpin`)\n' +
    '• Setelah PIN valid, bot nanya konfirmasi tombol "Ya, Hapus Permanen" / "Batal"\n' +
    '• Dua lapis ini sengaja dipasang karena `purge` paling merusak & tidak bisa diundo\n\n' +
    '📌 **Catatan:** item yang sudah masuk ".trash" lewat `delete` otomatis kena "purge" versi OTOMATIS setelah beberapa hari (default 30 hari, atur lewat `TRASH_RETENTION_DAYS` di .env) — sweep ini jalan sekali sehari, owner selalu dapat email ringkasan\n\n' +
    '🆕 **Batch:**\n' +
    '`purge :3-:7 <pin>` atau `purge :3,:5,:9 <pin>`\n' +
    '• Hapus PERMANEN banyak item sekaligus dari hasil `list` terakhir\n' +
    '• Tetap 1 PIN + 1 tombol konfirmasi buat SELURUH batch (bukan per-item) — pastikan daftarnya sudah benar sebelum konfirmasi',

  cancel: '**cancel** — batalkan shutdown/restart yang masih pending\n\n' +
    '**Format:** `cancel`\n\n' +
    '**Cara kerja:**\n' +
    '• Menghentikan proses shutdown/restart yang lagi dalam masa tunggu 15 detik (mis. abis ketik `shutdown <pin>` tapi berubah pikiran)\n' +
    '• TIDAK butuh PIN, karena ini aksi yang MENGURANGI risiko, bukan menambah\n' +
    '• Kalau tidak ada shutdown/restart yang pending, bot bakal bilang gagal — itu wajar',

  info: '**info** — lihat detail file/folder\n\n' +
    '**Format:** `info <path>`\n\n' +
    '**Cara kerja:** nampilin\n' +
    '• Tipe (file/folder)\n' +
    '• Ukuran total (folder dihitung rekursif termasuk semua isinya)\n' +
    '• Jumlah item di dalam (kalau folder)\n' +
    '• Tanggal terakhir diubah\n\n' +
    '💡 Berguna buat ngecek ukuran sebelum `download`/`copy`, tanpa perlu buka/list dulu',

  preview: '**preview** — lihat file langsung di chat\n\n' +
    '**Format:**\n' +
    '`preview <path>`\n' +
    '`preview <path> <pin>` (kalau file rahasia/≥50MB)\n\n' +
    '**Cara kerja:**\n' +
    '• Gambar dikirim sebagai attachment (Discord otomatis render inline)\n' +
    '• File TEKS (.txt/.md/.json/.js/.log/dst, sampai ~512KB) dibaca & ditampilkan langsung sebagai embed\n' +
    '• Tipe lain (PDF/docx/zip/dst) dikirim sebagai attachment biasa\n' +
    '• Cuma buat FILE (bukan folder — pakai `list` buat lihat isi folder), maks ~8MB (limit attachment Discord)\n\n' +
    '🔒 **Wajib PIN kalau:** file-nya ada di folder RAHASIA (CONFIDENTIAL_PATHS) — tiap akses (berhasil/gagal) dikirim alert ke email\n\n' +
    '💡 Shortcut cepat: `cd <file>` juga bisa dipakai buat preview versi attachment-apa-adanya',

  download: '**download** — upload ke Google Drive\n\n' +
    '**Format:**\n' +
    '`download <path>`\n' +
    '`download <path> <pin>` (kalau rahasia dan/atau ≥50MB)\n\n' +
    '**Cara kerja:**\n' +
    '• Ngirim file/folder ke folder staging Google Drive lewat rclone\n' +
    '• Progress bar di-update tiap beberapa detik\n' +
    '• Sisa kapasitas Drive dicek dulu sebelum mulai — kalau kurang, upload ditolak duluan (tidak ada percobaan gagal setengah jalan)\n\n' +
    '🔒 **Wajib PIN kalau:**\n' +
    '• Target ada di folder RAHASIA (CONFIDENTIAL_PATHS), dan/atau\n' +
    '• Ukurannya ≥50MB\n' +
    '_(mencegah bot crash/storage Drive penuh, download berulang kalau Discord-mu kena hack, dan data rahasia disalin keluar diam-diam)_',

  get dz() { return DETAILED_HELP.downloadzip; },
  get dlzip() { return DETAILED_HELP.downloadzip; },
  downloadzip: '**dz** / **downloadzip** / **dlzip** — compress ke .zip lalu upload ke Google Drive\n\n' +
    '**Format:** (ketiga nama ini alias, hasilnya sama persis)\n' +
    '`dz <path>`\n' +
    '`dz <path> <pin>` (kalau ukuran ASLI ≥50MB dan/atau rahasia)\n\n' +
    '**Cara kerja:**\n' +
    '• Mengompres file/folder jadi satu file `.zip`, langsung di-stream ke Google Drive (folder staging) sambil dikompres — TIDAK ada file `.zip` yang tersimpan di disk lokal sama sekali\n' +
    '• Cocok buat folder isinya banyak file kecil — upload jadi 1 koneksi aja (lebih hemat bandwidth & waktu dibanding `download` satu-satu)\n\n' +
    '🔒 **Wajib PIN kalau:** ukuran ASLI (sebelum di-zip) ≥50MB, atau file/foldernya ada di folder RAHASIA',

  clear: '**clear** — bersihin pesan preview\n\n' +
    '**Format:** `clear`\n\n' +
    '**Cara kerja:**\n' +
    '• Hapus semua pesan hasil `preview` yang masih "tercatat" di sesi ini\n' +
    '• Aman — cuma nyentuh pesan preview, command/chat lain nggak ikut kehapus\n\n' +
    '💡 Buat hapus SEMUA riwayat chat bot (bukan cuma preview), pakai `clearchat`',

  get clearall() { return DETAILED_HELP.clearchat; },
  clearchat: '**clearchat** — hapus SEMUA riwayat chat bot di DM ini (alias: `clearall`)\n\n' +
    '**Format:** `clearchat <pin>`\n\n' +
    '**Cara kerja:**\n' +
    '• Butuh PIN keamanan (lihat `?chgpin`), lalu konfirmasi tombol "Ya, Hapus Riwayat Chat Bot" / "Batal"\n' +
    '• Setelah dikonfirmasi, bot menghapus SEMUA pesannya sendiri di DM ini secara BERTAHAP (ada jeda antar hapus) supaya tidak kena rate-limit Discord — makin panjang riwayatnya, makin lama prosesnya\n' +
    '• Progress-nya ditampilkan berkala di 1 pesan yang sama sampai selesai\n' +
    '• Aksi ini TIDAK BISA dibatalkan setelah proses hapusnya mulai jalan\n\n' +
    '🔒 **Keterbatasan Discord API (bukan bug):** DM tidak punya `bulkDelete`/`MANAGE_MESSAGES` seperti server — bot HANYA boleh menghapus pesan **miliknya sendiri**. Pesan yang KAMU ketik sendiri (command, dll) TIDAK ikut terhapus otomatis; kalau mau, hapus manual lewat client Discord-mu\n\n' +
    '🤖 **Otomatis saat startup:** bot juga otomatis menyapu balasan-balasan lamanya sendiri (tanpa PIN, tanpa konfirmasi) tiap kali baru nyala/restart, supaya riwayat chat bot selalu "fresh". Bisa dimatikan lewat `AUTO_CLEAR_CHAT_ON_START=false` di .env\n\n' +
    '💡 Beda sama `clear`: `clear` cuma hapus pesan hasil `preview`, `clearchat` hapus SEMUA balasan bot',

  baterai: '**baterai** — cek status baterai laptop\n\n' +
    '**Format:** `baterai`\n\n' +
    '**Cara kerja:** nampilin\n' +
    '• Persentase baterai\n' +
    '• Lagi di-cas atau tidak\n' +
    '• Mode power yang lagi aktif (Server/Hemat/Custom)\n' +
    '• Kalau laptopnya PC desktop tanpa baterai, bakal dikasih tahu juga',

  disk: '**disk** — cek sisa storage laptop\n\n' +
    '**Format:** `disk`\n\n' +
    '**Cara kerja:**\n' +
    '• Nampilin total, terpakai, dan sisa kapasitas tiap drive lokal fisik di laptop (mis. C:, D:)\n' +
    '• Beda sama sisa kapasitas Google Drive yang dicek otomatis pas `download`\n\n' +
    '💡 Berguna dicek sebelum `copy`/`move` file besar biar nggak kehabisan space di tengah proses',

  network: '**network** — cek status koneksi jaringan\n\n' +
    '**Format:**\n' +
    '`network` — mode default\n' +
    '`network detail <pin>` atau `network -v <pin>` — mode detail\n\n' +
    '**Cara kerja (default):** nampilin semua koneksi aktif (Wi-Fi/LAN)\n' +
    '• Nama jaringan\n' +
    '• Kategori (🔒 Privat/🌍 Publik/🏢 Domain)\n' +
    '• Status internet\n' +
    '• Sinyal Wi-Fi\n\n' +
    '🔒 **Wajib PIN kalau:** mau lihat detail teknis (IP lokal, gateway, DNS, link speed, MAC) — disembunyikan default',

  mode: '**mode** — atur power plan laptop\n\n' +
    '**Format:**\n' +
    '`mode server`\n' +
    '`mode hemat`\n\n' +
    '**Cara kerja:**\n' +
    '• `mode server` — laptop nggak pernah sleep/hibernate (buat proses upload/download besar yang lama)\n' +
    '• `mode hemat` — balik ke default harian (sleep 15 menit, hibernate 3 jam)\n' +
    '• Ada verifikasi otomatis abis diubah, biar ketahuan kalau ada Group Policy/app lain yang nge-override',

  get message() { return DETAILED_HELP.msg; },
  msg: '**msg** — tampilkan popup pesan di layar laptop (alias: `message`)\n\n' +
    '**Format:** `msg "<pesan>" <durasi>`\n' +
    'Contoh: `msg "JANGAN MAIN GAME" 10s`\n\n' +
    '**Format durasi (fleksibel):**\n' +
    '• Angka polos = detik, mis. `30`\n' +
    '• Diakhiri `s`/`detik`, mis. `10s`\n' +
    '• Diakhiri `m`/`menit` buat menit, mis. `2m`\n\n' +
    '**Cara kerja:**\n' +
    '• Popup langsung MUNCUL DI LAYAR FISIK laptop (bukan cuma di Discord) — cocok buat pengingat ke orang yang lagi di depan laptop\n' +
    '• Otomatis tertutup sendiri kalau sudah sampai durasinya, walau tidak diklik "OK"\n' +
    '• Kalau pesan mengandung banyak kata TANPA tanda kutip, semuanya digabung jadi 1 pesan (kecuali kata terakhir yang dianggap durasi) — tapi lebih aman selalu bungkus pesan pakai tanda kutip `"..."`\n' +
    `• Batas durasi: ${MSG_MIN_SECONDS} detik s/d ${Math.round(MSG_MAX_SECONDS / 60)} menit, panjang pesan maks ${MSG_MAX_LENGTH} karakter\n\n` +
    '📌 Tidak butuh PIN — cuma menampilkan teks, tidak mengubah/mengakses data apa pun',

  shutdown: '**shutdown** — matikan laptop dari jarak jauh (butuh PIN)\n\n' +
    '**Format:** `shutdown <pin>`\n\n' +
    '**Cara kerja:**\n' +
    '• Laptop mati dalam 15 detik setelah command diterima & PIN valid\n' +
    '• Koneksi bot otomatis terputus begitu laptop mati\n' +
    '• Bot baru aktif lagi kalau laptopnya dinyalain manual (kecuali ada cara nyalain jarak jauh di luar bot ini, mis. Wake-on-LAN)\n\n' +
    '🔒 **PIN wajib** supaya kalau Discord-mu kena hack, penyerang tidak bisa asal matiin laptop',

  restart: '**restart** — restart laptop dari jarak jauh (butuh PIN)\n\n' +
    '**Format:** `restart <pin>`\n\n' +
    '**Cara kerja:**\n' +
    '• Sama kayak `shutdown` (15 detik delay, wajib PIN)\n' +
    '• Bedanya: laptop nyala lagi otomatis setelah Windows selesai booting\n' +
    '• Bot Nausync Cloud ikut aktif lagi otomatis (asalkan sudah di-setting auto-start lewat Task Scheduler)',

  chgpin: '**chgpin** — ganti PIN keamanan secara manual\n\n' +
    '**Format:** `chgpin <pin_lama>`\n\n' +
    '**Cara kerja:**\n' +
    '• Generate PIN baru secara acak (8 karakter, campur huruf besar/kecil & angka) & kirim ke email alert-mu (terpisah dari Discord)\n' +
    '• PIN lama langsung tidak berlaku\n' +
    '• Butuh PIN LAMA yang benar dulu (sama seperti ganti password pakai password lama)\n\n' +
    '📌 **Rotasi otomatis (di luar command ini):**\n' +
    '• PIN otomatis berganti sendiri (sekali pakai) setiap kali dipakai buat `shutdown`/`restart`/`purge`/`copy`/`move`/`download`/`dz`/preview folder rahasia\n' +
    '• PIN juga otomatis diganti tiap 90 hari walau tidak pernah dipakai sama sekali\n' +
    '• `chgpin` cuma perlu dipakai kalau mau ganti PIN kapan pun TANPA nunggu salah satu rotasi otomatis itu\n\n' +
    '⚠️ Salah PIN 5x berturut-turut → bot otomatis lockout 15 menit & kirim email alert. Kalau ini kejadian padahal bukan kamu, segera amankan akun Discord-mu',

  ':': '**Shortcut nomor (`:<angka>`)**\n\n' +
    '**Cara kerja:**\n' +
    '• Abis jalanin `list`, tiap item dapat nomor urut\n' +
    '• Command berikutnya (cd/copy/move/delete/download/dz/preview) bisa langsung rujuk nomor itu pakai `:<angka>` alih-alih ngetik ulang nama folder/file yang panjang\n' +
    '• Contoh: `list` lalu `cd :2`, atau `copy :3 Downloads`\n' +
    '• Nomornya ngikutin hasil `list` yang PALING TERAKHIR dijalankan\n\n' +
    '🆕 **Batch (`:N-:M` / `:N,:M,:P`):**\n' +
    'Khusus di `copy`/`move`/`delete`/`purge`, bisa rujuk BANYAK nomor sekaligus:\n' +
    '• `:3-:7` — range, nomor 3 sampai 7\n' +
    '• `:3,:5,:9` — daftar spesifik\n' +
    '• `:3-:7,:9` — boleh digabung\n\n' +
    '💡 Contoh: `delete :3-:7` hapus item nomor 3 sampai 7 ke trash sekaligus',
};

function getDetailedHelp(cmdName) {
  const entry = DETAILED_HELP[cmdName];
  if (entry) return entry;

  const topics = Object.keys(DETAILED_HELP).filter((k) => k !== ':').sort().join(', ');
  return `❓ Belum ada penjelasan detail buat "${cmdName}".\nTopik yang tersedia: ${topics} (juga \`?:\` buat shortcut nomor).`;
}


function tokenize(text) {
  // Normalisasi smart quotes (‘’“”) jadi straight quotes ('") — keyboard HP
  // (iOS/Android) sering auto-convert " jadi " " saat mengetik, yang bikin
  // regex quote-matching di bawah gagal cocok
  const normalized = text
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2018\u2019]/g, "'");

  const regex = /"([^"]+)"|(\S+)/g;
  const tokens = [];
  let match;
  while ((match = regex.exec(normalized)) !== null) {
    // Ambil string murni dari hasil regex matching teks
    tokens.push(match[1] ?? match[2]);
  }
  return tokens;
}

// --- UPGRADE KECEPATAN: getLocalSize() sekarang ASYNC & PARALEL ---
// Versi lama pakai fs.*Sync (existsSync/statSync/readdirSync) dipanggil
// REKURSIF ke semua subfolder secara SYNCHRONOUS. Untuk folder besar
// (ribuan file/subfolder di dalamnya — umum kejadian di "Documents" atau
// root "D" yang mencakup seluruh drive), itu nge-BLOCK event loop Node.js
// SEPENUHNYA selama proses hitung jalan. Selama blocking itu, bot TIDAK
// BISA balas heartbeat ke Discord gateway sama sekali — kalau durasinya
// cukup lama, risikonya bot ke-disconnect dari Discord sendiri (bukan
// cuma "kelihatan lemot", tapi bisa beneran putus koneksi).
//
// Versi ini pakai fs.promises (non-blocking, event loop tetap bisa proses
// hal lain di sela-sela I/O) DAN menghitung ukuran semua ANAK folder
// secara PARALEL sekaligus (Promise.all) alih-alih satu-satu berurutan —
// jadi selain tidak nge-block, totalnya juga selesai lebih cepat untuk
// folder yang isinya banyak subfolder/file.
async function getLocalSize(targetPath) {
  let stats;
  try {
    stats = await fs.promises.stat(targetPath);
  } catch {
    return 0;
  }

  if (stats.isFile()) return stats.size;
  if (!stats.isDirectory()) return 0;

  let entries;
  try {
    entries = await fs.promises.readdir(targetPath, { withFileTypes: true });
  } catch {
    return 0;
  }

  const sizes = await Promise.all(
    entries.map((entry) => getLocalSize(path.join(targetPath, entry.name)))
  );
  return sizes.reduce((sum, s) => sum + s, 0);
}

// --- UPGRADE KECEPATAN: cache sisa kapasitas Google Drive ---
// Sebelumnya SETIAP "download" dijalankan, bot spawn proses baru ("rclone
// about --json") yang hit Google Drive API buat cek sisa kapasitas —
// network round-trip + overhead spawn proses tiap kali, padahal kapasitas
// Drive jarang berubah drastis dalam hitungan menit (kecuali lagi upload
// besar-besaran secara bersamaan). Cache hasilnya 5 menit, supaya beberapa
// "download" berturut-turut (mis. download banyak file kecil satu-satu)
// tidak nunggu network call yang sama berulang-ulang — cukup sekali per
// jendela 5 menit. Kalau lookup gagal (rclone error), TIDAK ikut di-cache
// (biar percobaan berikutnya tetap retry, bukan macet di error lama).
const DRIVE_FREE_SPACE_CACHE_MS = 5 * 60 * 1000; // 5 menit
let driveFreeSpaceCache = { value: null, fetchedAt: 0 };

function getDriveFreeSpace() {
  const now = Date.now();
  if (driveFreeSpaceCache.value !== null && (now - driveFreeSpaceCache.fetchedAt) < DRIVE_FREE_SPACE_CACHE_MS) {
    return Promise.resolve(driveFreeSpaceCache.value);
  }

  return new Promise((resolve) => {
    exec(`rclone about "${config.rcloneRemote}:" --json`, (err, stdout) => {
      if (err) return resolve(Infinity);
      try {
        const data = JSON.parse(stdout.toString());
        const free = data.free || 0;
        driveFreeSpaceCache = { value: free, fetchedAt: Date.now() };
        resolve(free);
      } catch { resolve(Infinity); }
    });
  });
}

// Jalankan satu perintah powercfg, tangkap error/stderr-nya (jangan fire-and-forget)
// Pakai path absolut karena PATH environment proses Node (mis. dijalankan via
// Task Scheduler/service) kadang tidak menyertakan C:\Windows\System32
const POWERCFG_PATH = 'C:\\Windows\\System32\\powercfg.exe';

async function runPowercfg(args) {
  try {
    const { stdout, stderr } = await execAsync(`"${POWERCFG_PATH}" ${args}`);
    if (stderr && stderr.trim()) {
      throw new Error(stderr.trim());
    }
    return { ok: true, output: stdout.trim() };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

// Baca ulang nilai timeout yang benar-benar tersimpan di skema aktif, untuk verifikasi
async function getStandbyMinutes() {
  try {
    const { stdout } = await execAsync(`"${POWERCFG_PATH}" /query SCHEME_CURRENT SUB_SLEEP STANDBYIDLE`);
    const match = stdout.match(/Current AC Power Setting Index:\s*0x([0-9a-fA-F]+)/i);
    if (!match) return null;
    return Math.round(parseInt(match[1], 16) / 60);
  } catch {
    return null;
  }
}

// Baca info baterai lewat PowerShell (Win32_Battery via CIM). Pakai path
// absolut dengan alasan sama seperti POWERCFG_PATH: PATH env proses Node
// (mis. dijalankan via Task Scheduler/service) kadang tidak lengkap.
const POWERSHELL_PATH = 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe';

// Referensi nilai BatteryStatus (WMI Win32_Battery):
// 1=Discharging, 2=AC/tidak diketahui, 3=Fully Charged, 4=Low, 5=Critical,
// 6=Charging, 7=Charging & High, 8=Charging & Low, 9=Charging & Critical,
// 10=Undefined, 11=Partially Charged
function describeBatteryStatus(status) {
  const map = {
    1: { charging: false, label: 'Discharging' },
    2: { charging: false, label: 'AC tersambung' },
    3: { charging: false, label: 'Fully Charged (penuh)' },
    4: { charging: false, label: 'Low' },
    5: { charging: false, label: 'Critical' },
    6: { charging: true, label: 'Charging' },
    7: { charging: true, label: 'Charging (High)' },
    8: { charging: true, label: 'Charging (Low)' },
    9: { charging: true, label: 'Charging (Critical)' },
    10: { charging: false, label: 'Undefined' },
    11: { charging: false, label: 'Partially Charged' },
  };
  return map[status] || { charging: false, label: 'Tidak diketahui' };
}

async function getBatteryInfo() {
  const { stdout } = await execAsync(
    `"${POWERSHELL_PATH}" -NoProfile -NonInteractive -Command "Get-CimInstance -ClassName Win32_Battery | Select-Object EstimatedChargeRemaining,BatteryStatus | ConvertTo-Json -Compress"`
  );
  const trimmed = stdout.trim();
  if (!trimmed) return null; // biasanya berarti tidak ada baterai (PC desktop)

  const parsed = JSON.parse(trimmed);
  const battery = Array.isArray(parsed) ? parsed[0] : parsed;
  if (!battery || battery.EstimatedChargeRemaining === undefined) return null;
  return battery;
}

// Terjemahkan nilai standby timeout (AC) jadi label mode yang dikenal user,
// berdasarkan nilai yang di-set oleh command "mode server" (0 menit) dan
// "mode hemat" (15 menit). Kalau nilainya beda (mis. diubah manual lewat
// Settings Windows), tampilkan sebagai "Custom" biar tidak menyesatkan.
function describePowerMode(minutes) {
  if (minutes === null) return '❓ Tidak diketahui (gagal membaca setting power)';
  if (minutes === 0) return '🖥️ Mode Server (layar/sleep tidak pernah mati)';
  if (minutes === 15) return '🔋 Mode Hemat (sleep otomatis setelah 15 menit idle)';
  return `⚙️ Custom (standby timeout: ${minutes} menit, bukan dari "mode server"/"mode hemat")`;
}

// --- FITUR: "msg" / "message" — tampilkan popup pesan di layar laptop ---
//
// Dipakai buat kirim pengingat/peringatan yang MUNCUL LANGSUNG di layar
// fisik laptop (bukan cuma di Discord) — mis. `msg "JANGAN MAIN GAME" 10s`
// buat ngingetin orang di rumah yang lagi didepan laptopnya.
//
// --- KENAPA BUKAN msg.exe LAGI ---
// msg.exe (versi sebelumnya) ternyata TIDAK ADA sama sekali di Windows
// 10/11 edisi **Home** — binary itu cuma di-bundle di edisi Pro/Enterprise/
// Education/Server (bagian dari komponen Remote Desktop Services). Di
// laptop Home, manggil msg.exe SELALU gagal dengan ENOENT walau task
// Scheduler-nya sudah jalan sebagai SYSTEM — jadi bukan soal privilege,
// binary-nya memang tidak pernah ada di disk.
//
// --- KENAPA BUKAN WScript.Shell.Popup JUGA (versi sebelum msg.exe) ---
// WScript.Shell.Popup() (VBScript lewat cscript.exe) SECARA TEKNIS jalan
// di semua edisi, tapi popup-nya TIDAK PERNAH KELIHATAN kalau bot
// dijalankan lewat Task Scheduler dengan "Run whether user is logged on
// or not" — proses bot (dan cscript yang di-spawn olehnya) jalan di
// WINDOWS SESSION 0, terisolasi total dari desktop interaktif (Session
// 1+). Popup-nya "muncul" tapi di ruang hampa yang tidak pernah
// ditampilkan ke monitor manapun.
//
// --- SOLUSI: WTSSendMessage LANGSUNG (API di balik msg.exe) ---
// msg.exe sendiri cuma pembungkus tipis di atas fungsi WTSSendMessage
// dari wtsapi32.dll — Windows Terminal Services API yang MEMANG didesain
// buat ngirim pesan LINTAS SESSION (termasuk dari Session 0 ke session
// interaktif manapun yang aktif). Fungsi WTSSendMessage-nya sendiri ADA
// DI SEMUA EDISI Windows (dia bagian dari OS core, bukan komponen RDS
// yang di-strip di Home) — yang di-strip cuma binary msg.exe-nya.
//
// Jadi solusinya: panggil WTSSendMessage langsung lewat P/Invoke dari
// PowerShell (Add-Type + DllImport), skip msg.exe sama sekali. Script ini
// juga yang enumerasi semua session AKTIF (WTSEnumerateSessions) & kirim
// ke tiap satu — setara dengan `msg.exe *` (kirim ke semua session), tapi
// tidak bergantung sama sekali pada msg.exe ada atau tidak di disk.
//
// Syarat privilege-nya SAMA seperti sebelumnya: proses yang manggil
// (bot ini) harus jalan sebagai akun **SYSTEM** di Task Scheduler, supaya
// otomatis punya hak kirim pesan ke session manapun, termasuk ke layar
// LOGIN SCREEN sekalipun (laptop baru nyala, belum ada yang login).
//
// Cara ganti task jadi jalan sebagai SYSTEM: Task Scheduler > klik kanan
// task > Properties > tab General > "Change User or Group..." > ketik
// "SYSTEM" > OK.

// Parse durasi fleksibel: "10", "10s", "10detik", "2m", "2menit" (case-
// insensitive). Return jumlah DETIK (number), atau null kalau formatnya
// tidak dikenali sama sekali.
function parseMsgDuration(raw) {
  if (!raw) return null;
  const match = /^(\d+)\s*(s|sec|detik|d|m|min|menit)?$/i.exec(raw.trim());
  if (!match) return null;

  const value = parseInt(match[1], 10);
  const unit = (match[2] || 's').toLowerCase();
  const isMinuteUnit = unit.startsWith('m'); // "m"/"min"/"menit"

  const seconds = isMinuteUnit ? value * 60 : value;
  return Number.isFinite(seconds) && seconds > 0 ? seconds : null;
}

// Script WTSSendMessage ditulis ke file .ps1 sekali saat module di-load
// (sama pola seperti NETWORK_SCRIPT_PATH di atas) — nulis ke file asli
// menghindari masalah escaping tanda kutip/baris-baru saat teks pesan
// dilewatkan sebagai argumen -Message ke powershell.exe.
const MSG_SCRIPT_PATH = path.join(os.tmpdir(), 'nausync-desktop-message.ps1');

const MSG_PS_SCRIPT = `
param(
  [Parameter(Mandatory=$true)][string]$Message,
  [Parameter(Mandatory=$true)][int]$TimeoutSeconds
)

Add-Type @"
using System;
using System.Runtime.InteropServices;

public class NausyncWts {
    [StructLayout(LayoutKind.Sequential)]
    public struct WTS_SESSION_INFO {
        public int SessionId;
        public IntPtr pWinStationName;
        public int State;
    }

    [DllImport("wtsapi32.dll", SetLastError = true)]
    public static extern int WTSEnumerateSessions(IntPtr hServer, int Reserved, int Version, out IntPtr ppSessionInfo, out int pCount);

    [DllImport("wtsapi32.dll")]
    public static extern void WTSFreeMemory(IntPtr pMemory);

    [DllImport("wtsapi32.dll", CharSet = CharSet.Unicode, SetLastError = true)]
    public static extern bool WTSSendMessage(IntPtr hServer, int SessionId, string pTitle, int TitleLength, string pMessage, int MessageLength, int Style, int Timeout, out int pResponse, bool bWait);
}
"@

$hServer = [IntPtr]::Zero
$ppSessionInfo = [IntPtr]::Zero
$count = 0

$ok = [NausyncWts]::WTSEnumerateSessions($hServer, 0, 1, [ref]$ppSessionInfo, [ref]$count)
if (-not $ok) {
    Write-Error "WTSEnumerateSessions gagal (Win32 error: $([Runtime.InteropServices.Marshal]::GetLastWin32Error()))"
    exit 1
}

$title = "Nausync Cloud"
$structType = [NausyncWts+WTS_SESSION_INFO]
$sizeOfMethod = [Runtime.InteropServices.Marshal].GetMethod('SizeOf', [Type[]]@([Type]))
$structSize = $sizeOfMethod.Invoke($null, @($structType))
$ptrToStructMethod = [Runtime.InteropServices.Marshal].GetMethod('PtrToStructure', [Type[]]@([IntPtr], [Type]))
$sentCount = 0

# WTS_CONNECTSTATE_CLASS: 0 = WTSActive (session yang lagi login & aktif
# di layar). Session non-aktif (disconnected/listening/dst) dilewati sama
# seperti msg.exe "*" yang juga cuma broadcast ke session aktif.
for ($i = 0; $i -lt $count; $i++) {
    $addr = [IntPtr]::Add($ppSessionInfo, $i * $structSize)
    $info = $ptrToStructMethod.Invoke($null, @($addr, $structType))
    if ($info.State -eq 0) {
        $response = 0
        # PENTING: TitleLength & MessageLength di WTSSendMessage dihitung dalam
        # BYTE, bukan jumlah karakter. Karena string di sini Unicode (UTF-16,
        # 2 byte per karakter), pakai $title.Length/$Message.Length (jumlah
        # karakter) langsung bikin API cuma baca separuh string -> judul/pesan
        # kepotong di tengah (mis. "HATI HATI" jadi cuma "HATI"). GetByteCount
        # dengan encoding Unicode menghitung byte yang benar (termasuk aman
        # untuk karakter di luar BMP/emoji yang makan 4 byte).
        $titleBytes = [System.Text.Encoding]::Unicode.GetByteCount($title)
        $messageBytes = [System.Text.Encoding]::Unicode.GetByteCount($Message)
        [NausyncWts]::WTSSendMessage($hServer, $info.SessionId, $title, $titleBytes, $Message, $messageBytes, 0, $TimeoutSeconds, [ref]$response, $false) | Out-Null
        $sentCount++
    }
}

[NausyncWts]::WTSFreeMemory($ppSessionInfo)

if ($sentCount -eq 0) {
    Write-Error "Tidak ada session Windows yang sedang aktif/login untuk menerima popup."
    exit 1
}

Write-Output "OK:$sentCount"
`;

try {
  fs.writeFileSync(MSG_SCRIPT_PATH, MSG_PS_SCRIPT, 'utf-8');
} catch (err) {
  console.warn(`⚠️ Gagal menyiapkan script desktop-message.ps1: ${err.message}. Command "msg" mungkin gagal.`);
}

// Tampilkan popup di layar laptop berisi `text`, otomatis tertutup sendiri
// setelah `seconds` detik kalau tidak diklik duluan. Lewat WTSSendMessage
// (dipanggil dari PowerShell via P/Invoke) alih-alih msg.exe — lihat
// komentar panjang di atas kenapa msg.exe tidak bisa dipakai di Windows
// edisi Home. Fungsi ini di-AWAIT sampai script PowerShell-nya selesai;
// WTSSendMessage sendiri TIDAK menunggu popup ditutup/timeout (return
// instan setelah pesan terkirim ke session), jadi ini tetap cepat.
async function showDesktopMessage(text, seconds) {
  const singleLine = text.replace(/[\r\n]+/g, ' ');

  try {
    // execFile (bukan exec/spawn shell) -> argumen lewat array, jadi teks
    // pesan yang mengandung karakter spesial (&, |, ", dst.) tidak perlu
    // di-escape manual dan tidak bisa "kabur" jadi command shell terpisah.
    await execFileAsync(POWERSHELL_PATH, [
      '-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'Bypass',
      '-File', MSG_SCRIPT_PATH,
      '-Message', singleLine,
      '-TimeoutSeconds', String(seconds),
    ]);
  } catch (err) {
    const detail = (err.stderr || err.message || '').toString().trim().split('\n')[0];
    throw new Error(
      `Gagal mengirim popup ke layar laptop (${detail || 'unknown error'}). ` +
      `Kemungkinan task Task Scheduler bot ini belum jalan sebagai akun SYSTEM, atau ` +
      `belum ada session Windows yang aktif/login di laptop — ` +
      `cek Task Scheduler > Properties > General > "Change User or Group" > ganti ke "SYSTEM".`
    );
  }
}

// Baca info kapasitas semua drive fisik lokal yang "fixed" (DriveType 3 —
// bukan removable/CD/network), lewat PowerShell (Win32_LogicalDisk via CIM).
// Dipakai buat command "disk" — beda dari getDriveFreeSpace() yang ngecek
// sisa kapasitas Google Drive REMOTE (dipakai command "download").
async function getDiskInfo() {
  const { stdout } = await execAsync(
    `"${POWERSHELL_PATH}" -NoProfile -NonInteractive -Command "Get-CimInstance -ClassName Win32_LogicalDisk | Where-Object { $_.DriveType -eq 3 } | Select-Object DeviceID,Size,FreeSpace | ConvertTo-Json -Compress"`
  );
  const trimmed = stdout.trim();
  if (!trimmed) return [];
  const parsed = JSON.parse(trimmed);
  return Array.isArray(parsed) ? parsed : [parsed];
}

function formatBytes(bytes) {
  if (bytes === Infinity || bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// --- Info jaringan (command "network") ---
//
// Sumber data: "Get-NetConnectionProfile" (PowerShell) — satu entry per
// KONEKSI JARINGAN AKTIF (bisa lebih dari satu sekaligus, mis. laptop
// nyambung Wi-Fi DAN Ethernet bersamaan). Digabung dengan "Get-NetAdapter"
// (buat tahu tipe fisiknya: Wi-Fi atau Ethernet, status adapter, kecepatan
// link, MAC) dan "Get-NetIPConfiguration" (buat IP lokal, gateway, DNS).
//
// Kenapa tidak cuma "netsh wlan show interfaces"? Karena itu CUMA nampilin
// info Wi-Fi (Ethernet tidak kebaca sama sekali), dan output teksnya
// ter-LOKALISASI (label bahasa Inggris vs Indonesia beda tergantung setting
// Windows) jadi rawan salah parse. Get-NetConnectionProfile dkk itu
// terstruktur (properti .NET, bukan teks bebas) jadi jauh lebih stabil buat
// data UTAMA. netsh cuma dipakai sebagai TAMBAHAN opsional (buat sinyal
// Wi-Fi %), dengan parsing yang sengaja longgar (lihat parseWifiSignal)
// supaya tetap aman walau gagal cocok — bagian penting (kategori jaringan,
// IP, dll) tidak bergantung sama sekali ke netsh.
function isWifiMediaType(physicalMediaType) {
  return typeof physicalMediaType === 'string' && /802\.11|wireless/i.test(physicalMediaType);
}

// Parsing longgar buat ambil persentase sinyal Wi-Fi dari "netsh wlan show
// interfaces". Sengaja dibuat best-effort (bukan sumber data utama) karena
// output netsh ter-lokalisasi — label "Signal" bisa jadi "Sinyal" dsb
// tergantung bahasa Windows-nya. Kalau gagal cocok, return null dan command
// "network" tetap jalan normal tanpa baris sinyal (bukan error).
function parseWifiSignal(netshOutput) {
  const signalMatch = /^\s*(?:Signal|Sinyal)\s*:\s*(\d{1,3})%/im.exec(netshOutput);
  const radioMatch = /^\s*(?:Radio type|Jenis radio|Tipe radio)\s*:\s*(.+)$/im.exec(netshOutput);
  return {
    signalPercent: signalMatch ? parseInt(signalMatch[1], 10) : null,
    radioType: radioMatch ? radioMatch[1].trim() : null,
  };
}

// Script PowerShell buat command "network" ditulis ke file sementara lalu
// dijalankan lewat "-File" (bukan "-Command" satu baris) — SENGAJA begini,
// bukan gaya "-Command" satu baris seperti getDiskInfo/getBatteryInfo di
// atas, karena script ini punya percabangan if/else & assignment variabel
// bertingkat yang gampang salah parse kalau dipaksa jadi satu baris pakai
// titik-koma (terutama assignment hasil if/else ke dalam hashtable literal,
// yang butuh sintaks tambahan $(...) kalau dipaksa satu baris). Nulis ke
// file .ps1 asli menghindari seluruh masalah escaping/separator itu sama
// sekali — jauh lebih gampang dibaca & dipastikan benar.
const NETWORK_SCRIPT_PATH = path.join(os.tmpdir(), 'nausync-network-info.ps1');

const NETWORK_PS_SCRIPT = `
$profiles = Get-NetConnectionProfile
$result = foreach ($p in $profiles) {
  $adapter = Get-NetAdapter -InterfaceIndex $p.InterfaceIndex -ErrorAction SilentlyContinue
  $ipcfg = Get-NetIPConfiguration -InterfaceIndex $p.InterfaceIndex -ErrorAction SilentlyContinue
  $ipv4 = ($ipcfg.IPv4Address | Select-Object -First 1).IPAddress
  $gateway = ($ipcfg.IPv4DefaultGateway | Select-Object -First 1).NextHop
  $dns = @($ipcfg.DNSServer | Where-Object { $_.AddressFamily -eq 2 } | Select-Object -ExpandProperty ServerAddresses)

  $adapterStatus = $null
  $physicalMedia = $null
  $linkSpeed = $null
  $macAddress = $null
  if ($adapter) {
    $adapterStatus = $adapter.Status.ToString()
    $physicalMedia = $adapter.PhysicalMediaType
    $linkSpeed = $adapter.LinkSpeed
    $macAddress = $adapter.MacAddress
  }

  [PSCustomObject]@{
    Name = $p.Name
    InterfaceAlias = $p.InterfaceAlias
    NetworkCategory = $p.NetworkCategory.ToString()
    IPv4Connectivity = $p.IPv4Connectivity.ToString()
    IPv6Connectivity = $p.IPv6Connectivity.ToString()
    AdapterStatus = $adapterStatus
    PhysicalMediaType = $physicalMedia
    LinkSpeed = $linkSpeed
    MacAddress = $macAddress
    IPv4Address = $ipv4
    Gateway = $gateway
    DNSServers = $dns
  }
}
$result | ConvertTo-Json -Compress -Depth 4
`;

// Tulis script sekali aja saat module di-load (bukan tiap kali command
// "network" dipanggil) — isinya statis, tidak pernah berubah saat runtime.
try {
  fs.writeFileSync(NETWORK_SCRIPT_PATH, NETWORK_PS_SCRIPT, 'utf-8');
} catch (err) {
  console.warn(`⚠️ Gagal menyiapkan script network-info.ps1: ${err.message}. Command "network" mungkin gagal.`);
}

async function getNetworkInfo() {
  const { stdout } = await execAsync(
    `"${POWERSHELL_PATH}" -NoProfile -NonInteractive -ExecutionPolicy Bypass -File "${NETWORK_SCRIPT_PATH}"`
  );

  const trimmed = stdout.trim();
  if (!trimmed) return [];

  const parsed = JSON.parse(trimmed);
  const profiles = (Array.isArray(parsed) ? parsed : [parsed]).map((p) => ({
    ...p,
    DNSServers: Array.isArray(p.DNSServers) ? p.DNSServers : (p.DNSServers ? [p.DNSServers] : []),
    isWifi: isWifiMediaType(p.PhysicalMediaType),
  }));

  // Kalau ada minimal satu koneksi Wi-Fi, coba perkaya dengan sinyal % dari
  // netsh (best-effort, lihat parseWifiSignal). Cukup dipanggil sekali
  // (bukan per-profile) karena hampir semua laptop cuma punya 1 adapter
  // Wi-Fi fisik; kalaupun gagal/tidak cocok, profile Wi-Fi tetap tampil
  // tanpa baris sinyal.
  if (profiles.some((p) => p.isWifi)) {
    try {
      const { stdout: netshOut } = await execAsync('netsh wlan show interfaces');
      const wifiExtra = parseWifiSignal(netshOut);
      for (const p of profiles) {
        if (p.isWifi) {
          p.signalPercent = wifiExtra.signalPercent;
          p.radioType = wifiExtra.radioType;
        }
      }
    } catch {
      // netsh gagal/tidak tersedia -> lewati saja, bukan fatal buat command "network"
    }
  }

  return profiles;
}

function describeNetworkCategory(category) {
  switch (category) {
    case 'Public':
      return '🌍 **Publik** — laptop ini disembunyikan dari perangkat lain di jaringan yang sama (lebih aman dipakai di Wi-Fi umum/kafe/hotel)';
    case 'Private':
      return '🔒 **Privat** — laptop ini bisa "ditemukan" perangkat lain di jaringan yang sama (cocok untuk Wi-Fi/LAN rumah sendiri yang dipercaya, TAPI berisiko kalau ternyata dipakai di jaringan publik)';
    case 'DomainAuthenticated':
      return '🏢 **Domain** — jaringan kantor/organisasi yang terkelola (Active Directory)';
    default:
      return `❓ ${category || 'Tidak diketahui'}`;
  }
}

function describeConnectivity(v4, v6) {
  if (v4 === 'Internet' || v6 === 'Internet') return '✅ Terhubung ke Internet';
  if (v4 === 'LocalNetwork' || v6 === 'LocalNetwork') return '⚠️ Cuma nyambung ke jaringan lokal (tidak ada akses Internet)';
  if (v4 === 'NoTraffic' || v6 === 'NoTraffic') return '⚠️ Nyambung tapi belum ada traffic terdeteksi';
  return '❌ Tidak terhubung';
}

// Default-nya CUMA nampilin info inti yang relevan buat tujuan command ini
// (cek nyambung ke jaringan apa & privat/publik apa nggak): tipe koneksi,
// nama jaringan, kategori, status internet, dan sinyal Wi-Fi kalau ada.
//
// IP lokal/gateway/DNS/link speed/MAC address SENGAJA disembunyikan di
// mode default — bukan karena itu rahasia besar (IP lokal/gateway/DNS
// cuma alamat privat, tidak bisa diakses dari luar LAN sama sekali, dan
// MAC address cuma berguna buat orang yang SUDAH ada di jaringan fisik
// yang sama), tapi karena tidak ada gunanya buat pertanyaan "lagi nyambung
// ke jaringan apa" — dan prinsip "jangan tampilkan lebih dari yang
// dibutuhkan" tetap berlaku walau risikonya rendah, apalagi MAC address
// bisa dipakai buat fingerprinting perangkat kalau suatu saat histori
// chat ini kebaca orang lain (mis. Discord kena hack). Detail teknis ini
// tetap tersedia buat troubleshooting lewat `network detail`.
function formatNetworkProfile(p, verbose) {
  const typeLabel = p.isWifi ? '📶 Wi-Fi' : '🔌 LAN (Ethernet)';
  const lines = [
    `${typeLabel} — **${p.Name || p.InterfaceAlias || 'Tidak diketahui'}**`,
    `• Kategori jaringan: ${describeNetworkCategory(p.NetworkCategory)}`,
    `• Status: ${describeConnectivity(p.IPv4Connectivity, p.IPv6Connectivity)}`,
  ];
  if (p.isWifi && p.signalPercent !== null && p.signalPercent !== undefined) {
    lines.push(`• Sinyal Wi-Fi: **${p.signalPercent}%**`);
  }

  if (!verbose) return lines.join('\n');

  lines.push(`• Interface: \`${p.InterfaceAlias}\`${p.AdapterStatus ? ` (${p.AdapterStatus})` : ''}`);
  if (p.IPv4Address) lines.push(`• IP Lokal: \`${p.IPv4Address}\``);
  if (p.Gateway) lines.push(`• Gateway: \`${p.Gateway}\``);
  if (p.DNSServers && p.DNSServers.length) lines.push(`• DNS: ${p.DNSServers.map((d) => `\`${d}\``).join(', ')}`);
  if (p.LinkSpeed) lines.push(`• Kecepatan Link: ${p.LinkSpeed}`);
  if (p.isWifi && p.radioType) lines.push(`• Radio: ${p.radioType}`);
  if (p.MacAddress) lines.push(`• MAC Address: \`${p.MacAddress}\``);
  return lines.join('\n');
}

// Ekstensi yang dianggap "gambar" — dikirim sebagai attachment biasa,
// karena Discord SUDAH otomatis render attachment gambar inline (jadi
// nggak perlu ditangani khusus lagi, beda sama dulu yang cuma nampilin path).
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg']);

// Ekstensi yang dianggap "teks" — isinya dibaca & ditampilkan LANGSUNG di
// embed Discord (bukan cuma dikirim sebagai attachment yang harus diklik
// dulu buat baca isinya).
const TEXT_EXTENSIONS = new Set([
  '.txt', '.md', '.json', '.js', '.ts', '.jsx', '.tsx', '.csv', '.log',
  '.yml', '.yaml', '.xml', '.html', '.css', '.ini', '.py', '.java',
  '.c', '.cpp', '.sh', '.bat', '.env.example',
]);

// Batas umum attachment Discord buat bot non-boost server (~8MB). DM
// pribadi biasanya ikut batas yang sama.
const MAX_PREVIEW_SIZE = 8 * 1024 * 1024;

// Batas file teks yang masih nyaman dibaca lewat embed (jauh di bawah
// MAX_PREVIEW_SIZE) — di atas ini, baca isinya lebih enak lewat download.
const MAX_TEXT_PREVIEW_SIZE = 512 * 1024;

// Embed Discord dibatasi ~4096 karakter di field "description" — dikasih
// buffer di bawahnya biar aman dari batas persis.
const MAX_TEXT_EMBED_CHARS = 3500;

// Preview "LAMA" — kirim file APA ADANYA sebagai attachment Discord (foto
// otomatis kebuka inline, dokumen lain bisa didownload dari chat). Ini
// behavior preview versi sebelumnya, sekarang dipertahankan sebagai
// fallback buat tipe file yang bukan gambar/teks, dan dipakai langsung oleh
// shortcut "cd <file>".
async function sendAttachmentPreview(absPath, dscMessage, stats) {
  if (stats.size > MAX_PREVIEW_SIZE) {
    return `❌ File terlalu besar untuk preview (*${formatBytes(stats.size)}*, batas ~8MB). Pakai "download" untuk kirim ke Google Drive.`;
  }

  const fileName = path.basename(absPath);
  const sentMsg = await dscMessage.reply({
    ...toEmbedPayload(`👀 **Preview:** \`${fileName}\` (${formatBytes(stats.size)})`),
    files: [{ attachment: absPath, name: fileName }],
  });

  previewMessages.push(sentMsg.id);
  savePreviewMessages();
  return null;
}

// Preview "BARU" — gambar tetap dikirim sebagai attachment (Discord
// otomatis render inline), tapi file TEKS dibaca isinya & ditampilkan
// LANGSUNG sebagai embed (nggak perlu klik/download lagi buat baca
// kontennya). Tipe lain (PDF/docx/zip/dst) fallback ke attachment biasa.
async function sendRichPreview(absPath, dscMessage, stats) {
  const ext = path.extname(absPath).toLowerCase();
  const fileName = path.basename(absPath);

  if (TEXT_EXTENSIONS.has(ext) && stats.size <= MAX_TEXT_PREVIEW_SIZE) {
    const raw = await fs.promises.readFile(absPath, 'utf-8').catch(() => null);
    if (raw !== null) {
      const truncated = raw.length > MAX_TEXT_EMBED_CHARS;
      const body = truncated ? raw.slice(0, MAX_TEXT_EMBED_CHARS) : raw;
      const lang = ext.replace('.', '');

      const embed = {
        title: `📄 ${fileName}`,
        description: '```' + lang + '\n' + body + '\n```' +
          (truncated ? `\n_(dipotong — cuma ${MAX_TEXT_EMBED_CHARS} karakter pertama dari ${raw.length}, pakai "download" buat isi lengkap)_` : ''),
        color: COLORS.info,
        footer: { text: formatBytes(stats.size) },
      };

      const sentMsg = await dscMessage.reply({ embeds: [embed] });
      previewMessages.push(sentMsg.id);
      savePreviewMessages();
      return null;
    }
    // Gagal dibaca sebagai UTF-8 (mis. ternyata bukan teks murni) -> fallback
  }

  // Gambar & tipe lain (termasuk teks yang kegedean buat embed) -> attachment biasa
  return sendAttachmentPreview(absPath, dscMessage, stats);
}

// Logic bersama buat command "preview" dan shortcut "cd <file>": validasi
// path, cek PIN (folder RAHASIA dan/atau ukuran ≥50MB), kirim alert email
// kalau relevan, lalu dispatch ke mode tampilan yang sesuai ('rich' buat
// command preview biasa, 'legacy' buat shortcut cd-ke-file).
async function runPreview(args, dscMessage, mode) {
  if (args.length < 1) return 'Format: `preview <path>` (atau `preview <path> <pin>` kalau file-nya rahasia/besar)';
  if (!dscMessage) return 'Fitur preview cuma bisa dipakai lewat Discord.';

  const targetPath = resolvePathArg(args[0]);
  const absPath = resolveForRclone(targetPath);

  if (!fs.existsSync(absPath)) return `❌ File tidak ditemukan.`;

  const stats = fs.statSync(absPath);
  if (stats.isDirectory()) {
    return `❌ "${args[0]}" adalah folder, bukan file. Pakai "list" untuk lihat isinya.`;
  }

  const needsConfidentialPin = isConfidential(absPath);
  const needsSizePin = stats.size >= PIN_SIZE_THRESHOLD;

  if (needsConfidentialPin || needsSizePin) {
    if (args.length < 2) {
      const label = needsConfidentialPin
        ? `🔒 **Data ini bersifat RAHASIA.** File \`${toDisplayPath(targetPath)}\` ada di folder yang ditandai rahasia — butuh PIN keamanan buat preview.`
        : `🔒 **Ukuran ${formatBytes(stats.size)} (≥50MB).** Preview file sebesar ini wajib PIN keamanan.`;
      return `${label}\nFormat: \`preview ${args[0]} <pin>\``;
    }

    const reason = needsConfidentialPin
      ? `preview folder rahasia: ${toDisplayPath(targetPath)}`
      : `preview file besar (${formatBytes(stats.size)}): ${toDisplayPath(targetPath)}`;
    await requirePin(args, reason);

    if (needsConfidentialPin) {
      sendAlertEmail(
        '🔓 Preview folder RAHASIA diakses',
        `File rahasia "${toDisplayPath(targetPath)}" berhasil di-preview dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, PIN-mu sudah bocor dan data rahasiamu baru saja dibaca orang lain — segera amankan akun Discord-mu.`
      ).catch(() => {});
    }
  }

  return mode === 'legacy'
    ? sendAttachmentPreview(absPath, dscMessage, stats)
    : sendRichPreview(absPath, dscMessage, stats);
}

// --- Batch runner: copy/move ---
// srcVirtuals = array virtual path hasil resolveBatchRefs(). restArgs =
// argumen SISA setelah src (posisi 0 = folder tujuan, posisi 1 = PIN kalau
// ada). Semua src digabung ke SATU folder tujuan yang sama (beda dengan
// mode single yang tujuannya bisa nama file baru/rename) — nama file di
// tujuan mengikuti nama asli masing-masing item, jadi cocoknya buat
// "pindahin banyak file ke satu folder", bukan buat rename massal.
async function runBatchCopyOrMove(action, srcVirtuals, restArgs, dscMessage) {
  if (restArgs.length < 1) {
    return `Format: \`${action} :N-:M <folder_tujuan>\` (atau \`:N,:M,:P\`) — tambahkan PIN di akhir kalau ada item rahasia dan/atau ukuran ≥50MB: \`${action} :3-:7 <folder_tujuan> <pin>\``;
  }

  const dstFolderArgRaw = restArgs[0];
  const dstFolderVirtual = resolvePathArg(dstFolderArgRaw);

  // Validasi semua src ADA dulu sebelum eksekusi apa pun — biar batch tidak
  // "nyangkut" separuh jalan gara-gara satu item ternyata sudah tidak ada.
  const items = [];
  for (const srcVirtual of srcVirtuals) {
    let absSrc;
    try {
      absSrc = resolveForRclone(srcVirtual);
    } catch (err) {
      return `❌ Gagal: ${err.message}`;
    }
    if (!fs.existsSync(absSrc)) {
      return `❌ Gagal: \`${toDisplayPath(srcVirtual)}\` tidak ditemukan. Batch dibatalkan, tidak ada yang diproses.`;
    }
    const size = await getLocalSize(absSrc);
    items.push({
      srcVirtual,
      absSrc,
      size,
      needsConfidentialPin: isConfidential(absSrc),
      needsSizePin: size >= PIN_SIZE_THRESHOLD,
    });
  }

  const pinItems = items.filter((it) => it.needsConfidentialPin || it.needsSizePin);
  let pinArgLeft = restArgs.slice(1);

  if (pinItems.length > 0) {
    if (pinArgLeft.length < 1) {
      const confidentialCount = pinItems.filter((it) => it.needsConfidentialPin).length;
      const label = confidentialCount > 0
        ? `🔒 **${pinItems.length} dari ${items.length} item butuh PIN** (ada yang RAHASIA dan/atau ukurannya ≥50MB):`
        : `🔒 **${pinItems.length} dari ${items.length} item butuh PIN** (ukurannya ≥50MB):`;
      return `${label}\n${formatBatchItemList(pinItems.map((it) => it.srcVirtual))}\nTambahkan PIN di akhir argumen batch: \`${action} <batch> ${dstFolderArgRaw} <pin>\``;
    }
    const reason = `${action} batch (${items.length} item, ${pinItems.length} butuh PIN): ${formatBatchItemList(pinItems.map((it) => it.srcVirtual)).replace(/\n/g, ' | ')}`;
    await requirePin(restArgs, reason);
  }

  const successes = [];
  const failures = [];

  for (const item of items) {
    const itemDstVirtual = `${dstFolderVirtual === '.' ? '' : dstFolderVirtual + '/'}${path.posix.basename(item.srcVirtual)}`;
    try {
      if (action === 'copy') {
        await copyPath(item.srcVirtual, itemDstVirtual);
      } else {
        await movePath(item.srcVirtual, itemDstVirtual);
      }
      successes.push(item.srcVirtual);
    } catch (err) {
      failures.push(`${toDisplayPath(item.srcVirtual)} — ${err.message}`);
    }
  }

  if (pinItems.length > 0 && pinItems.some((it) => it.needsConfidentialPin)) {
    sendAlertEmail(
      `🔓 ${action === 'copy' ? 'Copy' : 'Move'} batch RAHASIA dijalankan`,
      `Batch ${action} (${items.length} item, tujuan "${toDisplayPath(dstFolderVirtual)}") berhasil dijalankan dengan PIN yang valid pada ${new Date().toISOString()}, termasuk item RAHASIA:\n\n${formatBatchItemList(pinItems.filter((it) => it.needsConfidentialPin).map((it) => it.srcVirtual))}\n\nKalau ini bukan kamu, PIN-mu sudah bocor — segera amankan akun Discord-mu.`
    ).catch(() => {});
  }

  const actionLabel = action === 'copy' ? 'Copy' : 'Move';
  let msg = `✅ **${actionLabel} batch selesai** ke \`${toDisplayPath(dstFolderVirtual)}\`: ${successes.length} berhasil, ${failures.length} gagal (dari ${items.length} item).`;
  if (failures.length > 0) {
    msg += `\n\n❌ **Gagal:**\n${failures.slice(0, BATCH_DISPLAY_LIMIT).map((f) => `• ${f}`).join('\n')}`;
    if (failures.length > BATCH_DISPLAY_LIMIT) msg += `\n_(+${failures.length - BATCH_DISPLAY_LIMIT} lainnya, cek log server)_`;
  }
  return msg;
}

// --- Batch runner: delete (ke trash, sama seperti delete single) ---
// restArgs = argumen SISA setelah target batch (posisi 0 = PIN, kalau ada
// item RAHASIA di dalam batch-nya).
async function runBatchDelete(targetVirtuals, restArgs) {
  const items = [];
  for (const targetVirtual of targetVirtuals) {
    let absTarget;
    try {
      absTarget = resolveForRclone(targetVirtual);
    } catch (err) {
      return `❌ Gagal: ${err.message}`;
    }
    if (!fs.existsSync(absTarget)) {
      return `❌ Gagal: \`${toDisplayPath(targetVirtual)}\` tidak ditemukan. Batch dibatalkan, tidak ada yang diproses.`;
    }
    items.push({ targetVirtual, absTarget, needsConfidentialPin: isConfidential(absTarget) });
  }

  const confidentialItems = items.filter((it) => it.needsConfidentialPin);

  if (confidentialItems.length > 0) {
    if (restArgs.length < 1) {
      return `🔒 **${confidentialItems.length} dari ${items.length} item bersifat RAHASIA**, butuh PIN keamanan buat dihapus (dipindah ke trash):\n${formatBatchItemList(confidentialItems.map((it) => it.targetVirtual))}\nTambahkan PIN di akhir argumen batch: \`delete <batch> <pin>\``;
    }
    const reason = `delete batch (${items.length} item, ${confidentialItems.length} rahasia): ${formatBatchItemList(confidentialItems.map((it) => it.targetVirtual)).replace(/\n/g, ' | ')}`;
    await requirePin(restArgs, reason);
  }

  const successes = [];
  const failures = [];
  for (const item of items) {
    try {
      await deletePath(item.targetVirtual);
      successes.push(item.targetVirtual);
    } catch (err) {
      failures.push(`${toDisplayPath(item.targetVirtual)} — ${err.message}`);
    }
  }

  if (confidentialItems.length > 0) {
    sendAlertEmail(
      '🗑️ Delete (ke trash) batch RAHASIA dijalankan',
      `Batch delete (${items.length} item, ${confidentialItems.length} rahasia) berhasil dijalankan dengan PIN yang valid pada ${new Date().toISOString()}:\n\n${formatBatchItemList(confidentialItems.map((it) => it.targetVirtual))}\n\nKalau ini bukan kamu, PIN-mu sudah bocor — segera amankan akun Discord-mu. Datanya masih bisa dipulihkan dari trash selama belum di-"purge" atau kena auto-purge retensi.`
    ).catch(() => {});
  }

  let msg = `🗑️ **Delete batch selesai:** ${successes.length}/${items.length} item dipindah ke trash (belum permanen — pakai \`purge\` atau tunggu auto-purge ${config.trashRetentionDays} hari).`;
  if (failures.length > 0) {
    msg += `\n\n❌ **Gagal:**\n${failures.slice(0, BATCH_DISPLAY_LIMIT).map((f) => `• ${f}`).join('\n')}`;
    if (failures.length > BATCH_DISPLAY_LIMIT) msg += `\n_(+${failures.length - BATCH_DISPLAY_LIMIT} lainnya)_`;
  }
  return msg;
}

// --- Batch runner: purge (hapus permanen, butuh PIN + 1 konfirmasi buat semua item) ---
async function runBatchPurge(targetVirtuals, dscMessage) {
  if (!dscMessage) {
    return '❌ Command `purge` butuh konfirmasi tombol, cuma bisa dipakai lewat Discord.';
  }

  const items = [];
  for (const targetVirtual of targetVirtuals) {
    let absPath;
    try {
      absPath = resolveForRclone(targetVirtual);
    } catch (err) {
      return `❌ Gagal: ${err.message}`;
    }
    if (!fs.existsSync(absPath)) {
      return `❌ Gagal: \`${toDisplayPath(targetVirtual)}\` tidak ditemukan. Batch dibatalkan, tidak ada yang diproses.`;
    }
    items.push(targetVirtual);
  }

  const confirmRow = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId('purge_yes').setLabel(`Ya, Hapus ${items.length} Item Permanen`).setStyle(ButtonStyle.Danger),
    new ButtonBuilder().setCustomId('purge_no').setLabel('Batal').setStyle(ButtonStyle.Secondary),
  );

  const confirmMsg = await dscMessage.reply({
    ...toEmbedPayload(`⚠️ **Yakin mau hapus PERMANEN ${items.length} item ini?**\n${formatBatchItemList(items)}\nAksi ini TIDAK BISA dibatalkan (beda sama \`delete\` biasa yang cuma masuk trash).`),
    components: [confirmRow],
  });

  return new Promise((resolve) => {
    let settled = false;

    const collector = confirmMsg.createMessageComponentCollector({
      componentType: ComponentType.Button,
      time: 60 * 1000,
    });

    collector.on('collect', async (interaction) => {
      if (interaction.user.id !== dscMessage.author.id) {
        await interaction.reply({ ...toEmbedPayload('⚠️ Command ini bukan punya kamu.'), ephemeral: true }).catch(() => {});
        return;
      }

      settled = true;
      collector.stop();

      if (interaction.customId === 'purge_yes') {
        const successes = [];
        const failures = [];
        for (const targetVirtual of items) {
          try {
            await purgePath(targetVirtual);
            successes.push(targetVirtual);
          } catch (err) {
            failures.push(`${toDisplayPath(targetVirtual)} — ${err.message}`);
          }
        }

        sendAlertEmail(
          `✅ Command "purge" batch berhasil dieksekusi (${successes.length} item)`,
          `Batch purge (${items.length} item diminta, ${successes.length} berhasil DIHAPUS PERMANEN) dengan PIN yang valid pada ${new Date().toISOString()}:\n\n${formatBatchItemList(successes)}${failures.length ? `\n\nGAGAL (${failures.length}):\n${failures.join('\n')}` : ''}\n\nKalau ini bukan kamu, segera amankan akun Discord-mu — file-file ini TIDAK BISA dikembalikan.`
        ).catch(() => {});

        let content = `🗑️ **Terhapus permanen:** ${successes.length}/${items.length} item.`;
        if (failures.length) content += `\n\n❌ Gagal:\n${failures.slice(0, BATCH_DISPLAY_LIMIT).join('\n')}`;
        await interaction.update({ content: null, ...toEmbedPayload(content), components: [] }).catch(() => {});
      } else {
        await interaction.update({
          content: null,
          ...toEmbedPayload(`Dibatalkan. ${items.length} item tidak jadi dihapus permanen.`),
          components: [],
        }).catch(() => {});
      }

      resolve(null);
    });

    collector.on('end', () => {
      if (!settled) {
        confirmMsg.edit({
          content: null,
          ...toEmbedPayload(`⏱️ Konfirmasi kadaluarsa. ${items.length} item tidak jadi dihapus permanen.`),
          components: [],
        }).catch(() => {});
        resolve(null);
      }
    });
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// --- FITUR: hapus SEMUA pesan BOT (bukan pesan owner) di sebuah channel ---
//
// Dipakai bareng-bareng oleh 2 pemicu:
// 1. Command manual "clearchat" (lihat runClearChatBot di bawah) — lewat
//    dscMessage, ada konfirmasi tombol dulu.
// 2. Auto-sweep saat bot baru nyala (lihat index.js, client.once('ready'))
//    — tanpa dscMessage/konfirmasi, dipanggil otomatis tiap startup kalau
//    config.autoClearChatOnStart aktif, supaya riwayat balasan bot dari
//    sesi SEBELUMNYA (yang mungkin masih ketinggalan di DM) ikut disapu
//    bersih setiap kali bot baru hidup lagi.
//
// KETERBATASAN PENTING (Discord API, bukan pilihan desain): channel DM
// tidak punya konsep permission "MANAGE_MESSAGES" seperti server/guild —
// endpoint delete message cuma ngizinin PENULIS ASLI pesan itu yang hapus.
// Jadi bot HANYA bisa menghapus balasan-balasannya SENDIRI, TIDAK BISA
// menghapus pesan command yang diketik owner sendiri (itu cuma bisa
// dihapus manual lewat client Discord). Fungsi ini jujur soal batasan itu
// lewat `skippedCount` di hasilnya, bukan pura-pura bisa menghapus semua.
//
// KENAPA BERTAHAP (bukan bulkDelete sekali tembak): (1) channel.bulkDelete
// SAMA SEKALI tidak berlaku di DM (cuma jalan di text channel guild), jadi
// memang harus hapus satu-satu lewat msg.delete(); (2) hapus satu-satu
// beruntun tanpa jeda gampang kena rate-limit Discord (429) yang endingnya
// malah retry storm/proses macet. Makanya tiap hapus dikasih jeda kecil
// (CLEAR_CHAT_DELETE_DELAY_MS).
const CLEAR_CHAT_DELETE_DELAY_MS = 350;
const CLEAR_CHAT_PROGRESS_EVERY = 25;
const CLEAR_CHAT_FETCH_PAGE_SIZE = 100; // limit maksimal Discord per fetch

/**
 * Hapus semua pesan yang authorId-nya === botId di `channel`, bertahap
 * (fetch per halaman + jeda tiap delete). `options.skipMessageId` (opsional)
 * dipakai buat "melindungi" 1 pesan tertentu supaya TIDAK ikut dihapus (mis.
 * pesan progress command "clearchat" yang masih mau dipakai nampilin hasil
 * akhir). `options.onProgress(stats)` (opsional) dipanggil berkala tiap
 * CLEAR_CHAT_PROGRESS_EVERY pesan berhasil dihapus.
 *
 * Return { deletedCount, skippedCount, scanned, error? }.
 */
export async function clearBotMessagesInChannel(channel, botId, options = {}) {
  const { skipMessageId = null, onProgress = null } = options;

  let deletedCount = 0;
  let skippedCount = 0; // pesan milik owner sendiri, tidak bisa dihapus bot
  let scanned = 0;
  let cursor; // id pesan TERLAMA yang sudah dilihat, buat paginasi "before"

  while (true) {
    let batch;
    try {
      batch = await channel.messages.fetch(
        cursor ? { limit: CLEAR_CHAT_FETCH_PAGE_SIZE, before: cursor } : { limit: CLEAR_CHAT_FETCH_PAGE_SIZE }
      );
    } catch (err) {
      return { deletedCount, skippedCount, scanned, error: err };
    }

    if (batch.size === 0) break;

    for (const msg of batch.values()) {
      scanned++;
      cursor = msg.id;

      if (skipMessageId && msg.id === skipMessageId) continue;

      if (msg.author?.id !== botId) {
        // Batasan Discord API (lihat komentar besar di atas fungsi ini) —
        // pesan bukan milik bot tidak bisa dihapus otomatis di sini.
        skippedCount++;
        continue;
      }

      try {
        await msg.delete();
        deletedCount++;
      } catch {
        // Sudah kehapus manual duluan / race condition lain — lewati saja,
        // tidak perlu menghentikan seluruh proses gara-gara 1 pesan gagal.
      }

      await sleep(CLEAR_CHAT_DELETE_DELAY_MS);

      if (onProgress && deletedCount > 0 && deletedCount % CLEAR_CHAT_PROGRESS_EVERY === 0) {
        await onProgress({ deletedCount, skippedCount, scanned }).catch(() => {});
      }
    }

    if (batch.size < CLEAR_CHAT_FETCH_PAGE_SIZE) break; // sudah halaman terakhir
  }

  return { deletedCount, skippedCount, scanned };
}

async function runClearChatBot(dscMessage) {
  const channel = dscMessage.channel;
  const botId = dscMessage.client.user.id;

  const progressMsg = await dscMessage.reply(
    toEmbedPayload('🧹 **Mulai menghapus riwayat chat bot...** Proses berjalan bertahap, ini bisa makan waktu kalau riwayatnya panjang. Jangan kirim command lain dulu.')
  );

  const result = await clearBotMessagesInChannel(channel, botId, {
    skipMessageId: progressMsg.id,
    onProgress: async ({ deletedCount, scanned }) => {
      await progressMsg.edit(
        toEmbedPayload(`🧹 **Menghapus riwayat chat bot...** ${deletedCount} pesan bot terhapus sejauh ini (${scanned} pesan sudah discan).`)
      );
    },
  });

  // Pesan preview yang tercatat otomatis ikut lenyap kalau memang berupa
  // balasan bot — kosongkan catatannya juga biar tidak "nyangkut" merujuk
  // ID pesan yang sudah tidak ada.
  previewMessages.length = 0;
  savePreviewMessages();

  if (result.error) {
    await progressMsg.edit(
      toEmbedPayload(`⚠️ **Berhenti di tengah jalan** — gagal ambil pesan berikutnya: ${result.error.message}\nSudah terhapus: **${result.deletedCount}** pesan bot (dari ${result.scanned} pesan discan).`)
    ).catch(() => {});
    return null;
  }

  const finalText =
    `✅ **Selesai membersihkan riwayat chat bot!**\n` +
    `• Pesan bot yang terhapus: **${result.deletedCount}**\n` +
    (result.skippedCount > 0
      ? `• Pesan kamu sendiri yang TIDAK ikut terhapus: **${result.skippedCount}** _(keterbatasan Discord API — bot cuma boleh hapus pesan miliknya sendiri di DM; hapus manual kalau perlu)_\n`
      : '');

  await progressMsg.edit(toEmbedPayload(finalText)).catch(() => {});
  return null;
}

// Logic bersama buat command "list" dan "cdl"/"cdlist" (cd + list sekaligus):
// render isi folder (nomor urut, ikon 🔒 confidential, pagination kalau
// kepanjangan). Return STRING kalau muat 1 pesan, atau null kalau sudah
// dikirim manual lewat dscMessage.reply() (mode pagination tombol ◀️▶️).
async function runList(targetDir, dscMessage) {
  const entries = await listDir(targetDir);
  if (!entries.length) return `Folder \`${displayDir()}\` kosong.`;

  // Kelompokkan folder dulu baru file, urut alfabetis (case-insensitive),
  // beri nomor urut + ikon supaya lebih gampang dibaca/di-scan
  const collator = new Intl.Collator('id', { sensitivity: 'base' });
  const dirs = entries.filter((e) => e.endsWith('/')).sort(collator.compare);
  const files = entries.filter((e) => !e.endsWith('/')).sort(collator.compare);

  // Simpan urutan ini (folder dulu, baru file) sebagai referensi nomor
  // ":N" untuk command berikutnya (cd/copy/move/delete/download/dz/preview).
  // Virtual path-nya dibuat relatif ke ROOT sandbox (bukan ke targetDir),
  // supaya bisa langsung dipakai sebagai hasil akhir resolvePathArg.
  lastListing = [...dirs, ...files].map((entry) => {
    const bareName = entry.endsWith('/') ? entry.slice(0, -1) : entry;
    return targetDir === '.' ? bareName : `${targetDir}/${bareName}`;
  });

  let num = 1;

  // Tandai entry (folder/file) yang berada di dalam CONFIDENTIAL_PATHS
  // dengan ikon 🔒 di listing — supaya user tahu dari AWAL item mana
  // yang bakal diminta PIN pas di-preview/download, tanpa perlu coba
  // dulu baru ketahuan lewat pesan error. Beda dengan BLOCKED_PATHS
  // (yang memang sudah disembunyikan total dari listDir), item
  // confidential ini memang SENGAJA tetap kelihatan namanya di
  // "list" — cuma isinya yang di-gate PIN.
  function entryNeedsPin(bareName) {
    try {
      const virtualPath = targetDir === '.' ? bareName : `${targetDir}/${bareName}`;
      return isConfidential(safeResolve(virtualPath));
    } catch {
      // Harusnya tidak pernah terjadi (entry ini datang dari listDir
      // folder yang sama), tapi kalau gagal resolve karena sebab apa
      // pun, default-kan "tidak dikasih ikon" daripada bikin seluruh
      // command "list" gagal cuma gara-gara satu entry.
      return false;
    }
  }

  const lines = [
    ...dirs.map((d) => `${num++}. 📁 ${d}${entryNeedsPin(d.slice(0, -1)) ? ' 🔒' : ''}`),
    ...files.map((f) => `${num++}. 📄 ${f}${entryNeedsPin(f) ? ' 🔒' : ''}`),
  ];
  const headerBase = `📂 **${toDisplayPath(targetDir)}** — ${dirs.length} folder, ${files.length} file`;

  // Discord batasi pesan max ~2000 karakter. Daripada kirim file .txt
  // (harus di-download tiap kali), pecah daftar jadi beberapa "halaman"
  // yang muat di 1 pesan, terus kasih tombol ◀️ ▶️ buat geser halaman
  // langsung di chat.
  const PAGE_BUDGET = 1700;
  const pages = [];
  let bucket = [];
  let bucketLen = 0;
  for (const line of lines) {
    if (bucketLen + line.length + 1 > PAGE_BUDGET && bucket.length) {
      pages.push(bucket);
      bucket = [];
      bucketLen = 0;
    }
    bucket.push(line);
    bucketLen += line.length + 1;
  }
  if (bucket.length) pages.push(bucket);

  // Muat dalam 1 pesan, tidak perlu pagination sama sekali
  if (pages.length <= 1) {
    return `${headerBase}:\n${lines.join('\n')}`;
  }

  const renderPage = (i) => `${headerBase} — Hal. ${i + 1}/${pages.length}:\n${pages[i].join('\n')}`;

  if (!dscMessage) {
    // Fallback kalau dipanggil bukan lewat Discord (mis. dites langsung di kode)
    return `${renderPage(0)}\n\n(${pages.length} halaman total — jalankan lewat Discord untuk navigasi tombol)`;
  }

  let pageIndex = 0;
  const buildRow = (i) =>
    new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId('list_prev')
        .setEmoji('◀️')
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(i === 0),
      new ButtonBuilder()
        .setCustomId('list_next')
        .setEmoji('▶️')
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(i === pages.length - 1),
    );

  const sentMsg = await dscMessage.reply({
    ...toEmbedPayload(renderPage(pageIndex)),
    components: [buildRow(pageIndex)],
  });

  // Kumpulkan klik tombol selama 5 menit, cuma owner (pengirim command) yang boleh navigasi
  const collector = sentMsg.createMessageComponentCollector({
    componentType: ComponentType.Button,
    time: 5 * 60 * 1000,
  });

  collector.on('collect', async (interaction) => {
    if (interaction.user.id !== dscMessage.author.id) {
      await interaction.reply({ ...toEmbedPayload('⚠️ Command ini bukan punya kamu.'), ephemeral: true }).catch(() => {});
      return;
    }
    if (interaction.customId === 'list_prev' && pageIndex > 0) pageIndex--;
    if (interaction.customId === 'list_next' && pageIndex < pages.length - 1) pageIndex++;

    await interaction.update({
      content: null,
      ...toEmbedPayload(renderPage(pageIndex)),
      components: [buildRow(pageIndex)],
    }).catch(() => {});
  });

  // Setelah 5 menit, tombol dinonaktifkan biar gak bisa diklik lagi (interaction expired)
  collector.on('end', () => {
    sentMsg.edit({ components: [] }).catch(() => {});
  });

  return null; // sudah dikirim manual, index.js tidak perlu kirim ulang
}

export async function handleCommand(rawText, dscMessage = null) {
  const text = rawText.trim();
  if (!text) return buildHelpText();

  const tokens = tokenize(text);
  if (tokens.length === 0) return buildHelpText();
  
  // PERBAIKAN: Mengambil indeks pertama [0] sebagai string command murni
  const command = tokens[0].toLowerCase();
  const args = tokens.slice(1);

  // "?<command>" -> command tersembunyi buat lihat penjelasan detail command
  // tertentu, tanpa bikin "help" utama jadi panjang. Sengaja dicek di sini
  // (sebelum switch di bawah), bukan sebagai "case" biasa, karena "?pwd" dkk
  // bukan nama command aslinya — cuma modifier di depannya.
  if (command.startsWith('?') && command.length > 1) {
    return getDetailedHelp(command.slice(1));
  }
  if (command === '?') {
    const topics = Object.keys(DETAILED_HELP).filter((k) => k !== ':').sort().join(', ');
    return `❓ Ketik \`?<command>\` buat penjelasan detail, contoh \`?pwd\`.\nTopik: ${topics}`;
  }

  try {
    switch (command) {
      case 'help':
        return buildHelpText();

      case 'pwd':
        return `📂 Folder aktif saat ini: \`${displayDir()}\``;

      case 'cd': {
        if (args.length < 1) return `📂 Folder aktif saat ini: \`${displayDir()}\``;

        const targetArg = args[0];
        const isClimbAttempt = targetArg.replace(/\\/g, '/').startsWith('..');
        const newDir = resolvePathArg(targetArg);

        // Kalau user coba naik (".." atau "../xxx") tapi hasilnya tetap di
        // root ('.') karena sudah di puncak sandbox, kasih tahu jelas —
        // jangan seolah-olah berhasil "pindah folder" padahal diam di tempat.
        if (isClimbAttempt && newDir === '.' && currentDir === '.') {
          return `📂 Sudah di folder root (\`${displayDir()}\`), tidak bisa naik lebih tinggi lagi.`;
        }

        // 🆕 Kalau targetnya ternyata FILE (bukan folder), "cd" ke situ nggak
        // ada gunanya (nggak ada isi buat di-"list") — daripada cuma nampilin
        // error, perlakukan sebagai shortcut ke preview versi LAMA (attachment
        // apa adanya). PIN (rahasia/ukuran besar) tetap berlaku sama seperti
        // command "preview", cuma argumennya "digeser": "cd <file> <pin>".
        let targetAbsPath;
        try {
          targetAbsPath = resolveForRclone(newDir);
        } catch (err) {
          return `❌ Gagal pindah folder: ${err.message}`;
        }
        if (fs.existsSync(targetAbsPath) && fs.statSync(targetAbsPath).isFile()) {
          // PENTING: pakai "await" di sini (bukan cuma "return runPreview(...)")
          // — kalau tidak, error yang dilempar runPreview (mis. PIN salah/
          // kosong) akan LOLOS dari try/catch besar di bawah (karena statement
          // "return" sudah keburu keluar dari try SEBELUM promise-nya selesai),
          // dan berakhir jadi pesan generik "Terjadi kesalahan internal..." di
          // index.js alih-alih pesan spesifik "Gagal: ...".
          return await runPreview([targetArg, ...args.slice(1)], dscMessage, 'legacy');
        }

        // Validasi folder benar-benar ada & memang folder (bukan file), lewat
        // listDir supaya sekalian kena aturan safeResolve/whitelist di fsops.js
        try {
          await listDir(newDir);
        } catch (err) {
          return `❌ Gagal pindah folder: ${err.message}`;
        }

        currentDir = newDir;
        return `📂 Pindah ke folder: \`${displayDir()}\``;
      }

      case 'root': {
        if (currentDir === '.') {
          return `📂 Sudah di folder root (\`${displayDir()}\`).`;
        }
        currentDir = '.';
        return `📂 Pindah ke folder: \`${displayDir()}\``;
      }

      // "cdl" / "cdlist" — gabungan "cd" + "list" sekaligus dalam 1 command,
      // biar nggak perlu ketik 2 command terpisah tiap mau masuk & langsung
      // liat isi folder. BEDA PENTING dari "cd": "cd" ke FILE otomatis jadi
      // shortcut preview (lihat komentar di case 'cd' di atas) — tapi "cdl"
      // SENGAJA TIDAK ikut shortcut itu, karena "list" sebuah file itu tidak
      // masuk akal (file tidak punya isi buat di-list). Daripada diam-diam
      // preview padahal user maksudnya mau masuk folder, "cdl" kasih
      // PERINGATAN jelas & arahkan ke command yang tepat.
      case 'cdl':
      case 'cdlist': {
        if (args.length < 1) return 'Format: `cdl <folder>` (alias: `cdlist <folder>`) — gabungan `cd` + `list` sekaligus. Cuma bisa ke FOLDER, bukan file.';

        const targetArg = args[0];
        const isClimbAttempt = targetArg.replace(/\\/g, '/').startsWith('..');
        const newDir = resolvePathArg(targetArg);

        if (isClimbAttempt && newDir === '.' && currentDir === '.') {
          return `📂 Sudah di folder root (\`${displayDir()}\`), tidak bisa naik lebih tinggi lagi.`;
        }

        let targetAbsPath;
        try {
          targetAbsPath = resolveForRclone(newDir);
        } catch (err) {
          return `❌ Gagal: ${err.message}`;
        }

        // ⚠️ Peringatan eksplisit kalau targetnya FILE — TIDAK di-shortcut
        // jadi preview kayak "cd" biasa, karena user yang ketik "cdl" sudah
        // jelas niatnya mau LIST isi folder, bukan lihat isi file.
        if (fs.existsSync(targetAbsPath) && fs.statSync(targetAbsPath).isFile()) {
          return `⚠️ **"${toDisplayPath(newDir)}" adalah FILE, bukan folder** — \`cdl\`/\`cdlist\` cuma bisa dipakai ke folder (file tidak punya isi buat di-"list").\nPakai \`cd ${targetArg}\` kalau mau preview file itu (attachment apa adanya), atau \`preview ${targetArg}\` buat preview yang lebih rapi.`;
        }

        // Validasi folder benar-benar ada & memang folder, sama seperti "cd"
        try {
          await listDir(newDir);
        } catch (err) {
          return `❌ Gagal pindah folder: ${err.message}`;
        }

        currentDir = newDir;
        const header = `📂 Pindah ke folder: \`${displayDir()}\``;

        if (dscMessage) {
          // Kirim notif pindah folder sebagai pesan terpisah DULU (biar urutan
          // chat masuk akal: "pindah folder" baru "isi foldernya"), baru
          // listing-nya (bisa 1 pesan biasa ATAU pagination tombol ◀️▶️,
          // ditangani sendiri oleh runList()).
          await dscMessage.reply(toEmbedPayload(header)).catch(() => {});
          return await runList(newDir, dscMessage);
        }

        // Fallback non-Discord (mis. dites langsung di kode): gabung jadi 1 string
        const listResult = await runList(newDir, null);
        return `${header}\n\n${listResult}`;
      }

      case 'ls':
      case 'list': {
        const targetDir = resolvePathArg(args[0] || '.');
        return await runList(targetDir, dscMessage);
      }

      case 'copy': {
        if (args.length < 2) return 'Format: `copy <src> <dst>` (kalau src rahasia dan/atau ukuran ≥50MB, tambahkan PIN: `copy <src> <dst> <pin>`)\nBatch: `copy :3-:7 <folder_tujuan>` atau `copy :3,:5,:9 <folder_tujuan>`';

        const batchRefs = resolveBatchRefs(args[0]); // lempar Error kalau format batch rusak
        if (batchRefs) {
          return await runBatchCopyOrMove('copy', batchRefs, args.slice(1), dscMessage);
        }

        const srcVirtual = resolvePathArg(args[0]);
        const absSrc = resolveForRclone(srcVirtual);
        if (!fs.existsSync(absSrc)) return `❌ Gagal: \`${toDisplayPath(srcVirtual)}\` tidak ditemukan.`;

        const srcSize = await getLocalSize(absSrc);
        const needsConfidentialPin = isConfidential(absSrc);
        const needsSizePin = srcSize >= PIN_SIZE_THRESHOLD;
        let dstArgRaw = args[1];

        if (needsConfidentialPin || needsSizePin) {
          if (args.length < 3) {
            const label = needsConfidentialPin
              ? `🔒 **Data ini bersifat RAHASIA.** \`${toDisplayPath(srcVirtual)}\` butuh PIN keamanan buat di-copy.`
              : `🔒 **Ukuran ${formatBytes(srcSize)} (≥50MB).** Copy sebesar ini wajib PIN keamanan (cegah bot crash/storage penuh & cegah copy berulang-ulang kalau Discord-mu kena hack).`;
            return `${label}\nFormat: \`copy ${args[0]} ${args[1]} <pin>\``;
          }
          const reason = needsConfidentialPin
            ? `copy folder/file rahasia: ${toDisplayPath(srcVirtual)}`
            : `copy besar (${formatBytes(srcSize)}): ${toDisplayPath(srcVirtual)}`;
          const pinChecked = await requirePin(args, reason);
          dstArgRaw = pinChecked[1];

          if (needsConfidentialPin) {
            sendAlertEmail(
              '🔓 Copy folder/file RAHASIA dijalankan',
              `Folder/file rahasia "${toDisplayPath(srcVirtual)}" berhasil di-copy dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, PIN-mu sudah bocor dan data rahasiamu baru saja diduplikat orang lain — segera amankan akun Discord-mu.`
            ).catch(() => {});
          }
        }

        const dstVirtual = resolvePathArg(dstArgRaw);
        await copyPath(srcVirtual, dstVirtual);
        return `✅ Copy berhasil ke \`${toDisplayPath(dstVirtual)}\`${needsSizePin ? ` (${formatBytes(srcSize)})` : ''}`;
      }

      case 'move': {
        if (args.length < 2) return 'Format: `move <src> <dst>` (kalau src rahasia dan/atau ukuran ≥50MB, tambahkan PIN: `move <src> <dst> <pin>`)\nBatch: `move :3-:7 <folder_tujuan>` atau `move :3,:5,:9 <folder_tujuan>`';

        const batchRefsMove = resolveBatchRefs(args[0]); // lempar Error kalau format batch rusak
        if (batchRefsMove) {
          return await runBatchCopyOrMove('move', batchRefsMove, args.slice(1), dscMessage);
        }

        const srcVirtual = resolvePathArg(args[0]);
        const absSrc = resolveForRclone(srcVirtual);
        if (!fs.existsSync(absSrc)) return `❌ Gagal: \`${toDisplayPath(srcVirtual)}\` tidak ditemukan.`;

        const srcSize = await getLocalSize(absSrc);
        const needsConfidentialPin = isConfidential(absSrc);
        const needsSizePin = srcSize >= PIN_SIZE_THRESHOLD;
        let dstArgRaw = args[1];

        // Sama alasannya kayak copy: "move" bisa dipakai buat mengeluarkan
        // file/folder RAHASIA dari folder confidential ke lokasi bebas
        // tanpa lewat "preview" sama sekali (jadi tidak ke-detect kalau
        // cuma preview yang di-gate). Tambahan size-gate juga mencegah
        // rename/move berulang-ulang yang bikin I/O disk berat kalau
        // Discord-mu kena hack.
        if (needsConfidentialPin || needsSizePin) {
          if (args.length < 3) {
            const label = needsConfidentialPin
              ? `🔒 **Data ini bersifat RAHASIA.** \`${toDisplayPath(srcVirtual)}\` butuh PIN keamanan buat dipindah.`
              : `🔒 **Ukuran ${formatBytes(srcSize)} (≥50MB).** Move sebesar ini wajib PIN keamanan (cegah move berulang-ulang kalau Discord-mu kena hack).`;
            return `${label}\nFormat: \`move ${args[0]} ${args[1]} <pin>\``;
          }
          const reason = needsConfidentialPin
            ? `move folder/file rahasia: ${toDisplayPath(srcVirtual)}`
            : `move besar (${formatBytes(srcSize)}): ${toDisplayPath(srcVirtual)}`;
          const pinChecked = await requirePin(args, reason);
          dstArgRaw = pinChecked[1];

          if (needsConfidentialPin) {
            sendAlertEmail(
              '🔓 Move folder/file RAHASIA dijalankan',
              `Folder/file rahasia "${toDisplayPath(srcVirtual)}" berhasil dipindah dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, PIN-mu sudah bocor dan data rahasiamu baru saja dipindah orang lain — segera amankan akun Discord-mu.`
            ).catch(() => {});
          }
        }

        const dstVirtual = resolvePathArg(dstArgRaw);
        await movePath(srcVirtual, dstVirtual);
        return `✅ Move berhasil ke \`${toDisplayPath(dstVirtual)}\`${needsSizePin ? ` (${formatBytes(srcSize)})` : ''}`;
      }

      case 'delete': {
        if (args.length < 1) return 'Format: `delete <path>` (kalau ada di folder RAHASIA, tambahkan PIN: `delete <path> <pin>`)\nBatch: `delete :3-:7` atau `delete :3,:5,:9`';

        const batchRefsDelete = resolveBatchRefs(args[0]); // lempar Error kalau format batch rusak
        if (batchRefsDelete) {
          return await runBatchDelete(batchRefsDelete, args.slice(1));
        }

        const targetVirtual = resolvePathArg(args[0]);

        // Sama seperti copy/move/preview/download: cek dulu apakah
        // target ada di folder RAHASIA sebelum jalanin apa pun. Sebelumnya
        // "delete" LOLOS dari gate ini — walau isinya tetap aman (trash
        // ditaruh tetap di dalam folder confidential asal, lihat
        // trashDirFor di fsops.js), memindah SELURUH isi folder rahasia ke
        // trash tanpa PIN & tanpa notifikasi tetap berisiko: kalau akun
        // Discord kena hack, penyerang bisa mengacak-acak folder rahasia
        // (memindah semuanya ke trash) tanpa owner tahu sama sekali.
        let absTarget;
        try {
          absTarget = resolveForRclone(targetVirtual);
        } catch (err) {
          return `❌ Gagal: ${err.message}`;
        }
        if (!fs.existsSync(absTarget)) {
          return `❌ Gagal: \`${toDisplayPath(targetVirtual)}\` tidak ditemukan.`;
        }

        const needsConfidentialPin = isConfidential(absTarget);
        if (needsConfidentialPin) {
          if (args.length < 2) {
            return `🔒 **Data ini bersifat RAHASIA.** \`${toDisplayPath(targetVirtual)}\` butuh PIN keamanan buat dihapus (dipindah ke trash).\nFormat: \`delete ${args[0]} <pin>\``;
          }
          await requirePin(args, `delete folder/file rahasia: ${toDisplayPath(targetVirtual)}`);
          sendAlertEmail(
            '🗑️ Delete (ke trash) folder/file RAHASIA dijalankan',
            `Folder/file rahasia "${toDisplayPath(targetVirtual)}" berhasil dipindah ke trash dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, PIN-mu sudah bocor — segera amankan akun Discord-mu. Datanya masih bisa dipulihkan dari trash selama belum di-"purge" atau kena auto-purge retensi.`
          ).catch(() => {});
        }

        await deletePath(targetVirtual);
        return `🗑️ Dipindah ke trash: \`${toDisplayPath(targetVirtual)}\`\n(belum permanen — pakai \`purge\` kalau mau hapus beneran, atau otomatis kehapus permanen setelah ${config.trashRetentionDays} hari)`;
      }

      case 'purge': {
        if (args.length < 1) return 'Format: `purge <path> <pin>`\nBatch: `purge :3-:7 <pin>` atau `purge :3,:5,:9 <pin>`';

        const batchRefsPurge = resolveBatchRefs(args[0]); // lempar Error kalau format batch rusak
        if (batchRefsPurge) {
          await requirePin(args, `purge batch (${batchRefsPurge.length} item)`); // lempar Error kalau PIN salah/kosong
          return await runBatchPurge(batchRefsPurge, dscMessage);
        }

        const pinCheckedArgs = await requirePin(args, 'purge'); // lempar Error kalau PIN salah/kosong
        const targetVirtual = resolvePathArg(pinCheckedArgs[0]);

        if (!dscMessage) {
          return '❌ Command `purge` butuh konfirmasi tombol, cuma bisa dipakai lewat Discord.';
        }

        // Validasi dulu targetnya ada, biar gak nampilin dialog konfirmasi
        // buat path yang ternyata salah/tidak ditemukan.
        let absPath;
        try {
          absPath = resolveForRclone(targetVirtual);
        } catch (err) {
          return `❌ Gagal: ${err.message}`;
        }
        if (!fs.existsSync(absPath)) {
          return `❌ Gagal: \`${toDisplayPath(targetVirtual)}\` tidak ditemukan.`;
        }

        const confirmRow = new ActionRowBuilder().addComponents(
          new ButtonBuilder().setCustomId('purge_yes').setLabel('Ya, Hapus Permanen').setStyle(ButtonStyle.Danger),
          new ButtonBuilder().setCustomId('purge_no').setLabel('Batal').setStyle(ButtonStyle.Secondary),
        );

        const confirmMsg = await dscMessage.reply({
          ...toEmbedPayload(`⚠️ **Yakin mau hapus PERMANEN** \`${toDisplayPath(targetVirtual)}\`?\nAksi ini TIDAK BISA dibatalkan (beda sama \`delete\` biasa yang cuma masuk trash).`),
          components: [confirmRow],
        });

        return new Promise((resolve) => {
          let settled = false;

          const collector = confirmMsg.createMessageComponentCollector({
            componentType: ComponentType.Button,
            time: 60 * 1000,
          });

          collector.on('collect', async (interaction) => {
            if (interaction.user.id !== dscMessage.author.id) {
              await interaction.reply({ ...toEmbedPayload('⚠️ Command ini bukan punya kamu.'), ephemeral: true }).catch(() => {});
              return;
            }

            settled = true;
            collector.stop();

            if (interaction.customId === 'purge_yes') {
              try {
                await purgePath(targetVirtual);
                sendAlertEmail(
                  '✅ Command "purge" berhasil dieksekusi',
                  `File/folder "${toDisplayPath(targetVirtual)}" berhasil DIHAPUS PERMANEN dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, segera amankan akun Discord-mu — file ini TIDAK BISA dikembalikan.`
                ).catch(() => {});
                await interaction.update({
                  content: null,
                  ...toEmbedPayload(`🗑️ **Terhapus permanen:** \`${toDisplayPath(targetVirtual)}\``),
                  components: [],
                }).catch(() => {});
              } catch (err) {
                await interaction.update({
                  content: null,
                  ...toEmbedPayload(`❌ Gagal hapus permanen: ${err.message}`),
                  components: [],
                }).catch(() => {});
              }
            } else {
              await interaction.update({
                content: null,
                ...toEmbedPayload(`Dibatalkan. \`${toDisplayPath(targetVirtual)}\` tidak jadi dihapus permanen.`),
                components: [],
              }).catch(() => {});
            }

            resolve(null);
          });

          collector.on('end', () => {
            if (!settled) {
              confirmMsg.edit({
                content: null,
                ...toEmbedPayload(`⏱️ Konfirmasi kadaluarsa. \`${toDisplayPath(targetVirtual)}\` tidak jadi dihapus permanen.`),
                components: [],
              }).catch(() => {});
              resolve(null);
            }
          });
        });
      }

      case 'info': {
        if (args.length < 1) return 'Format: `info <path>`';
        const targetVirtual = resolvePathArg(args[0]);

        let absPath;
        try {
          absPath = resolveForRclone(targetVirtual);
        } catch (err) {
          return `❌ Gagal: ${err.message}`;
        }
        if (!fs.existsSync(absPath)) {
          return `❌ Gagal: \`${toDisplayPath(targetVirtual)}\` tidak ditemukan.`;
        }

        const stats = fs.statSync(absPath);
        const isDir = stats.isDirectory();
        const size = await getLocalSize(absPath);
        const modified = stats.mtime.toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' });

        let itemCountLine = '';
        if (isDir) {
          try {
            const itemCount = fs.readdirSync(absPath).length;
            itemCountLine = `\n• Isi: ${itemCount} item`;
          } catch {
            // biarkan kosong kalau gagal baca (mis. permission), gak fatal buat "info"
          }
        }

        return `${isDir ? '📁' : '📄'} **${toDisplayPath(targetVirtual)}**\n` +
          `• Tipe: ${isDir ? 'Folder' : 'File'}\n` +
          `• Ukuran: **${formatBytes(size)}**${itemCountLine}\n` +
          `• Terakhir diubah: ${modified}`;
      }

      case 'preview':
        // Sama seperti shortcut "cd <file>" di atas: WAJIB "await" di sini,
        // kalau tidak, error dari runPreview (PIN salah/kosong, dll) lolos
        // dari try/catch handleCommand dan cuma tampil sebagai "Terjadi
        // kesalahan internal..." yang generik di index.js.
        return await runPreview(args, dscMessage, 'rich');

      case 'clear': {
        if (!dscMessage) return 'Fitur ini cuma bisa dipakai lewat Discord.';

        if (previewMessages.length === 0) {
          return 'Belum ada file preview yang perlu dihapus.';
        }

        const channel = dscMessage.channel;
        let deletedCount = 0;

        // Hanya hapus pesan-pesan yang memang tercatat dari "preview" — aman,
        // gak akan menyentuh command kamu atau balasan bot yang lain.
        for (const msgId of previewMessages) {
          try {
            const msg = await channel.messages.fetch(msgId);
            await msg.delete();
            deletedCount++;
          } catch {
            // pesan mungkin sudah dihapus manual / kadaluarsa, lewati saja
          }
        }

        previewMessages.length = 0; // reset catatan setelah dibersihkan
        savePreviewMessages(); // ikut kosongkan file, bukan cuma di memory

        return `🧹 **Selesai!** ${deletedCount} pesan preview berhasil dihapus.`;
      }

      case 'clearchat':
      case 'clearall': {
        if (!dscMessage) return '❌ Command `clearchat` cuma bisa dipakai lewat Discord.';

        await requirePin(args, 'clearchat (hapus riwayat chat bot)'); // lempar Error kalau PIN salah/kosong

        const confirmRow = new ActionRowBuilder().addComponents(
          new ButtonBuilder().setCustomId('clearchat_yes').setLabel('Ya, Hapus Riwayat Chat Bot').setStyle(ButtonStyle.Danger),
          new ButtonBuilder().setCustomId('clearchat_no').setLabel('Batal').setStyle(ButtonStyle.Secondary),
        );

        const confirmMsg = await dscMessage.reply({
          ...toEmbedPayload(
            '⚠️ **Yakin mau hapus riwayat chat bot di DM ini?**\n' +
            'Proses dijalankan BERTAHAP (ada jeda antar hapus) biar tidak kena limit API Discord — makin panjang riwayatnya, makin lama prosesnya.\n\n' +
            '📌 **Keterbatasan Discord:** bot cuma bisa menghapus pesan **miliknya sendiri** (balasan-balasan bot). Pesan yang kamu ketik sendiri tidak ikut terhapus otomatis.\n\n' +
            'Aksi ini TIDAK BISA dibatalkan setelah dimulai.'
          ),
          components: [confirmRow],
        });

        return new Promise((resolve) => {
          let settled = false;

          const collector = confirmMsg.createMessageComponentCollector({
            componentType: ComponentType.Button,
            time: 60 * 1000,
          });

          collector.on('collect', async (interaction) => {
            if (interaction.user.id !== dscMessage.author.id) {
              await interaction.reply({ ...toEmbedPayload('⚠️ Command ini bukan punya kamu.'), ephemeral: true }).catch(() => {});
              return;
            }

            settled = true;
            collector.stop();

            if (interaction.customId === 'clearchat_yes') {
              await interaction.update({
                content: null,
                ...toEmbedPayload('🧹 Oke, mulai menghapus riwayat chat bot... (progress di pesan baru di bawah)'),
                components: [],
              }).catch(() => {});

              sendAlertEmail(
                '🧹 Command "clearchat" dijalankan',
                `Riwayat chat bot di DM mulai dibersihkan dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, segera amankan akun Discord-mu (ganti password, cek active sessions, aktifkan 2FA).`
              ).catch(() => {});

              await runClearChatBot(dscMessage);
            } else {
              await interaction.update({
                content: null,
                ...toEmbedPayload('Dibatalkan. Riwayat chat bot tidak jadi dihapus.'),
                components: [],
              }).catch(() => {});
            }

            resolve(null);
          });

          collector.on('end', () => {
            if (!settled) {
              confirmMsg.edit({
                content: null,
                ...toEmbedPayload('⏱️ Konfirmasi kadaluarsa. Riwayat chat bot tidak jadi dihapus.'),
                components: [],
              }).catch(() => {});
              resolve(null);
            }
          });
        });
      }

      case 'network': {
        const verbose = args[0] && ['detail', '-v', 'verbose'].includes(args[0].toLowerCase());

        // Mode detail nampilin info teknis (IP lokal, gateway, DNS, MAC
        // address, dst) yang bisa dipakai buat fingerprinting/pemetaan
        // jaringan kalau histori chat ini kebaca orang lain (mis. Discord
        // kena hack) — jadi wajib PIN, sama gatenya kayak preview folder
        // rahasia. Mode default (tanpa detail) tetap bebas PIN.
        if (verbose) {
          if (args.length < 2) {
            return '🔒 **Detail teknis jaringan (IP lokal/gateway/DNS/MAC) butuh PIN keamanan.**\nFormat: `network detail <pin>`';
          }
          await requirePin(args, 'network detail (IP lokal/gateway/DNS/MAC)');
        }

        let profiles;
        try {
          profiles = await getNetworkInfo();
        } catch (err) {
          return `❌ Gagal membaca status jaringan: ${err.message}`;
        }

        if (!profiles.length) {
          return '❌ Tidak ada koneksi jaringan aktif terdeteksi (laptop mungkin sedang offline / semua adapter terputus).';
        }

        const blocks = profiles.map((p) => formatNetworkProfile(p, verbose));
        const footer = verbose ? '' : '\n\n_Ketik `network detail <pin>` untuk lihat IP lokal/gateway/DNS/MAC address._';
        return `**🌐 Status Jaringan Laptop**\n\n${blocks.join('\n\n')}${footer}`;
      }

      case 'baterai': {
        // UPGRADE KECEPATAN: getBatteryInfo() (spawn powershell.exe) dan
        // getStandbyMinutes() (spawn powercfg.exe) adalah 2 proses TERPISAH
        // yang sama sekali tidak saling bergantung — sebelumnya dijalankan
        // berurutan (nunggu proses pertama kelar total baru mulai proses
        // kedua). Promise.all menjalankan keduanya BERSAMAAN, jadi total
        // waktu tunggu jadi cuma selama proses yang PALING LAMA di antara
        // keduanya, bukan jumlah durasi keduanya digabung.
        let battery, standbyMinutes;
        try {
          [battery, standbyMinutes] = await Promise.all([getBatteryInfo(), getStandbyMinutes()]);
        } catch (err) {
          return `❌ Gagal membaca info baterai: ${err.message}`;
        }

        if (!battery) {
          return '❌ Tidak ditemukan baterai di laptop ini (mungkin PC desktop, atau driver baterai tidak terbaca lewat WMI).';
        }

        const percent = battery.EstimatedChargeRemaining;
        const status = describeBatteryStatus(battery.BatteryStatus);
        const chargeLine = status.charging ? '⚡ Sedang di-cas' : '🔌 Tidak di-cas';
        const icon = status.charging ? '🔋' : (percent <= 20 ? '🪫' : '🔋');

        const modeLine = describePowerMode(standbyMinutes);

        return `${icon} **Status Baterai Laptop**\n• Persentase: **${percent}%**\n• ${chargeLine} _(${status.label})_\n• Mode Power: ${modeLine}`;
      }

      case 'disk': {
        let disks;
        try {
          disks = await getDiskInfo();
        } catch (err) {
          return `❌ Gagal membaca info disk: ${err.message}`;
        }

        if (!disks.length) return '❌ Tidak ada drive lokal fisik yang terbaca.';

        const blocks = disks.map((d) => {
          const total = Number(d.Size) || 0;
          const free = Number(d.FreeSpace) || 0;
          const used = total - free;
          const percentUsed = total > 0 ? Math.round((used / total) * 100) : 0;
          return `💽 **${d.DeviceID}**\n• Total: ${formatBytes(total)}\n• Terpakai: ${formatBytes(used)} (${percentUsed}%)\n• Sisa: **${formatBytes(free)}**`;
        });

        return `**Status Disk Laptop**\n\n${blocks.join('\n\n')}`;
      }

      case 'mode': {
        if (args.length < 1) return 'Format: `mode <server/hemat>`';
        const subMode = args[0].toLowerCase(); // Mengambil string murni sub-argumen

        if (subMode === 'server') {
          // Set timeout AC *dan* DC (baterai) ke 0 (never), dan TUNGGU hasilnya + cek error
          const results = await Promise.all([
            runPowercfg('/change standby-timeout-ac 0'),
            runPowercfg('/change standby-timeout-dc 0'),
            runPowercfg('/change hibernate-timeout-ac 0'),
            runPowercfg('/change hibernate-timeout-dc 0'),
          ]);
          const failed = results.filter(r => !r.ok);
          if (failed.length > 0) {
            return `❌ **Gagal mengubah Mode Server!**\n${failed.map(f => `• ${f.error}`).join('\n')}\n\nKemungkinan bot tidak punya izin/berjalan bukan sebagai user yang login, atau ada Group Policy yang mengunci pengaturan power.`;
          }

          // Verifikasi nilai yang benar-benar tersimpan di skema aktif
          const actualMinutes = await getStandbyMinutes();
          const verified = actualMinutes === 0
            ? '✅ Terverifikasi: standby timeout = Never'
            : `⚠️ Perintah sukses tapi nilai terbaca saat ini: ${actualMinutes ?? 'tidak diketahui'} menit (mungkin ada aplikasi lain yang override, cek Settings > Power).`;

          return `🖥️ **Laptop beralih ke Mode Server!**\n• Status Sleep: **Never**\n• Status Hibernate: **Never**\n${verified}\nLaptop Anda akan tetap terjaga selamanya untuk memproses unggahan besar Anda.`;
        } 
        
        if (subMode === 'hemat') {
          // Kembalikan ke durasi bawaan harian Anda (Sleep 15 menit, Hibernate 3 jam), AC & DC
          const results = await Promise.all([
            runPowercfg('/change standby-timeout-ac 15'),
            runPowercfg('/change standby-timeout-dc 15'),
            runPowercfg('/change hibernate-timeout-ac 180'),
            runPowercfg('/change hibernate-timeout-dc 180'),
          ]);
          const failed = results.filter(r => !r.ok);
          if (failed.length > 0) {
            return `❌ **Gagal mengubah Mode Hemat!**\n${failed.map(f => `• ${f.error}`).join('\n')}`;
          }
          return '🔋 **Laptop beralih ke Mode Hemat (Default)!**\n• Status Sleep: **15 Menit**\n• Status Hibernate: **3 Jam**\nLaptop akan otomatis tidur jika didiamkan sesuai setingan harian Anda.';
        }

        return 'Format salah. Gunakan: `mode server` atau `mode hemat`';
      }

      case 'msg':
      case 'message': {
        if (args.length < 2) {
          return 'Format: `msg "<pesan>" <durasi>` (alias: `message`)\n' +
            'Contoh: `msg "JANGAN MAIN GAME" 10s`\n' +
            'Durasi: angka detik polos (`30`), diakhiri `s`/`detik`, atau `m`/`menit` buat menit (`2m`)';
        }

        const durasiRaw = args[args.length - 1];
        const seconds = parseMsgDuration(durasiRaw);
        if (seconds === null) {
          return `❌ Format durasi "${durasiRaw}" tidak dikenali. Contoh yang benar: \`10s\`, \`30\`, \`2m\`.`;
        }
        if (seconds < MSG_MIN_SECONDS || seconds > MSG_MAX_SECONDS) {
          return `❌ Durasi harus antara ${MSG_MIN_SECONDS} detik dan ${Math.round(MSG_MAX_SECONDS / 60)} menit (maks ${MSG_MAX_SECONDS} detik).`;
        }

        // Sisa argumen (semua kecuali durasi di argumen terakhir) digabung
        // jadi teks pesan — mendukung baik `msg "banyak kata" 10s` (1 token
        // hasil tokenize dari tanda kutip) maupun `msg satu-kata 10s`.
        const pesanText = args.slice(0, -1).join(' ').trim();
        if (!pesanText) {
          return 'Format: `msg "<pesan>" <durasi>`\nPesan tidak boleh kosong.';
        }
        if (pesanText.length > MSG_MAX_LENGTH) {
          return `❌ Pesan kepanjangan (maks ${MSG_MAX_LENGTH} karakter, punyamu ${pesanText.length} karakter).`;
        }

        try {
          await showDesktopMessage(pesanText, seconds);
        } catch (err) {
          return `❌ Gagal menampilkan popup pesan: ${err.message}`;
        }

        return `📢 **Popup pesan dikirim ke layar laptop!**\n• Isi: "${pesanText}"\n• Otomatis tertutup setelah: **${seconds} detik** (kecuali diklik "OK" lebih dulu)`;
      }

      case 'shutdown': {
        // silent: true -> sama alasannya kayak "restart" (lihat komentar di
        // situ): PIN tetap langsung di-rotate, tapi email-nya DITAHAN dulu.
        // Begitu laptop mati, bot ikut mati (offline) — jadi PIN barunya
        // percuma dikirim sekarang, toh tidak ada command yang bisa
        // dijalankan sampai laptop dinyalain lagi. Begitu laptop dinyalain
        // & bot hidup lagi, initPin() di startup OTOMATIS kirim PIN BARU
        // LAGI — kalau di sini juga kirim, jadi 2x email PIN buat 1x
        // shutdown, padahal PIN yang dari sini sudah keburu basi begitu
        // PIN dari startup nyampe.
        await requirePin(args, 'shutdown', { silent: true });

        // BUG FIX: sebelumnya exec() dipanggil tanpa callback/await sama
        // sekali — kalau shutdown.exe gagal dijalankan (path salah,
        // permission ditolak, dll), bot TETAP bilang "Perintah Diterima"
        // ke user padahal laptop tidak jadi mati, dan errornya tidak
        // ketahuan siapa pun. Lebih parah lagi, child process yang gagal
        // spawn tanpa listener 'error' bisa bikin proses bot sendiri crash
        // diam-diam. Sekarang di-await lewat execAsync (promisify) dan
        // hasilnya dicek eksplisit sebelum bilang sukses ke user/email.
        try {
          await execAsync('C:\\Windows\\System32\\shutdown.exe /s /f /t 15');
        } catch (err) {
          // Shutdown gagal -> laptop TIDAK jadi mati -> bot TETAP hidup ->
          // initPin() dari startup TIDAK akan pernah jalan buat gantiin
          // PIN yang tadi ditahan. Kirim sekarang supaya tidak terkunci.
          await resendPendingSilentPinIfAny('shutdown gagal dieksekusi').catch(() => {});
          sendAlertEmail(
            '❌ Command "shutdown" GAGAL dieksekusi',
            `PIN valid, tapi command shutdown.exe GAGAL dijalankan.\nError: ${err.message}\nWaktu: ${new Date().toISOString()}`
          ).catch(() => {});
          return `❌ PIN valid, tapi shutdown **GAGAL dijalankan**: ${err.message}`;
        }

        sendAlertEmail(
          '✅ Command "shutdown" berhasil dieksekusi',
          `Command "shutdown" berhasil dijalankan dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, PIN-mu sudah bocor — segera amankan akun Discord (ganti password, cek active sessions, aktifkan 2FA). PIN sudah otomatis diganti (lihat email rotasi terpisah), tapi laptop sudah kadung dimatikan.`
        ).catch(() => {});
        return '🔌 **Perintah Diterima!** Laptop Anda di rumah akan otomatis dimatikan dalam waktu 15 detik ke depan. Koneksi bot segera terputus.\n_(Berubah pikiran? Ketik `cancel` sebelum 15 detik habis.)_';
      }

      case 'restart': {
        // silent: true -> PIN tetap di-rotate (PIN lama tetap langsung
        // hangus), TAPI email rotasinya DITAHAN dulu (lihat pinStore.js).
        // Soalnya kalau restart-nya sukses, laptop bakal beneran reboot &
        // bot yang hidup lagi OTOMATIS kirim PIN baru sendiri (initPin() di
        // index.js) — kalau di sini juga kirim, jadi 2x email PIN buat 1x
        // restart. Fallback resendPendingSilentPinIfAny() di catch block
        // bawah ini yang jaga-jaga kalau ternyata restart-nya GAGAL (jadi
        // laptop tidak reboot, initPin() tidak akan pernah jalan buat
        // gantiin) — begitu juga di case "cancel" kalau restart dibatalkan.
        await requirePin(args, 'restart', { silent: true });

        try {
          await execAsync('C:\\Windows\\System32\\shutdown.exe /r /f /t 15');
        } catch (err) {
          await resendPendingSilentPinIfAny('restart gagal dieksekusi').catch(() => {});
          sendAlertEmail(
            '❌ Command "restart" GAGAL dieksekusi',
            `PIN valid, tapi command shutdown.exe (/r) GAGAL dijalankan.\nError: ${err.message}\nWaktu: ${new Date().toISOString()}`
          ).catch(() => {});
          return `❌ PIN valid, tapi restart **GAGAL dijalankan**: ${err.message}`;
        }

        sendAlertEmail(
          '✅ Command "restart" berhasil dieksekusi',
          `Command "restart" berhasil dijalankan dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, segera amankan akun Discord-mu.`
        ).catch(() => {});
        return '🔄 **Perintah Diterima!** Laptop Anda di rumah akan otomatis restart dalam waktu 15 detik ke depan. Koneksi bot akan terputus sebentar dan bot Nausync Cloud akan otomatis aktif lagi begitu Windows selesai booting (asalkan sudah di-setting auto-start).\n_(Berubah pikiran? Ketik `cancel` sebelum 15 detik habis.)_';
      }

      // Batalkan shutdown/restart yang masih dalam masa tunggu 15 detik
      // ("shutdown.exe /a" = abort pending shutdown). Sengaja TIDAK butuh
      // PIN — ini aksi yang MENGURANGI risiko (membatalkan aksi berbahaya),
      // bukan menambah, jadi tidak masuk akal untuk di-gate PIN sama
      // seperti aksinya sendiri. Kalau dipanggil tanpa ada shutdown yang
      // pending, shutdown.exe akan balas error — itu wajar, cukup
      // dilaporkan apa adanya.
      case 'cancel': {
        try {
          await execAsync('C:\\Windows\\System32\\shutdown.exe /a');
        } catch (err) {
          return `⚠️ Tidak ada shutdown/restart yang bisa dibatalkan (atau gagal: ${err.message}).`;
        }

        // Baik "shutdown" maupun "restart" sekarang sama-sama pakai
        // opts.silent (lihat komentar di kedua case itu) — PIN hasil
        // rotasinya sengaja ditahan emailnya karena laptop mestinya bakal
        // mati/reboot dulu (baru initPin() di startup yang kirim PIN
        // baru). Tapi kalau ternyata dibatalkan di sini pakai "cancel",
        // laptop TETAP menyala & bot TETAP hidup — initPin() tidak akan
        // pernah jalan buat gantiin PIN yang tadi ditahan, jadi kirim
        // sekarang lewat jalur ini. No-op kalau memang tidak ada PIN yang
        // sedang ditahan (mis. "cancel" dipanggil tanpa ada shutdown/
        // restart yang pending).
        await resendPendingSilentPinIfAny('shutdown/restart dibatalkan pakai "cancel"').catch(() => {});

        sendAlertEmail(
          '🛑 Shutdown/restart dibatalkan',
          `Command "cancel" berhasil membatalkan shutdown/restart yang sedang pending, pada ${new Date().toISOString()}.`
        ).catch(() => {});
        return '🛑 **Dibatalkan!** Shutdown/restart yang tadi pending sudah dihentikan, laptop tetap menyala.';
      }

      case 'chgpin': {
        if (args.length < 1) return 'Format: `chgpin <pin_lama>`';
        try {
          await changePin(args[0]);
          return '🔐 **PIN berhasil diganti!** PIN baru sudah dikirim ke email alert-mu. PIN lama sudah tidak berlaku lagi.';
        } catch (err) {
          return `❌ Gagal ganti PIN: ${err.message}`;
        }
      }

      case 'download': {
        if (args.length < 1) return 'Format: `download <path>` (kalau file/folder rahasia dan/atau ukuran ≥50MB, tambahkan PIN: `download <path> <pin>`)';
        
        const targetPath = resolvePathArg(args[0]);
        const absPath = resolveForRclone(targetPath);
        
        if (!fs.existsSync(absPath)) return `❌ Gagal: File atau folder tidak ditemukan.`;

        const localSize = await getLocalSize(absPath);
        const needsConfidentialPin = isConfidential(absPath);
        const needsSizePin = localSize >= PIN_SIZE_THRESHOLD;

        if (needsConfidentialPin || needsSizePin) {
          if (args.length < 2) {
            const label = needsConfidentialPin
              ? `🔒 **Data ini bersifat RAHASIA.** \`${toDisplayPath(targetPath)}\` butuh PIN keamanan buat didownload.`
              : `🔒 **Ukuran ${formatBytes(localSize)} (≥50MB).** Download sebesar ini wajib PIN keamanan (cegah bot crash/storage Drive penuh & cegah download berulang-ulang kalau Discord-mu kena hack).`;
            return `${label}\nFormat: \`download ${args[0]} <pin>\``;
          }
          const reason = needsConfidentialPin
            ? `download folder/file rahasia: ${toDisplayPath(targetPath)}`
            : `download besar (${formatBytes(localSize)}): ${toDisplayPath(targetPath)}`;
          await requirePin(args, reason);

          if (needsConfidentialPin) {
            sendAlertEmail(
              '🔓 Download folder/file RAHASIA dijalankan',
              `Folder/file rahasia "${toDisplayPath(targetPath)}" berhasil didownload ke Google Drive dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, PIN-mu sudah bocor dan data rahasiamu baru saja disalin keluar — segera amankan akun Discord-mu.`
            ).catch(() => {});
          }
        }

        const driveFreeSpace = await getDriveFreeSpace();
        
        if (localSize > driveFreeSpace) {
          return `❌ **Unduhan Ditolak!** Ukuran target melebihi kapasitas Google Drive Anda.\n` +
                 `• Target: **${formatBytes(localSize)}**\n` +
                 `• Sisa Drive: **${formatBytes(driveFreeSpace)}**`;
        }
        
        const stats = fs.statSync(absPath);
        const isDir = stats.isDirectory();
        const entityName = targetPath.replace(/\\/g, '/').split('/').pop() || 'download';
        
        let progressMessage = null;
        if (dscMessage) {
          progressMessage = await dscMessage.reply(toEmbedPayload(`⏳ **Mempersiapkan rclone...** Menghitung data **${formatBytes(localSize)}**`));
        }

        return new Promise((resolve) => {
          let rcloneCmd = 'copy';
          let remoteTarget = `${config.rcloneRemote}:${config.rcloneStagingFolder}/${entityName}`;
          
          if (!isDir) {
            rcloneCmd = 'copyto';
            remoteTarget = `${config.rcloneRemote}:${config.rcloneStagingFolder}/${entityName}`;
          }

          const process = spawn('rclone', [rcloneCmd, absPath, remoteTarget, '--progress', '--stats', '3s', ...RCLONE_SPEED_FLAGS]);
          
          let lastUpdate = 0;

          process.stdout.on('data', async (data) => {
            const output = data.toString();
            const match = output.match(/(\d+)%\s*,/);
            if (match && progressMessage) {
              const currentProgress = match[1] + "%";
              const now = Date.now();
              if (now - lastUpdate > 4000) {
                lastUpdate = now;
                await progressMessage.edit(toEmbedPayload(`📦 **Sedang Upload:** \`${currentProgress}\` Selesai\n• Target: "${entityName}" (${formatBytes(localSize)})`)).catch(() => {});
              }
            }
          });

          process.on('close', async (code) => {
            if (code === 0) {
              if (progressMessage) {
                await progressMessage.edit(toEmbedPayload(`✅ **Upload Sukses 100%!**\n• Target: "${entityName}"\n• Ukuran: **${formatBytes(localSize)}**\nSilakan cek Google Drive di HP Anda.`)).catch(() => {});
              }
              resolve(`Proses transfer selesai.`);
            } else {
              if (progressMessage) {
                await progressMessage.edit(toEmbedPayload(`❌ **Proses Gagal!** Terjadi kesalahan saat rclone melakukan transfer data.`)).catch(() => {});
              }
              resolve(`Proses transfer dihentikan dengan error code ${code}`);
            }
          });
        });
      }

      // Tiga nama sekaligus buat command yang SAMA (alias) — biar user bisa
      // pakai versi yang paling gampang diingat/paling cepat diketik dari HP:
      // "dz" (paling singkat), "downloadzip" (paling jelas), "dlzip" (di
      // tengah-tengah). Ketiganya jatuh ke satu blok logic yang sama persis.
      case 'dz':
      case 'downloadzip':
      case 'dlzip': {
        if (args.length < 1) return `Format: \`${command} <path>\` (kalau file/folder rahasia dan/atau ukuran ASLI ≥50MB, tambahkan PIN: \`${command} <path> <pin>\`)`;
        if (!dscMessage) return `Fitur ${command} cuma bisa dipakai lewat Discord.`;

        const srcVirtual = resolvePathArg(args[0]);
        const absSrc = resolveForRclone(srcVirtual);
        if (!fs.existsSync(absSrc)) return `❌ Gagal: \`${toDisplayPath(srcVirtual)}\` tidak ditemukan.`;

        // Sama seperti copy/move/delete/download: cegah zip folder yang di
        // dalamnya ada BLOCKED_PATH — kalau lolos, isi yang di-block ikut
        // terpaket ke .zip dan ke-upload ke Drive (bocor keluar sandbox).
        if (containsBlockedPath(absSrc)) {
          return `❌ Gagal: \`${toDisplayPath(srcVirtual)}\` tidak bisa di-zip karena mengandung folder/file yang diblokir (BLOCKED_PATHS) di dalamnya. Zip isinya per-item saja, lewati yang diblokir.`;
        }

        const localSize = await getLocalSize(absSrc);
        const needsConfidentialPin = isConfidential(absSrc);
        const needsSizePin = localSize >= PIN_SIZE_THRESHOLD;

        if (needsConfidentialPin || needsSizePin) {
          if (args.length < 2) {
            const label = needsConfidentialPin
              ? `🔒 **Data ini bersifat RAHASIA.** \`${toDisplayPath(srcVirtual)}\` butuh PIN keamanan buat di-zip & didownload.`
              : `🔒 **Ukuran ASLI ${formatBytes(localSize)} (≥50MB).** Zip+download sebesar ini wajib PIN keamanan (cegah bot crash/storage Drive penuh & cegah diulang-ulang kalau Discord-mu kena hack).`;
            return `${label}\nFormat: \`${command} ${args[0]} <pin>\``;
          }
          const reason = needsConfidentialPin
            ? `${command} folder/file rahasia: ${toDisplayPath(srcVirtual)}`
            : `${command} besar (${formatBytes(localSize)}): ${toDisplayPath(srcVirtual)}`;
          await requirePin(args, reason);
          if (needsConfidentialPin) {
            sendAlertEmail(
              '🔓 Zip+Download folder RAHASIA dijalankan',
              `Folder/file rahasia "${toDisplayPath(srcVirtual)}" berhasil di-zip & diupload ke Google Drive dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, PIN-mu sudah bocor dan data rahasiamu baru saja disalin keluar — segera amankan akun Discord-mu.`
            ).catch(() => {});
          }
        }

        // Cek sisa kapasitas Drive lebih dulu pakai ukuran ASLI (sebelum
        // di-zip) sebagai estimasi kasar/konservatif — hasil kompres zip
        // hampir selalu lebih kecil dari sumber asli (kecuali file yang
        // memang sudah terkompres kayak .mp4/.zip/.jpg), jadi cek dengan
        // ukuran asli sudah cukup aman (tidak akan lolos padahal Drive
        // penuh, paling konservatif "menolak lebih awal" dari seharusnya).
        const driveFreeSpace = await getDriveFreeSpace();
        if (localSize > driveFreeSpace) {
          return `❌ **Zip+Download Ditolak!** Ukuran ASLI target melebihi kapasitas Google Drive Anda.\n` +
                 `• Target: **${formatBytes(localSize)}**\n` +
                 `• Sisa Drive: **${formatBytes(driveFreeSpace)}**`;
        }

        const entityName = path.basename(absSrc);
        const zipName = `${entityName}.zip`;
        const remoteTarget = `${config.rcloneRemote}:${config.rcloneStagingFolder}/${zipName}`;

        // archiver di-pipe LANGSUNG ke stdin "rclone rcat" (fsops.js) —
        // compress & upload jalan dalam SATU alur stream, tanpa nulis file
        // .zip ke disk lokal sama sekali. Lebih cepat & tidak butuh ruang
        // disk ekstra dibanding compress-ke-file-dulu-baru-upload.
        const progressMessage = await dscMessage.reply(toEmbedPayload(`🗜️📤 **Zip & Upload...** \`${entityName}\` (${formatBytes(localSize)}) — langsung dikompres sambil diupload, tanpa nyimpen .zip lokal.`));

        let result;
        try {
          // PERBAIKAN: dulu progress dihitung dari pembacaan file sumber
          // (fase compress) — itu selesai CEPAT (dibatasi disk lokal),
          // jadi progress langsung lompat ke "100%" padahal upload ke
          // Google Drive (dibatasi kecepatan internet, jauh lebih lambat)
          // masih jalan lama setelahnya. Sekarang streamArchiveToRemote()
          // (fsops.js) melapor `compressedBytes` — byte yang BENAR-BENAR
          // sudah mengalir ke proses rclone — secara berkala SELAMA
          // SELURUH proses (bukan cuma pas baca disk). Karena ukuran zip
          // final belum diketahui sampai proses ini selesai (streaming,
          // bukan file jadi), yang ditampilkan sengaja JUMLAH BYTE
          // TERKIRIM (naik terus), BUKAN persentase — daripada nampilin
          // angka yang keliatan "selesai" padahal belum.
          result = await streamArchiveToRemote(absSrc, remoteTarget, ({ compressedBytes }) => {
            progressMessage.edit(toEmbedPayload(
              `🗜️📤 **Zip & Upload:** ${formatBytes(compressedBytes)} terkirim — \`${entityName}\`\n_(dikompres sambil diupload, ukuran akhir belum pasti sampai selesai)_`
            )).catch(() => {});
          });
        } catch (err) {
          await progressMessage.edit(toEmbedPayload(`❌ **Zip/upload gagal:** ${err.message}`)).catch(() => {});
          return `Proses zip/upload gagal: ${err.message}`;
        }

        await progressMessage.edit(toEmbedPayload(
          `✅ **Zip & Upload Sukses!**\n• Sumber: \`${toDisplayPath(srcVirtual)}\` (${formatBytes(localSize)})\n• Zip: \`${zipName}\` (${formatBytes(result.compressedBytes)})\n• Streaming langsung — tidak ada file .zip lokal yang tersisa sama sekali.`
        )).catch(() => {});
        return 'Proses transfer selesai.';
      }

      default:
        return `Command tidak dikenali: "${command}". Ketik "help" untuk daftar command.`;
    }
  } catch (err) {
    return `Gagal: ${err.message}`;
  }
}
