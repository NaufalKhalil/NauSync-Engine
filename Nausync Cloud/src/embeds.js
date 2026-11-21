// --- Helper bungkus balasan bot jadi Discord embed yang rapi ---
//
// Sebelumnya SEMUA balasan bot dikirim sebagai pesan teks polos
// (`message.reply(string)`) — isinya sudah pakai markdown (**bold**,
// `code`, • bullet, dst), tapi tanpa "bingkai" apa pun, jadi nyampur
// polos di antara pesan lain di channel Discord.
//
// Modul ini TIDAK mengubah isi teks balasan sama sekali (semua string
// yang sudah ditulis di commands.js tetap sama persis) — cuma mengubah
// CARA NGIRIMnya: dibungkus jadi embed Discord (kotak dengan garis warna
// di kiri), warnanya dideteksi otomatis dari emoji penanda status yang
// sudah dipakai bot ini secara konsisten dari awal (✅ sukses, ❌ gagal,
// ⚠️/🔒 perlu perhatian/PIN, dst). Jadi satu titik perubahan di sini
// otomatis merapikan tampilan SEMUA balasan bot, tanpa perlu ubah ratusan
// baris teks satu-satu.

// Warna disamakan dengan palet resmi Discord (role badge, tombol, dst)
// biar terasa "menyatu" sama UI Discord sendiri, bukan warna sembarangan.
export const COLORS = {
  success: 0x57f287, // hijau
  error: 0xed4245,   // merah
  warning: 0xfee75c, // kuning/emas — dipakai buat "perlu perhatian" (PIN, konfirmasi, expired)
  info: 0x5865f2,    // blurple — default/netral (help, info, listing, dll)
};

// Deteksi warna dari emoji PENANDA STATUS di awal teks. Cukup baca
// karakter pertamanya — tidak perlu parsing/analisa isi teks lebih jauh,
// karena bot ini sudah konsisten menaruh emoji status di paling depan
// setiap balasannya.
function detectColor(text) {
  const trimmed = text.trimStart();
  if (/^(✅|🟢)/.test(trimmed)) return COLORS.success;
  if (/^(❌|🛑)/.test(trimmed)) return COLORS.error;
  if (/^(⚠️|🔒|🔐|❓|⏱️|🔓)/.test(trimmed)) return COLORS.warning;
  return COLORS.info;
}

// Batas AMAN buat field "description" embed Discord (limit resminya 4096
// karakter) — dikasih buffer di bawahnya.
const MAX_EMBED_DESCRIPTION = 4000;

// Kalau teks lebih panjang dari batas di atas, embed diisi potongan awalnya
// (dipotong di batas baris) dan teks LENGKAP dilampirkan sebagai file .txt.
//
// BUG LAMA: fallback-nya `{ content: raw }`, padahal batas `content` pesan
// Discord cuma 2000 karakter (lebih kecil dari batas embed) — jadi teks
// 2000–4000+ karakter malah ditolak Discord dan user cuma melihat "kesalahan
// internal". Attachment tidak punya batas sekecil itu.
const TRUNCATE_AT = 3700;
const FULL_TEXT_FILENAME = 'balasan-lengkap.txt';

// Ubah 1 string balasan jadi payload siap kirim ke discord.js:
// { embeds: [...] } (kasus normal) atau { embeds: [potongan], files: [txt] }
// (kalau kepanjangan). `extra` buat nyisipin field lain yang mau digabung
// bareng (mis. `components` buat tombol, `files` buat attachment).
//
// Return null kalau text kosong/null — konsisten sama kebiasaan lama bot
// ini yang pakai return null buat "sudah dikirim manual, tidak perlu
// dikirim ulang" (lihat pemakaiannya di index.js & commands.js).
export function toEmbedPayload(text, extra = {}) {
  if (text === null || text === undefined) return null;
  const raw = String(text);
  if (!raw.trim()) return null;

  if (raw.length > MAX_EMBED_DESCRIPTION) {
    // Potong di akhir baris terdekat supaya tidak memotong kata/baris di tengah.
    let cut = raw.lastIndexOf('\n', TRUNCATE_AT);
    if (cut < TRUNCATE_AT * 0.5) cut = TRUNCATE_AT;

    let head = raw.slice(0, cut);
    // Kalau potongan berhenti di dalam code block (```), tutup dulu biar
    // sisa embed tidak ikut ter-render sebagai kode.
    if ((head.match(/```/g) || []).length % 2 === 1) head += '\n```';

    const note = `\n\n_(Balasan terlalu panjang — dipotong. Versi lengkap ada di attachment \`${FULL_TEXT_FILENAME}\`.)_`;

    return {
      embeds: [{ description: head + note, color: detectColor(raw) }],
      ...extra,
      files: [...(extra.files || []), { attachment: Buffer.from(raw, 'utf-8'), name: FULL_TEXT_FILENAME }],
    };
  }

  return {
    embeds: [{ description: raw, color: detectColor(raw) }],
    ...extra,
  };
}
