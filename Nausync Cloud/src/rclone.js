import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import { config } from './config.js';

const execFileAsync = promisify(execFile);

// --- UPGRADE KECEPATAN: tuning concurrency rclone ---
// Tanpa flag ini, rclone jalan pakai default-nya sendiri (--transfers=4,
// --checkers=8), yang cukup konservatif. Untuk folder isinya BANYAK file
// kecil (bukan 1 file besar), upload jauh lebih cepat kalau beberapa file
// ditransfer PARALEL sekaligus alih-alih satu-satu bergiliran — bottleneck-
// nya biasanya latency per-request ke Google Drive API, bukan bandwidth
// mentah, jadi naikkan concurrency langsung kepakai. Angka ini SENGAJA
// tidak terlalu ekstrem (mis. bukan 32+) supaya tidak malah kena rate-limit
// Google Drive API (error 403 "userRateLimitExceeded") kalau dipakai
// terus-terusan.
export const RCLONE_SPEED_FLAGS = ['--transfers=8', '--checkers=8'];

/**
 * Upload file/folder lokal ke folder staging Google Drive lewat rclone.
 * Membutuhkan rclone sudah terinstall & remote sudah dikonfigurasi (`rclone config`).
 */
export async function uploadToDrive(localAbsPath) {
  const remoteTarget = `${config.rcloneRemote}:${config.rcloneStagingFolder}`;
  const fileName = path.basename(localAbsPath);

  await execFileAsync('rclone', ['copy', localAbsPath, remoteTarget, '--progress=false', ...RCLONE_SPEED_FLAGS]);

  return { fileName, remoteTarget };
}

/**
 * Cek apakah rclone terinstall & remote bisa diakses. Berguna untuk healthcheck saat startup.
 */
export async function checkRcloneReady() {
  await execFileAsync('rclone', ['lsd', `${config.rcloneRemote}:`]);
}
