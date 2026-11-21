import fs from 'node:fs';
import path from 'node:path';
import { config } from './config.js';

/**
 * Pisahkan virtual path (mis. "Documents/Skripsi/bab1.docx") jadi
 * { rootName: "Documents", rest: ["Skripsi", "bab1.docx"] }.
 */
function splitVirtualPath(virtualPath) {
  const normalized = virtualPath.replace(/\\/g, '/').replace(/^\/+/, '');
  const segments = normalized.split('/').filter(Boolean);
  return { rootName: segments[0], rest: segments.slice(1) };
}

// Windows tidak peduli huruf besar/kecil pada nama folder ("D:\Project" dan
// "D:\PROJECT" adalah folder yang SAMA di disk), tapi perbandingan string
// biasa (startsWith) itu case-SENSITIVE. Tanpa normalisasi ini, path yang
// diketik beda kapitalisasi dari BLOCKED_PATHS/CONFIDENTIAL_PATHS bisa lolos
// dari pengecekan padahal menyasar folder fisik yang sama persis. Di
// Linux/Mac (di mana filesystem umumnya case-sensitive), perbandingan tetap
// apa adanya.
function normalizeForCompare(p) {
  return process.platform === 'win32' ? p.toLowerCase() : p;
}

// --- Path FISIK (realpath) ---
//
// Semua pengecekan blocked/confidential dulu cuma membandingkan STRING path
// yang diketik user. Itu bisa dikelabui: nama pendek 8.3 ("PROJEC~1"),
// junction/symlink, atau beda kapitalisasi drive bisa menunjuk folder
// fisik yang sama dengan BLOCKED_PATHS/CONFIDENTIAL_PATHS tapi stringnya
// tidak cocok. fs.realpathSync.native() meluaskan semuanya (8.3, junction,
// symlink) jadi lokasi fisik yang sebenarnya.
//
// realpathLoose(): sama seperti realpath, tapi tetap bekerja untuk path
// yang BELUM ada (mis. tujuan copy/move) — realpath-kan leluhur terdekat
// yang sudah ada, lalu tempelkan sisanya.
function realpathLoose(p) {
  let current = p;
  const tail = [];
  while (true) {
    try {
      const real = fs.realpathSync.native(current);
      return tail.length ? path.join(real, ...tail.slice().reverse()) : real;
    } catch {
      const parent = path.dirname(current);
      if (parent === current) return p; // sudah di puncak & tetap gagal (mis. drive tidak ada)
      tail.push(path.basename(current));
      current = parent;
    }
  }
}

// Daftar BLOCKED_PATHS / CONFIDENTIAL_PATHS "diperluas": string aslinya DAN
// bentuk fisiknya (realpath). Di-cache 60 detik supaya listing folder besar
// tidak memanggil realpath ratusan kali; cukup singkat supaya drive yang
// baru dicolok / junction yang baru dibuat tetap ketangkap tanpa restart.
const EXPAND_TTL_MS = 60 * 1000;
const expandCache = new Map(); // kind -> { at, list }

function expandedPaths(kind, rawList) {
  const cached = expandCache.get(kind);
  if (cached && Date.now() - cached.at < EXPAND_TTL_MS) return cached.list;

  const seen = new Set();
  const list = [];
  const add = (p) => {
    const key = normalizeForCompare(p);
    if (!seen.has(key)) {
      seen.add(key);
      list.push(p);
    }
  };
  for (const p of rawList) {
    add(p);
    add(realpathLoose(p));
  }

  expandCache.set(kind, { at: Date.now(), list });
  return list;
}

const blockedList = () => expandedPaths('blocked', config.blockedPaths);
const confidentialList = () => expandedPaths('confidential', config.confidentialPaths);

function withSep(p) {
  return p.endsWith(path.sep) ? p : p + path.sep;
}

// True kalau absPath sama dengan / ada di dalam salah satu path di `list`.
function isInsideAny(absPath, list) {
  const target = normalizeForCompare(absPath);
  return list.some((entry) => {
    const e = normalizeForCompare(entry);
    return target === e || target.startsWith(withSep(e));
  });
}

// True kalau absPath adalah LELUHUR dari salah satu path di `list`.
function containsAny(absPath, list) {
  const prefix = withSep(normalizeForCompare(absPath));
  return list.some((entry) => normalizeForCompare(entry).startsWith(prefix));
}

