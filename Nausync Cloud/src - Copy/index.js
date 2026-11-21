import { Client, GatewayIntentBits, Partials } from 'discord.js';
import pino from 'pino';
import { handleCommand, BUILD_TAG, clearBotMessagesInChannel } from './commands.js';
import { checkRcloneReady } from './rclone.js';
import { initPin, startPinExpiryWatcher, sendAlertEmail } from './pinStore.js';
import { purgeExpiredTrash } from './fsops.js';
import { config } from './config.js';
import { toEmbedPayload } from './embeds.js';
import { cleanupRemoteOnStartup } from './remote.js';

const logger = pino({ level: 'info' });

// --- Jaring pengaman: error nyasar (mis. DNS/ECONNRESET saat internet putus
// dari request REST atau rclone) JANGAN sampai membunuh proses bot. ---
process.on('unhandledRejection', (err) => logger.error(err, 'unhandledRejection'));
process.on('uncaughtException', (err) => logger.error(err, 'uncaughtException'));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// --- Sweep harian auto-purge trash (lihat purgeExpiredTrash di fsops.js) ---
// Item di ".trash" yang sudah lebih tua dari config.trashRetentionDays
// dihapus PERMANEN otomatis, supaya trash tidak menumpuk selamanya. Owner
// tetap dapat email ringkasan tiap kali ada yang benar-benar terhapus,
// supaya tidak ada penghapusan permanen yang terjadi "diam-diam" tanpa
// sepengetahuan owner.
const TRASH_SWEEP_INTERVAL_MS = 24 * 60 * 60 * 1000; // 1x/hari cukup

async function runTrashRetentionSweep() {
  try {
    const purged = await purgeExpiredTrash();
    if (purged.length === 0) return;

    logger.info(`Auto-purge trash: ${purged.length} item dihapus permanen (retensi ${config.trashRetentionDays} hari terlewati).`);
    await sendAlertEmail(
      `🧹 Auto-purge trash (${purged.length} item, retensi ${config.trashRetentionDays} hari)`,
      `${purged.length} item di ".trash" sudah lebih dari ${config.trashRetentionDays} hari dan otomatis DIHAPUS PERMANEN oleh sweep rutin:\n\n${purged.map((p) => `• ${p}`).join('\n')}\n\nIni bukan aksi manual — kalau ada item yang ternyata masih dibutuhkan, seharusnya sudah tidak bisa dipulihkan lagi. Pertimbangkan naikkan TRASH_RETENTION_DAYS di .env kalau retensi 30 hari (default) dirasa terlalu singkat.`
    ).catch((err) => logger.warn(`⚠️ Gagal kirim email ringkasan auto-purge trash: ${err.message}`));
  } catch (err) {
    logger.error(err, 'Gagal menjalankan auto-purge trash.');
  }
}

const client = new Client({
  intents: [GatewayIntentBits.DirectMessages],
  partials: [Partials.Channel]
});

// --- Watchdog koneksi ---
// Kalau bot pernah ready tapi lalu tidak ready lebih dari
// WATCHDOG_MAX_DOWN_MS (auto-reconnect discord.js macet), proses di-exit
// supaya di-start ulang oleh Task Scheduler (trigger berulang).
let hasBeenReady = false;
let notReadySince = null;
const WATCHDOG_MAX_DOWN_MS = 10 * 60 * 1000;

client.on('shardDisconnect', () => logger.warn('Discord: koneksi terputus.'));
client.on('shardReconnecting', () => logger.warn('Discord: mencoba reconnect...'));
client.on('shardResume', () => logger.info('Discord: koneksi pulih.'));

setInterval(() => {
  if (!hasBeenReady) return; // fase login ditangani loginWithRetry
  if (client.isReady()) {
    notReadySince = null;
    return;
  }
  notReadySince ??= Date.now();
  if (Date.now() - notReadySince > WATCHDOG_MAX_DOWN_MS) {
    logger.error('Watchdog: tidak ready >10 menit, exit agar di-restart.');
    process.exit(1);
  }
}, 60 * 1000);

