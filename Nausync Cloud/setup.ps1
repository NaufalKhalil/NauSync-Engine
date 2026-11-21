# Setup Nausync Cloud di laptop BARU. Klik kanan setup.cmd > Run as administrator.
# Script ini: install Git/Node/rclone/RustDesk (winget), clone repo, npm install,
# buat .env + secure env lewat tanya-jawab (folder bisa di-Browse), blokir folder
# bot otomatis, siapkan rclone, dan daftarkan Scheduled Task.
param([string]$RepoUrl = '', [string]$Branch = 'main')
$ErrorActionPreference = 'Stop'

# >>> ISI SEKALI: URL repo GitHub-mu <<<
$DefaultRepo = 'https://github.com/USERNAME/NAMA-REPO.git'
$TaskName = 'Nausync Discord Bot'

$admin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $admin) {
  Start-Process powershell -Verb RunAs -ArgumentList "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`" -RepoUrl `"$RepoUrl`" -Branch `"$Branch`""
  exit
}


# Tampilkan error & tahan jendela (jangan langsung menutup)
trap {
  Write-Host ""
  Write-Host "GAGAL: $($_.Exception.Message)" -ForegroundColor Red
  Write-Host $_.ScriptStackTrace -ForegroundColor DarkGray
  Read-Host 'Tekan Enter untuk menutup'
  exit 1
}

# ---------- helper ----------
function Ask([string]$q, [string]$def = '') {
  $s = if ($def) { " [$def]" } else { '' }
  $a = Read-Host "$q$s"
  if ([string]::IsNullOrWhiteSpace($a)) { $def } else { $a.Trim().Trim('"') }
}
function AskSecret([string]$q) {
  $s = Read-Host $q -AsSecureString
  [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($s))
}
function YesNo([string]$q, [bool]$def = $true) {
  $a = Read-Host "$q ($(if ($def) {'Y/n'} else {'y/N'}))"
  if (-not $a) { return $def }
  return $a -match '^(y|ya)$'
}
function Pick-Folder([string]$desc) {
  $p = Read-Host "$desc`n  ketik path, atau KOSONGKAN lalu Enter untuk Browse"
  if ($p) { return $p.Trim().Trim('"') }
  Add-Type -AssemblyName System.Windows.Forms
  $owner = New-Object System.Windows.Forms.Form -Property @{ TopMost = $true }
  $d = New-Object System.Windows.Forms.FolderBrowserDialog
  $d.Description = $desc; $d.ShowNewFolderButton = $false
  $r = $d.ShowDialog($owner); $owner.Dispose()
  if ($r -eq 'OK') { return $d.SelectedPath } else { return $null }
}
function Fwd([string]$p) { $p -replace '\\', '/' }
function WriteUtf8([string]$path, [string]$text) {   # tanpa BOM (BOM merusak key pertama dotenv)
  [IO.File]::WriteAllText($path, $text, (New-Object Text.UTF8Encoding $false))
}
function Lock-Dir([string]$dir) {                      # hanya Administrators + SYSTEM
  icacls $dir /inheritance:r /grant:r '*S-1-5-32-544:(OI)(CI)F' '*S-1-5-18:(OI)(CI)F' | Out-Null
}
function Refresh-Path { $env:Path = [Environment]::GetEnvironmentVariable('Path','Machine') + ';' + [Environment]::GetEnvironmentVariable('Path','User') }
function Ensure-MachinePath([string]$exe) {            # Scheduled Task jalan sebagai SYSTEM -> hanya baca PATH mesin
  $dir = Split-Path (Get-Command $exe).Source
  $m = [Environment]::GetEnvironmentVariable('Path','Machine')
  if (($m -split ';') -notcontains $dir) { [Environment]::SetEnvironmentVariable('Path', "$m;$dir", 'Machine') }
}
function Find-ExeDir([string]$exe) {                   # cari exe di lokasi umum winget/installer
  $roots = @("$env:LOCALAPPDATA\Microsoft\WinGet\Packages", "$env:LOCALAPPDATA\Microsoft\WinGet\Links",
             "$env:ProgramFiles\WinGet\Packages", "$env:ProgramFiles\WinGet\Links",
             "$env:ProgramFiles\rclone", "$env:ProgramFiles\nodejs", "$env:ProgramFiles\Git\cmd")
  foreach ($r in $roots) {
    if (Test-Path $r) {
      $f = Get-ChildItem $r -Recurse -Filter "$exe.exe" -ErrorAction SilentlyContinue | Select-Object -First 1
      if ($f) { return $f.DirectoryName }
    }
  }
  return $null
}
function Ensure-Tool([string]$cmd, [string]$wingetId, [string]$label) {
  if (Get-Command $cmd -ErrorAction SilentlyContinue) { Write-Host "  [ok] $label sudah ada"; return }
  if (-not (Get-Command winget -ErrorAction SilentlyContinue)) { throw "winget tidak ada. Install $label manual, lalu jalankan ulang setup." }
  Write-Host "  [..] memasang $label"
  winget install --id $wingetId -e --silent --accept-package-agreements --accept-source-agreements
  Refresh-Path
  if (-not (Get-Command $cmd -ErrorAction SilentlyContinue)) {
    $dir = Find-ExeDir $cmd
    if ($dir) { $env:Path += ";$dir"; Write-Host "  [ok] $label ditemukan di $dir" }
  }
  if (-not (Get-Command $cmd -ErrorAction SilentlyContinue)) {
    $p = Read-Host "  $label tidak ditemukan otomatis. Ketik lokasi $cmd.exe (atau Enter untuk batal)"
    $p = $p.Trim().Trim('"')
    if ($p -and (Test-Path $p)) { $env:Path += ";" + (Split-Path $p) }
    else { throw "$label belum terpasang. Install manual dari situs resminya, lalu jalankan ulang setup." }
  }
}

