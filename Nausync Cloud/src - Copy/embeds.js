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
// karakter) — dikasih buffer di bawahnya. Kalau teks balasan ternyata
// lebih panjang dari ini (jarang terjadi, tapi bisa aja buat listing
// folder yang isinya banyak banget), fallback ke pesan teks BIASA (bukan
// embed) supaya tidak kena error dari Discord API dan bikin command
// gagal total gara-gara pembungkus tampilan doang — command tetap harus
// jalan walau bingkainya kepaksa dilepas.
const MAX_EMBED_DESCRIPTION = 4000;

// Ubah 1 string balasan jadi payload siap kirim ke discord.js:
// { embeds: [...] } (kasus normal) atau { content: text } (fallback kalau
// kosong/kepanjangan). `extra` buat nyisipin field lain yang mau digabung
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
    return { content: raw, ...extra };
  }

  return {
    embeds: [{ description: raw, color: detectColor(raw) }],
    ...extra,
  };
}
