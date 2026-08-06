// --- Script SATU KALI PAKAI (manual) buat MENGHAPUS semua slash command
// global yang sebelumnya sempat terdaftar (dari deploy-commands.js) ---
//
// Dipakai kalau kamu memutuskan BATAL pakai fitur slash command sama sekali
// — supaya command "/help", "/copy", dkk tidak nongol lagi di Discord,
// walau kodenya (slashCommands.js, deploy-commands.js) sudah dihapus dari
// project. Pendaftaran command itu tersimpan di SERVER Discord, bukan di
// project lokal, jadi menghapus filenya saja TIDAK otomatis membersihkan
// daftar "/" di Discord — perlu di-unregister lewat script ini.
//
// CARA PAKAI:
//   1. Pastikan .env masih ada DISCORD_TOKEN dan DISCORD_CLIENT_ID (sama
//      seperti yang dipakai deploy-commands.js kemarin).
//   2. Jalankan: node unregister-commands.js
//   3. Setelah berhasil, file ini (dan .env-nya kalau memang tidak dipakai
//      lagi) boleh dihapus juga — sudah tidak ada gunanya lagi.
//
// Propagasi penghapusan command global ke semua client Discord juga bisa
// makan waktu sampai ~1 jam (sama seperti waktu pendaftarannya dulu) — kalau
// "/" masih kelihatan sesaat setelah run ini, tunggu saja, bukan tanda gagal.
import 'dotenv/config';
import { REST, Routes } from 'discord.js';

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.DISCORD_CLIENT_ID;

if (!token || !clientId) {
  console.error('❌ DISCORD_TOKEN dan/atau DISCORD_CLIENT_ID belum diset di .env.');
  process.exit(1);
}

const rest = new REST().setToken(token);

try {
  console.log('⏳ Menghapus semua slash command global...');
  // Body array KOSONG = "ganti daftar command jadi tidak ada apa-apa",
  // sama endpoint-nya dengan yang dipakai deploy-commands.js buat daftarin.
  const result = await rest.put(Routes.applicationCommands(clientId), { body: [] });
  console.log(`✅ Berhasil! Command yang tersisa sekarang: ${result.length} (harusnya 0).`);
  console.log('Catatan: "/" mungkin masih kelihatan sesaat di Discord karena propagasi bisa sampai ~1 jam — itu normal.');
} catch (err) {
  console.error('❌ Gagal menghapus slash command:', err);
  process.exit(1);
}
