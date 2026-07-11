import fs from 'node:fs/promises';
import path from 'node:path';
import { safeResolve, isRootItself, listRootNames } from './pathGuard.js';

export async function listDir(relPath = '.') {
  // "." = root virtual gabungan semua folder yang diizinkan -> tampilkan
  // nama-nama root itu sendiri sebagai "folder", bukan baca filesystem asli
  // (tidak ada satu folder fisik tunggal yang mewakili gabungan semuanya).
  if (relPath === '.' || relPath === '') {
    return listRootNames().map((name) => `${name}/`);
  }

  const target = safeResolve(relPath);
  const entries = await fs.readdir(target, { withFileTypes: true });
  return entries.map((e) => (e.isDirectory() ? `${e.name}/` : e.name));
}

export async function copyPath(srcRel, dstRel) {
  const src = safeResolve(srcRel);
  const dst = safeResolve(dstRel);
  const stat = await fs.stat(src);
  if (stat.isDirectory()) {
    await fs.cp(src, dst, { recursive: true });
  } else {
    await fs.mkdir(path.dirname(dst), { recursive: true });
    await fs.copyFile(src, dst);
  }
  return dst;
}

export async function movePath(srcRel, dstRel) {
  if (isRootItself(srcRel)) {
    throw new Error(`"${srcRel}" adalah folder root yang diizinkan itu sendiri, tidak boleh dipindah/di-rename. Pindahkan isinya saja.`);
  }
  const src = safeResolve(srcRel);
  const dst = safeResolve(dstRel);
  await fs.mkdir(path.dirname(dst), { recursive: true });
  await fs.rename(src, dst);
  return dst;
}

export async function deletePath(relPath) {
  if (isRootItself(relPath)) {
    throw new Error(`"${relPath}" adalah folder root yang diizinkan itu sendiri, tidak boleh dihapus. Hapus isinya saja.`);
  }
  const target = safeResolve(relPath);
  const stat = await fs.stat(target);
  if (stat.isDirectory()) {
    await fs.rm(target, { recursive: true, force: true });
  } else {
    await fs.unlink(target);
  }
  return target;
}

export function resolveForRclone(relPath) {
  return safeResolve(relPath);
}