Write-Host "`n=== 1. Install program yang dibutuhkan ===" -ForegroundColor Cyan
Ensure-Tool git  'Git.Git'             'Git'
Ensure-Tool node 'OpenJS.NodeJS.LTS'   'Node.js'
Ensure-Tool rclone 'Rclone.Rclone'     'rclone'
Ensure-MachinePath node; Ensure-MachinePath rclone
$rd = 'C:\Program Files\RustDesk\rustdesk.exe'
if (-not (Test-Path $rd)) {
  Write-Host '  [..] memasang RustDesk'
  winget install --id RustDesk.RustDesk -e --silent --accept-package-agreements --accept-source-agreements | Out-Null
}
if (Test-Path $rd) {
  if (-not (Get-Service RustDesk -ErrorAction SilentlyContinue)) { try { & $rd --install-service | Out-Null; Start-Sleep 5 } catch {} }
  $svc = Get-Service RustDesk -ErrorAction SilentlyContinue
  if ($svc) {
    Set-Service RustDesk -StartupType Manual     # default MATI; bot yang menyalakan saat "remote on"
    Stop-Service RustDesk -Force -ErrorAction SilentlyContinue
    Write-Host '  [ok] RustDesk service: Manual & stopped'
  } else { Write-Host '  [!] Service RustDesk belum terdaftar. Buka RustDesk sekali > Settings > "Install service", lalu set startup type = Manual.' -ForegroundColor Yellow }
} else { Write-Host '  [!] RustDesk gagal terpasang, fitur "remote" belum bisa dipakai.' -ForegroundColor Yellow }