/**
 * Resolve virtual path jadi path absolut di filesystem, dan pastikan
 * hasilnya tidak keluar dari root yang bersangkutan (mencegah "../../"
 * traversal, path absolut liar, atau lompat ke drive/folder lain yang
 * tidak di-whitelist).
 *
 * Segment pertama dari path WAJIB nama salah satu root di ALLOWED_ROOTS
 * (mis. "Documents", "D", "Pictures") — ini menggantikan konsep BASE_DIR
 * tunggal yang lama, sekarang bisa banyak folder root sekaligus.
 *
 * Contoh virtual path yang valid:
 *   "Documents"              -> root Documents itu sendiri
 *   "Documents/Skripsi"      -> subfolder di dalam root Documents
 *   "D/Project/app.js"       -> file di dalam root D
 *
 * PERUBAHAN: yang DIKEMBALIKAN sekarang path FISIK (realpath) — bukan
 * string yang diketik. Jadi semua pengecekan lanjutan di commands.js
 * (isConfidential, containsBlockedPath, dst.) otomatis bekerja pada lokasi
 * sebenarnya, tidak bisa dikelabui nama pendek 8.3 atau junction.
 */
export function safeResolve(virtualPath) {
  if (!virtualPath || typeof virtualPath !== 'string') {
    throw new Error('Path kosong atau tidak valid.');
  }

  const { rootName, rest } = splitVirtualPath(virtualPath);

  if (!rootName) {
    throw new Error('Path harus diawali nama folder yang diizinkan. Ketik "list" di root untuk lihat daftarnya.');
  }

  const rootAbsPath = config.allowedRoots[rootName];
  if (!rootAbsPath) {
    const available = listRootNames().join(', ');
    throw new Error(`"${rootName}" bukan folder yang diizinkan. Folder yang tersedia: ${available}`);
  }

  // Bersihkan drive-letter/path absolut liar yang mungkin diselipkan di
  // tengah-tengah segmen (mis. "Documents/C:\Windows") biar tidak bisa
  // "kabur" lewat trik semacam itu.
  const cleanedRest = rest
    .map((seg) => seg.replace(/^[a-zA-Z]:\\?/, ''))
    .join('/');

  const resolved = path.resolve(rootAbsPath, cleanedRest);

  const normalizedRoot = withSep(rootAbsPath);

  if (resolved !== rootAbsPath && !resolved.startsWith(normalizedRoot)) {
    throw new Error(`Path "${virtualPath}" berada di luar folder "${rootName}" yang diizinkan.`);
  }

  if (isBlocked(resolved)) {
    throw new Error(`Path "${virtualPath}" adalah folder/file yang diblokir dan tidak boleh diakses.`);
  }

  // --- Pertahanan symlink/junction/8.3 ---
  // Cek di atas cuma memvalidasi STRING path-nya. Di sini path diubah ke
  // lokasi FISIK (mengikuti SEMUA symlink/junction & meluaskan nama 8.3,
  // termasuk di folder induknya), lalu:
  //   1. harus tetap berada di dalam root fisik yang sama (anti symlink-escape)
  //   2. dicek ulang terhadap BLOCKED_PATHS (anti bypass lewat nama pendek)
  // Path yang belum ada (mis. tujuan copy/move) di-realpath lewat leluhur
  // terdekat yang sudah ada, jadi tidak bisa menyelinap lewat symlink di
  // folder induknya.
  const realResolved = realpathLoose(resolved);
  const realRoot = realpathLoose(rootAbsPath);

  const normalizedRealTarget = normalizeForCompare(realResolved);
  const normalizedRealRoot = normalizeForCompare(realRoot);

  if (normalizedRealTarget !== normalizedRealRoot && !normalizedRealTarget.startsWith(withSep(normalizedRealRoot))) {
    throw new Error(`Path "${virtualPath}" mengarah lewat symlink/junction ke luar folder "${rootName}" yang diizinkan — akses ditolak.`);
  }

  if (isBlocked(realResolved)) {
    throw new Error(`Path "${virtualPath}" adalah folder/file yang diblokir dan tidak boleh diakses.`);
  }

  return realResolved;
}

/**
 * True kalau absPath (path filesystem absolut, hasil resolve) sama dengan,
 * atau berada DI DALAM, salah satu folder/file yang didaftarkan di
 * BLOCKED_PATHS (termasuk bentuk fisik/realpath-nya) — dipakai untuk
 * mengecualikan folder sensitif (mis. folder project bot ini sendiri yang
 * berisi .env) walaupun berada di dalam root yang diizinkan.
 */
export function isBlocked(absPath) {
  return isInsideAny(absPath, blockedList());
}

/**
 * True kalau absPath sama dengan, atau berada DI DALAM, salah satu folder
 * di CONFIDENTIAL_PATHS. Beda dengan isBlocked(): folder confidential masih
 * boleh muncul di "list" (namanya kelihatan), tapi command yang MEMBACA
 * ISINYA (preview/download) wajib PIN + trigger email alert — lihat
 * commands.js.
 */
export function isConfidential(absPath) {
  return isInsideAny(absPath, confidentialList());
}

