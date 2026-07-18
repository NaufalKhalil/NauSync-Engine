import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import nodemailer from 'nodemailer';
import { config } from './config.js';

// File tempat nyimpen HASH pin (BUKAN pin mentah!) — jadi walau file ini
// somehow kebaca orang lain (atau ke-commit ke git secara tidak sengaja),
// PIN aslinya tidak langsung ketahuan begitu saja.
const PIN_FILE = path.resolve('./pin.store.json');

// --- Rate limiting / anti brute-force ---
// PIN sekarang 8 karakter alfanumerik campur besar/kecil (lihat
// generateRandomPin di bawah) — ruang kombinasi ~218 triliun, jauh di atas
// PIN 4 digit lama (10.000 kombinasi). Rate limit ini tetap dipertahankan
// sebagai lapis kedua, bukan diandalkan sendirian.
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000; // 15 menit
let failedAttempts = 0;
let lockoutUntil = 0;

const PIN_CHARSET_UPPER = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const PIN_CHARSET_LOWER = 'abcdefghjkmnpqrstuvwxyz';
const PIN_CHARSET_DIGIT = '23456789';
const PIN_CHARSET_ALL = PIN_CHARSET_UPPER + PIN_CHARSET_LOWER + PIN_CHARSET_DIGIT;
const PIN_LENGTH = 8;

function hashPin(pin, salt) {
  return crypto.scryptSync(String(pin), salt, 64).toString('hex');
}

function randomChar(charset) {
  return charset[crypto.randomInt(0, charset.length)];
}

function generateRandomPin() {
  const chars = [
    randomChar(PIN_CHARSET_UPPER),
    randomChar(PIN_CHARSET_LOWER),
    randomChar(PIN_CHARSET_DIGIT),
  ];
  for (let i = chars.length; i < PIN_LENGTH; i++) {
    chars.push(randomChar(PIN_CHARSET_ALL));
  }
  for (let i = chars.length - 1; i > 0; i--) {
    const j = crypto.randomInt(0, i + 1);
    const tmp = chars[i];
    chars[i] = chars[j];
    chars[j] = tmp;
  }
  return chars.join('');
}

function loadStore() {
  if (!fs.existsSync(PIN_FILE)) return null;
  return JSON.parse(fs.readFileSync(PIN_FILE, 'utf-8'));
}

function saveStore(store) {
  fs.writeFileSync(PIN_FILE, JSON.stringify(store, null, 2), 'utf-8');
}

function getTransporter() {
  return nodemailer.createTransport({
    host: config.smtpHost,
    port: config.smtpPort,
    secure: config.smtpPort === 465,
    auth: { user: config.smtpUser, pass: config.smtpPass },
  });
}

// Alert biasa (teks polos) — dipakai buat notifikasi yang TIDAK membawa PIN
// mentah (lockout, command berbahaya berhasil dieksekusi, dll).
export async function sendAlertEmail(subject, body) {
  await getTransporter().sendMail({
    from: config.smtpUser,
    to: config.pinAlertEmail,
    subject: `🔐 Nausync Cloud [${config.laptopLabel}] — ${subject}`,
    text: body,
  });
}

// Email yang MEMBAWA PIN mentah (initPin/changePin) — dibuat versi HTML
// dengan kotak PIN monospace besar, gampang di-select buat di-copy manual.
//
// CATATAN: versi sebelumnya sempat ada tombol "📋 Copy PIN" pakai
// `onclick="navigator.clipboard.writeText(...)"`, tapi tombol itu DIHAPUS
// karena memang tidak pernah benar-benar berfungsi — hampir semua klien
// email (Gmail, Outlook, Apple Mail versi web/app) MEMBLOKIR <script> dan
// event handler interaktif macam "onclick" di body email demi keamanan,
// jadi tombolnya cuma kelihatan seperti tombol tapi tidak ngapa-ngapain
// kalau diklik — lebih membingungkan daripada membantu. Solusinya: PIN
// ditampilkan sebagai teks monospace besar berspasi (lewat CSS
// `letter-spacing`, murni visual, tidak ikut ke-copy sebagai karakter),
// jadi cukup triple-click / tap-and-hold untuk select-all lalu copy manual
// — cara ini beneran jalan di semua klien email, tidak seperti tombolnya.
function buildPinEmailHtml(pin, introText) {
  return `
  <div style="font-family: -apple-system, Segoe UI, Roboto, Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 24px; border: 1px solid #e2e2e2; border-radius: 12px;">
    <div style="display: inline-block; margin-bottom: 12px; padding: 4px 10px; background: #111; color: #fff; border-radius: 999px; font-size: 12px; font-weight: bold; letter-spacing: 1px;">
      💻 LAPTOP: ${config.laptopLabel}
    </div>
    <p style="font-size: 14px; color: #333; line-height: 1.5;">${introText}</p>
    <div style="margin: 20px 0; padding: 16px; background: #f5f5f7; border-radius: 8px; text-align: center;">
      <div style="font-family: 'Courier New', monospace; font-size: 26px; letter-spacing: 4px; font-weight: bold; color: #111; user-select: all; -webkit-user-select: all;">${pin}</div>
    </div>
    <p style="font-size: 12px; color: #888; margin-top: 16px; line-height: 1.5;">
      Tap-and-hold / triple-click kotak PIN di atas untuk select-all, lalu copy manual — PIN akan ter-copy rapat tanpa spasi, langsung bisa dipakai.
    </p>
  </div>`.trim();
}

