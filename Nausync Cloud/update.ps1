# Update Nausync Cloud dari GitHub. Jalankan: klik kanan update.cmd > Run as administrator
# (atau ketik "update" di CMD Admin dari folder bot). Opsional: -Branch namabranch
param([string]$Branch = '')
$ErrorActionPreference = 'Stop'
$TaskName = 'Nausync Discord Bot'

$admin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $admin) {
  Start-Process powershell -Verb RunAs -ArgumentList "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`" -Branch `"$Branch`""
  exit
}

Set-Location $PSScriptRoot
$old = $null
$stopped = $false
try {
  if (-not (Test-Path .git)) { throw 'Folder ini bukan hasil git clone. Pasang ulang lewat setup.ps1.' }
  if (-not $Branch) { $Branch = (git rev-parse --abbrev-ref HEAD).Trim() }

  Write-Host "Mengecek update (branch $Branch)..."
  git fetch --prune origin
  if ($LASTEXITCODE) { throw 'git fetch gagal (internet / login GitHub?).' }

  $old = (git rev-parse HEAD).Trim()
  $new = (git rev-parse "origin/$Branch").Trim()
  if ($old -eq $new) { Write-Host 'Sudah versi terbaru.' -ForegroundColor Green; return }

  Write-Host "`nPerubahan yang akan dipasang:" -ForegroundColor Cyan
  git log --oneline "$old..$new"

  # Matikan bot dulu: wscript (loop auto-restart) harus mati SEBELUM node,
  # kalau tidak node langsung dinyalakan lagi oleh loop run.vbs.
  Stop-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue
  $stopped = $true
  Get-CimInstance Win32_Process -Filter "Name='wscript.exe'" | Where-Object { $_.CommandLine -like "*$PSScriptRoot*run.vbs*" } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
  Get-CimInstance Win32_Process -Filter "Name='node.exe'" | Where-Object { $_.CommandLine -like '*src\index.js*' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
  Start-Sleep -Seconds 2

  $changed = git diff --name-only $old $new
  git reset --hard "origin/$Branch"      # hanya file tracked; .env, pin.store.json, dll aman
  if ($LASTEXITCODE) { throw 'git reset gagal.' }

  if ($changed -match '^package(-lock)?\.json$') {
    Write-Host 'Dependency berubah, npm install...'
    npm install --omit=dev --no-audit --no-fund
    if ($LASTEXITCODE) { throw 'npm install gagal.' }
  }

  # Cek sintaks semua file src sebelum bot dinyalakan; kalau rusak, rollback.
  $bad = $false
  Get-ChildItem src -Filter *.js | ForEach-Object {
    node --check $_.FullName 2>&1 | Out-Null
    if ($LASTEXITCODE) { Write-Host "Sintaks error: $($_.Name)" -ForegroundColor Red; $bad = $true }
  }
  if ($bad) {
    git reset --hard $old | Out-Null
    throw "Versi baru rusak - di-rollback ke $($old.Substring(0,7))."
  }
  Write-Host "`nUpdate selesai: $($old.Substring(0,7)) -> $($new.Substring(0,7))" -ForegroundColor Green
}
catch { Write-Host "`nGAGAL: $($_.Exception.Message)" -ForegroundColor Red }
finally {
  Start-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue
  Write-Host 'Bot dinyalakan lagi.'
  Read-Host 'Tekan Enter untuk menutup'
}