/**
 * True kalau absPath adalah folder LELUHUR dari salah satu
 * CONFIDENTIAL_PATHS — arah kebalikan dari isConfidential().
 *
 * KENAPA PERLU: isConfidential() cuma menjawab "apakah target ada DI DALAM
 * folder rahasia?". Target yang justru MENGANDUNG folder rahasia (mis.
 * "D/Project" yang di dalamnya ada "D/Project/Data Siswa") lolos dari
 * pengecekan itu, padahal copy/zip/download/move folder induknya ikut
 * membawa seluruh isi folder rahasia tanpa PIN.
 */
export function containsConfidentialPath(absPath) {
  return containsAny(absPath, confidentialList());
}

/**
 * Cari path confidential (dari CONFIDENTIAL_PATHS) yang menjadi LELUHUR
 * (atau sama persis dengan) absPath — kembalikan path confidential asli
 * (bukan absPath itu sendiri) kalau ketemu, atau null kalau absPath tidak
 * ada di dalam folder confidential mana pun.
 *
 * KENAPA INI PERLU: deletePath() di fsops.js memindahkan file ke ".trash"
 * di dalam ROOT (mis. "D:/.trash"), bukan di lokasi asli file itu berada.
 * Tanpa fungsi ini, menghapus file dari folder confidential (mis.
 * "D:/Project/Data Siswa/nilai.xlsx") akan membuat file itu "naik keluar"
 * dari perlindungan CONFIDENTIAL_PATHS begitu masuk ".trash" di root —
 * padahal isinya tetap sama sensitifnya, cuma lokasinya berubah. Dipakai
 * fsops.js untuk menaruh trash-nya TETAP di dalam folder confidential
 * asal (bukan di ".trash" milik root), supaya proteksi PIN-nya ikut
 * terbawa walau file sudah "dihapus" (dipindah ke trash).
 */
export function confidentialAncestorOf(absPath) {
  const target = normalizeForCompare(absPath);
  let best = null;
  for (const confidential of confidentialList()) {
    const c = normalizeForCompare(confidential);
    if (target === c || target.startsWith(withSep(c))) {
      // Ambil yang paling SPESIFIK (path terpanjang) kalau ada beberapa
      // confidential path yang bersarang (mis. "D/Project" dan
      // "D/Project/Data Siswa" sama-sama terdaftar).
      if (!best || confidential.length > best.length) {
        best = confidential;
      }
    }
  }
  return best;
}

/**
 * True kalau virtualPath merujuk PERSIS ke root itu sendiri (bukan isi di
 * dalamnya) — dipakai untuk mencegah delete/move folder root secara utuh
 * (yang bisa menghapus/memindah seluruh folder Documents/Music/dst).
 */
export function isRootItself(virtualPath) {
  const { rootName, rest } = splitVirtualPath(virtualPath);
  return Boolean(rootName) && rest.length === 0 && Boolean(config.allowedRoots[rootName]);
}

/**
 * True kalau absPath adalah folder LELUHUR (ancestor) dari salah satu
 * BLOCKED_PATHS — arah kebalikan dari isBlocked(). isBlocked() menjawab
 * "apakah target ada DI DALAM sesuatu yang di-block?"; fungsi ini menjawab
 * "apakah target ADALAH folder yang MENGANDUNG sesuatu yang di-block, di
 * kedalaman berapa pun?"
 *
 * Ini WAJIB dicek sebelum operasi yang bersifat rekursif/menyapu seluruh isi
 * folder (delete/purge/move) — karena tanpa ini, menghapus folder induk yang
 * tidak masuk BLOCKED_PATHS (mis. "D/Project") tetap akan ikut menghapus isi
 * BLOCKED_PATHS yang ada di dalamnya (mis. "D/Project/Coding/Nausync
 * Engine"), sebab operasi filesystem (fs.rename/fs.rm) tidak tahu-menahu
 * soal daftar blokir — dia cuma diberi tahu "hapus folder ini dan semua
 * isinya".
 */
export function containsBlockedPath(absPath) {
  return containsAny(absPath, blockedList());
}

/**
 * Daftar nama-nama root yang diizinkan (urut alfabetis), dipakai untuk
 * menampilkan "folder virtual" tingkat atas saat "list"/"help" di root "/".
 *
 * Hanya root yang PATH-nya benar-benar ada di filesystem saat ini yang
 * ditampilkan — mis. root untuk SD card/drive eksternal yang belum dicolok
 * otomatis disembunyikan dari daftar, tanpa perlu restart bot. Begitu
 * drive-nya dicolok lagi, root itu otomatis muncul lagi di command
 * berikutnya (dicek ulang tiap kali fungsi ini dipanggil, bukan di-cache).
 */
export function listRootNames() {
  return Object.keys(config.allowedRoots)
    .filter((name) => fs.existsSync(config.allowedRoots[name]))
    .sort((a, b) => a.localeCompare(b, 'id', { sensitivity: 'base' }));
}