async function sendPinDeliveryEmail(subject, pin, introText) {
  await getTransporter().sendMail({
    from: config.smtpUser,
    to: config.pinAlertEmail,
    subject: `🔐 Nausync Cloud [${config.laptopLabel}] — ${subject}`,
    text: `[Laptop: ${config.laptopLabel}]\n\n${introText}\n\nPIN: ${pin}`,
    html: buildPinEmailHtml(pin, introText),
  });
}

// Dipanggil SETIAP KALI bot startup (dari index.js) — bukan cuma first run.
// Setiap bot baru hidup (start pertama kali ATAUPUN restart), PIN LAMA
// (apa pun nilainya) otomatis di-generate ulang & PIN baru dikirim ke email
// terpisah (BUKAN lewat Discord), sesuai desain: PIN harus independen dari
// kanal Discord yang mungkin di-hack.
//
// Ini SENGAJA tidak lagi "cuma sekali doang" (dulu ada logic
// forcePinResetOnce terpisah yang jalan setelah ini, khusus migrasi versi
// lama) — supaya tidak ada 2 mekanisme "kirim PIN saat startup" yang bisa
// nyala bareng dan mengirim 2 email PIN berbeda dalam 1x nyala bot.
// Sekarang cukup SATU fungsi ini, dipanggil SATU kali per startup di
// index.js, hasilnya SATU email PIN per kali bot nyala/restart.
export async function initPin() {
  const pin = generateRandomPin();
  const salt = crypto.randomBytes(16).toString('hex');
  saveStore({ hash: hashPin(pin, salt), salt, updatedAt: new Date().toISOString() });

  try {
    await sendPinDeliveryEmail(
      'PIN baru (bot baru saja nyala/restart)',
      pin,
      'PIN untuk validasi command berbahaya (shutdown/restart/purge/preview folder rahasia). PIN LAMA (apa pun nilainya, termasuk kalau kamu sudah lupa) otomatis di-reset setiap kali bot nyala/restart — ini PIN yang berlaku SEKARANG. Kalau kamu TIDAK baru saja menyalakan/restart laptop ini, segera cek keamanan laptop & akun Discord-mu.'
    );
  } catch (err) {
    // Kalau SMTP belum di-setting / gagal kirim, tampilkan di log server
    // sebagai fallback, supaya owner tidak terkunci total dari fitur PIN.
    console.warn(`⚠️ Gagal kirim email PIN startup (${err.message}).`);
    console.warn(`⚠️ PIN startup (fallback, HANYA muncul di log ini): ${pin}`);
  }
}

// --- Auto-expiry PIN (lapisan keamanan tambahan) ---
//
// KENAPA INI PERLU: sistem rotate-sekali-pakai (verifyAndRotatePin) sudah
// menangani kasus "PIN kepakai/kebaca lewat histori chat". Tapi kalau PIN
// TIDAK PERNAH dipakai sama sekali dalam waktu lama (mis. owner jarang
// jalanin command berbahaya), PIN yang sama itu bisa beredar/tersimpan
// (mis. di catatan pribadi, screenshot lama, dst) tanpa pernah "kadaluarsa"
// secara otomatis. PIN_EXPIRY_DAYS memaksa PIN diganti otomatis walau
// tidak pernah dipakai, supaya umur maksimal satu PIN tetap terbatas.
//
// BEDA dengan verifyAndRotatePin/changePin: keduanya butuh PIN LAMA yang
// valid dulu (rotasi karena PEMAKAIAN). Expiry ini rotasi karena WAKTU,
// jadi tidak butuh PIN lama sama sekali — cukup cek `updatedAt` di
// pin.store.json sudah lewat dari batas atau belum.
const PIN_EXPIRY_DAYS = 90;
const PIN_EXPIRY_MS = PIN_EXPIRY_DAYS * 24 * 60 * 60 * 1000;