// Fungsi untuk menyalakan fitur utama setelah berhasil login ke Discord
client.once('ready', async () => {
  hasBeenReady = true;
  logger.info(`Bot Nausync Cloud [${config.laptopLabel}] sukses terhubung ke Discord sebagai: ${client.user.tag}`);
  logger.info(`Kode command yang aktif: ${BUILD_TAG}`);
  
  // Cek kesiapan rclone sekali saja saat awal start
  try {
    await checkRcloneReady();
    logger.info('rclone OK, remote Google Drive terhubung.');
  } catch (err) {
    logger.warn('rclone belum siap / remote belum dikonfigurasi.');
  }

  // Pastikan tidak ada sesi remote (RustDesk) yang tersisa dari sebelum
  // crash/reboot — lihat remote.js.
  try {
    await cleanupRemoteOnStartup();
  } catch (err) {
    logger.warn(`Cleanup sesi remote gagal: ${err.message}`);
  }

  // Generate PIN keamanan BARU & kirim ke email SETIAP KALI bot nyala
  // (start pertama kali maupun restart) — lihat initPin() di pinStore.js.
  // Command berbahaya (shutdown/restart/purge) butuh PIN ini, independen
  // dari Discord, supaya tetap aman walau akun Discord kena hack.
  try {
    await initPin();
    startPinExpiryWatcher();
    logger.info(`PIN keamanan baru [${config.laptopLabel}] sudah dikirim ke email.`);
  } catch (err) {
    logger.error(err, 'Gagal inisialisasi PIN keamanan.');
  }

  // Jalankan sweep auto-purge trash sekali di awal, lalu jadwalkan ulang
  // tiap TRASH_SWEEP_INTERVAL_MS selama proses bot hidup (pola sama seperti
  // startPinExpiryWatcher di atas).
  runTrashRetentionSweep();
  setInterval(runTrashRetentionSweep, TRASH_SWEEP_INTERVAL_MS);

  // --- AUTO-BERSIHKAN RIWAYAT CHAT BOT DARI SESI SEBELUMNYA ---
  // Setiap kali bot baru nyala/restart, sapu bersih semua balasan BOT
  // (bukan pesan owner — lihat batasan Discord API di komentar
  // clearBotMessagesInChannel() di commands.js) yang masih ketinggalan di
  // DM dari sesi-sesi sebelumnya. Dijalankan SEBELUM notifikasi "Bot Aktif"
  // di bawah, supaya notifikasi yang baru itu sendiri tidak ikut kesapu.
  //
  // Sengaja TIDAK butuh PIN (beda dari command manual "clearchat") karena
  // ini housekeeping otomatis milik bot sendiri, dan cuma menyentuh pesan
  // BOT sendiri. Bisa dimatikan lewat AUTO_CLEAR_CHAT_ON_START=false di .env.
  let ownerDmChannel = null;
  try {
    const ownerId = process.env.DISCORD_OWNER_ID;
    if (ownerId) {
      const owner = await client.users.fetch(ownerId);
      ownerDmChannel = await owner.createDM();

      if (config.autoClearChatOnStart) {
        logger.info(`Auto-clearchat [${config.laptopLabel}]: mulai bersihin riwayat chat bot dari sesi sebelumnya...`);
        const result = await clearBotMessagesInChannel(ownerDmChannel, client.user.id);
        if (result.error) {
          logger.warn(result.error, 'Auto-clearchat: berhenti di tengah jalan saat startup.');
        } else {
          logger.info(`Auto-clearchat [${config.laptopLabel}]: selesai, ${result.deletedCount} pesan bot lama terhapus (${result.scanned} pesan discan).`);
        }
      }
    }
  } catch (err) {
    logger.error(err, 'Auto-clearchat saat startup gagal dijalankan.');
  }
  // -------------------------------------------------------------------

  // --- KIRIM PESAN NOTIFIKASI STARTUP LANGSUNG KE DM OWNER ---
  try {
    if (ownerDmChannel) {
      await ownerDmChannel.send(toEmbedPayload(`✅ **Bot Nausync Cloud [${config.laptopLabel}] Telah Aktif!**\nLaptop Anda di rumah baru saja dinyalakan/login dan sistem background sudah *stand-by* menerima perintah Anda.`));
      logger.info('Notifikasi startup sukses dikirim ke DM owner.');
    }
  } catch (err) {
    logger.error(err, 'Gagal mengirim notifikasi pesan startup ke DM owner');
  }
  // ---------------------------------------------------------------------
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (message.author.id !== process.env.DISCORD_OWNER_ID) return;

  const text = message.content.trim();
  if (!text) return;

  logger.info(`Command diterima dari owner via Discord: ${text}`);

  try {
    // Teruskan objek message ke fungsi commands agar pesan bisa diedit otomatis
    const reply = await handleCommand(text, message);

    // Kirim pesan teks akhir jika ada log info tambahan
    if (reply && !reply.includes("Proses transfer selesai")) {
      await message.reply(toEmbedPayload(reply));
    }

    // Catat balasan bot ke log juga (dipotong biar log tidak kebanjiran),
    // supaya kalau ada masalah bisa dicek dari log server tanpa perlu
    // screenshot Discord tiap kali.
    const replyPreview = reply ? reply.slice(0, 300).replace(/\n/g, ' ') : '(null / sudah dikirim manual)';
    logger.info(`Balasan bot untuk "${text}": ${replyPreview}`);
  } catch (err) {
    logger.error(err, `Gagal memproses command "${text}"`);
    await message.reply(toEmbedPayload('❌ Terjadi kesalahan internal saat menjalankan perintah.')).catch(() => {});
  }
});

client.on('error', (err) => {
  logger.error(err, 'Terjadi error pada koneksi Discord');
});

// --- Login dengan retry tanpa batas ---
// Kalau internet belum ada saat boot (atau baru nyala berjam-jam kemudian),
// bot TIDAK exit — dia terus mencoba sampai berhasil. Hanya error konfigurasi
// (token salah / intents tidak diizinkan) yang menghentikan proses, karena
// retry tidak akan membantu di kasus itu.
async function loginWithRetry() {
  let attempt = 0;
  while (true) {
    try {
      await client.login(process.env.DISCORD_TOKEN);
      return;
    } catch (err) {
      if (err.code === 'TokenInvalid' || err.code === 'DisallowedIntents') {
        logger.error(err, 'Token/intents salah, berhenti.');
        process.exit(1);
      }
      attempt++;
      const delay = Math.min(5000 * attempt, 60000); // 5s, 10s, ... maks 60s
      logger.warn(`Login gagal (${err.code || err.message}). Coba lagi ${delay / 1000}s (percobaan ke-${attempt}).`);
      await sleep(delay);
    }
  }
}

loginWithRetry();
