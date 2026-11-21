import { execFile, spawn } from 'node:child_process';
import { promisify } from 'node:util';
import crypto from 'node:crypto';
import fs from 'node:fs';
import { config } from './config.js';
import { sendAlertEmail } from './pinStore.js';

// --- Remote session on-demand (pengganti Quick Assist) ---
//
// Prinsip: RustDesk di-install sebagai SERVICE Windows tapi DEFAULT-nya MATI
// (startup type Manual, service stopped). Bot yang menyalakannya HANYA saat
// owner mengetik "remote on <pin>" di Discord, dengan password acak baru
// tiap sesi (dikirim lewat EMAIL, bukan Discord — sama filosofinya dengan PIN).
// Sesi otomatis ditutup: password diganti acak lagi + service di-stop.
//
// Karena service RustDesk jalan sebagai SYSTEM, dia bisa nangkap layar user
// yang sedang login (dan layar login) — beda dengan bot ini yang ada di
// session 0 dan tidak bisa capture desktop sendiri.

const execFileAsync = promisify(execFile);

const RUSTDESK_EXE = process.env.RUSTDESK_PATH || 'C:\\Program Files\\RustDesk\\rustdesk.exe';
const SERVICE_NAME = 'RustDesk';
const SC_EXE = 'C:\\Windows\\System32\\sc.exe';
const NET_EXE = 'C:\\Windows\\System32\\net.exe';
const CMD_EXE = 'C:\\Windows\\System32\\cmd.exe';
// Lokasi config RustDesk service — dipakai sebagai fallback baca ID kalau
// "--get-id" tidak mengeluarkan output.
const RUSTDESK_TOML = 'C:\\Windows\\ServiceProfiles\\LocalService\\AppData\\Roaming\\RustDesk\\config\\RustDesk.toml';

export const REMOTE_DEFAULT_MINUTES = 30;
export const REMOTE_MAX_MINUTES = 120;

const PW_CHARSET = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';

// State di memori saja. Kalau bot mati/restart, cleanupRemoteOnStartup()
// menutup sisa sesi apa pun begitu bot hidup lagi.
let session = null; // { id, startedAt, endsAt, timer, watchdogPid }

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function generatePassword(len = 20) {
  let out = '';
  for (let i = 0; i < len; i++) out += PW_CHARSET[crypto.randomInt(0, PW_CHARSET.length)];
  return out;
}

async function isServiceRunning() {
  try {
    const { stdout } = await execFileAsync(SC_EXE, ['query', SERVICE_NAME]);
    return /RUNNING/i.test(stdout);
  } catch {
    return false;
  }
}

async function startService() {
  if (await isServiceRunning()) return;
  try {
    await execFileAsync(NET_EXE, ['start', SERVICE_NAME]);
  } catch (err) {
    if (!(await isServiceRunning())) {
      throw new Error(`Service "${SERVICE_NAME}" gagal dinyalakan (${(err.stderr || err.message).toString().trim().split('\n')[0]}). Pastikan RustDesk di-install (bukan portable) dan service-nya terdaftar.`);
    }
  }
}

async function stopService() {
  if (!(await isServiceRunning())) return;
  try {
    await execFileAsync(NET_EXE, ['stop', SERVICE_NAME]);
  } catch (err) {
    if (await isServiceRunning()) {
      throw new Error(`Service "${SERVICE_NAME}" gagal dihentikan: ${(err.stderr || err.message).toString().trim().split('\n')[0]}`);
    }
  }
}

// "rustdesk --password <pw>" butuh service sudah hidup (dia ngomong ke
// service lewat IPC), jadi diulang beberapa kali sampai service siap.
async function setPassword(pw) {
  let lastErr;
  for (let i = 0; i < 8; i++) {
    try {
      await execFileAsync(RUSTDESK_EXE, ['--password', pw], { timeout: 15000 });
      return;
    } catch (err) {
      lastErr = err;
      await sleep(1500);
    }
  }
  throw new Error(`Gagal set password RustDesk: ${lastErr?.message || 'unknown'}`);
}

async function getId() {
  try {
    const { stdout } = await execFileAsync(RUSTDESK_EXE, ['--get-id'], { timeout: 15000 });
    const id = stdout.trim();
    if (id) return id;
  } catch { /* lanjut ke fallback */ }

  try {
    const m = /^id\s*=\s*'([^']+)'/m.exec(fs.readFileSync(RUSTDESK_TOML, 'utf-8'));
    if (m) return m[1];
  } catch { /* ignore */ }

  throw new Error('Tidak bisa membaca RustDesk ID (cek RUSTDESK_PATH / apakah service sudah pernah jalan sekali).');
}