// Cek expiry 1x/hari cukup (granularitas "hari" sudah pas buat kebutuhan
// ini, tidak perlu lebih sering) — dijadwalkan lewat setInterval di
// startPinExpiryWatcher(), supaya kalau bot nyala non-stop berbulan-bulan
// tanpa pernah di-restart, expiry tetap kecek rutin (bukan cuma dicek
// sekali pas startup doang).
const EXPIRY_CHECK_INTERVAL_MS = 24 * 60 * 60 * 1000;

function isStoreExpired(store) {
  if (!store || !store.updatedAt) return false;
  const age = Date.now() - new Date(store.updatedAt).getTime();
  return age >= PIN_EXPIRY_MS;
}

async function rotateExpiredPinIfNeeded() {
  const store = loadStore();
  if (!isStoreExpired(store)) return;

  const newPin = generateRandomPin();
  const salt = crypto.randomBytes(16).toString('hex');
  saveStore({ hash: hashPin(newPin, salt), salt, updatedAt: new Date().toISOString() });

  try {
    await sendPinDeliveryEmail(
      `PIN baru (otomatis diganti — sudah ${PIN_EXPIRY_DAYS} hari tidak diganti)`,
      newPin,
      `PIN lama sudah dipakai lebih dari ${PIN_EXPIRY_DAYS} hari tanpa pernah diganti, jadi sistem otomatis menggantinya demi kebersihan keamanan (PIN yang beredar terlalu lama makin berisiko walau belum pernah bocor). PIN lama sekarang SUDAH TIDAK BERLAKU LAGI. Ini BUKAN tanda ada yang salah — ini rotasi rutin otomatis berbasis waktu. Kalau ada command berbahaya yang gagal karena PIN lama, pakai PIN baru ini.`
    );
  } catch (err) {
    console.warn(`⚠️ Gagal kirim email rotasi PIN otomatis (expiry): ${err.message}`);
  }
}

// Dipanggil sekali dari index.js setelah initPin() saat startup. Langsung
// cek sekali di awal, lalu jadwalkan pengecekan ulang tiap
// EXPIRY_CHECK_INTERVAL_MS selama proses bot hidup.
export function startPinExpiryWatcher() {
  rotateExpiredPinIfNeeded().catch((err) => console.warn(`⚠️ Gagal cek expiry PIN: ${err.message}`));
  setInterval(() => {
    rotateExpiredPinIfNeeded().catch((err) => console.warn(`⚠️ Gagal cek expiry PIN: ${err.message}`));
  }, EXPIRY_CHECK_INTERVAL_MS);
}

export function isLockedOut() {
  return Date.now() < lockoutUntil;
}

// Lempar Error kalau PIN salah / bot lagi lockout. Return true kalau valid.
export function verifyPin(inputPin) {
  if (isLockedOut()) {
    const remainingMin = Math.ceil((lockoutUntil - Date.now()) / 60000);
    throw new Error(`🔒 PIN terkunci sementara karena terlalu banyak percobaan salah. Coba lagi dalam ${remainingMin} menit.`);
  }

  const store = loadStore();
  if (!store) {
    throw new Error('PIN belum pernah di-generate. Restart bot dulu supaya PIN awal dikirim ke email.');
  }

  const valid = Boolean(inputPin) && hashPin(inputPin, store.salt) === store.hash;

  if (!valid) {
    failedAttempts++;
    if (failedAttempts >= MAX_ATTEMPTS) {
      lockoutUntil = Date.now() + LOCKOUT_MS;
      failedAttempts = 0;
      sendAlertEmail(
        '⚠️ ALERT: percobaan PIN salah berkali-kali',
        `Ada ${MAX_ATTEMPTS} percobaan PIN SALAH berturut-turut untuk command berbahaya.\nBot dikunci selama ${LOCKOUT_MS / 60000} menit.\nWaktu: ${new Date().toISOString()}\n\nKalau ini bukan kamu, segera cek keamanan akun Discord-mu (ganti password, cek active sessions, aktifkan 2FA).`
      ).catch(() => {});
      throw new Error(`❌ PIN salah ${MAX_ATTEMPTS}x berturut-turut. Bot dikunci ${LOCKOUT_MS / 60000} menit & email alert sudah dikirim.`);
    }
    throw new Error(`❌ PIN salah. (percobaan ke-${failedAttempts} dari ${MAX_ATTEMPTS} sebelum lockout)`);
  }

  failedAttempts = 0;
  return true;
}