Write-Host "`n=== 2. Ambil kode dari GitHub ===" -ForegroundColor Cyan
if (Test-Path "$PSScriptRoot\.git") {
  $InstallDir = $PSScriptRoot
  Write-Host "  Memakai folder repo yang sudah ada: $InstallDir"
} else {
  if (-not $RepoUrl) { $RepoUrl = Ask '  URL repo GitHub' $DefaultRepo }
  $defDir = if (Test-Path 'D:\') { 'D:\Nausync Cloud' } else { 'C:\Nausync Cloud' }
  $InstallDir = Ask '  Pasang bot di folder' $defDir
  if (-not (Test-Path "$InstallDir\.git")) {
    git clone --branch $Branch $RepoUrl $InstallDir
    if ($LASTEXITCODE) { throw 'git clone gagal (URL salah / login GitHub dibatalkan).' }
  }
}
Push-Location $InstallDir
npm install --omit=dev --no-audit --no-fund
if ($LASTEXITCODE) { throw 'npm install gagal.' }
Pop-Location

Write-Host "`n=== 3. Konfigurasi ===" -ForegroundColor Cyan
$token = AskSecret '  DISCORD_TOKEN (dari Developer Portal)'
$ownerId = Ask '  DISCORD_OWNER_ID (ID akun Discord-mu)'
$label = Ask '  LAPTOP_LABEL (pembeda laptop, mis. TCN/LNV)' $env:COMPUTERNAME

# --- Root folder ---
$roots = [ordered]@{}
function Add-Root([string]$path) {
  $path = $path.TrimEnd('\','/'); if ($path -match '^[A-Za-z]:$') { $path += '\' }
  if (-not (Test-Path $path)) { if (-not (YesNo "  '$path' tidak ditemukan sekarang (mis. SD card dicabut). Tetap tambahkan?" $false)) { return } }
  $def = if ($path -match '^[A-Za-z]:\\$') { $path.Substring(0,1).ToUpper() } else { Split-Path $path -Leaf }
  while ($true) {
    $name = Ask "  Nama root (dipakai saat mengetik path di bot) untuk '$path'" $def
    if ($name -match '[\\/;=]') { Write-Host '  Nama tidak boleh mengandung \ / ; =' -ForegroundColor Yellow }
    elseif ($roots.Contains($name)) { Write-Host '  Nama sudah dipakai.' -ForegroundColor Yellow }
    else { break }
  }
  $roots[$name] = $path
}
Write-Host "`n  -- Folder yang boleh diakses bot --"
foreach ($n in 'Documents','Downloads','Pictures','Music') {
  $p = Join-Path $env:USERPROFILE $n
  if ((Test-Path $p) -and (YesNo "  Tambahkan folder standar $n ($p)?")) { $roots[$n] = $p }
}
while (YesNo '  Tambah folder/drive lain (mis. D:\ atau SD card)?' $false) {
  $p = Pick-Folder '  Pilih folder/drive'
  if ($p) { Add-Root $p }
}
if ($roots.Count -eq 0) { throw 'Minimal satu root folder harus ada.' }

# --- Blocked paths: otomatis + tambahan ---
$secureDir = Join-Path $env:LOCALAPPDATA 'NausyncSecure'
$rcloneDir = Join-Path $env:ProgramData 'Nausync'
$blocked = New-Object System.Collections.Generic.List[string]
$blocked.Add($InstallDir)                                  # seluruh folder bot (src, .env, pin.store.json, dll)
$blocked.Add($secureDir); $blocked.Add($rcloneDir)         # kredensial SMTP & token Google Drive
$blocked.Add((Join-Path $env:USERPROFILE 'AppData'))
foreach ($r in $roots.Values) {
  if ($r -match '^[A-Za-z]:\\?$') {
    $d = $r.Substring(0,2)
    foreach ($x in 'System Volume Information','$RECYCLE.BIN','pagefile.sys','hiberfil.sys','swapfile.sys','Windows','Program Files','Program Files (x86)') { $blocked.Add("$d\$x") }
  }
}
Write-Host "`n  Otomatis diblokir (tidak bisa diakses lewat bot):"
$blocked | ForEach-Object { Write-Host "    - $_" }
while (YesNo '  Tambah folder yang mau diblokir juga?' $false) { $p = Pick-Folder '  Pilih folder yang diblokir'; if ($p) { $blocked.Add($p) } }

# --- Confidential paths ---
$conf = New-Object System.Collections.Generic.List[string]
while (YesNo '  Tambah folder CONFIDENTIAL (butuh PIN untuk preview/download)?' $false) { $p = Pick-Folder '  Pilih folder confidential'; if ($p) { $conf.Add($p) } }

# --- Secure env (SMTP + email alert) ---
Write-Host "`n  -- Email PIN/alert (disimpan terpisah di $secureDir) --"
$smtpHost = Ask '  SMTP_HOST' 'smtp.gmail.com'
$smtpPort = Ask '  SMTP_PORT' '465'
$smtpUser = Ask '  SMTP_USER (email pengirim)'
$smtpPass = AskSecret '  SMTP_PASS (app password)'
$alertTo  = Ask '  PIN_ALERT_EMAIL (email penerima PIN)'
New-Item -ItemType Directory -Force $secureDir | Out-Null
$securePath = Join-Path $secureDir 'nausync-secure.env'
WriteUtf8 $securePath "SMTP_HOST=$smtpHost`nSMTP_PORT=$smtpPort`nSMTP_USER=$smtpUser`nSMTP_PASS=$smtpPass`nPIN_ALERT_EMAIL=$alertTo`n"
Lock-Dir $secureDir

# --- rclone ---
Write-Host "`n  -- rclone / Google Drive --"
$remote = Ask '  Nama remote rclone' 'gdrive'
if ((rclone listremotes) -notcontains "${remote}:") {
  Write-Host "  Remote '$remote' belum ada. rclone config akan dibuka:" -ForegroundColor Yellow
  Write-Host "  n (new) > nama: $remote > storage: drive > Enter terus sampai login browser > selesai > q"
  rclone config
}
$srcConf = ((rclone config file) | Where-Object { $_ -match '\S' } | Select-Object -Last 1).Trim()
New-Item -ItemType Directory -Force $rcloneDir | Out-Null
if (Test-Path $srcConf) {
  Copy-Item $srcConf "$rcloneDir\rclone.conf" -Force
  Lock-Dir $rcloneDir
  # Task jalan sebagai SYSTEM (profil berbeda) -> arahkan rclone ke config bersama ini.
  [Environment]::SetEnvironmentVariable('RCLONE_CONFIG', "$rcloneDir\rclone.conf", 'Machine')
  $env:RCLONE_CONFIG = "$rcloneDir\rclone.conf"
} else { Write-Host '  [!] rclone.conf tidak ditemukan; fitur upload ke Drive belum jalan.' -ForegroundColor Yellow }
$staging = Ask '  Folder staging di Drive' 'nausync-staging'

# --- tulis .env ---
function PathList($items) { ($items | ForEach-Object { (Fwd $_) + ';' }) -join "`n" }
$rootText = ($roots.GetEnumerator() | ForEach-Object { "$($_.Key)=$(Fwd $_.Value);" }) -join "`n"
$envText = "DISCORD_TOKEN=$token`nDISCORD_OWNER_ID=$ownerId`nLAPTOP_LABEL=$label`nAUTO_CLEAR_CHAT_ON_START=true`n" +
  "SECURE_ENV_PATH=$(Fwd $securePath)`n`nALLOWED_ROOTS=`"$rootText`"`n`nBLOCKED_PATHS=`"$(PathList $blocked)`"`n`n" +
  "CONFIDENTIAL_PATHS=`"$(PathList $conf)`"`n`nRCLONE_REMOTE=$remote`nRCLONE_STAGING_FOLDER=$staging`nOWNER_NUMBER=123`n"
$envPath = Join-Path $InstallDir '.env'
if ((Test-Path $envPath) -and -not (YesNo "`n  .env sudah ada. Timpa?" $false)) { Write-Host '  .env lama dipertahankan.' }
else { WriteUtf8 $envPath $envText; Write-Host '  [ok] .env dibuat' }

Write-Host "`n=== 4. Daftarkan Scheduled Task ===" -ForegroundColor Cyan
$dirX = [Security.SecurityElement]::Escape($InstallDir)
$xml = @"
<Task version="1.4" xmlns="http://schemas.microsoft.com/windows/2004/02/mit/task">
  <Principals><Principal id="Author"><UserId>S-1-5-18</UserId><RunLevel>HighestAvailable</RunLevel></Principal></Principals>
  <Settings>
    <MultipleInstancesPolicy>IgnoreNew</MultipleInstancesPolicy>
    <DisallowStartIfOnBatteries>false</DisallowStartIfOnBatteries>
    <StopIfGoingOnBatteries>false</StopIfGoingOnBatteries>
    <AllowHardTerminate>true</AllowHardTerminate>
    <StartWhenAvailable>true</StartWhenAvailable>
    <AllowStartOnDemand>true</AllowStartOnDemand>
    <Enabled>true</Enabled>
    <ExecutionTimeLimit>PT0S</ExecutionTimeLimit>
    <Priority>7</Priority>
    <RestartOnFailure><Count>3</Count><Interval>PT1M</Interval></RestartOnFailure>
  </Settings>
  <Triggers>
    <BootTrigger><Enabled>true</Enabled><Delay>PT1M</Delay></BootTrigger>
    <TimeTrigger>
      <Repetition><Interval>PT5M</Interval><StopAtDurationEnd>false</StopAtDurationEnd></Repetition>
      <StartBoundary>2026-01-01T00:00:00</StartBoundary><Enabled>true</Enabled>
    </TimeTrigger>
  </Triggers>
  <Actions Context="Author"><Exec>
    <Command>wscript.exe</Command>
    <Arguments>"$dirX\run.vbs"</Arguments>
    <WorkingDirectory>$dirX</WorkingDirectory>
  </Exec></Actions>
</Task>
"@
Register-ScheduledTask -TaskName $TaskName -Xml $xml -Force | Out-Null
Start-ScheduledTask -TaskName $TaskName
Write-Host "  [ok] Task '$TaskName' terdaftar & dijalankan" -ForegroundColor Green

Write-Host "`nSELESAI. Dalam ~1 menit bot kirim DM 'Aktif' ke Discord-mu & PIN ke email." -ForegroundColor Green
Write-Host "Update berikutnya: jalankan update.cmd (as admin) di $InstallDir"
Read-Host 'Tekan Enter untuk menutup'