// Pengaman independen dari proses bot: proses cmd terpisah yang akan
// men-stop service setelah N detik walau bot crash/hang di tengah sesi.
function spawnWatchdog(seconds) {
  const child = spawn(
    CMD_EXE,
    ['/c', `ping -n ${seconds + 1} 127.0.0.1 >nul & ${NET_EXE} stop ${SERVICE_NAME}`],
    { detached: true, stdio: 'ignore', windowsHide: true }
  );
  child.unref();
  return child.pid;
}

function killWatchdog(pid) {
  if (!pid) return;
  execFile('C:\\Windows\\System32\\taskkill.exe', ['/pid', String(pid), '/t', '/f'], () => {});
}

export function getRemoteStatus() {
  if (!session) return { active: false };
  return { active: true, id: session.id, endsAt: session.endsAt, remainingMs: Math.max(0, session.endsAt - Date.now()) };
}

let starting = false; // cegah dua "remote on" bersamaan (keduanya lolos cek `session` sebelum salah satu selesai)

export async function startRemoteSession(minutes = REMOTE_DEFAULT_MINUTES) {
  if (session || starting) {
    throw new Error('Sesi remote sudah aktif atau sedang dinyalakan. Ketik `remote status`, atau `remote off` dulu kalau mau mulai ulang.');
  }
  if (!fs.existsSync(RUSTDESK_EXE)) {
    throw new Error(`RustDesk tidak ditemukan di "${RUSTDESK_EXE}". Install dulu, atau set RUSTDESK_PATH di .env.`);
  }

  starting = true;
  try {
    let password;
    let id;
    try {
      await startService();
      password = generatePassword();
      await setPassword(password);
      id = await getId();
    } catch (err) {
      // Service sempat dinyalakan tapi langkah berikutnya gagal -> jangan
      // biarkan service RustDesk hidup tanpa sesi yang tercatat.
      await stopService().catch(() => {});
      throw err;
    }

    const endsAt = Date.now() + minutes * 60 * 1000;
    const timer = setTimeout(() => {
      stopRemoteSession(`otomatis berakhir setelah ${minutes} menit`).catch(() => {});
    }, minutes * 60 * 1000);
    const watchdogPid = spawnWatchdog(minutes * 60 + 30);

    session = { id, startedAt: Date.now(), endsAt, timer, watchdogPid };

    // Password HANYA dikirim lewat email, tidak pernah lewat Discord.
    try {
      await sendAlertEmail(
        `🖥️ Remote session AKTIF (${minutes} menit)`,
        `Sesi remote RustDesk baru saja diaktifkan.\n\n` +
        `ID       : ${id}\n` +
        `Password : ${password}\n` +
        `Berakhir : ${new Date(endsAt).toLocaleString('id-ID')} (${minutes} menit)\n\n` +
        `Buka RustDesk di perangkatmu, masukkan ID di atas, lalu password-nya.\n` +
        `Password ini hanya berlaku untuk sesi ini; begitu sesi ditutup (remote off / habis waktu) password otomatis diganti acak.\n\n` +
        `Kalau kamu TIDAK menjalankan "remote on", segera ketik "remote off" dan amankan akun Discord-mu.`
      );
    } catch (err) {
      // Email gagal = pemilik tidak pernah menerima password, tapi service
      // sudah hidup. Tutup sesi (password diacak ulang, service dimatikan)
      // daripada membiarkan akses remote terbuka tanpa ada yang tahu
      // passwordnya.
      await stopRemoteSession('email password gagal terkirim — sesi dibatalkan').catch(() => {});
      throw new Error(`Email password gagal terkirim (${err.message}). Sesi remote DIBATALKAN & service dimatikan. Cek konfigurasi SMTP lalu coba lagi.`);
    }

    return { id, endsAt };
  } finally {
    starting = false;
  }
}

export async function stopRemoteSession(reason = 'manual') {
  const hadSession = Boolean(session);
  if (session) {
    clearTimeout(session.timer);
    killWatchdog(session.watchdogPid);
    session = null;
  }

  const wasRunning = await isServiceRunning();
  if (wasRunning) {
    // Hanguskan password lama dulu (ganti ke nilai acak yang tidak disimpan
    // di mana pun), baru matikan service — jadi password yang pernah
    // dikirim ke email sudah mati walau service tidak sengaja nyala lagi.
    await setPassword(generatePassword(32)).catch(() => {});
    await stopService();
  }

  if (hadSession || wasRunning) {
    sendAlertEmail(
      '🖥️ Remote session DITUTUP',
      `Sesi remote ditutup (${reason}) pada ${new Date().toISOString()}. Password sesi sudah diganti acak & service RustDesk dihentikan.`
    ).catch(() => {});
  }
  return { hadSession, wasRunning };
}

// Dipanggil sekali dari index.js saat bot nyala: pastikan TIDAK ADA sesi
// remote yang tersisa dari sebelum crash/reboot.
export async function cleanupRemoteOnStartup() {
  if (await isServiceRunning()) {
    await stopRemoteSession('bot baru nyala — sisa sesi lama dibersihkan');
  }
}