// --- PIN sekali-pakai untuk command berbahaya (shutdown/restart/purge/
// preview folder rahasia) ---
//
// KENAPA INI PENTING: PIN itu diketik user LANGSUNG di chat Discord (mis.
// "shutdown Ab3xQ9kZ"), dan bot TIDAK BISA menghapus pesan itu — Discord
// bot cuma boleh hapus pesan MILIK BOT SENDIRI di sebuah DM, bukan pesan
// dari user (beda dengan di server/guild yang bisa dikasih izin "Manage
// Messages"; di DM aturan itu tidak berlaku sama sekali). Jadi kalau akun
// Discord-mu kena hack, penyerang bisa scroll ke atas dan baca command lama
// beserta PIN aslinya.
//
// SOLUSINYA: PIN dibuat SEKALI PAKAI. Begitu satu command berbahaya
// berhasil dieksekusi dengan PIN yang benar, PIN itu langsung dianggap
// "terbakar" — bot otomatis generate PIN BARU dan kirim ke email (bukan ke
// Discord). Jadi kalaupun penyerang baca PIN lama dari histori chat, PIN
// itu sudah tidak berlaku lagi begitu kamu (pemilik asli) sudah pernah
// pakai sekali — dan kalau penyerang yang pakai duluan, kamu langsung dapat
// email berisi PIN baru (jadi juga otomatis jadi "alert" versi lain: kalau
// kamu dapat email PIN baru padahal kamu tidak baru saja jalanin command
// apa pun, itu tanda ada yang salah gunakan PIN-mu).
// --- State sementara buat command "restart" (lihat opts.silent di bawah) ---
// Cuma disimpan di MEMORI (bukan file), sengaja begitu: kalau bot mati/
// restart, state ini otomatis hilang begitu saja — dan memang seharusnya,
// karena begitu bot hidup lagi, initPin() di index.js SUDAH otomatis kirim
// PIN baru sendiri, jadi pending pin di sini otomatis jadi tidak relevan
// lagi (sudah keburu ke-superseded oleh PIN yang lebih baru dari startup).
let pendingSilentPin = null; // { pin, reason, setAt }

export async function verifyAndRotatePin(inputPin, reason, opts = {}) {
  const { silent = false } = opts;

  verifyPin(inputPin); // lempar Error kalau salah/lockout, tidak lanjut ke bawah

  const newPin = generateRandomPin();
  const salt = crypto.randomBytes(16).toString('hex');
  saveStore({ hash: hashPin(newPin, salt), salt, updatedAt: new Date().toISOString() });

  if (silent) {
    // KENAPA INI PERLU: dipakai KHUSUS buat command "restart". Command itu
    // bikin laptop beneran reboot dalam ~15 detik, dan begitu bot hidup
    // lagi setelah boot, initPin() di index.js OTOMATIS generate + kirim
    // PIN BARU LAGI. Kalau di sini kita JUGA langsung email PIN hasil
    // rotasi ini, owner dapat 2 EMAIL PIN BERBEDA cuma buat 1x restart —
    // dan email yang PERTAMA langsung basi begitu email KEDUA (dari
    // startup) nyampe, jadi cuma bikin bingung PIN mana yang berlaku.
    //
    // Solusinya: PIN di atas TETAP di-rotate (PIN lama tetap langsung
    // hangus, sama seperti command berbahaya lain), tapi EMAIL-nya
    // DITAHAN dulu di sini (pendingSilentPin), BUKAN dihilangkan — kalau
    // restart-nya ternyata GAGAL dieksekusi atau keburu dibatalkan pakai
    // "cancel" (laptop TIDAK jadi reboot, jadi initPin() TIDAK akan pernah
    // jalan buat gantiin), resendPendingSilentPinIfAny() di bawah akan
    // tetap mengirim PIN ini lewat email — supaya owner tidak pernah
    // sampai terkunci total gara-gara PIN baru tidak pernah diberitahukan.
    pendingSilentPin = { pin: newPin, reason, setAt: Date.now() };
    return;
  }

  // Sengaja tidak di-`await` gagal-total-kan command aslinya kalau kirim
  // email rotasi ini somehow error (mis. SMTP lagi down) — command yang
  // sudah terverifikasi PIN-nya tetap harus jalan, jangan sampai laptop
  // gagal shutdown cuma gara-gara nodemailer timeout. Tapi tetap di-log.
  sendPinDeliveryEmail(
    `PIN baru (otomatis diganti setelah dipakai untuk "${reason}")`,
    newPin,
    `PIN lama baru saja dipakai untuk menjalankan "${reason}" dan sekarang SUDAH TIDAK BERLAKU LAGI — ini PIN barunya. Rotasi otomatis ini terjadi setiap kali PIN berhasil dipakai, supaya PIN yang mungkin pernah "kelihatan" di histori chat Discord tidak bisa dipakai ulang oleh siapa pun. Kalau kamu TIDAK baru saja menjalankan "${reason}", itu tanda PIN lama-mu bocor dan disalahgunakan orang lain — segera amankan akun Discord-mu.`
  ).catch((err) => console.warn(`⚠️ Gagal kirim email rotasi PIN otomatis: ${err.message}`));
}

// Dipanggil dari commands.js di 2 tempat: (1) catch block command "restart"
// kalau shutdown.exe /r GAGAL dijalankan, (2) command "cancel" kalau
// berhasil membatalkan restart yang masih pending. Di kedua kasus itu,
// laptop TIDAK JADI reboot, jadi email PIN yang tadi ditahan (lihat
// opts.silent di atas) WAJIB tetap dikirim sekarang juga — kalau tidak,
// owner terkunci total (PIN sudah ke-rotate tapi tidak pernah tahu PIN
// barunya apa). No-op (tidak ngapa-ngapain) kalau memang tidak ada PIN
// yang lagi ditahan.
export async function resendPendingSilentPinIfAny(context) {
  if (!pendingSilentPin) return;

  const { pin, reason } = pendingSilentPin;
  pendingSilentPin = null; // clear duluan, biar tidak ke-kirim dobel kalau ini somehow ke-trigger 2x

  try {
    await sendPinDeliveryEmail(
      `PIN baru (rotasi tertunda dari "${reason}")`,
      pin,
      `PIN lama sudah dipakai untuk "${reason}" dan sekarang SUDAH TIDAK BERLAKU LAGI — ini PIN barunya. Email ini SENGAJA ditunda sebentar (bukan langsung dikirim), karena "${reason}" seharusnya bikin bot restart otomatis dan mengirim PIN baru sendiri lewat jalur startup — tapi ternyata itu tidak terjadi (${context}), jadi PIN barunya dikirim sekarang lewat jalur ini supaya kamu tidak terkunci.`
    );
  } catch (err) {
    console.warn(`⚠️ Gagal kirim email PIN tertunda (${err.message}).`);
    console.warn(`⚠️ PIN tertunda (fallback, HANYA muncul di log ini): ${pin}`);
  }
}

// Dipanggil dari command "chgpin <pin_lama>". Perlu PIN LAMA yang valid
// dulu (sama seperti ganti password pakai password lama), baru generate
// PIN baru & kirim ke email. PIN baru berlaku permanen sampai diganti lagi.
export async function changePin(oldPin) {
  verifyPin(oldPin); // lempar Error kalau salah/lockout, tidak lanjut ke bawah

  const newPin = generateRandomPin();
  const salt = crypto.randomBytes(16).toString('hex');
  saveStore({ hash: hashPin(newPin, salt), salt, updatedAt: new Date().toISOString() });

  await sendPinDeliveryEmail(
    'PIN baru (diganti via command "chgpin")',
    newPin,
    `PIN lama sudah tidak berlaku lagi mulai sekarang. Waktu ganti: ${new Date().toISOString()}. Kalau kamu TIDAK meminta perubahan ini, kemungkinan akun Discord-mu sedang disalahgunakan orang lain yang berhasil menebak PIN lama — segera amankan akun Discord & pertimbangkan matikan laptop/bot ini dulu.`
  );
}
