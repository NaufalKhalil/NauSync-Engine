# Nausync Cloud

- **Dibuat:** 2026-07-14 09:31:01
- **Sumber:** `D:\Project\Coding\Nausync Engine\Nausync Cloud`
- **Total file:** 21 (2 sub-folder disertakan)

## Struktur

```
Nausync Cloud/
├── bot-log.txt
├── example_env.txt
├── package-lock.json
├── package.json
├── pin.store.json
├── previewMessages.store.json
├── run.vbs
├── src/
│   ├── commands.js
│   ├── config.js
│   ├── fsops.js
│   ├── index.js
│   ├── pathGuard.js
│   ├── pinStore.js
│   └── rclone.js
└── src copy/
    ├── commands.js
    ├── config.js
    ├── fsops.js
    ├── index.js
    ├── pathGuard.js
    ├── pinStore.js
    └── rclone.js
```

## Daftar Isi

- [bot-log.txt](#bot-logtxt)
- [example_env.txt](#example_envtxt)
- [package-lock.json](#package-lockjson)
- [package.json](#packagejson)
- [pin.store.json](#pinstorejson)
- [previewMessages.store.json](#previewmessagesstorejson)
- [run.vbs](#runvbs)
- [src/commands.js](#src-commandsjs)
- [src/config.js](#src-configjs)
- [src/fsops.js](#src-fsopsjs)
- [src/index.js](#src-indexjs)
- [src/pathGuard.js](#src-pathguardjs)
- [src/pinStore.js](#src-pinstorejs)
- [src/rclone.js](#src-rclonejs)
- [src copy/commands.js](#src-copy-commandsjs)
- [src copy/config.js](#src-copy-configjs)
- [src copy/fsops.js](#src-copy-fsopsjs)
- [src copy/index.js](#src-copy-indexjs)
- [src copy/pathGuard.js](#src-copy-pathguardjs)
- [src copy/pinStore.js](#src-copy-pinstorejs)
- [src copy/rclone.js](#src-copy-rclonejs)

## File

### `bot-log.txt`

```
{"level":30,"time":1783709354998,"pid":9428,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud#2669"}
(node:9428) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783709374532,"pid":9428,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783709375789,"pid":9428,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783709399606,"pid":9428,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783709408224,"pid":9428,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: restart"}
{"level":30,"time":1783709748237,"pid":9208,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud#2669"}
(node:9208) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783709750844,"pid":9208,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783709752150,"pid":9208,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783709756483,"pid":9208,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783709763010,"pid":9208,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: restart"}
{"level":30,"time":1783709895074,"pid":7128,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud#2669"}
(node:7128) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783709902717,"pid":7128,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783709906787,"pid":7128,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783709907201,"pid":7128,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783709913241,"pid":7128,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783709927902,"pid":7128,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: restart"}
{"level":30,"time":1783710045144,"pid":8904,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud#2669"}
(node:8904) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783710047207,"pid":8904,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783710048536,"pid":8904,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783710054710,"pid":8904,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783710072697,"pid":8904,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: restart"}
{"level":30,"time":1783710199721,"pid":6636,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud#2669"}
(node:6636) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783710203811,"pid":6636,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783710205106,"pid":6636,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783710211990,"pid":6636,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783710230741,"pid":6636,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: mode hemat"}
{"level":30,"time":1783710313046,"pid":6636,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: shutdown"}
{"level":30,"time":1783710669091,"pid":6412,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud#2669"}
(node:6412) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783710688639,"pid":6412,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783710689928,"pid":6412,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783710709915,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: mode server"}
{"level":30,"time":1783711447706,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783711500386,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Download"}
{"level":30,"time":1783711505082,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783711529440,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Project"}
{"level":30,"time":1783711536460,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783711540359,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Project"}
{"level":30,"time":1783711544111,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783711564291,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd \"Data Siswa\""}
{"level":30,"time":1783711605113,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783711640294,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: preview \"Nilai TKA.jpeg\""}
{"level":30,"time":1783711670713,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783711720635,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783711754479,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd \"Berkas Pendaftaran Ulang Mahasiswa Baru Politeknik Negeri Medan\""}
{"level":30,"time":1783711758304,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: lost"}
{"level":30,"time":1783711761418,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783711896764,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: download \"Jadwal SNBP NON KIP-K 2026.jpg\""}
{"level":30,"time":1783711955461,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: download \"Berkas Yang Perlu di siapkan.txt\""}
{"level":30,"time":1783712049282,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783712062136,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .. .."}
{"level":30,"time":1783712086118,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783712100535,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783712106067,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783712112844,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783712128408,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783712131840,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783712136024,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783712151066,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Font"}
{"level":30,"time":1783712168285,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783712478780,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783712484321,"pid":6412,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: shutdown"}
{"level":30,"time":1783742514522,"pid":5356,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud#2669"}
(node:5356) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783742550554,"pid":5356,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783742551811,"pid":5356,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783742557741,"pid":5356,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783742626863,"pid":5356,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: mode server"}
{"level":30,"time":1783743133117,"pid":5356,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Wallpaper"}
{"level":30,"time":1783743135223,"pid":5356,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783743153289,"pid":5356,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: preview Frieren.jpg"}
{"level":30,"time":1783743166719,"pid":5356,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: clear"}
{"level":30,"time":1783743197386,"pid":5356,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783743479769,"pid":5356,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783743534260,"pid":5356,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: preview \"Jangan Lupa Untuk Corat Coret.png\""}
{"level":30,"time":1783743565629,"pid":5356,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: clear"}
{"level":30,"time":1783743570267,"pid":5356,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783743583413,"pid":5356,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: preview Wallpaper"}
{"level":30,"time":1783746074121,"pid":5356,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: restart"}
{"level":30,"time":1783746185666,"pid":8760,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud#2669"}
(node:8760) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783746204255,"pid":8760,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783746205497,"pid":8760,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783746967764,"pid":9820,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud#2669"}
(node:9820) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783747003439,"pid":9820,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783747004923,"pid":9820,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783747013728,"pid":9820,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783747025099,"pid":9820,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783747038688,"pid":9820,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783747057458,"pid":9820,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783747070931,"pid":9820,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783747182842,"pid":9820,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783747215848,"pid":9820,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: mode"}
{"level":30,"time":1783747219832,"pid":9820,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: mode server"}
{"level":30,"time":1783747423979,"pid":15056,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud#2669"}
(node:15056) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783747425091,"pid":15056,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783747426256,"pid":15056,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783747433868,"pid":15056,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783747438428,"pid":15056,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783747465643,"pid":15056,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783747488685,"pid":15056,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783747646852,"pid":15056,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: dc .."}
{"level":30,"time":1783747653504,"pid":15056,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783747659263,"pid":15056,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783747663414,"pid":15056,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783747675523,"pid":15056,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Project"}
{"level":30,"time":1783748044403,"pid":13540,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud#2669"}
(node:13540) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783748079023,"pid":13540,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783748080173,"pid":13540,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783748093344,"pid":13540,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783748095102,"pid":13540,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783748100518,"pid":13540,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783748107339,"pid":13540,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783748112793,"pid":13540,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .. .. .."}
{"level":30,"time":1783749269951,"pid":5308,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud#2669"}
(node:5308) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783749270950,"pid":5308,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783749272315,"pid":5308,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783749278658,"pid":5308,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783749298453,"pid":5308,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783749311456,"pid":5308,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783749314628,"pid":5308,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783749349558,"pid":5308,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783749355680,"pid":5308,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783749361702,"pid":5308,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783749365226,"pid":5308,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783749391783,"pid":5308,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: restart"}
{"level":30,"time":1783749503685,"pid":5920,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud#2669"}
(node:5920) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783749505596,"pid":5920,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783749506739,"pid":5920,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783750407747,"pid":5920,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783753313679,"pid":5920,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783753321716,"pid":5920,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: mode hemat"}
{"level":30,"time":1783754056597,"pid":5920,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783756396586,"pid":5920,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783756399863,"pid":5920,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: mode server"}
{"level":30,"time":1783758719400,"pid":5920,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: mode hemat"}
{"level":30,"time":1783758725903,"pid":5920,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: clear"}
{"level":30,"time":1783763152761,"pid":5920,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: restart"}
{"level":30,"time":1783763267176,"pid":16040,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud#2669"}
(node:16040) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783763270416,"pid":16040,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783763271617,"pid":16040,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783766014159,"pid":16220,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud#2669"}
(node:16220) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783766016392,"pid":16220,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783766017571,"pid":16220,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783766031903,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783766054674,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Project"}
{"level":30,"time":1783766065101,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783766067794,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783766119085,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783766123588,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783766130346,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Document"}
{"level":30,"time":1783766141112,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Documents"}
{"level":30,"time":1783766143581,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783766239341,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: mode server"}
{"level":30,"time":1783781370564,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: mode hemat"}
{"level":30,"time":1783833774855,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783833777729,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783833782265,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783833784869,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783833786813,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783833791821,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783833796804,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783833799688,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783843229119,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783843231918,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783843240984,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783843246089,"pid":16220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783848816549,"pid":7292,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:7292) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783848818723,"pid":7292,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783848819909,"pid":7292,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783848964015,"pid":7292,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783849011657,"pid":7292,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: pwd"}
{"level":30,"time":1783849023430,"pid":7292,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd SD"}
{"level":30,"time":1783849027873,"pid":7292,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783849066996,"pid":7292,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd System Volume Information"}
{"level":30,"time":1783849075724,"pid":7292,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Music"}
{"level":30,"time":1783849078894,"pid":7292,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783849261064,"pid":7292,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783849270153,"pid":7292,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: pwf"}
{"level":30,"time":1783849275850,"pid":7292,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783849285369,"pid":7292,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: pwd"}
{"level":30,"time":1783849949032,"pid":14884,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:14884) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783849950017,"pid":14884,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783849951130,"pid":14884,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783850074900,"pid":14884,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783850084510,"pid":14884,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :1"}
{"level":30,"time":1783850226053,"pid":8268,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:8268) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783850245069,"pid":8268,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783850246537,"pid":8268,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783850250604,"pid":8268,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783850258385,"pid":8268,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :1"}
{"level":30,"time":1783850265726,"pid":8268,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783850273243,"pid":8268,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783850283893,"pid":8268,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :3"}
{"level":30,"time":1783850528970,"pid":4440,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:4440) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783850548130,"pid":4440,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783850549384,"pid":4440,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783850560777,"pid":4440,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783850563215,"pid":4440,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783850574651,"pid":4440,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :2"}
{"level":30,"time":1783850587351,"pid":4440,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd : 2"}
{"level":30,"time":1783850603017,"pid":4440,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :1"}
{"level":30,"time":1783850623734,"pid":4440,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd : Document"}
{"level":30,"time":1783850628896,"pid":4440,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Documents"}
{"level":30,"time":1783850820767,"pid":4440,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783851903592,"pid":18036,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:18036) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783851903593,"pid":18036,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v2-index-shortcut"}
{"level":30,"time":1783851922044,"pid":18036,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783851923155,"pid":18036,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783851927218,"pid":18036,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783851927820,"pid":18036,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": *Nausync Cloud — command yang tersedia* _(build: cmds-v2-index-shortcut)_  cd <folder>             -> pindah \"folder aktif\", biar gak perlu ketik path panjang berulang cd ..                   -> naik satu folder ke atas pwd                     -> lihat folder aktif saat ini list <folder>           -"}
{"level":30,"time":1783851997958,"pid":18036,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783851998340,"pid":18036,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": Isi folder \"/\" — 7 folder, 0 file: 1. 📁 D/ 2. 📁 Documents/ 3. 📁 Downloads/ 4. 📁 ibisPaint/ 5. 📁 Music/ 6. 📁 Pictures/ 7. 📁 SD/"}
{"level":30,"time":1783852003495,"pid":18036,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd 1"}
{"level":30,"time":1783852003955,"pid":18036,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd 1\": ❌ Gagal pindah folder: \"1\" bukan folder yang diizinkan. Folder yang tersedia: D, Documents, Downloads, ibisPaint, Music, Pictures, SD"}
{"level":30,"time":1783852006707,"pid":18036,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :1"}
{"level":30,"time":1783852007089,"pid":18036,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd :1\": 📂 Pindah ke folder: `/D`"}
{"level":30,"time":1783852063765,"pid":18036,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Sd"}
{"level":30,"time":1783852064208,"pid":18036,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Sd\": ❌ Gagal pindah folder: ENOENT: no such file or directory, scandir 'D:\\Sd'"}
{"level":30,"time":1783852068378,"pid":18036,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd SD"}
{"level":30,"time":1783852068820,"pid":18036,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd SD\": ❌ Gagal pindah folder: ENOENT: no such file or directory, scandir 'D:\\SD'"}
{"level":30,"time":1783852077135,"pid":18036,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783852077685,"pid":18036,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd ..\": 📂 Pindah ke folder: `/`"}
{"level":30,"time":1783852082576,"pid":18036,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd SD"}
{"level":30,"time":1783852083279,"pid":18036,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd SD\": 📂 Pindah ke folder: `/SD`"}
{"level":30,"time":1783852322556,"pid":7196,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:7196) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783852322557,"pid":7196,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v2-index-shortcut"}
{"level":30,"time":1783852357839,"pid":7196,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783852359006,"pid":7196,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783852370472,"pid":7196,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783852371259,"pid":7196,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v2-index-shortcut)`  **Navigasi** `cd <folder>` · `cd ..` · `pwd` · `list [folder]`  **File** `copy <src> <dst>` · `move <src> <dst>` · `delete <path>` `preview <path>` · `download <path>` · `clear`  **Laptop** `baterai` · `mode server` · `mode hemat` · `shutdown` · `rest"}
{"level":30,"time":1783852485420,"pid":7196,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783852486911,"pid":7196,"hostname":"NauTcn","msg":"Balasan bot untuk \"baterai\": 🔋 **Status Baterai Laptop** • Persentase: **100%** • 🔌 Tidak di-cas _(AC tersambung)_ • Mode Power: 🔋 Mode Hemat (sleep otomatis setelah 15 menit idle)"}
{"level":30,"time":1783852521434,"pid":7196,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: :N"}
{"level":30,"time":1783852521986,"pid":7196,"hostname":"NauTcn","msg":"Balasan bot untuk \":N\": Command tidak dikenali: \":n\". Ketik \"help\" untuk daftar command."}
{"level":30,"time":1783852530813,"pid":7196,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783852531476,"pid":7196,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v2-index-shortcut)`  **Navigasi** `cd <folder>` · `cd ..` · `pwd` · `list [folder]`  **File** `copy <src> <dst>` · `move <src> <dst>` · `delete <path>` `preview <path>` · `download <path>` · `clear`  **Laptop** `baterai` · `mode server` · `mode hemat` · `shutdown` · `rest"}
{"level":30,"time":1783852686872,"pid":7984,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:7984) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783852686873,"pid":7984,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v3-detailed-help"}
{"level":30,"time":1783852721406,"pid":7984,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783852722636,"pid":7984,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783853036720,"pid":7984,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783853037491,"pid":7984,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v3-detailed-help)`  **Navigasi** `cd <folder>` · `cd ..` · `pwd` · `list [folder]`  **File** `copy <src> <dst>` · `move <src> <dst>` · `delete <path>` `preview <path>` · `download <path>` · `clear`  **Laptop** `baterai` · `mode server` · `mode hemat` · `shutdown` · `resta"}
{"level":30,"time":1783853085145,"pid":18728,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:18728) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783853085146,"pid":18728,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v3-detailed-help"}
{"level":30,"time":1783853086245,"pid":18728,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783853087339,"pid":18728,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783853094890,"pid":18728,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783853095372,"pid":18728,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v3-detailed-help)`  **Navigasi** `cd <folder>` · `cd ..` · `pwd` · `list [folder]`  **File** `copy <src> <dst>` · `move <src> <dst>` · `delete <path>` `preview <path>` · `download <path>` · `clear`  **Laptop** `baterai` · `mode server` · `mode hemat` · `shutdown` · `resta"}
{"level":30,"time":1783853111060,"pid":18728,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: ? download"}
{"level":30,"time":1783853111558,"pid":18728,"hostname":"NauTcn","msg":"Balasan bot untuk \"? download\": ❓ Ketik `?<command>` buat penjelasan detail, contoh `?pwd`. Topik: baterai, cd, clear, copy, delete, download, list, mode, move, preview, pwd, restart, shutdown"}
{"level":30,"time":1783853120068,"pid":18728,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: ?download"}
{"level":30,"time":1783853120542,"pid":18728,"hostname":"NauTcn","msg":"Balasan bot untuk \"?download\": **download** — upload ke Google Drive `download <path>` ngirim file/folder ke folder staging Google Drive lewat rclone, sambil nampilin progress bar yang di-update tiap beberapa detik. Sebelum mulai, bot ngecek dulu sisa kapasitas Drive kamu — kalau kurang, upload ditolak duluan (nggak ada percobaan"}
{"level":30,"time":1783853136830,"pid":18728,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783853137394,"pid":18728,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v3-detailed-help)`  **Navigasi** `cd <folder>` · `cd ..` · `pwd` · `list [folder]`  **File** `copy <src> <dst>` · `move <src> <dst>` · `delete <path>` `preview <path>` · `download <path>` · `clear`  **Laptop** `baterai` · `mode server` · `mode hemat` · `shutdown` · `resta"}
{"level":30,"time":1783853162057,"pid":18728,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: ?pwd"}
{"level":30,"time":1783853162486,"pid":18728,"hostname":"NauTcn","msg":"Balasan bot untuk \"?pwd\": **pwd** — lihat folder aktif Nunjukin folder mana yang lagi \"aktif\" sekarang (hasil `cd` terakhir), biar nggak perlu inget-inget sendiri lagi di mana. Semua command lain (list/copy/move/delete/download/preview) yang argumennya bukan path lengkap otomatis dianggap relatif ke folder aktif ini."}
{"level":30,"time":1783853189129,"pid":18728,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: ?/"}
{"level":30,"time":1783853189657,"pid":18728,"hostname":"NauTcn","msg":"Balasan bot untuk \"?/\": ❓ Belum ada penjelasan detail buat \"/\". Topik yang tersedia: baterai, cd, clear, copy, delete, download, list, mode, move, preview, pwd, restart, shutdown (juga `?:` buat shortcut nomor)."}
{"level":30,"time":1783853225678,"pid":18728,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783853226170,"pid":18728,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v3-detailed-help)`  **Navigasi** `cd <folder>` · `cd ..` · `pwd` · `list [folder]`  **File** `copy <src> <dst>` · `move <src> <dst>` · `delete <path>` `preview <path>` · `download <path>` · `clear`  **Laptop** `baterai` · `mode server` · `mode hemat` · `shutdown` · `resta"}
{"level":30,"time":1783853585465,"pid":8044,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:8044) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783853585465,"pid":8044,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v4-root-shortcut"}
{"level":30,"time":1783853620929,"pid":8044,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783853622719,"pid":8044,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783853634238,"pid":8044,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783853634820,"pid":8044,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v4-root-shortcut)`  **Navigasi** `cd <folder>` · `cd ..` · `root` · `pwd` · `list [folder]`  **File** `copy <src> <dst>` · `move <src> <dst>` · `delete <path>` `preview <path>` · `download <path>` · `clear`  **Laptop** `baterai` · `mode server` · `mode hemat` · `shutdown`"}
{"level":30,"time":1783853748641,"pid":9300,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:9300) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783853748641,"pid":9300,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v4-root-shortcut"}
{"level":30,"time":1783853749716,"pid":9300,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783853750810,"pid":9300,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783853755273,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783853755811,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v4-root-shortcut)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` • `move <src> <dst>` • `delete <path>` • `preview <path>` • `download <path>` • `clear`  **Laptop** • `baterai` • `mode server` • `mode hemat` • `s"}
{"level":30,"time":1783853810249,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783853810758,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/** — 7 folder, 0 file: 1. 📁 D/ 2. 📁 Documents/ 3. 📁 Downloads/ 4. 📁 ibisPaint/ 5. 📁 Music/ 6. 📁 Pictures/ 7. 📁 SD/"}
{"level":30,"time":1783853818513,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783853818984,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd D\": 📂 Pindah ke folder: `/D`"}
{"level":30,"time":1783853823064,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783853823560,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D** — 10 folder, 3 file: 1. 📁 $RECYCLE.BIN/ 2. 📁 Apps/ 3. 📁 Download/ 4. 📁 Film/ 5. 📁 Font/ 6. 📁 Game/ 7. 📁 Kenangan/ 8. 📁 Project/ 9. 📁 System Volume Information/ 10. 📁 Wallpaper/ 11. 📄 .GamingRoot 12. 📄 DumpStack.log.tmp 13. 📄 pagefile.sys"}
{"level":30,"time":1783853831983,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd 8"}
{"level":30,"time":1783853832433,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd 8\": ❌ Gagal pindah folder: ENOENT: no such file or directory, scandir 'D:\\8'"}
{"level":30,"time":1783853838021,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :8"}
{"level":30,"time":1783853838609,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd :8\": 📂 Pindah ke folder: `/D/Project`"}
{"level":30,"time":1783853844050,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783853844627,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Project** — 15 folder, 1 file: 1. 📁 3D Blender/ 2. 📁 Coding/ 3. 📁 Data Siswa/ 4. 📁 Design/ 5. 📁 Editing/ 6. 📁 Game Dev/ 7. 📁 Logo/ 8. 📁 Motion Graphic ( Animasi )/ 9. 📁 Ms Excel/ 10. 📁 Ms Power Point/ 11. 📁 Ms Word/ 12. 📁 OBS/ 13. 📁 Pdf/ 14. 📁 Surat Penting/ 15. 📁 Txt/ 16. 📄 "}
{"level":30,"time":1783853870601,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :4"}
{"level":30,"time":1783853871086,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd :4\": 📂 Pindah ke folder: `/D/Project/Design`"}
{"level":30,"time":1783853875433,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783853876130,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Project/Design** — 38 folder, 0 file: 1. 📁 Backdrop Syukuran HUT 55 SIB/ 2. 📁 Background SIB News Network SNN/ 3. 📁 Banner SIB Hut 55/ 4. 📁 Bendera OSIS/ 5. 📁 Brosur SPMB SMK Dharma Pancasila Medan/ 6. 📁 Buku Panduan Mitigasi Bencana Di Madrasah/ 7. 📁 Comic MOI/ 8. 📁 Comic Strip Cobo"}
{"level":30,"time":1783853883653,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: root"}
{"level":30,"time":1783853884220,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"root\": 📂 Pindah ke folder: `/`"}
{"level":30,"time":1783853888155,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783853888745,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/** — 7 folder, 0 file: 1. 📁 D/ 2. 📁 Documents/ 3. 📁 Downloads/ 4. 📁 ibisPaint/ 5. 📁 Music/ 6. 📁 Pictures/ 7. 📁 SD/"}
{"level":30,"time":1783853892962,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783853893346,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v4-root-shortcut)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` • `move <src> <dst>` • `delete <path>` • `preview <path>` • `download <path>` • `clear`  **Laptop** • `baterai` • `mode server` • `mode hemat` • `s"}
{"level":30,"time":1783853907620,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783853908523,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"baterai\": 🔋 **Status Baterai Laptop** • Persentase: **100%** • 🔌 Tidak di-cas _(AC tersambung)_ • Mode Power: 🔋 Mode Hemat (sleep otomatis setelah 15 menit idle)"}
{"level":30,"time":1783853981667,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783853982199,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd D\": 📂 Pindah ke folder: `/D`"}
{"level":30,"time":1783853984526,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783853984946,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D** — 10 folder, 3 file: 1. 📁 $RECYCLE.BIN/ 2. 📁 Apps/ 3. 📁 Download/ 4. 📁 Film/ 5. 📁 Font/ 6. 📁 Game/ 7. 📁 Kenangan/ 8. 📁 Project/ 9. 📁 System Volume Information/ 10. 📁 Wallpaper/ 11. 📄 .GamingRoot 12. 📄 DumpStack.log.tmp 13. 📄 pagefile.sys"}
{"level":30,"time":1783854014051,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd 7"}
{"level":30,"time":1783854014507,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd 7\": ❌ Gagal pindah folder: ENOENT: no such file or directory, scandir 'D:\\7'"}
{"level":30,"time":1783854017897,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :7"}
{"level":30,"time":1783854018326,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd :7\": 📂 Pindah ke folder: `/D/Kenangan`"}
{"level":30,"time":1783854024100,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783854024976,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Kenangan** — 14 folder, 1 file: 1. 📁 dcim/ 2. 📁 Fotage Seni Fotografi & Editing/ 3. 📁 Foto Diri/ 4. 📁 Foto Formal Bunda/ 5. 📁 Kenagan PKL Instansi Radio Republik Indonesia/ 6. 📁 Kenangan Game/ 7. 📁 Kenangan Keluarga/ 8. 📁 Kenangan PKL Yayasan Manuprojectpro Indonesia Medan/ 9. 📁 Ken"}
{"level":30,"time":1783854031891,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :3"}
{"level":30,"time":1783854032311,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd :3\": 📂 Pindah ke folder: `/D/Kenangan/Foto Diri`"}
{"level":30,"time":1783854036164,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783854036604,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": (null / sudah dikirim manual)"}
{"level":30,"time":1783854077836,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: preview :103"}
{"level":30,"time":1783854080892,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"preview :103\": (null / sudah dikirim manual)"}
{"level":30,"time":1783854088831,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: clear"}
{"level":30,"time":1783854089675,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"clear\": 🧹 **Selesai!** 1 pesan preview berhasil dihapus."}
{"level":30,"time":1783854372735,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783854373270,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v4-root-shortcut)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` • `move <src> <dst>` • `delete <path>` • `preview <path>` • `download <path>` • `clear`  **Laptop** • `baterai` • `mode server` • `mode hemat` • `s"}
{"level":30,"time":1783854578751,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783854579309,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": (null / sudah dikirim manual)"}
{"level":30,"time":1783854583111,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: root"}
{"level":30,"time":1783854583502,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"root\": 📂 Pindah ke folder: `/`"}
{"level":30,"time":1783854585994,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783854586485,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/** — 7 folder, 0 file: 1. 📁 D/ 2. 📁 Documents/ 3. 📁 Downloads/ 4. 📁 ibisPaint/ 5. 📁 Music/ 6. 📁 Pictures/ 7. 📁 SD/"}
{"level":30,"time":1783854601310,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd : 1"}
{"level":30,"time":1783854601745,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd : 1\": ❌ Gagal pindah folder: \":\" bukan folder yang diizinkan. Folder yang tersedia: D, Documents, Downloads, ibisPaint, Music, Pictures, SD"}
{"level":30,"time":1783854606292,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :1"}
{"level":30,"time":1783854606749,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd :1\": 📂 Pindah ke folder: `/D`"}
{"level":30,"time":1783854609739,"pid":9300,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783854610276,"pid":9300,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D** — 10 folder, 3 file: 1. 📁 $RECYCLE.BIN/ 2. 📁 Apps/ 3. 📁 Download/ 4. 📁 Film/ 5. 📁 Font/ 6. 📁 Game/ 7. 📁 Kenangan/ 8. 📁 Project/ 9. 📁 System Volume Information/ 10. 📁 Wallpaper/ 11. 📄 .GamingRoot 12. 📄 DumpStack.log.tmp 13. 📄 pagefile.sys"}
{"level":30,"time":1783854845591,"pid":19180,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:19180) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783854845591,"pid":19180,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v5-trash-purge-disk-info"}
{"level":30,"time":1783854880537,"pid":19180,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783854881692,"pid":19180,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783854889526,"pid":19180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783854889959,"pid":19180,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v5-trash-purge-disk-info)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` • `move <src> <dst>` • `delete <path>` • `purge <path>` • `info <path>` • `preview <path>` • `download <path>` • `clear`  **Laptop** • `bat"}
{"level":30,"time":1783854921268,"pid":19180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: ?copy"}
{"level":30,"time":1783854921818,"pid":19180,"hostname":"NauTcn","msg":"Balasan bot untuk \"?copy\": **copy** — copy file/folder `copy <src> <dst>` — src & dst boleh nama folder/file biasa, path lengkap (`/Documents/x`), atau nomor dari `list` terakhir (`:3`). Folder di-copy beserta isinya (recursive). File asal tidak terhapus."}
{"level":30,"time":1783854948318,"pid":19180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783854948820,"pid":19180,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v5-trash-purge-disk-info)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` • `move <src> <dst>` • `delete <path>` • `purge <path>` • `info <path>` • `preview <path>` • `download <path>` • `clear`  **Laptop** • `bat"}
{"level":30,"time":1783854957392,"pid":19180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783854957845,"pid":19180,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/** — 7 folder, 0 file: 1. 📁 D/ 2. 📁 Documents/ 3. 📁 Downloads/ 4. 📁 ibisPaint/ 5. 📁 Music/ 6. 📁 Pictures/ 7. 📁 SD/"}
{"level":30,"time":1783854972726,"pid":19180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :2"}
{"level":30,"time":1783854973189,"pid":19180,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd :2\": 📂 Pindah ke folder: `/Documents`"}
{"level":30,"time":1783854983769,"pid":19180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783854984226,"pid":19180,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd ..\": 📂 Pindah ke folder: `/`"}
{"level":30,"time":1783854989532,"pid":19180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: info Documents"}
{"level":30,"time":1783854990875,"pid":19180,"hostname":"NauTcn","msg":"Balasan bot untuk \"info Documents\": 📁 **/Documents** • Tipe: Folder • Ukuran: **188.55 MB** • Isi: 16 item • Terakhir diubah: 9 Jul 2026, 17.01"}
{"level":30,"time":1783855040104,"pid":19180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Documents"}
{"level":30,"time":1783855040527,"pid":19180,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Documents\": 📂 Pindah ke folder: `/Documents`"}
{"level":30,"time":1783855042278,"pid":19180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783855042882,"pid":19180,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/Documents** — 9 folder, 6 file: 1. 📁 Adobe/ 2. 📁 AYAH/ 3. 📁 Corel Cloud/ 4. 📁 Corel/ 5. 📁 Criterion Games/ 6. 📁 Image-Line/ 7. 📁 Nausort Media/ 8. 📁 Nausync/ 9. 📁 PowerShell/ 10. 📄 desktop.ini 11. 📄 My Music 12. 📄 My Pictures 13. 📄 My Videos 14. 📄 Nilai Rata-Rata Semester 1 - 5.x"}
{"level":30,"time":1783855058853,"pid":19180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: info"}
{"level":30,"time":1783855059394,"pid":19180,"hostname":"NauTcn","msg":"Balasan bot untuk \"info\": Format: `info <path>`"}
{"level":30,"time":1783855074089,"pid":19180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: info Documents"}
{"level":30,"time":1783855074577,"pid":19180,"hostname":"NauTcn","msg":"Balasan bot untuk \"info Documents\": ❌ Gagal: `/Documents/Documents` tidak ditemukan."}
{"level":30,"time":1783855146590,"pid":19180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: root"}
{"level":30,"time":1783855147148,"pid":19180,"hostname":"NauTcn","msg":"Balasan bot untuk \"root\": 📂 Pindah ke folder: `/`"}
{"level":30,"time":1783855148347,"pid":19180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783855148775,"pid":19180,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd D\": 📂 Pindah ke folder: `/D`"}
{"level":30,"time":1783855150125,"pid":19180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783855150601,"pid":19180,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D** — 10 folder, 3 file: 1. 📁 $RECYCLE.BIN/ 2. 📁 Apps/ 3. 📁 Download/ 4. 📁 Film/ 5. 📁 Font/ 6. 📁 Game/ 7. 📁 Kenangan/ 8. 📁 Project/ 9. 📁 System Volume Information/ 10. 📁 Wallpaper/ 11. 📄 .GamingRoot 12. 📄 DumpStack.log.tmp 13. 📄 pagefile.sys"}
{"level":30,"time":1783855343149,"pid":19908,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:19908) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783855343150,"pid":19908,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v5-trash-purge-disk-info"}
{"level":30,"time":1783855345952,"pid":19908,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783855347164,"pid":19908,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783855387545,"pid":19908,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783855388127,"pid":19908,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v5-trash-purge-disk-info)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` • `move <src> <dst>` • `delete <path>` • `purge <path>` • `info <path>` • `preview <path>` • `download <path>` • `clear`  **Laptop** • `bat"}
{"level":30,"time":1783855392690,"pid":19908,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783855393237,"pid":19908,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd D\": 📂 Pindah ke folder: `/D`"}
{"level":30,"time":1783855394773,"pid":19908,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783855395410,"pid":19908,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D** — 9 folder, 2 file: 1. 📁 Apps/ 2. 📁 Download/ 3. 📁 Film/ 4. 📁 Font/ 5. 📁 Game/ 6. 📁 Kenangan/ 7. 📁 Project/ 8. 📁 System Volume Information/ 9. 📁 Wallpaper/ 10. 📄 DumpStack.log.tmp 11. 📄 pagefile.sys"}
{"level":30,"time":1783855606458,"pid":19244,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:19244) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783855606459,"pid":19244,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v5-trash-purge-disk-info"}
{"level":30,"time":1783855607451,"pid":19244,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783855608538,"pid":19244,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783855612201,"pid":19244,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783855612712,"pid":19244,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/** — 7 folder, 0 file: 1. 📁 D/ 2. 📁 Documents/ 3. 📁 Downloads/ 4. 📁 ibisPaint/ 5. 📁 Music/ 6. 📁 Pictures/ 7. 📁 SD/"}
{"level":30,"time":1783855624074,"pid":19244,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :7"}
{"level":30,"time":1783855624566,"pid":19244,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd :7\": 📂 Pindah ke folder: `/SD`"}
{"level":30,"time":1783855628865,"pid":19244,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783855629319,"pid":19244,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/SD** — 3 folder, 0 file: 1. 📁 Music/ 2. 📁 System Volume Information/ 3. 📁 WhatsApp Video/"}
{"level":30,"time":1783855737742,"pid":19244,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783855738503,"pid":19244,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd ..\": 📂 Pindah ke folder: `/`"}
{"level":30,"time":1783855743547,"pid":19244,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783855744177,"pid":19244,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd D\": 📂 Pindah ke folder: `/D`"}
{"level":30,"time":1783855747380,"pid":19244,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783855747828,"pid":19244,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D** — 8 folder, 2 file: 1. 📁 Apps/ 2. 📁 Download/ 3. 📁 Film/ 4. 📁 Font/ 5. 📁 Game/ 6. 📁 Kenangan/ 7. 📁 Project/ 8. 📁 Wallpaper/ 9. 📄 DumpStack.log.tmp 10. 📄 pagefile.sys"}
{"level":30,"time":1783855813809,"pid":3104,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:3104) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783855813810,"pid":3104,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v5-trash-purge-disk-info"}
{"level":30,"time":1783855832989,"pid":3104,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783855834168,"pid":3104,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783855849392,"pid":3104,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783855849915,"pid":3104,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/** — 7 folder, 0 file: 1. 📁 D/ 2. 📁 Documents/ 3. 📁 Downloads/ 4. 📁 ibisPaint/ 5. 📁 Music/ 6. 📁 Pictures/ 7. 📁 SD/"}
{"level":30,"time":1783855856740,"pid":3104,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd SD"}
{"level":30,"time":1783855857281,"pid":3104,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd SD\": 📂 Pindah ke folder: `/SD`"}
{"level":30,"time":1783855859892,"pid":3104,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783855860417,"pid":3104,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/SD** — 2 folder, 0 file: 1. 📁 Music/ 2. 📁 WhatsApp Video/"}
{"level":30,"time":1783855868303,"pid":3104,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: root"}
{"level":30,"time":1783855868752,"pid":3104,"hostname":"NauTcn","msg":"Balasan bot untuk \"root\": 📂 Pindah ke folder: `/`"}
{"level":30,"time":1783855890007,"pid":3104,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Documents"}
{"level":30,"time":1783855890457,"pid":3104,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Documents\": 📂 Pindah ke folder: `/Documents`"}
{"level":30,"time":1783855892889,"pid":3104,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783855893484,"pid":3104,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/Documents** — 8 folder, 6 file: 1. 📁 Adobe/ 2. 📁 AYAH/ 3. 📁 Corel Cloud/ 4. 📁 Corel/ 5. 📁 Criterion Games/ 6. 📁 Image-Line/ 7. 📁 Nausort Media/ 8. 📁 Nausync/ 9. 📄 desktop.ini 10. 📄 My Music 11. 📄 My Pictures 12. 📄 My Videos 13. 📄 Nilai Rata-Rata Semester 1 - 5.xlsx 14. 📄 Rata Rat"}
{"level":30,"time":1783856142919,"pid":14284,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:14284) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783856142920,"pid":14284,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v5-trash-purge-disk-info"}
{"level":30,"time":1783856144028,"pid":14284,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783856145054,"pid":14284,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783856153353,"pid":14284,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783856153877,"pid":14284,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v5-trash-purge-disk-info)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` • `move <src> <dst>` • `delete <path>` • `purge <path>` • `info <path>` • `preview <path>` • `download <path>` • `clear`  **Laptop** • `bat"}
{"level":30,"time":1783856157484,"pid":14284,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783856157927,"pid":14284,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/** — 7 folder, 0 file: 1. 📁 D/ 2. 📁 Documents/ 3. 📁 Downloads/ 4. 📁 ibisPaint/ 5. 📁 Music/ 6. 📁 Pictures/ 7. 📁 SD/"}
{"level":30,"time":1783856163149,"pid":14284,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783856163642,"pid":14284,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd D\": 📂 Pindah ke folder: `/D`"}
{"level":30,"time":1783856173259,"pid":14284,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783856174443,"pid":14284,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D** — 8 folder, 0 file: 1. 📁 Apps/ 2. 📁 Download/ 3. 📁 Film/ 4. 📁 Font/ 5. 📁 Game/ 6. 📁 Kenangan/ 7. 📁 Project/ 8. 📁 Wallpaper/"}
{"level":30,"time":1783856177603,"pid":14284,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: root"}
{"level":30,"time":1783856177993,"pid":14284,"hostname":"NauTcn","msg":"Balasan bot untuk \"root\": 📂 Pindah ke folder: `/`"}
{"level":30,"time":1783856182443,"pid":14284,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Documents"}
{"level":30,"time":1783856183134,"pid":14284,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Documents\": 📂 Pindah ke folder: `/Documents`"}
{"level":30,"time":1783856185636,"pid":14284,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783856186005,"pid":14284,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/Documents** — 7 folder, 5 file: 1. 📁 Adobe/ 2. 📁 AYAH/ 3. 📁 Corel Cloud/ 4. 📁 Corel/ 5. 📁 Image-Line/ 6. 📁 Nausort Media/ 7. 📁 Nausync/ 8. 📄 My Music 9. 📄 My Pictures 10. 📄 My Videos 11. 📄 Nilai Rata-Rata Semester 1 - 5.xlsx 12. 📄 Rata Rata Nilai Semester.xlsx"}
{"level":30,"time":1783856195699,"pid":14284,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: root"}
{"level":30,"time":1783856196222,"pid":14284,"hostname":"NauTcn","msg":"Balasan bot untuk \"root\": 📂 Pindah ke folder: `/`"}
{"level":30,"time":1783856197629,"pid":14284,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783856198120,"pid":14284,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/** — 7 folder, 0 file: 1. 📁 D/ 2. 📁 Documents/ 3. 📁 Downloads/ 4. 📁 ibisPaint/ 5. 📁 Music/ 6. 📁 Pictures/ 7. 📁 SD/"}
{"level":30,"time":1783856239876,"pid":14284,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :4"}
{"level":30,"time":1783856240355,"pid":14284,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd :4\": 📂 Pindah ke folder: `/ibisPaint`"}
{"level":30,"time":1783856243168,"pid":14284,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783856243571,"pid":14284,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/ibisPaint** — 15 folder, 24 file: 1. 📁 .ioimage/ 2. 📁 .sessions/ 3. 📁 .thumbs/ 4. 📁 Downloads/ 5. 📁 Untitled1_editing/ 6. 📁 Untitled10_editing/ 7. 📁 Untitled11_editing/ 8. 📁 Untitled12_editing/ 9. 📁 Untitled13_editing/ 10. 📁 Untitled14_editing/ 11. 📁 Untitled15_editing/ 12. 📁 Untit"}
{"level":30,"time":1783856758151,"pid":6180,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:6180) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783856758151,"pid":6180,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v5-trash-purge-disk-info"}
{"level":30,"time":1783856759473,"pid":6180,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783856760644,"pid":6180,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783856768505,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783856769570,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/** — 7 folder, 0 file: 1. 📁 D/ 2. 📁 Documents/ 3. 📁 Downloads/ 4. 📁 ibisPaint/ 5. 📁 Music/ 6. 📁 Pictures/ 7. 📁 SD/"}
{"level":30,"time":1783856817086,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :2"}
{"level":30,"time":1783856817749,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd :2\": 📂 Pindah ke folder: `/Documents`"}
{"level":30,"time":1783856822875,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783856823364,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/Documents** — 6 folder, 2 file: 1. 📁 Adobe/ 2. 📁 AYAH/ 3. 📁 Corel Cloud/ 4. 📁 Corel/ 5. 📁 Image-Line/ 6. 📁 Nausort Media/ 7. 📄 Nilai Rata-Rata Semester 1 - 5.xlsx 8. 📄 Rata Rata Nilai Semester.xlsx"}
{"level":30,"time":1783856836008,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: info"}
{"level":30,"time":1783856836497,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"info\": Format: `info <path>`"}
{"level":30,"time":1783857396865,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783857397629,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/Documents** — 6 folder, 2 file: 1. 📁 Adobe/ 2. 📁 AYAH/ 3. 📁 Corel Cloud/ 4. 📁 Corel/ 5. 📁 Image-Line/ 6. 📁 Nausort Media/ 7. 📄 Nilai Rata-Rata Semester 1 - 5.xlsx 8. 📄 Rata Rata Nilai Semester.xlsx"}
{"level":30,"time":1783857422724,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Corel"}
{"level":30,"time":1783857423186,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Corel\": 📂 Pindah ke folder: `/Documents/Corel`"}
{"level":30,"time":1783857445643,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783857446166,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/Documents/Corel** — 1 folder, 0 file: 1. 📁 Corel Content/"}
{"level":30,"time":1783857458682,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :1"}
{"level":30,"time":1783857459160,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd :1\": 📂 Pindah ke folder: `/Documents/Corel/Corel Content`"}
{"level":30,"time":1783857461020,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783857461448,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/Documents/Corel/Corel Content** — 18 folder, 1 file: 1. 📁 Adjustment Presets/ 2. 📁 Bitmap Presets/ 3. 📁 Brushes/ 4. 📁 CorelDRAW/ 5. 📁 Export Presets/ 6. 📁 Fills/ 7. 📁 Find And Replace/ 8. 📁 Fonts/ 9. 📁 Image Lists/ 10. 📁 Images/ 11. 📁 Painter/ 12. 📁 Palettes/ 13. 📁 Photo Frames/ 1"}
{"level":30,"time":1783857467935,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: root"}
{"level":30,"time":1783857468505,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"root\": 📂 Pindah ke folder: `/`"}
{"level":30,"time":1783857479623,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: info D"}
{"level":30,"time":1783857529081,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"info D\": 📁 **/D** • Tipe: Folder • Ukuran: **223.34 GB** • Isi: 18 item • Terakhir diubah: 12 Jul 2026, 17.33"}
{"level":30,"time":1783857568497,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783857569053,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v5-trash-purge-disk-info)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` • `move <src> <dst>` • `delete <path>` • `purge <path>` • `info <path>` • `preview <path>` • `download <path>` • `clear`  **Laptop** • `bat"}
{"level":30,"time":1783857892630,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783857893089,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd D\": 📂 Pindah ke folder: `/D`"}
{"level":30,"time":1783857895955,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783857896671,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D** — 8 folder, 0 file: 1. 📁 Apps/ 2. 📁 Download/ 3. 📁 Film/ 4. 📁 Font/ 5. 📁 Game/ 6. 📁 Kenangan/ 7. 📁 Project/ 8. 📁 Wallpaper/"}
{"level":30,"time":1783857901412,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Project"}
{"level":30,"time":1783857901886,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Project\": 📂 Pindah ke folder: `/D/Project`"}
{"level":30,"time":1783857903107,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783857903535,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Project** — 15 folder, 1 file: 1. 📁 3D Blender/ 2. 📁 Coding/ 3. 📁 Data Siswa/ 4. 📁 Design/ 5. 📁 Editing/ 6. 📁 Game Dev/ 7. 📁 Logo/ 8. 📁 Motion Graphic ( Animasi )/ 9. 📁 Ms Excel/ 10. 📁 Ms Power Point/ 11. 📁 Ms Word/ 12. 📁 OBS/ 13. 📁 Pdf/ 14. 📁 Surat Penting/ 15. 📁 Txt/ 16. 📄 "}
{"level":30,"time":1783857914345,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Txt"}
{"level":30,"time":1783857914853,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Txt\": 📂 Pindah ke folder: `/D/Project/Txt`"}
{"level":30,"time":1783857918059,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783857918482,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Project/Txt** — 0 folder, 3 file: 1. 📄 Anime List.txt 2. 📄 script web scraper.txt 3. 📄 Semua Email Staff Manuproject.txt"}
{"level":30,"time":1783857940764,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783857941284,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Project/Txt** — 0 folder, 4 file: 1. 📄 Anime List.txt 2. 📄 script web scraper.txt 3. 📄 Semua Email Staff Manuproject - Copy.txt 4. 📄 Semua Email Staff Manuproject.txt"}
{"level":30,"time":1783857960526,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: Purge :3"}
{"level":30,"time":1783857977234,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"Purge :3\": (null / sudah dikirim manual)"}
{"level":30,"time":1783858008796,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783858009278,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Project/Txt** — 0 folder, 4 file: 1. 📄 Anime List.txt 2. 📄 script web scraper - Copy.txt 3. 📄 script web scraper.txt 4. 📄 Semua Email Staff Manuproject.txt"}
{"level":30,"time":1783858038953,"pid":6180,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: delete :2"}
{"level":30,"time":1783858039353,"pid":6180,"hostname":"NauTcn","msg":"Balasan bot untuk \"delete :2\": 🗑️ Dipindah ke trash: `/D/Project/Txt/script web scraper - Copy.txt` (belum permanen — pakai `purge` kalau mau hapus beneran)"}
{"level":30,"time":1783862691572,"pid":15432,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:15432) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783862691573,"pid":15432,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v6-pin-security"}
{"level":30,"time":1783862693606,"pid":15432,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783862698997,"pid":15432,"hostname":"NauTcn","msg":"PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali)."}
{"level":30,"time":1783862700714,"pid":15432,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783862951204,"pid":15432,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783862952090,"pid":15432,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/** — 7 folder, 0 file: 1. 📁 D/ 2. 📁 Documents/ 3. 📁 Downloads/ 4. 📁 ibisPaint/ 5. 📁 Music/ 6. 📁 Pictures/ 7. 📁 SD/"}
{"level":30,"time":1783862967007,"pid":15432,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Project"}
{"level":30,"time":1783862967820,"pid":15432,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Project\": ❌ Gagal pindah folder: \"Project\" bukan folder yang diizinkan. Folder yang tersedia: D, Documents, Downloads, ibisPaint, Music, Pictures, SD"}
{"level":30,"time":1783863043088,"pid":20832,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:20832) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783863043089,"pid":20832,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v6-pin-security"}
{"level":30,"time":1783863044644,"pid":20832,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783863044646,"pid":20832,"hostname":"NauTcn","msg":"PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali)."}
{"level":30,"time":1783863046139,"pid":20832,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783863136071,"pid":20832,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783863136833,"pid":20832,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/** — 7 folder, 0 file: 1. 📁 D/ 2. 📁 Documents/ 3. 📁 Downloads/ 4. 📁 ibisPaint/ 5. 📁 Music/ 6. 📁 Pictures/ 7. 📁 SD/"}
{"level":50,"time":1783865490906,"pid":19048,"hostname":"NauTcn","err":{"type":"DiscordjsError","message":"An invalid token was provided.","stack":"DiscordjsError [TokenInvalid]: An invalid token was provided.\n    at WebSocketManager.connect (D:\\Project\\Coding\\Nausync Engine\\Nausync Cloud\\node_modules\\discord.js\\src\\client\\websocket\\WebSocketManager.js:140:26)\n    at Client.login (D:\\Project\\Coding\\Nausync Engine\\Nausync Cloud\\node_modules\\discord.js\\src\\client\\Client.js:229:21)\n    at file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/index.js:88:8\n    at ModuleJob.run (node:internal/modules/esm/module_job:439:25)\n    at async node:internal/modules/esm/loader:633:26\n    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)","code":"TokenInvalid"},"msg":"Gagal login ke Discord."}
Assertion failed: !(handle->flags & UV_HANDLE_CLOSING), file src\win\async.c, line 94
{"level":50,"time":1783865827269,"pid":2456,"hostname":"NauTcn","err":{"type":"DiscordjsError","message":"An invalid token was provided.","stack":"DiscordjsError [TokenInvalid]: An invalid token was provided.\n    at WebSocketManager.connect (D:\\Project\\Coding\\Nausync Engine\\Nausync Cloud\\node_modules\\discord.js\\src\\client\\websocket\\WebSocketManager.js:140:26)\n    at Client.login (D:\\Project\\Coding\\Nausync Engine\\Nausync Cloud\\node_modules\\discord.js\\src\\client\\Client.js:229:21)\n    at file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/index.js:88:8\n    at ModuleJob.run (node:internal/modules/esm/module_job:439:25)\n    at async node:internal/modules/esm/loader:633:26\n    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)","code":"TokenInvalid"},"msg":"Gagal login ke Discord."}
Assertion failed: !(handle->flags & UV_HANDLE_CLOSING), file src\win\async.c, line 94
{"level":50,"time":1783866222456,"pid":5288,"hostname":"NauTcn","err":{"type":"DiscordjsError","message":"An invalid token was provided.","stack":"DiscordjsError [TokenInvalid]: An invalid token was provided.\n    at WebSocketManager.connect (D:\\Project\\Coding\\Nausync Engine\\Nausync Cloud\\node_modules\\discord.js\\src\\client\\websocket\\WebSocketManager.js:140:26)\n    at Client.login (D:\\Project\\Coding\\Nausync Engine\\Nausync Cloud\\node_modules\\discord.js\\src\\client\\Client.js:229:21)\n    at file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/index.js:88:8\n    at ModuleJob.run (node:internal/modules/esm/module_job:439:25)\n    at async node:internal/modules/esm/loader:633:26\n    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)","code":"TokenInvalid"},"msg":"Gagal login ke Discord."}
Assertion failed: !(handle->flags & UV_HANDLE_CLOSING), file src\win\async.c, line 94
{"level":30,"time":1783866571481,"pid":12940,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:12940) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783866571482,"pid":12940,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v7-pin-rotate-confidential"}
{"level":30,"time":1783866573302,"pid":12940,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783866573303,"pid":12940,"hostname":"NauTcn","msg":"PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali)."}
{"level":30,"time":1783866574770,"pid":12940,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783866585342,"pid":12940,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783866586341,"pid":12940,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v7-pin-rotate-confidential)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` • `move <src> <dst>` • `delete <path>` • `purge <path> <pin>` 🔐 • `info <path>` • `preview <path>` • `download <path>` • `clear`  **Lapt"}
{"level":30,"time":1783866608738,"pid":12940,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783866609507,"pid":12940,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/** — 7 folder, 0 file: 1. 📁 D/ 2. 📁 Documents/ 3. 📁 Downloads/ 4. 📁 ibisPaint/ 5. 📁 Music/ 6. 📁 Pictures/ 7. 📁 SD/"}
{"level":30,"time":1783866633592,"pid":12940,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Download"}
{"level":30,"time":1783866634111,"pid":12940,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Download\": ❌ Gagal pindah folder: \"Download\" bukan folder yang diizinkan. Folder yang tersedia: D, Documents, Downloads, ibisPaint, Music, Pictures, SD"}
{"level":30,"time":1783866642080,"pid":12940,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783866642724,"pid":12940,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd D\": 📂 Pindah ke folder: `/D`"}
{"level":30,"time":1783866644835,"pid":12940,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Project"}
{"level":30,"time":1783866645310,"pid":12940,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Project\": 📂 Pindah ke folder: `/D/Project`"}
{"level":30,"time":1783866649322,"pid":12940,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783866650072,"pid":12940,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Project** — 15 folder, 1 file: 1. 📁 3D Blender/ 2. 📁 Coding/ 3. 📁 Data Siswa/ 4. 📁 Design/ 5. 📁 Editing/ 6. 📁 Game Dev/ 7. 📁 Logo/ 8. 📁 Motion Graphic ( Animasi )/ 9. 📁 Ms Excel/ 10. 📁 Ms Power Point/ 11. 📁 Ms Word/ 12. 📁 OBS/ 13. 📁 Pdf/ 14. 📁 Surat Penting/ 15. 📁 Txt/ 16. 📄 "}
{"level":30,"time":1783866652984,"pid":12940,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Txt"}
{"level":30,"time":1783866653605,"pid":12940,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Txt\": 📂 Pindah ke folder: `/D/Project/Txt`"}
{"level":30,"time":1783866656488,"pid":12940,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783866657173,"pid":12940,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Project/Txt** — 0 folder, 3 file: 1. 📄 Anime List.txt 2. 📄 script web scraper.txt 3. 📄 Semua Email Staff Manuproject.txt"}
{"level":30,"time":1783866676446,"pid":12940,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: preview :1"}
{"level":30,"time":1783866677160,"pid":12940,"hostname":"NauTcn","msg":"Balasan bot untuk \"preview :1\": 🔒 **Data ini bersifat RAHASIA.** File `/D/Project/Txt/Anime List.txt` ada di folder yang ditandai rahasia — butuh PIN keamanan buat preview. Format: `preview :1 <pin>`"}
{"level":30,"time":1783866720049,"pid":12940,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: preview :1 5104"}
{"level":30,"time":1783866721400,"pid":12940,"hostname":"NauTcn","msg":"Balasan bot untuk \"preview :1 5104\": (null / sudah dikirim manual)"}
{"level":30,"time":1783866852660,"pid":12940,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: clear"}
{"level":30,"time":1783866854086,"pid":12940,"hostname":"NauTcn","msg":"Balasan bot untuk \"clear\": 🧹 **Selesai!** 1 pesan preview berhasil dihapus."}
{"level":30,"time":1783867052891,"pid":12940,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: preview :1 5104"}
{"level":30,"time":1783867056055,"pid":12940,"hostname":"NauTcn","msg":"Balasan bot untuk \"preview :1 5104\": Gagal: ❌ PIN salah. (percobaan ke-1 dari 5 sebelum lockout)"}
{"level":30,"time":1783867747503,"pid":12940,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: preview :1 cEZBn42R"}
{"level":30,"time":1783867749104,"pid":12940,"hostname":"NauTcn","msg":"Balasan bot untuk \"preview :1 cEZBn42R\": (null / sudah dikirim manual)"}
{"level":30,"time":1783867791684,"pid":12940,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: clear"}
{"level":30,"time":1783867793254,"pid":12940,"hostname":"NauTcn","msg":"Balasan bot untuk \"clear\": 🧹 **Selesai!** 1 pesan preview berhasil dihapus."}
{"level":30,"time":1783867798960,"pid":12940,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: preview :1 Y t H 3 K p M P"}
{"level":30,"time":1783867799429,"pid":12940,"hostname":"NauTcn","msg":"Balasan bot untuk \"preview :1 Y t H 3 K p M P\": Gagal: ❌ PIN salah. (percobaan ke-1 dari 5 sebelum lockout)"}
{"level":30,"time":1783868130302,"pid":14316,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:14316) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783868130302,"pid":14316,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v7-pin-rotate-confidential"}
{"level":30,"time":1783868131791,"pid":14316,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783868131792,"pid":14316,"hostname":"NauTcn","msg":"PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali)."}
{"level":30,"time":1783868133588,"pid":14316,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783868149936,"pid":14316,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783868150791,"pid":14316,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v7-pin-rotate-confidential)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` • `move <src> <dst>` • `delete <path>` • `purge <path> <pin>` 🔐 • `info <path>` • `preview <path>` • `download <path>` • `clear`  **Lapt"}
{"level":30,"time":1783868171252,"pid":14316,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: ?chgpin"}
{"level":30,"time":1783868171836,"pid":14316,"hostname":"NauTcn","msg":"Balasan bot untuk \"?chgpin\": **chgpin** — ganti PIN keamanan secara manual `chgpin <pin_lama>` — generate PIN baru secara acak (8 karakter, campur huruf besar/kecil & angka) & kirim ke email alert-mu (terpisah dari Discord), lalu PIN lama langsung tidak berlaku. Butuh PIN LAMA yang benar dulu (sama seperti ganti password pakai "}
{"level":30,"time":1783868222764,"pid":14316,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783868223322,"pid":14316,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/** — 7 folder, 0 file: 1. 📁 D/ 2. 📁 Documents/ 3. 📁 Downloads/ 4. 📁 ibisPaint/ 5. 📁 Music/ 6. 📁 Pictures/ 7. 📁 SD/"}
{"level":30,"time":1783868229549,"pid":14316,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Project"}
{"level":30,"time":1783868231456,"pid":14316,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Project\": ❌ Gagal pindah folder: \"Project\" bukan folder yang diizinkan. Folder yang tersedia: D, Documents, Downloads, ibisPaint, Music, Pictures, SD"}
{"level":30,"time":1783868243116,"pid":14316,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783868243963,"pid":14316,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd D\": 📂 Pindah ke folder: `/D`"}
{"level":30,"time":1783868245000,"pid":14316,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Project"}
{"level":30,"time":1783868245613,"pid":14316,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Project\": 📂 Pindah ke folder: `/D/Project`"}
{"level":30,"time":1783868253853,"pid":14316,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783868254568,"pid":14316,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Project** — 15 folder, 1 file: 1. 📁 3D Blender/ 2. 📁 Coding/ 3. 📁 Data Siswa/ 4. 📁 Design/ 5. 📁 Editing/ 6. 📁 Game Dev/ 7. 📁 Logo/ 8. 📁 Motion Graphic ( Animasi )/ 9. 📁 Ms Excel/ 10. 📁 Ms Power Point/ 11. 📁 Ms Word/ 12. 📁 OBS/ 13. 📁 Pdf/ 14. 📁 Surat Penting/ 15. 📁 Txt/ 16. 📄 "}
{"level":30,"time":1783868258871,"pid":14316,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :15"}
{"level":30,"time":1783868259652,"pid":14316,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd :15\": 📂 Pindah ke folder: `/D/Project/Txt`"}
{"level":30,"time":1783868262536,"pid":14316,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783868263077,"pid":14316,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Project/Txt** — 0 folder, 3 file: 1. 📄 Anime List.txt 2. 📄 script web scraper.txt 3. 📄 Semua Email Staff Manuproject.txt"}
{"level":30,"time":1783868272262,"pid":14316,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: preview :1"}
{"level":30,"time":1783868273028,"pid":14316,"hostname":"NauTcn","msg":"Balasan bot untuk \"preview :1\": 🔒 **Data ini bersifat RAHASIA.** File `/D/Project/Txt/Anime List.txt` ada di folder yang ditandai rahasia — butuh PIN keamanan buat preview. Format: `preview :1 <pin>`"}
{"level":30,"time":1783868350573,"pid":14316,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: preview \"Anime List.txt\" YtH3KpMP"}
{"level":30,"time":1783868351297,"pid":14316,"hostname":"NauTcn","msg":"Balasan bot untuk \"preview \"Anime List.txt\" YtH3KpMP\": (null / sudah dikirim manual)"}
{"level":30,"time":1783868406813,"pid":14316,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: clear"}
{"level":30,"time":1783868408771,"pid":14316,"hostname":"NauTcn","msg":"Balasan bot untuk \"clear\": 🧹 **Selesai!** 1 pesan preview berhasil dihapus."}
{"level":30,"time":1783868454732,"pid":9920,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:9920) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783868454732,"pid":9920,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v7-pin-rotate-confidential"}
{"level":30,"time":1783868456082,"pid":9920,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783868456085,"pid":9920,"hostname":"NauTcn","msg":"PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali)."}
{"level":30,"time":1783868457696,"pid":9920,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783868470915,"pid":9920,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: preview :1 YtH3KpMP"}
{"level":30,"time":1783868472096,"pid":9920,"hostname":"NauTcn","msg":"Balasan bot untuk \"preview :1 YtH3KpMP\": Gagal: Belum ada hasil \"list\" yang bisa dirujuk pakai nomor. Jalankan \"list\" dulu."}
{"level":30,"time":1783868480776,"pid":9920,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783868481544,"pid":9920,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/** — 7 folder, 0 file: 1. 📁 D/ 2. 📁 Documents/ 3. 📁 Downloads/ 4. 📁 ibisPaint/ 5. 📁 Music/ 6. 📁 Pictures/ 7. 📁 SD/"}
{"level":30,"time":1783868487070,"pid":9920,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783868487967,"pid":9920,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd D\": 📂 Pindah ke folder: `/D`"}
{"level":30,"time":1783868489877,"pid":9920,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Project"}
{"level":30,"time":1783868490567,"pid":9920,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Project\": 📂 Pindah ke folder: `/D/Project`"}
{"level":30,"time":1783868496098,"pid":9920,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Txt"}
{"level":30,"time":1783868496633,"pid":9920,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Txt\": 📂 Pindah ke folder: `/D/Project/Txt`"}
{"level":30,"time":1783868505022,"pid":9920,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783868505761,"pid":9920,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Project/Txt** — 0 folder, 3 file: 1. 📄 Anime List.txt 2. 📄 script web scraper.txt 3. 📄 Semua Email Staff Manuproject.txt"}
{"level":30,"time":1783868523792,"pid":9920,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: preview :1 YtH3KpMP"}
{"level":30,"time":1783868524532,"pid":9920,"hostname":"NauTcn","msg":"Balasan bot untuk \"preview :1 YtH3KpMP\": Gagal: ❌ PIN salah. (percobaan ke-1 dari 5 sebelum lockout)"}
{"level":30,"time":1783868568457,"pid":9920,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: preview :1 g6cjc3Dh"}
{"level":30,"time":1783868569543,"pid":9920,"hostname":"NauTcn","msg":"Balasan bot untuk \"preview :1 g6cjc3Dh\": (null / sudah dikirim manual)"}
{"level":30,"time":1783868624168,"pid":9920,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: restart mJYE8ncX"}
{"level":30,"time":1783868625058,"pid":9920,"hostname":"NauTcn","msg":"Balasan bot untuk \"restart mJYE8ncX\": 🔄 **Perintah Diterima!** Laptop Anda di rumah akan otomatis restart dalam waktu 15 detik ke depan. Koneksi bot akan terputus sebentar dan bot Nausync Cloud akan otomatis aktif lagi begitu Windows selesai booting (asalkan sudah di-setting auto-start)."}
{"level":30,"time":1783868738171,"pid":6756,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:6756) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783868738172,"pid":6756,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v7-pin-rotate-confidential"}
{"level":30,"time":1783868740511,"pid":6756,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783868740512,"pid":6756,"hostname":"NauTcn","msg":"PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali)."}
{"level":30,"time":1783868742593,"pid":6756,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783868757525,"pid":6756,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: mode server"}
{"level":30,"time":1783868759298,"pid":6756,"hostname":"NauTcn","msg":"Balasan bot untuk \"mode server\": 🖥️ **Laptop beralih ke Mode Server!** • Status Sleep: **Never** • Status Hibernate: **Never** ✅ Terverifikasi: standby timeout = Never Laptop Anda akan tetap terjaga selamanya untuk memproses unggahan besar Anda."}
{"level":30,"time":1783868813360,"pid":6756,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783868814172,"pid":6756,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v7-pin-rotate-confidential)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` • `move <src> <dst>` • `delete <path>` • `purge <path> <pin>` 🔐 • `info <path>` • `preview <path>` • `download <path>` • `clear`  **Lapt"}
{"level":30,"time":1783868841353,"pid":6756,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: ?disk"}
{"level":30,"time":1783868842287,"pid":6756,"hostname":"NauTcn","msg":"Balasan bot untuk \"?disk\": **disk** — cek sisa storage laptop Nampilin total, terpakai, dan sisa kapasitas tiap drive lokal fisik di laptop (mis. C:, D:) — beda sama sisa kapasitas Google Drive yang dicek otomatis pas `download`. Berguna dicek sebelum `copy`/`move` file besar biar nggak kehabisan space di tengah proses."}
{"level":30,"time":1783868852230,"pid":6756,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: disk"}
{"level":30,"time":1783868855561,"pid":6756,"hostname":"NauTcn","msg":"Balasan bot untuk \"disk\": **Status Disk Laptop**  💽 **C:** • Total: 198.92 GB • Terpakai: 172.53 GB (87%) • Sisa: **26.39 GB**  💽 **D:** • Total: 276.62 GB • Terpakai: 226.13 GB (82%) • Sisa: **50.49 GB**"}
{"level":30,"time":1783868901585,"pid":6756,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783868902077,"pid":6756,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v7-pin-rotate-confidential)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` • `move <src> <dst>` • `delete <path>` • `purge <path> <pin>` 🔐 • `info <path>` • `preview <path>` • `download <path>` • `clear`  **Lapt"}
{"level":30,"time":1783868975321,"pid":6756,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: ?pwd"}
{"level":30,"time":1783868976088,"pid":6756,"hostname":"NauTcn","msg":"Balasan bot untuk \"?pwd\": **pwd** — lihat folder aktif Nunjukin folder mana yang lagi \"aktif\" sekarang (hasil `cd` terakhir), biar nggak perlu inget-inget sendiri lagi di mana. Semua command lain (list/copy/move/delete/download/preview) yang argumennya bukan path lengkap otomatis dianggap relatif ke folder aktif ini."}
{"level":30,"time":1783869000014,"pid":6756,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: pwd"}
{"level":30,"time":1783869000711,"pid":6756,"hostname":"NauTcn","msg":"Balasan bot untuk \"pwd\": 📂 Folder aktif saat ini: `/`"}
{"level":30,"time":1783869009515,"pid":6756,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783869010208,"pid":6756,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd D\": 📂 Pindah ke folder: `/D`"}
{"level":30,"time":1783869012052,"pid":6756,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: pwd"}
{"level":30,"time":1783869012586,"pid":6756,"hostname":"NauTcn","msg":"Balasan bot untuk \"pwd\": 📂 Folder aktif saat ini: `/D`"}
{"level":30,"time":1783869099808,"pid":6756,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: mode"}
{"level":30,"time":1783869101314,"pid":6756,"hostname":"NauTcn","msg":"Balasan bot untuk \"mode\": Format: `mode <server/hemat>`"}
{"level":30,"time":1783869107886,"pid":6756,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783869109146,"pid":6756,"hostname":"NauTcn","msg":"Balasan bot untuk \"baterai\": 🔋 **Status Baterai Laptop** • Persentase: **100%** • 🔌 Tidak di-cas _(AC tersambung)_ • Mode Power: 🖥️ Mode Server (layar/sleep tidak pernah mati)"}
{"level":30,"time":1783869210876,"pid":6756,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: pwd"}
{"level":30,"time":1783869211340,"pid":6756,"hostname":"NauTcn","msg":"Balasan bot untuk \"pwd\": 📂 Folder aktif saat ini: `/D`"}
{"level":30,"time":1783869991649,"pid":6756,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783869992318,"pid":6756,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D** — 8 folder, 0 file: 1. 📁 Apps/ 2. 📁 Download/ 3. 📁 Film/ 4. 📁 Font/ 5. 📁 Game/ 6. 📁 Kenangan/ 7. 📁 Project/ 8. 📁 Wallpaper/"}
{"level":30,"time":1783870007823,"pid":6756,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Film"}
{"level":30,"time":1783870008475,"pid":6756,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Film\": 📂 Pindah ke folder: `/D/Film`"}
{"level":30,"time":1783870011211,"pid":6756,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783870011707,"pid":6756,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Film** — 0 folder, 1 file: 1. 📄 desktop.ini"}
{"level":30,"time":1783870064108,"pid":6756,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: preview desktop.ini"}
{"level":30,"time":1783870064878,"pid":6756,"hostname":"NauTcn","msg":"Balasan bot untuk \"preview desktop.ini\": (null / sudah dikirim manual)"}
file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/fsops.js:4
import archiver from 'archiver';
       ^^^^^^^^
SyntaxError: The requested module 'archiver' does not provide an export named 'default'
    at #asyncInstantiate (node:internal/modules/esm/module_job:327:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:431:5)
    at async node:internal/modules/esm/loader:633:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)

Node.js v24.16.0
file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/fsops.js:4
import archiver from 'archiver';
       ^^^^^^^^
SyntaxError: The requested module 'archiver' does not provide an export named 'default'
    at #asyncInstantiate (node:internal/modules/esm/module_job:327:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:431:5)
    at async node:internal/modules/esm/loader:633:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)

Node.js v24.16.0
file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/fsops.js:4
import archiver from 'archiver';
       ^^^^^^^^
SyntaxError: The requested module 'archiver' does not provide an export named 'default'
    at #asyncInstantiate (node:internal/modules/esm/module_job:327:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:431:5)
    at async node:internal/modules/esm/loader:633:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)

Node.js v24.16.0
{"level":30,"time":1783872372020,"pid":1220,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:1220) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783872372020,"pid":1220,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v8-pin-size-archive-richpreview"}
{"level":30,"time":1783872390400,"pid":1220,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783872390401,"pid":1220,"hostname":"NauTcn","msg":"PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali)."}
{"level":30,"time":1783872392081,"pid":1220,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783872395691,"pid":1220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783872396146,"pid":1220,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v8-pin-size-archive-richpreview)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` 🔐* • `move <src> <dst>` • `delete <path>` • `purge <path> <pin>` 🔐 • `info <path>` • `preview <path>` 🔐* • `download <path>` 🔐* "}
{"level":30,"time":1783872439959,"pid":1220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783872440585,"pid":1220,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd D\": 📂 Pindah ke folder: `/D`"}
{"level":30,"time":1783872441647,"pid":1220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783872442277,"pid":1220,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D** — 8 folder, 0 file: 1. 📁 Apps/ 2. 📁 Download/ 3. 📁 Film/ 4. 📁 Font/ 5. 📁 Game/ 6. 📁 Kenangan/ 7. 📁 Project/ 8. 📁 Wallpaper/"}
{"level":30,"time":1783872471569,"pid":1220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Kenangan"}
{"level":30,"time":1783872472174,"pid":1220,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Kenangan\": 📂 Pindah ke folder: `/D/Kenangan`"}
{"level":30,"time":1783872479322,"pid":1220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783872479915,"pid":1220,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Kenangan** — 14 folder, 1 file: 1. 📁 dcim/ 2. 📁 Fotage Seni Fotografi & Editing/ 3. 📁 Foto Diri/ 4. 📁 Foto Formal Bunda/ 5. 📁 Kenagan PKL Instansi Radio Republik Indonesia/ 6. 📁 Kenangan Game/ 7. 📁 Kenangan Keluarga/ 8. 📁 Kenangan PKL Yayasan Manuprojectpro Indonesia Medan/ 9. 📁 Ken"}
{"level":30,"time":1783872522855,"pid":1220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: info :14"}
{"level":30,"time":1783872523484,"pid":1220,"hostname":"NauTcn","msg":"Balasan bot untuk \"info :14\": 📁 **/D/Kenangan/Tablet** • Tipe: Folder • Ukuran: **716.11 MB** • Isi: 547 item • Terakhir diubah: 9 Jul 2026, 06.08"}
{"level":30,"time":1783872542437,"pid":1220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: info \"Foto Diri\""}
{"level":30,"time":1783872542995,"pid":1220,"hostname":"NauTcn","msg":"Balasan bot untuk \"info \"Foto Diri\"\": 📁 **/D/Kenangan/Foto Diri** • Tipe: Folder • Ukuran: **964.75 MB** • Isi: 202 item • Terakhir diubah: 7 Jul 2026, 22.05"}
{"level":30,"time":1783872555365,"pid":1220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: info :2"}
{"level":30,"time":1783872555927,"pid":1220,"hostname":"NauTcn","msg":"Balasan bot untuk \"info :2\": 📁 **/D/Kenangan/Fotage Seni Fotografi & Editing** • Tipe: Folder • Ukuran: **407.85 MB** • Isi: 54 item • Terakhir diubah: 14 Jun 2026, 20.30"}
{"level":30,"time":1783872580510,"pid":1220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :2"}
{"level":30,"time":1783872581247,"pid":1220,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd :2\": 📂 Pindah ke folder: `/D/Kenangan/Fotage Seni Fotografi & Editing`"}
{"level":30,"time":1783872583474,"pid":1220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783872583903,"pid":1220,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": (null / sudah dikirim manual)"}
{"level":30,"time":1783872615607,"pid":1220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783872616128,"pid":1220,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd ..\": 📂 Pindah ke folder: `/D/Kenangan`"}
{"level":30,"time":1783872644915,"pid":1220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :2"}
{"level":30,"time":1783872645583,"pid":1220,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd :2\": (null / sudah dikirim manual)"}
{"level":30,"time":1783872668290,"pid":1220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: clear"}
{"level":30,"time":1783872669205,"pid":1220,"hostname":"NauTcn","msg":"Balasan bot untuk \"clear\": 🧹 **Selesai!** 1 pesan preview berhasil dihapus."}
{"level":30,"time":1783872689102,"pid":1220,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: clear"}
{"level":30,"time":1783872689762,"pid":1220,"hostname":"NauTcn","msg":"Balasan bot untuk \"clear\": Belum ada file preview yang perlu dihapus."}
{"level":30,"time":1783873364432,"pid":7616,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:7616) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783873364432,"pid":7616,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v9-persist-preview"}
{"level":30,"time":1783873365420,"pid":7616,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783873365421,"pid":7616,"hostname":"NauTcn","msg":"PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali)."}
{"level":30,"time":1783873366814,"pid":7616,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783873376153,"pid":7616,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: clear"}
{"level":30,"time":1783873376574,"pid":7616,"hostname":"NauTcn","msg":"Balasan bot untuk \"clear\": Belum ada file preview yang perlu dihapus."}
{"level":30,"time":1783873391126,"pid":7616,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783873391560,"pid":7616,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v9-persist-preview)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` 🔐* • `move <src> <dst>` • `delete <path>` • `purge <path> <pin>` 🔐 • `info <path>` • `preview <path>` 🔐* • `download <path>` 🔐* • `archive <p"}
{"level":30,"time":1783874284644,"pid":9752,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:9752) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783874284644,"pid":9752,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v10-confidential-pin-move-copy-download"}
{"level":30,"time":1783874319879,"pid":9752,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783874319880,"pid":9752,"hostname":"NauTcn","msg":"PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali)."}
{"level":30,"time":1783874321160,"pid":9752,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783874335351,"pid":9752,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783874336673,"pid":9752,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v10-confidential-pin-move-copy-download)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` 🔐* • `move <src> <dst>` 🔐* • `delete <path>` • `purge <path> <pin>` 🔐 • `info <path>` • `preview <path>` 🔐* • `download "}
{"level":30,"time":1783874543361,"pid":9752,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783874543804,"pid":9752,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd D\": 📂 Pindah ke folder: `/D`"}
{"level":30,"time":1783874546987,"pid":9752,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783874547604,"pid":9752,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D** — 8 folder, 0 file: 1. 📁 Apps/ 2. 📁 Download/ 3. 📁 Film/ 4. 📁 Font/ 5. 📁 Game/ 6. 📁 Kenangan/ 7. 📁 Project/ 8. 📁 Wallpaper/"}
{"level":30,"time":1783874556390,"pid":9752,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Kenangan"}
{"level":30,"time":1783874556919,"pid":9752,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Kenangan\": 📂 Pindah ke folder: `/D/Kenangan`"}
{"level":30,"time":1783874559297,"pid":9752,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783874559716,"pid":9752,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Kenangan** — 14 folder, 1 file: 1. 📁 dcim/ 2. 📁 Fotage Seni Fotografi & Editing/ 3. 📁 Foto Diri/ 4. 📁 Foto Formal Bunda/ 5. 📁 Kenagan PKL Instansi Radio Republik Indonesia/ 6. 📁 Kenangan Game/ 7. 📁 Kenangan Keluarga/ 8. 📁 Kenangan PKL Yayasan Manuprojectpro Indonesia Medan/ 9. 📁 Ken"}
{"level":30,"time":1783877437623,"pid":7408,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:7408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783877437626,"pid":7408,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v10-confidential-pin-move-copy-download"}
{"level":30,"time":1783877439901,"pid":7408,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783877439903,"pid":7408,"hostname":"NauTcn","msg":"PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali)."}
{"level":30,"time":1783877440977,"pid":7408,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783877448657,"pid":7408,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783877449548,"pid":7408,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v10-confidential-pin-move-copy-download)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` 🔐* • `move <src> <dst>` 🔐* • `delete <path>` • `purge <path> <pin>` 🔐 • `info <path>` • `preview <path>` 🔐* • `download "}
{"level":30,"time":1783877480162,"pid":7408,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: ?archive"}
{"level":30,"time":1783877480659,"pid":7408,"hostname":"NauTcn","msg":"Balasan bot untuk \"?archive\": **archive** — compress ke .zip lalu upload `archive <path>` mengompres file/folder itu jadi satu file `.zip`, upload ke Google Drive (folder staging), lalu file `.zip` LOKAL langsung dihapus permanen begitu upload selesai (sukses ATAU gagal — nggak dibiarkan numpuk). Cocok buat folder isinya banyak "}
{"level":30,"time":1783877507892,"pid":7408,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783877508403,"pid":7408,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/** — 7 folder, 0 file: 1. 📁 D/ 2. 📁 Documents/ 3. 📁 Downloads/ 4. 📁 ibisPaint/ 5. 📁 Music/ 6. 📁 Pictures/ 7. 📁 SD/"}
{"level":30,"time":1783877712276,"pid":1880,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:1880) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783877712276,"pid":1880,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v10-confidential-pin-move-copy-download"}
{"level":30,"time":1783877731439,"pid":1880,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783877731440,"pid":1880,"hostname":"NauTcn","msg":"PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali)."}
{"level":30,"time":1783877732813,"pid":1880,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783877736948,"pid":1880,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783877737422,"pid":1880,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v10-confidential-pin-move-copy-download)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` 🔐* • `move <src> <dst>` 🔐* • `delete <path>` • `purge <path> <pin>` 🔐 • `info <path>` • `preview <path>` 🔐* • `download "}
{"level":30,"time":1783877748086,"pid":1880,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783877748530,"pid":1880,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/** — 7 folder, 0 file: 1. 📁 D/ 2. 📁 Documents/ 🔒 3. 📁 Downloads/ 4. 📁 ibisPaint/ 5. 📁 Music/ 6. 📁 Pictures/ 7. 📁 SD/"}
{"level":30,"time":1783877764950,"pid":1880,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :2"}
{"level":30,"time":1783877765406,"pid":1880,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd :2\": 📂 Pindah ke folder: `/Documents`"}
{"level":30,"time":1783877768148,"pid":1880,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: lost"}
{"level":30,"time":1783877768562,"pid":1880,"hostname":"NauTcn","msg":"Balasan bot untuk \"lost\": Command tidak dikenali: \"lost\". Ketik \"help\" untuk daftar command."}
{"level":30,"time":1783877772812,"pid":1880,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783877773309,"pid":1880,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/Documents** — 6 folder, 2 file: 1. 📁 Adobe/ 🔒 2. 📁 AYAH/ 🔒 3. 📁 Corel Cloud/ 🔒 4. 📁 Corel/ 🔒 5. 📁 Image-Line/ 🔒 6. 📁 Nausort Media/ 🔒 7. 📄 Nilai Rata-Rata Semester 1 - 5.xlsx 🔒 8. 📄 Rata Rata Nilai Semester.xlsx 🔒"}
{"level":30,"time":1783877871176,"pid":1880,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: preview :7 mJYE8ncX"}
{"level":50,"time":1783877871213,"pid":1880,"hostname":"NauTcn","err":{"type":"Error","message":"❌ PIN salah. (percobaan ke-1 dari 5 sebelum lockout)","stack":"Error: ❌ PIN salah. (percobaan ke-1 dari 5 sebelum lockout)\n    at verifyPin (file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/pinStore.js:244:11)\n    at verifyAndRotatePin (file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/pinStore.js:272:3)\n    at requirePin (file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/commands.js:37:9)\n    at runPreview (file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/commands.js:539:11)\n    at handleCommand (file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/commands.js:973:16)\n    at Client.<anonymous> (file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/index.js:67:25)\n    at Client.emit (node:events:509:28)\n    at MessageCreateAction.handle (D:\\Project\\Coding\\Nausync Engine\\Nausync Cloud\\node_modules\\discord.js\\src\\client\\actions\\MessageCreate.js:33:14)\n    at module.exports [as MESSAGE_CREATE] (D:\\Project\\Coding\\Nausync Engine\\Nausync Cloud\\node_modules\\discord.js\\src\\client\\websocket\\handlers\\MESSAGE_CREATE.js:4:32)\n    at WebSocketManager.handlePacket (D:\\Project\\Coding\\Nausync Engine\\Nausync Cloud\\node_modules\\discord.js\\src\\client\\websocket\\WebSocketManager.js:352:31)"},"msg":"Gagal memproses command \"preview :7 mJYE8ncX\""}
{"level":30,"time":1783877891660,"pid":1880,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :7 mJYE8ncX"}
{"level":50,"time":1783877891696,"pid":1880,"hostname":"NauTcn","err":{"type":"Error","message":"❌ PIN salah. (percobaan ke-2 dari 5 sebelum lockout)","stack":"Error: ❌ PIN salah. (percobaan ke-2 dari 5 sebelum lockout)\n    at verifyPin (file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/pinStore.js:244:11)\n    at verifyAndRotatePin (file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/pinStore.js:272:3)\n    at requirePin (file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/commands.js:37:9)\n    at runPreview (file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/commands.js:539:11)\n    at handleCommand (file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/commands.js:611:18)\n    at Client.<anonymous> (file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/index.js:67:25)\n    at Client.emit (node:events:509:28)\n    at MessageCreateAction.handle (D:\\Project\\Coding\\Nausync Engine\\Nausync Cloud\\node_modules\\discord.js\\src\\client\\actions\\MessageCreate.js:33:14)\n    at module.exports [as MESSAGE_CREATE] (D:\\Project\\Coding\\Nausync Engine\\Nausync Cloud\\node_modules\\discord.js\\src\\client\\websocket\\handlers\\MESSAGE_CREATE.js:4:32)\n    at WebSocketManager.handlePacket (D:\\Project\\Coding\\Nausync Engine\\Nausync Cloud\\node_modules\\discord.js\\src\\client\\websocket\\WebSocketManager.js:352:31)"},"msg":"Gagal memproses command \"cd :7 mJYE8ncX\""}
{"level":30,"time":1783878086222,"pid":13556,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:13556) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783878086224,"pid":13556,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v10-confidential-pin-move-copy-download"}
{"level":30,"time":1783878087298,"pid":13556,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783878087300,"pid":13556,"hostname":"NauTcn","msg":"PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali)."}
{"level":30,"time":1783878088796,"pid":13556,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783878097070,"pid":13556,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783878097586,"pid":13556,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v10-confidential-pin-move-copy-download)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` 🔐* • `move <src> <dst>` 🔐* • `delete <path>` • `purge <path> <pin>` 🔐 • `info <path>` • `preview <path>` 🔐* • `download "}
{"level":30,"time":1783878100208,"pid":13556,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783878101023,"pid":13556,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/** — 7 folder, 0 file: 1. 📁 D/ 2. 📁 Documents/ 🔒 3. 📁 Downloads/ 4. 📁 ibisPaint/ 5. 📁 Music/ 6. 📁 Pictures/ 7. 📁 SD/"}
{"level":30,"time":1783878107956,"pid":13556,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :2"}
{"level":30,"time":1783878108439,"pid":13556,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd :2\": 📂 Pindah ke folder: `/Documents`"}
{"level":30,"time":1783878111048,"pid":13556,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783878111487,"pid":13556,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/Documents** — 6 folder, 2 file: 1. 📁 Adobe/ 🔒 2. 📁 AYAH/ 🔒 3. 📁 Corel Cloud/ 🔒 4. 📁 Corel/ 🔒 5. 📁 Image-Line/ 🔒 6. 📁 Nausort Media/ 🔒 7. 📄 Nilai Rata-Rata Semester 1 - 5.xlsx 🔒 8. 📄 Rata Rata Nilai Semester.xlsx 🔒"}
{"level":30,"time":1783878174310,"pid":13556,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: preview :7 a23dZ3eP"}
{"level":30,"time":1783878175297,"pid":13556,"hostname":"NauTcn","msg":"Balasan bot untuk \"preview :7 a23dZ3eP\": (null / sudah dikirim manual)"}
{"level":30,"time":1783878261592,"pid":13556,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :7 yJuRLZt8"}
{"level":30,"time":1783878262452,"pid":13556,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd :7 yJuRLZt8\": (null / sudah dikirim manual)"}
{"level":30,"time":1783878334856,"pid":13556,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: clear"}
{"level":30,"time":1783878336063,"pid":13556,"hostname":"NauTcn","msg":"Balasan bot untuk \"clear\": 🧹 **Selesai!** 2 pesan preview berhasil dihapus."}
{"level":30,"time":1783878629238,"pid":17404,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:17404) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783878629239,"pid":17404,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v10-confidential-pin-move-copy-download"}
{"level":30,"time":1783878630229,"pid":17404,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783878630232,"pid":17404,"hostname":"NauTcn","msg":"PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali)."}
{"level":30,"time":1783878631371,"pid":17404,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783878634726,"pid":17404,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783878635114,"pid":17404,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v10-confidential-pin-move-copy-download)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` 🔐* • `move <src> <dst>` 🔐* • `delete <path>` • `purge <path> <pin>` 🔐 • `info <path>` • `preview <path>` 🔐* • `download "}
{"level":30,"time":1783878642354,"pid":17404,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783878643350,"pid":17404,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/** — 7 folder, 0 file: 1. 📁 D/ 2. 📁 Documents/ 🔒 3. 📁 Downloads/ 4. 📁 ibisPaint/ 5. 📁 Music/ 6. 📁 Pictures/ 7. 📁 SD/"}
{"level":30,"time":1783878716085,"pid":17404,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Music"}
{"level":30,"time":1783878716562,"pid":17404,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Music\": 📂 Pindah ke folder: `/Music`"}
{"level":30,"time":1783878720554,"pid":17404,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783878721084,"pid":17404,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": Folder `/Music` kosong."}
{"level":30,"time":1783878726638,"pid":17404,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: root"}
{"level":30,"time":1783878727216,"pid":17404,"hostname":"NauTcn","msg":"Balasan bot untuk \"root\": 📂 Pindah ke folder: `/`"}
{"level":30,"time":1783878730854,"pid":17404,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783878731601,"pid":17404,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd D\": 📂 Pindah ke folder: `/D`"}
{"level":30,"time":1783878736803,"pid":17404,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Kenangan"}
{"level":30,"time":1783878737235,"pid":17404,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Kenangan\": 📂 Pindah ke folder: `/D/Kenangan`"}
{"level":30,"time":1783878738678,"pid":17404,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783878739109,"pid":17404,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Kenangan** — 14 folder, 0 file: 1. 📁 dcim/ 2. 📁 Fotage Seni Fotografi & Editing/ 3. 📁 Foto Diri/ 4. 📁 Foto Formal Bunda/ 5. 📁 Kenagan PKL Instansi Radio Republik Indonesia/ 6. 📁 Kenangan Game/ 7. 📁 Kenangan Keluarga/ 8. 📁 Kenangan PKL Yayasan Manuprojectpro Indonesia Medan/ 9. 📁 Ken"}
{"level":30,"time":1783878756604,"pid":17404,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :3"}
{"level":30,"time":1783878757206,"pid":17404,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd :3\": 📂 Pindah ke folder: `/D/Kenangan/Foto Diri`"}
{"level":30,"time":1783878762366,"pid":17404,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783878762887,"pid":17404,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": (null / sudah dikirim manual)"}
{"level":30,"time":1783878784861,"pid":17404,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783878785353,"pid":17404,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd ..\": 📂 Pindah ke folder: `/D/Kenangan`"}
{"level":30,"time":1783878796444,"pid":17404,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: info \"Foto Diri\""}
{"level":30,"time":1783878797199,"pid":17404,"hostname":"NauTcn","msg":"Balasan bot untuk \"info \"Foto Diri\"\": 📁 **/D/Kenangan/Foto Diri** • Tipe: Folder • Ukuran: **964.75 MB** • Isi: 202 item • Terakhir diubah: 7 Jul 2026, 22.05"}
{"level":30,"time":1783878808674,"pid":17404,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783878809220,"pid":17404,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v10-confidential-pin-move-copy-download)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` 🔐* • `move <src> <dst>` 🔐* • `delete <path>` • `purge <path> <pin>` 🔐 • `info <path>` • `preview <path>` 🔐* • `download "}
{"level":30,"time":1783878838241,"pid":17404,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: root"}
{"level":30,"time":1783878838764,"pid":17404,"hostname":"NauTcn","msg":"Balasan bot untuk \"root\": 📂 Pindah ke folder: `/`"}
{"level":30,"time":1783878840857,"pid":17404,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783878841285,"pid":17404,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd D\": 📂 Pindah ke folder: `/D`"}
{"level":30,"time":1783878847051,"pid":17404,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Kenangan"}
{"level":30,"time":1783878847536,"pid":17404,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Kenangan\": 📂 Pindah ke folder: `/D/Kenangan`"}
{"level":30,"time":1783878848751,"pid":17404,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783878849160,"pid":17404,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Kenangan** — 14 folder, 0 file: 1. 📁 dcim/ 2. 📁 Fotage Seni Fotografi & Editing/ 3. 📁 Foto Diri/ 4. 📁 Foto Formal Bunda/ 5. 📁 Kenagan PKL Instansi Radio Republik Indonesia/ 6. 📁 Kenangan Game/ 7. 📁 Kenangan Keluarga/ 8. 📁 Kenangan PKL Yayasan Manuprojectpro Indonesia Medan/ 9. 📁 Ken"}
{"level":30,"time":1783878864992,"pid":17404,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: info :2"}
{"level":30,"time":1783878865485,"pid":17404,"hostname":"NauTcn","msg":"Balasan bot untuk \"info :2\": 📁 **/D/Kenangan/Fotage Seni Fotografi & Editing** • Tipe: Folder • Ukuran: **407.85 MB** • Isi: 54 item • Terakhir diubah: 14 Jun 2026, 20.30"}
{"level":30,"time":1783878882837,"pid":17404,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: archive :2 yJuRLZt8"}
{"level":30,"time":1783878883333,"pid":17404,"hostname":"NauTcn","msg":"Balasan bot untuk \"archive :2 yJuRLZt8\": Gagal: ❌ PIN salah. (percobaan ke-1 dari 5 sebelum lockout)"}
{"level":30,"time":1783878918366,"pid":17404,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: archive :2 nBMM3Pay"}
{"level":30,"time":1783878919411,"pid":17404,"hostname":"NauTcn","msg":"Balasan bot untuk \"archive :2 nBMM3Pay\": (null / sudah dikirim manual)"}
file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/fsops.js:36
  throw new Error(
        ^

Error: Package "archiver" tidak bisa dipakai (bukan fungsi setelah di-require, kemungkinan belum terinstall dengan benar atau ada masalah versi). Coba jalankan: "npm ls archiver" untuk cek instalasinya, atau hapus node_modules & package-lock.json lalu "npm install" ulang.
    at file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/fsops.js:36:9
    at ModuleJob.run (node:internal/modules/esm/module_job:439:25)
    at async node:internal/modules/esm/loader:633:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)

Node.js v24.16.0
file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/fsops.js:36
  throw new Error(
        ^

Error: Package "archiver" tidak bisa dipakai (bukan fungsi setelah di-require, kemungkinan belum terinstall dengan benar atau ada masalah versi). Coba jalankan: "npm ls archiver" untuk cek instalasinya, atau hapus node_modules & package-lock.json lalu "npm install" ulang.
    at file:///D:/Project/Coding/Nausync%20Engine/Nausync%20Cloud/src/fsops.js:36:9
    at ModuleJob.run (node:internal/modules/esm/module_job:439:25)
    at async node:internal/modules/esm/loader:633:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)

Node.js v24.16.0
{"level":30,"time":1783879548623,"pid":4448,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:4448) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783879548623,"pid":4448,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v10-confidential-pin-move-copy-download"}
{"level":30,"time":1783879549859,"pid":4448,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783879549861,"pid":4448,"hostname":"NauTcn","msg":"PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali)."}
{"level":30,"time":1783879550962,"pid":4448,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783879570545,"pid":4448,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783879571247,"pid":4448,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v10-confidential-pin-move-copy-download)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` 🔐* • `move <src> <dst>` 🔐* • `delete <path>` • `purge <path> <pin>` 🔐 • `info <path>` • `preview <path>` 🔐* • `download "}
{"level":30,"time":1783879621464,"pid":4448,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783879621891,"pid":4448,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd D\": 📂 Pindah ke folder: `/D`"}
{"level":30,"time":1783879627574,"pid":4448,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Txt"}
{"level":30,"time":1783879628051,"pid":4448,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Txt\": ❌ Gagal pindah folder: ENOENT: no such file or directory, scandir 'D:\\Txt'"}
{"level":30,"time":1783879636648,"pid":4448,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Kenangan"}
{"level":30,"time":1783879637215,"pid":4448,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Kenangan\": 📂 Pindah ke folder: `/D/Kenangan`"}
{"level":30,"time":1783879643611,"pid":4448,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783879644085,"pid":4448,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Kenangan** — 14 folder, 0 file: 1. 📁 dcim/ 2. 📁 Fotage Seni Fotografi & Editing/ 3. 📁 Foto Diri/ 4. 📁 Foto Formal Bunda/ 5. 📁 Kenagan PKL Instansi Radio Republik Indonesia/ 6. 📁 Kenangan Game/ 7. 📁 Kenangan Keluarga/ 8. 📁 Kenangan PKL Yayasan Manuprojectpro Indonesia Medan/ 9. 📁 Ken"}
{"level":30,"time":1783879646983,"pid":4448,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd :2"}
{"level":30,"time":1783879647540,"pid":4448,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd :2\": 📂 Pindah ke folder: `/D/Kenangan/Fotage Seni Fotografi & Editing`"}
{"level":30,"time":1783879652344,"pid":4448,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783879652751,"pid":4448,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd ..\": 📂 Pindah ke folder: `/D/Kenangan`"}
{"level":30,"time":1783879656526,"pid":4448,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: info :2"}
{"level":30,"time":1783879656958,"pid":4448,"hostname":"NauTcn","msg":"Balasan bot untuk \"info :2\": 📁 **/D/Kenangan/Fotage Seni Fotografi & Editing** • Tipe: Folder • Ukuran: **407.85 MB** • Isi: 54 item • Terakhir diubah: 14 Jun 2026, 20.30"}
{"level":30,"time":1783879670446,"pid":4448,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: archive :2 U6Db3EUP"}
{"level":30,"time":1783879671572,"pid":4448,"hostname":"NauTcn","msg":"Balasan bot untuk \"archive :2 U6Db3EUP\": (null / sudah dikirim manual)"}
{"level":30,"time":1783880128747,"pid":15484,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:15484) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783880128747,"pid":15484,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v10-confidential-pin-move-copy-download"}
{"level":30,"time":1783880129829,"pid":15484,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783880129830,"pid":15484,"hostname":"NauTcn","msg":"PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali)."}
{"level":30,"time":1783880130960,"pid":15484,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783880139616,"pid":15484,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783880140114,"pid":15484,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v10-confidential-pin-move-copy-download)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` 🔐* • `move <src> <dst>` 🔐* • `delete <path>` • `purge <path> <pin>` 🔐 • `info <path>` • `preview <path>` 🔐* • `download "}
{"level":30,"time":1783880161565,"pid":15484,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783880162078,"pid":15484,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd D\": 📂 Pindah ke folder: `/D`"}
{"level":30,"time":1783880164318,"pid":15484,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Kenangan"}
{"level":30,"time":1783880164814,"pid":15484,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Kenangan\": 📂 Pindah ke folder: `/D/Kenangan`"}
{"level":30,"time":1783880167157,"pid":15484,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783880167678,"pid":15484,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Kenangan** — 14 folder, 0 file: 1. 📁 dcim/ 2. 📁 Fotage Seni Fotografi & Editing/ 3. 📁 Foto Diri/ 4. 📁 Foto Formal Bunda/ 5. 📁 Kenagan PKL Instansi Radio Republik Indonesia/ 6. 📁 Kenangan Game/ 7. 📁 Kenangan Keluarga/ 8. 📁 Kenangan PKL Yayasan Manuprojectpro Indonesia Medan/ 9. 📁 Ken"}
{"level":30,"time":1783880217327,"pid":15484,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: archive :2 Ty9D6cZA"}
{"level":30,"time":1783880443547,"pid":15484,"hostname":"NauTcn","msg":"Balasan bot untuk \"archive :2 Ty9D6cZA\": Proses transfer selesai."}
{"level":30,"time":1783880793329,"pid":15484,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783880793864,"pid":15484,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v10-confidential-pin-move-copy-download)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` 🔐* • `move <src> <dst>` 🔐* • `delete <path>` • `purge <path> <pin>` 🔐 • `info <path>` • `preview <path>` 🔐* • `download "}
{"level":30,"time":1783880796726,"pid":15484,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783880798043,"pid":15484,"hostname":"NauTcn","msg":"Balasan bot untuk \"baterai\": 🔋 **Status Baterai Laptop** • Persentase: **100%** • 🔌 Tidak di-cas _(AC tersambung)_ • Mode Power: 🖥️ Mode Server (layar/sleep tidak pernah mati)"}
{"level":30,"time":1783880804299,"pid":15484,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: mode"}
{"level":30,"time":1783880804754,"pid":15484,"hostname":"NauTcn","msg":"Balasan bot untuk \"mode\": Format: `mode <server/hemat>`"}
{"level":30,"time":1783880810262,"pid":15484,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: mode hemat"}
{"level":30,"time":1783880811453,"pid":15484,"hostname":"NauTcn","msg":"Balasan bot untuk \"mode hemat\": 🔋 **Laptop beralih ke Mode Hemat (Default)!** • Status Sleep: **15 Menit** • Status Hibernate: **3 Jam** Laptop akan otomatis tidur jika didiamkan sesuai setingan harian Anda."}
{"level":30,"time":1783880835012,"pid":15484,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: shutdown Ty9D6cZA"}
{"level":30,"time":1783880835797,"pid":15484,"hostname":"NauTcn","msg":"Balasan bot untuk \"shutdown Ty9D6cZA\": Gagal: ❌ PIN salah. (percobaan ke-1 dari 5 sebelum lockout)"}
{"level":30,"time":1783880854862,"pid":15484,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: shutdown X3m49jDG"}
{"level":30,"time":1783880855460,"pid":15484,"hostname":"NauTcn","msg":"Balasan bot untuk \"shutdown X3m49jDG\": 🔌 **Perintah Diterima!** Laptop Anda di rumah akan otomatis dimatikan dalam waktu 15 detik ke depan. Koneksi bot segera terputus."}
{"level":30,"time":1783914628457,"pid":6392,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:6392) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783914628458,"pid":6392,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v10-confidential-pin-move-copy-download"}
{"level":30,"time":1783914630837,"pid":6392,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783914630840,"pid":6392,"hostname":"NauTcn","msg":"PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali)."}
{"level":30,"time":1783914632853,"pid":6392,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783915755976,"pid":6024,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:6024) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783915755977,"pid":6024,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v11-delete-pin-cancel-exec-fix-overwrite-guard"}
{"level":30,"time":1783915768264,"pid":6024,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783915768267,"pid":6024,"hostname":"NauTcn","msg":"PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali)."}
{"level":30,"time":1783915768285,"pid":6024,"hostname":"NauTcn","msg":"Auto-purge trash: 1 item dihapus permanen (retensi 30 hari terlewati)."}
{"level":30,"time":1783915769550,"pid":6024,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783915780416,"pid":6024,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783915780916,"pid":6024,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v11-delete-pin-cancel-exec-fix-overwrite-guard)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` 🔐* • `move <src> <dst>` 🔐* • `delete <path>` 🔐* • `purge <path> <pin>` 🔐 • `info <path>` • `preview <path>` 🔐* •"}
{"level":30,"time":1783916196145,"pid":8936,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:8936) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783916196145,"pid":8936,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v12-network-status"}
{"level":30,"time":1783916197309,"pid":8936,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783916197315,"pid":8936,"hostname":"NauTcn","msg":"PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali)."}
{"level":30,"time":1783916198545,"pid":8936,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783916209759,"pid":8936,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783916210358,"pid":8936,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v12-network-status)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` 🔐* • `move <src> <dst>` 🔐* • `delete <path>` 🔐* • `purge <path> <pin>` 🔐 • `info <path>` • `preview <path>` 🔐* • `download <path>` 🔐* • `ar"}
{"level":30,"time":1783916215101,"pid":8936,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: ?network"}
{"level":30,"time":1783916215643,"pid":8936,"hostname":"NauTcn","msg":"Balasan bot untuk \"?network\": **network** — cek status koneksi jaringan laptop Nampilin SEMUA koneksi jaringan yang lagi aktif (bisa lebih dari satu sekaligus, mis. Wi-Fi DAN Ethernet bersamaan): tipe (📶 Wi-Fi / 🔌 LAN), nama jaringan/SSID, kategori jaringan (🔒 Privat / 🌍 Publik / 🏢 Domain — penting buat tahu apakah laptop \""}
{"level":30,"time":1783916237776,"pid":8936,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: network"}
{"level":30,"time":1783916248422,"pid":8936,"hostname":"NauTcn","msg":"Balasan bot untuk \"network\": **🌐 Status Jaringan Laptop**  🔌 LAN (Ethernet) — **TISU** • Interface: `Ethernet 2` (Up) • Kategori jaringan: 🔒 **Privat** — laptop ini bisa \"ditemukan\" perangkat lain di jaringan yang sama (cocok untuk Wi-Fi/LAN rumah sendiri yang dipercaya, TAPI berisiko kalau ternyata dipakai di jaringan publi"}
{"level":30,"time":1783916506328,"pid":4120,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:4120) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783916506329,"pid":4120,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v12-network-status"}
{"level":30,"time":1783916507474,"pid":4120,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783916507477,"pid":4120,"hostname":"NauTcn","msg":"PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali)."}
{"level":30,"time":1783916508687,"pid":4120,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783916599621,"pid":4120,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783916600134,"pid":4120,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v12-network-status)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` 🔐* • `move <src> <dst>` 🔐* • `delete <path>` 🔐* • `purge <path> <pin>` 🔐 • `info <path>` • `preview <path>` 🔐* • `download <path>` 🔐* • `ar"}
{"level":30,"time":1783916603796,"pid":4120,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: network"}
{"level":30,"time":1783916609346,"pid":4120,"hostname":"NauTcn","msg":"Balasan bot untuk \"network\": **🌐 Status Jaringan Laptop**  🔌 LAN (Ethernet) — **TISU** • Kategori jaringan: 🔒 **Privat** — laptop ini bisa \"ditemukan\" perangkat lain di jaringan yang sama (cocok untuk Wi-Fi/LAN rumah sendiri yang dipercaya, TAPI berisiko kalau ternyata dipakai di jaringan publik) • Status: ✅ Terhubung ke Int"}
{"level":30,"time":1783916622724,"pid":4120,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: network detail"}
{"level":30,"time":1783916628166,"pid":4120,"hostname":"NauTcn","msg":"Balasan bot untuk \"network detail\": **🌐 Status Jaringan Laptop**  🔌 LAN (Ethernet) — **TISU** • Kategori jaringan: 🔒 **Privat** — laptop ini bisa \"ditemukan\" perangkat lain di jaringan yang sama (cocok untuk Wi-Fi/LAN rumah sendiri yang dipercaya, TAPI berisiko kalau ternyata dipakai di jaringan publik) • Status: ✅ Terhubung ke Int"}
{"level":30,"time":1783916967535,"pid":14116,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:14116) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783916967536,"pid":14116,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v12-network-status"}
{"level":30,"time":1783916968720,"pid":14116,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783916968723,"pid":14116,"hostname":"NauTcn","msg":"PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali)."}
{"level":30,"time":1783916969913,"pid":14116,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783916978353,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783916978938,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v12-network-status)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` 🔐* • `move <src> <dst>` 🔐* • `delete <path>` 🔐* • `purge <path> <pin>` 🔐 • `info <path>` • `preview <path>` 🔐* • `download <path>` 🔐* • `ar"}
{"level":30,"time":1783916984335,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: network"}
{"level":30,"time":1783916989724,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"network\": **🌐 Status Jaringan Laptop**  🔌 LAN (Ethernet) — **TISU** • Kategori jaringan: 🔒 **Privat** — laptop ini bisa \"ditemukan\" perangkat lain di jaringan yang sama (cocok untuk Wi-Fi/LAN rumah sendiri yang dipercaya, TAPI berisiko kalau ternyata dipakai di jaringan publik) • Status: ✅ Terhubung ke Int"}
{"level":30,"time":1783917656857,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: mode server"}
{"level":30,"time":1783917658618,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"mode server\": 🖥️ **Laptop beralih ke Mode Server!** • Status Sleep: **Never** • Status Hibernate: **Never** ✅ Terverifikasi: standby timeout = Never Laptop Anda akan tetap terjaga selamanya untuk memproses unggahan besar Anda."}
{"level":30,"time":1783919725144,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783919726418,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"baterai\": 🔋 **Status Baterai Laptop** • Persentase: **82%** • 🔌 Tidak di-cas _(Discharging)_ • Mode Power: 🖥️ Mode Server (layar/sleep tidak pernah mati)"}
{"level":30,"time":1783919748589,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783919749421,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"baterai\": 🔋 **Status Baterai Laptop** • Persentase: **82%** • 🔌 Tidak di-cas _(AC tersambung)_ • Mode Power: 🖥️ Mode Server (layar/sleep tidak pernah mati)"}
{"level":30,"time":1783919755763,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783919756780,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"baterai\": 🔋 **Status Baterai Laptop** • Persentase: **82%** • 🔌 Tidak di-cas _(AC tersambung)_ • Mode Power: 🖥️ Mode Server (layar/sleep tidak pernah mati)"}
{"level":30,"time":1783924691520,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: help"}
{"level":30,"time":1783924692237,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"help\": **📦 Nausync Cloud** `(cmds-v12-network-status)`  **Navigasi** • `cd <folder>` • `cd ..` • `root` • `pwd` • `list [folder]`  **File** • `copy <src> <dst>` 🔐* • `move <src> <dst>` 🔐* • `delete <path>` 🔐* • `purge <path> <pin>` 🔐 • `info <path>` • `preview <path>` 🔐* • `download <path>` 🔐* • `ar"}
{"level":30,"time":1783924710791,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783924711292,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd D\": 📂 Pindah ke folder: `/D`"}
{"level":30,"time":1783924715365,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Project"}
{"level":30,"time":1783924715850,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Project\": 📂 Pindah ke folder: `/D/Project`"}
{"level":30,"time":1783924730673,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Txt"}
{"level":30,"time":1783924731329,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Txt\": 📂 Pindah ke folder: `/D/Project/Txt`"}
{"level":30,"time":1783924732821,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783924733270,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Project/Txt** — 0 folder, 3 file: 1. 📄 Anime List.txt 🔒 2. 📄 script web scraper.txt 🔒 3. 📄 Semua Email Staff Manuproject.txt 🔒"}
{"level":30,"time":1783924752546,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: ?copy"}
{"level":30,"time":1783924753099,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"?copy\": **copy** — copy file/folder `copy <src> <dst>` — src & dst boleh nama folder/file biasa, path lengkap (`/Documents/x`), atau nomor dari `list` terakhir (`:3`). Folder di-copy beserta isinya (recursive). File asal tidak terhapus. 🔒 Wajib tambah PIN di argumen terakhir (`copy <src> <dst> <pin>`) kala"}
{"level":30,"time":1783924835980,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: copy :3 D/Project"}
{"level":30,"time":1783924836490,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"copy :3 D/Project\": 🔒 **Data ini bersifat RAHASIA.** `/D/Project/Txt/Semua Email Staff Manuproject.txt` butuh PIN keamanan buat di-copy. Format: `copy :3 D/Project <pin>`"}
{"level":30,"time":1783924907274,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: copy :3 D/Project d26Tb9tB"}
{"level":30,"time":1783924907912,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"copy :3 D/Project d26Tb9tB\": ✅ Copy berhasil ke `/D/Project/Txt/D/Project`"}
{"level":30,"time":1783924918547,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783924919379,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd ..\": 📂 Pindah ke folder: `/D/Project`"}
{"level":30,"time":1783924920805,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783924921377,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Project** — 15 folder, 0 file: 1. 📁 3D Blender/ 2. 📁 Coding/ 3. 📁 Data Siswa/ 🔒 4. 📁 Design/ 5. 📁 Editing/ 6. 📁 Game Dev/ 7. 📁 Logo/ 8. 📁 Motion Graphic ( Animasi )/ 9. 📁 Ms Excel/ 10. 📁 Ms Power Point/ 🔒 11. 📁 Ms Word/ 🔒 12. 📁 OBS/ 13. 📁 Pdf/ 🔒 14. 📁 Surat Penting/ 🔒 15. "}
{"level":30,"time":1783924971812,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Txt"}
{"level":30,"time":1783924972313,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Txt\": 📂 Pindah ke folder: `/D/Project/Txt`"}
{"level":30,"time":1783924975279,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783924975744,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Project/Txt** — 1 folder, 3 file: 1. 📁 D/ 🔒 2. 📄 Anime List.txt 🔒 3. 📄 script web scraper.txt 🔒 4. 📄 Semua Email Staff Manuproject.txt 🔒"}
{"level":30,"time":1783924991318,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: info D"}
{"level":30,"time":1783924991833,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"info D\": 📁 **/D/Project/Txt/D** • Tipe: Folder • Ukuran: **251 Bytes** • Isi: 1 item • Terakhir diubah: 13 Jul 2026, 13.41"}
{"level":30,"time":1783925005418,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd D"}
{"level":30,"time":1783925005956,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd D\": 📂 Pindah ke folder: `/D/Project/Txt/D`"}
{"level":30,"time":1783925009085,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783925009487,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Project/Txt/D** — 0 folder, 1 file: 1. 📄 Project 🔒"}
{"level":30,"time":1783925044472,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: info Project"}
{"level":30,"time":1783925045026,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"info Project\": 📄 **/D/Project/Txt/D/Project** • Tipe: File • Ukuran: **251 Bytes** • Terakhir diubah: 9 Jul 2026, 10.34"}
{"level":30,"time":1783925072959,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd Project vs2Ly6Gv"}
{"level":30,"time":1783925074184,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd Project vs2Ly6Gv\": (null / sudah dikirim manual)"}
{"level":30,"time":1783925125592,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: cd .."}
{"level":30,"time":1783925126356,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"cd ..\": 📂 Pindah ke folder: `/D/Project/Txt`"}
{"level":30,"time":1783925138629,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: list"}
{"level":30,"time":1783925139962,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"list\": 📂 **/D/Project/Txt** — 1 folder, 3 file: 1. 📁 D/ 🔒 2. 📄 Anime List.txt 🔒 3. 📄 script web scraper.txt 🔒 4. 📄 Semua Email Staff Manuproject.txt 🔒"}
{"level":30,"time":1783925145808,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: info D"}
{"level":30,"time":1783925146286,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"info D\": 📁 **/D/Project/Txt/D** • Tipe: Folder • Ukuran: **251 Bytes** • Isi: 1 item • Terakhir diubah: 13 Jul 2026, 13.41"}
{"level":30,"time":1783925169283,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: delete D y8Mnpn3X"}
{"level":30,"time":1783925169870,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"delete D y8Mnpn3X\": 🗑️ Dipindah ke trash: `/D/Project/Txt/D` (belum permanen — pakai `purge` kalau mau hapus beneran, atau otomatis kehapus permanen setelah 30 hari)"}
{"level":30,"time":1783931780109,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783931781821,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"baterai\": 🔋 **Status Baterai Laptop** • Persentase: **95%** • 🔌 Tidak di-cas _(AC tersambung)_ • Mode Power: 🖥️ Mode Server (layar/sleep tidak pernah mati)"}
{"level":30,"time":1783931784250,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: mode server"}
{"level":30,"time":1783931785341,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"mode server\": 🖥️ **Laptop beralih ke Mode Server!** • Status Sleep: **Never** • Status Hibernate: **Never** ✅ Terverifikasi: standby timeout = Never Laptop Anda akan tetap terjaga selamanya untuk memproses unggahan besar Anda."}
{"level":30,"time":1783952892897,"pid":14116,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783952895138,"pid":14116,"hostname":"NauTcn","msg":"Balasan bot untuk \"baterai\": 🔋 **Status Baterai Laptop** • Persentase: **100%** • 🔌 Tidak di-cas _(AC tersambung)_ • Mode Power: 🖥️ Mode Server (layar/sleep tidak pernah mati)"}
{"level":30,"time":1783985610648,"pid":16776,"hostname":"NauTcn","msg":"Bot Nausync Cloud sukses terhubung ke Discord sebagai: Nausync Cloud TCN#2669"}
(node:16776) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{"level":30,"time":1783985610648,"pid":16776,"hostname":"NauTcn","msg":"Kode command yang aktif: cmds-v12-network-status"}
{"level":30,"time":1783985614836,"pid":16776,"hostname":"NauTcn","msg":"rclone OK, remote Google Drive terhubung."}
{"level":30,"time":1783985614838,"pid":16776,"hostname":"NauTcn","msg":"PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali)."}
{"level":30,"time":1783985616078,"pid":16776,"hostname":"NauTcn","msg":"Notifikasi startup sukses dikirim ke DM owner."}
{"level":30,"time":1783986306575,"pid":16776,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: mode server"}
{"level":30,"time":1783986308268,"pid":16776,"hostname":"NauTcn","msg":"Balasan bot untuk \"mode server\": 🖥️ **Laptop beralih ke Mode Server!** • Status Sleep: **Never** • Status Hibernate: **Never** ✅ Terverifikasi: standby timeout = Never Laptop Anda akan tetap terjaga selamanya untuk memproses unggahan besar Anda."}
{"level":30,"time":1783986310238,"pid":16776,"hostname":"NauTcn","msg":"Command diterima dari owner via Discord: baterai"}
{"level":30,"time":1783986312403,"pid":16776,"hostname":"NauTcn","msg":"Balasan bot untuk \"baterai\": 🔋 **Status Baterai Laptop** • Persentase: **97%** • 🔌 Tidak di-cas _(Discharging)_ • Mode Power: 🖥️ Mode Server (layar/sleep tidak pernah mati)"}
```

### `example_env.txt`

```
# Token Bot yang didapatkan dari Discord Developer Portal

DISCORD_TOKEN=???

# ID Akun Discord Pribadi Anda

DISCORD_OWNER_ID=???

# Secure Path

SECURE_ENV_PATH=???

# Daftar folder yang boleh diakses bot, format: Nama1=Path1;Nama2=Path2;...
# - "Nama" jadi nama folder virtual level teratas di bot (ketik "list" untuk lihat)
# - Path boleh pakai "/" (lebih aman dari salah ketik backslash di Windows)
# - Boleh mengandung spasi tanpa tanda kutip
# - Ditulis memanjang ke bawah (dibungkus "...") biar gampang nambah/hapus baris,
#   tetap wajib diakhiri ";" di tiap baris (termasuk baris terakhir)

ALLOWED_ROOTS="D=D:/;
ibisPaint=C:/Users/Naufal Khalil/ibisPaint;
Music=C:/Users/Naufal Khalil/Music;
Documents=C:/Users/Naufal Khalil/Documents;
Downloads=C:/Users/Naufal Khalil/Downloads;
Pictures=C:/Users/Naufal Khalil/Pictures;
SD=E:/;
"

# (Opsional) Daftar folder/file yang DILARANG diakses bot, walaupun ada di
# dalam salah satu ALLOWED_ROOTS di atas. Format: Path1;Path2;...
# Berguna buat blokir folder project bot ini sendiri (berisi .env dengan
# token Discord & kredensial lain) supaya tidak bisa dibuka/copy/delete/
# download lewat command bot, meskipun root "D" mencakup seluruh drive D:.

BLOCKED_PATHS="D:/Project/Coding/Nausync Engine;
C:/Users/Naufal Khalil/Documents/Default.rdp;
C:/Users/Naufal Khalil/AppData;
D:/WpSystem;
D:/WindowsApps;
D:/SteamLibrary;
D:/Program Files;
D:/Apps/Git;
D:/XboxGames;
D:/.GamingRoot;
D:/$RECYCLE.BIN;
C:/Users/Naufal Khalil/Documents/PowerShell;
D:/System Volume Information;
D:/DumpStack.log.tmp;
D:/pagefile.sys;
E:/System Volume Information;
C:/Users/Naufal Khalil/Documents/Criterion Games;
C:/Users/Naufal Khalil/Documents/desktop.ini;
C:/Users/Naufal Khalil/Documents/My Music;
C:/Users/Naufal Khalil/Documents/My Pictures;
C:/Users/Naufal Khalil/Documents/My Videos;
C:/Users/Naufal Khalil/Documents/Nausync;
"

# (Opsional) Daftar folder yang boleh KELIHATAN namanya lewat "list" tapi
# WAJIB PIN + kirim email alert kalau mau di-"preview". Beda dengan
# BLOCKED_PATHS yang disembunyikan total dari bot. Format sama seperti
# BLOCKED_PATHS: Path1;Path2;...
CONFIDENTIAL_PATHS="C:/Users/Naufal Khalil/Documents;
D:/Project/Pdf;
D:/Project/Surat Penting;
D:/Project/Txt;
D:/Project/Coding/Nausync Engine;
D:/Project/Data Siswa;
C:/Users/Naufal Khalil/Documents/AYAH;
D:/Project/Ms Power Point;
D:/Project/Ms Word
"

# Nama remote rclone untuk Google Drive
RCLONE_REMOTE=gdrive
RCLONE_STAGING_FOLDER=nausync-staging

# Tambahkan ini di paling bawah untuk melewati validasi error:
OWNER_NUMBER=123
```

### `package-lock.json`

```json
{
  "name": "nausync-cloud",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "nausync-cloud",
      "version": "1.0.0",
      "dependencies": {
        "@hapi/boom": "^10.0.1",
        "@whiskeysockets/baileys": "6.5.0",
        "archiver": "^8.0.0",
        "discord.js": "^14.26.5",
        "dotenv": "^16.4.5",
        "nodemailer": "^9.0.3",
        "pino": "^9.14.0",
        "qrcode-terminal": "^0.12.0"
      }
    },
    "node_modules/@adiwajshing/keyed-db": {
      "version": "0.2.4",
      "resolved": "https://registry.npmjs.org/@adiwajshing/keyed-db/-/keyed-db-0.2.4.tgz",
      "integrity": "sha512-yprSnAtj80/VKuDqRcFFLDYltoNV8tChNwFfIgcf6PGD4sjzWIBgs08pRuTqGH5mk5wgL6PBRSsMCZqtZwzFEw==",
      "license": "MIT"
    },
    "node_modules/@discordjs/builders": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/@discordjs/builders/-/builders-1.14.1.tgz",
      "integrity": "sha512-gSKkhXLqs96TCzk66VZuHHl8z2bQMJFGwrXC0f33ngK+FLNau4hU1PYny3DNJfNdSH+gVMzE85/d5FQ2BpcNwQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@discordjs/formatters": "^0.6.2",
        "@discordjs/util": "^1.2.0",
        "@sapphire/shapeshift": "^4.0.0",
        "discord-api-types": "^0.38.40",
        "fast-deep-equal": "^3.1.3",
        "ts-mixer": "^6.0.4",
        "tslib": "^2.6.3"
      },
      "engines": {
        "node": ">=16.11.0"
      },
      "funding": {
        "url": "https://github.com/discordjs/discord.js?sponsor"
      }
    },
    "node_modules/@discordjs/collection": {
      "version": "1.5.3",
      "resolved": "https://registry.npmjs.org/@discordjs/collection/-/collection-1.5.3.tgz",
      "integrity": "sha512-SVb428OMd3WO1paV3rm6tSjM4wC+Kecaa1EUGX7vc6/fddvw/6lg90z4QtCqm21zvVe92vMMDt9+DkIvjXImQQ==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=16.11.0"
      }
    },
    "node_modules/@discordjs/formatters": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/@discordjs/formatters/-/formatters-0.6.2.tgz",
      "integrity": "sha512-y4UPwWhH6vChKRkGdMB4odasUbHOUwy7KL+OVwF86PvT6QVOwElx+TiI1/6kcmcEe+g5YRXJFiXSXUdabqZOvQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "discord-api-types": "^0.38.33"
      },
      "engines": {
        "node": ">=16.11.0"
      },
      "funding": {
        "url": "https://github.com/discordjs/discord.js?sponsor"
      }
    },
    "node_modules/@discordjs/rest": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/@discordjs/rest/-/rest-2.6.1.tgz",
      "integrity": "sha512-wwQdgjeaoYFiaG+atbqx6aJDpqW7JHAo0HrQkBTbYzM3/PJ3GweQIpgElNcGZ26DCUOXMyawYd0YF7vtr+fZXg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@discordjs/collection": "^2.1.1",
        "@discordjs/util": "^1.2.0",
        "@sapphire/async-queue": "^1.5.3",
        "@sapphire/snowflake": "^3.5.5",
        "@vladfrangu/async_event_emitter": "^2.4.6",
        "discord-api-types": "^0.38.40",
        "magic-bytes.js": "^1.13.0",
        "tslib": "^2.6.3",
        "undici": "6.24.1"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/discordjs/discord.js?sponsor"
      }
    },
    "node_modules/@discordjs/rest/node_modules/@discordjs/collection": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/@discordjs/collection/-/collection-2.1.1.tgz",
      "integrity": "sha512-LiSusze9Tc7qF03sLCujF5iZp7K+vRNEDBZ86FT9aQAv3vxMLihUvKvpsCWiQ2DJq1tVckopKm1rxomgNUc9hg==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/discordjs/discord.js?sponsor"
      }
    },
    "node_modules/@discordjs/rest/node_modules/@sapphire/snowflake": {
      "version": "3.5.5",
      "resolved": "https://registry.npmjs.org/@sapphire/snowflake/-/snowflake-3.5.5.tgz",
      "integrity": "sha512-xzvBr1Q1c4lCe7i6sRnrofxeO1QTP/LKQ6A6qy0iB4x5yfiSfARMEQEghojzTNALDTcv8En04qYNIco9/K9eZQ==",
      "license": "MIT",
      "engines": {
        "node": ">=v14.0.0",
        "npm": ">=7.0.0"
      }
    },
    "node_modules/@discordjs/util": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@discordjs/util/-/util-1.2.0.tgz",
      "integrity": "sha512-3LKP7F2+atl9vJFhaBjn4nOaSWahZ/yWjOvA4e5pnXkt2qyXRCHLxoBQy81GFtLGCq7K9lPm9R517M1U+/90Qg==",
      "license": "Apache-2.0",
      "dependencies": {
        "discord-api-types": "^0.38.33"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/discordjs/discord.js?sponsor"
      }
    },
    "node_modules/@discordjs/ws": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@discordjs/ws/-/ws-1.2.3.tgz",
      "integrity": "sha512-wPlQDxEmlDg5IxhJPuxXr3Vy9AjYq5xCvFWGJyD7w7Np8ZGu+Mc+97LCoEc/+AYCo2IDpKioiH0/c/mj5ZR9Uw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@discordjs/collection": "^2.1.0",
        "@discordjs/rest": "^2.5.1",
        "@discordjs/util": "^1.1.0",
        "@sapphire/async-queue": "^1.5.2",
        "@types/ws": "^8.5.10",
        "@vladfrangu/async_event_emitter": "^2.2.4",
        "discord-api-types": "^0.38.1",
        "tslib": "^2.6.2",
        "ws": "^8.17.0"
      },
      "engines": {
        "node": ">=16.11.0"
      },
      "funding": {
        "url": "https://github.com/discordjs/discord.js?sponsor"
      }
    },
    "node_modules/@discordjs/ws/node_modules/@discordjs/collection": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/@discordjs/collection/-/collection-2.1.1.tgz",
      "integrity": "sha512-LiSusze9Tc7qF03sLCujF5iZp7K+vRNEDBZ86FT9aQAv3vxMLihUvKvpsCWiQ2DJq1tVckopKm1rxomgNUc9hg==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/discordjs/discord.js?sponsor"
      }
    },
    "node_modules/@eshaz/web-worker": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/@eshaz/web-worker/-/web-worker-1.2.2.tgz",
      "integrity": "sha512-WxXiHFmD9u/owrzempiDlBB1ZYqiLnm9s6aPc8AlFQalq2tKmqdmMr9GXOupDgzXtqnBipj8Un0gkIm7Sjf8mw==",
      "license": "Apache-2.0"
    },
    "node_modules/@hapi/boom": {
      "version": "10.0.1",
      "resolved": "https://registry.npmjs.org/@hapi/boom/-/boom-10.0.1.tgz",
      "integrity": "sha512-ERcCZaEjdH3OgSJlyjVk8pHIFeus91CjKP3v+MpgBNp5IvGzP2l/bRiD78nqYcKPaZdbKkK5vDBVPd2ohHBlsA==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "@hapi/hoek": "^11.0.2"
      }
    },
    "node_modules/@hapi/hoek": {
      "version": "11.0.7",
      "resolved": "https://registry.npmjs.org/@hapi/hoek/-/hoek-11.0.7.tgz",
      "integrity": "sha512-HV5undWkKzcB4RZUusqOpcgxOaq6VOAH7zhhIr2g3G8NF/MlFO75SjOr2NfuSx0Mh40+1FqCkagKLJRykUWoFQ==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@pinojs/redact": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@pinojs/redact/-/redact-0.4.0.tgz",
      "integrity": "sha512-k2ENnmBugE/rzQfEcdWHcCY+/FM3VLzH9cYEsbdsoqrvzAKRhUZeRNhAZvB8OitQJ1TBed3yqWtdjzS6wJKBwg==",
      "license": "MIT"
    },
    "node_modules/@protobufjs/aspromise": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/aspromise/-/aspromise-1.1.2.tgz",
      "integrity": "sha512-j+gKExEuLmKwvz3OgROXtrJ2UG2x8Ch2YZUxahh+s1F2HZ+wAceUNLkvy6zKCPVRkU++ZWQrdxsUeQXmcg4uoQ==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/base64": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/base64/-/base64-1.1.2.tgz",
      "integrity": "sha512-AZkcAA5vnN/v4PDqKyMR5lx7hZttPDgClv83E//FMNhR2TMcLUhfRUBHCmSl0oi9zMgDDqRUJkSxO3wm85+XLg==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/codegen": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@protobufjs/codegen/-/codegen-2.0.5.tgz",
      "integrity": "sha512-zgXFLzW3Ap33e6d0Wlj4MGIm6Ce8O89n/apUaGNB/jx+hw+ruWEp7EwGUshdLKVRCxZW12fp9r40E1mQrf/34g==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/eventemitter": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@protobufjs/eventemitter/-/eventemitter-1.1.1.tgz",
      "integrity": "sha512-vW1GmwMZNnL+gMRaovlh9yZX74kc+TTU3FObkkurpMaRtBfLP3ldjS9KQWlwZgraRE0+dheEEoAxdzcJQ8eXZg==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/fetch": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@protobufjs/fetch/-/fetch-1.1.1.tgz",
      "integrity": "sha512-GpptLrs57adMSuHi3VNj0mAF8dwh36LMaYF6XyJ6JMWlVsc+t42tm1HSEDmOs3A8fC9yyeisgLhsTVQokOZ0zw==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "@protobufjs/aspromise": "^1.1.1"
      }
    },
    "node_modules/@protobufjs/float": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/float/-/float-1.0.2.tgz",
      "integrity": "sha512-Ddb+kVXlXst9d+R9PfTIxh1EdNkgoRe5tOX6t01f1lYWOvJnSPDBlG241QLzcyPdoNTsblLUdujGSE4RzrTZGQ==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/inquire": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/inquire/-/inquire-1.1.2.tgz",
      "integrity": "sha512-pa0vFRuws4wkvaXKK1uXZMAwAX4/t8ANaJo45iw/oQHNQ9q5xUzwgFmVJGXiga2BeN+zpX7Vf9vmsiIa2J+MUw==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/path": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/path/-/path-1.1.2.tgz",
      "integrity": "sha512-6JOcJ5Tm08dOHAbdR3GrvP+yUUfkjG5ePsHYczMFLq3ZmMkAD98cDgcT2iA1lJ9NVwFd4tH/iSSoe44YWkltEA==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/pool": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@protobufjs/pool/-/pool-1.1.0.tgz",
      "integrity": "sha512-0kELaGSIDBKvcgS4zkjz1PeddatrjYcmMWOlAuAPwAeccUrPHdUqo/J6LiymHHEiJT5NrF1UVwxY14f+fy4WQw==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/utf8": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/utf8/-/utf8-1.1.2.tgz",
      "integrity": "sha512-b1UQwcEZ4yCnMCD8DAL1VlbvBJE9/IX4FTIp7BG1xYpf29SLazLSrqUkj4w7Y5y7cCVP6E5tcqqcI0xemPkHug==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@sapphire/async-queue": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@sapphire/async-queue/-/async-queue-1.5.5.tgz",
      "integrity": "sha512-cvGzxbba6sav2zZkH8GPf2oGk9yYoD5qrNWdu9fRehifgnFZJMV+nuy2nON2roRO4yQQ+v7MK/Pktl/HgfsUXg==",
      "license": "MIT",
      "engines": {
        "node": ">=v14.0.0",
        "npm": ">=7.0.0"
      }
    },
    "node_modules/@sapphire/shapeshift": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/@sapphire/shapeshift/-/shapeshift-4.0.0.tgz",
      "integrity": "sha512-d9dUmWVA7MMiKobL3VpLF8P2aeanRTu6ypG2OIaEv/ZHH/SUQ2iHOVyi5wAPjQ+HmnMuL0whK9ez8I/raWbtIg==",
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.3",
        "lodash": "^4.17.21"
      },
      "engines": {
        "node": ">=v16"
      }
    },
    "node_modules/@sapphire/snowflake": {
      "version": "3.5.3",
      "resolved": "https://registry.npmjs.org/@sapphire/snowflake/-/snowflake-3.5.3.tgz",
      "integrity": "sha512-jjmJywLAFoWeBi1W7994zZyiNWPIiqRRNAmSERxyg93xRGzNYvGjlZ0gR6x0F4gPRi2+0O6S71kOZYyr3cxaIQ==",
      "license": "MIT",
      "engines": {
        "node": ">=v14.0.0",
        "npm": ">=7.0.0"
      }
    },
    "node_modules/@thi.ng/bitstream": {
      "version": "2.4.54",
      "resolved": "https://registry.npmjs.org/@thi.ng/bitstream/-/bitstream-2.4.54.tgz",
      "integrity": "sha512-uInkAJge5O0bWWEaYKrQpMccPbFg0z6eIA5NDCJXPm7l3rjlDje6RBHBXll3LiQz9Y051EdzlAEQRaB5hEifdg==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/postspectacular"
        },
        {
          "type": "patreon",
          "url": "https://patreon.com/thing_umbrella"
        },
        {
          "type": "liberapay",
          "url": "https://liberapay.com/thi.ng"
        }
      ],
      "license": "Apache-2.0",
      "dependencies": {
        "@thi.ng/errors": "^2.6.16"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@thi.ng/errors": {
      "version": "2.6.16",
      "resolved": "https://registry.npmjs.org/@thi.ng/errors/-/errors-2.6.16.tgz",
      "integrity": "sha512-a7Lv/G0La5eTNUEIyLldpeYziyFSj3rOlWNeXFu8v+ZSb8w8EnQ/L0r0sKHux7Ru6RhUkAXrcaHU7xd1ZkWovA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/postspectacular"
        },
        {
          "type": "patreon",
          "url": "https://patreon.com/thing_umbrella"
        },
        {
          "type": "liberapay",
          "url": "https://liberapay.com/thi.ng"
        }
      ],
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@tokenizer/token": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/@tokenizer/token/-/token-0.3.0.tgz",
      "integrity": "sha512-OvjF+z51L3ov0OyAU0duzsYuvO01PH7x4t6DJx+guahgTnBHkhJdG7soQeTSFLWN3efnHyibZ4Z8l2EuWwJN3A==",
      "license": "MIT"
    },
    "node_modules/@types/long": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/@types/long/-/long-4.0.2.tgz",
      "integrity": "sha512-MqTGEo5bj5t157U6fA/BiDynNkn0YknVdh48CMPkTSpFTVmvao5UQmm7uEF6xBEo7qIMAlY/JSleYaE6VOdpaA==",
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "26.1.1",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-26.1.1.tgz",
      "integrity": "sha512-nxAkRSVkN1Y0JC1W8ky/fTfkGsMmcrRsbx+3XoZE+rMOX71kLYTV7fLXpqud1GpbpP5TuffXFqfX7fH2GgZREw==",
      "license": "MIT",
      "dependencies": {
        "undici-types": "~8.3.0"
      }
    },
    "node_modules/@types/ws": {
      "version": "8.18.1",
      "resolved": "https://registry.npmjs.org/@types/ws/-/ws-8.18.1.tgz",
      "integrity": "sha512-ThVF6DCVhA8kUGy+aazFQ4kXQ7E1Ty7A3ypFOe0IcJV8O/M511G99AW24irKrW56Wt44yG9+ij8FaqoBGkuBXg==",
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@vladfrangu/async_event_emitter": {
      "version": "2.4.7",
      "resolved": "https://registry.npmjs.org/@vladfrangu/async_event_emitter/-/async_event_emitter-2.4.7.tgz",
      "integrity": "sha512-Xfe6rpCTxSxfbswi/W/Pz7zp1WWSNn4A0eW4mLkQUewCrXXtMj31lCg+iQyTkh/CkusZSq9eDflu7tjEDXUY6g==",
      "license": "MIT",
      "engines": {
        "node": ">=v14.0.0",
        "npm": ">=7.0.0"
      }
    },
    "node_modules/@wasm-audio-decoders/common": {
      "version": "9.0.7",
      "resolved": "https://registry.npmjs.org/@wasm-audio-decoders/common/-/common-9.0.7.tgz",
      "integrity": "sha512-WRaUuWSKV7pkttBygml/a6dIEpatq2nnZGFIoPTc5yPLkxL6Wk4YaslPM98OPQvWacvNZ+Py9xROGDtrFBDzag==",
      "license": "MIT",
      "dependencies": {
        "@eshaz/web-worker": "1.2.2",
        "simple-yenc": "^1.0.4"
      }
    },
    "node_modules/@wasm-audio-decoders/flac": {
      "version": "0.2.10",
      "resolved": "https://registry.npmjs.org/@wasm-audio-decoders/flac/-/flac-0.2.10.tgz",
      "integrity": "sha512-YfcyoD2rYRBa6ffawZKNi5qvV5HArJmNmuMVUPoutuZ2hhGi6WNSWIzgvbROGmPbFivLL764Am7xxJENWJDhjw==",
      "license": "MIT",
      "dependencies": {
        "@wasm-audio-decoders/common": "9.0.7",
        "codec-parser": "2.5.0"
      },
      "funding": {
        "type": "individual",
        "url": "https://github.com/sponsors/eshaz"
      }
    },
    "node_modules/@wasm-audio-decoders/ogg-vorbis": {
      "version": "0.1.20",
      "resolved": "https://registry.npmjs.org/@wasm-audio-decoders/ogg-vorbis/-/ogg-vorbis-0.1.20.tgz",
      "integrity": "sha512-zaQPasU5usRjUDXtXOHYED5tfkR4QMXd+EH3Nrz1+4+M5pCsdD+s9YxJqb0oqnTyRu/KUujOmu5Z/m/NT47vwg==",
      "license": "MIT",
      "dependencies": {
        "@wasm-audio-decoders/common": "9.0.7",
        "codec-parser": "2.5.0"
      },
      "funding": {
        "type": "individual",
        "url": "https://github.com/sponsors/eshaz"
      }
    },
    "node_modules/@wasm-audio-decoders/opus-ml": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/@wasm-audio-decoders/opus-ml/-/opus-ml-0.0.2.tgz",
      "integrity": "sha512-58rWEqDGg+CKCyEeKm2KoxxSwTWtHh/NLTW9ObR4K8CGF6VwuuGudEI1CtniS/oSRmL1nJq/eh8MKARiluw4DQ==",
      "license": "MIT",
      "dependencies": {
        "@wasm-audio-decoders/common": "9.0.7"
      },
      "funding": {
        "type": "individual",
        "url": "https://github.com/sponsors/eshaz"
      }
    },
    "node_modules/@whiskeysockets/baileys": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/@whiskeysockets/baileys/-/baileys-6.5.0.tgz",
      "integrity": "sha512-ary0RNivsrl56wnn0ta37LwVGpCDabthERCV5lHHsbhJJFfp04g6+reiQAKvxo61oYxwxKjqq33kvID+AOr++A==",
      "deprecated": "This version is affected by a zero-day vulnerability that allows spoofing of messages, please update to\n  the latest versions (6.7.22^ or 7.0.0-rc12^)! For more information, check out the public advisory at\n  https://github.com/WhiskeySockets/Baileys/security/advisories/GHSA-qvv5-jq5g-4cgg",
      "license": "MIT",
      "dependencies": {
        "@adiwajshing/keyed-db": "^0.2.4",
        "@hapi/boom": "^9.1.3",
        "audio-decode": "^2.1.3",
        "axios": "^1.3.3",
        "cache-manager": "^5.2.2",
        "futoin-hkdf": "^1.5.1",
        "libphonenumber-js": "^1.10.20",
        "libsignal": "github:adiwajshing/libsignal-node",
        "music-metadata": "^7.12.3",
        "node-cache": "^5.1.2",
        "pino": "^7.0.0",
        "protobufjs": "^6.11.3",
        "uuid": "^9.0.0",
        "ws": "^8.13.0"
      },
      "peerDependencies": {
        "jimp": "^0.16.1",
        "link-preview-js": "^3.0.0",
        "qrcode-terminal": "^0.12.0",
        "sharp": "^0.30.5"
      },
      "peerDependenciesMeta": {
        "jimp": {
          "optional": true
        },
        "link-preview-js": {
          "optional": true
        },
        "qrcode-terminal": {
          "optional": true
        },
        "sharp": {
          "optional": true
        }
      }
    },
    "node_modules/@whiskeysockets/baileys/node_modules/@hapi/boom": {
      "version": "9.1.4",
      "resolved": "https://registry.npmjs.org/@hapi/boom/-/boom-9.1.4.tgz",
      "integrity": "sha512-Ls1oH8jaN1vNsqcaHVYJrKmgMcKsC1wcp8bujvXrHaAqD2iDYq3HoOwsxwo09Cuda5R5nC0o0IxlrlTuvPuzSw==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "@hapi/hoek": "9.x.x"
      }
    },
    "node_modules/@whiskeysockets/baileys/node_modules/@hapi/hoek": {
      "version": "9.3.0",
      "resolved": "https://registry.npmjs.org/@hapi/hoek/-/hoek-9.3.0.tgz",
      "integrity": "sha512-/c6rf4UJlmHlC9b5BaNvzAcFv7HZ2QHaV0D4/HNlBdvFnvQq8RI4kYdhyPCl7Xj+oWvTWQ8ujhqS53LIgAe6KQ==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@whiskeysockets/baileys/node_modules/on-exit-leak-free": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/on-exit-leak-free/-/on-exit-leak-free-0.2.0.tgz",
      "integrity": "sha512-dqaz3u44QbRXQooZLTUKU41ZrzYrcvLISVgbrzbyCMxpmSLJvZ3ZamIJIZ29P6OhZIkNIQKosdeM6t1LYbA9hg==",
      "license": "MIT"
    },
    "node_modules/@whiskeysockets/baileys/node_modules/pino": {
      "version": "7.11.0",
      "resolved": "https://registry.npmjs.org/pino/-/pino-7.11.0.tgz",
      "integrity": "sha512-dMACeu63HtRLmCG8VKdy4cShCPKaYDR4youZqoSWLxl5Gu99HUw8bw75thbPv9Nip+H+QYX8o3ZJbTdVZZ2TVg==",
      "license": "MIT",
      "dependencies": {
        "atomic-sleep": "^1.0.0",
        "fast-redact": "^3.0.0",
        "on-exit-leak-free": "^0.2.0",
        "pino-abstract-transport": "v0.5.0",
        "pino-std-serializers": "^4.0.0",
        "process-warning": "^1.0.0",
        "quick-format-unescaped": "^4.0.3",
        "real-require": "^0.1.0",
        "safe-stable-stringify": "^2.1.0",
        "sonic-boom": "^2.2.1",
        "thread-stream": "^0.15.1"
      },
      "bin": {
        "pino": "bin.js"
      }
    },
    "node_modules/@whiskeysockets/baileys/node_modules/pino-abstract-transport": {
      "version": "0.5.0",
      "resolved": "https://registry.npmjs.org/pino-abstract-transport/-/pino-abstract-transport-0.5.0.tgz",
      "integrity": "sha512-+KAgmVeqXYbTtU2FScx1XS3kNyfZ5TrXY07V96QnUSFqo2gAqlvmaxH67Lj7SWazqsMabf+58ctdTcBgnOLUOQ==",
      "license": "MIT",
      "dependencies": {
        "duplexify": "^4.1.2",
        "split2": "^4.0.0"
      }
    },
    "node_modules/@whiskeysockets/baileys/node_modules/pino-std-serializers": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/pino-std-serializers/-/pino-std-serializers-4.0.0.tgz",
      "integrity": "sha512-cK0pekc1Kjy5w9V2/n+8MkZwusa6EyyxfeQCB799CQRhRt/CqYKiWs5adeu8Shve2ZNffvfC/7J64A2PJo1W/Q==",
      "license": "MIT"
    },
    "node_modules/@whiskeysockets/baileys/node_modules/process-warning": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/process-warning/-/process-warning-1.0.0.tgz",
      "integrity": "sha512-du4wfLyj4yCZq1VupnVSZmRsPJsNuxoDQFdCFHLaYiEbFBD7QE0a+I4D7hOxrVnh78QE/YipFAj9lXHiXocV+Q==",
      "license": "MIT"
    },
    "node_modules/@whiskeysockets/baileys/node_modules/real-require": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/real-require/-/real-require-0.1.0.tgz",
      "integrity": "sha512-r/H9MzAWtrv8aSVjPCMFpDMl5q66GqtmmRkRjpHTsp4zBAa+snZyiQNlMONiUmEJcsnaw0wCauJ2GWODr/aFkg==",
      "license": "MIT",
      "engines": {
        "node": ">= 12.13.0"
      }
    },
    "node_modules/@whiskeysockets/baileys/node_modules/sonic-boom": {
      "version": "2.8.0",
      "resolved": "https://registry.npmjs.org/sonic-boom/-/sonic-boom-2.8.0.tgz",
      "integrity": "sha512-kuonw1YOYYNOve5iHdSahXPOK49GqwA+LZhI6Wz/l0rP57iKyXXIHaRagOBHAPmGwJC6od2Z9zgvZ5loSgMlVg==",
      "license": "MIT",
      "dependencies": {
        "atomic-sleep": "^1.0.0"
      }
    },
    "node_modules/@whiskeysockets/baileys/node_modules/thread-stream": {
      "version": "0.15.2",
      "resolved": "https://registry.npmjs.org/thread-stream/-/thread-stream-0.15.2.tgz",
      "integrity": "sha512-UkEhKIg2pD+fjkHQKyJO3yoIvAP3N6RlNFt2dUhcS1FGvCD1cQa1M/PGknCLFIyZdtJOWQjejp7bdNqmN7zwdA==",
      "license": "MIT",
      "dependencies": {
        "real-require": "^0.1.0"
      }
    },
    "node_modules/abort-controller": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/abort-controller/-/abort-controller-3.0.0.tgz",
      "integrity": "sha512-h8lQ8tacZYnR3vNQTgibj+tODHI5/+l06Au2Pcriv/Gmet0eaj4TwWH41sO9wnHDiQsEj19q0drzdWdeAHtweg==",
      "license": "MIT",
      "dependencies": {
        "event-target-shim": "^5.0.0"
      },
      "engines": {
        "node": ">=6.5"
      }
    },
    "node_modules/agent-base": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",
      "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "4"
      },
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/archiver": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/archiver/-/archiver-8.0.0.tgz",
      "integrity": "sha512-fV1orZfsnPn9BaSByR/qE67rJCLJEy2Ox5bq7nJh+jquWaNh6Sfec75kJ2T6PtdGUbPQlrVoSVCEOa5SdiTQ1g==",
      "license": "MIT",
      "dependencies": {
        "async": "^3.2.4",
        "buffer-crc32": "^1.0.0",
        "is-stream": "^4.0.0",
        "lazystream": "^1.0.0",
        "normalize-path": "^3.0.0",
        "readable-stream": "^4.0.0",
        "readdir-glob": "^3.0.0",
        "tar-stream": "^3.0.0",
        "zip-stream": "^7.0.2"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/async": {
      "version": "3.2.6",
      "resolved": "https://registry.npmjs.org/async/-/async-3.2.6.tgz",
      "integrity": "sha512-htCUDlxyyCLMgaM3xXg0C0LW2xqfuQ6p05pCEIsXuyQ+a1koYKTuBMzRNwmybfLgvJDMd0r1LTn4+E0Ti6C2AA==",
      "license": "MIT"
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==",
      "license": "MIT"
    },
    "node_modules/atomic-sleep": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/atomic-sleep/-/atomic-sleep-1.0.0.tgz",
      "integrity": "sha512-kNOjDqAh7px0XWNI+4QbzoiR/nTkHAWNud2uvnJquD1/x5a7EQZMJT0AczqK0Qn67oY/TTQ1LbUKajZpp3I9tQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/audio-buffer": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/audio-buffer/-/audio-buffer-5.0.0.tgz",
      "integrity": "sha512-gsDyj1wwUp8u7NBB+eW6yhLb9ICf+0eBmDX8NGaAS00w8/fLqFdxUlL5Ge/U8kB64DlQhdonxYC59dXy1J7H/w==",
      "license": "MIT"
    },
    "node_modules/audio-decode": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/audio-decode/-/audio-decode-2.2.3.tgz",
      "integrity": "sha512-Z0lHvMayR/Pad9+O9ddzaBJE0DrhZkQlStrC1RwcAHF3AhQAsdwKHeLGK8fYKyp2DDU6xHxzGb4CLMui12yVrg==",
      "deprecated": "Renamed to @audio/decode",
      "license": "MIT",
      "dependencies": {
        "@wasm-audio-decoders/flac": "^0.2.4",
        "@wasm-audio-decoders/ogg-vorbis": "^0.1.15",
        "audio-buffer": "^5.0.0",
        "audio-type": "^2.2.1",
        "mpg123-decoder": "^1.0.0",
        "node-wav": "^0.0.2",
        "ogg-opus-decoder": "^1.6.12",
        "qoa-format": "^1.0.1"
      }
    },
    "node_modules/audio-type": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/audio-type/-/audio-type-2.4.1.tgz",
      "integrity": "sha512-dK9Z/P83C/rBfTrXXgPD3jZ+aXxx2o/P4rq8+H1JqxbXklitEeJw4CrcwMC5CkON3CX3yy2gaWnIEVYejYh0zQ==",
      "license": "MIT",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/axios": {
      "version": "1.18.1",
      "resolved": "https://registry.npmjs.org/axios/-/axios-1.18.1.tgz",
      "integrity": "sha512-3nTvFlvpn9Zu/RkHUqtc7/+al4UpRW5az71ap5zccp6e8RAYEzhMTecX8Dz1wWDYrPpUoB1HAQEGEAEvUr7S9g==",
      "license": "MIT",
      "dependencies": {
        "follow-redirects": "^1.16.0",
        "form-data": "^4.0.5",
        "https-proxy-agent": "^5.0.1",
        "proxy-from-env": "^2.1.0"
      }
    },
    "node_modules/b4a": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/b4a/-/b4a-1.8.1.tgz",
      "integrity": "sha512-aiqre1Nr0B/6DgE2N5vwTc+2/oQZ4Wh1t4NznYY4E00y8LCt6NqdRv81so00oo27D8MVKTpUa/MwUUtBLXCoDw==",
      "license": "Apache-2.0",
      "peerDependencies": {
        "react-native-b4a": "*"
      },
      "peerDependenciesMeta": {
        "react-native-b4a": {
          "optional": true
        }
      }
    },
    "node_modules/balanced-match": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-4.0.4.tgz",
      "integrity": "sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==",
      "license": "MIT",
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/bare-events": {
      "version": "2.9.1",
      "resolved": "https://registry.npmjs.org/bare-events/-/bare-events-2.9.1.tgz",
      "integrity": "sha512-Z0oHEHAFDZkffN8Qc39zNZjQlMDkPJRyyyZieU1VH7u8c5S+qHZ2S8ixdKIAxEjfHO7FJxXmJWgteOghVanIsg==",
      "license": "Apache-2.0",
      "peerDependencies": {
        "bare-abort-controller": "*"
      },
      "peerDependenciesMeta": {
        "bare-abort-controller": {
          "optional": true
        }
      }
    },
    "node_modules/bare-fs": {
      "version": "4.7.4",
      "resolved": "https://registry.npmjs.org/bare-fs/-/bare-fs-4.7.4.tgz",
      "integrity": "sha512-y1kC+ffIx/tPLdTE693uNjHfzTfr+ravR5tvWlMXe25nELbkqV400S71qHDwbkAQ1FVEZobB1NFRzFbCCcyBCQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "bare-events": "^2.5.4",
        "bare-path": "^3.0.0",
        "bare-stream": "^2.6.4",
        "bare-url": "^2.2.2",
        "fast-fifo": "^1.3.2"
      },
      "engines": {
        "bare": ">=1.16.0"
      },
      "peerDependencies": {
        "bare-buffer": "*"
      },
      "peerDependenciesMeta": {
        "bare-buffer": {
          "optional": true
        }
      }
    },
    "node_modules/bare-path": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/bare-path/-/bare-path-3.1.1.tgz",
      "integrity": "sha512-JprUlveX3QjApC1cTpsUOiscADftCGVWkzitbHsRqv84hzYwYHw2mbluddsq5TvI8mH/8Ov1f4BiMAdcB0oYnQ==",
      "license": "Apache-2.0"
    },
    "node_modules/bare-stream": {
      "version": "2.13.3",
      "resolved": "https://registry.npmjs.org/bare-stream/-/bare-stream-2.13.3.tgz",
      "integrity": "sha512-Kc+brLqvEqGkjyfiwJmImAOqLZL7OsoLKuavx+hJjgVV3nLTOjloJyPMFxjUPerGGHrNH0fLU06jjykMLWrERQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "b4a": "^1.8.1",
        "streamx": "^2.25.0",
        "teex": "^1.0.1"
      },
      "peerDependencies": {
        "bare-abort-controller": "*",
        "bare-buffer": "*",
        "bare-events": "*"
      },
      "peerDependenciesMeta": {
        "bare-abort-controller": {
          "optional": true
        },
        "bare-buffer": {
          "optional": true
        },
        "bare-events": {
          "optional": true
        }
      }
    },
    "node_modules/bare-url": {
      "version": "2.4.5",
      "resolved": "https://registry.npmjs.org/bare-url/-/bare-url-2.4.5.tgz",
      "integrity": "sha512-K+y9xF1tN+CdPu4qWwr0QiK1Al07eFPGYK5M2pDXcmHdMdgC/tT/bpmMe1hrmRHaidKLkXrC+cRNYf3XVDUhSQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "bare-path": "^3.0.0"
      }
    },
    "node_modules/base64-js": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/brace-expansion": {
      "version": "5.0.7",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-5.0.7.tgz",
      "integrity": "sha512-7oFy703dxfY3/NLxC1fh2SUCQ0H9rmAY+5EpDVfXjUTTs+HEwR2nYaqLv+GWcTsumwxPfiz6CzCNkwXwBUwqCA==",
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^4.0.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/buffer": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/buffer/-/buffer-6.0.3.tgz",
      "integrity": "sha512-FTiCpNxtwiZZHEZbcbTIcZjERVICn9yq/pDFkTl95/AxzD1naBctN7YO68riM/gLSDY7sdrMby8hofADYuuqOA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "base64-js": "^1.3.1",
        "ieee754": "^1.2.1"
      }
    },
    "node_modules/buffer-crc32": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-1.0.0.tgz",
      "integrity": "sha512-Db1SbgBS/fg/392AblrMJk97KggmvYhr4pB5ZIMTWtaivCPMWLkmb7m21cJvpvgK+J3nsU2CmmixNBZx4vFj/w==",
      "license": "MIT",
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/cache-manager": {
      "version": "5.7.6",
      "resolved": "https://registry.npmjs.org/cache-manager/-/cache-manager-5.7.6.tgz",
      "integrity": "sha512-wBxnBHjDxF1RXpHCBD6HGvKER003Ts7IIm0CHpggliHzN1RZditb7rXoduE1rplc2DEFYKxhLKgFuchXMJje9w==",
      "license": "MIT",
      "dependencies": {
        "eventemitter3": "^5.0.1",
        "lodash.clonedeep": "^4.5.0",
        "lru-cache": "^10.2.2",
        "promise-coalesce": "^1.1.2"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/clone": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/clone/-/clone-2.1.2.tgz",
      "integrity": "sha512-3Pe/CF1Nn94hyhIYpjtiLhdCoEoz0DqQ+988E9gmeEdQZlojxnOb74wctFyuwWQHzqyf9X7C7MG8juUpqBJT8w==",
      "license": "MIT",
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/codec-parser": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/codec-parser/-/codec-parser-2.5.0.tgz",
      "integrity": "sha512-Ru9t80fV8B0ZiixQl8xhMTLru+dzuis/KQld32/x5T/+3LwZb0/YvQdSKytX9JqCnRdiupvAvyYJINKrXieziQ==",
      "license": "LGPL-3.0-or-later"
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "license": "MIT",
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/compress-commons": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/compress-commons/-/compress-commons-7.0.1.tgz",
      "integrity": "sha512-g0S8KAD8qf4+V//pr3BfB1aBnARLXNz2Gx+jmHU0LEriUuoQUOPOulVquHKTJ8+EAIIO7fhseNDr9wK5Q9FKBQ==",
      "license": "MIT",
      "dependencies": {
        "crc-32": "^1.2.0",
        "crc32-stream": "^7.0.1",
        "is-stream": "^4.0.0",
        "normalize-path": "^3.0.0",
        "readable-stream": "^4.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/core-util-is": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz",
      "integrity": "sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==",
      "license": "MIT"
    },
    "node_modules/crc-32": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/crc-32/-/crc-32-1.2.2.tgz",
      "integrity": "sha512-ROmzCKrTnOwybPcJApAA6WBWij23HVfGVNKqqrZpuyZOHqK2CwHSvpGuyt/UNNvaIjEd8X5IFGp4Mh+Ie1IHJQ==",
      "license": "Apache-2.0",
      "bin": {
        "crc32": "bin/crc32.njs"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/crc32-stream": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/crc32-stream/-/crc32-stream-7.0.1.tgz",
      "integrity": "sha512-IBWsY8xznyQrcHn8h4bC8/4ErNke5elzgG8GcqF4RFPw6aHkWWRc7Tgw6upjaTX/CT/yQgqYENkxYsTYN+hW2g==",
      "license": "MIT",
      "dependencies": {
        "crc-32": "^1.2.0",
        "readable-stream": "^4.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/curve25519-js": {
      "version": "0.0.4",
      "resolved": "https://registry.npmjs.org/curve25519-js/-/curve25519-js-0.0.4.tgz",
      "integrity": "sha512-axn2UMEnkhyDUPWOwVKBMVIzSQy2ejH2xRGy1wq81dqRwApXfIzfbE3hIX0ZRFBIihf/KDqK158DLwESu4AK1w==",
      "license": "MIT"
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/discord-api-types": {
      "version": "0.38.49",
      "resolved": "https://registry.npmjs.org/discord-api-types/-/discord-api-types-0.38.49.tgz",
      "integrity": "sha512-XnqcWmnFZFAE8ZM8SHAw9DIV8D3Or00rMQ8iQLotrEA2PmXhl+ykaf6L6q4l474hrSUH1JaYcv+iOMRWp2p6Tg==",
      "license": "MIT",
      "workspaces": [
        "scripts/actions/documentation"
      ]
    },
    "node_modules/discord.js": {
      "version": "14.26.5",
      "resolved": "https://registry.npmjs.org/discord.js/-/discord.js-14.26.5.tgz",
      "integrity": "sha512-SGYgjiAs0o8ZzMC97XmFXKONyairJ9YzVda+LvoSKs9YYh2gPtQhY+liaV6H/w72jxYbu9ggiSqAXoF3FLOH4A==",
      "license": "Apache-2.0",
      "dependencies": {
        "@discordjs/builders": "^1.14.1",
        "@discordjs/collection": "1.5.3",
        "@discordjs/formatters": "^0.6.2",
        "@discordjs/rest": "^2.6.1",
        "@discordjs/util": "^1.2.0",
        "@discordjs/ws": "^1.2.3",
        "@sapphire/snowflake": "3.5.3",
        "discord-api-types": "^0.38.48",
        "fast-deep-equal": "3.1.3",
        "lodash.snakecase": "4.1.1",
        "magic-bytes.js": "^1.13.0",
        "tslib": "^2.6.3",
        "undici": "6.24.1"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/discordjs/discord.js?sponsor"
      }
    },
    "node_modules/dotenv": {
      "version": "16.6.1",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-16.6.1.tgz",
      "integrity": "sha512-uBq4egWHTcTt33a72vpSG0z3HnPuIl6NqYcTrKEg2azoEyl2hpW0zqlxysq2pK9HlDIHyHyakeYaYnSAwd8bow==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/duplexify": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/duplexify/-/duplexify-4.1.3.tgz",
      "integrity": "sha512-M3BmBhwJRZsSx38lZyhE53Csddgzl5R7xGJNk7CVddZD6CcmwMCH8J+7AprIrQKH7TonKxaCjcv27Qmf+sQ+oA==",
      "license": "MIT",
      "dependencies": {
        "end-of-stream": "^1.4.1",
        "inherits": "^2.0.3",
        "readable-stream": "^3.1.1",
        "stream-shift": "^1.0.2"
      }
    },
    "node_modules/duplexify/node_modules/readable-stream": {
      "version": "3.6.2",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.2.tgz",
      "integrity": "sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==",
      "license": "MIT",
      "dependencies": {
        "inherits": "^2.0.3",
        "string_decoder": "^1.1.1",
        "util-deprecate": "^1.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/end-of-stream": {
      "version": "1.4.5",
      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.5.tgz",
      "integrity": "sha512-ooEGc6HP26xXq/N+GCGOT0JKCLDGrq2bQUZrQ7gyrJiZANJ/8YDTxTpQBXGMn+WbIQXNVpyWymm7KYVICQnyOg==",
      "license": "MIT",
      "dependencies": {
        "once": "^1.4.0"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.2.tgz",
      "integrity": "sha512-HWcBoN6NileqtSydK2FqHbS/LoDd2pqrnQHLyJzBj4kOp/ky2MWMN694xOfkK8/SnUsW2DH7EfyVlydKCsm1Zw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/event-target-shim": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/event-target-shim/-/event-target-shim-5.0.1.tgz",
      "integrity": "sha512-i/2XbnSz/uxRCU6+NdVJgKWDTM427+MqYbkQzD321DuCQJUqOuJKIA0IM2+W2xtYHdKOmZ4dR6fExsd4SXL+WQ==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/eventemitter3": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-5.0.4.tgz",
      "integrity": "sha512-mlsTRyGaPBjPedk6Bvw+aqbsXDtoAyAzm5MO7JgU+yVRyMQ5O8bD4Kcci7BS85f93veegeCPkL8R4GLClnjLFw==",
      "license": "MIT"
    },
    "node_modules/events": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/events/-/events-3.3.0.tgz",
      "integrity": "sha512-mQw+2fkQbALzQ7V0MY0IqdnXNOeTtP4r0lN9z7AAawCXgqea7bDii20AYrIBrFd/Hx0M2Ocz6S111CaFkUcb0Q==",
      "license": "MIT",
      "engines": {
        "node": ">=0.8.x"
      }
    },
    "node_modules/events-universal": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/events-universal/-/events-universal-1.0.1.tgz",
      "integrity": "sha512-LUd5euvbMLpwOF8m6ivPCbhQeSiYVNb8Vs0fQ8QjXo0JTkEHpz8pxdQf0gStltaPpw0Cca8b39KxvK9cfKRiAw==",
      "license": "Apache-2.0",
      "dependencies": {
        "bare-events": "^2.7.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "license": "MIT"
    },
    "node_modules/fast-fifo": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/fast-fifo/-/fast-fifo-1.3.2.tgz",
      "integrity": "sha512-/d9sfos4yxzpwkDkuN7k2SqFKtYNmCTzgfEpz82x34IM9/zc8KGxQoXg1liNC/izpRM/MBdt44Nmx41ZWqk+FQ==",
      "license": "MIT"
    },
    "node_modules/fast-redact": {
      "version": "3.5.0",
      "resolved": "https://registry.npmjs.org/fast-redact/-/fast-redact-3.5.0.tgz",
      "integrity": "sha512-dwsoQlS7h9hMeYUq1W++23NDcBLV4KqONnITDV9DjfS3q1SgDGVrBdvvTLUotWtPSD7asWDV9/CmsZPy8Hf70A==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/file-type": {
      "version": "16.5.4",
      "resolved": "https://registry.npmjs.org/file-type/-/file-type-16.5.4.tgz",
      "integrity": "sha512-/yFHK0aGjFEgDJjEKP0pWCplsPFPhwyfwevf/pVxiN0tmE4L9LmwWxWukdJSHdoCli4VgQLehjJtwQBnqmsKcw==",
      "license": "MIT",
      "dependencies": {
        "readable-web-to-node-stream": "^3.0.0",
        "strtok3": "^6.2.4",
        "token-types": "^4.1.1"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/file-type?sponsor=1"
      }
    },
    "node_modules/follow-redirects": {
      "version": "1.16.0",
      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.16.0.tgz",
      "integrity": "sha512-y5rN/uOsadFT/JfYwhxRS5R7Qce+g3zG97+JrtFZlC9klX/W5hD7iiLzScI4nZqUS7DNUdhPgw4xI8W2LuXlUw==",
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/RubenVerborgh"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=4.0"
      },
      "peerDependenciesMeta": {
        "debug": {
          "optional": true
        }
      }
    },
    "node_modules/form-data": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.6.tgz",
      "integrity": "sha512-vKatAh4SlVfgbv+YtmhiRjhEMJsYpsG1Y2rMQtR+SVSbytsSD1YGzDIcrAJmdFec88u/+VoGmxnl+80gL1tRCQ==",
      "license": "MIT",
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "es-set-tostringtag": "^2.1.0",
        "hasown": "^2.0.4",
        "mime-types": "^2.1.35"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/futoin-hkdf": {
      "version": "1.5.3",
      "resolved": "https://registry.npmjs.org/futoin-hkdf/-/futoin-hkdf-1.5.3.tgz",
      "integrity": "sha512-SewY5KdMpaoCeh7jachEWFsh1nNlaDjNHZXWqL5IGwtpEYHTgkr2+AMCgNwKWkcc0wpSYrZfR7he4WdmHFtDxQ==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.4.tgz",
      "integrity": "sha512-T2UbfbBEF32wiepXIsMlTW9+dDYC6wMh/t/vYA4tuOMKqWz/n3vr1NFSxQiyP+zk2mXsoMA/i/7qV6LKut1t1A==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/https-proxy-agent": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.1.tgz",
      "integrity": "sha512-dFcAjpTQFgoLMzC2VwU+C/CbS7uRL0lWmxDITmqm7C+7F0Odmj6s9l6alZc6AELXhrnggM2CeWSXHGOdX2YtwA==",
      "license": "MIT",
      "dependencies": {
        "agent-base": "6",
        "debug": "4"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/ieee754": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
      "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "BSD-3-Clause"
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/is-stream": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-4.0.1.tgz",
      "integrity": "sha512-Dnz92NInDqYckGEUJv689RbRiTSEHCQ7wOVeALbkOz999YpqT46yMRIGtSNl2iCL1waAZSx40+h59NV/EwzV/A==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ==",
      "license": "MIT"
    },
    "node_modules/lazystream": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/lazystream/-/lazystream-1.0.1.tgz",
      "integrity": "sha512-b94GiNHQNy6JNTrt5w6zNyffMrNkXZb3KTkCZJb2V1xaEGCk093vkZ2jk3tpaeP33/OiXC+WvK9AxUebnf5nbw==",
      "license": "MIT",
      "dependencies": {
        "readable-stream": "^2.0.5"
      },
      "engines": {
        "node": ">= 0.6.3"
      }
    },
    "node_modules/lazystream/node_modules/readable-stream": {
      "version": "2.3.8",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.8.tgz",
      "integrity": "sha512-8p0AUk4XODgIewSi0l8Epjs+EVnWiK7NoDIEGU0HhE7+ZyY8D1IMY7odu5lRrFXGg71L15KG8QrPmum45RTtdA==",
      "license": "MIT",
      "dependencies": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "node_modules/lazystream/node_modules/safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
      "license": "MIT"
    },
    "node_modules/lazystream/node_modules/string_decoder": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "~5.1.0"
      }
    },
    "node_modules/libphonenumber-js": {
      "version": "1.13.8",
      "resolved": "https://registry.npmjs.org/libphonenumber-js/-/libphonenumber-js-1.13.8.tgz",
      "integrity": "sha512-80xal1m93rADejw2pMp2MSzFhHCPLEspjHxnH2UtqI+DgAmElsbmLMiqk9niwH9NWAfjsRtaJI+qBrOEmRx9nQ==",
      "license": "MIT"
    },
    "node_modules/libsignal": {
      "version": "2.0.1",
      "resolved": "git+ssh://git@github.com/adiwajshing/libsignal-node.git#11dbd962ea108187c79a7c46fe4d6f790e23da97",
      "license": "GPL-3.0",
      "dependencies": {
        "curve25519-js": "^0.0.4",
        "protobufjs": "6.8.8"
      }
    },
    "node_modules/libsignal/node_modules/@types/node": {
      "version": "10.17.60",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-10.17.60.tgz",
      "integrity": "sha512-F0KIgDJfy2nA3zMLmWGKxcH2ZVEtCZXHHdOQs2gSaQ27+lNeEfGxzkIw90aXswATX7AZ33tahPbzy6KAfUreVw==",
      "license": "MIT"
    },
    "node_modules/libsignal/node_modules/protobufjs": {
      "version": "6.8.8",
      "resolved": "https://registry.npmjs.org/protobufjs/-/protobufjs-6.8.8.tgz",
      "integrity": "sha512-AAmHtD5pXgZfi7GMpllpO3q1Xw1OYldr+dMUlAnffGTAhqkg72WdmSY71uKBF/JuyiKs8psYbtKrhi0ASCD8qw==",
      "hasInstallScript": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "@protobufjs/aspromise": "^1.1.2",
        "@protobufjs/base64": "^1.1.2",
        "@protobufjs/codegen": "^2.0.4",
        "@protobufjs/eventemitter": "^1.1.0",
        "@protobufjs/fetch": "^1.1.0",
        "@protobufjs/float": "^1.0.2",
        "@protobufjs/inquire": "^1.1.0",
        "@protobufjs/path": "^1.1.2",
        "@protobufjs/pool": "^1.1.0",
        "@protobufjs/utf8": "^1.1.0",
        "@types/long": "^4.0.0",
        "@types/node": "^10.1.0",
        "long": "^4.0.0"
      },
      "bin": {
        "pbjs": "bin/pbjs",
        "pbts": "bin/pbts"
      }
    },
    "node_modules/lodash": {
      "version": "4.18.1",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.18.1.tgz",
      "integrity": "sha512-dMInicTPVE8d1e5otfwmmjlxkZoUpiVLwyeTdUsi/Caj/gfzzblBcCE5sRHV/AsjuCmxWrte2TNGSYuCeCq+0Q==",
      "license": "MIT"
    },
    "node_modules/lodash.clonedeep": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/lodash.clonedeep/-/lodash.clonedeep-4.5.0.tgz",
      "integrity": "sha512-H5ZhCF25riFd9uB5UCkVKo61m3S/xZk1x4wA6yp/L3RFP6Z/eHH1ymQcGLo7J3GMPfm0V/7m1tryHuGVxpqEBQ==",
      "license": "MIT"
    },
    "node_modules/lodash.snakecase": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/lodash.snakecase/-/lodash.snakecase-4.1.1.tgz",
      "integrity": "sha512-QZ1d4xoBHYUeuouhEq3lk3Uq7ldgyFXGBhg04+oRLnIz8o9T65Eh+8YdroUwn846zchkA9yDsDl5CVVaV2nqYw==",
      "license": "MIT"
    },
    "node_modules/long": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/long/-/long-4.0.0.tgz",
      "integrity": "sha512-XsP+KhQif4bjX1kbuSiySJFNAehNxgLb6hPRGJ9QsUr8ajHkuXGdrHmFUTUUXhDwVX2R5bY4JNZEwbUiMhV+MA==",
      "license": "Apache-2.0"
    },
    "node_modules/lru-cache": {
      "version": "10.4.3",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
      "integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
      "license": "ISC"
    },
    "node_modules/magic-bytes.js": {
      "version": "1.13.0",
      "resolved": "https://registry.npmjs.org/magic-bytes.js/-/magic-bytes.js-1.13.0.tgz",
      "integrity": "sha512-afO2mnxW7GDTXMm5/AoN1WuOcdoKhtgXjIvHmobqTD1grNplhGdv3PFOyjCVmrnOZBIT/gD/koDKpYG+0mvHcg==",
      "license": "MIT"
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/media-typer": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-1.1.0.tgz",
      "integrity": "sha512-aisnrDP4GNe06UcKFnV5bfMNPBUw4jsLGaWwWfnH3v02GnBuXX2MCVn5RbrWo0j3pczUilYblq7fQ7Nw2t5XKw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/minimatch": {
      "version": "10.2.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.2.5.tgz",
      "integrity": "sha512-MULkVLfKGYDFYejP07QOurDLLQpcjk7Fw+7jXS2R2czRQzR56yHRveU5NDJEOviH+hETZKSkIk5c+T23GjFUMg==",
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "brace-expansion": "^5.0.5"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/mpg123-decoder": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/mpg123-decoder/-/mpg123-decoder-1.0.3.tgz",
      "integrity": "sha512-+fjxnWigodWJm3+4pndi+KUg9TBojgn31DPk85zEsim7C6s0X5Ztc/hQYdytXkwuGXH+aB0/aEkG40Emukv6oQ==",
      "license": "MIT",
      "dependencies": {
        "@wasm-audio-decoders/common": "9.0.7"
      },
      "funding": {
        "type": "individual",
        "url": "https://github.com/sponsors/eshaz"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/music-metadata": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/music-metadata/-/music-metadata-7.14.0.tgz",
      "integrity": "sha512-xrm3w7SV0Wk+OythZcSbaI8mcr/KHd0knJieu8bVpaPfMv/Agz5EooCAPz3OR5hbYMiUG6dgAPKZKnMzV+3amA==",
      "license": "MIT",
      "dependencies": {
        "@tokenizer/token": "^0.3.0",
        "content-type": "^1.0.5",
        "debug": "^4.3.4",
        "file-type": "^16.5.4",
        "media-typer": "^1.1.0",
        "strtok3": "^6.3.0",
        "token-types": "^4.2.1"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Borewit"
      }
    },
    "node_modules/node-cache": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/node-cache/-/node-cache-5.1.2.tgz",
      "integrity": "sha512-t1QzWwnk4sjLWaQAS8CHgOJ+RAfmHpxFWmc36IWTiWHQfs0w5JDMBS1b1ZxQteo0vVVuWJvIUKHDkkeK7vIGCg==",
      "license": "MIT",
      "dependencies": {
        "clone": "2.x"
      },
      "engines": {
        "node": ">= 8.0.0"
      }
    },
    "node_modules/node-wav": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/node-wav/-/node-wav-0.0.2.tgz",
      "integrity": "sha512-M6Rm/bbG6De/gKGxOpeOobx/dnGuP0dz40adqx38boqHhlWssBJZgLCPBNtb9NkrmnKYiV04xELq+R6PFOnoLA==",
      "license": "MIT",
      "engines": {
        "node": ">=4.4.0"
      }
    },
    "node_modules/nodemailer": {
      "version": "9.0.3",
      "resolved": "https://registry.npmjs.org/nodemailer/-/nodemailer-9.0.3.tgz",
      "integrity": "sha512-n+YP+NKwR5zRWa60k3GiQ6Q3B4KXCoAw40dAKeCtYn020iNN74aWK2liXIC3ZEATeGql7we3tE3t8QwhY0eskw==",
      "license": "MIT-0",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ogg-opus-decoder": {
      "version": "1.7.3",
      "resolved": "https://registry.npmjs.org/ogg-opus-decoder/-/ogg-opus-decoder-1.7.3.tgz",
      "integrity": "sha512-w47tiZpkLgdkpa+34VzYD8mHUj8I9kfWVZa82mBbNwDvB1byfLXSSzW/HxA4fI3e9kVlICSpXGFwMLV1LPdjwg==",
      "license": "MIT",
      "dependencies": {
        "@wasm-audio-decoders/common": "9.0.7",
        "@wasm-audio-decoders/opus-ml": "0.0.2",
        "codec-parser": "2.5.0",
        "opus-decoder": "0.7.11"
      },
      "funding": {
        "type": "individual",
        "url": "https://github.com/sponsors/eshaz"
      }
    },
    "node_modules/on-exit-leak-free": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/on-exit-leak-free/-/on-exit-leak-free-2.1.2.tgz",
      "integrity": "sha512-0eJJY6hXLGf1udHwfNftBqH+g73EU4B504nZeKpz1sYRKafAghwxEJunB2O7rDZkL4PGfsMVnTXZ2EjibbqcsA==",
      "license": "MIT",
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/opus-decoder": {
      "version": "0.7.11",
      "resolved": "https://registry.npmjs.org/opus-decoder/-/opus-decoder-0.7.11.tgz",
      "integrity": "sha512-+e+Jz3vGQLxRTBHs8YJQPRPc1Tr+/aC6coV/DlZylriA29BdHQAYXhvNRKtjftof17OFng0+P4wsFIqQu3a48A==",
      "license": "MIT",
      "dependencies": {
        "@wasm-audio-decoders/common": "9.0.7"
      },
      "funding": {
        "type": "individual",
        "url": "https://github.com/sponsors/eshaz"
      }
    },
    "node_modules/peek-readable": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/peek-readable/-/peek-readable-4.1.0.tgz",
      "integrity": "sha512-ZI3LnwUv5nOGbQzD9c2iDG6toheuXSZP5esSHBjopsXH4dg19soufvpUGA3uohi5anFtGb2lhAVdHzH6R/Evvg==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Borewit"
      }
    },
    "node_modules/pino": {
      "version": "9.14.0",
      "resolved": "https://registry.npmjs.org/pino/-/pino-9.14.0.tgz",
      "integrity": "sha512-8OEwKp5juEvb/MjpIc4hjqfgCNysrS94RIOMXYvpYCdm/jglrKEiAYmiumbmGhCvs+IcInsphYDFwqrjr7398w==",
      "license": "MIT",
      "dependencies": {
        "@pinojs/redact": "^0.4.0",
        "atomic-sleep": "^1.0.0",
        "on-exit-leak-free": "^2.1.0",
        "pino-abstract-transport": "^2.0.0",
        "pino-std-serializers": "^7.0.0",
        "process-warning": "^5.0.0",
        "quick-format-unescaped": "^4.0.3",
        "real-require": "^0.2.0",
        "safe-stable-stringify": "^2.3.1",
        "sonic-boom": "^4.0.1",
        "thread-stream": "^3.0.0"
      },
      "bin": {
        "pino": "bin.js"
      }
    },
    "node_modules/pino-abstract-transport": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/pino-abstract-transport/-/pino-abstract-transport-2.0.0.tgz",
      "integrity": "sha512-F63x5tizV6WCh4R6RHyi2Ml+M70DNRXt/+HANowMflpgGFMAym/VKm6G7ZOQRjqN7XbGxK1Lg9t6ZrtzOaivMw==",
      "license": "MIT",
      "dependencies": {
        "split2": "^4.0.0"
      }
    },
    "node_modules/pino-std-serializers": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/pino-std-serializers/-/pino-std-serializers-7.1.0.tgz",
      "integrity": "sha512-BndPH67/JxGExRgiX1dX0w1FvZck5Wa4aal9198SrRhZjH3GxKQUKIBnYJTdj2HDN3UQAS06HlfcSbQj2OHmaw==",
      "license": "MIT"
    },
    "node_modules/process": {
      "version": "0.11.10",
      "resolved": "https://registry.npmjs.org/process/-/process-0.11.10.tgz",
      "integrity": "sha512-cdGef/drWFoydD1JsMzuFf8100nZl+GT+yacc2bEced5f9Rjk4z+WtFUTBu9PhOi9j/jfmBPu0mMEY4wIdAF8A==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6.0"
      }
    },
    "node_modules/process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",
      "license": "MIT"
    },
    "node_modules/process-warning": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/process-warning/-/process-warning-5.0.0.tgz",
      "integrity": "sha512-a39t9ApHNx2L4+HBnQKqxxHNs1r7KF+Intd8Q/g1bUh6q0WIp9voPXJ/x0j+ZL45KF1pJd9+q2jLIRMfvEshkA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "MIT"
    },
    "node_modules/promise-coalesce": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/promise-coalesce/-/promise-coalesce-1.5.0.tgz",
      "integrity": "sha512-cTJ30U+ur1LD7pMPyQxiKIwxjtAjLsyU7ivRhVWZrX9BNIXtf78pc37vSMc8Vikx7DVzEKNk2SEJ5KWUpSG2ig==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/protobufjs": {
      "version": "6.11.6",
      "resolved": "https://registry.npmjs.org/protobufjs/-/protobufjs-6.11.6.tgz",
      "integrity": "sha512-k8BHqgPBOtrlougZZqF2uUk5Z7bN8f0wj+3e8M3hvtSv0NBAz4VBy5f6R5Nxq/l+i7mRFTgNZb2trxqTpHNY/A==",
      "hasInstallScript": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "@protobufjs/aspromise": "^1.1.2",
        "@protobufjs/base64": "^1.1.2",
        "@protobufjs/codegen": "^2.0.4",
        "@protobufjs/eventemitter": "^1.1.0",
        "@protobufjs/fetch": "^1.1.0",
        "@protobufjs/float": "^1.0.2",
        "@protobufjs/inquire": "^1.1.0",
        "@protobufjs/path": "^1.1.2",
        "@protobufjs/pool": "^1.1.0",
        "@protobufjs/utf8": "^1.1.0",
        "@types/long": "^4.0.1",
        "@types/node": ">=13.7.0",
        "long": "^4.0.0"
      },
      "bin": {
        "pbjs": "bin/pbjs",
        "pbts": "bin/pbts"
      }
    },
    "node_modules/proxy-from-env": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-2.1.0.tgz",
      "integrity": "sha512-cJ+oHTW1VAEa8cJslgmUZrc+sjRKgAKl3Zyse6+PV38hZe/V6Z14TbCuXcan9F9ghlz4QrFr2c92TNF82UkYHA==",
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/qoa-format": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/qoa-format/-/qoa-format-1.0.1.tgz",
      "integrity": "sha512-dMB0Z6XQjdpz/Cw4Rf6RiBpQvUSPCfYlQMWvmuWlWkAT7nDQD29cVZ1SwDUB6DYJSitHENwbt90lqfI+7bvMcw==",
      "license": "MIT",
      "dependencies": {
        "@thi.ng/bitstream": "^2.2.12"
      }
    },
    "node_modules/qrcode-terminal": {
      "version": "0.12.0",
      "resolved": "https://registry.npmjs.org/qrcode-terminal/-/qrcode-terminal-0.12.0.tgz",
      "integrity": "sha512-EXtzRZmC+YGmGlDFbXKxQiMZNwCLEO6BANKXG4iCtSIM0yqc/pappSx3RIKr4r0uh5JsBckOXeKrB3Iz7mdQpQ==",
      "bin": {
        "qrcode-terminal": "bin/qrcode-terminal.js"
      }
    },
    "node_modules/quick-format-unescaped": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/quick-format-unescaped/-/quick-format-unescaped-4.0.4.tgz",
      "integrity": "sha512-tYC1Q1hgyRuHgloV/YXs2w15unPVh8qfu/qCTfhTYamaw7fyhumKa2yGpdSo87vY32rIclj+4fWYQXUMs9EHvg==",
      "license": "MIT"
    },
    "node_modules/readable-stream": {
      "version": "4.7.0",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-4.7.0.tgz",
      "integrity": "sha512-oIGGmcpTLwPga8Bn6/Z75SVaH1z5dUut2ibSyAMVhmUggWpmDn2dapB0n7f8nwaSiRtepAsfJyfXIO5DCVAODg==",
      "license": "MIT",
      "dependencies": {
        "abort-controller": "^3.0.0",
        "buffer": "^6.0.3",
        "events": "^3.3.0",
        "process": "^0.11.10",
        "string_decoder": "^1.3.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      }
    },
    "node_modules/readable-web-to-node-stream": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/readable-web-to-node-stream/-/readable-web-to-node-stream-3.0.4.tgz",
      "integrity": "sha512-9nX56alTf5bwXQ3ZDipHJhusu9NTQJ/CVPtb/XHAJCXihZeitfJvIRS4GqQ/mfIoOE3IelHMrpayVrosdHBuLw==",
      "license": "MIT",
      "dependencies": {
        "readable-stream": "^4.7.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Borewit"
      }
    },
    "node_modules/readdir-glob": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/readdir-glob/-/readdir-glob-3.0.0.tgz",
      "integrity": "sha512-AhNB2KgKeVJr16nK9LLZbJNWnYoT23ZrumNKFDebHBdkC8KHSqWo871JAUhoWC/RtjEVdqNMFpM6qrwRbaUqpw==",
      "license": "Apache-2.0",
      "dependencies": {
        "minimatch": "^10.2.2"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/yqnn"
      }
    },
    "node_modules/real-require": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/real-require/-/real-require-0.2.0.tgz",
      "integrity": "sha512-57frrGM/OCTLqLOAh0mhVA9VBMHd+9U7Zb2THMGdBUoZVOtGbJzjxsYGDJ3A9AYYCP4hn6y1TVbaOfzWtm5GFg==",
      "license": "MIT",
      "engines": {
        "node": ">= 12.13.0"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/safe-stable-stringify": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/safe-stable-stringify/-/safe-stable-stringify-2.5.0.tgz",
      "integrity": "sha512-b3rppTKm9T+PsVCBEOUR46GWI7fdOs00VKZ1+9c1EWDaDMvjQc6tUwuFyIprgGgTcWoVHSKrU8H31ZHA2e0RHA==",
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/simple-yenc": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/simple-yenc/-/simple-yenc-1.0.4.tgz",
      "integrity": "sha512-5gvxpSd79e9a3V4QDYUqnqxeD4HGlhCakVpb6gMnDD7lexJggSBJRBO5h52y/iJrdXRilX9UCuDaIJhSWm5OWw==",
      "license": "MIT",
      "funding": {
        "type": "individual",
        "url": "https://github.com/sponsors/eshaz"
      }
    },
    "node_modules/sonic-boom": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/sonic-boom/-/sonic-boom-4.2.1.tgz",
      "integrity": "sha512-w6AxtubXa2wTXAUsZMMWERrsIRAdrK0Sc+FUytWvYAhBJLyuI4llrMIC1DtlNSdI99EI86KZum2MMq3EAZlF9Q==",
      "license": "MIT",
      "dependencies": {
        "atomic-sleep": "^1.0.0"
      }
    },
    "node_modules/split2": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/split2/-/split2-4.2.0.tgz",
      "integrity": "sha512-UcjcJOWknrNkF6PLX83qcHM6KHgVKNkV62Y8a5uYDVv9ydGQVwAHMKqHdJje1VTWpljG0WYpCDhrCdAOYH4TWg==",
      "license": "ISC",
      "engines": {
        "node": ">= 10.x"
      }
    },
    "node_modules/stream-shift": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/stream-shift/-/stream-shift-1.0.3.tgz",
      "integrity": "sha512-76ORR0DO1o1hlKwTbi/DM3EXWGf3ZJYO8cXX5RJwnul2DEg2oyoZyjLNoQM8WsvZiFKCRfC1O0J7iCvie3RZmQ==",
      "license": "MIT"
    },
    "node_modules/streamx": {
      "version": "2.28.0",
      "resolved": "https://registry.npmjs.org/streamx/-/streamx-2.28.0.tgz",
      "integrity": "sha512-1Yowhzjf0ivGMrTIkY9hav5TxobO9qIVqUE41fiCGMGgc3CLlf4MY+9AHmZqBWgDTue0fY9zWjYFVyf6Diuobw==",
      "license": "MIT",
      "dependencies": {
        "events-universal": "^1.0.0",
        "fast-fifo": "^1.3.2",
        "text-decoder": "^1.1.0"
      }
    },
    "node_modules/string_decoder": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
      "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "~5.2.0"
      }
    },
    "node_modules/strtok3": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/strtok3/-/strtok3-6.3.0.tgz",
      "integrity": "sha512-fZtbhtvI9I48xDSywd/somNqgUHl2L2cstmXCCif0itOf96jeW18MBSyrLuNicYQVkvpOxkZtkzujiTJ9LW5Jw==",
      "license": "MIT",
      "dependencies": {
        "@tokenizer/token": "^0.3.0",
        "peek-readable": "^4.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Borewit"
      }
    },
    "node_modules/tar-stream": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/tar-stream/-/tar-stream-3.2.0.tgz",
      "integrity": "sha512-ojzvCvVaNp6aOTFmG7jaRD0meowIAuPc3cMMhSgKiVWws1GyHbGd/xvnyuRKcKlMpt3qvxx6r0hreCNITP9hIg==",
      "license": "MIT",
      "dependencies": {
        "b4a": "^1.6.4",
        "bare-fs": "^4.5.5",
        "fast-fifo": "^1.2.0",
        "streamx": "^2.15.0"
      }
    },
    "node_modules/teex": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/teex/-/teex-1.0.1.tgz",
      "integrity": "sha512-eYE6iEI62Ni1H8oIa7KlDU6uQBtqr4Eajni3wX7rpfXD8ysFx8z0+dri+KWEPWpBsxXfxu58x/0jvTVT1ekOSg==",
      "license": "MIT",
      "dependencies": {
        "streamx": "^2.12.5"
      }
    },
    "node_modules/text-decoder": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/text-decoder/-/text-decoder-1.2.7.tgz",
      "integrity": "sha512-vlLytXkeP4xvEq2otHeJfSQIRyWxo/oZGEbXrtEEF9Hnmrdly59sUbzZ/QgyWuLYHctCHxFF4tRQZNQ9k60ExQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "b4a": "^1.6.4"
      }
    },
    "node_modules/thread-stream": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/thread-stream/-/thread-stream-3.2.0.tgz",
      "integrity": "sha512-zLBvqpwr4Esa0kRjcrzGU6zL25lePWaCLMx0RQFrmteozIfeNdaMLpG5U7PeHzvlFkAWaRKA9/KVW4F60iB+qw==",
      "license": "MIT",
      "dependencies": {
        "real-require": "^0.2.0"
      }
    },
    "node_modules/token-types": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/token-types/-/token-types-4.2.1.tgz",
      "integrity": "sha512-6udB24Q737UD/SDsKAHI9FCRP7Bqc9D/MQUV02ORQg5iskjtLJlZJNdN4kKtcdtwCeWIwIHDGaUsTsCCAa8sFQ==",
      "license": "MIT",
      "dependencies": {
        "@tokenizer/token": "^0.3.0",
        "ieee754": "^1.2.1"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Borewit"
      }
    },
    "node_modules/ts-mixer": {
      "version": "6.0.4",
      "resolved": "https://registry.npmjs.org/ts-mixer/-/ts-mixer-6.0.4.tgz",
      "integrity": "sha512-ufKpbmrugz5Aou4wcr5Wc1UUFWOLhq+Fm6qa6P0w0K5Qw2yhaUoiWszhCVuNQyNwrlGiscHOmqYoAox1PtvgjA==",
      "license": "MIT"
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/undici": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/undici/-/undici-6.24.1.tgz",
      "integrity": "sha512-sC+b0tB1whOCzbtlx20fx3WgCXwkW627p4EA9uM+/tNNPkSS+eSEld6pAs9nDv7WbY1UUljBMYPtu9BCOrCWKA==",
      "license": "MIT",
      "engines": {
        "node": ">=18.17"
      }
    },
    "node_modules/undici-types": {
      "version": "8.3.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-8.3.0.tgz",
      "integrity": "sha512-j375ScV60dom+YkPFIfTLcOiPxkN/buHz5GobjLhixFuANaNs3C9l4GmrWqejgXWJ7BbJcFYpTEUkS1Ge8bpZQ==",
      "license": "MIT"
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "license": "MIT"
    },
    "node_modules/uuid": {
      "version": "9.0.1",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-9.0.1.tgz",
      "integrity": "sha512-b+1eJOlsR9K8HJpow9Ok3fiWOWSIcIzXodvv0rQjVoOVNpWMpxf1wZNpt4y9h10odCNrqnYp1OBzRktckBe3sA==",
      "deprecated": "uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).",
      "funding": [
        "https://github.com/sponsors/broofa",
        "https://github.com/sponsors/ctavan"
      ],
      "license": "MIT",
      "bin": {
        "uuid": "dist/bin/uuid"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "license": "ISC"
    },
    "node_modules/ws": {
      "version": "8.21.0",
      "resolved": "https://registry.npmjs.org/ws/-/ws-8.21.0.tgz",
      "integrity": "sha512-Vsp28b7DRcimFQvrqu2Wek3z1iYxDCWqHYB8Qsnk/S4RfaCQzPGPyBNuVjJV3cd6UiKtUtp6sNM77gWvzcCH+g==",
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": ">=5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/zip-stream": {
      "version": "7.0.5",
      "resolved": "https://registry.npmjs.org/zip-stream/-/zip-stream-7.0.5.tgz",
      "integrity": "sha512-dSvYKdvLsAHCDqPOhIwk/q5CvuWtTB3Dgpoe0uVEFjTzIOAmsQpprX25InCvrvJsirEbu1OHyy67n/kAj1Sw/w==",
      "license": "MIT",
      "dependencies": {
        "compress-commons": "^7.0.0",
        "normalize-path": "^3.0.0",
        "readable-stream": "^4.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    }
  }
}
```

### `package.json`

```json
{
  "name": "nausync-cloud",
  "version": "1.0.0",
  "description": "Remote file control laptop via WhatsApp bot + Google Drive (rclone) sebagai perantara",
  "type": "module",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js"
  },
  "dependencies": {
    "@hapi/boom": "^10.0.1",
    "@whiskeysockets/baileys": "6.5.0",
    "archiver": "^8.0.0",
    "discord.js": "^14.26.5",
    "dotenv": "^16.4.5",
    "nodemailer": "^9.0.3",
    "pino": "^9.14.0",
    "qrcode-terminal": "^0.12.0"
  }
}
```

### `pin.store.json`

```json
{
  "hash": "68546cefa74d494a462cbbfae151df45172341566c4b2cb2f72143c1091a60e19d5d0770b82b9a0595ab89d487a6529935f4392cc1895dbd0e7af32c6014b392",
  "salt": "390e4a80dccfe46d824d87874ba270e0",
  "updatedAt": "2026-07-13T06:46:09.400Z"
}
```

### `previewMessages.store.json`

```json
[
  "1526117122613448814"
]
```

### `run.vbs`

```vbs
Set objShell = CreateObject("WScript.Shell")
objShell.CurrentDirectory = "D:\Project\Coding\Nausync Engine\Nausync Cloud"
objShell.Run "cmd /c node src\index.js >> bot-log.txt 2>&1", 0, False
```

### `src/commands.js`

```javascript
import { listDir, copyPath, movePath, deletePath, purgePath, resolveForRclone, createZip } from './fsops.js';
import { listRootNames, isConfidential, containsBlockedPath, safeResolve } from './pathGuard.js';
import { uploadToDrive } from './rclone.js';
import { config } from './config.js';
import fs from 'fs';
import path from 'node:path';
import os from 'node:os';
import { exec, spawn } from 'child_process';
import { promisify } from 'util';
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } from 'discord.js';
import { verifyPin, changePin, verifyAndRotatePin, sendAlertEmail } from './pinStore.js';

const execAsync = promisify(exec);

// --- Batas ukuran yang wajib PIN (copy/download/archive) ---
// Bukan cuma soal keamanan (cegah hacker yang berhasil masuk Discord asal
// copy/download berulang-ulang), tapi juga proteksi teknis: transfer file
// gede tanpa PIN gate bisa bikin bot ke-flood command yang sama berkali2
// (RAM/CPU numpuk dari beberapa proses rclone/compress paralel) dan bikin
// storage lokal + Google Drive penuh tak terkendali kalau di-spam.
const PIN_SIZE_THRESHOLD = 50 * 1024 * 1024; // 50MB

// Dipakai di command berbahaya (shutdown/restart/purge/dll): ambil argumen
// TERAKHIR sebagai PIN, verifikasi, dan return sisa argumen sebelumnya
// (argumen "asli" command itu, tanpa PIN-nya). Lempar Error kalau PIN
// salah/kosong/lockout — otomatis ke-catch oleh try/catch di handleCommand
// dan tampil sebagai balasan "Gagal: ...".
// `reason` dipakai buat 2 hal: (1) label di email rotasi PIN otomatis
// (lihat verifyAndRotatePin di pinStore.js), (2) label di email alert
// "command berhasil dieksekusi" yang dikirim SETELAH aksi command-nya
// benar-benar selesai (lihat pemanggilan sendAlertEmail di tiap case).
async function requirePin(args, reason) {
  if (args.length === 0) {
    throw new Error('Command ini butuh PIN keamanan di argumen terakhir. Contoh: `shutdown Ab3xQ9kZ`.');
  }
  const pin = args[args.length - 1];
  await verifyAndRotatePin(pin, reason);
  return args.slice(0, -1);
}

// Penanda versi kode yang sedang berjalan — tampil di log startup (index.js)
// dan di "help", supaya gampang mastiin apakah bot beneran udah pakai file
// commands.js terbaru atau masih versi lama (mis. abis edit tapi restart-nya
// gagal reload / salah file yang ditimpa). Naikkan angkanya tiap kali bikin
// perubahan besar ke command handling.
export const BUILD_TAG = 'cmds-v12-network-status';

// --- FITUR: "current directory" per sesi bot, biar user tidak perlu ketik ---
// path panjang berulang-ulang tiap mau list/copy/move/delete/download.
// Konsepnya mirip `cd` di terminal: sekali pindah folder dengan "cd <folder>",
// command lain (list, copy, move, delete, download) otomatis dianggap relatif
// terhadap folder itu, kecuali user awali dengan "/" (artinya relatif ke root
// BASE_DIR) atau pakai "..".
// State ini disimpan di memory proses (bukan per-user), cukup karena bot ini
// memang cuma dipakai 1 owner.
let currentDir = '.'; // relatif terhadap BASE_DIR, pakai format "/"

// Menyimpan hasil "list" TERAKHIR (array virtual path lengkap, urut sesuai
// nomor yang ditampilkan ke user), supaya user bisa merujuk item lewat
// nomornya pakai ":<angka>" alih-alih ngetik ulang nama folder/file yang
// panjang. Contoh: abis "list Documents" nampilin "2. 📁 Skripsi/", user
// bisa langsung "cd :2" tanpa ngetik "cd Skripsi".
//
// Sengaja pakai prefix ":" (bukan angka polos) karena ":" adalah salah satu
// karakter yang TIDAK VALID di nama file/folder Windows — jadi ":3" pasti
// tidak akan pernah tertukar/bentrok dengan nama file/folder asli yang
// kebetulan berupa angka. State ini di-reset tiap kali "list" baru
// dijalankan (bukan per-user, cukup karena bot ini cuma dipakai 1 owner).
let lastListing = [];

// Deteksi argumen berformat ":<angka>" (persis titik dua diikuti digit,
// tanpa apa pun lagi) dan terjemahkan jadi virtual path lengkap dari hasil
// "list" terakhir. Return null kalau inputPath bukan format index (berarti
// harus diproses sebagai path biasa oleh resolvePathArg).
function resolveIndexRef(inputPath) {
  const match = /^:(\d+)$/.exec(inputPath);
  if (!match) return null;

  if (lastListing.length === 0) {
    throw new Error('Belum ada hasil "list" yang bisa dirujuk pakai nomor. Jalankan "list" dulu.');
  }

  const idx = parseInt(match[1], 10) - 1;
  if (idx < 0 || idx >= lastListing.length) {
    throw new Error(`Nomor ":${match[1]}" tidak ada di hasil "list" terakhir (cuma ada 1-${lastListing.length}). Jalankan "list" lagi kalau perlu.`);
  }

  return lastListing[idx];
}

// Nyimpen ID pesan hasil "preview" yang masih "aktif" (belum di-clear), supaya
// command "clear" cuma hapus pesan-pesan itu — bukan seluruh riwayat chat.
//
// PENTING: array ini di-PERSIST ke file (bukan cuma di memory) — soalnya
// kalau bot di-restart, PC restart, atau mati listrik SEBELUM sempat
// "clear", array in-memory bakal ke-reset kosong padahal pesan preview-nya
// (termasuk yang berasal dari folder RAHASIA) MASIH kelihatan di riwayat
// chat Discord. Tanpa persist, bot jadi "lupa" ID pesan itu selamanya dan
// "clear" tidak akan pernah bisa menghapusnya lagi walau bot sudah nyala
// ulang. Dengan disimpan ke file, begitu bot start lagi, daftar ID lama
// otomatis ke-load kembali dan "clear" tetap bisa menghapusnya normal.
const PREVIEW_STORE_FILE = path.resolve('./previewMessages.store.json');

function loadPreviewMessages() {
  try {
    if (!fs.existsSync(PREVIEW_STORE_FILE)) return [];
    const raw = JSON.parse(fs.readFileSync(PREVIEW_STORE_FILE, 'utf-8'));
    return Array.isArray(raw) ? raw : [];
  } catch {
    // File corrupt/rusak -> jangan sampai bikin bot gagal start gara-gara
    // ini, cukup anggap kosong (skenario terburuknya cuma balik ke masalah
    // lama: preview lama harus dihapus manual).
    return [];
  }
}

function savePreviewMessages() {
  try {
    fs.writeFileSync(PREVIEW_STORE_FILE, JSON.stringify(previewMessages, null, 2), 'utf-8');
  } catch (err) {
    console.warn(`⚠️ Gagal simpan previewMessages.store.json: ${err.message}`);
  }
}

const previewMessages = loadPreviewMessages();

function displayDir() {
  return currentDir === '.' ? '/' : `/${currentDir}`;
}

// Sama seperti displayDir(), tapi buat virtual path arbitrer (bukan cuma
// currentDir) — dipakai di hasil copy/move/delete supaya yang ditampilkan
// ke user path VIRTUAL yang rapi ("/Documents/CV.pdf"), bukan path disk asli
// yang panjang ("D:\Users\Naufal Khalil\Documents\CV.pdf").
function toDisplayPath(virtualPath) {
  return virtualPath === '.' ? '/' : `/${virtualPath}`;
}

// Gabungkan sebuah argumen path yang diketik user dengan currentDir yang aktif.
// - "" atau "." -> currentDir apa adanya
// - diawali "/" -> dianggap relatif terhadap root BASE_DIR (bukan currentDir)
// - selain itu -> digabung dengan currentDir (mendukung "..", "../..", dst)
function resolvePathArg(inputPath) {
  if (!inputPath || inputPath === '.') return currentDir;

  // ":<angka>" -> rujuk langsung ke item bernomor itu dari hasil "list"
  // terakhir (virtual path lengkap, sudah relatif terhadap root sandbox,
  // BUKAN relatif terhadap currentDir) — jadi bisa langsung dipakai sebagai
  // hasil akhir, lewati logic gabung-dengan-currentDir di bawah.
  const indexTarget = resolveIndexRef(inputPath);
  if (indexTarget !== null) return indexTarget;

  const normalizedInput = inputPath.replace(/\\/g, '/');

  let combined;
  if (normalizedInput.startsWith('/')) {
    const stripped = normalizedInput.replace(/^\/+/, '');
    combined = stripped === '' ? '.' : path.posix.normalize(stripped);
  } else {
    const base = currentDir === '.' ? '' : currentDir;
    combined = path.posix.normalize(path.posix.join(base, normalizedInput));
  }

  if (combined === '' || combined === '.') return '.';

  // BUG FIX: kalau hasil gabungan path masih diawali "..", artinya user
  // mencoba naik lebih tinggi dari root sandbox (mis. "cd .." diulang
  // sampai lebih tinggi dari BASE_DIR, atau path absolut kayak "/../../etc").
  // Sebelumnya string ".." / "../.." ini lolos dan currentDir jadi rusak,
  // bikin navigasi berikutnya ("cd Project") ikut nyasar ke luar sandbox
  // (kadang sampai ke root drive Windows kalau safeResolve kebetulan tidak
  // menahannya). Clamp ke root ('.') di sini, jangan biarkan lolos sama sekali.
  if (combined === '..' || combined.startsWith('../')) return '.';

  return combined;
}

function buildHelpText() {
  const rootsList = listRootNames().map((name) => `• \`${name}\``).join('\n');

  return `**📦 Nausync Cloud** \`(${BUILD_TAG})\`

**Navigasi**
• \`cd <folder>\`
• \`cd ..\`
• \`root\`
• \`pwd\`
• \`list [folder]\`

**File**
• \`copy <src> <dst>\` 🔐*
• \`move <src> <dst>\` 🔐*
• \`delete <path>\` 🔐*
• \`purge <path> <pin>\` 🔐
• \`info <path>\`
• \`preview <path>\` 🔐*
• \`download <path>\` 🔐*
• \`archive <path>\` 🔐*
• \`clear\`

**Laptop**
• \`baterai\`
• \`disk\`
• \`network\` 🔐*
• \`mode server\`
• \`mode hemat\`
• \`shutdown <pin>\` 🔐
• \`restart <pin>\` 🔐
• \`cancel\`

**Keamanan**
• \`chgpin <pin_lama>\` 🔐

🔐 = selalu butuh PIN keamanan.
🔐* = butuh PIN CUMA kalau kondisi tertentu terpenuhi (cek \`?copy\`/\`?move\`/\`?preview\`/\`?download\`/\`?archive\`/\`?network\`).
PIN dikirim ke email, cek \`?chgpin\`.

Ketik \`?<command>\` buat penjelasan detail tiap command, mis. \`?root\`.

**Folder root:**
${rootsList}`;
}

// Penjelasan detail per-command, sengaja TIDAK dimasukkan ke "help" utama
// (biar "help" tetap ringkas) — cuma bisa diakses lewat command tersembunyi
// "?<nama>", mis. "?pwd" atau "?download". Prefix "?" dipilih dengan alasan
// sama seperti ":" di lastListing: karakter ini TIDAK VALID di nama file
// Windows, jadi "?pwd" nggak akan pernah tertukar dengan path/nama asli.
const DETAILED_HELP = {
  help: '**help** — daftar command\nNampilin daftar semua command yang ada (ringkas). Buat penjelasan detail cara pakai command tertentu, ketik `?<command>`, mis. `?cd` atau `?download`. Dua aturan umum yang berlaku ke hampir semua command: (1) path yang kamu ketik itu relatif ke folder aktif (`pwd`), awali dengan `/` kalau mau langsung dari root, mis. `list /Documents/Kerja`; (2) abis `list`, tiap item dapat nomor yang bisa dirujuk pakai `:<nomor>` di command berikutnya, mis. `cd :2`.',

  pwd: '**pwd** — lihat folder aktif\nNunjukin folder mana yang lagi "aktif" sekarang (hasil `cd` terakhir), biar nggak perlu inget-inget sendiri lagi di mana. Semua command lain (list/copy/move/delete/download/preview) yang argumennya bukan path lengkap otomatis dianggap relatif ke folder aktif ini.',

  cd: '**cd** — pindah folder aktif (atau preview kalau target file)\n`cd <folder>` pindah ke folder itu (relatif ke folder aktif sekarang). `cd ..` naik satu tingkat, nggak bisa naik lebih tinggi dari root sandbox. Awali path dengan `/` buat langsung loncat dari root virtual, mis. `cd /Documents/Kerja`. Bisa juga pakai nomor dari `list` terakhir: `cd :2`. 🆕 Kalau targetnya ternyata FILE (bukan folder), `cd` otomatis jadi shortcut buat lihat file itu (attachment apa adanya, sama kayak preview versi lama) — cocok kalau cuma mau intip cepat. Tetap butuh PIN kalau file-nya di folder RAHASIA atau ukurannya ≥50MB: `cd <file> <pin>`.',

  root: '**root** — langsung balik ke root sandbox\nDipakai kalau folder aktif sekarang udah jauh nyasar ke dalam (mis. `/Documents/Kerja/2024/Laporan`) dan mau langsung balik ke root virtual tanpa `cd ..` berkali-kali atau ngetik `cd /`. Sama persis efeknya kayak `cd /`, cuma lebih singkat.',

  list: '**list** — lihat isi folder\n`list` tanpa argumen nampilin isi folder aktif; `list <folder>` nampilin folder lain tanpa perlu pindah ke situ dulu. Tiap item dapat nomor urut yang bisa dirujuk pakai `:<nomor>` di command berikutnya (cd/copy/move/delete/download/preview/archive). Kalau isinya kepanjangan buat 1 pesan Discord, otomatis dipecah jadi beberapa halaman pakai tombol ◀️▶️.',

  copy: '**copy** — copy file/folder\n`copy <src> <dst>` — src & dst boleh nama folder/file biasa, path lengkap (`/Documents/x`), atau nomor dari `list` terakhir (`:3`). Folder di-copy beserta isinya (recursive). File asal tidak terhapus. 🔒 Wajib tambah PIN di argumen terakhir (`copy <src> <dst> <pin>`) kalau src ada di folder RAHASIA (CONFIDENTIAL_PATHS) dan/atau ukurannya ≥50MB — mencegah bot crash/storage penuh, mencegah copy berulang-ulang kalau Discord-mu kena hack, dan mencegah data rahasia diduplikat diam-diam ke lokasi bebas.',

  archive: '**archive** — compress ke .zip lalu upload\n`archive <path>` mengompres file/folder itu jadi satu file `.zip`, upload ke Google Drive (folder staging), lalu file `.zip` LOKAL langsung dihapus permanen begitu upload selesai (sukses ATAU gagal — nggak dibiarkan numpuk). Cocok buat folder isinya banyak file kecil, biar upload-nya 1 koneksi aja (lebih hemat bandwidth & waktu dibanding `download` biasa file satu-satu). 🔒 Kalau ukuran ASLI (sebelum di-zip) ≥50MB, atau file-nya ada di folder RAHASIA, wajib PIN: `archive <path> <pin>`.',

  move: '**move** — pindah/rename file/folder\n`move <src> <dst>` — sama aturan path-nya kayak `copy`, tapi file asal berpindah (bukan diduplikat), jadi juga dipakai buat rename (`move CV.pdf "CV Baru.pdf"`). Folder root yang diizinkan sendiri (mis. seluruh "Documents") nggak bisa dipindah/di-rename, cuma isinya. 🔒 Wajib PIN (`move <src> <dst> <pin>`) kalau src ada di folder RAHASIA dan/atau ukurannya ≥50MB — sama gatenya kayak `copy`.',

  delete: '**delete** — hapus file/folder (TIDAK permanen)\n`delete <path>` mindahin file/folder itu ke folder ".trash" tersembunyi di root yang sama — bukan dihapus dari disk. Folder ".trash" ini sengaja disembunyikan dari `list`, tapi tetap bisa diakses manual lewat path kalau perlu ambil balik isinya (mis. `list Documents/.trash`). Item di trash otomatis dihapus PERMANEN setelah beberapa hari (lihat `?purge`) kalau tidak dipulihkan manual duluan. Folder root yang diizinkan sendiri nggak bisa dihapus, cuma isinya. 🔒 Wajib PIN (`delete <path> <pin>`) kalau path-nya ada di folder RAHASIA (CONFIDENTIAL_PATHS) — sama gatenya kayak `copy`/`move`, dan tiap penghapusan folder rahasia dikirim alert ke email. Buat hapus beneran permanen SEKARANG JUGA (bukan nunggu retensi), pakai `purge`.',

  purge: '**purge** — hapus PERMANEN (butuh PIN + konfirmasi)\n`purge <path> <pin>` beda sama `delete` — ini langsung hapus dari disk, TIDAK masuk ".trash", TIDAK BISA dibatalkan. Sekarang butuh PIN keamanan di argumen terakhir (lihat `?chgpin`), baru setelah itu bot nanya konfirmasi tombol "Ya, Hapus Permanen" / "Batal". Dua lapis ini sengaja dipasang karena `purge` paling merusak & tidak bisa diundo.\n\nCatatan: item yang sudah masuk ".trash" lewat `delete` juga otomatis kena "purge" versi OTOMATIS setelah beberapa hari (default 30 hari, atur lewat `TRASH_RETENTION_DAYS` di .env) — sweep ini jalan sekali sehari, dan owner selalu dapat email ringkasan kalau ada yang benar-benar terhapus permanen lewat jalur ini.',

  cancel: '**cancel** — batalkan shutdown/restart yang masih pending\n`cancel` menghentikan proses shutdown/restart yang lagi dalam masa tunggu 15 detik (mis. abis ketik `shutdown <pin>` tapi berubah pikiran). TIDAK butuh PIN, karena ini aksi yang MENGURANGI risiko, bukan menambah. Kalau tidak ada shutdown/restart yang pending, bot bakal bilang gagal — itu wajar.',

  info: '**info** — lihat detail file/folder\n`info <path>` nampilin tipe (file/folder), ukuran total (folder dihitung rekursif termasuk semua isinya), jumlah item di dalam (kalau folder), dan tanggal terakhir diubah. Berguna buat ngecek ukuran sebelum `download`/`copy`, tanpa perlu buka/list dulu.',

  preview: '**preview** — lihat file langsung di chat\n`preview <path>` nampilin file itu LANGSUNG di Discord: gambar dikirim sebagai attachment (Discord otomatis render inline, kebuka tanpa perlu diklik), file TEKS (.txt/.md/.json/.js/.log/dst, sampai ~512KB) isinya dibaca & ditampilkan langsung sebagai embed (nggak perlu download buat baca), tipe lain (PDF/docx/zip/dst) tetap dikirim sebagai attachment biasa. Cuma buat FILE (bukan folder — pakai `list` buat lihat isi folder), dan ukurannya dibatasi ~8MB (limit attachment Discord) — file lebih besar pakai `download` atau `archive`. 🔒 Wajib PIN (`preview <path> <pin>`) kalau file-nya ada di folder RAHASIA (CONFIDENTIAL_PATHS di .env) — tiap akses (berhasil/gagal) otomatis dikirim alert ke email. Shortcut cepat: `cd <file>` juga bisa dipakai buat preview versi attachment-apa-adanya.',

  download: '**download** — upload ke Google Drive\n`download <path>` ngirim file/folder ke folder staging Google Drive lewat rclone, sambil nampilin progress bar yang di-update tiap beberapa detik. Sebelum mulai, bot ngecek dulu sisa kapasitas Drive kamu — kalau kurang, upload ditolak duluan (nggak ada percobaan yang gagal setengah jalan). 🔒 Wajib tambah PIN di argumen terakhir (`download <path> <pin>`) kalau target ada di folder RAHASIA (CONFIDENTIAL_PATHS) dan/atau ukurannya ≥50MB — mencegah bot crash/storage Drive penuh, mencegah download berulang-ulang kalau Discord-mu kena hack, dan mencegah data rahasia disalin keluar diam-diam. Folder isinya banyak file kecil? Pertimbangkan `archive` biar lebih hemat bandwidth.',

  clear: '**clear** — bersihin pesan preview\nHapus semua pesan hasil `preview` yang masih "tercatat" di sesi ini. Aman — cuma nyentuh pesan preview, command/chat lain nggak ikut kehapus.',

  baterai: '**baterai** — cek status baterai laptop\nNampilin persentase baterai, lagi di-cas atau tidak, dan mode power yang lagi aktif (Server/Hemat/Custom). Kalau laptopnya PC desktop tanpa baterai, bakal dikasih tahu juga.',

  disk: '**disk** — cek sisa storage laptop\nNampilin total, terpakai, dan sisa kapasitas tiap drive lokal fisik di laptop (mis. C:, D:) — beda sama sisa kapasitas Google Drive yang dicek otomatis pas `download`. Berguna dicek sebelum `copy`/`move` file besar biar nggak kehabisan space di tengah proses.',

  network: '**network** — cek status koneksi jaringan\nNampilin semua koneksi aktif (Wi-Fi/LAN): nama jaringan, kategori (🔒 Privat/🌍 Publik/🏢 Domain), status internet, dan sinyal Wi-Fi. 🔒 Detail teknis (IP lokal, gateway, DNS, link speed, MAC) disembunyikan default & wajib PIN: `network detail <pin>` (atau `network -v <pin>`).',

  mode: '**mode** — atur power plan laptop\n`mode server` bikin laptop nggak pernah sleep/hibernate (buat proses upload/download besar yang lama). `mode hemat` balikin ke default harian (sleep 15 menit, hibernate 3 jam). Ada verifikasi otomatis abis diubah, biar ketahuan kalau ada Group Policy/app lain yang nge-override.',

  shutdown: '**shutdown** — matikan laptop dari jarak jauh (butuh PIN)\n`shutdown <pin>` — laptop mati dalam 15 detik setelah command diterima & PIN valid. Koneksi bot otomatis terputus begitu laptop mati — bot baru aktif lagi kalau laptopnya dinyalain manual (kecuali kamu punya cara nyalain jarak jauh di luar bot ini, mis. Wake-on-LAN). PIN wajib supaya kalau Discord-mu kena hack, penyerang tidak bisa asal matiin laptop.',

  restart: '**restart** — restart laptop dari jarak jauh (butuh PIN)\n`restart <pin>` — sama kayak `shutdown` (15 detik delay, wajib PIN), bedanya laptop nyala lagi otomatis setelah Windows selesai booting, dan bot Nausync Cloud ikut aktif lagi otomatis (asalkan sudah di-setting auto-start lewat Task Scheduler).',

  chgpin: '**chgpin** — ganti PIN keamanan secara manual\n`chgpin <pin_lama>` — generate PIN baru secara acak (8 karakter, campur huruf besar/kecil & angka) & kirim ke email alert-mu (terpisah dari Discord), lalu PIN lama langsung tidak berlaku. Butuh PIN LAMA yang benar dulu (sama seperti ganti password pakai password lama). Selain lewat command ini, PIN juga OTOMATIS berganti sendiri (sekali pakai) setiap kali dipakai buat `shutdown`/`restart`/`purge`/`copy`/`move`/`download`/`archive`/preview folder rahasia, DAN otomatis diganti tiap 90 hari walau tidak pernah dipakai sama sekali (rotasi berbasis umur, cegah satu PIN beredar terlalu lama) — jadi `chgpin` ini cuma perlu dipakai kalau kamu mau ganti PIN kapan pun TANPA nunggu salah satu dari dua rotasi otomatis itu. Kalau salah PIN 5x berturut-turut, bot otomatis lockout 15 menit & kirim email alert — kalau ini kejadian padahal bukan kamu yang coba, segera amankan akun Discord-mu.',

  ':': '**Shortcut nomor (`:<angka>`)**\nAbis jalanin `list`, tiap item dapat nomor urut. Command berikutnya (cd/copy/move/delete/download/preview) bisa langsung rujuk nomor itu pakai `:<angka>` alih-alih ngetik ulang nama folder/file yang panjang — mis. `list` lalu `cd :2`, atau `copy :3 Downloads`. Nomornya ngikutin hasil `list` yang PALING TERAKHIR dijalankan.',
};

function getDetailedHelp(cmdName) {
  const entry = DETAILED_HELP[cmdName];
  if (entry) return entry;

  const topics = Object.keys(DETAILED_HELP).filter((k) => k !== ':').sort().join(', ');
  return `❓ Belum ada penjelasan detail buat "${cmdName}".\nTopik yang tersedia: ${topics} (juga \`?:\` buat shortcut nomor).`;
}


function tokenize(text) {
  // Normalisasi smart quotes (‘’“”) jadi straight quotes ('") — keyboard HP
  // (iOS/Android) sering auto-convert " jadi " " saat mengetik, yang bikin
  // regex quote-matching di bawah gagal cocok
  const normalized = text
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2018\u2019]/g, "'");

  const regex = /"([^"]+)"|(\S+)/g;
  const tokens = [];
  let match;
  while ((match = regex.exec(normalized)) !== null) {
    // Ambil string murni dari hasil regex matching teks
    tokens.push(match[1] ?? match[2]);
  }
  return tokens;
}

function getLocalSize(path) {
  if (!fs.existsSync(path)) return 0;
  const stats = fs.statSync(path);
  if (stats.isFile()) return stats.size;
  let totalSize = 0;
  try {
    const files = fs.readdirSync(path);
    for (const file of files) {
      totalSize += getLocalSize(`${path}/${file}`);
    }
  } catch { return 0; }
  return totalSize;
}

function getDriveFreeSpace() {
  return new Promise((resolve) => {
    exec(`rclone about "${config.rcloneRemote}:" --json`, (err, stdout) => {
      if (err) return resolve(Infinity);
      try {
        const data = JSON.parse(stdout.toString());
        resolve(data.free || 0);
      } catch { resolve(Infinity); }
    });
  });
}

// Jalankan satu perintah powercfg, tangkap error/stderr-nya (jangan fire-and-forget)
// Pakai path absolut karena PATH environment proses Node (mis. dijalankan via
// Task Scheduler/service) kadang tidak menyertakan C:\Windows\System32
const POWERCFG_PATH = 'C:\\Windows\\System32\\powercfg.exe';

async function runPowercfg(args) {
  try {
    const { stdout, stderr } = await execAsync(`"${POWERCFG_PATH}" ${args}`);
    if (stderr && stderr.trim()) {
      throw new Error(stderr.trim());
    }
    return { ok: true, output: stdout.trim() };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

// Baca ulang nilai timeout yang benar-benar tersimpan di skema aktif, untuk verifikasi
async function getStandbyMinutes() {
  try {
    const { stdout } = await execAsync(`"${POWERCFG_PATH}" /query SCHEME_CURRENT SUB_SLEEP STANDBYIDLE`);
    const match = stdout.match(/Current AC Power Setting Index:\s*0x([0-9a-fA-F]+)/i);
    if (!match) return null;
    return Math.round(parseInt(match[1], 16) / 60);
  } catch {
    return null;
  }
}

// Baca info baterai lewat PowerShell (Win32_Battery via CIM). Pakai path
// absolut dengan alasan sama seperti POWERCFG_PATH: PATH env proses Node
// (mis. dijalankan via Task Scheduler/service) kadang tidak lengkap.
const POWERSHELL_PATH = 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe';

// Referensi nilai BatteryStatus (WMI Win32_Battery):
// 1=Discharging, 2=AC/tidak diketahui, 3=Fully Charged, 4=Low, 5=Critical,
// 6=Charging, 7=Charging & High, 8=Charging & Low, 9=Charging & Critical,
// 10=Undefined, 11=Partially Charged
function describeBatteryStatus(status) {
  const map = {
    1: { charging: false, label: 'Discharging' },
    2: { charging: false, label: 'AC tersambung' },
    3: { charging: false, label: 'Fully Charged (penuh)' },
    4: { charging: false, label: 'Low' },
    5: { charging: false, label: 'Critical' },
    6: { charging: true, label: 'Charging' },
    7: { charging: true, label: 'Charging (High)' },
    8: { charging: true, label: 'Charging (Low)' },
    9: { charging: true, label: 'Charging (Critical)' },
    10: { charging: false, label: 'Undefined' },
    11: { charging: false, label: 'Partially Charged' },
  };
  return map[status] || { charging: false, label: 'Tidak diketahui' };
}

async function getBatteryInfo() {
  const { stdout } = await execAsync(
    `"${POWERSHELL_PATH}" -NoProfile -NonInteractive -Command "Get-CimInstance -ClassName Win32_Battery | Select-Object EstimatedChargeRemaining,BatteryStatus | ConvertTo-Json -Compress"`
  );
  const trimmed = stdout.trim();
  if (!trimmed) return null; // biasanya berarti tidak ada baterai (PC desktop)

  const parsed = JSON.parse(trimmed);
  const battery = Array.isArray(parsed) ? parsed[0] : parsed;
  if (!battery || battery.EstimatedChargeRemaining === undefined) return null;
  return battery;
}

// Terjemahkan nilai standby timeout (AC) jadi label mode yang dikenal user,
// berdasarkan nilai yang di-set oleh command "mode server" (0 menit) dan
// "mode hemat" (15 menit). Kalau nilainya beda (mis. diubah manual lewat
// Settings Windows), tampilkan sebagai "Custom" biar tidak menyesatkan.
function describePowerMode(minutes) {
  if (minutes === null) return '❓ Tidak diketahui (gagal membaca setting power)';
  if (minutes === 0) return '🖥️ Mode Server (layar/sleep tidak pernah mati)';
  if (minutes === 15) return '🔋 Mode Hemat (sleep otomatis setelah 15 menit idle)';
  return `⚙️ Custom (standby timeout: ${minutes} menit, bukan dari "mode server"/"mode hemat")`;
}

// Baca info kapasitas semua drive fisik lokal yang "fixed" (DriveType 3 —
// bukan removable/CD/network), lewat PowerShell (Win32_LogicalDisk via CIM).
// Dipakai buat command "disk" — beda dari getDriveFreeSpace() yang ngecek
// sisa kapasitas Google Drive REMOTE (dipakai command "download").
async function getDiskInfo() {
  const { stdout } = await execAsync(
    `"${POWERSHELL_PATH}" -NoProfile -NonInteractive -Command "Get-CimInstance -ClassName Win32_LogicalDisk | Where-Object { $_.DriveType -eq 3 } | Select-Object DeviceID,Size,FreeSpace | ConvertTo-Json -Compress"`
  );
  const trimmed = stdout.trim();
  if (!trimmed) return [];
  const parsed = JSON.parse(trimmed);
  return Array.isArray(parsed) ? parsed : [parsed];
}

function formatBytes(bytes) {
  if (bytes === Infinity || bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// --- Info jaringan (command "network") ---
//
// Sumber data: "Get-NetConnectionProfile" (PowerShell) — satu entry per
// KONEKSI JARINGAN AKTIF (bisa lebih dari satu sekaligus, mis. laptop
// nyambung Wi-Fi DAN Ethernet bersamaan). Digabung dengan "Get-NetAdapter"
// (buat tahu tipe fisiknya: Wi-Fi atau Ethernet, status adapter, kecepatan
// link, MAC) dan "Get-NetIPConfiguration" (buat IP lokal, gateway, DNS).
//
// Kenapa tidak cuma "netsh wlan show interfaces"? Karena itu CUMA nampilin
// info Wi-Fi (Ethernet tidak kebaca sama sekali), dan output teksnya
// ter-LOKALISASI (label bahasa Inggris vs Indonesia beda tergantung setting
// Windows) jadi rawan salah parse. Get-NetConnectionProfile dkk itu
// terstruktur (properti .NET, bukan teks bebas) jadi jauh lebih stabil buat
// data UTAMA. netsh cuma dipakai sebagai TAMBAHAN opsional (buat sinyal
// Wi-Fi %), dengan parsing yang sengaja longgar (lihat parseWifiSignal)
// supaya tetap aman walau gagal cocok — bagian penting (kategori jaringan,
// IP, dll) tidak bergantung sama sekali ke netsh.
function isWifiMediaType(physicalMediaType) {
  return typeof physicalMediaType === 'string' && /802\.11|wireless/i.test(physicalMediaType);
}

// Parsing longgar buat ambil persentase sinyal Wi-Fi dari "netsh wlan show
// interfaces". Sengaja dibuat best-effort (bukan sumber data utama) karena
// output netsh ter-lokalisasi — label "Signal" bisa jadi "Sinyal" dsb
// tergantung bahasa Windows-nya. Kalau gagal cocok, return null dan command
// "network" tetap jalan normal tanpa baris sinyal (bukan error).
function parseWifiSignal(netshOutput) {
  const signalMatch = /^\s*(?:Signal|Sinyal)\s*:\s*(\d{1,3})%/im.exec(netshOutput);
  const radioMatch = /^\s*(?:Radio type|Jenis radio|Tipe radio)\s*:\s*(.+)$/im.exec(netshOutput);
  return {
    signalPercent: signalMatch ? parseInt(signalMatch[1], 10) : null,
    radioType: radioMatch ? radioMatch[1].trim() : null,
  };
}

// Script PowerShell buat command "network" ditulis ke file sementara lalu
// dijalankan lewat "-File" (bukan "-Command" satu baris) — SENGAJA begini,
// bukan gaya "-Command" satu baris seperti getDiskInfo/getBatteryInfo di
// atas, karena script ini punya percabangan if/else & assignment variabel
// bertingkat yang gampang salah parse kalau dipaksa jadi satu baris pakai
// titik-koma (terutama assignment hasil if/else ke dalam hashtable literal,
// yang butuh sintaks tambahan $(...) kalau dipaksa satu baris). Nulis ke
// file .ps1 asli menghindari seluruh masalah escaping/separator itu sama
// sekali — jauh lebih gampang dibaca & dipastikan benar.
const NETWORK_SCRIPT_PATH = path.join(os.tmpdir(), 'nausync-network-info.ps1');

const NETWORK_PS_SCRIPT = `
$profiles = Get-NetConnectionProfile
$result = foreach ($p in $profiles) {
  $adapter = Get-NetAdapter -InterfaceIndex $p.InterfaceIndex -ErrorAction SilentlyContinue
  $ipcfg = Get-NetIPConfiguration -InterfaceIndex $p.InterfaceIndex -ErrorAction SilentlyContinue
  $ipv4 = ($ipcfg.IPv4Address | Select-Object -First 1).IPAddress
  $gateway = ($ipcfg.IPv4DefaultGateway | Select-Object -First 1).NextHop
  $dns = @($ipcfg.DNSServer | Where-Object { $_.AddressFamily -eq 2 } | Select-Object -ExpandProperty ServerAddresses)

  $adapterStatus = $null
  $physicalMedia = $null
  $linkSpeed = $null
  $macAddress = $null
  if ($adapter) {
    $adapterStatus = $adapter.Status.ToString()
    $physicalMedia = $adapter.PhysicalMediaType
    $linkSpeed = $adapter.LinkSpeed
    $macAddress = $adapter.MacAddress
  }

  [PSCustomObject]@{
    Name = $p.Name
    InterfaceAlias = $p.InterfaceAlias
    NetworkCategory = $p.NetworkCategory.ToString()
    IPv4Connectivity = $p.IPv4Connectivity.ToString()
    IPv6Connectivity = $p.IPv6Connectivity.ToString()
    AdapterStatus = $adapterStatus
    PhysicalMediaType = $physicalMedia
    LinkSpeed = $linkSpeed
    MacAddress = $macAddress
    IPv4Address = $ipv4
    Gateway = $gateway
    DNSServers = $dns
  }
}
$result | ConvertTo-Json -Compress -Depth 4
`;

// Tulis script sekali aja saat module di-load (bukan tiap kali command
// "network" dipanggil) — isinya statis, tidak pernah berubah saat runtime.
try {
  fs.writeFileSync(NETWORK_SCRIPT_PATH, NETWORK_PS_SCRIPT, 'utf-8');
} catch (err) {
  console.warn(`⚠️ Gagal menyiapkan script network-info.ps1: ${err.message}. Command "network" mungkin gagal.`);
}

async function getNetworkInfo() {
  const { stdout } = await execAsync(
    `"${POWERSHELL_PATH}" -NoProfile -NonInteractive -ExecutionPolicy Bypass -File "${NETWORK_SCRIPT_PATH}"`
  );

  const trimmed = stdout.trim();
  if (!trimmed) return [];

  const parsed = JSON.parse(trimmed);
  const profiles = (Array.isArray(parsed) ? parsed : [parsed]).map((p) => ({
    ...p,
    DNSServers: Array.isArray(p.DNSServers) ? p.DNSServers : (p.DNSServers ? [p.DNSServers] : []),
    isWifi: isWifiMediaType(p.PhysicalMediaType),
  }));

  // Kalau ada minimal satu koneksi Wi-Fi, coba perkaya dengan sinyal % dari
  // netsh (best-effort, lihat parseWifiSignal). Cukup dipanggil sekali
  // (bukan per-profile) karena hampir semua laptop cuma punya 1 adapter
  // Wi-Fi fisik; kalaupun gagal/tidak cocok, profile Wi-Fi tetap tampil
  // tanpa baris sinyal.
  if (profiles.some((p) => p.isWifi)) {
    try {
      const { stdout: netshOut } = await execAsync('netsh wlan show interfaces');
      const wifiExtra = parseWifiSignal(netshOut);
      for (const p of profiles) {
        if (p.isWifi) {
          p.signalPercent = wifiExtra.signalPercent;
          p.radioType = wifiExtra.radioType;
        }
      }
    } catch {
      // netsh gagal/tidak tersedia -> lewati saja, bukan fatal buat command "network"
    }
  }

  return profiles;
}

function describeNetworkCategory(category) {
  switch (category) {
    case 'Public':
      return '🌍 **Publik** — laptop ini disembunyikan dari perangkat lain di jaringan yang sama (lebih aman dipakai di Wi-Fi umum/kafe/hotel)';
    case 'Private':
      return '🔒 **Privat** — laptop ini bisa "ditemukan" perangkat lain di jaringan yang sama (cocok untuk Wi-Fi/LAN rumah sendiri yang dipercaya, TAPI berisiko kalau ternyata dipakai di jaringan publik)';
    case 'DomainAuthenticated':
      return '🏢 **Domain** — jaringan kantor/organisasi yang terkelola (Active Directory)';
    default:
      return `❓ ${category || 'Tidak diketahui'}`;
  }
}

function describeConnectivity(v4, v6) {
  if (v4 === 'Internet' || v6 === 'Internet') return '✅ Terhubung ke Internet';
  if (v4 === 'LocalNetwork' || v6 === 'LocalNetwork') return '⚠️ Cuma nyambung ke jaringan lokal (tidak ada akses Internet)';
  if (v4 === 'NoTraffic' || v6 === 'NoTraffic') return '⚠️ Nyambung tapi belum ada traffic terdeteksi';
  return '❌ Tidak terhubung';
}

// Default-nya CUMA nampilin info inti yang relevan buat tujuan command ini
// (cek nyambung ke jaringan apa & privat/publik apa nggak): tipe koneksi,
// nama jaringan, kategori, status internet, dan sinyal Wi-Fi kalau ada.
//
// IP lokal/gateway/DNS/link speed/MAC address SENGAJA disembunyikan di
// mode default — bukan karena itu rahasia besar (IP lokal/gateway/DNS
// cuma alamat privat, tidak bisa diakses dari luar LAN sama sekali, dan
// MAC address cuma berguna buat orang yang SUDAH ada di jaringan fisik
// yang sama), tapi karena tidak ada gunanya buat pertanyaan "lagi nyambung
// ke jaringan apa" — dan prinsip "jangan tampilkan lebih dari yang
// dibutuhkan" tetap berlaku walau risikonya rendah, apalagi MAC address
// bisa dipakai buat fingerprinting perangkat kalau suatu saat histori
// chat ini kebaca orang lain (mis. Discord kena hack). Detail teknis ini
// tetap tersedia buat troubleshooting lewat `network detail`.
function formatNetworkProfile(p, verbose) {
  const typeLabel = p.isWifi ? '📶 Wi-Fi' : '🔌 LAN (Ethernet)';
  const lines = [
    `${typeLabel} — **${p.Name || p.InterfaceAlias || 'Tidak diketahui'}**`,
    `• Kategori jaringan: ${describeNetworkCategory(p.NetworkCategory)}`,
    `• Status: ${describeConnectivity(p.IPv4Connectivity, p.IPv6Connectivity)}`,
  ];
  if (p.isWifi && p.signalPercent !== null && p.signalPercent !== undefined) {
    lines.push(`• Sinyal Wi-Fi: **${p.signalPercent}%**`);
  }

  if (!verbose) return lines.join('\n');

  lines.push(`• Interface: \`${p.InterfaceAlias}\`${p.AdapterStatus ? ` (${p.AdapterStatus})` : ''}`);
  if (p.IPv4Address) lines.push(`• IP Lokal: \`${p.IPv4Address}\``);
  if (p.Gateway) lines.push(`• Gateway: \`${p.Gateway}\``);
  if (p.DNSServers && p.DNSServers.length) lines.push(`• DNS: ${p.DNSServers.map((d) => `\`${d}\``).join(', ')}`);
  if (p.LinkSpeed) lines.push(`• Kecepatan Link: ${p.LinkSpeed}`);
  if (p.isWifi && p.radioType) lines.push(`• Radio: ${p.radioType}`);
  if (p.MacAddress) lines.push(`• MAC Address: \`${p.MacAddress}\``);
  return lines.join('\n');
}

// Ekstensi yang dianggap "gambar" — dikirim sebagai attachment biasa,
// karena Discord SUDAH otomatis render attachment gambar inline (jadi
// nggak perlu ditangani khusus lagi, beda sama dulu yang cuma nampilin path).
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg']);

// Ekstensi yang dianggap "teks" — isinya dibaca & ditampilkan LANGSUNG di
// embed Discord (bukan cuma dikirim sebagai attachment yang harus diklik
// dulu buat baca isinya).
const TEXT_EXTENSIONS = new Set([
  '.txt', '.md', '.json', '.js', '.ts', '.jsx', '.tsx', '.csv', '.log',
  '.yml', '.yaml', '.xml', '.html', '.css', '.ini', '.py', '.java',
  '.c', '.cpp', '.sh', '.bat', '.env.example',
]);

// Batas umum attachment Discord buat bot non-boost server (~8MB). DM
// pribadi biasanya ikut batas yang sama.
const MAX_PREVIEW_SIZE = 8 * 1024 * 1024;

// Batas file teks yang masih nyaman dibaca lewat embed (jauh di bawah
// MAX_PREVIEW_SIZE) — di atas ini, baca isinya lebih enak lewat download.
const MAX_TEXT_PREVIEW_SIZE = 512 * 1024;

// Embed Discord dibatasi ~4096 karakter di field "description" — dikasih
// buffer di bawahnya biar aman dari batas persis.
const MAX_TEXT_EMBED_CHARS = 3500;

// Preview "LAMA" — kirim file APA ADANYA sebagai attachment Discord (foto
// otomatis kebuka inline, dokumen lain bisa didownload dari chat). Ini
// behavior preview versi sebelumnya, sekarang dipertahankan sebagai
// fallback buat tipe file yang bukan gambar/teks, dan dipakai langsung oleh
// shortcut "cd <file>".
async function sendAttachmentPreview(absPath, dscMessage, stats) {
  if (stats.size > MAX_PREVIEW_SIZE) {
    return `❌ File terlalu besar untuk preview (*${formatBytes(stats.size)}*, batas ~8MB). Pakai "download" atau "archive" untuk kirim ke Google Drive.`;
  }

  const fileName = path.basename(absPath);
  const sentMsg = await dscMessage.reply({
    content: `👀 **Preview:** \`${fileName}\` (${formatBytes(stats.size)})`,
    files: [{ attachment: absPath, name: fileName }],
  });

  previewMessages.push(sentMsg.id);
  savePreviewMessages();
  return null;
}

// Preview "BARU" — gambar tetap dikirim sebagai attachment (Discord
// otomatis render inline), tapi file TEKS dibaca isinya & ditampilkan
// LANGSUNG sebagai embed (nggak perlu klik/download lagi buat baca
// kontennya). Tipe lain (PDF/docx/zip/dst) fallback ke attachment biasa.
async function sendRichPreview(absPath, dscMessage, stats) {
  const ext = path.extname(absPath).toLowerCase();
  const fileName = path.basename(absPath);

  if (TEXT_EXTENSIONS.has(ext) && stats.size <= MAX_TEXT_PREVIEW_SIZE) {
    const raw = await fs.promises.readFile(absPath, 'utf-8').catch(() => null);
    if (raw !== null) {
      const truncated = raw.length > MAX_TEXT_EMBED_CHARS;
      const body = truncated ? raw.slice(0, MAX_TEXT_EMBED_CHARS) : raw;
      const lang = ext.replace('.', '');

      const embed = {
        title: `📄 ${fileName}`,
        description: '```' + lang + '\n' + body + '\n```' +
          (truncated ? `\n_(dipotong — cuma ${MAX_TEXT_EMBED_CHARS} karakter pertama dari ${raw.length}, pakai "download" buat isi lengkap)_` : ''),
        color: 0x2b6cff,
        footer: { text: formatBytes(stats.size) },
      };

      const sentMsg = await dscMessage.reply({ embeds: [embed] });
      previewMessages.push(sentMsg.id);
      savePreviewMessages();
      return null;
    }
    // Gagal dibaca sebagai UTF-8 (mis. ternyata bukan teks murni) -> fallback
  }

  // Gambar & tipe lain (termasuk teks yang kegedean buat embed) -> attachment biasa
  return sendAttachmentPreview(absPath, dscMessage, stats);
}

// Logic bersama buat command "preview" dan shortcut "cd <file>": validasi
// path, cek PIN (folder RAHASIA dan/atau ukuran ≥50MB), kirim alert email
// kalau relevan, lalu dispatch ke mode tampilan yang sesuai ('rich' buat
// command preview biasa, 'legacy' buat shortcut cd-ke-file).
async function runPreview(args, dscMessage, mode) {
  if (args.length < 1) return 'Format: `preview <path>` (atau `preview <path> <pin>` kalau file-nya rahasia/besar)';
  if (!dscMessage) return 'Fitur preview cuma bisa dipakai lewat Discord.';

  const targetPath = resolvePathArg(args[0]);
  const absPath = resolveForRclone(targetPath);

  if (!fs.existsSync(absPath)) return `❌ File tidak ditemukan.`;

  const stats = fs.statSync(absPath);
  if (stats.isDirectory()) {
    return `❌ "${args[0]}" adalah folder, bukan file. Pakai "list" untuk lihat isinya.`;
  }

  const needsConfidentialPin = isConfidential(absPath);
  const needsSizePin = stats.size >= PIN_SIZE_THRESHOLD;

  if (needsConfidentialPin || needsSizePin) {
    if (args.length < 2) {
      const label = needsConfidentialPin
        ? `🔒 **Data ini bersifat RAHASIA.** File \`${toDisplayPath(targetPath)}\` ada di folder yang ditandai rahasia — butuh PIN keamanan buat preview.`
        : `🔒 **Ukuran ${formatBytes(stats.size)} (≥50MB).** Preview file sebesar ini wajib PIN keamanan.`;
      return `${label}\nFormat: \`preview ${args[0]} <pin>\``;
    }

    const reason = needsConfidentialPin
      ? `preview folder rahasia: ${toDisplayPath(targetPath)}`
      : `preview file besar (${formatBytes(stats.size)}): ${toDisplayPath(targetPath)}`;
    await requirePin(args, reason);

    if (needsConfidentialPin) {
      sendAlertEmail(
        '🔓 Preview folder RAHASIA diakses',
        `File rahasia "${toDisplayPath(targetPath)}" berhasil di-preview dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, PIN-mu sudah bocor dan data rahasiamu baru saja dibaca orang lain — segera amankan akun Discord-mu.`
      ).catch(() => {});
    }
  }

  return mode === 'legacy'
    ? sendAttachmentPreview(absPath, dscMessage, stats)
    : sendRichPreview(absPath, dscMessage, stats);
}

export async function handleCommand(rawText, dscMessage = null) {
  const text = rawText.trim();
  if (!text) return buildHelpText();

  const tokens = tokenize(text);
  if (tokens.length === 0) return buildHelpText();
  
  // PERBAIKAN: Mengambil indeks pertama [0] sebagai string command murni
  const command = tokens[0].toLowerCase();
  const args = tokens.slice(1);

  // "?<command>" -> command tersembunyi buat lihat penjelasan detail command
  // tertentu, tanpa bikin "help" utama jadi panjang. Sengaja dicek di sini
  // (sebelum switch di bawah), bukan sebagai "case" biasa, karena "?pwd" dkk
  // bukan nama command aslinya — cuma modifier di depannya.
  if (command.startsWith('?') && command.length > 1) {
    return getDetailedHelp(command.slice(1));
  }
  if (command === '?') {
    const topics = Object.keys(DETAILED_HELP).filter((k) => k !== ':').sort().join(', ');
    return `❓ Ketik \`?<command>\` buat penjelasan detail, contoh \`?pwd\`.\nTopik: ${topics}`;
  }

  try {
    switch (command) {
      case 'help':
        return buildHelpText();

      case 'pwd':
        return `📂 Folder aktif saat ini: \`${displayDir()}\``;

      case 'cd': {
        if (args.length < 1) return `📂 Folder aktif saat ini: \`${displayDir()}\``;

        const targetArg = args[0];
        const isClimbAttempt = targetArg.replace(/\\/g, '/').startsWith('..');
        const newDir = resolvePathArg(targetArg);

        // Kalau user coba naik (".." atau "../xxx") tapi hasilnya tetap di
        // root ('.') karena sudah di puncak sandbox, kasih tahu jelas —
        // jangan seolah-olah berhasil "pindah folder" padahal diam di tempat.
        if (isClimbAttempt && newDir === '.' && currentDir === '.') {
          return `📂 Sudah di folder root (\`${displayDir()}\`), tidak bisa naik lebih tinggi lagi.`;
        }

        // 🆕 Kalau targetnya ternyata FILE (bukan folder), "cd" ke situ nggak
        // ada gunanya (nggak ada isi buat di-"list") — daripada cuma nampilin
        // error, perlakukan sebagai shortcut ke preview versi LAMA (attachment
        // apa adanya). PIN (rahasia/ukuran besar) tetap berlaku sama seperti
        // command "preview", cuma argumennya "digeser": "cd <file> <pin>".
        let targetAbsPath;
        try {
          targetAbsPath = resolveForRclone(newDir);
        } catch (err) {
          return `❌ Gagal pindah folder: ${err.message}`;
        }
        if (fs.existsSync(targetAbsPath) && fs.statSync(targetAbsPath).isFile()) {
          // PENTING: pakai "await" di sini (bukan cuma "return runPreview(...)")
          // — kalau tidak, error yang dilempar runPreview (mis. PIN salah/
          // kosong) akan LOLOS dari try/catch besar di bawah (karena statement
          // "return" sudah keburu keluar dari try SEBELUM promise-nya selesai),
          // dan berakhir jadi pesan generik "Terjadi kesalahan internal..." di
          // index.js alih-alih pesan spesifik "Gagal: ...".
          return await runPreview([targetArg, ...args.slice(1)], dscMessage, 'legacy');
        }

        // Validasi folder benar-benar ada & memang folder (bukan file), lewat
        // listDir supaya sekalian kena aturan safeResolve/whitelist di fsops.js
        try {
          await listDir(newDir);
        } catch (err) {
          return `❌ Gagal pindah folder: ${err.message}`;
        }

        currentDir = newDir;
        return `📂 Pindah ke folder: \`${displayDir()}\``;
      }

      case 'root': {
        if (currentDir === '.') {
          return `📂 Sudah di folder root (\`${displayDir()}\`).`;
        }
        currentDir = '.';
        return `📂 Pindah ke folder: \`${displayDir()}\``;
      }

      case 'list': {
        const targetDir = resolvePathArg(args[0] || '.');
        const entries = await listDir(targetDir);
        if (!entries.length) return `Folder \`${displayDir()}\` kosong.`;

        // Kelompokkan folder dulu baru file, urut alfabetis (case-insensitive),
        // beri nomor urut + ikon supaya lebih gampang dibaca/di-scan
        const collator = new Intl.Collator('id', { sensitivity: 'base' });
        const dirs = entries.filter((e) => e.endsWith('/')).sort(collator.compare);
        const files = entries.filter((e) => !e.endsWith('/')).sort(collator.compare);

        // Simpan urutan ini (folder dulu, baru file) sebagai referensi nomor
        // ":N" untuk command berikutnya (cd/copy/move/delete/download/preview).
        // Virtual path-nya dibuat relatif ke ROOT sandbox (bukan ke targetDir),
        // supaya bisa langsung dipakai sebagai hasil akhir resolvePathArg.
        lastListing = [...dirs, ...files].map((entry) => {
          const bareName = entry.endsWith('/') ? entry.slice(0, -1) : entry;
          return targetDir === '.' ? bareName : `${targetDir}/${bareName}`;
        });

        let num = 1;

        // Tandai entry (folder/file) yang berada di dalam CONFIDENTIAL_PATHS
        // dengan ikon 🔒 di listing — supaya user tahu dari AWAL item mana
        // yang bakal diminta PIN pas di-preview/download, tanpa perlu coba
        // dulu baru ketahuan lewat pesan error. Beda dengan BLOCKED_PATHS
        // (yang memang sudah disembunyikan total dari listDir), item
        // confidential ini memang SENGAJA tetap kelihatan namanya di
        // "list" — cuma isinya yang di-gate PIN.
        function entryNeedsPin(bareName) {
          try {
            const virtualPath = targetDir === '.' ? bareName : `${targetDir}/${bareName}`;
            return isConfidential(safeResolve(virtualPath));
          } catch {
            // Harusnya tidak pernah terjadi (entry ini datang dari listDir
            // folder yang sama), tapi kalau gagal resolve karena sebab apa
            // pun, default-kan "tidak dikasih ikon" daripada bikin seluruh
            // command "list" gagal cuma gara-gara satu entry.
            return false;
          }
        }

        const lines = [
          ...dirs.map((d) => `${num++}. 📁 ${d}${entryNeedsPin(d.slice(0, -1)) ? ' 🔒' : ''}`),
          ...files.map((f) => `${num++}. 📄 ${f}${entryNeedsPin(f) ? ' 🔒' : ''}`),
        ];
        const headerBase = `📂 **${toDisplayPath(targetDir)}** — ${dirs.length} folder, ${files.length} file`;

        // Discord batasi pesan max ~2000 karakter. Daripada kirim file .txt
        // (harus di-download tiap kali), pecah daftar jadi beberapa "halaman"
        // yang muat di 1 pesan, terus kasih tombol ◀️ ▶️ buat geser halaman
        // langsung di chat.
        const PAGE_BUDGET = 1700;
        const pages = [];
        let bucket = [];
        let bucketLen = 0;
        for (const line of lines) {
          if (bucketLen + line.length + 1 > PAGE_BUDGET && bucket.length) {
            pages.push(bucket);
            bucket = [];
            bucketLen = 0;
          }
          bucket.push(line);
          bucketLen += line.length + 1;
        }
        if (bucket.length) pages.push(bucket);

        // Muat dalam 1 pesan, tidak perlu pagination sama sekali
        if (pages.length <= 1) {
          return `${headerBase}:\n${lines.join('\n')}`;
        }

        const renderPage = (i) => `${headerBase} — Hal. ${i + 1}/${pages.length}:\n${pages[i].join('\n')}`;

        if (!dscMessage) {
          // Fallback kalau dipanggil bukan lewat Discord (mis. dites langsung di kode)
          return `${renderPage(0)}\n\n(${pages.length} halaman total — jalankan lewat Discord untuk navigasi tombol)`;
        }

        let pageIndex = 0;
        const buildRow = (i) =>
          new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setCustomId('list_prev')
              .setEmoji('◀️')
              .setStyle(ButtonStyle.Secondary)
              .setDisabled(i === 0),
            new ButtonBuilder()
              .setCustomId('list_next')
              .setEmoji('▶️')
              .setStyle(ButtonStyle.Secondary)
              .setDisabled(i === pages.length - 1),
          );

        const sentMsg = await dscMessage.reply({
          content: renderPage(pageIndex),
          components: [buildRow(pageIndex)],
        });

        // Kumpulkan klik tombol selama 5 menit, cuma owner (pengirim command) yang boleh navigasi
        const collector = sentMsg.createMessageComponentCollector({
          componentType: ComponentType.Button,
          time: 5 * 60 * 1000,
        });

        collector.on('collect', async (interaction) => {
          if (interaction.user.id !== dscMessage.author.id) {
            await interaction.reply({ content: 'Command ini bukan punya kamu.', ephemeral: true }).catch(() => {});
            return;
          }
          if (interaction.customId === 'list_prev' && pageIndex > 0) pageIndex--;
          if (interaction.customId === 'list_next' && pageIndex < pages.length - 1) pageIndex++;

          await interaction.update({
            content: renderPage(pageIndex),
            components: [buildRow(pageIndex)],
          }).catch(() => {});
        });

        // Setelah 5 menit, tombol dinonaktifkan biar gak bisa diklik lagi (interaction expired)
        collector.on('end', () => {
          sentMsg.edit({ components: [] }).catch(() => {});
        });

        return null; // sudah dikirim manual, index.js tidak perlu kirim ulang
      }

      case 'copy': {
        if (args.length < 2) return 'Format: `copy <src> <dst>` (kalau src rahasia dan/atau ukuran ≥50MB, tambahkan PIN: `copy <src> <dst> <pin>`)';

        const srcVirtual = resolvePathArg(args[0]);
        const absSrc = resolveForRclone(srcVirtual);
        if (!fs.existsSync(absSrc)) return `❌ Gagal: \`${toDisplayPath(srcVirtual)}\` tidak ditemukan.`;

        const srcSize = getLocalSize(absSrc);
        const needsConfidentialPin = isConfidential(absSrc);
        const needsSizePin = srcSize >= PIN_SIZE_THRESHOLD;
        let dstArgRaw = args[1];

        if (needsConfidentialPin || needsSizePin) {
          if (args.length < 3) {
            const label = needsConfidentialPin
              ? `🔒 **Data ini bersifat RAHASIA.** \`${toDisplayPath(srcVirtual)}\` butuh PIN keamanan buat di-copy.`
              : `🔒 **Ukuran ${formatBytes(srcSize)} (≥50MB).** Copy sebesar ini wajib PIN keamanan (cegah bot crash/storage penuh & cegah copy berulang-ulang kalau Discord-mu kena hack).`;
            return `${label}\nFormat: \`copy ${args[0]} ${args[1]} <pin>\``;
          }
          const reason = needsConfidentialPin
            ? `copy folder/file rahasia: ${toDisplayPath(srcVirtual)}`
            : `copy besar (${formatBytes(srcSize)}): ${toDisplayPath(srcVirtual)}`;
          const pinChecked = await requirePin(args, reason);
          dstArgRaw = pinChecked[1];

          if (needsConfidentialPin) {
            sendAlertEmail(
              '🔓 Copy folder/file RAHASIA dijalankan',
              `Folder/file rahasia "${toDisplayPath(srcVirtual)}" berhasil di-copy dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, PIN-mu sudah bocor dan data rahasiamu baru saja diduplikat orang lain — segera amankan akun Discord-mu.`
            ).catch(() => {});
          }
        }

        const dstVirtual = resolvePathArg(dstArgRaw);
        await copyPath(srcVirtual, dstVirtual);
        return `✅ Copy berhasil ke \`${toDisplayPath(dstVirtual)}\`${needsSizePin ? ` (${formatBytes(srcSize)})` : ''}`;
      }

      case 'move': {
        if (args.length < 2) return 'Format: `move <src> <dst>` (kalau src rahasia dan/atau ukuran ≥50MB, tambahkan PIN: `move <src> <dst> <pin>`)';

        const srcVirtual = resolvePathArg(args[0]);
        const absSrc = resolveForRclone(srcVirtual);
        if (!fs.existsSync(absSrc)) return `❌ Gagal: \`${toDisplayPath(srcVirtual)}\` tidak ditemukan.`;

        const srcSize = getLocalSize(absSrc);
        const needsConfidentialPin = isConfidential(absSrc);
        const needsSizePin = srcSize >= PIN_SIZE_THRESHOLD;
        let dstArgRaw = args[1];

        // Sama alasannya kayak copy: "move" bisa dipakai buat mengeluarkan
        // file/folder RAHASIA dari folder confidential ke lokasi bebas
        // tanpa lewat "preview" sama sekali (jadi tidak ke-detect kalau
        // cuma preview yang di-gate). Tambahan size-gate juga mencegah
        // rename/move berulang-ulang yang bikin I/O disk berat kalau
        // Discord-mu kena hack.
        if (needsConfidentialPin || needsSizePin) {
          if (args.length < 3) {
            const label = needsConfidentialPin
              ? `🔒 **Data ini bersifat RAHASIA.** \`${toDisplayPath(srcVirtual)}\` butuh PIN keamanan buat dipindah.`
              : `🔒 **Ukuran ${formatBytes(srcSize)} (≥50MB).** Move sebesar ini wajib PIN keamanan (cegah move berulang-ulang kalau Discord-mu kena hack).`;
            return `${label}\nFormat: \`move ${args[0]} ${args[1]} <pin>\``;
          }
          const reason = needsConfidentialPin
            ? `move folder/file rahasia: ${toDisplayPath(srcVirtual)}`
            : `move besar (${formatBytes(srcSize)}): ${toDisplayPath(srcVirtual)}`;
          const pinChecked = await requirePin(args, reason);
          dstArgRaw = pinChecked[1];

          if (needsConfidentialPin) {
            sendAlertEmail(
              '🔓 Move folder/file RAHASIA dijalankan',
              `Folder/file rahasia "${toDisplayPath(srcVirtual)}" berhasil dipindah dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, PIN-mu sudah bocor dan data rahasiamu baru saja dipindah orang lain — segera amankan akun Discord-mu.`
            ).catch(() => {});
          }
        }

        const dstVirtual = resolvePathArg(dstArgRaw);
        await movePath(srcVirtual, dstVirtual);
        return `✅ Move berhasil ke \`${toDisplayPath(dstVirtual)}\`${needsSizePin ? ` (${formatBytes(srcSize)})` : ''}`;
      }

      case 'delete': {
        if (args.length < 1) return 'Format: `delete <path>` (kalau ada di folder RAHASIA, tambahkan PIN: `delete <path> <pin>`)';
        const targetVirtual = resolvePathArg(args[0]);

        // Sama seperti copy/move/preview/download/archive: cek dulu apakah
        // target ada di folder RAHASIA sebelum jalanin apa pun. Sebelumnya
        // "delete" LOLOS dari gate ini — walau isinya tetap aman (trash
        // ditaruh tetap di dalam folder confidential asal, lihat
        // trashDirFor di fsops.js), memindah SELURUH isi folder rahasia ke
        // trash tanpa PIN & tanpa notifikasi tetap berisiko: kalau akun
        // Discord kena hack, penyerang bisa mengacak-acak folder rahasia
        // (memindah semuanya ke trash) tanpa owner tahu sama sekali.
        let absTarget;
        try {
          absTarget = resolveForRclone(targetVirtual);
        } catch (err) {
          return `❌ Gagal: ${err.message}`;
        }
        if (!fs.existsSync(absTarget)) {
          return `❌ Gagal: \`${toDisplayPath(targetVirtual)}\` tidak ditemukan.`;
        }

        const needsConfidentialPin = isConfidential(absTarget);
        if (needsConfidentialPin) {
          if (args.length < 2) {
            return `🔒 **Data ini bersifat RAHASIA.** \`${toDisplayPath(targetVirtual)}\` butuh PIN keamanan buat dihapus (dipindah ke trash).\nFormat: \`delete ${args[0]} <pin>\``;
          }
          await requirePin(args, `delete folder/file rahasia: ${toDisplayPath(targetVirtual)}`);
          sendAlertEmail(
            '🗑️ Delete (ke trash) folder/file RAHASIA dijalankan',
            `Folder/file rahasia "${toDisplayPath(targetVirtual)}" berhasil dipindah ke trash dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, PIN-mu sudah bocor — segera amankan akun Discord-mu. Datanya masih bisa dipulihkan dari trash selama belum di-"purge" atau kena auto-purge retensi.`
          ).catch(() => {});
        }

        await deletePath(targetVirtual);
        return `🗑️ Dipindah ke trash: \`${toDisplayPath(targetVirtual)}\`\n(belum permanen — pakai \`purge\` kalau mau hapus beneran, atau otomatis kehapus permanen setelah ${config.trashRetentionDays} hari)`;
      }

      case 'purge': {
        if (args.length < 1) return 'Format: `purge <path> <pin>`';
        const pinCheckedArgs = await requirePin(args, 'purge'); // lempar Error kalau PIN salah/kosong
        const targetVirtual = resolvePathArg(pinCheckedArgs[0]);

        if (!dscMessage) {
          return '❌ Command `purge` butuh konfirmasi tombol, cuma bisa dipakai lewat Discord.';
        }

        // Validasi dulu targetnya ada, biar gak nampilin dialog konfirmasi
        // buat path yang ternyata salah/tidak ditemukan.
        let absPath;
        try {
          absPath = resolveForRclone(targetVirtual);
        } catch (err) {
          return `❌ Gagal: ${err.message}`;
        }
        if (!fs.existsSync(absPath)) {
          return `❌ Gagal: \`${toDisplayPath(targetVirtual)}\` tidak ditemukan.`;
        }

        const confirmRow = new ActionRowBuilder().addComponents(
          new ButtonBuilder().setCustomId('purge_yes').setLabel('Ya, Hapus Permanen').setStyle(ButtonStyle.Danger),
          new ButtonBuilder().setCustomId('purge_no').setLabel('Batal').setStyle(ButtonStyle.Secondary),
        );

        const confirmMsg = await dscMessage.reply({
          content: `⚠️ **Yakin mau hapus PERMANEN** \`${toDisplayPath(targetVirtual)}\`?\nAksi ini TIDAK BISA dibatalkan (beda sama \`delete\` biasa yang cuma masuk trash).`,
          components: [confirmRow],
        });

        return new Promise((resolve) => {
          let settled = false;

          const collector = confirmMsg.createMessageComponentCollector({
            componentType: ComponentType.Button,
            time: 60 * 1000,
          });

          collector.on('collect', async (interaction) => {
            if (interaction.user.id !== dscMessage.author.id) {
              await interaction.reply({ content: 'Command ini bukan punya kamu.', ephemeral: true }).catch(() => {});
              return;
            }

            settled = true;
            collector.stop();

            if (interaction.customId === 'purge_yes') {
              try {
                await purgePath(targetVirtual);
                sendAlertEmail(
                  '✅ Command "purge" berhasil dieksekusi',
                  `File/folder "${toDisplayPath(targetVirtual)}" berhasil DIHAPUS PERMANEN dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, segera amankan akun Discord-mu — file ini TIDAK BISA dikembalikan.`
                ).catch(() => {});
                await interaction.update({
                  content: `🗑️ **Terhapus permanen:** \`${toDisplayPath(targetVirtual)}\``,
                  components: [],
                }).catch(() => {});
              } catch (err) {
                await interaction.update({
                  content: `❌ Gagal hapus permanen: ${err.message}`,
                  components: [],
                }).catch(() => {});
              }
            } else {
              await interaction.update({
                content: `Dibatalkan. \`${toDisplayPath(targetVirtual)}\` tidak jadi dihapus permanen.`,
                components: [],
              }).catch(() => {});
            }

            resolve(null);
          });

          collector.on('end', () => {
            if (!settled) {
              confirmMsg.edit({
                content: `⏱️ Konfirmasi kadaluarsa. \`${toDisplayPath(targetVirtual)}\` tidak jadi dihapus permanen.`,
                components: [],
              }).catch(() => {});
              resolve(null);
            }
          });
        });
      }

      case 'info': {
        if (args.length < 1) return 'Format: `info <path>`';
        const targetVirtual = resolvePathArg(args[0]);

        let absPath;
        try {
          absPath = resolveForRclone(targetVirtual);
        } catch (err) {
          return `❌ Gagal: ${err.message}`;
        }
        if (!fs.existsSync(absPath)) {
          return `❌ Gagal: \`${toDisplayPath(targetVirtual)}\` tidak ditemukan.`;
        }

        const stats = fs.statSync(absPath);
        const isDir = stats.isDirectory();
        const size = getLocalSize(absPath);
        const modified = stats.mtime.toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' });

        let itemCountLine = '';
        if (isDir) {
          try {
            const itemCount = fs.readdirSync(absPath).length;
            itemCountLine = `\n• Isi: ${itemCount} item`;
          } catch {
            // biarkan kosong kalau gagal baca (mis. permission), gak fatal buat "info"
          }
        }

        return `${isDir ? '📁' : '📄'} **${toDisplayPath(targetVirtual)}**\n` +
          `• Tipe: ${isDir ? 'Folder' : 'File'}\n` +
          `• Ukuran: **${formatBytes(size)}**${itemCountLine}\n` +
          `• Terakhir diubah: ${modified}`;
      }

      case 'preview':
        // Sama seperti shortcut "cd <file>" di atas: WAJIB "await" di sini,
        // kalau tidak, error dari runPreview (PIN salah/kosong, dll) lolos
        // dari try/catch handleCommand dan cuma tampil sebagai "Terjadi
        // kesalahan internal..." yang generik di index.js.
        return await runPreview(args, dscMessage, 'rich');

      case 'archive': {
        if (args.length < 1) return 'Format: `archive <path>` (kalau ukuran asli ≥50MB dan/atau rahasia, tambahkan PIN: `archive <path> <pin>`)';
        if (!dscMessage) return 'Fitur archive cuma bisa dipakai lewat Discord.';

        const srcVirtual = resolvePathArg(args[0]);
        const absSrc = resolveForRclone(srcVirtual);
        if (!fs.existsSync(absSrc)) return `❌ Gagal: \`${toDisplayPath(srcVirtual)}\` tidak ditemukan.`;

        // Sama seperti copy/move/delete: cegah archive folder yang di
        // dalamnya ada BLOCKED_PATH — kalau lolos, isi yang di-block ikut
        // terpaket ke .zip dan ke-upload ke Drive (bocor keluar sandbox).
        if (containsBlockedPath(absSrc)) {
          return `❌ Gagal: \`${toDisplayPath(srcVirtual)}\` tidak bisa di-archive karena mengandung folder/file yang diblokir (BLOCKED_PATHS) di dalamnya. Archive isinya per-item saja, lewati yang diblokir.`;
        }

        const localSize = getLocalSize(absSrc);
        const needsConfidentialPin = isConfidential(absSrc);
        const needsSizePin = localSize >= PIN_SIZE_THRESHOLD;

        if (needsConfidentialPin || needsSizePin) {
          if (args.length < 2) {
            const label = needsConfidentialPin
              ? `🔒 **Data ini bersifat RAHASIA.** \`${toDisplayPath(srcVirtual)}\` butuh PIN keamanan buat di-archive.`
              : `🔒 **Ukuran asli ${formatBytes(localSize)} (≥50MB).** Archive sebesar ini wajib PIN keamanan (cegah bot crash/storage penuh & cegah archive berulang-ulang).`;
            return `${label}\nFormat: \`archive ${args[0]} <pin>\``;
          }
          const reason = needsConfidentialPin
            ? `archive folder rahasia: ${toDisplayPath(srcVirtual)}`
            : `archive besar (${formatBytes(localSize)}): ${toDisplayPath(srcVirtual)}`;
          await requirePin(args, reason);
          if (needsConfidentialPin) {
            sendAlertEmail(
              '🔓 Archive folder RAHASIA diakses',
              `Folder/file rahasia "${toDisplayPath(srcVirtual)}" berhasil di-archive & diupload dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, PIN-mu sudah bocor dan data rahasiamu baru saja disalin keluar — segera amankan akun Discord-mu.`
            ).catch(() => {});
          }
        }

        const entityName = path.basename(absSrc);
        const zipName = `${entityName}.zip`;
        const tmpDir = path.join(os.tmpdir(), 'nausync-archive');
        await fs.promises.mkdir(tmpDir, { recursive: true });
        const zipAbsPath = path.join(tmpDir, `${Date.now()}__${zipName}`);

        const progressMessage = await dscMessage.reply(`🗜️ **Mengompres...** \`${entityName}\` (${formatBytes(localSize)})`);

        try {
          await createZip(absSrc, zipAbsPath);
        } catch (err) {
          await progressMessage.edit(`❌ **Gagal compress:** ${err.message}`).catch(() => {});
          return null;
        }

        const zipStat = await fs.promises.stat(zipAbsPath);
        await progressMessage.edit(`📦 **Kompres selesai** (${formatBytes(zipStat.size)}, dari ${formatBytes(localSize)}). Mulai upload ke Google Drive...`).catch(() => {});

        const remoteTarget = `${config.rcloneRemote}:${config.rcloneStagingFolder}/${zipName}`;

        return new Promise((resolve) => {
          const proc = spawn('rclone', ['copyto', zipAbsPath, remoteTarget, '--progress', '--stats', '3s']);
          let lastUpdate = 0;

          proc.stdout.on('data', async (data) => {
            const output = data.toString();
            const match = output.match(/(\d+)%\s*,/);
            if (match) {
              const now = Date.now();
              if (now - lastUpdate > 4000) {
                lastUpdate = now;
                await progressMessage.edit(`📤 **Upload:** \`${match[1]}%\` — \`${zipName}\` (${formatBytes(zipStat.size)})`).catch(() => {});
              }
            }
          });

          proc.on('close', async (code) => {
            // WAJIB coba hapus .zip lokal APAPUN hasilnya (sukses/gagal) — dia
            // cuma perantara sementara, bukan tempat penyimpanan. Kalau
            // dibiarkan nyangkut pas upload gagal, lama-lama numpuk dan malah
            // bertentangan sama tujuan command ini sendiri (hemat storage).
            await fs.promises.unlink(zipAbsPath).catch(() => {});

            if (code === 0) {
              await progressMessage.edit(
                `✅ **Archive & Upload Sukses!**\n• Sumber: \`${toDisplayPath(srcVirtual)}\` (${formatBytes(localSize)})\n• Zip: \`${zipName}\` (${formatBytes(zipStat.size)})\n• Zip lokal sudah dihapus permanen.`
              ).catch(() => {});
              resolve('Proses transfer selesai.');
            } else {
              await progressMessage.edit(`❌ **Upload gagal!** (exit code ${code}). Zip lokal tetap sudah dihapus, tidak ada sisa file numpuk.`).catch(() => {});
              resolve(`Proses archive/upload gagal dengan error code ${code}`);
            }
          });
        });
      }

      case 'clear': {
        if (!dscMessage) return 'Fitur ini cuma bisa dipakai lewat Discord.';

        if (previewMessages.length === 0) {
          return 'Belum ada file preview yang perlu dihapus.';
        }

        const channel = dscMessage.channel;
        let deletedCount = 0;

        // Hanya hapus pesan-pesan yang memang tercatat dari "preview" — aman,
        // gak akan menyentuh command kamu atau balasan bot yang lain.
        for (const msgId of previewMessages) {
          try {
            const msg = await channel.messages.fetch(msgId);
            await msg.delete();
            deletedCount++;
          } catch {
            // pesan mungkin sudah dihapus manual / kadaluarsa, lewati saja
          }
        }

        previewMessages.length = 0; // reset catatan setelah dibersihkan
        savePreviewMessages(); // ikut kosongkan file, bukan cuma di memory

        return `🧹 **Selesai!** ${deletedCount} pesan preview berhasil dihapus.`;
      }

      case 'network': {
        const verbose = args[0] && ['detail', '-v', 'verbose'].includes(args[0].toLowerCase());

        // Mode detail nampilin info teknis (IP lokal, gateway, DNS, MAC
        // address, dst) yang bisa dipakai buat fingerprinting/pemetaan
        // jaringan kalau histori chat ini kebaca orang lain (mis. Discord
        // kena hack) — jadi wajib PIN, sama gatenya kayak preview folder
        // rahasia. Mode default (tanpa detail) tetap bebas PIN.
        if (verbose) {
          if (args.length < 2) {
            return '🔒 **Detail teknis jaringan (IP lokal/gateway/DNS/MAC) butuh PIN keamanan.**\nFormat: `network detail <pin>`';
          }
          await requirePin(args, 'network detail (IP lokal/gateway/DNS/MAC)');
        }

        let profiles;
        try {
          profiles = await getNetworkInfo();
        } catch (err) {
          return `❌ Gagal membaca status jaringan: ${err.message}`;
        }

        if (!profiles.length) {
          return '❌ Tidak ada koneksi jaringan aktif terdeteksi (laptop mungkin sedang offline / semua adapter terputus).';
        }

        const blocks = profiles.map((p) => formatNetworkProfile(p, verbose));
        const footer = verbose ? '' : '\n\n_Ketik `network detail <pin>` untuk lihat IP lokal/gateway/DNS/MAC address._';
        return `**🌐 Status Jaringan Laptop**\n\n${blocks.join('\n\n')}${footer}`;
      }

      case 'baterai': {
        let battery;
        try {
          battery = await getBatteryInfo();
        } catch (err) {
          return `❌ Gagal membaca info baterai: ${err.message}`;
        }

        if (!battery) {
          return '❌ Tidak ditemukan baterai di laptop ini (mungkin PC desktop, atau driver baterai tidak terbaca lewat WMI).';
        }

        const percent = battery.EstimatedChargeRemaining;
        const status = describeBatteryStatus(battery.BatteryStatus);
        const chargeLine = status.charging ? '⚡ Sedang di-cas' : '🔌 Tidak di-cas';
        const icon = status.charging ? '🔋' : (percent <= 20 ? '🪫' : '🔋');

        const standbyMinutes = await getStandbyMinutes();
        const modeLine = describePowerMode(standbyMinutes);

        return `${icon} **Status Baterai Laptop**\n• Persentase: **${percent}%**\n• ${chargeLine} _(${status.label})_\n• Mode Power: ${modeLine}`;
      }

      case 'disk': {
        let disks;
        try {
          disks = await getDiskInfo();
        } catch (err) {
          return `❌ Gagal membaca info disk: ${err.message}`;
        }

        if (!disks.length) return '❌ Tidak ada drive lokal fisik yang terbaca.';

        const blocks = disks.map((d) => {
          const total = Number(d.Size) || 0;
          const free = Number(d.FreeSpace) || 0;
          const used = total - free;
          const percentUsed = total > 0 ? Math.round((used / total) * 100) : 0;
          return `💽 **${d.DeviceID}**\n• Total: ${formatBytes(total)}\n• Terpakai: ${formatBytes(used)} (${percentUsed}%)\n• Sisa: **${formatBytes(free)}**`;
        });

        return `**Status Disk Laptop**\n\n${blocks.join('\n\n')}`;
      }

      case 'mode': {
        if (args.length < 1) return 'Format: `mode <server/hemat>`';
        const subMode = args[0].toLowerCase(); // Mengambil string murni sub-argumen

        if (subMode === 'server') {
          // Set timeout AC *dan* DC (baterai) ke 0 (never), dan TUNGGU hasilnya + cek error
          const results = await Promise.all([
            runPowercfg('/change standby-timeout-ac 0'),
            runPowercfg('/change standby-timeout-dc 0'),
            runPowercfg('/change hibernate-timeout-ac 0'),
            runPowercfg('/change hibernate-timeout-dc 0'),
          ]);
          const failed = results.filter(r => !r.ok);
          if (failed.length > 0) {
            return `❌ **Gagal mengubah Mode Server!**\n${failed.map(f => `• ${f.error}`).join('\n')}\n\nKemungkinan bot tidak punya izin/berjalan bukan sebagai user yang login, atau ada Group Policy yang mengunci pengaturan power.`;
          }

          // Verifikasi nilai yang benar-benar tersimpan di skema aktif
          const actualMinutes = await getStandbyMinutes();
          const verified = actualMinutes === 0
            ? '✅ Terverifikasi: standby timeout = Never'
            : `⚠️ Perintah sukses tapi nilai terbaca saat ini: ${actualMinutes ?? 'tidak diketahui'} menit (mungkin ada aplikasi lain yang override, cek Settings > Power).`;

          return `🖥️ **Laptop beralih ke Mode Server!**\n• Status Sleep: **Never**\n• Status Hibernate: **Never**\n${verified}\nLaptop Anda akan tetap terjaga selamanya untuk memproses unggahan besar Anda.`;
        } 
        
        if (subMode === 'hemat') {
          // Kembalikan ke durasi bawaan harian Anda (Sleep 15 menit, Hibernate 3 jam), AC & DC
          const results = await Promise.all([
            runPowercfg('/change standby-timeout-ac 15'),
            runPowercfg('/change standby-timeout-dc 15'),
            runPowercfg('/change hibernate-timeout-ac 180'),
            runPowercfg('/change hibernate-timeout-dc 180'),
          ]);
          const failed = results.filter(r => !r.ok);
          if (failed.length > 0) {
            return `❌ **Gagal mengubah Mode Hemat!**\n${failed.map(f => `• ${f.error}`).join('\n')}`;
          }
          return '🔋 **Laptop beralih ke Mode Hemat (Default)!**\n• Status Sleep: **15 Menit**\n• Status Hibernate: **3 Jam**\nLaptop akan otomatis tidur jika didiamkan sesuai setingan harian Anda.';
        }

        return 'Format salah. Gunakan: `mode server` atau `mode hemat`';
      }

      case 'shutdown': {
        await requirePin(args, 'shutdown');

        // BUG FIX: sebelumnya exec() dipanggil tanpa callback/await sama
        // sekali — kalau shutdown.exe gagal dijalankan (path salah,
        // permission ditolak, dll), bot TETAP bilang "Perintah Diterima"
        // ke user padahal laptop tidak jadi mati, dan errornya tidak
        // ketahuan siapa pun. Lebih parah lagi, child process yang gagal
        // spawn tanpa listener 'error' bisa bikin proses bot sendiri crash
        // diam-diam. Sekarang di-await lewat execAsync (promisify) dan
        // hasilnya dicek eksplisit sebelum bilang sukses ke user/email.
        try {
          await execAsync('C:\\Windows\\System32\\shutdown.exe /s /f /t 15');
        } catch (err) {
          sendAlertEmail(
            '❌ Command "shutdown" GAGAL dieksekusi',
            `PIN valid, tapi command shutdown.exe GAGAL dijalankan.\nError: ${err.message}\nWaktu: ${new Date().toISOString()}`
          ).catch(() => {});
          return `❌ PIN valid, tapi shutdown **GAGAL dijalankan**: ${err.message}`;
        }

        sendAlertEmail(
          '✅ Command "shutdown" berhasil dieksekusi',
          `Command "shutdown" berhasil dijalankan dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, PIN-mu sudah bocor — segera amankan akun Discord (ganti password, cek active sessions, aktifkan 2FA). PIN sudah otomatis diganti (lihat email rotasi terpisah), tapi laptop sudah kadung dimatikan.`
        ).catch(() => {});
        return '🔌 **Perintah Diterima!** Laptop Anda di rumah akan otomatis dimatikan dalam waktu 15 detik ke depan. Koneksi bot segera terputus.\n_(Berubah pikiran? Ketik `cancel` sebelum 15 detik habis.)_';
      }

      case 'restart': {
        await requirePin(args, 'restart');

        try {
          await execAsync('C:\\Windows\\System32\\shutdown.exe /r /f /t 15');
        } catch (err) {
          sendAlertEmail(
            '❌ Command "restart" GAGAL dieksekusi',
            `PIN valid, tapi command shutdown.exe (/r) GAGAL dijalankan.\nError: ${err.message}\nWaktu: ${new Date().toISOString()}`
          ).catch(() => {});
          return `❌ PIN valid, tapi restart **GAGAL dijalankan**: ${err.message}`;
        }

        sendAlertEmail(
          '✅ Command "restart" berhasil dieksekusi',
          `Command "restart" berhasil dijalankan dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, segera amankan akun Discord-mu.`
        ).catch(() => {});
        return '🔄 **Perintah Diterima!** Laptop Anda di rumah akan otomatis restart dalam waktu 15 detik ke depan. Koneksi bot akan terputus sebentar dan bot Nausync Cloud akan otomatis aktif lagi begitu Windows selesai booting (asalkan sudah di-setting auto-start).\n_(Berubah pikiran? Ketik `cancel` sebelum 15 detik habis.)_';
      }

      // Batalkan shutdown/restart yang masih dalam masa tunggu 15 detik
      // ("shutdown.exe /a" = abort pending shutdown). Sengaja TIDAK butuh
      // PIN — ini aksi yang MENGURANGI risiko (membatalkan aksi berbahaya),
      // bukan menambah, jadi tidak masuk akal untuk di-gate PIN sama
      // seperti aksinya sendiri. Kalau dipanggil tanpa ada shutdown yang
      // pending, shutdown.exe akan balas error — itu wajar, cukup
      // dilaporkan apa adanya.
      case 'cancel': {
        try {
          await execAsync('C:\\Windows\\System32\\shutdown.exe /a');
        } catch (err) {
          return `⚠️ Tidak ada shutdown/restart yang bisa dibatalkan (atau gagal: ${err.message}).`;
        }
        sendAlertEmail(
          '🛑 Shutdown/restart dibatalkan',
          `Command "cancel" berhasil membatalkan shutdown/restart yang sedang pending, pada ${new Date().toISOString()}.`
        ).catch(() => {});
        return '🛑 **Dibatalkan!** Shutdown/restart yang tadi pending sudah dihentikan, laptop tetap menyala.';
      }

      case 'chgpin': {
        if (args.length < 1) return 'Format: `chgpin <pin_lama>`';
        try {
          await changePin(args[0]);
          return '🔐 **PIN berhasil diganti!** PIN baru sudah dikirim ke email alert-mu. PIN lama sudah tidak berlaku lagi.';
        } catch (err) {
          return `❌ Gagal ganti PIN: ${err.message}`;
        }
      }

      case 'download': {
        if (args.length < 1) return 'Format: `download <path>` (kalau file/folder rahasia dan/atau ukuran ≥50MB, tambahkan PIN: `download <path> <pin>`)';
        
        const targetPath = resolvePathArg(args[0]);
        const absPath = resolveForRclone(targetPath);
        
        if (!fs.existsSync(absPath)) return `❌ Gagal: File atau folder tidak ditemukan.`;

        const localSize = getLocalSize(absPath);
        const needsConfidentialPin = isConfidential(absPath);
        const needsSizePin = localSize >= PIN_SIZE_THRESHOLD;

        if (needsConfidentialPin || needsSizePin) {
          if (args.length < 2) {
            const label = needsConfidentialPin
              ? `🔒 **Data ini bersifat RAHASIA.** \`${toDisplayPath(targetPath)}\` butuh PIN keamanan buat didownload.`
              : `🔒 **Ukuran ${formatBytes(localSize)} (≥50MB).** Download sebesar ini wajib PIN keamanan (cegah bot crash/storage Drive penuh & cegah download berulang-ulang kalau Discord-mu kena hack).`;
            return `${label}\nFormat: \`download ${args[0]} <pin>\``;
          }
          const reason = needsConfidentialPin
            ? `download folder/file rahasia: ${toDisplayPath(targetPath)}`
            : `download besar (${formatBytes(localSize)}): ${toDisplayPath(targetPath)}`;
          await requirePin(args, reason);

          if (needsConfidentialPin) {
            sendAlertEmail(
              '🔓 Download folder/file RAHASIA dijalankan',
              `Folder/file rahasia "${toDisplayPath(targetPath)}" berhasil didownload ke Google Drive dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, PIN-mu sudah bocor dan data rahasiamu baru saja disalin keluar — segera amankan akun Discord-mu.`
            ).catch(() => {});
          }
        }

        const driveFreeSpace = await getDriveFreeSpace();
        
        if (localSize > driveFreeSpace) {
          return `❌ **Unduhan Ditolak!** Ukuran target melebihi kapasitas Google Drive Anda.\n` +
                 `• Target: **${formatBytes(localSize)}**\n` +
                 `• Sisa Drive: **${formatBytes(driveFreeSpace)}**`;
        }
        
        const stats = fs.statSync(absPath);
        const isDir = stats.isDirectory();
        const entityName = targetPath.replace(/\\/g, '/').split('/').pop() || 'download';
        
        let progressMessage = null;
        if (dscMessage) {
          progressMessage = await dscMessage.reply(`⏳ **Mempersiapkan rclone...** Menghitung data **${formatBytes(localSize)}**`);
        }

        return new Promise((resolve) => {
          let rcloneCmd = 'copy';
          let remoteTarget = `${config.rcloneRemote}:${config.rcloneStagingFolder}/${entityName}`;
          
          if (!isDir) {
            rcloneCmd = 'copyto';
            remoteTarget = `${config.rcloneRemote}:${config.rcloneStagingFolder}/${entityName}`;
          }

          const process = spawn('rclone', [rcloneCmd, absPath, remoteTarget, '--progress', '--stats', '3s']);
          
          let lastUpdate = 0;

          process.stdout.on('data', async (data) => {
            const output = data.toString();
            const match = output.match(/(\d+)%\s*,/);
            if (match && progressMessage) {
              const currentProgress = match[1] + "%";
              const now = Date.now();
              if (now - lastUpdate > 4000) {
                lastUpdate = now;
                await progressMessage.edit(`📦 **Sedang Upload:** \`${currentProgress}\` Selesai\n• Target: "${entityName}" (${formatBytes(localSize)})`).catch(() => {});
              }
            }
          });

          process.on('close', async (code) => {
            if (code === 0) {
              if (progressMessage) {
                await progressMessage.edit(`✅ **Upload Sukses 100%!**\n• Target: "${entityName}"\n• Ukuran: **${formatBytes(localSize)}**\nSilakan cek Google Drive di HP Anda.`).catch(() => {});
              }
              resolve(`Proses transfer selesai.`);
            } else {
              if (progressMessage) {
                await progressMessage.edit(`❌ **Proses Gagal!** Terjadi kesalahan saat rclone melakukan transfer data.`).catch(() => {});
              }
              resolve(`Proses transfer dihentikan dengan error code ${code}`);
            }
          });
        });
      }

      default:
        return `Command tidak dikenali: "${command}". Ketik "help" untuk daftar command.`;
    }
  } catch (err) {
    return `Gagal: ${err.message}`;
  }
}
```

### `src/config.js`

```javascript
import 'dotenv/config';
import path from 'node:path';
import fs from 'node:fs';
import dotenv from 'dotenv';

function required(name) {
  const val = process.env[name];
  if (!val) {
    throw new Error(`Environment variable ${name} belum diset. Cek file .env`);
  }
  return val;
}

// Parse ALLOWED_ROOTS jadi map { namaFolder: absolutePath }.
//
// Format di .env: "Nama1=Path1;Nama2=Path2;..."
// - Nama dipakai sebagai "folder virtual" tingkat atas di bot (mis. "Documents").
// - Path boleh pakai "/" atau "\" (Node otomatis normalize di Windows), dan
//   boleh mengandung spasi tanpa perlu tanda kutip.
//
// Contoh:
//   ALLOWED_ROOTS=D=D:/;Documents=C:/Users/Naufal Khalil/Documents;Music=C:/Users/Naufal Khalil/Music
function parseAllowedRoots(raw) {
  const roots = {};
  const entries = raw.split(';').map((e) => e.trim()).filter(Boolean);

  if (entries.length === 0) {
    throw new Error('ALLOWED_ROOTS kosong. Cek file .env, format: Nama1=Path1;Nama2=Path2');
  }

  for (const entry of entries) {
    const idx = entry.indexOf('=');
    if (idx === -1) {
      throw new Error(`Format ALLOWED_ROOTS salah pada entry "${entry}". Gunakan Nama=Path`);
    }

    const name = entry.slice(0, idx).trim();
    const dir = entry.slice(idx + 1).trim();

    if (!name || !dir) {
      throw new Error(`Format ALLOWED_ROOTS salah pada entry "${entry}". Nama & path tidak boleh kosong.`);
    }

    // Nama root dipakai sebagai "folder virtual" tingkat atas (mis. "Documents"),
    // jadi tidak boleh mengandung "/" atau "\" biar tidak ambigu dengan path asli.
    if (/[\\/]/.test(name)) {
      throw new Error(`Nama root "${name}" tidak boleh mengandung "/" atau "\\".`);
    }
    if (roots[name]) {
      throw new Error(`Nama root "${name}" dipakai dua kali di ALLOWED_ROOTS. Nama harus unik.`);
    }

    roots[name] = path.resolve(dir);
  }

  return roots;
}

// Parse BLOCKED_PATHS jadi array path absolut yang DILARANG diakses bot,
// walaupun path itu ada di dalam salah satu ALLOWED_ROOTS.
//
// Format di .env: "Path1;Path2;..." (path absolut, boleh pakai "/" atau "\").
// Berguna untuk mengecualikan folder sensitif seperti folder project bot ini
// sendiri (yang berisi file .env dengan token/kredensial), padahal folder
// itu ada di dalam root "D" yang diizinkan.
//
// Contoh:
//   BLOCKED_PATHS=D:/Project/Coding/Nausync Engine;D:/Project/Rahasia
function parseBlockedPaths(raw) {
  if (!raw) return [];
  return raw
    .split(';')
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => path.resolve(p));
}

// Parse CONFIDENTIAL_PATHS jadi array path absolut yang BOLEH diakses lewat
// "list" (masih kelihatan namanya), tapi WAJIB PIN + kirim alert email kalau
// mau di-preview/download isinya. Beda dengan BLOCKED_PATHS yang benar-benar
// disembunyikan total — folder "rahasia" di sini memang kamu tahu isinya
// ada, cuma kontennya dianggap sensitif (mis. scan KTP, dokumen keuangan).
//
// Format di .env sama seperti BLOCKED_PATHS: "Path1;Path2;..."
function parseConfidentialPaths(raw) {
  if (!raw) return [];
  return raw
    .split(';')
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => path.resolve(p));
}

// --- Kredensial rahasia (SMTP + email alert PIN) DIPISAH dari .env utama ---
//
// Alasannya: .env utama biasanya lebih "banyak disentuh" (dibuka pas
// setup ulang, di-share ke tempat lain, dsb), jadi risiko bocornya lebih
// tinggi (ke-commit ke git, ke-screenshot, dsb). Kalau kredensial SMTP dan
// email alert PIN ikut nyampur di file yang sama, satu kebocoran .env
// utama otomatis membongkar JALUR notifikasi keamanan PIN itu juga —
// yang justru harusnya jadi "kanal cadangan" independen kalau .env utama
// (atau Discord) kena hack.
//
// Solusinya: .env utama cuma nyimpen LOKASI file kedua ini
// (SECURE_ENV_PATH), bukan isi kredensialnya. File kedua ini:
// - taruh di folder LAIN (idealnya di luar folder project bot ini sama
//   sekali, mis. "D:/Rahasia/nausync-secure.env"), supaya kalau folder
//   project ke-zip/ke-share/ke-backup, file ini tidak ikut kebawa.
// - sebaiknya juga didaftarkan ke BLOCKED_PATHS di .env utama, supaya
//   bot sendiri (lewat command list/copy/download) tidak akan pernah
//   bisa membaca/mengekspos isi file ini walau folder induknya ada di
//   dalam salah satu ALLOWED_ROOTS.
// - di Windows, batasi permission file-nya (klik kanan > Properties >
//   Security) supaya cuma akun Windows-mu sendiri yang bisa baca.
//
// Format isi file SECURE_ENV_PATH sama seperti .env biasa:
//   SMTP_HOST=smtp.gmail.com
//   SMTP_PORT=465
//   SMTP_USER=emailkuyangkirim@gmail.com
//   SMTP_PASS=app_password_16_digit
//   PIN_ALERT_EMAIL=emailrahasiaku_beda@gmail.com
function loadSecureEnv() {
  const securePath = path.resolve(required('SECURE_ENV_PATH'));

  if (!fs.existsSync(securePath)) {
    throw new Error(`File SECURE_ENV_PATH ("${securePath}") tidak ditemukan. Buat file itu dulu (lihat komentar di config.js untuk formatnya).`);
  }

  // Sengaja pakai dotenv.parse() manual (bukan dotenv.config({path})), biar
  // nilai-nilainya TIDAK ikut nimbun ke process.env global — cukup lewat
  // sebagai object lokal ke config di bawah, jadi kalau ada bagian lain
  // dari kode (atau dependency pihak ketiga) yang somehow dump seluruh
  // process.env buat debug, kredensial ini tidak ikut kebongkar di situ.
  const parsed = dotenv.parse(fs.readFileSync(securePath, 'utf-8'));

  function needSecure(key) {
    if (!parsed[key]) {
      throw new Error(`"${key}" belum diset di file secure env (${securePath}).`);
    }
    return parsed[key];
  }

  return {
    smtpHost: needSecure('SMTP_HOST'),
    smtpPort: parseInt(needSecure('SMTP_PORT'), 10),
    smtpUser: needSecure('SMTP_USER'),
    smtpPass: needSecure('SMTP_PASS'),
    pinAlertEmail: needSecure('PIN_ALERT_EMAIL'),
  };
}

// Berapa hari item di dalam ".trash" (hasil "delete") dibiarkan sebelum
// otomatis dihapus PERMANEN oleh sweep harian (lihat purgeExpiredTrash() di
// fsops.js & pemanggilnya di index.js). Default 30 hari kalau tidak diset
// di .env (TRASH_RETENTION_DAYS=45, misalnya). Ini bukan pengganti "purge"
// manual — cuma jaring pengaman supaya trash tidak menumpuk selamanya dan
// makan storage tanpa disadari.
function parseTrashRetentionDays(raw) {
  const parsed = parseInt(raw, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 30;
}

export const config = {
  allowedRoots: parseAllowedRoots(required('ALLOWED_ROOTS')),
  blockedPaths: parseBlockedPaths(process.env.BLOCKED_PATHS),
  confidentialPaths: parseConfidentialPaths(process.env.CONFIDENTIAL_PATHS),
  rcloneRemote: required('RCLONE_REMOTE'),
  rcloneStagingFolder: process.env.RCLONE_STAGING_FOLDER || 'nausync-staging',
  trashRetentionDays: parseTrashRetentionDays(process.env.TRASH_RETENTION_DAYS),

  // --- Konfigurasi PIN keamanan (lihat pinStore.js) ---
  // Kredensialnya sendiri dimuat dari file TERPISAH (loadSecureEnv di
  // atas), bukan dari .env utama ini — lihat SECURE_ENV_PATH.
  ...loadSecureEnv(),
};
```

### `src/fsops.js`

```javascript
import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { safeResolve, isRootItself, isBlocked, containsBlockedPath, listRootNames, confidentialAncestorOf } from './pathGuard.js';
import { config } from './config.js';

// NOTE: fitur "archive" (compress ke .zip) butuh package "archiver" —
// kalau belum terinstall, jalankan `npm install archiver` di folder project.
//
// "archiver" itu package CommonJS, jadi tetap di-load lewat createRequire
// (bukan `import` ES Module) supaya tidak kena masalah interop CJS/ESM
// yang beda-beda antar versi Node.
const require = createRequire(import.meta.url);

// PERUBAHAN PENTING (archiver v8+): package "archiver" versi lama dulu
// dipanggil sebagai FUNGSI langsung — `archiver('zip', options)`. Mulai
// versi 8, API-nya diubah total jadi BERBASIS CLASS: `new ZipArchive(options)`
// (nama export-nya "ZipArchive", bukan lagi default function). Ini BUKAN
// masalah instalasi — memang breaking change resmi dari package-nya
// sendiri (lihat contoh resmi di npm/GitHub archiverjs/node-archiver).
// Ambil class ZipArchive-nya di sini.
const archiverModule = require('archiver');
const ZipArchive = archiverModule.ZipArchive;


// Nama folder trash tersembunyi, dibuat langsung di dalam masing-masing root
// (bukan satu lokasi global) supaya "move ke trash" selalu di drive yang
// sama dengan file aslinya (menghindari error EXDEV kalau root-root ada di
// drive fisik yang berbeda-beda).
const TRASH_DIRNAME = '.trash';

// Nama-nama file "sampah" bawaan OS yang otomatis dibuat Windows/Mac di
// folder mana pun (bukan file yang sengaja dibuat/diisi user), jadi tidak
// perlu ikut ditampilkan di "list" — cuma bikin bingung ("kok ada file
// asing ini?") padahal ini normal dan bukan tanda ada yang aneh:
//
// - desktop.ini  : dibuat Windows otomatis di folder yang pernah di-custom
//                  (ganti icon folder, folder yang di-sync OneDrive, dst).
//                  Ditandai atribut Hidden+System oleh Windows, TAPI atribut
//                  itu murni konsep Windows Explorer — fs.readdir() Node.js
//                  tidak peduli atribut itu sama sekali, jadi tetap kebaca
//                  "on-hidden" oleh bot walau disembunyikan di Explorer.
// - Thumbs.db    : cache thumbnail gambar/video, dibuat Windows Explorer
//                  otomatis di folder yang isinya media.
// - .DS_Store    : versi Mac dari desktop.ini (metadata tampilan folder),
//                  bisa nongol kalau foldernya pernah dibuka di macOS.
//
// Perlakuannya SAMA seperti ".trash": disembunyikan dari hasil "list" di
// SEMUA folder secara otomatis, tapi tetap ada fisik di disk (tidak
// dihapus) — cuma tidak ikut ditampilkan biar listing lebih bersih.
const OS_JUNK_FILENAMES = new Set(['desktop.ini', 'Thumbs.db', '.DS_Store']);

// Cari root absolute path dari sebuah virtual path (mis. "Documents/Skripsi"
// -> path absolut folder "Documents" di ALLOWED_ROOTS). Dipakai buat nentuin
// di mana folder ".trash" masing-masing root berada.
function rootAbsPathFor(virtualPath) {
  const normalized = virtualPath.replace(/\\/g, '/').replace(/^\/+/, '');
  const rootName = normalized.split('/')[0];
  const rootAbsPath = config.allowedRoots[rootName];
  if (!rootAbsPath) {
    throw new Error(`"${rootName}" bukan folder yang diizinkan.`);
  }
  return rootAbsPath;
}

// Tentukan folder ".trash" mana yang harus dipakai untuk sebuah file/folder
// yang mau dihapus (srcAbsPath = path absolut aslinya, virtualPath = path
// virtual yang diketik user, dipakai buat cari root-nya).
//
// BUG LAMA yang diperbaiki di sini: sebelumnya deletePath() SELALU memakai
// ".trash" di root paling atas (mis. "D:/.trash"), walau file yang dihapus
// aslinya berada di dalam folder CONFIDENTIAL (mis.
// "D:/Project/Data Siswa/nilai.xlsx"). Karena "D:/.trash" tidak terdaftar
// di CONFIDENTIAL_PATHS, begitu file itu masuk trash, dia jadi bisa
// di-preview/download TANPA PIN lewat "list" biasa di root "D" — proteksi
// confidential-nya lolos begitu saja gara-gara lokasi trash yang salah.
//
// PERBAIKAN: kalau source path ada di dalam folder confidential, trash-nya
// ditaruh TETAP di dalam folder confidential ASAL itu (subfolder ".trash"
// di dalamnya), bukan di ".trash" milik root. Jadi proteksi PIN-nya ikut
// terbawa ke lokasi barunya. Kalau source BUKAN confidential, perilaku
// lama (trash di root) tetap dipakai seperti biasa.
function trashDirFor(srcAbsPath, virtualPath) {
  const confidentialAncestor = confidentialAncestorOf(srcAbsPath);
  if (confidentialAncestor) {
    return path.join(confidentialAncestor, TRASH_DIRNAME);
  }
  return path.join(rootAbsPathFor(virtualPath), TRASH_DIRNAME);
}

export async function listDir(relPath = '.') {
  // "." = root virtual gabungan semua folder yang diizinkan -> tampilkan
  // nama-nama root itu sendiri sebagai "folder", bukan baca filesystem asli
  // (tidak ada satu folder fisik tunggal yang mewakili gabungan semuanya).
  if (relPath === '.' || relPath === '') {
    return listRootNames().map((name) => `${name}/`);
  }

  const target = safeResolve(relPath);
  const entries = await fs.readdir(target, { withFileTypes: true });
  // Sembunyikan entry yang termasuk BLOCKED_PATHS dari hasil listing folder
  // induknya juga (bukan cuma ditolak saat dibuka langsung), supaya
  // keberadaannya pun tidak terekspos ke user lewat command "list".
  return entries
    .filter((e) => e.name !== TRASH_DIRNAME)
    .filter((e) => !OS_JUNK_FILENAMES.has(e.name))
    .filter((e) => !isBlocked(path.join(target, e.name)))
    .map((e) => (e.isDirectory() ? `${e.name}/` : e.name));
}

export async function copyPath(srcRel, dstRel) {
  const src = safeResolve(srcRel);
  const dst = safeResolve(dstRel);

  // Cegah copy folder yang MENGANDUNG sebuah BLOCKED_PATH di dalamnya (mis.
  // copy "D/Project" yang di dalamnya ada "D/Project/Coding/Nausync Engine"
  // yang di-block) — kalau dibiarkan, isinya akan terduplikat ke lokasi
  // TUJUAN yang boleh jadi TIDAK di-block, sehingga konten sensitif jadi
  // "bocor" ke folder yang bisa diakses bebas walau sumber aslinya aman.
  if (containsBlockedPath(src)) {
    throw new Error(`"${srcRel}" tidak bisa di-copy karena mengandung folder/file yang diblokir (BLOCKED_PATHS) di dalamnya. Copy isi per-item saja, lewati yang diblokir.`);
  }

  // Proteksi overwrite senyap: tanpa ini, fs.copyFile/fs.cp akan MENIMPA
  // file/folder tujuan yang sudah ada tanpa peringatan apa pun — risiko
  // kehilangan data tanpa sadar (mis. typo nama tujuan yang kebetulan sama
  // dengan file penting yang sudah ada). Kalau memang mau timpa, user harus
  // hapus/rename dulu tujuannya secara eksplisit.
  if (fsSync.existsSync(dst)) {
    throw new Error(`"${dstRel}" sudah ada. Copy dibatalkan supaya tidak menimpa data yang sudah ada tanpa sadar — hapus/rename dulu tujuannya kalau memang mau ditimpa.`);
  }

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

  // Sama seperti copyPath: cegah memindah folder INDUK yang di dalamnya ada
  // BLOCKED_PATH — kalau lolos, folder yang di-block ikut pindah ke lokasi
  // baru (yang mungkin tidak di-block), dan lokasi lama yang tadinya
  // dilindungi jadi hilang begitu saja.
  if (containsBlockedPath(src)) {
    throw new Error(`"${srcRel}" tidak bisa dipindah karena mengandung folder/file yang diblokir (BLOCKED_PATHS) di dalamnya. Pindahkan isinya per-item saja, lewati yang diblokir.`);
  }

  const dst = safeResolve(dstRel);

  // Sama seperti copyPath: cegah fs.rename menimpa tujuan yang sudah ada
  // tanpa peringatan (fs.rename di Node akan diam-diam mengganti file
  // tujuan kalau sudah ada, dan untuk folder bisa gagal aneh/menimpa
  // sebagian tergantung OS). Kalau memang mau timpa/rename ke nama yang
  // sudah dipakai, user harus hapus/rename dulu tujuannya secara eksplisit.
  if (fsSync.existsSync(dst)) {
    throw new Error(`"${dstRel}" sudah ada. Move dibatalkan supaya tidak menimpa data yang sudah ada tanpa sadar — hapus/rename dulu tujuannya kalau memang mau ditimpa.`);
  }

  await fs.mkdir(path.dirname(dst), { recursive: true });
  await fs.rename(src, dst);
  return dst;
}

// "delete" SEKARANG TIDAK PERMANEN — file/folder cuma dipindah ke folder
// ".trash" tersembunyi di dalam root yang sama (bukan langsung dihapus dari
// disk). Nama file di dalam trash ditambah timestamp biar tidak tertukar
// kalau ada nama yang sama dihapus berkali-kali. Buat hapus permanen,
// pakai purgePath() (dipanggil lewat command "purge").
export async function deletePath(relPath) {
  if (isRootItself(relPath)) {
    throw new Error(`"${relPath}" adalah folder root yang diizinkan itu sendiri, tidak boleh dihapus. Hapus isinya saja.`);
  }
  const src = safeResolve(relPath);

  // Cegah menghapus folder INDUK yang di dalamnya ada BLOCKED_PATH — tanpa
  // ini, "delete D/Project" tetap akan memindahkan isi
  // "D/Project/Coding/Nausync Engine" (folder yang di-block) ke trash,
  // walau "D/Project" sendiri lolos dari isBlocked() karena bukan target
  // yang persis di-block.
  if (containsBlockedPath(src)) {
    throw new Error(`"${relPath}" tidak bisa dihapus karena mengandung folder/file yang diblokir (BLOCKED_PATHS) di dalamnya. Hapus isinya per-item saja, lewati yang diblokir.`);
  }

  const trashDir = trashDirFor(src, relPath);
  await fs.mkdir(trashDir, { recursive: true });

  const baseName = path.basename(src);
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  let trashTarget = path.join(trashDir, `${stamp}__${baseName}`);
  // Jaga-jaga kalau ada nama yang sama persis kebetulan dihapus di detik
  // yang sama (harusnya jarang banget, tapi tetap dijaga biar tidak
  // ketimpa/hilang diam-diam).
  let attempt = 1;
  while (fsSync.existsSync(trashTarget)) {
    trashTarget = path.join(trashDir, `${stamp}-${attempt}__${baseName}`);
    attempt++;
  }

  await fs.rename(src, trashTarget);
  return trashTarget;
}

// Hapus permanen — TIDAK lewat trash, langsung dari disk. Ini logic lama
// yang sebelumnya dipakai deletePath(), sekarang dipisah jadi command
// "purge" sendiri (dengan konfirmasi yes/no di level command.js) supaya
// user tidak kepencet hapus permanen tanpa sadar.
export async function purgePath(relPath) {
  if (isRootItself(relPath)) {
    throw new Error(`"${relPath}" adalah folder root yang diizinkan itu sendiri, tidak boleh dihapus permanen. Hapus isinya saja.`);
  }
  const target = safeResolve(relPath);

  // Sama seperti deletePath, tapi lebih kritis lagi karena purge = hapus
  // PERMANEN tanpa lewat trash — kalau sampai lolos, isi BLOCKED_PATH di
  // dalamnya langsung musnah dari disk tanpa bisa dikembalikan sama sekali.
  if (containsBlockedPath(target)) {
    throw new Error(`"${relPath}" tidak bisa di-purge karena mengandung folder/file yang diblokir (BLOCKED_PATHS) di dalamnya. Purge isinya per-item saja, lewati yang diblokir.`);
  }

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

// --- Auto-purge trash setelah retensi habis (config.trashRetentionDays) ---
//
// KENAPA INI PERLU: "delete" cuma memindah ke ".trash" (tidak permanen),
// dan sebelumnya tidak ada mekanisme apa pun yang membersihkannya lagi
// kecuali user manual jalanin "purge" satu-satu. Kalau dibiarkan, trash
// menumpuk selamanya dan diam-diam menghabiskan storage — padahal user
// mungkin sudah lama lupa isinya (dan tidak butuh lagi).
//
// Dikumpulkan dari SEMUA lokasi trash yang mungkin dipakai bot: ".trash"
// di tiap root (root-level, lihat trashDirFor di atas), DITAMBAH ".trash"
// di dalam tiap CONFIDENTIAL_PATHS (karena file dari folder rahasia
// sengaja ditrash ke situ, bukan ke ".trash" root, biar proteksi PIN-nya
// ikut terbawa — lihat komentar trashDirFor()).
function allTrashDirs() {
  const dirs = new Set();
  for (const rootAbsPath of Object.values(config.allowedRoots)) {
    dirs.add(path.join(rootAbsPath, TRASH_DIRNAME));
  }
  for (const confidentialPath of config.confidentialPaths) {
    dirs.add(path.join(confidentialPath, TRASH_DIRNAME));
  }
  return [...dirs];
}

// Sapu semua folder trash, hapus PERMANEN item yang sudah lebih tua dari
// config.trashRetentionDays (dihitung dari mtime item itu di dalam trash —
// yaitu waktu dia DIPINDAH ke trash, karena deletePath melakukan fs.rename
// yang set ulang mtime). Dipanggil rutin (harian) dari index.js, bukan
// sesuatu yang dipicu command user.
//
// Return array path yang berhasil dihapus permanen, buat dilaporkan lewat
// email/log oleh pemanggilnya.
export async function purgeExpiredTrash() {
  const cutoffMs = config.trashRetentionDays * 24 * 60 * 60 * 1000;
  const now = Date.now();
  const purged = [];

  for (const trashDir of allTrashDirs()) {
    let entries;
    try {
      entries = await fs.readdir(trashDir, { withFileTypes: true });
    } catch {
      // Trash dir belum pernah dibuat, atau root-nya lagi tidak ke-mount
      // (mis. drive eksternal dicabut) -> lewati, bukan error fatal.
      continue;
    }

    for (const entry of entries) {
      const entryPath = path.join(trashDir, entry.name);
      let stat;
      try {
        stat = await fs.stat(entryPath);
      } catch {
        continue;
      }

      const ageMs = now - stat.mtimeMs;
      if (ageMs < cutoffMs) continue;

      try {
        await fs.rm(entryPath, { recursive: true, force: true });
        purged.push(entryPath);
      } catch (err) {
        console.warn(`⚠️ Gagal auto-purge trash "${entryPath}": ${err.message}`);
      }
    }
  }

  return purged;
}

// Compress srcAbsPath (file ATAU folder) jadi satu file .zip di
// destZipAbsPath. Dipakai command "archive" — tujuannya bikin transfer ke
// Google Drive lebih hemat bandwidth/waktu buat folder isinya banyak file
// kecil (1 koneksi upload, bukan ratusan file kecil satu-satu).
//
// Sengaja return Promise manual (bukan async/await polos) karena stream
// `archiver` berbasis event ('close'/'error'), bukan sesuatu yang bisa
// di-await langsung.
export function createZip(srcAbsPath, destZipAbsPath) {
  return new Promise((resolve, reject) => {
    // Cek di sini (BUKAN di top-level file) supaya kalau package "archiver"
    // bermasalah, cuma command "archive" ini yang gagal dengan pesan jelas —
    // command lain (list/copy/preview/dll) tetap jalan normal, bot tidak
    // ikut mati total.
    if (typeof ZipArchive !== 'function') {
      reject(new Error(
        'Package "archiver" tidak menyediakan class "ZipArchive" (kemungkinan ' +
        'versi package-nya belum sesuai/terlalu lama, atau instalasinya rusak). ' +
        'Coba jalankan "npm ls archiver" di folder project (lewat Command Prompt/' +
        'PowerShell, BUKAN lewat Discord) untuk cek versinya — kode ini butuh ' +
        'archiver versi 8 ke atas yang API-nya berbasis "ZipArchive" class.'
      ));
      return;
    }

    let stat;
    try {
      stat = fsSync.statSync(srcAbsPath);
    } catch (err) {
      reject(err);
      return;
    }

    const output = fsSync.createWriteStream(destZipAbsPath);
    // API BARU (archiver v8+): instantiate class-nya, bukan panggil sebagai
    // fungsi seperti versi lama (`archiver('zip', options)`).
    const archive = new ZipArchive({ zlib: { level: 9 } });

    output.on('close', () => resolve(destZipAbsPath));
    output.on('error', reject);
    archive.on('error', reject);
    archive.pipe(output);

    if (stat.isDirectory()) {
      archive.directory(srcAbsPath, path.basename(srcAbsPath));
    } else {
      archive.file(srcAbsPath, { name: path.basename(srcAbsPath) });
    }

    archive.finalize();
  });
}
```

### `src/index.js`

```javascript
import { Client, GatewayIntentBits, Partials } from 'discord.js';
import pino from 'pino';
import { handleCommand, BUILD_TAG } from './commands.js';
import { checkRcloneReady } from './rclone.js';
import { initPin, startPinExpiryWatcher, sendAlertEmail } from './pinStore.js';
import { purgeExpiredTrash } from './fsops.js';
import { config } from './config.js';

const logger = pino({ level: 'info' });

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

// Fungsi untuk menyalakan fitur utama setelah berhasil login ke Discord
client.once('ready', async () => {
  logger.info(`Bot Nausync Cloud sukses terhubung ke Discord sebagai: ${client.user.tag}`);
  logger.info(`Kode command yang aktif: ${BUILD_TAG}`);
  
  // Cek kesiapan rclone sekali saja saat awal start
  try {
    await checkRcloneReady();
    logger.info('rclone OK, remote Google Drive terhubung.');
  } catch (err) {
    logger.warn('rclone belum siap / remote belum dikonfigurasi.');
  }

  // Generate PIN keamanan (sekali saja, first run) & kirim ke email —
  // lihat pinStore.js. Command berbahaya (shutdown/restart/purge) butuh
  // PIN ini, independen dari Discord, supaya tetap aman walau akun
  // Discord kena hack.
  try {
    await initPin();
    startPinExpiryWatcher();
    logger.info('PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali).');
  } catch (err) {
    logger.error(err, 'Gagal inisialisasi PIN keamanan.');
  }

  // Jalankan sweep auto-purge trash sekali di awal, lalu jadwalkan ulang
  // tiap TRASH_SWEEP_INTERVAL_MS selama proses bot hidup (pola sama seperti
  // startPinExpiryWatcher di atas).
  runTrashRetentionSweep();
  setInterval(runTrashRetentionSweep, TRASH_SWEEP_INTERVAL_MS);

  // --- FITUR BARU: KIRIM PESAN NOTIFIKASI STARTUP LANGSUNG KE DM OWNER ---
  try {
    const ownerId = process.env.DISCORD_OWNER_ID;
    if (ownerId) {
      // Ambil objek pengguna berdasarkan ID pemilik di file .env
      const owner = await client.users.fetch(ownerId);
      
      // Kirim pesan salam pembuka ke DM pribadi Anda
      await owner.send(`🟢 *Bot Nausync Cloud Telah Aktif!* \nLaptop Anda di rumah baru saja dinyalakan/login dan sistem background sudah *stand-by* menerima perintah Anda.`);
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
      await message.reply(reply);
    }

    // Catat balasan bot ke log juga (dipotong biar log tidak kebanjiran),
    // supaya kalau ada masalah bisa dicek dari log server tanpa perlu
    // screenshot Discord tiap kali.
    const replyPreview = reply ? reply.slice(0, 300).replace(/\n/g, ' ') : '(null / sudah dikirim manual)';
    logger.info(`Balasan bot untuk "${text}": ${replyPreview}`);
  } catch (err) {
    logger.error(err, `Gagal memproses command "${text}"`);
    await message.reply('Terjadi kesalahan internal saat menjalankan perintah.');
  }
});

client.on('error', (err) => {
  logger.error(err, 'Terjadi error pada koneksi Discord');
});

client.login(process.env.DISCORD_TOKEN).catch((err) => {
  logger.error(err, 'Gagal login ke Discord.');
  process.exit(1);
});
```

### `src/pathGuard.js`

```javascript
import fs from 'node:fs';
import path from 'node:path';
import { config } from './config.js';

/**
 * Pisahkan virtual path (mis. "Documents/Skripsi/bab1.docx") jadi
 * { rootName: "Documents", rest: ["Skripsi", "bab1.docx"] }.
 */
function splitVirtualPath(virtualPath) {
  const normalized = virtualPath.replace(/\\/g, '/').replace(/^\/+/, '');
  const segments = normalized.split('/').filter(Boolean);
  return { rootName: segments[0], rest: segments.slice(1) };
}

/**
 * Resolve virtual path jadi path absolut di filesystem, dan pastikan
 * hasilnya tidak keluar dari root yang bersangkutan (mencegah "../../"
 * traversal, path absolut liar, atau lompat ke drive/folder lain yang
 * tidak di-whitelist).
 *
 * Segment pertama dari path WAJIB nama salah satu root di ALLOWED_ROOTS
 * (mis. "Documents", "D", "Pictures") — ini menggantikan konsep BASE_DIR
 * tunggal yang lama, sekarang bisa banyak folder root sekaligus.
 *
 * Contoh virtual path yang valid:
 *   "Documents"              -> root Documents itu sendiri
 *   "Documents/Skripsi"      -> subfolder di dalam root Documents
 *   "D/Project/app.js"       -> file di dalam root D
 */
export function safeResolve(virtualPath) {
  if (!virtualPath || typeof virtualPath !== 'string') {
    throw new Error('Path kosong atau tidak valid.');
  }

  const { rootName, rest } = splitVirtualPath(virtualPath);

  if (!rootName) {
    throw new Error('Path harus diawali nama folder yang diizinkan. Ketik "list" di root untuk lihat daftarnya.');
  }

  const rootAbsPath = config.allowedRoots[rootName];
  if (!rootAbsPath) {
    const available = listRootNames().join(', ');
    throw new Error(`"${rootName}" bukan folder yang diizinkan. Folder yang tersedia: ${available}`);
  }

  // Bersihkan drive-letter/path absolut liar yang mungkin diselipkan di
  // tengah-tengah segmen (mis. "Documents/C:\Windows") biar tidak bisa
  // "kabur" lewat trik semacam itu.
  const cleanedRest = rest
    .map((seg) => seg.replace(/^[a-zA-Z]:\\?/, ''))
    .join('/');

  const resolved = path.resolve(rootAbsPath, cleanedRest);

  const normalizedRoot = rootAbsPath.endsWith(path.sep) ? rootAbsPath : rootAbsPath + path.sep;

  if (resolved !== rootAbsPath && !resolved.startsWith(normalizedRoot)) {
    throw new Error(`Path "${virtualPath}" berada di luar folder "${rootName}" yang diizinkan.`);
  }

  if (isBlocked(resolved)) {
    throw new Error(`Path "${virtualPath}" adalah folder/file yang diblokir dan tidak boleh diakses.`);
  }

  // --- Pertahanan symlink-escape ---
  // Semua pengecekan di atas cuma memvalidasi STRING path-nya (mencegah
  // "../../" dsb). Tapi kalau di dalam salah satu ALLOWED_ROOTS ada
  // symlink (dibuat sengaja atau tidak sengaja oleh program lain) yang
  // menunjuk ke folder di LUAR root itu, string path-nya tetap kelihatan
  // "aman" walau lokasi FISIK sebenarnya di disk sudah keluar sandbox —
  // fs.readdir/fs.cp/fs.rename Node.js otomatis mengikuti symlink itu
  // tanpa peduli batas ALLOWED_ROOTS.
  //
  // fs.realpathSync() mengikuti SEMUA symlink di sepanjang path (termasuk
  // folder induknya, bukan cuma target akhir), jadi hasilnya adalah lokasi
  // fisik sebenarnya. Kalau itu ternyata sudah keluar dari root asli, tolak.
  //
  // Path yang BELUM ada di disk (mis. tujuan "copy"/"move" yang baru mau
  // dibuat) akan gagal realpath dengan ENOENT — itu normal & tidak masalah,
  // karena belum ada apa pun yang bisa "kabur" lewat symlink yang belum
  // exist. Biarkan lolos, nanti fs.mkdir/fs.rename yang benar-benar
  // membuatnya di lokasi `resolved` yang sudah tervalidasi.
  let realResolved;
  try {
    realResolved = fs.realpathSync(resolved);
  } catch {
    realResolved = null;
  }

  if (realResolved) {
    let realRoot;
    try {
      realRoot = fs.realpathSync(rootAbsPath);
    } catch {
      realRoot = rootAbsPath;
    }
    const normalizedRealTarget = normalizeForCompare(realResolved);
    const normalizedRealRoot = normalizeForCompare(realRoot);
    const realRootWithSep = normalizedRealRoot.endsWith(path.sep) ? normalizedRealRoot : normalizedRealRoot + path.sep;

    if (normalizedRealTarget !== normalizedRealRoot && !normalizedRealTarget.startsWith(realRootWithSep)) {
      throw new Error(`Path "${virtualPath}" mengarah lewat symlink ke luar folder "${rootName}" yang diizinkan — akses ditolak.`);
    }
  }

  return resolved;
}

/**
 * True kalau absPath (path filesystem absolut, hasil resolve) sama dengan,
 * atau berada DI DALAM, salah satu folder/file yang didaftarkan di
 * BLOCKED_PATHS — dipakai untuk mengecualikan folder sensitif (mis. folder
 * project bot ini sendiri yang berisi .env) walaupun berada di dalam root
 * yang diizinkan (mis. root "D" yang mencakup seluruh drive D:).
 */
// Windows tidak peduli huruf besar/kecil pada nama folder ("D:\Project" dan
// "D:\PROJECT" adalah folder yang SAMA di disk), tapi perbandingan string
// biasa (startsWith) itu case-SENSITIVE. Tanpa normalisasi ini, path yang
// diketik beda kapitalisasi dari BLOCKED_PATHS/CONFIDENTIAL_PATHS bisa lolos
// dari pengecekan padahal menyasar folder fisik yang sama persis. Di
// Linux/Mac (di mana filesystem umumnya case-sensitive), perbandingan tetap
// apa adanya.
function normalizeForCompare(p) {
  return process.platform === 'win32' ? p.toLowerCase() : p;
}

export function isBlocked(absPath) {
  const target = normalizeForCompare(absPath);
  return config.blockedPaths.some((blocked) => {
    const b = normalizeForCompare(blocked);
    if (target === b) return true;
    const normalizedBlocked = b.endsWith(path.sep) ? b : b + path.sep;
    return target.startsWith(normalizedBlocked);
  });
}

/**
 * True kalau absPath sama dengan, atau berada DI DALAM, salah satu folder
 * di CONFIDENTIAL_PATHS. Beda dengan isBlocked(): folder confidential masih
 * boleh muncul di "list" (namanya kelihatan), tapi command yang MEMBACA
 * ISINYA (preview/download) wajib PIN + trigger email alert — lihat
 * commands.js.
 */
export function isConfidential(absPath) {
  const target = normalizeForCompare(absPath);
  return config.confidentialPaths.some((confidential) => {
    const c = normalizeForCompare(confidential);
    if (target === c) return true;
    const normalized = c.endsWith(path.sep) ? c : c + path.sep;
    return target.startsWith(normalized);
  });
}

/**
 * Cari path confidential (dari CONFIDENTIAL_PATHS) yang menjadi LELUHUR
 * (atau sama persis dengan) absPath — kembalikan path confidential asli
 * (bukan absPath itu sendiri) kalau ketemu, atau null kalau absPath tidak
 * ada di dalam folder confidential mana pun.
 *
 * KENAPA INI PERLU: deletePath() di fsops.js memindahkan file ke ".trash"
 * di dalam ROOT (mis. "D:/.trash"), bukan di lokasi asli file itu berada.
 * Tanpa fungsi ini, menghapus file dari folder confidential (mis.
 * "D:/Project/Data Siswa/nilai.xlsx") akan membuat file itu "naik keluar"
 * dari perlindungan CONFIDENTIAL_PATHS begitu masuk ".trash" di root —
 * padahal isinya tetap sama sensitifnya, cuma lokasinya berubah. Dipakai
 * fsops.js untuk menaruh trash-nya TETAP di dalam folder confidential
 * asal (bukan di ".trash" milik root), supaya proteksi PIN-nya ikut
 * terbawa walau file sudah "dihapus" (dipindah ke trash).
 */
export function confidentialAncestorOf(absPath) {
  const target = normalizeForCompare(absPath);
  let best = null;
  for (const confidential of config.confidentialPaths) {
    const c = normalizeForCompare(confidential);
    const normalized = c.endsWith(path.sep) ? c : c + path.sep;
    if (target === c || target.startsWith(normalized)) {
      // Ambil yang paling SPESIFIK (path terpanjang) kalau ada beberapa
      // confidential path yang bersarang (mis. "D/Project" dan
      // "D/Project/Data Siswa" sama-sama terdaftar).
      if (!best || confidential.length > best.length) {
        best = confidential;
      }
    }
  }
  return best;
}

/**
 * True kalau virtualPath merujuk PERSIS ke root itu sendiri (bukan isi di
 * dalamnya) — dipakai untuk mencegah delete/move folder root secara utuh
 * (yang bisa menghapus/memindah seluruh folder Documents/Music/dst).
 */
export function isRootItself(virtualPath) {
  const { rootName, rest } = splitVirtualPath(virtualPath);
  return Boolean(rootName) && rest.length === 0 && Boolean(config.allowedRoots[rootName]);
}

/**
 * True kalau absPath adalah folder LELUHUR (ancestor) dari salah satu
 * BLOCKED_PATHS — arah kebalikan dari isBlocked(). isBlocked() menjawab
 * "apakah target ada DI DALAM sesuatu yang di-block?"; fungsi ini menjawab
 * "apakah target ADALAH folder yang MENGANDUNG sesuatu yang di-block, di
 * kedalaman berapa pun?"
 *
 * Ini WAJIB dicek sebelum operasi yang bersifat rekursif/menyapu seluruh isi
 * folder (delete/purge/move) — karena tanpa ini, menghapus folder induk yang
 * tidak masuk BLOCKED_PATHS (mis. "D/Project") tetap akan ikut menghapus isi
 * BLOCKED_PATHS yang ada di dalamnya (mis. "D/Project/Coding/Nausync
 * Engine"), sebab operasi filesystem (fs.rename/fs.rm) tidak tahu-menahu
 * soal daftar blokir — dia cuma diberi tahu "hapus folder ini dan semua
 * isinya".
 */
export function containsBlockedPath(absPath) {
  const target = normalizeForCompare(absPath);
  const normalizedTarget = target.endsWith(path.sep) ? target : target + path.sep;
  return config.blockedPaths.some((blocked) => normalizeForCompare(blocked).startsWith(normalizedTarget));
}

/**
 * Daftar nama-nama root yang diizinkan (urut alfabetis), dipakai untuk
 * menampilkan "folder virtual" tingkat atas saat "list"/"help" di root "/".
 *
 * Hanya root yang PATH-nya benar-benar ada di filesystem saat ini yang
 * ditampilkan — mis. root untuk SD card/drive eksternal yang belum dicolok
 * otomatis disembunyikan dari daftar, tanpa perlu restart bot. Begitu
 * drive-nya dicolok lagi, root itu otomatis muncul lagi di command
 * berikutnya (dicek ulang tiap kali fungsi ini dipanggil, bukan di-cache).
 */
export function listRootNames() {
  return Object.keys(config.allowedRoots)
    .filter((name) => fs.existsSync(config.allowedRoots[name]))
    .sort((a, b) => a.localeCompare(b, 'id', { sensitivity: 'base' }));
}
```

### `src/pinStore.js`

```javascript
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
    subject: `🔐 Nausync Cloud — ${subject}`,
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
    subject: `🔐 Nausync Cloud — ${subject}`,
    text: `${introText}\n\nPIN: ${pin}`,
    html: buildPinEmailHtml(pin, introText),
  });
}

// Dipanggil sekali saat bot startup (dari index.js). Kalau belum ada PIN
// tersimpan (first run), generate PIN baru otomatis & kirim ke email
// terpisah (BUKAN lewat Discord), sesuai desain: PIN harus independen
// dari kanal Discord yang mungkin di-hack.
export async function initPin() {
  const store = loadStore();
  if (store) return; // sudah ada, tidak perlu generate ulang

  const pin = generateRandomPin();
  const salt = crypto.randomBytes(16).toString('hex');
  saveStore({ hash: hashPin(pin, salt), salt, updatedAt: new Date().toISOString() });

  try {
    await sendPinDeliveryEmail(
      'PIN awal untuk command berbahaya',
      pin,
      'PIN untuk validasi command berbahaya (shutdown/restart/purge/preview folder rahasia). Dibuat otomatis saat bot pertama kali dijalankan. Simpan baik-baik — PIN ini tidak akan berubah sampai kamu ganti sendiri lewat command "chgpin".'
    );
  } catch (err) {
    // Kalau SMTP belum di-setting / gagal kirim, tampilkan di log server
    // sebagai fallback SATU KALI ini saja, supaya owner tidak terkunci
    // total dari fitur PIN sejak hari pertama.
    console.warn(`⚠️ Gagal kirim email PIN awal (${err.message}).`);
    console.warn(`⚠️ PIN awal (fallback, HANYA muncul di log ini): ${pin}`);
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
export async function verifyAndRotatePin(inputPin, reason) {
  verifyPin(inputPin); // lempar Error kalau salah/lockout, tidak lanjut ke bawah

  const newPin = generateRandomPin();
  const salt = crypto.randomBytes(16).toString('hex');
  saveStore({ hash: hashPin(newPin, salt), salt, updatedAt: new Date().toISOString() });

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
```

### `src/rclone.js`

```javascript
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import { config } from './config.js';

const execFileAsync = promisify(execFile);

/**
 * Upload file/folder lokal ke folder staging Google Drive lewat rclone.
 * Membutuhkan rclone sudah terinstall & remote sudah dikonfigurasi (`rclone config`).
 */
export async function uploadToDrive(localAbsPath) {
  const remoteTarget = `${config.rcloneRemote}:${config.rcloneStagingFolder}`;
  const fileName = path.basename(localAbsPath);

  await execFileAsync('rclone', ['copy', localAbsPath, remoteTarget, '--progress=false']);

  return { fileName, remoteTarget };
}

/**
 * Cek apakah rclone terinstall & remote bisa diakses. Berguna untuk healthcheck saat startup.
 */
export async function checkRcloneReady() {
  await execFileAsync('rclone', ['lsd', `${config.rcloneRemote}:`]);
}
```

### `src copy/commands.js`

```javascript
import { listDir, copyPath, movePath, deletePath, purgePath, resolveForRclone, createZip } from './fsops.js';
import { listRootNames, isConfidential, containsBlockedPath, safeResolve } from './pathGuard.js';
import { uploadToDrive } from './rclone.js';
import { config } from './config.js';
import fs from 'fs';
import path from 'node:path';
import os from 'node:os';
import { exec, spawn } from 'child_process';
import { promisify } from 'util';
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } from 'discord.js';
import { verifyPin, changePin, verifyAndRotatePin, sendAlertEmail } from './pinStore.js';

const execAsync = promisify(exec);

// --- Batas ukuran yang wajib PIN (copy/download/archive) ---
// Bukan cuma soal keamanan (cegah hacker yang berhasil masuk Discord asal
// copy/download berulang-ulang), tapi juga proteksi teknis: transfer file
// gede tanpa PIN gate bisa bikin bot ke-flood command yang sama berkali2
// (RAM/CPU numpuk dari beberapa proses rclone/compress paralel) dan bikin
// storage lokal + Google Drive penuh tak terkendali kalau di-spam.
const PIN_SIZE_THRESHOLD = 50 * 1024 * 1024; // 50MB

// Dipakai di command berbahaya (shutdown/restart/purge/dll): ambil argumen
// TERAKHIR sebagai PIN, verifikasi, dan return sisa argumen sebelumnya
// (argumen "asli" command itu, tanpa PIN-nya). Lempar Error kalau PIN
// salah/kosong/lockout — otomatis ke-catch oleh try/catch di handleCommand
// dan tampil sebagai balasan "Gagal: ...".
// `reason` dipakai buat 2 hal: (1) label di email rotasi PIN otomatis
// (lihat verifyAndRotatePin di pinStore.js), (2) label di email alert
// "command berhasil dieksekusi" yang dikirim SETELAH aksi command-nya
// benar-benar selesai (lihat pemanggilan sendAlertEmail di tiap case).
async function requirePin(args, reason) {
  if (args.length === 0) {
    throw new Error('Command ini butuh PIN keamanan di argumen terakhir. Contoh: `shutdown Ab3xQ9kZ`.');
  }
  const pin = args[args.length - 1];
  await verifyAndRotatePin(pin, reason);
  return args.slice(0, -1);
}

// Penanda versi kode yang sedang berjalan — tampil di log startup (index.js)
// dan di "help", supaya gampang mastiin apakah bot beneran udah pakai file
// commands.js terbaru atau masih versi lama (mis. abis edit tapi restart-nya
// gagal reload / salah file yang ditimpa). Naikkan angkanya tiap kali bikin
// perubahan besar ke command handling.
export const BUILD_TAG = 'cmds-v12-network-status';

// --- FITUR: "current directory" per sesi bot, biar user tidak perlu ketik ---
// path panjang berulang-ulang tiap mau list/copy/move/delete/download.
// Konsepnya mirip `cd` di terminal: sekali pindah folder dengan "cd <folder>",
// command lain (list, copy, move, delete, download) otomatis dianggap relatif
// terhadap folder itu, kecuali user awali dengan "/" (artinya relatif ke root
// BASE_DIR) atau pakai "..".
// State ini disimpan di memory proses (bukan per-user), cukup karena bot ini
// memang cuma dipakai 1 owner.
let currentDir = '.'; // relatif terhadap BASE_DIR, pakai format "/"

// Menyimpan hasil "list" TERAKHIR (array virtual path lengkap, urut sesuai
// nomor yang ditampilkan ke user), supaya user bisa merujuk item lewat
// nomornya pakai ":<angka>" alih-alih ngetik ulang nama folder/file yang
// panjang. Contoh: abis "list Documents" nampilin "2. 📁 Skripsi/", user
// bisa langsung "cd :2" tanpa ngetik "cd Skripsi".
//
// Sengaja pakai prefix ":" (bukan angka polos) karena ":" adalah salah satu
// karakter yang TIDAK VALID di nama file/folder Windows — jadi ":3" pasti
// tidak akan pernah tertukar/bentrok dengan nama file/folder asli yang
// kebetulan berupa angka. State ini di-reset tiap kali "list" baru
// dijalankan (bukan per-user, cukup karena bot ini cuma dipakai 1 owner).
let lastListing = [];

// Deteksi argumen berformat ":<angka>" (persis titik dua diikuti digit,
// tanpa apa pun lagi) dan terjemahkan jadi virtual path lengkap dari hasil
// "list" terakhir. Return null kalau inputPath bukan format index (berarti
// harus diproses sebagai path biasa oleh resolvePathArg).
function resolveIndexRef(inputPath) {
  const match = /^:(\d+)$/.exec(inputPath);
  if (!match) return null;

  if (lastListing.length === 0) {
    throw new Error('Belum ada hasil "list" yang bisa dirujuk pakai nomor. Jalankan "list" dulu.');
  }

  const idx = parseInt(match[1], 10) - 1;
  if (idx < 0 || idx >= lastListing.length) {
    throw new Error(`Nomor ":${match[1]}" tidak ada di hasil "list" terakhir (cuma ada 1-${lastListing.length}). Jalankan "list" lagi kalau perlu.`);
  }

  return lastListing[idx];
}

// Nyimpen ID pesan hasil "preview" yang masih "aktif" (belum di-clear), supaya
// command "clear" cuma hapus pesan-pesan itu — bukan seluruh riwayat chat.
//
// PENTING: array ini di-PERSIST ke file (bukan cuma di memory) — soalnya
// kalau bot di-restart, PC restart, atau mati listrik SEBELUM sempat
// "clear", array in-memory bakal ke-reset kosong padahal pesan preview-nya
// (termasuk yang berasal dari folder RAHASIA) MASIH kelihatan di riwayat
// chat Discord. Tanpa persist, bot jadi "lupa" ID pesan itu selamanya dan
// "clear" tidak akan pernah bisa menghapusnya lagi walau bot sudah nyala
// ulang. Dengan disimpan ke file, begitu bot start lagi, daftar ID lama
// otomatis ke-load kembali dan "clear" tetap bisa menghapusnya normal.
const PREVIEW_STORE_FILE = path.resolve('./previewMessages.store.json');

function loadPreviewMessages() {
  try {
    if (!fs.existsSync(PREVIEW_STORE_FILE)) return [];
    const raw = JSON.parse(fs.readFileSync(PREVIEW_STORE_FILE, 'utf-8'));
    return Array.isArray(raw) ? raw : [];
  } catch {
    // File corrupt/rusak -> jangan sampai bikin bot gagal start gara-gara
    // ini, cukup anggap kosong (skenario terburuknya cuma balik ke masalah
    // lama: preview lama harus dihapus manual).
    return [];
  }
}

function savePreviewMessages() {
  try {
    fs.writeFileSync(PREVIEW_STORE_FILE, JSON.stringify(previewMessages, null, 2), 'utf-8');
  } catch (err) {
    console.warn(`⚠️ Gagal simpan previewMessages.store.json: ${err.message}`);
  }
}

const previewMessages = loadPreviewMessages();

function displayDir() {
  return currentDir === '.' ? '/' : `/${currentDir}`;
}

// Sama seperti displayDir(), tapi buat virtual path arbitrer (bukan cuma
// currentDir) — dipakai di hasil copy/move/delete supaya yang ditampilkan
// ke user path VIRTUAL yang rapi ("/Documents/CV.pdf"), bukan path disk asli
// yang panjang ("D:\Users\Naufal Khalil\Documents\CV.pdf").
function toDisplayPath(virtualPath) {
  return virtualPath === '.' ? '/' : `/${virtualPath}`;
}

// Gabungkan sebuah argumen path yang diketik user dengan currentDir yang aktif.
// - "" atau "." -> currentDir apa adanya
// - diawali "/" -> dianggap relatif terhadap root BASE_DIR (bukan currentDir)
// - selain itu -> digabung dengan currentDir (mendukung "..", "../..", dst)
function resolvePathArg(inputPath) {
  if (!inputPath || inputPath === '.') return currentDir;

  // ":<angka>" -> rujuk langsung ke item bernomor itu dari hasil "list"
  // terakhir (virtual path lengkap, sudah relatif terhadap root sandbox,
  // BUKAN relatif terhadap currentDir) — jadi bisa langsung dipakai sebagai
  // hasil akhir, lewati logic gabung-dengan-currentDir di bawah.
  const indexTarget = resolveIndexRef(inputPath);
  if (indexTarget !== null) return indexTarget;

  const normalizedInput = inputPath.replace(/\\/g, '/');

  let combined;
  if (normalizedInput.startsWith('/')) {
    const stripped = normalizedInput.replace(/^\/+/, '');
    combined = stripped === '' ? '.' : path.posix.normalize(stripped);
  } else {
    const base = currentDir === '.' ? '' : currentDir;
    combined = path.posix.normalize(path.posix.join(base, normalizedInput));
  }

  if (combined === '' || combined === '.') return '.';

  // BUG FIX: kalau hasil gabungan path masih diawali "..", artinya user
  // mencoba naik lebih tinggi dari root sandbox (mis. "cd .." diulang
  // sampai lebih tinggi dari BASE_DIR, atau path absolut kayak "/../../etc").
  // Sebelumnya string ".." / "../.." ini lolos dan currentDir jadi rusak,
  // bikin navigasi berikutnya ("cd Project") ikut nyasar ke luar sandbox
  // (kadang sampai ke root drive Windows kalau safeResolve kebetulan tidak
  // menahannya). Clamp ke root ('.') di sini, jangan biarkan lolos sama sekali.
  if (combined === '..' || combined.startsWith('../')) return '.';

  return combined;
}

function buildHelpText() {
  const rootsList = listRootNames().map((name) => `• \`${name}\``).join('\n');

  return `**📦 Nausync Cloud** \`(${BUILD_TAG})\`

**Navigasi**
• \`cd <folder>\`
• \`cd ..\`
• \`root\`
• \`pwd\`
• \`list [folder]\`

**File**
• \`copy <src> <dst>\` 🔐*
• \`move <src> <dst>\` 🔐*
• \`delete <path>\` 🔐*
• \`purge <path> <pin>\` 🔐
• \`info <path>\`
• \`preview <path>\` 🔐*
• \`download <path>\` 🔐*
• \`archive <path>\` 🔐*
• \`clear\`

**Laptop**
• \`baterai\`
• \`disk\`
• \`network\` 🔐*
• \`mode server\`
• \`mode hemat\`
• \`shutdown <pin>\` 🔐
• \`restart <pin>\` 🔐
• \`cancel\`

**Keamanan**
• \`chgpin <pin_lama>\` 🔐

🔐 = selalu butuh PIN keamanan.
🔐* = butuh PIN CUMA kalau kondisi tertentu terpenuhi (cek \`?copy\`/\`?move\`/\`?preview\`/\`?download\`/\`?archive\`/\`?network\`).
PIN dikirim ke email, cek \`?chgpin\`.

Ketik \`?<command>\` buat penjelasan detail tiap command, mis. \`?root\`.

**Folder root:**
${rootsList}`;
}

// Penjelasan detail per-command, sengaja TIDAK dimasukkan ke "help" utama
// (biar "help" tetap ringkas) — cuma bisa diakses lewat command tersembunyi
// "?<nama>", mis. "?pwd" atau "?download". Prefix "?" dipilih dengan alasan
// sama seperti ":" di lastListing: karakter ini TIDAK VALID di nama file
// Windows, jadi "?pwd" nggak akan pernah tertukar dengan path/nama asli.
const DETAILED_HELP = {
  help: '**help** — daftar command\nNampilin daftar semua command yang ada (ringkas). Buat penjelasan detail cara pakai command tertentu, ketik `?<command>`, mis. `?cd` atau `?download`. Dua aturan umum yang berlaku ke hampir semua command: (1) path yang kamu ketik itu relatif ke folder aktif (`pwd`), awali dengan `/` kalau mau langsung dari root, mis. `list /Documents/Kerja`; (2) abis `list`, tiap item dapat nomor yang bisa dirujuk pakai `:<nomor>` di command berikutnya, mis. `cd :2`.',

  pwd: '**pwd** — lihat folder aktif\nNunjukin folder mana yang lagi "aktif" sekarang (hasil `cd` terakhir), biar nggak perlu inget-inget sendiri lagi di mana. Semua command lain (list/copy/move/delete/download/preview) yang argumennya bukan path lengkap otomatis dianggap relatif ke folder aktif ini.',

  cd: '**cd** — pindah folder aktif (atau preview kalau target file)\n`cd <folder>` pindah ke folder itu (relatif ke folder aktif sekarang). `cd ..` naik satu tingkat, nggak bisa naik lebih tinggi dari root sandbox. Awali path dengan `/` buat langsung loncat dari root virtual, mis. `cd /Documents/Kerja`. Bisa juga pakai nomor dari `list` terakhir: `cd :2`. 🆕 Kalau targetnya ternyata FILE (bukan folder), `cd` otomatis jadi shortcut buat lihat file itu (attachment apa adanya, sama kayak preview versi lama) — cocok kalau cuma mau intip cepat. Tetap butuh PIN kalau file-nya di folder RAHASIA atau ukurannya ≥50MB: `cd <file> <pin>`.',

  root: '**root** — langsung balik ke root sandbox\nDipakai kalau folder aktif sekarang udah jauh nyasar ke dalam (mis. `/Documents/Kerja/2024/Laporan`) dan mau langsung balik ke root virtual tanpa `cd ..` berkali-kali atau ngetik `cd /`. Sama persis efeknya kayak `cd /`, cuma lebih singkat.',

  list: '**list** — lihat isi folder\n`list` tanpa argumen nampilin isi folder aktif; `list <folder>` nampilin folder lain tanpa perlu pindah ke situ dulu. Tiap item dapat nomor urut yang bisa dirujuk pakai `:<nomor>` di command berikutnya (cd/copy/move/delete/download/preview/archive). Kalau isinya kepanjangan buat 1 pesan Discord, otomatis dipecah jadi beberapa halaman pakai tombol ◀️▶️.',

  copy: '**copy** — copy file/folder\n`copy <src> <dst>` — src & dst boleh nama folder/file biasa, path lengkap (`/Documents/x`), atau nomor dari `list` terakhir (`:3`). Folder di-copy beserta isinya (recursive). File asal tidak terhapus. 🔒 Wajib tambah PIN di argumen terakhir (`copy <src> <dst> <pin>`) kalau src ada di folder RAHASIA (CONFIDENTIAL_PATHS) dan/atau ukurannya ≥50MB — mencegah bot crash/storage penuh, mencegah copy berulang-ulang kalau Discord-mu kena hack, dan mencegah data rahasia diduplikat diam-diam ke lokasi bebas.',

  archive: '**archive** — compress ke .zip lalu upload\n`archive <path>` mengompres file/folder itu jadi satu file `.zip`, upload ke Google Drive (folder staging), lalu file `.zip` LOKAL langsung dihapus permanen begitu upload selesai (sukses ATAU gagal — nggak dibiarkan numpuk). Cocok buat folder isinya banyak file kecil, biar upload-nya 1 koneksi aja (lebih hemat bandwidth & waktu dibanding `download` biasa file satu-satu). 🔒 Kalau ukuran ASLI (sebelum di-zip) ≥50MB, atau file-nya ada di folder RAHASIA, wajib PIN: `archive <path> <pin>`.',

  move: '**move** — pindah/rename file/folder\n`move <src> <dst>` — sama aturan path-nya kayak `copy`, tapi file asal berpindah (bukan diduplikat), jadi juga dipakai buat rename (`move CV.pdf "CV Baru.pdf"`). Folder root yang diizinkan sendiri (mis. seluruh "Documents") nggak bisa dipindah/di-rename, cuma isinya. 🔒 Wajib PIN (`move <src> <dst> <pin>`) kalau src ada di folder RAHASIA dan/atau ukurannya ≥50MB — sama gatenya kayak `copy`.',

  delete: '**delete** — hapus file/folder (TIDAK permanen)\n`delete <path>` mindahin file/folder itu ke folder ".trash" tersembunyi di root yang sama — bukan dihapus dari disk. Folder ".trash" ini sengaja disembunyikan dari `list`, tapi tetap bisa diakses manual lewat path kalau perlu ambil balik isinya (mis. `list Documents/.trash`). Item di trash otomatis dihapus PERMANEN setelah beberapa hari (lihat `?purge`) kalau tidak dipulihkan manual duluan. Folder root yang diizinkan sendiri nggak bisa dihapus, cuma isinya. 🔒 Wajib PIN (`delete <path> <pin>`) kalau path-nya ada di folder RAHASIA (CONFIDENTIAL_PATHS) — sama gatenya kayak `copy`/`move`, dan tiap penghapusan folder rahasia dikirim alert ke email. Buat hapus beneran permanen SEKARANG JUGA (bukan nunggu retensi), pakai `purge`.',

  purge: '**purge** — hapus PERMANEN (butuh PIN + konfirmasi)\n`purge <path> <pin>` beda sama `delete` — ini langsung hapus dari disk, TIDAK masuk ".trash", TIDAK BISA dibatalkan. Sekarang butuh PIN keamanan di argumen terakhir (lihat `?chgpin`), baru setelah itu bot nanya konfirmasi tombol "Ya, Hapus Permanen" / "Batal". Dua lapis ini sengaja dipasang karena `purge` paling merusak & tidak bisa diundo.\n\nCatatan: item yang sudah masuk ".trash" lewat `delete` juga otomatis kena "purge" versi OTOMATIS setelah beberapa hari (default 30 hari, atur lewat `TRASH_RETENTION_DAYS` di .env) — sweep ini jalan sekali sehari, dan owner selalu dapat email ringkasan kalau ada yang benar-benar terhapus permanen lewat jalur ini.',

  cancel: '**cancel** — batalkan shutdown/restart yang masih pending\n`cancel` menghentikan proses shutdown/restart yang lagi dalam masa tunggu 15 detik (mis. abis ketik `shutdown <pin>` tapi berubah pikiran). TIDAK butuh PIN, karena ini aksi yang MENGURANGI risiko, bukan menambah. Kalau tidak ada shutdown/restart yang pending, bot bakal bilang gagal — itu wajar.',

  info: '**info** — lihat detail file/folder\n`info <path>` nampilin tipe (file/folder), ukuran total (folder dihitung rekursif termasuk semua isinya), jumlah item di dalam (kalau folder), dan tanggal terakhir diubah. Berguna buat ngecek ukuran sebelum `download`/`copy`, tanpa perlu buka/list dulu.',

  preview: '**preview** — lihat file langsung di chat\n`preview <path>` nampilin file itu LANGSUNG di Discord: gambar dikirim sebagai attachment (Discord otomatis render inline, kebuka tanpa perlu diklik), file TEKS (.txt/.md/.json/.js/.log/dst, sampai ~512KB) isinya dibaca & ditampilkan langsung sebagai embed (nggak perlu download buat baca), tipe lain (PDF/docx/zip/dst) tetap dikirim sebagai attachment biasa. Cuma buat FILE (bukan folder — pakai `list` buat lihat isi folder), dan ukurannya dibatasi ~8MB (limit attachment Discord) — file lebih besar pakai `download` atau `archive`. 🔒 Wajib PIN (`preview <path> <pin>`) kalau file-nya ada di folder RAHASIA (CONFIDENTIAL_PATHS di .env) — tiap akses (berhasil/gagal) otomatis dikirim alert ke email. Shortcut cepat: `cd <file>` juga bisa dipakai buat preview versi attachment-apa-adanya.',

  download: '**download** — upload ke Google Drive\n`download <path>` ngirim file/folder ke folder staging Google Drive lewat rclone, sambil nampilin progress bar yang di-update tiap beberapa detik. Sebelum mulai, bot ngecek dulu sisa kapasitas Drive kamu — kalau kurang, upload ditolak duluan (nggak ada percobaan yang gagal setengah jalan). 🔒 Wajib tambah PIN di argumen terakhir (`download <path> <pin>`) kalau target ada di folder RAHASIA (CONFIDENTIAL_PATHS) dan/atau ukurannya ≥50MB — mencegah bot crash/storage Drive penuh, mencegah download berulang-ulang kalau Discord-mu kena hack, dan mencegah data rahasia disalin keluar diam-diam. Folder isinya banyak file kecil? Pertimbangkan `archive` biar lebih hemat bandwidth.',

  clear: '**clear** — bersihin pesan preview\nHapus semua pesan hasil `preview` yang masih "tercatat" di sesi ini. Aman — cuma nyentuh pesan preview, command/chat lain nggak ikut kehapus.',

  baterai: '**baterai** — cek status baterai laptop\nNampilin persentase baterai, lagi di-cas atau tidak, dan mode power yang lagi aktif (Server/Hemat/Custom). Kalau laptopnya PC desktop tanpa baterai, bakal dikasih tahu juga.',

  disk: '**disk** — cek sisa storage laptop\nNampilin total, terpakai, dan sisa kapasitas tiap drive lokal fisik di laptop (mis. C:, D:) — beda sama sisa kapasitas Google Drive yang dicek otomatis pas `download`. Berguna dicek sebelum `copy`/`move` file besar biar nggak kehabisan space di tengah proses.',

  network: '**network** — cek status koneksi jaringan\nNampilin semua koneksi aktif (Wi-Fi/LAN): nama jaringan, kategori (🔒 Privat/🌍 Publik/🏢 Domain), status internet, dan sinyal Wi-Fi. 🔒 Detail teknis (IP lokal, gateway, DNS, link speed, MAC) disembunyikan default & wajib PIN: `network detail <pin>` (atau `network -v <pin>`).',

  mode: '**mode** — atur power plan laptop\n`mode server` bikin laptop nggak pernah sleep/hibernate (buat proses upload/download besar yang lama). `mode hemat` balikin ke default harian (sleep 15 menit, hibernate 3 jam). Ada verifikasi otomatis abis diubah, biar ketahuan kalau ada Group Policy/app lain yang nge-override.',

  shutdown: '**shutdown** — matikan laptop dari jarak jauh (butuh PIN)\n`shutdown <pin>` — laptop mati dalam 15 detik setelah command diterima & PIN valid. Koneksi bot otomatis terputus begitu laptop mati — bot baru aktif lagi kalau laptopnya dinyalain manual (kecuali kamu punya cara nyalain jarak jauh di luar bot ini, mis. Wake-on-LAN). PIN wajib supaya kalau Discord-mu kena hack, penyerang tidak bisa asal matiin laptop.',

  restart: '**restart** — restart laptop dari jarak jauh (butuh PIN)\n`restart <pin>` — sama kayak `shutdown` (15 detik delay, wajib PIN), bedanya laptop nyala lagi otomatis setelah Windows selesai booting, dan bot Nausync Cloud ikut aktif lagi otomatis (asalkan sudah di-setting auto-start lewat Task Scheduler).',

  chgpin: '**chgpin** — ganti PIN keamanan secara manual\n`chgpin <pin_lama>` — generate PIN baru secara acak (8 karakter, campur huruf besar/kecil & angka) & kirim ke email alert-mu (terpisah dari Discord), lalu PIN lama langsung tidak berlaku. Butuh PIN LAMA yang benar dulu (sama seperti ganti password pakai password lama). Selain lewat command ini, PIN juga OTOMATIS berganti sendiri (sekali pakai) setiap kali dipakai buat `shutdown`/`restart`/`purge`/`copy`/`move`/`download`/`archive`/preview folder rahasia, DAN otomatis diganti tiap 90 hari walau tidak pernah dipakai sama sekali (rotasi berbasis umur, cegah satu PIN beredar terlalu lama) — jadi `chgpin` ini cuma perlu dipakai kalau kamu mau ganti PIN kapan pun TANPA nunggu salah satu dari dua rotasi otomatis itu. Kalau salah PIN 5x berturut-turut, bot otomatis lockout 15 menit & kirim email alert — kalau ini kejadian padahal bukan kamu yang coba, segera amankan akun Discord-mu.',

  ':': '**Shortcut nomor (`:<angka>`)**\nAbis jalanin `list`, tiap item dapat nomor urut. Command berikutnya (cd/copy/move/delete/download/preview) bisa langsung rujuk nomor itu pakai `:<angka>` alih-alih ngetik ulang nama folder/file yang panjang — mis. `list` lalu `cd :2`, atau `copy :3 Downloads`. Nomornya ngikutin hasil `list` yang PALING TERAKHIR dijalankan.',
};

function getDetailedHelp(cmdName) {
  const entry = DETAILED_HELP[cmdName];
  if (entry) return entry;

  const topics = Object.keys(DETAILED_HELP).filter((k) => k !== ':').sort().join(', ');
  return `❓ Belum ada penjelasan detail buat "${cmdName}".\nTopik yang tersedia: ${topics} (juga \`?:\` buat shortcut nomor).`;
}


function tokenize(text) {
  // Normalisasi smart quotes (‘’“”) jadi straight quotes ('") — keyboard HP
  // (iOS/Android) sering auto-convert " jadi " " saat mengetik, yang bikin
  // regex quote-matching di bawah gagal cocok
  const normalized = text
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2018\u2019]/g, "'");

  const regex = /"([^"]+)"|(\S+)/g;
  const tokens = [];
  let match;
  while ((match = regex.exec(normalized)) !== null) {
    // Ambil string murni dari hasil regex matching teks
    tokens.push(match[1] ?? match[2]);
  }
  return tokens;
}

function getLocalSize(path) {
  if (!fs.existsSync(path)) return 0;
  const stats = fs.statSync(path);
  if (stats.isFile()) return stats.size;
  let totalSize = 0;
  try {
    const files = fs.readdirSync(path);
    for (const file of files) {
      totalSize += getLocalSize(`${path}/${file}`);
    }
  } catch { return 0; }
  return totalSize;
}

function getDriveFreeSpace() {
  return new Promise((resolve) => {
    exec(`rclone about "${config.rcloneRemote}:" --json`, (err, stdout) => {
      if (err) return resolve(Infinity);
      try {
        const data = JSON.parse(stdout.toString());
        resolve(data.free || 0);
      } catch { resolve(Infinity); }
    });
  });
}

// Jalankan satu perintah powercfg, tangkap error/stderr-nya (jangan fire-and-forget)
// Pakai path absolut karena PATH environment proses Node (mis. dijalankan via
// Task Scheduler/service) kadang tidak menyertakan C:\Windows\System32
const POWERCFG_PATH = 'C:\\Windows\\System32\\powercfg.exe';

async function runPowercfg(args) {
  try {
    const { stdout, stderr } = await execAsync(`"${POWERCFG_PATH}" ${args}`);
    if (stderr && stderr.trim()) {
      throw new Error(stderr.trim());
    }
    return { ok: true, output: stdout.trim() };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

// Baca ulang nilai timeout yang benar-benar tersimpan di skema aktif, untuk verifikasi
async function getStandbyMinutes() {
  try {
    const { stdout } = await execAsync(`"${POWERCFG_PATH}" /query SCHEME_CURRENT SUB_SLEEP STANDBYIDLE`);
    const match = stdout.match(/Current AC Power Setting Index:\s*0x([0-9a-fA-F]+)/i);
    if (!match) return null;
    return Math.round(parseInt(match[1], 16) / 60);
  } catch {
    return null;
  }
}

// Baca info baterai lewat PowerShell (Win32_Battery via CIM). Pakai path
// absolut dengan alasan sama seperti POWERCFG_PATH: PATH env proses Node
// (mis. dijalankan via Task Scheduler/service) kadang tidak lengkap.
const POWERSHELL_PATH = 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe';

// Referensi nilai BatteryStatus (WMI Win32_Battery):
// 1=Discharging, 2=AC/tidak diketahui, 3=Fully Charged, 4=Low, 5=Critical,
// 6=Charging, 7=Charging & High, 8=Charging & Low, 9=Charging & Critical,
// 10=Undefined, 11=Partially Charged
function describeBatteryStatus(status) {
  const map = {
    1: { charging: false, label: 'Discharging' },
    2: { charging: false, label: 'AC tersambung' },
    3: { charging: false, label: 'Fully Charged (penuh)' },
    4: { charging: false, label: 'Low' },
    5: { charging: false, label: 'Critical' },
    6: { charging: true, label: 'Charging' },
    7: { charging: true, label: 'Charging (High)' },
    8: { charging: true, label: 'Charging (Low)' },
    9: { charging: true, label: 'Charging (Critical)' },
    10: { charging: false, label: 'Undefined' },
    11: { charging: false, label: 'Partially Charged' },
  };
  return map[status] || { charging: false, label: 'Tidak diketahui' };
}

async function getBatteryInfo() {
  const { stdout } = await execAsync(
    `"${POWERSHELL_PATH}" -NoProfile -NonInteractive -Command "Get-CimInstance -ClassName Win32_Battery | Select-Object EstimatedChargeRemaining,BatteryStatus | ConvertTo-Json -Compress"`
  );
  const trimmed = stdout.trim();
  if (!trimmed) return null; // biasanya berarti tidak ada baterai (PC desktop)

  const parsed = JSON.parse(trimmed);
  const battery = Array.isArray(parsed) ? parsed[0] : parsed;
  if (!battery || battery.EstimatedChargeRemaining === undefined) return null;
  return battery;
}

// Terjemahkan nilai standby timeout (AC) jadi label mode yang dikenal user,
// berdasarkan nilai yang di-set oleh command "mode server" (0 menit) dan
// "mode hemat" (15 menit). Kalau nilainya beda (mis. diubah manual lewat
// Settings Windows), tampilkan sebagai "Custom" biar tidak menyesatkan.
function describePowerMode(minutes) {
  if (minutes === null) return '❓ Tidak diketahui (gagal membaca setting power)';
  if (minutes === 0) return '🖥️ Mode Server (layar/sleep tidak pernah mati)';
  if (minutes === 15) return '🔋 Mode Hemat (sleep otomatis setelah 15 menit idle)';
  return `⚙️ Custom (standby timeout: ${minutes} menit, bukan dari "mode server"/"mode hemat")`;
}

// Baca info kapasitas semua drive fisik lokal yang "fixed" (DriveType 3 —
// bukan removable/CD/network), lewat PowerShell (Win32_LogicalDisk via CIM).
// Dipakai buat command "disk" — beda dari getDriveFreeSpace() yang ngecek
// sisa kapasitas Google Drive REMOTE (dipakai command "download").
async function getDiskInfo() {
  const { stdout } = await execAsync(
    `"${POWERSHELL_PATH}" -NoProfile -NonInteractive -Command "Get-CimInstance -ClassName Win32_LogicalDisk | Where-Object { $_.DriveType -eq 3 } | Select-Object DeviceID,Size,FreeSpace | ConvertTo-Json -Compress"`
  );
  const trimmed = stdout.trim();
  if (!trimmed) return [];
  const parsed = JSON.parse(trimmed);
  return Array.isArray(parsed) ? parsed : [parsed];
}

function formatBytes(bytes) {
  if (bytes === Infinity || bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// --- Info jaringan (command "network") ---
//
// Sumber data: "Get-NetConnectionProfile" (PowerShell) — satu entry per
// KONEKSI JARINGAN AKTIF (bisa lebih dari satu sekaligus, mis. laptop
// nyambung Wi-Fi DAN Ethernet bersamaan). Digabung dengan "Get-NetAdapter"
// (buat tahu tipe fisiknya: Wi-Fi atau Ethernet, status adapter, kecepatan
// link, MAC) dan "Get-NetIPConfiguration" (buat IP lokal, gateway, DNS).
//
// Kenapa tidak cuma "netsh wlan show interfaces"? Karena itu CUMA nampilin
// info Wi-Fi (Ethernet tidak kebaca sama sekali), dan output teksnya
// ter-LOKALISASI (label bahasa Inggris vs Indonesia beda tergantung setting
// Windows) jadi rawan salah parse. Get-NetConnectionProfile dkk itu
// terstruktur (properti .NET, bukan teks bebas) jadi jauh lebih stabil buat
// data UTAMA. netsh cuma dipakai sebagai TAMBAHAN opsional (buat sinyal
// Wi-Fi %), dengan parsing yang sengaja longgar (lihat parseWifiSignal)
// supaya tetap aman walau gagal cocok — bagian penting (kategori jaringan,
// IP, dll) tidak bergantung sama sekali ke netsh.
function isWifiMediaType(physicalMediaType) {
  return typeof physicalMediaType === 'string' && /802\.11|wireless/i.test(physicalMediaType);
}

// Parsing longgar buat ambil persentase sinyal Wi-Fi dari "netsh wlan show
// interfaces". Sengaja dibuat best-effort (bukan sumber data utama) karena
// output netsh ter-lokalisasi — label "Signal" bisa jadi "Sinyal" dsb
// tergantung bahasa Windows-nya. Kalau gagal cocok, return null dan command
// "network" tetap jalan normal tanpa baris sinyal (bukan error).
function parseWifiSignal(netshOutput) {
  const signalMatch = /^\s*(?:Signal|Sinyal)\s*:\s*(\d{1,3})%/im.exec(netshOutput);
  const radioMatch = /^\s*(?:Radio type|Jenis radio|Tipe radio)\s*:\s*(.+)$/im.exec(netshOutput);
  return {
    signalPercent: signalMatch ? parseInt(signalMatch[1], 10) : null,
    radioType: radioMatch ? radioMatch[1].trim() : null,
  };
}

// Script PowerShell buat command "network" ditulis ke file sementara lalu
// dijalankan lewat "-File" (bukan "-Command" satu baris) — SENGAJA begini,
// bukan gaya "-Command" satu baris seperti getDiskInfo/getBatteryInfo di
// atas, karena script ini punya percabangan if/else & assignment variabel
// bertingkat yang gampang salah parse kalau dipaksa jadi satu baris pakai
// titik-koma (terutama assignment hasil if/else ke dalam hashtable literal,
// yang butuh sintaks tambahan $(...) kalau dipaksa satu baris). Nulis ke
// file .ps1 asli menghindari seluruh masalah escaping/separator itu sama
// sekali — jauh lebih gampang dibaca & dipastikan benar.
const NETWORK_SCRIPT_PATH = path.join(os.tmpdir(), 'nausync-network-info.ps1');

const NETWORK_PS_SCRIPT = `
$profiles = Get-NetConnectionProfile
$result = foreach ($p in $profiles) {
  $adapter = Get-NetAdapter -InterfaceIndex $p.InterfaceIndex -ErrorAction SilentlyContinue
  $ipcfg = Get-NetIPConfiguration -InterfaceIndex $p.InterfaceIndex -ErrorAction SilentlyContinue
  $ipv4 = ($ipcfg.IPv4Address | Select-Object -First 1).IPAddress
  $gateway = ($ipcfg.IPv4DefaultGateway | Select-Object -First 1).NextHop
  $dns = @($ipcfg.DNSServer | Where-Object { $_.AddressFamily -eq 2 } | Select-Object -ExpandProperty ServerAddresses)

  $adapterStatus = $null
  $physicalMedia = $null
  $linkSpeed = $null
  $macAddress = $null
  if ($adapter) {
    $adapterStatus = $adapter.Status.ToString()
    $physicalMedia = $adapter.PhysicalMediaType
    $linkSpeed = $adapter.LinkSpeed
    $macAddress = $adapter.MacAddress
  }

  [PSCustomObject]@{
    Name = $p.Name
    InterfaceAlias = $p.InterfaceAlias
    NetworkCategory = $p.NetworkCategory.ToString()
    IPv4Connectivity = $p.IPv4Connectivity.ToString()
    IPv6Connectivity = $p.IPv6Connectivity.ToString()
    AdapterStatus = $adapterStatus
    PhysicalMediaType = $physicalMedia
    LinkSpeed = $linkSpeed
    MacAddress = $macAddress
    IPv4Address = $ipv4
    Gateway = $gateway
    DNSServers = $dns
  }
}
$result | ConvertTo-Json -Compress -Depth 4
`;

// Tulis script sekali aja saat module di-load (bukan tiap kali command
// "network" dipanggil) — isinya statis, tidak pernah berubah saat runtime.
try {
  fs.writeFileSync(NETWORK_SCRIPT_PATH, NETWORK_PS_SCRIPT, 'utf-8');
} catch (err) {
  console.warn(`⚠️ Gagal menyiapkan script network-info.ps1: ${err.message}. Command "network" mungkin gagal.`);
}

async function getNetworkInfo() {
  const { stdout } = await execAsync(
    `"${POWERSHELL_PATH}" -NoProfile -NonInteractive -ExecutionPolicy Bypass -File "${NETWORK_SCRIPT_PATH}"`
  );

  const trimmed = stdout.trim();
  if (!trimmed) return [];

  const parsed = JSON.parse(trimmed);
  const profiles = (Array.isArray(parsed) ? parsed : [parsed]).map((p) => ({
    ...p,
    DNSServers: Array.isArray(p.DNSServers) ? p.DNSServers : (p.DNSServers ? [p.DNSServers] : []),
    isWifi: isWifiMediaType(p.PhysicalMediaType),
  }));

  // Kalau ada minimal satu koneksi Wi-Fi, coba perkaya dengan sinyal % dari
  // netsh (best-effort, lihat parseWifiSignal). Cukup dipanggil sekali
  // (bukan per-profile) karena hampir semua laptop cuma punya 1 adapter
  // Wi-Fi fisik; kalaupun gagal/tidak cocok, profile Wi-Fi tetap tampil
  // tanpa baris sinyal.
  if (profiles.some((p) => p.isWifi)) {
    try {
      const { stdout: netshOut } = await execAsync('netsh wlan show interfaces');
      const wifiExtra = parseWifiSignal(netshOut);
      for (const p of profiles) {
        if (p.isWifi) {
          p.signalPercent = wifiExtra.signalPercent;
          p.radioType = wifiExtra.radioType;
        }
      }
    } catch {
      // netsh gagal/tidak tersedia -> lewati saja, bukan fatal buat command "network"
    }
  }

  return profiles;
}

function describeNetworkCategory(category) {
  switch (category) {
    case 'Public':
      return '🌍 **Publik** — laptop ini disembunyikan dari perangkat lain di jaringan yang sama (lebih aman dipakai di Wi-Fi umum/kafe/hotel)';
    case 'Private':
      return '🔒 **Privat** — laptop ini bisa "ditemukan" perangkat lain di jaringan yang sama (cocok untuk Wi-Fi/LAN rumah sendiri yang dipercaya, TAPI berisiko kalau ternyata dipakai di jaringan publik)';
    case 'DomainAuthenticated':
      return '🏢 **Domain** — jaringan kantor/organisasi yang terkelola (Active Directory)';
    default:
      return `❓ ${category || 'Tidak diketahui'}`;
  }
}

function describeConnectivity(v4, v6) {
  if (v4 === 'Internet' || v6 === 'Internet') return '✅ Terhubung ke Internet';
  if (v4 === 'LocalNetwork' || v6 === 'LocalNetwork') return '⚠️ Cuma nyambung ke jaringan lokal (tidak ada akses Internet)';
  if (v4 === 'NoTraffic' || v6 === 'NoTraffic') return '⚠️ Nyambung tapi belum ada traffic terdeteksi';
  return '❌ Tidak terhubung';
}

// Default-nya CUMA nampilin info inti yang relevan buat tujuan command ini
// (cek nyambung ke jaringan apa & privat/publik apa nggak): tipe koneksi,
// nama jaringan, kategori, status internet, dan sinyal Wi-Fi kalau ada.
//
// IP lokal/gateway/DNS/link speed/MAC address SENGAJA disembunyikan di
// mode default — bukan karena itu rahasia besar (IP lokal/gateway/DNS
// cuma alamat privat, tidak bisa diakses dari luar LAN sama sekali, dan
// MAC address cuma berguna buat orang yang SUDAH ada di jaringan fisik
// yang sama), tapi karena tidak ada gunanya buat pertanyaan "lagi nyambung
// ke jaringan apa" — dan prinsip "jangan tampilkan lebih dari yang
// dibutuhkan" tetap berlaku walau risikonya rendah, apalagi MAC address
// bisa dipakai buat fingerprinting perangkat kalau suatu saat histori
// chat ini kebaca orang lain (mis. Discord kena hack). Detail teknis ini
// tetap tersedia buat troubleshooting lewat `network detail`.
function formatNetworkProfile(p, verbose) {
  const typeLabel = p.isWifi ? '📶 Wi-Fi' : '🔌 LAN (Ethernet)';
  const lines = [
    `${typeLabel} — **${p.Name || p.InterfaceAlias || 'Tidak diketahui'}**`,
    `• Kategori jaringan: ${describeNetworkCategory(p.NetworkCategory)}`,
    `• Status: ${describeConnectivity(p.IPv4Connectivity, p.IPv6Connectivity)}`,
  ];
  if (p.isWifi && p.signalPercent !== null && p.signalPercent !== undefined) {
    lines.push(`• Sinyal Wi-Fi: **${p.signalPercent}%**`);
  }

  if (!verbose) return lines.join('\n');

  lines.push(`• Interface: \`${p.InterfaceAlias}\`${p.AdapterStatus ? ` (${p.AdapterStatus})` : ''}`);
  if (p.IPv4Address) lines.push(`• IP Lokal: \`${p.IPv4Address}\``);
  if (p.Gateway) lines.push(`• Gateway: \`${p.Gateway}\``);
  if (p.DNSServers && p.DNSServers.length) lines.push(`• DNS: ${p.DNSServers.map((d) => `\`${d}\``).join(', ')}`);
  if (p.LinkSpeed) lines.push(`• Kecepatan Link: ${p.LinkSpeed}`);
  if (p.isWifi && p.radioType) lines.push(`• Radio: ${p.radioType}`);
  if (p.MacAddress) lines.push(`• MAC Address: \`${p.MacAddress}\``);
  return lines.join('\n');
}

// Ekstensi yang dianggap "gambar" — dikirim sebagai attachment biasa,
// karena Discord SUDAH otomatis render attachment gambar inline (jadi
// nggak perlu ditangani khusus lagi, beda sama dulu yang cuma nampilin path).
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg']);

// Ekstensi yang dianggap "teks" — isinya dibaca & ditampilkan LANGSUNG di
// embed Discord (bukan cuma dikirim sebagai attachment yang harus diklik
// dulu buat baca isinya).
const TEXT_EXTENSIONS = new Set([
  '.txt', '.md', '.json', '.js', '.ts', '.jsx', '.tsx', '.csv', '.log',
  '.yml', '.yaml', '.xml', '.html', '.css', '.ini', '.py', '.java',
  '.c', '.cpp', '.sh', '.bat', '.env.example',
]);

// Batas umum attachment Discord buat bot non-boost server (~8MB). DM
// pribadi biasanya ikut batas yang sama.
const MAX_PREVIEW_SIZE = 8 * 1024 * 1024;

// Batas file teks yang masih nyaman dibaca lewat embed (jauh di bawah
// MAX_PREVIEW_SIZE) — di atas ini, baca isinya lebih enak lewat download.
const MAX_TEXT_PREVIEW_SIZE = 512 * 1024;

// Embed Discord dibatasi ~4096 karakter di field "description" — dikasih
// buffer di bawahnya biar aman dari batas persis.
const MAX_TEXT_EMBED_CHARS = 3500;

// Preview "LAMA" — kirim file APA ADANYA sebagai attachment Discord (foto
// otomatis kebuka inline, dokumen lain bisa didownload dari chat). Ini
// behavior preview versi sebelumnya, sekarang dipertahankan sebagai
// fallback buat tipe file yang bukan gambar/teks, dan dipakai langsung oleh
// shortcut "cd <file>".
async function sendAttachmentPreview(absPath, dscMessage, stats) {
  if (stats.size > MAX_PREVIEW_SIZE) {
    return `❌ File terlalu besar untuk preview (*${formatBytes(stats.size)}*, batas ~8MB). Pakai "download" atau "archive" untuk kirim ke Google Drive.`;
  }

  const fileName = path.basename(absPath);
  const sentMsg = await dscMessage.reply({
    content: `👀 **Preview:** \`${fileName}\` (${formatBytes(stats.size)})`,
    files: [{ attachment: absPath, name: fileName }],
  });

  previewMessages.push(sentMsg.id);
  savePreviewMessages();
  return null;
}

// Preview "BARU" — gambar tetap dikirim sebagai attachment (Discord
// otomatis render inline), tapi file TEKS dibaca isinya & ditampilkan
// LANGSUNG sebagai embed (nggak perlu klik/download lagi buat baca
// kontennya). Tipe lain (PDF/docx/zip/dst) fallback ke attachment biasa.
async function sendRichPreview(absPath, dscMessage, stats) {
  const ext = path.extname(absPath).toLowerCase();
  const fileName = path.basename(absPath);

  if (TEXT_EXTENSIONS.has(ext) && stats.size <= MAX_TEXT_PREVIEW_SIZE) {
    const raw = await fs.promises.readFile(absPath, 'utf-8').catch(() => null);
    if (raw !== null) {
      const truncated = raw.length > MAX_TEXT_EMBED_CHARS;
      const body = truncated ? raw.slice(0, MAX_TEXT_EMBED_CHARS) : raw;
      const lang = ext.replace('.', '');

      const embed = {
        title: `📄 ${fileName}`,
        description: '```' + lang + '\n' + body + '\n```' +
          (truncated ? `\n_(dipotong — cuma ${MAX_TEXT_EMBED_CHARS} karakter pertama dari ${raw.length}, pakai "download" buat isi lengkap)_` : ''),
        color: 0x2b6cff,
        footer: { text: formatBytes(stats.size) },
      };

      const sentMsg = await dscMessage.reply({ embeds: [embed] });
      previewMessages.push(sentMsg.id);
      savePreviewMessages();
      return null;
    }
    // Gagal dibaca sebagai UTF-8 (mis. ternyata bukan teks murni) -> fallback
  }

  // Gambar & tipe lain (termasuk teks yang kegedean buat embed) -> attachment biasa
  return sendAttachmentPreview(absPath, dscMessage, stats);
}

// Logic bersama buat command "preview" dan shortcut "cd <file>": validasi
// path, cek PIN (folder RAHASIA dan/atau ukuran ≥50MB), kirim alert email
// kalau relevan, lalu dispatch ke mode tampilan yang sesuai ('rich' buat
// command preview biasa, 'legacy' buat shortcut cd-ke-file).
async function runPreview(args, dscMessage, mode) {
  if (args.length < 1) return 'Format: `preview <path>` (atau `preview <path> <pin>` kalau file-nya rahasia/besar)';
  if (!dscMessage) return 'Fitur preview cuma bisa dipakai lewat Discord.';

  const targetPath = resolvePathArg(args[0]);
  const absPath = resolveForRclone(targetPath);

  if (!fs.existsSync(absPath)) return `❌ File tidak ditemukan.`;

  const stats = fs.statSync(absPath);
  if (stats.isDirectory()) {
    return `❌ "${args[0]}" adalah folder, bukan file. Pakai "list" untuk lihat isinya.`;
  }

  const needsConfidentialPin = isConfidential(absPath);
  const needsSizePin = stats.size >= PIN_SIZE_THRESHOLD;

  if (needsConfidentialPin || needsSizePin) {
    if (args.length < 2) {
      const label = needsConfidentialPin
        ? `🔒 **Data ini bersifat RAHASIA.** File \`${toDisplayPath(targetPath)}\` ada di folder yang ditandai rahasia — butuh PIN keamanan buat preview.`
        : `🔒 **Ukuran ${formatBytes(stats.size)} (≥50MB).** Preview file sebesar ini wajib PIN keamanan.`;
      return `${label}\nFormat: \`preview ${args[0]} <pin>\``;
    }

    const reason = needsConfidentialPin
      ? `preview folder rahasia: ${toDisplayPath(targetPath)}`
      : `preview file besar (${formatBytes(stats.size)}): ${toDisplayPath(targetPath)}`;
    await requirePin(args, reason);

    if (needsConfidentialPin) {
      sendAlertEmail(
        '🔓 Preview folder RAHASIA diakses',
        `File rahasia "${toDisplayPath(targetPath)}" berhasil di-preview dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, PIN-mu sudah bocor dan data rahasiamu baru saja dibaca orang lain — segera amankan akun Discord-mu.`
      ).catch(() => {});
    }
  }

  return mode === 'legacy'
    ? sendAttachmentPreview(absPath, dscMessage, stats)
    : sendRichPreview(absPath, dscMessage, stats);
}

export async function handleCommand(rawText, dscMessage = null) {
  const text = rawText.trim();
  if (!text) return buildHelpText();

  const tokens = tokenize(text);
  if (tokens.length === 0) return buildHelpText();
  
  // PERBAIKAN: Mengambil indeks pertama [0] sebagai string command murni
  const command = tokens[0].toLowerCase();
  const args = tokens.slice(1);

  // "?<command>" -> command tersembunyi buat lihat penjelasan detail command
  // tertentu, tanpa bikin "help" utama jadi panjang. Sengaja dicek di sini
  // (sebelum switch di bawah), bukan sebagai "case" biasa, karena "?pwd" dkk
  // bukan nama command aslinya — cuma modifier di depannya.
  if (command.startsWith('?') && command.length > 1) {
    return getDetailedHelp(command.slice(1));
  }
  if (command === '?') {
    const topics = Object.keys(DETAILED_HELP).filter((k) => k !== ':').sort().join(', ');
    return `❓ Ketik \`?<command>\` buat penjelasan detail, contoh \`?pwd\`.\nTopik: ${topics}`;
  }

  try {
    switch (command) {
      case 'help':
        return buildHelpText();

      case 'pwd':
        return `📂 Folder aktif saat ini: \`${displayDir()}\``;

      case 'cd': {
        if (args.length < 1) return `📂 Folder aktif saat ini: \`${displayDir()}\``;

        const targetArg = args[0];
        const isClimbAttempt = targetArg.replace(/\\/g, '/').startsWith('..');
        const newDir = resolvePathArg(targetArg);

        // Kalau user coba naik (".." atau "../xxx") tapi hasilnya tetap di
        // root ('.') karena sudah di puncak sandbox, kasih tahu jelas —
        // jangan seolah-olah berhasil "pindah folder" padahal diam di tempat.
        if (isClimbAttempt && newDir === '.' && currentDir === '.') {
          return `📂 Sudah di folder root (\`${displayDir()}\`), tidak bisa naik lebih tinggi lagi.`;
        }

        // 🆕 Kalau targetnya ternyata FILE (bukan folder), "cd" ke situ nggak
        // ada gunanya (nggak ada isi buat di-"list") — daripada cuma nampilin
        // error, perlakukan sebagai shortcut ke preview versi LAMA (attachment
        // apa adanya). PIN (rahasia/ukuran besar) tetap berlaku sama seperti
        // command "preview", cuma argumennya "digeser": "cd <file> <pin>".
        let targetAbsPath;
        try {
          targetAbsPath = resolveForRclone(newDir);
        } catch (err) {
          return `❌ Gagal pindah folder: ${err.message}`;
        }
        if (fs.existsSync(targetAbsPath) && fs.statSync(targetAbsPath).isFile()) {
          // PENTING: pakai "await" di sini (bukan cuma "return runPreview(...)")
          // — kalau tidak, error yang dilempar runPreview (mis. PIN salah/
          // kosong) akan LOLOS dari try/catch besar di bawah (karena statement
          // "return" sudah keburu keluar dari try SEBELUM promise-nya selesai),
          // dan berakhir jadi pesan generik "Terjadi kesalahan internal..." di
          // index.js alih-alih pesan spesifik "Gagal: ...".
          return await runPreview([targetArg, ...args.slice(1)], dscMessage, 'legacy');
        }

        // Validasi folder benar-benar ada & memang folder (bukan file), lewat
        // listDir supaya sekalian kena aturan safeResolve/whitelist di fsops.js
        try {
          await listDir(newDir);
        } catch (err) {
          return `❌ Gagal pindah folder: ${err.message}`;
        }

        currentDir = newDir;
        return `📂 Pindah ke folder: \`${displayDir()}\``;
      }

      case 'root': {
        if (currentDir === '.') {
          return `📂 Sudah di folder root (\`${displayDir()}\`).`;
        }
        currentDir = '.';
        return `📂 Pindah ke folder: \`${displayDir()}\``;
      }

      case 'list': {
        const targetDir = resolvePathArg(args[0] || '.');
        const entries = await listDir(targetDir);
        if (!entries.length) return `Folder \`${displayDir()}\` kosong.`;

        // Kelompokkan folder dulu baru file, urut alfabetis (case-insensitive),
        // beri nomor urut + ikon supaya lebih gampang dibaca/di-scan
        const collator = new Intl.Collator('id', { sensitivity: 'base' });
        const dirs = entries.filter((e) => e.endsWith('/')).sort(collator.compare);
        const files = entries.filter((e) => !e.endsWith('/')).sort(collator.compare);

        // Simpan urutan ini (folder dulu, baru file) sebagai referensi nomor
        // ":N" untuk command berikutnya (cd/copy/move/delete/download/preview).
        // Virtual path-nya dibuat relatif ke ROOT sandbox (bukan ke targetDir),
        // supaya bisa langsung dipakai sebagai hasil akhir resolvePathArg.
        lastListing = [...dirs, ...files].map((entry) => {
          const bareName = entry.endsWith('/') ? entry.slice(0, -1) : entry;
          return targetDir === '.' ? bareName : `${targetDir}/${bareName}`;
        });

        let num = 1;

        // Tandai entry (folder/file) yang berada di dalam CONFIDENTIAL_PATHS
        // dengan ikon 🔒 di listing — supaya user tahu dari AWAL item mana
        // yang bakal diminta PIN pas di-preview/download, tanpa perlu coba
        // dulu baru ketahuan lewat pesan error. Beda dengan BLOCKED_PATHS
        // (yang memang sudah disembunyikan total dari listDir), item
        // confidential ini memang SENGAJA tetap kelihatan namanya di
        // "list" — cuma isinya yang di-gate PIN.
        function entryNeedsPin(bareName) {
          try {
            const virtualPath = targetDir === '.' ? bareName : `${targetDir}/${bareName}`;
            return isConfidential(safeResolve(virtualPath));
          } catch {
            // Harusnya tidak pernah terjadi (entry ini datang dari listDir
            // folder yang sama), tapi kalau gagal resolve karena sebab apa
            // pun, default-kan "tidak dikasih ikon" daripada bikin seluruh
            // command "list" gagal cuma gara-gara satu entry.
            return false;
          }
        }

        const lines = [
          ...dirs.map((d) => `${num++}. 📁 ${d}${entryNeedsPin(d.slice(0, -1)) ? ' 🔒' : ''}`),
          ...files.map((f) => `${num++}. 📄 ${f}${entryNeedsPin(f) ? ' 🔒' : ''}`),
        ];
        const headerBase = `📂 **${toDisplayPath(targetDir)}** — ${dirs.length} folder, ${files.length} file`;

        // Discord batasi pesan max ~2000 karakter. Daripada kirim file .txt
        // (harus di-download tiap kali), pecah daftar jadi beberapa "halaman"
        // yang muat di 1 pesan, terus kasih tombol ◀️ ▶️ buat geser halaman
        // langsung di chat.
        const PAGE_BUDGET = 1700;
        const pages = [];
        let bucket = [];
        let bucketLen = 0;
        for (const line of lines) {
          if (bucketLen + line.length + 1 > PAGE_BUDGET && bucket.length) {
            pages.push(bucket);
            bucket = [];
            bucketLen = 0;
          }
          bucket.push(line);
          bucketLen += line.length + 1;
        }
        if (bucket.length) pages.push(bucket);

        // Muat dalam 1 pesan, tidak perlu pagination sama sekali
        if (pages.length <= 1) {
          return `${headerBase}:\n${lines.join('\n')}`;
        }

        const renderPage = (i) => `${headerBase} — Hal. ${i + 1}/${pages.length}:\n${pages[i].join('\n')}`;

        if (!dscMessage) {
          // Fallback kalau dipanggil bukan lewat Discord (mis. dites langsung di kode)
          return `${renderPage(0)}\n\n(${pages.length} halaman total — jalankan lewat Discord untuk navigasi tombol)`;
        }

        let pageIndex = 0;
        const buildRow = (i) =>
          new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setCustomId('list_prev')
              .setEmoji('◀️')
              .setStyle(ButtonStyle.Secondary)
              .setDisabled(i === 0),
            new ButtonBuilder()
              .setCustomId('list_next')
              .setEmoji('▶️')
              .setStyle(ButtonStyle.Secondary)
              .setDisabled(i === pages.length - 1),
          );

        const sentMsg = await dscMessage.reply({
          content: renderPage(pageIndex),
          components: [buildRow(pageIndex)],
        });

        // Kumpulkan klik tombol selama 5 menit, cuma owner (pengirim command) yang boleh navigasi
        const collector = sentMsg.createMessageComponentCollector({
          componentType: ComponentType.Button,
          time: 5 * 60 * 1000,
        });

        collector.on('collect', async (interaction) => {
          if (interaction.user.id !== dscMessage.author.id) {
            await interaction.reply({ content: 'Command ini bukan punya kamu.', ephemeral: true }).catch(() => {});
            return;
          }
          if (interaction.customId === 'list_prev' && pageIndex > 0) pageIndex--;
          if (interaction.customId === 'list_next' && pageIndex < pages.length - 1) pageIndex++;

          await interaction.update({
            content: renderPage(pageIndex),
            components: [buildRow(pageIndex)],
          }).catch(() => {});
        });

        // Setelah 5 menit, tombol dinonaktifkan biar gak bisa diklik lagi (interaction expired)
        collector.on('end', () => {
          sentMsg.edit({ components: [] }).catch(() => {});
        });

        return null; // sudah dikirim manual, index.js tidak perlu kirim ulang
      }

      case 'copy': {
        if (args.length < 2) return 'Format: `copy <src> <dst>` (kalau src rahasia dan/atau ukuran ≥50MB, tambahkan PIN: `copy <src> <dst> <pin>`)';

        const srcVirtual = resolvePathArg(args[0]);
        const absSrc = resolveForRclone(srcVirtual);
        if (!fs.existsSync(absSrc)) return `❌ Gagal: \`${toDisplayPath(srcVirtual)}\` tidak ditemukan.`;

        const srcSize = getLocalSize(absSrc);
        const needsConfidentialPin = isConfidential(absSrc);
        const needsSizePin = srcSize >= PIN_SIZE_THRESHOLD;
        let dstArgRaw = args[1];

        if (needsConfidentialPin || needsSizePin) {
          if (args.length < 3) {
            const label = needsConfidentialPin
              ? `🔒 **Data ini bersifat RAHASIA.** \`${toDisplayPath(srcVirtual)}\` butuh PIN keamanan buat di-copy.`
              : `🔒 **Ukuran ${formatBytes(srcSize)} (≥50MB).** Copy sebesar ini wajib PIN keamanan (cegah bot crash/storage penuh & cegah copy berulang-ulang kalau Discord-mu kena hack).`;
            return `${label}\nFormat: \`copy ${args[0]} ${args[1]} <pin>\``;
          }
          const reason = needsConfidentialPin
            ? `copy folder/file rahasia: ${toDisplayPath(srcVirtual)}`
            : `copy besar (${formatBytes(srcSize)}): ${toDisplayPath(srcVirtual)}`;
          const pinChecked = await requirePin(args, reason);
          dstArgRaw = pinChecked[1];

          if (needsConfidentialPin) {
            sendAlertEmail(
              '🔓 Copy folder/file RAHASIA dijalankan',
              `Folder/file rahasia "${toDisplayPath(srcVirtual)}" berhasil di-copy dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, PIN-mu sudah bocor dan data rahasiamu baru saja diduplikat orang lain — segera amankan akun Discord-mu.`
            ).catch(() => {});
          }
        }

        const dstVirtual = resolvePathArg(dstArgRaw);
        await copyPath(srcVirtual, dstVirtual);
        return `✅ Copy berhasil ke \`${toDisplayPath(dstVirtual)}\`${needsSizePin ? ` (${formatBytes(srcSize)})` : ''}`;
      }

      case 'move': {
        if (args.length < 2) return 'Format: `move <src> <dst>` (kalau src rahasia dan/atau ukuran ≥50MB, tambahkan PIN: `move <src> <dst> <pin>`)';

        const srcVirtual = resolvePathArg(args[0]);
        const absSrc = resolveForRclone(srcVirtual);
        if (!fs.existsSync(absSrc)) return `❌ Gagal: \`${toDisplayPath(srcVirtual)}\` tidak ditemukan.`;

        const srcSize = getLocalSize(absSrc);
        const needsConfidentialPin = isConfidential(absSrc);
        const needsSizePin = srcSize >= PIN_SIZE_THRESHOLD;
        let dstArgRaw = args[1];

        // Sama alasannya kayak copy: "move" bisa dipakai buat mengeluarkan
        // file/folder RAHASIA dari folder confidential ke lokasi bebas
        // tanpa lewat "preview" sama sekali (jadi tidak ke-detect kalau
        // cuma preview yang di-gate). Tambahan size-gate juga mencegah
        // rename/move berulang-ulang yang bikin I/O disk berat kalau
        // Discord-mu kena hack.
        if (needsConfidentialPin || needsSizePin) {
          if (args.length < 3) {
            const label = needsConfidentialPin
              ? `🔒 **Data ini bersifat RAHASIA.** \`${toDisplayPath(srcVirtual)}\` butuh PIN keamanan buat dipindah.`
              : `🔒 **Ukuran ${formatBytes(srcSize)} (≥50MB).** Move sebesar ini wajib PIN keamanan (cegah move berulang-ulang kalau Discord-mu kena hack).`;
            return `${label}\nFormat: \`move ${args[0]} ${args[1]} <pin>\``;
          }
          const reason = needsConfidentialPin
            ? `move folder/file rahasia: ${toDisplayPath(srcVirtual)}`
            : `move besar (${formatBytes(srcSize)}): ${toDisplayPath(srcVirtual)}`;
          const pinChecked = await requirePin(args, reason);
          dstArgRaw = pinChecked[1];

          if (needsConfidentialPin) {
            sendAlertEmail(
              '🔓 Move folder/file RAHASIA dijalankan',
              `Folder/file rahasia "${toDisplayPath(srcVirtual)}" berhasil dipindah dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, PIN-mu sudah bocor dan data rahasiamu baru saja dipindah orang lain — segera amankan akun Discord-mu.`
            ).catch(() => {});
          }
        }

        const dstVirtual = resolvePathArg(dstArgRaw);
        await movePath(srcVirtual, dstVirtual);
        return `✅ Move berhasil ke \`${toDisplayPath(dstVirtual)}\`${needsSizePin ? ` (${formatBytes(srcSize)})` : ''}`;
      }

      case 'delete': {
        if (args.length < 1) return 'Format: `delete <path>` (kalau ada di folder RAHASIA, tambahkan PIN: `delete <path> <pin>`)';
        const targetVirtual = resolvePathArg(args[0]);

        // Sama seperti copy/move/preview/download/archive: cek dulu apakah
        // target ada di folder RAHASIA sebelum jalanin apa pun. Sebelumnya
        // "delete" LOLOS dari gate ini — walau isinya tetap aman (trash
        // ditaruh tetap di dalam folder confidential asal, lihat
        // trashDirFor di fsops.js), memindah SELURUH isi folder rahasia ke
        // trash tanpa PIN & tanpa notifikasi tetap berisiko: kalau akun
        // Discord kena hack, penyerang bisa mengacak-acak folder rahasia
        // (memindah semuanya ke trash) tanpa owner tahu sama sekali.
        let absTarget;
        try {
          absTarget = resolveForRclone(targetVirtual);
        } catch (err) {
          return `❌ Gagal: ${err.message}`;
        }
        if (!fs.existsSync(absTarget)) {
          return `❌ Gagal: \`${toDisplayPath(targetVirtual)}\` tidak ditemukan.`;
        }

        const needsConfidentialPin = isConfidential(absTarget);
        if (needsConfidentialPin) {
          if (args.length < 2) {
            return `🔒 **Data ini bersifat RAHASIA.** \`${toDisplayPath(targetVirtual)}\` butuh PIN keamanan buat dihapus (dipindah ke trash).\nFormat: \`delete ${args[0]} <pin>\``;
          }
          await requirePin(args, `delete folder/file rahasia: ${toDisplayPath(targetVirtual)}`);
          sendAlertEmail(
            '🗑️ Delete (ke trash) folder/file RAHASIA dijalankan',
            `Folder/file rahasia "${toDisplayPath(targetVirtual)}" berhasil dipindah ke trash dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, PIN-mu sudah bocor — segera amankan akun Discord-mu. Datanya masih bisa dipulihkan dari trash selama belum di-"purge" atau kena auto-purge retensi.`
          ).catch(() => {});
        }

        await deletePath(targetVirtual);
        return `🗑️ Dipindah ke trash: \`${toDisplayPath(targetVirtual)}\`\n(belum permanen — pakai \`purge\` kalau mau hapus beneran, atau otomatis kehapus permanen setelah ${config.trashRetentionDays} hari)`;
      }

      case 'purge': {
        if (args.length < 1) return 'Format: `purge <path> <pin>`';
        const pinCheckedArgs = await requirePin(args, 'purge'); // lempar Error kalau PIN salah/kosong
        const targetVirtual = resolvePathArg(pinCheckedArgs[0]);

        if (!dscMessage) {
          return '❌ Command `purge` butuh konfirmasi tombol, cuma bisa dipakai lewat Discord.';
        }

        // Validasi dulu targetnya ada, biar gak nampilin dialog konfirmasi
        // buat path yang ternyata salah/tidak ditemukan.
        let absPath;
        try {
          absPath = resolveForRclone(targetVirtual);
        } catch (err) {
          return `❌ Gagal: ${err.message}`;
        }
        if (!fs.existsSync(absPath)) {
          return `❌ Gagal: \`${toDisplayPath(targetVirtual)}\` tidak ditemukan.`;
        }

        const confirmRow = new ActionRowBuilder().addComponents(
          new ButtonBuilder().setCustomId('purge_yes').setLabel('Ya, Hapus Permanen').setStyle(ButtonStyle.Danger),
          new ButtonBuilder().setCustomId('purge_no').setLabel('Batal').setStyle(ButtonStyle.Secondary),
        );

        const confirmMsg = await dscMessage.reply({
          content: `⚠️ **Yakin mau hapus PERMANEN** \`${toDisplayPath(targetVirtual)}\`?\nAksi ini TIDAK BISA dibatalkan (beda sama \`delete\` biasa yang cuma masuk trash).`,
          components: [confirmRow],
        });

        return new Promise((resolve) => {
          let settled = false;

          const collector = confirmMsg.createMessageComponentCollector({
            componentType: ComponentType.Button,
            time: 60 * 1000,
          });

          collector.on('collect', async (interaction) => {
            if (interaction.user.id !== dscMessage.author.id) {
              await interaction.reply({ content: 'Command ini bukan punya kamu.', ephemeral: true }).catch(() => {});
              return;
            }

            settled = true;
            collector.stop();

            if (interaction.customId === 'purge_yes') {
              try {
                await purgePath(targetVirtual);
                sendAlertEmail(
                  '✅ Command "purge" berhasil dieksekusi',
                  `File/folder "${toDisplayPath(targetVirtual)}" berhasil DIHAPUS PERMANEN dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, segera amankan akun Discord-mu — file ini TIDAK BISA dikembalikan.`
                ).catch(() => {});
                await interaction.update({
                  content: `🗑️ **Terhapus permanen:** \`${toDisplayPath(targetVirtual)}\``,
                  components: [],
                }).catch(() => {});
              } catch (err) {
                await interaction.update({
                  content: `❌ Gagal hapus permanen: ${err.message}`,
                  components: [],
                }).catch(() => {});
              }
            } else {
              await interaction.update({
                content: `Dibatalkan. \`${toDisplayPath(targetVirtual)}\` tidak jadi dihapus permanen.`,
                components: [],
              }).catch(() => {});
            }

            resolve(null);
          });

          collector.on('end', () => {
            if (!settled) {
              confirmMsg.edit({
                content: `⏱️ Konfirmasi kadaluarsa. \`${toDisplayPath(targetVirtual)}\` tidak jadi dihapus permanen.`,
                components: [],
              }).catch(() => {});
              resolve(null);
            }
          });
        });
      }

      case 'info': {
        if (args.length < 1) return 'Format: `info <path>`';
        const targetVirtual = resolvePathArg(args[0]);

        let absPath;
        try {
          absPath = resolveForRclone(targetVirtual);
        } catch (err) {
          return `❌ Gagal: ${err.message}`;
        }
        if (!fs.existsSync(absPath)) {
          return `❌ Gagal: \`${toDisplayPath(targetVirtual)}\` tidak ditemukan.`;
        }

        const stats = fs.statSync(absPath);
        const isDir = stats.isDirectory();
        const size = getLocalSize(absPath);
        const modified = stats.mtime.toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' });

        let itemCountLine = '';
        if (isDir) {
          try {
            const itemCount = fs.readdirSync(absPath).length;
            itemCountLine = `\n• Isi: ${itemCount} item`;
          } catch {
            // biarkan kosong kalau gagal baca (mis. permission), gak fatal buat "info"
          }
        }

        return `${isDir ? '📁' : '📄'} **${toDisplayPath(targetVirtual)}**\n` +
          `• Tipe: ${isDir ? 'Folder' : 'File'}\n` +
          `• Ukuran: **${formatBytes(size)}**${itemCountLine}\n` +
          `• Terakhir diubah: ${modified}`;
      }

      case 'preview':
        // Sama seperti shortcut "cd <file>" di atas: WAJIB "await" di sini,
        // kalau tidak, error dari runPreview (PIN salah/kosong, dll) lolos
        // dari try/catch handleCommand dan cuma tampil sebagai "Terjadi
        // kesalahan internal..." yang generik di index.js.
        return await runPreview(args, dscMessage, 'rich');

      case 'archive': {
        if (args.length < 1) return 'Format: `archive <path>` (kalau ukuran asli ≥50MB dan/atau rahasia, tambahkan PIN: `archive <path> <pin>`)';
        if (!dscMessage) return 'Fitur archive cuma bisa dipakai lewat Discord.';

        const srcVirtual = resolvePathArg(args[0]);
        const absSrc = resolveForRclone(srcVirtual);
        if (!fs.existsSync(absSrc)) return `❌ Gagal: \`${toDisplayPath(srcVirtual)}\` tidak ditemukan.`;

        // Sama seperti copy/move/delete: cegah archive folder yang di
        // dalamnya ada BLOCKED_PATH — kalau lolos, isi yang di-block ikut
        // terpaket ke .zip dan ke-upload ke Drive (bocor keluar sandbox).
        if (containsBlockedPath(absSrc)) {
          return `❌ Gagal: \`${toDisplayPath(srcVirtual)}\` tidak bisa di-archive karena mengandung folder/file yang diblokir (BLOCKED_PATHS) di dalamnya. Archive isinya per-item saja, lewati yang diblokir.`;
        }

        const localSize = getLocalSize(absSrc);
        const needsConfidentialPin = isConfidential(absSrc);
        const needsSizePin = localSize >= PIN_SIZE_THRESHOLD;

        if (needsConfidentialPin || needsSizePin) {
          if (args.length < 2) {
            const label = needsConfidentialPin
              ? `🔒 **Data ini bersifat RAHASIA.** \`${toDisplayPath(srcVirtual)}\` butuh PIN keamanan buat di-archive.`
              : `🔒 **Ukuran asli ${formatBytes(localSize)} (≥50MB).** Archive sebesar ini wajib PIN keamanan (cegah bot crash/storage penuh & cegah archive berulang-ulang).`;
            return `${label}\nFormat: \`archive ${args[0]} <pin>\``;
          }
          const reason = needsConfidentialPin
            ? `archive folder rahasia: ${toDisplayPath(srcVirtual)}`
            : `archive besar (${formatBytes(localSize)}): ${toDisplayPath(srcVirtual)}`;
          await requirePin(args, reason);
          if (needsConfidentialPin) {
            sendAlertEmail(
              '🔓 Archive folder RAHASIA diakses',
              `Folder/file rahasia "${toDisplayPath(srcVirtual)}" berhasil di-archive & diupload dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, PIN-mu sudah bocor dan data rahasiamu baru saja disalin keluar — segera amankan akun Discord-mu.`
            ).catch(() => {});
          }
        }

        const entityName = path.basename(absSrc);
        const zipName = `${entityName}.zip`;
        const tmpDir = path.join(os.tmpdir(), 'nausync-archive');
        await fs.promises.mkdir(tmpDir, { recursive: true });
        const zipAbsPath = path.join(tmpDir, `${Date.now()}__${zipName}`);

        const progressMessage = await dscMessage.reply(`🗜️ **Mengompres...** \`${entityName}\` (${formatBytes(localSize)})`);

        try {
          await createZip(absSrc, zipAbsPath);
        } catch (err) {
          await progressMessage.edit(`❌ **Gagal compress:** ${err.message}`).catch(() => {});
          return null;
        }

        const zipStat = await fs.promises.stat(zipAbsPath);
        await progressMessage.edit(`📦 **Kompres selesai** (${formatBytes(zipStat.size)}, dari ${formatBytes(localSize)}). Mulai upload ke Google Drive...`).catch(() => {});

        const remoteTarget = `${config.rcloneRemote}:${config.rcloneStagingFolder}/${zipName}`;

        return new Promise((resolve) => {
          const proc = spawn('rclone', ['copyto', zipAbsPath, remoteTarget, '--progress', '--stats', '3s']);
          let lastUpdate = 0;

          proc.stdout.on('data', async (data) => {
            const output = data.toString();
            const match = output.match(/(\d+)%\s*,/);
            if (match) {
              const now = Date.now();
              if (now - lastUpdate > 4000) {
                lastUpdate = now;
                await progressMessage.edit(`📤 **Upload:** \`${match[1]}%\` — \`${zipName}\` (${formatBytes(zipStat.size)})`).catch(() => {});
              }
            }
          });

          proc.on('close', async (code) => {
            // WAJIB coba hapus .zip lokal APAPUN hasilnya (sukses/gagal) — dia
            // cuma perantara sementara, bukan tempat penyimpanan. Kalau
            // dibiarkan nyangkut pas upload gagal, lama-lama numpuk dan malah
            // bertentangan sama tujuan command ini sendiri (hemat storage).
            await fs.promises.unlink(zipAbsPath).catch(() => {});

            if (code === 0) {
              await progressMessage.edit(
                `✅ **Archive & Upload Sukses!**\n• Sumber: \`${toDisplayPath(srcVirtual)}\` (${formatBytes(localSize)})\n• Zip: \`${zipName}\` (${formatBytes(zipStat.size)})\n• Zip lokal sudah dihapus permanen.`
              ).catch(() => {});
              resolve('Proses transfer selesai.');
            } else {
              await progressMessage.edit(`❌ **Upload gagal!** (exit code ${code}). Zip lokal tetap sudah dihapus, tidak ada sisa file numpuk.`).catch(() => {});
              resolve(`Proses archive/upload gagal dengan error code ${code}`);
            }
          });
        });
      }

      case 'clear': {
        if (!dscMessage) return 'Fitur ini cuma bisa dipakai lewat Discord.';

        if (previewMessages.length === 0) {
          return 'Belum ada file preview yang perlu dihapus.';
        }

        const channel = dscMessage.channel;
        let deletedCount = 0;

        // Hanya hapus pesan-pesan yang memang tercatat dari "preview" — aman,
        // gak akan menyentuh command kamu atau balasan bot yang lain.
        for (const msgId of previewMessages) {
          try {
            const msg = await channel.messages.fetch(msgId);
            await msg.delete();
            deletedCount++;
          } catch {
            // pesan mungkin sudah dihapus manual / kadaluarsa, lewati saja
          }
        }

        previewMessages.length = 0; // reset catatan setelah dibersihkan
        savePreviewMessages(); // ikut kosongkan file, bukan cuma di memory

        return `🧹 **Selesai!** ${deletedCount} pesan preview berhasil dihapus.`;
      }

      case 'network': {
        const verbose = args[0] && ['detail', '-v', 'verbose'].includes(args[0].toLowerCase());

        // Mode detail nampilin info teknis (IP lokal, gateway, DNS, MAC
        // address, dst) yang bisa dipakai buat fingerprinting/pemetaan
        // jaringan kalau histori chat ini kebaca orang lain (mis. Discord
        // kena hack) — jadi wajib PIN, sama gatenya kayak preview folder
        // rahasia. Mode default (tanpa detail) tetap bebas PIN.
        if (verbose) {
          if (args.length < 2) {
            return '🔒 **Detail teknis jaringan (IP lokal/gateway/DNS/MAC) butuh PIN keamanan.**\nFormat: `network detail <pin>`';
          }
          await requirePin(args, 'network detail (IP lokal/gateway/DNS/MAC)');
        }

        let profiles;
        try {
          profiles = await getNetworkInfo();
        } catch (err) {
          return `❌ Gagal membaca status jaringan: ${err.message}`;
        }

        if (!profiles.length) {
          return '❌ Tidak ada koneksi jaringan aktif terdeteksi (laptop mungkin sedang offline / semua adapter terputus).';
        }

        const blocks = profiles.map((p) => formatNetworkProfile(p, verbose));
        const footer = verbose ? '' : '\n\n_Ketik `network detail <pin>` untuk lihat IP lokal/gateway/DNS/MAC address._';
        return `**🌐 Status Jaringan Laptop**\n\n${blocks.join('\n\n')}${footer}`;
      }

      case 'baterai': {
        let battery;
        try {
          battery = await getBatteryInfo();
        } catch (err) {
          return `❌ Gagal membaca info baterai: ${err.message}`;
        }

        if (!battery) {
          return '❌ Tidak ditemukan baterai di laptop ini (mungkin PC desktop, atau driver baterai tidak terbaca lewat WMI).';
        }

        const percent = battery.EstimatedChargeRemaining;
        const status = describeBatteryStatus(battery.BatteryStatus);
        const chargeLine = status.charging ? '⚡ Sedang di-cas' : '🔌 Tidak di-cas';
        const icon = status.charging ? '🔋' : (percent <= 20 ? '🪫' : '🔋');

        const standbyMinutes = await getStandbyMinutes();
        const modeLine = describePowerMode(standbyMinutes);

        return `${icon} **Status Baterai Laptop**\n• Persentase: **${percent}%**\n• ${chargeLine} _(${status.label})_\n• Mode Power: ${modeLine}`;
      }

      case 'disk': {
        let disks;
        try {
          disks = await getDiskInfo();
        } catch (err) {
          return `❌ Gagal membaca info disk: ${err.message}`;
        }

        if (!disks.length) return '❌ Tidak ada drive lokal fisik yang terbaca.';

        const blocks = disks.map((d) => {
          const total = Number(d.Size) || 0;
          const free = Number(d.FreeSpace) || 0;
          const used = total - free;
          const percentUsed = total > 0 ? Math.round((used / total) * 100) : 0;
          return `💽 **${d.DeviceID}**\n• Total: ${formatBytes(total)}\n• Terpakai: ${formatBytes(used)} (${percentUsed}%)\n• Sisa: **${formatBytes(free)}**`;
        });

        return `**Status Disk Laptop**\n\n${blocks.join('\n\n')}`;
      }

      case 'mode': {
        if (args.length < 1) return 'Format: `mode <server/hemat>`';
        const subMode = args[0].toLowerCase(); // Mengambil string murni sub-argumen

        if (subMode === 'server') {
          // Set timeout AC *dan* DC (baterai) ke 0 (never), dan TUNGGU hasilnya + cek error
          const results = await Promise.all([
            runPowercfg('/change standby-timeout-ac 0'),
            runPowercfg('/change standby-timeout-dc 0'),
            runPowercfg('/change hibernate-timeout-ac 0'),
            runPowercfg('/change hibernate-timeout-dc 0'),
          ]);
          const failed = results.filter(r => !r.ok);
          if (failed.length > 0) {
            return `❌ **Gagal mengubah Mode Server!**\n${failed.map(f => `• ${f.error}`).join('\n')}\n\nKemungkinan bot tidak punya izin/berjalan bukan sebagai user yang login, atau ada Group Policy yang mengunci pengaturan power.`;
          }

          // Verifikasi nilai yang benar-benar tersimpan di skema aktif
          const actualMinutes = await getStandbyMinutes();
          const verified = actualMinutes === 0
            ? '✅ Terverifikasi: standby timeout = Never'
            : `⚠️ Perintah sukses tapi nilai terbaca saat ini: ${actualMinutes ?? 'tidak diketahui'} menit (mungkin ada aplikasi lain yang override, cek Settings > Power).`;

          return `🖥️ **Laptop beralih ke Mode Server!**\n• Status Sleep: **Never**\n• Status Hibernate: **Never**\n${verified}\nLaptop Anda akan tetap terjaga selamanya untuk memproses unggahan besar Anda.`;
        } 
        
        if (subMode === 'hemat') {
          // Kembalikan ke durasi bawaan harian Anda (Sleep 15 menit, Hibernate 3 jam), AC & DC
          const results = await Promise.all([
            runPowercfg('/change standby-timeout-ac 15'),
            runPowercfg('/change standby-timeout-dc 15'),
            runPowercfg('/change hibernate-timeout-ac 180'),
            runPowercfg('/change hibernate-timeout-dc 180'),
          ]);
          const failed = results.filter(r => !r.ok);
          if (failed.length > 0) {
            return `❌ **Gagal mengubah Mode Hemat!**\n${failed.map(f => `• ${f.error}`).join('\n')}`;
          }
          return '🔋 **Laptop beralih ke Mode Hemat (Default)!**\n• Status Sleep: **15 Menit**\n• Status Hibernate: **3 Jam**\nLaptop akan otomatis tidur jika didiamkan sesuai setingan harian Anda.';
        }

        return 'Format salah. Gunakan: `mode server` atau `mode hemat`';
      }

      case 'shutdown': {
        await requirePin(args, 'shutdown');

        // BUG FIX: sebelumnya exec() dipanggil tanpa callback/await sama
        // sekali — kalau shutdown.exe gagal dijalankan (path salah,
        // permission ditolak, dll), bot TETAP bilang "Perintah Diterima"
        // ke user padahal laptop tidak jadi mati, dan errornya tidak
        // ketahuan siapa pun. Lebih parah lagi, child process yang gagal
        // spawn tanpa listener 'error' bisa bikin proses bot sendiri crash
        // diam-diam. Sekarang di-await lewat execAsync (promisify) dan
        // hasilnya dicek eksplisit sebelum bilang sukses ke user/email.
        try {
          await execAsync('C:\\Windows\\System32\\shutdown.exe /s /f /t 15');
        } catch (err) {
          sendAlertEmail(
            '❌ Command "shutdown" GAGAL dieksekusi',
            `PIN valid, tapi command shutdown.exe GAGAL dijalankan.\nError: ${err.message}\nWaktu: ${new Date().toISOString()}`
          ).catch(() => {});
          return `❌ PIN valid, tapi shutdown **GAGAL dijalankan**: ${err.message}`;
        }

        sendAlertEmail(
          '✅ Command "shutdown" berhasil dieksekusi',
          `Command "shutdown" berhasil dijalankan dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, PIN-mu sudah bocor — segera amankan akun Discord (ganti password, cek active sessions, aktifkan 2FA). PIN sudah otomatis diganti (lihat email rotasi terpisah), tapi laptop sudah kadung dimatikan.`
        ).catch(() => {});
        return '🔌 **Perintah Diterima!** Laptop Anda di rumah akan otomatis dimatikan dalam waktu 15 detik ke depan. Koneksi bot segera terputus.\n_(Berubah pikiran? Ketik `cancel` sebelum 15 detik habis.)_';
      }

      case 'restart': {
        await requirePin(args, 'restart');

        try {
          await execAsync('C:\\Windows\\System32\\shutdown.exe /r /f /t 15');
        } catch (err) {
          sendAlertEmail(
            '❌ Command "restart" GAGAL dieksekusi',
            `PIN valid, tapi command shutdown.exe (/r) GAGAL dijalankan.\nError: ${err.message}\nWaktu: ${new Date().toISOString()}`
          ).catch(() => {});
          return `❌ PIN valid, tapi restart **GAGAL dijalankan**: ${err.message}`;
        }

        sendAlertEmail(
          '✅ Command "restart" berhasil dieksekusi',
          `Command "restart" berhasil dijalankan dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, segera amankan akun Discord-mu.`
        ).catch(() => {});
        return '🔄 **Perintah Diterima!** Laptop Anda di rumah akan otomatis restart dalam waktu 15 detik ke depan. Koneksi bot akan terputus sebentar dan bot Nausync Cloud akan otomatis aktif lagi begitu Windows selesai booting (asalkan sudah di-setting auto-start).\n_(Berubah pikiran? Ketik `cancel` sebelum 15 detik habis.)_';
      }

      // Batalkan shutdown/restart yang masih dalam masa tunggu 15 detik
      // ("shutdown.exe /a" = abort pending shutdown). Sengaja TIDAK butuh
      // PIN — ini aksi yang MENGURANGI risiko (membatalkan aksi berbahaya),
      // bukan menambah, jadi tidak masuk akal untuk di-gate PIN sama
      // seperti aksinya sendiri. Kalau dipanggil tanpa ada shutdown yang
      // pending, shutdown.exe akan balas error — itu wajar, cukup
      // dilaporkan apa adanya.
      case 'cancel': {
        try {
          await execAsync('C:\\Windows\\System32\\shutdown.exe /a');
        } catch (err) {
          return `⚠️ Tidak ada shutdown/restart yang bisa dibatalkan (atau gagal: ${err.message}).`;
        }
        sendAlertEmail(
          '🛑 Shutdown/restart dibatalkan',
          `Command "cancel" berhasil membatalkan shutdown/restart yang sedang pending, pada ${new Date().toISOString()}.`
        ).catch(() => {});
        return '🛑 **Dibatalkan!** Shutdown/restart yang tadi pending sudah dihentikan, laptop tetap menyala.';
      }

      case 'chgpin': {
        if (args.length < 1) return 'Format: `chgpin <pin_lama>`';
        try {
          await changePin(args[0]);
          return '🔐 **PIN berhasil diganti!** PIN baru sudah dikirim ke email alert-mu. PIN lama sudah tidak berlaku lagi.';
        } catch (err) {
          return `❌ Gagal ganti PIN: ${err.message}`;
        }
      }

      case 'download': {
        if (args.length < 1) return 'Format: `download <path>` (kalau file/folder rahasia dan/atau ukuran ≥50MB, tambahkan PIN: `download <path> <pin>`)';
        
        const targetPath = resolvePathArg(args[0]);
        const absPath = resolveForRclone(targetPath);
        
        if (!fs.existsSync(absPath)) return `❌ Gagal: File atau folder tidak ditemukan.`;

        const localSize = getLocalSize(absPath);
        const needsConfidentialPin = isConfidential(absPath);
        const needsSizePin = localSize >= PIN_SIZE_THRESHOLD;

        if (needsConfidentialPin || needsSizePin) {
          if (args.length < 2) {
            const label = needsConfidentialPin
              ? `🔒 **Data ini bersifat RAHASIA.** \`${toDisplayPath(targetPath)}\` butuh PIN keamanan buat didownload.`
              : `🔒 **Ukuran ${formatBytes(localSize)} (≥50MB).** Download sebesar ini wajib PIN keamanan (cegah bot crash/storage Drive penuh & cegah download berulang-ulang kalau Discord-mu kena hack).`;
            return `${label}\nFormat: \`download ${args[0]} <pin>\``;
          }
          const reason = needsConfidentialPin
            ? `download folder/file rahasia: ${toDisplayPath(targetPath)}`
            : `download besar (${formatBytes(localSize)}): ${toDisplayPath(targetPath)}`;
          await requirePin(args, reason);

          if (needsConfidentialPin) {
            sendAlertEmail(
              '🔓 Download folder/file RAHASIA dijalankan',
              `Folder/file rahasia "${toDisplayPath(targetPath)}" berhasil didownload ke Google Drive dengan PIN yang valid pada ${new Date().toISOString()}.\n\nKalau ini bukan kamu, PIN-mu sudah bocor dan data rahasiamu baru saja disalin keluar — segera amankan akun Discord-mu.`
            ).catch(() => {});
          }
        }

        const driveFreeSpace = await getDriveFreeSpace();
        
        if (localSize > driveFreeSpace) {
          return `❌ **Unduhan Ditolak!** Ukuran target melebihi kapasitas Google Drive Anda.\n` +
                 `• Target: **${formatBytes(localSize)}**\n` +
                 `• Sisa Drive: **${formatBytes(driveFreeSpace)}**`;
        }
        
        const stats = fs.statSync(absPath);
        const isDir = stats.isDirectory();
        const entityName = targetPath.replace(/\\/g, '/').split('/').pop() || 'download';
        
        let progressMessage = null;
        if (dscMessage) {
          progressMessage = await dscMessage.reply(`⏳ **Mempersiapkan rclone...** Menghitung data **${formatBytes(localSize)}**`);
        }

        return new Promise((resolve) => {
          let rcloneCmd = 'copy';
          let remoteTarget = `${config.rcloneRemote}:${config.rcloneStagingFolder}/${entityName}`;
          
          if (!isDir) {
            rcloneCmd = 'copyto';
            remoteTarget = `${config.rcloneRemote}:${config.rcloneStagingFolder}/${entityName}`;
          }

          const process = spawn('rclone', [rcloneCmd, absPath, remoteTarget, '--progress', '--stats', '3s']);
          
          let lastUpdate = 0;

          process.stdout.on('data', async (data) => {
            const output = data.toString();
            const match = output.match(/(\d+)%\s*,/);
            if (match && progressMessage) {
              const currentProgress = match[1] + "%";
              const now = Date.now();
              if (now - lastUpdate > 4000) {
                lastUpdate = now;
                await progressMessage.edit(`📦 **Sedang Upload:** \`${currentProgress}\` Selesai\n• Target: "${entityName}" (${formatBytes(localSize)})`).catch(() => {});
              }
            }
          });

          process.on('close', async (code) => {
            if (code === 0) {
              if (progressMessage) {
                await progressMessage.edit(`✅ **Upload Sukses 100%!**\n• Target: "${entityName}"\n• Ukuran: **${formatBytes(localSize)}**\nSilakan cek Google Drive di HP Anda.`).catch(() => {});
              }
              resolve(`Proses transfer selesai.`);
            } else {
              if (progressMessage) {
                await progressMessage.edit(`❌ **Proses Gagal!** Terjadi kesalahan saat rclone melakukan transfer data.`).catch(() => {});
              }
              resolve(`Proses transfer dihentikan dengan error code ${code}`);
            }
          });
        });
      }

      default:
        return `Command tidak dikenali: "${command}". Ketik "help" untuk daftar command.`;
    }
  } catch (err) {
    return `Gagal: ${err.message}`;
  }
}
```

### `src copy/config.js`

```javascript
import 'dotenv/config';
import path from 'node:path';
import fs from 'node:fs';
import dotenv from 'dotenv';

function required(name) {
  const val = process.env[name];
  if (!val) {
    throw new Error(`Environment variable ${name} belum diset. Cek file .env`);
  }
  return val;
}

// Parse ALLOWED_ROOTS jadi map { namaFolder: absolutePath }.
//
// Format di .env: "Nama1=Path1;Nama2=Path2;..."
// - Nama dipakai sebagai "folder virtual" tingkat atas di bot (mis. "Documents").
// - Path boleh pakai "/" atau "\" (Node otomatis normalize di Windows), dan
//   boleh mengandung spasi tanpa perlu tanda kutip.
//
// Contoh:
//   ALLOWED_ROOTS=D=D:/;Documents=C:/Users/Naufal Khalil/Documents;Music=C:/Users/Naufal Khalil/Music
function parseAllowedRoots(raw) {
  const roots = {};
  const entries = raw.split(';').map((e) => e.trim()).filter(Boolean);

  if (entries.length === 0) {
    throw new Error('ALLOWED_ROOTS kosong. Cek file .env, format: Nama1=Path1;Nama2=Path2');
  }

  for (const entry of entries) {
    const idx = entry.indexOf('=');
    if (idx === -1) {
      throw new Error(`Format ALLOWED_ROOTS salah pada entry "${entry}". Gunakan Nama=Path`);
    }

    const name = entry.slice(0, idx).trim();
    const dir = entry.slice(idx + 1).trim();

    if (!name || !dir) {
      throw new Error(`Format ALLOWED_ROOTS salah pada entry "${entry}". Nama & path tidak boleh kosong.`);
    }

    // Nama root dipakai sebagai "folder virtual" tingkat atas (mis. "Documents"),
    // jadi tidak boleh mengandung "/" atau "\" biar tidak ambigu dengan path asli.
    if (/[\\/]/.test(name)) {
      throw new Error(`Nama root "${name}" tidak boleh mengandung "/" atau "\\".`);
    }
    if (roots[name]) {
      throw new Error(`Nama root "${name}" dipakai dua kali di ALLOWED_ROOTS. Nama harus unik.`);
    }

    roots[name] = path.resolve(dir);
  }

  return roots;
}

// Parse BLOCKED_PATHS jadi array path absolut yang DILARANG diakses bot,
// walaupun path itu ada di dalam salah satu ALLOWED_ROOTS.
//
// Format di .env: "Path1;Path2;..." (path absolut, boleh pakai "/" atau "\").
// Berguna untuk mengecualikan folder sensitif seperti folder project bot ini
// sendiri (yang berisi file .env dengan token/kredensial), padahal folder
// itu ada di dalam root "D" yang diizinkan.
//
// Contoh:
//   BLOCKED_PATHS=D:/Project/Coding/Nausync Engine;D:/Project/Rahasia
function parseBlockedPaths(raw) {
  if (!raw) return [];
  return raw
    .split(';')
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => path.resolve(p));
}

// Parse CONFIDENTIAL_PATHS jadi array path absolut yang BOLEH diakses lewat
// "list" (masih kelihatan namanya), tapi WAJIB PIN + kirim alert email kalau
// mau di-preview/download isinya. Beda dengan BLOCKED_PATHS yang benar-benar
// disembunyikan total — folder "rahasia" di sini memang kamu tahu isinya
// ada, cuma kontennya dianggap sensitif (mis. scan KTP, dokumen keuangan).
//
// Format di .env sama seperti BLOCKED_PATHS: "Path1;Path2;..."
function parseConfidentialPaths(raw) {
  if (!raw) return [];
  return raw
    .split(';')
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => path.resolve(p));
}

// --- Kredensial rahasia (SMTP + email alert PIN) DIPISAH dari .env utama ---
//
// Alasannya: .env utama biasanya lebih "banyak disentuh" (dibuka pas
// setup ulang, di-share ke tempat lain, dsb), jadi risiko bocornya lebih
// tinggi (ke-commit ke git, ke-screenshot, dsb). Kalau kredensial SMTP dan
// email alert PIN ikut nyampur di file yang sama, satu kebocoran .env
// utama otomatis membongkar JALUR notifikasi keamanan PIN itu juga —
// yang justru harusnya jadi "kanal cadangan" independen kalau .env utama
// (atau Discord) kena hack.
//
// Solusinya: .env utama cuma nyimpen LOKASI file kedua ini
// (SECURE_ENV_PATH), bukan isi kredensialnya. File kedua ini:
// - taruh di folder LAIN (idealnya di luar folder project bot ini sama
//   sekali, mis. "D:/Rahasia/nausync-secure.env"), supaya kalau folder
//   project ke-zip/ke-share/ke-backup, file ini tidak ikut kebawa.
// - sebaiknya juga didaftarkan ke BLOCKED_PATHS di .env utama, supaya
//   bot sendiri (lewat command list/copy/download) tidak akan pernah
//   bisa membaca/mengekspos isi file ini walau folder induknya ada di
//   dalam salah satu ALLOWED_ROOTS.
// - di Windows, batasi permission file-nya (klik kanan > Properties >
//   Security) supaya cuma akun Windows-mu sendiri yang bisa baca.
//
// Format isi file SECURE_ENV_PATH sama seperti .env biasa:
//   SMTP_HOST=smtp.gmail.com
//   SMTP_PORT=465
//   SMTP_USER=emailkuyangkirim@gmail.com
//   SMTP_PASS=app_password_16_digit
//   PIN_ALERT_EMAIL=emailrahasiaku_beda@gmail.com
function loadSecureEnv() {
  const securePath = path.resolve(required('SECURE_ENV_PATH'));

  if (!fs.existsSync(securePath)) {
    throw new Error(`File SECURE_ENV_PATH ("${securePath}") tidak ditemukan. Buat file itu dulu (lihat komentar di config.js untuk formatnya).`);
  }

  // Sengaja pakai dotenv.parse() manual (bukan dotenv.config({path})), biar
  // nilai-nilainya TIDAK ikut nimbun ke process.env global — cukup lewat
  // sebagai object lokal ke config di bawah, jadi kalau ada bagian lain
  // dari kode (atau dependency pihak ketiga) yang somehow dump seluruh
  // process.env buat debug, kredensial ini tidak ikut kebongkar di situ.
  const parsed = dotenv.parse(fs.readFileSync(securePath, 'utf-8'));

  function needSecure(key) {
    if (!parsed[key]) {
      throw new Error(`"${key}" belum diset di file secure env (${securePath}).`);
    }
    return parsed[key];
  }

  return {
    smtpHost: needSecure('SMTP_HOST'),
    smtpPort: parseInt(needSecure('SMTP_PORT'), 10),
    smtpUser: needSecure('SMTP_USER'),
    smtpPass: needSecure('SMTP_PASS'),
    pinAlertEmail: needSecure('PIN_ALERT_EMAIL'),
  };
}

// Berapa hari item di dalam ".trash" (hasil "delete") dibiarkan sebelum
// otomatis dihapus PERMANEN oleh sweep harian (lihat purgeExpiredTrash() di
// fsops.js & pemanggilnya di index.js). Default 30 hari kalau tidak diset
// di .env (TRASH_RETENTION_DAYS=45, misalnya). Ini bukan pengganti "purge"
// manual — cuma jaring pengaman supaya trash tidak menumpuk selamanya dan
// makan storage tanpa disadari.
function parseTrashRetentionDays(raw) {
  const parsed = parseInt(raw, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 30;
}

export const config = {
  allowedRoots: parseAllowedRoots(required('ALLOWED_ROOTS')),
  blockedPaths: parseBlockedPaths(process.env.BLOCKED_PATHS),
  confidentialPaths: parseConfidentialPaths(process.env.CONFIDENTIAL_PATHS),
  rcloneRemote: required('RCLONE_REMOTE'),
  rcloneStagingFolder: process.env.RCLONE_STAGING_FOLDER || 'nausync-staging',
  trashRetentionDays: parseTrashRetentionDays(process.env.TRASH_RETENTION_DAYS),

  // --- Konfigurasi PIN keamanan (lihat pinStore.js) ---
  // Kredensialnya sendiri dimuat dari file TERPISAH (loadSecureEnv di
  // atas), bukan dari .env utama ini — lihat SECURE_ENV_PATH.
  ...loadSecureEnv(),
};
```

### `src copy/fsops.js`

```javascript
import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { safeResolve, isRootItself, isBlocked, containsBlockedPath, listRootNames, confidentialAncestorOf } from './pathGuard.js';
import { config } from './config.js';

// NOTE: fitur "archive" (compress ke .zip) butuh package "archiver" —
// kalau belum terinstall, jalankan `npm install archiver` di folder project.
//
// "archiver" itu package CommonJS, jadi tetap di-load lewat createRequire
// (bukan `import` ES Module) supaya tidak kena masalah interop CJS/ESM
// yang beda-beda antar versi Node.
const require = createRequire(import.meta.url);

// PERUBAHAN PENTING (archiver v8+): package "archiver" versi lama dulu
// dipanggil sebagai FUNGSI langsung — `archiver('zip', options)`. Mulai
// versi 8, API-nya diubah total jadi BERBASIS CLASS: `new ZipArchive(options)`
// (nama export-nya "ZipArchive", bukan lagi default function). Ini BUKAN
// masalah instalasi — memang breaking change resmi dari package-nya
// sendiri (lihat contoh resmi di npm/GitHub archiverjs/node-archiver).
// Ambil class ZipArchive-nya di sini.
const archiverModule = require('archiver');
const ZipArchive = archiverModule.ZipArchive;


// Nama folder trash tersembunyi, dibuat langsung di dalam masing-masing root
// (bukan satu lokasi global) supaya "move ke trash" selalu di drive yang
// sama dengan file aslinya (menghindari error EXDEV kalau root-root ada di
// drive fisik yang berbeda-beda).
const TRASH_DIRNAME = '.trash';

// Nama-nama file "sampah" bawaan OS yang otomatis dibuat Windows/Mac di
// folder mana pun (bukan file yang sengaja dibuat/diisi user), jadi tidak
// perlu ikut ditampilkan di "list" — cuma bikin bingung ("kok ada file
// asing ini?") padahal ini normal dan bukan tanda ada yang aneh:
//
// - desktop.ini  : dibuat Windows otomatis di folder yang pernah di-custom
//                  (ganti icon folder, folder yang di-sync OneDrive, dst).
//                  Ditandai atribut Hidden+System oleh Windows, TAPI atribut
//                  itu murni konsep Windows Explorer — fs.readdir() Node.js
//                  tidak peduli atribut itu sama sekali, jadi tetap kebaca
//                  "on-hidden" oleh bot walau disembunyikan di Explorer.
// - Thumbs.db    : cache thumbnail gambar/video, dibuat Windows Explorer
//                  otomatis di folder yang isinya media.
// - .DS_Store    : versi Mac dari desktop.ini (metadata tampilan folder),
//                  bisa nongol kalau foldernya pernah dibuka di macOS.
//
// Perlakuannya SAMA seperti ".trash": disembunyikan dari hasil "list" di
// SEMUA folder secara otomatis, tapi tetap ada fisik di disk (tidak
// dihapus) — cuma tidak ikut ditampilkan biar listing lebih bersih.
const OS_JUNK_FILENAMES = new Set(['desktop.ini', 'Thumbs.db', '.DS_Store']);

// Cari root absolute path dari sebuah virtual path (mis. "Documents/Skripsi"
// -> path absolut folder "Documents" di ALLOWED_ROOTS). Dipakai buat nentuin
// di mana folder ".trash" masing-masing root berada.
function rootAbsPathFor(virtualPath) {
  const normalized = virtualPath.replace(/\\/g, '/').replace(/^\/+/, '');
  const rootName = normalized.split('/')[0];
  const rootAbsPath = config.allowedRoots[rootName];
  if (!rootAbsPath) {
    throw new Error(`"${rootName}" bukan folder yang diizinkan.`);
  }
  return rootAbsPath;
}

// Tentukan folder ".trash" mana yang harus dipakai untuk sebuah file/folder
// yang mau dihapus (srcAbsPath = path absolut aslinya, virtualPath = path
// virtual yang diketik user, dipakai buat cari root-nya).
//
// BUG LAMA yang diperbaiki di sini: sebelumnya deletePath() SELALU memakai
// ".trash" di root paling atas (mis. "D:/.trash"), walau file yang dihapus
// aslinya berada di dalam folder CONFIDENTIAL (mis.
// "D:/Project/Data Siswa/nilai.xlsx"). Karena "D:/.trash" tidak terdaftar
// di CONFIDENTIAL_PATHS, begitu file itu masuk trash, dia jadi bisa
// di-preview/download TANPA PIN lewat "list" biasa di root "D" — proteksi
// confidential-nya lolos begitu saja gara-gara lokasi trash yang salah.
//
// PERBAIKAN: kalau source path ada di dalam folder confidential, trash-nya
// ditaruh TETAP di dalam folder confidential ASAL itu (subfolder ".trash"
// di dalamnya), bukan di ".trash" milik root. Jadi proteksi PIN-nya ikut
// terbawa ke lokasi barunya. Kalau source BUKAN confidential, perilaku
// lama (trash di root) tetap dipakai seperti biasa.
function trashDirFor(srcAbsPath, virtualPath) {
  const confidentialAncestor = confidentialAncestorOf(srcAbsPath);
  if (confidentialAncestor) {
    return path.join(confidentialAncestor, TRASH_DIRNAME);
  }
  return path.join(rootAbsPathFor(virtualPath), TRASH_DIRNAME);
}

export async function listDir(relPath = '.') {
  // "." = root virtual gabungan semua folder yang diizinkan -> tampilkan
  // nama-nama root itu sendiri sebagai "folder", bukan baca filesystem asli
  // (tidak ada satu folder fisik tunggal yang mewakili gabungan semuanya).
  if (relPath === '.' || relPath === '') {
    return listRootNames().map((name) => `${name}/`);
  }

  const target = safeResolve(relPath);
  const entries = await fs.readdir(target, { withFileTypes: true });
  // Sembunyikan entry yang termasuk BLOCKED_PATHS dari hasil listing folder
  // induknya juga (bukan cuma ditolak saat dibuka langsung), supaya
  // keberadaannya pun tidak terekspos ke user lewat command "list".
  return entries
    .filter((e) => e.name !== TRASH_DIRNAME)
    .filter((e) => !OS_JUNK_FILENAMES.has(e.name))
    .filter((e) => !isBlocked(path.join(target, e.name)))
    .map((e) => (e.isDirectory() ? `${e.name}/` : e.name));
}

export async function copyPath(srcRel, dstRel) {
  const src = safeResolve(srcRel);
  const dst = safeResolve(dstRel);

  // Cegah copy folder yang MENGANDUNG sebuah BLOCKED_PATH di dalamnya (mis.
  // copy "D/Project" yang di dalamnya ada "D/Project/Coding/Nausync Engine"
  // yang di-block) — kalau dibiarkan, isinya akan terduplikat ke lokasi
  // TUJUAN yang boleh jadi TIDAK di-block, sehingga konten sensitif jadi
  // "bocor" ke folder yang bisa diakses bebas walau sumber aslinya aman.
  if (containsBlockedPath(src)) {
    throw new Error(`"${srcRel}" tidak bisa di-copy karena mengandung folder/file yang diblokir (BLOCKED_PATHS) di dalamnya. Copy isi per-item saja, lewati yang diblokir.`);
  }

  // Proteksi overwrite senyap: tanpa ini, fs.copyFile/fs.cp akan MENIMPA
  // file/folder tujuan yang sudah ada tanpa peringatan apa pun — risiko
  // kehilangan data tanpa sadar (mis. typo nama tujuan yang kebetulan sama
  // dengan file penting yang sudah ada). Kalau memang mau timpa, user harus
  // hapus/rename dulu tujuannya secara eksplisit.
  if (fsSync.existsSync(dst)) {
    throw new Error(`"${dstRel}" sudah ada. Copy dibatalkan supaya tidak menimpa data yang sudah ada tanpa sadar — hapus/rename dulu tujuannya kalau memang mau ditimpa.`);
  }

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

  // Sama seperti copyPath: cegah memindah folder INDUK yang di dalamnya ada
  // BLOCKED_PATH — kalau lolos, folder yang di-block ikut pindah ke lokasi
  // baru (yang mungkin tidak di-block), dan lokasi lama yang tadinya
  // dilindungi jadi hilang begitu saja.
  if (containsBlockedPath(src)) {
    throw new Error(`"${srcRel}" tidak bisa dipindah karena mengandung folder/file yang diblokir (BLOCKED_PATHS) di dalamnya. Pindahkan isinya per-item saja, lewati yang diblokir.`);
  }

  const dst = safeResolve(dstRel);

  // Sama seperti copyPath: cegah fs.rename menimpa tujuan yang sudah ada
  // tanpa peringatan (fs.rename di Node akan diam-diam mengganti file
  // tujuan kalau sudah ada, dan untuk folder bisa gagal aneh/menimpa
  // sebagian tergantung OS). Kalau memang mau timpa/rename ke nama yang
  // sudah dipakai, user harus hapus/rename dulu tujuannya secara eksplisit.
  if (fsSync.existsSync(dst)) {
    throw new Error(`"${dstRel}" sudah ada. Move dibatalkan supaya tidak menimpa data yang sudah ada tanpa sadar — hapus/rename dulu tujuannya kalau memang mau ditimpa.`);
  }

  await fs.mkdir(path.dirname(dst), { recursive: true });
  await fs.rename(src, dst);
  return dst;
}

// "delete" SEKARANG TIDAK PERMANEN — file/folder cuma dipindah ke folder
// ".trash" tersembunyi di dalam root yang sama (bukan langsung dihapus dari
// disk). Nama file di dalam trash ditambah timestamp biar tidak tertukar
// kalau ada nama yang sama dihapus berkali-kali. Buat hapus permanen,
// pakai purgePath() (dipanggil lewat command "purge").
export async function deletePath(relPath) {
  if (isRootItself(relPath)) {
    throw new Error(`"${relPath}" adalah folder root yang diizinkan itu sendiri, tidak boleh dihapus. Hapus isinya saja.`);
  }
  const src = safeResolve(relPath);

  // Cegah menghapus folder INDUK yang di dalamnya ada BLOCKED_PATH — tanpa
  // ini, "delete D/Project" tetap akan memindahkan isi
  // "D/Project/Coding/Nausync Engine" (folder yang di-block) ke trash,
  // walau "D/Project" sendiri lolos dari isBlocked() karena bukan target
  // yang persis di-block.
  if (containsBlockedPath(src)) {
    throw new Error(`"${relPath}" tidak bisa dihapus karena mengandung folder/file yang diblokir (BLOCKED_PATHS) di dalamnya. Hapus isinya per-item saja, lewati yang diblokir.`);
  }

  const trashDir = trashDirFor(src, relPath);
  await fs.mkdir(trashDir, { recursive: true });

  const baseName = path.basename(src);
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  let trashTarget = path.join(trashDir, `${stamp}__${baseName}`);
  // Jaga-jaga kalau ada nama yang sama persis kebetulan dihapus di detik
  // yang sama (harusnya jarang banget, tapi tetap dijaga biar tidak
  // ketimpa/hilang diam-diam).
  let attempt = 1;
  while (fsSync.existsSync(trashTarget)) {
    trashTarget = path.join(trashDir, `${stamp}-${attempt}__${baseName}`);
    attempt++;
  }

  await fs.rename(src, trashTarget);
  return trashTarget;
}

// Hapus permanen — TIDAK lewat trash, langsung dari disk. Ini logic lama
// yang sebelumnya dipakai deletePath(), sekarang dipisah jadi command
// "purge" sendiri (dengan konfirmasi yes/no di level command.js) supaya
// user tidak kepencet hapus permanen tanpa sadar.
export async function purgePath(relPath) {
  if (isRootItself(relPath)) {
    throw new Error(`"${relPath}" adalah folder root yang diizinkan itu sendiri, tidak boleh dihapus permanen. Hapus isinya saja.`);
  }
  const target = safeResolve(relPath);

  // Sama seperti deletePath, tapi lebih kritis lagi karena purge = hapus
  // PERMANEN tanpa lewat trash — kalau sampai lolos, isi BLOCKED_PATH di
  // dalamnya langsung musnah dari disk tanpa bisa dikembalikan sama sekali.
  if (containsBlockedPath(target)) {
    throw new Error(`"${relPath}" tidak bisa di-purge karena mengandung folder/file yang diblokir (BLOCKED_PATHS) di dalamnya. Purge isinya per-item saja, lewati yang diblokir.`);
  }

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

// --- Auto-purge trash setelah retensi habis (config.trashRetentionDays) ---
//
// KENAPA INI PERLU: "delete" cuma memindah ke ".trash" (tidak permanen),
// dan sebelumnya tidak ada mekanisme apa pun yang membersihkannya lagi
// kecuali user manual jalanin "purge" satu-satu. Kalau dibiarkan, trash
// menumpuk selamanya dan diam-diam menghabiskan storage — padahal user
// mungkin sudah lama lupa isinya (dan tidak butuh lagi).
//
// Dikumpulkan dari SEMUA lokasi trash yang mungkin dipakai bot: ".trash"
// di tiap root (root-level, lihat trashDirFor di atas), DITAMBAH ".trash"
// di dalam tiap CONFIDENTIAL_PATHS (karena file dari folder rahasia
// sengaja ditrash ke situ, bukan ke ".trash" root, biar proteksi PIN-nya
// ikut terbawa — lihat komentar trashDirFor()).
function allTrashDirs() {
  const dirs = new Set();
  for (const rootAbsPath of Object.values(config.allowedRoots)) {
    dirs.add(path.join(rootAbsPath, TRASH_DIRNAME));
  }
  for (const confidentialPath of config.confidentialPaths) {
    dirs.add(path.join(confidentialPath, TRASH_DIRNAME));
  }
  return [...dirs];
}

// Sapu semua folder trash, hapus PERMANEN item yang sudah lebih tua dari
// config.trashRetentionDays (dihitung dari mtime item itu di dalam trash —
// yaitu waktu dia DIPINDAH ke trash, karena deletePath melakukan fs.rename
// yang set ulang mtime). Dipanggil rutin (harian) dari index.js, bukan
// sesuatu yang dipicu command user.
//
// Return array path yang berhasil dihapus permanen, buat dilaporkan lewat
// email/log oleh pemanggilnya.
export async function purgeExpiredTrash() {
  const cutoffMs = config.trashRetentionDays * 24 * 60 * 60 * 1000;
  const now = Date.now();
  const purged = [];

  for (const trashDir of allTrashDirs()) {
    let entries;
    try {
      entries = await fs.readdir(trashDir, { withFileTypes: true });
    } catch {
      // Trash dir belum pernah dibuat, atau root-nya lagi tidak ke-mount
      // (mis. drive eksternal dicabut) -> lewati, bukan error fatal.
      continue;
    }

    for (const entry of entries) {
      const entryPath = path.join(trashDir, entry.name);
      let stat;
      try {
        stat = await fs.stat(entryPath);
      } catch {
        continue;
      }

      const ageMs = now - stat.mtimeMs;
      if (ageMs < cutoffMs) continue;

      try {
        await fs.rm(entryPath, { recursive: true, force: true });
        purged.push(entryPath);
      } catch (err) {
        console.warn(`⚠️ Gagal auto-purge trash "${entryPath}": ${err.message}`);
      }
    }
  }

  return purged;
}

// Compress srcAbsPath (file ATAU folder) jadi satu file .zip di
// destZipAbsPath. Dipakai command "archive" — tujuannya bikin transfer ke
// Google Drive lebih hemat bandwidth/waktu buat folder isinya banyak file
// kecil (1 koneksi upload, bukan ratusan file kecil satu-satu).
//
// Sengaja return Promise manual (bukan async/await polos) karena stream
// `archiver` berbasis event ('close'/'error'), bukan sesuatu yang bisa
// di-await langsung.
export function createZip(srcAbsPath, destZipAbsPath) {
  return new Promise((resolve, reject) => {
    // Cek di sini (BUKAN di top-level file) supaya kalau package "archiver"
    // bermasalah, cuma command "archive" ini yang gagal dengan pesan jelas —
    // command lain (list/copy/preview/dll) tetap jalan normal, bot tidak
    // ikut mati total.
    if (typeof ZipArchive !== 'function') {
      reject(new Error(
        'Package "archiver" tidak menyediakan class "ZipArchive" (kemungkinan ' +
        'versi package-nya belum sesuai/terlalu lama, atau instalasinya rusak). ' +
        'Coba jalankan "npm ls archiver" di folder project (lewat Command Prompt/' +
        'PowerShell, BUKAN lewat Discord) untuk cek versinya — kode ini butuh ' +
        'archiver versi 8 ke atas yang API-nya berbasis "ZipArchive" class.'
      ));
      return;
    }

    let stat;
    try {
      stat = fsSync.statSync(srcAbsPath);
    } catch (err) {
      reject(err);
      return;
    }

    const output = fsSync.createWriteStream(destZipAbsPath);
    // API BARU (archiver v8+): instantiate class-nya, bukan panggil sebagai
    // fungsi seperti versi lama (`archiver('zip', options)`).
    const archive = new ZipArchive({ zlib: { level: 9 } });

    output.on('close', () => resolve(destZipAbsPath));
    output.on('error', reject);
    archive.on('error', reject);
    archive.pipe(output);

    if (stat.isDirectory()) {
      archive.directory(srcAbsPath, path.basename(srcAbsPath));
    } else {
      archive.file(srcAbsPath, { name: path.basename(srcAbsPath) });
    }

    archive.finalize();
  });
}
```

### `src copy/index.js`

```javascript
import { Client, GatewayIntentBits, Partials } from 'discord.js';
import pino from 'pino';
import { handleCommand, BUILD_TAG } from './commands.js';
import { checkRcloneReady } from './rclone.js';
import { initPin, startPinExpiryWatcher, sendAlertEmail } from './pinStore.js';
import { purgeExpiredTrash } from './fsops.js';
import { config } from './config.js';

const logger = pino({ level: 'info' });

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

// Fungsi untuk menyalakan fitur utama setelah berhasil login ke Discord
client.once('ready', async () => {
  logger.info(`Bot Nausync Cloud sukses terhubung ke Discord sebagai: ${client.user.tag}`);
  logger.info(`Kode command yang aktif: ${BUILD_TAG}`);
  
  // Cek kesiapan rclone sekali saja saat awal start
  try {
    await checkRcloneReady();
    logger.info('rclone OK, remote Google Drive terhubung.');
  } catch (err) {
    logger.warn('rclone belum siap / remote belum dikonfigurasi.');
  }

  // Generate PIN keamanan (sekali saja, first run) & kirim ke email —
  // lihat pinStore.js. Command berbahaya (shutdown/restart/purge) butuh
  // PIN ini, independen dari Discord, supaya tetap aman walau akun
  // Discord kena hack.
  try {
    await initPin();
    startPinExpiryWatcher();
    logger.info('PIN keamanan siap (cek pin.store.json / email kalau baru pertama kali).');
  } catch (err) {
    logger.error(err, 'Gagal inisialisasi PIN keamanan.');
  }

  // Jalankan sweep auto-purge trash sekali di awal, lalu jadwalkan ulang
  // tiap TRASH_SWEEP_INTERVAL_MS selama proses bot hidup (pola sama seperti
  // startPinExpiryWatcher di atas).
  runTrashRetentionSweep();
  setInterval(runTrashRetentionSweep, TRASH_SWEEP_INTERVAL_MS);

  // --- FITUR BARU: KIRIM PESAN NOTIFIKASI STARTUP LANGSUNG KE DM OWNER ---
  try {
    const ownerId = process.env.DISCORD_OWNER_ID;
    if (ownerId) {
      // Ambil objek pengguna berdasarkan ID pemilik di file .env
      const owner = await client.users.fetch(ownerId);
      
      // Kirim pesan salam pembuka ke DM pribadi Anda
      await owner.send(`🟢 *Bot Nausync Cloud Telah Aktif!* \nLaptop Anda di rumah baru saja dinyalakan/login dan sistem background sudah *stand-by* menerima perintah Anda.`);
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
      await message.reply(reply);
    }

    // Catat balasan bot ke log juga (dipotong biar log tidak kebanjiran),
    // supaya kalau ada masalah bisa dicek dari log server tanpa perlu
    // screenshot Discord tiap kali.
    const replyPreview = reply ? reply.slice(0, 300).replace(/\n/g, ' ') : '(null / sudah dikirim manual)';
    logger.info(`Balasan bot untuk "${text}": ${replyPreview}`);
  } catch (err) {
    logger.error(err, `Gagal memproses command "${text}"`);
    await message.reply('Terjadi kesalahan internal saat menjalankan perintah.');
  }
});

client.on('error', (err) => {
  logger.error(err, 'Terjadi error pada koneksi Discord');
});

client.login(process.env.DISCORD_TOKEN).catch((err) => {
  logger.error(err, 'Gagal login ke Discord.');
  process.exit(1);
});
```

### `src copy/pathGuard.js`

```javascript
import fs from 'node:fs';
import path from 'node:path';
import { config } from './config.js';

/**
 * Pisahkan virtual path (mis. "Documents/Skripsi/bab1.docx") jadi
 * { rootName: "Documents", rest: ["Skripsi", "bab1.docx"] }.
 */
function splitVirtualPath(virtualPath) {
  const normalized = virtualPath.replace(/\\/g, '/').replace(/^\/+/, '');
  const segments = normalized.split('/').filter(Boolean);
  return { rootName: segments[0], rest: segments.slice(1) };
}

/**
 * Resolve virtual path jadi path absolut di filesystem, dan pastikan
 * hasilnya tidak keluar dari root yang bersangkutan (mencegah "../../"
 * traversal, path absolut liar, atau lompat ke drive/folder lain yang
 * tidak di-whitelist).
 *
 * Segment pertama dari path WAJIB nama salah satu root di ALLOWED_ROOTS
 * (mis. "Documents", "D", "Pictures") — ini menggantikan konsep BASE_DIR
 * tunggal yang lama, sekarang bisa banyak folder root sekaligus.
 *
 * Contoh virtual path yang valid:
 *   "Documents"              -> root Documents itu sendiri
 *   "Documents/Skripsi"      -> subfolder di dalam root Documents
 *   "D/Project/app.js"       -> file di dalam root D
 */
export function safeResolve(virtualPath) {
  if (!virtualPath || typeof virtualPath !== 'string') {
    throw new Error('Path kosong atau tidak valid.');
  }

  const { rootName, rest } = splitVirtualPath(virtualPath);

  if (!rootName) {
    throw new Error('Path harus diawali nama folder yang diizinkan. Ketik "list" di root untuk lihat daftarnya.');
  }

  const rootAbsPath = config.allowedRoots[rootName];
  if (!rootAbsPath) {
    const available = listRootNames().join(', ');
    throw new Error(`"${rootName}" bukan folder yang diizinkan. Folder yang tersedia: ${available}`);
  }

  // Bersihkan drive-letter/path absolut liar yang mungkin diselipkan di
  // tengah-tengah segmen (mis. "Documents/C:\Windows") biar tidak bisa
  // "kabur" lewat trik semacam itu.
  const cleanedRest = rest
    .map((seg) => seg.replace(/^[a-zA-Z]:\\?/, ''))
    .join('/');

  const resolved = path.resolve(rootAbsPath, cleanedRest);

  const normalizedRoot = rootAbsPath.endsWith(path.sep) ? rootAbsPath : rootAbsPath + path.sep;

  if (resolved !== rootAbsPath && !resolved.startsWith(normalizedRoot)) {
    throw new Error(`Path "${virtualPath}" berada di luar folder "${rootName}" yang diizinkan.`);
  }

  if (isBlocked(resolved)) {
    throw new Error(`Path "${virtualPath}" adalah folder/file yang diblokir dan tidak boleh diakses.`);
  }

  // --- Pertahanan symlink-escape ---
  // Semua pengecekan di atas cuma memvalidasi STRING path-nya (mencegah
  // "../../" dsb). Tapi kalau di dalam salah satu ALLOWED_ROOTS ada
  // symlink (dibuat sengaja atau tidak sengaja oleh program lain) yang
  // menunjuk ke folder di LUAR root itu, string path-nya tetap kelihatan
  // "aman" walau lokasi FISIK sebenarnya di disk sudah keluar sandbox —
  // fs.readdir/fs.cp/fs.rename Node.js otomatis mengikuti symlink itu
  // tanpa peduli batas ALLOWED_ROOTS.
  //
  // fs.realpathSync() mengikuti SEMUA symlink di sepanjang path (termasuk
  // folder induknya, bukan cuma target akhir), jadi hasilnya adalah lokasi
  // fisik sebenarnya. Kalau itu ternyata sudah keluar dari root asli, tolak.
  //
  // Path yang BELUM ada di disk (mis. tujuan "copy"/"move" yang baru mau
  // dibuat) akan gagal realpath dengan ENOENT — itu normal & tidak masalah,
  // karena belum ada apa pun yang bisa "kabur" lewat symlink yang belum
  // exist. Biarkan lolos, nanti fs.mkdir/fs.rename yang benar-benar
  // membuatnya di lokasi `resolved` yang sudah tervalidasi.
  let realResolved;
  try {
    realResolved = fs.realpathSync(resolved);
  } catch {
    realResolved = null;
  }

  if (realResolved) {
    let realRoot;
    try {
      realRoot = fs.realpathSync(rootAbsPath);
    } catch {
      realRoot = rootAbsPath;
    }
    const normalizedRealTarget = normalizeForCompare(realResolved);
    const normalizedRealRoot = normalizeForCompare(realRoot);
    const realRootWithSep = normalizedRealRoot.endsWith(path.sep) ? normalizedRealRoot : normalizedRealRoot + path.sep;

    if (normalizedRealTarget !== normalizedRealRoot && !normalizedRealTarget.startsWith(realRootWithSep)) {
      throw new Error(`Path "${virtualPath}" mengarah lewat symlink ke luar folder "${rootName}" yang diizinkan — akses ditolak.`);
    }
  }

  return resolved;
}

/**
 * True kalau absPath (path filesystem absolut, hasil resolve) sama dengan,
 * atau berada DI DALAM, salah satu folder/file yang didaftarkan di
 * BLOCKED_PATHS — dipakai untuk mengecualikan folder sensitif (mis. folder
 * project bot ini sendiri yang berisi .env) walaupun berada di dalam root
 * yang diizinkan (mis. root "D" yang mencakup seluruh drive D:).
 */
// Windows tidak peduli huruf besar/kecil pada nama folder ("D:\Project" dan
// "D:\PROJECT" adalah folder yang SAMA di disk), tapi perbandingan string
// biasa (startsWith) itu case-SENSITIVE. Tanpa normalisasi ini, path yang
// diketik beda kapitalisasi dari BLOCKED_PATHS/CONFIDENTIAL_PATHS bisa lolos
// dari pengecekan padahal menyasar folder fisik yang sama persis. Di
// Linux/Mac (di mana filesystem umumnya case-sensitive), perbandingan tetap
// apa adanya.
function normalizeForCompare(p) {
  return process.platform === 'win32' ? p.toLowerCase() : p;
}

export function isBlocked(absPath) {
  const target = normalizeForCompare(absPath);
  return config.blockedPaths.some((blocked) => {
    const b = normalizeForCompare(blocked);
    if (target === b) return true;
    const normalizedBlocked = b.endsWith(path.sep) ? b : b + path.sep;
    return target.startsWith(normalizedBlocked);
  });
}

/**
 * True kalau absPath sama dengan, atau berada DI DALAM, salah satu folder
 * di CONFIDENTIAL_PATHS. Beda dengan isBlocked(): folder confidential masih
 * boleh muncul di "list" (namanya kelihatan), tapi command yang MEMBACA
 * ISINYA (preview/download) wajib PIN + trigger email alert — lihat
 * commands.js.
 */
export function isConfidential(absPath) {
  const target = normalizeForCompare(absPath);
  return config.confidentialPaths.some((confidential) => {
    const c = normalizeForCompare(confidential);
    if (target === c) return true;
    const normalized = c.endsWith(path.sep) ? c : c + path.sep;
    return target.startsWith(normalized);
  });
}

/**
 * Cari path confidential (dari CONFIDENTIAL_PATHS) yang menjadi LELUHUR
 * (atau sama persis dengan) absPath — kembalikan path confidential asli
 * (bukan absPath itu sendiri) kalau ketemu, atau null kalau absPath tidak
 * ada di dalam folder confidential mana pun.
 *
 * KENAPA INI PERLU: deletePath() di fsops.js memindahkan file ke ".trash"
 * di dalam ROOT (mis. "D:/.trash"), bukan di lokasi asli file itu berada.
 * Tanpa fungsi ini, menghapus file dari folder confidential (mis.
 * "D:/Project/Data Siswa/nilai.xlsx") akan membuat file itu "naik keluar"
 * dari perlindungan CONFIDENTIAL_PATHS begitu masuk ".trash" di root —
 * padahal isinya tetap sama sensitifnya, cuma lokasinya berubah. Dipakai
 * fsops.js untuk menaruh trash-nya TETAP di dalam folder confidential
 * asal (bukan di ".trash" milik root), supaya proteksi PIN-nya ikut
 * terbawa walau file sudah "dihapus" (dipindah ke trash).
 */
export function confidentialAncestorOf(absPath) {
  const target = normalizeForCompare(absPath);
  let best = null;
  for (const confidential of config.confidentialPaths) {
    const c = normalizeForCompare(confidential);
    const normalized = c.endsWith(path.sep) ? c : c + path.sep;
    if (target === c || target.startsWith(normalized)) {
      // Ambil yang paling SPESIFIK (path terpanjang) kalau ada beberapa
      // confidential path yang bersarang (mis. "D/Project" dan
      // "D/Project/Data Siswa" sama-sama terdaftar).
      if (!best || confidential.length > best.length) {
        best = confidential;
      }
    }
  }
  return best;
}

/**
 * True kalau virtualPath merujuk PERSIS ke root itu sendiri (bukan isi di
 * dalamnya) — dipakai untuk mencegah delete/move folder root secara utuh
 * (yang bisa menghapus/memindah seluruh folder Documents/Music/dst).
 */
export function isRootItself(virtualPath) {
  const { rootName, rest } = splitVirtualPath(virtualPath);
  return Boolean(rootName) && rest.length === 0 && Boolean(config.allowedRoots[rootName]);
}

/**
 * True kalau absPath adalah folder LELUHUR (ancestor) dari salah satu
 * BLOCKED_PATHS — arah kebalikan dari isBlocked(). isBlocked() menjawab
 * "apakah target ada DI DALAM sesuatu yang di-block?"; fungsi ini menjawab
 * "apakah target ADALAH folder yang MENGANDUNG sesuatu yang di-block, di
 * kedalaman berapa pun?"
 *
 * Ini WAJIB dicek sebelum operasi yang bersifat rekursif/menyapu seluruh isi
 * folder (delete/purge/move) — karena tanpa ini, menghapus folder induk yang
 * tidak masuk BLOCKED_PATHS (mis. "D/Project") tetap akan ikut menghapus isi
 * BLOCKED_PATHS yang ada di dalamnya (mis. "D/Project/Coding/Nausync
 * Engine"), sebab operasi filesystem (fs.rename/fs.rm) tidak tahu-menahu
 * soal daftar blokir — dia cuma diberi tahu "hapus folder ini dan semua
 * isinya".
 */
export function containsBlockedPath(absPath) {
  const target = normalizeForCompare(absPath);
  const normalizedTarget = target.endsWith(path.sep) ? target : target + path.sep;
  return config.blockedPaths.some((blocked) => normalizeForCompare(blocked).startsWith(normalizedTarget));
}

/**
 * Daftar nama-nama root yang diizinkan (urut alfabetis), dipakai untuk
 * menampilkan "folder virtual" tingkat atas saat "list"/"help" di root "/".
 *
 * Hanya root yang PATH-nya benar-benar ada di filesystem saat ini yang
 * ditampilkan — mis. root untuk SD card/drive eksternal yang belum dicolok
 * otomatis disembunyikan dari daftar, tanpa perlu restart bot. Begitu
 * drive-nya dicolok lagi, root itu otomatis muncul lagi di command
 * berikutnya (dicek ulang tiap kali fungsi ini dipanggil, bukan di-cache).
 */
export function listRootNames() {
  return Object.keys(config.allowedRoots)
    .filter((name) => fs.existsSync(config.allowedRoots[name]))
    .sort((a, b) => a.localeCompare(b, 'id', { sensitivity: 'base' }));
}
```

### `src copy/pinStore.js`

```javascript
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
    subject: `🔐 Nausync Cloud — ${subject}`,
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
    subject: `🔐 Nausync Cloud — ${subject}`,
    text: `${introText}\n\nPIN: ${pin}`,
    html: buildPinEmailHtml(pin, introText),
  });
}

// Dipanggil sekali saat bot startup (dari index.js). Kalau belum ada PIN
// tersimpan (first run), generate PIN baru otomatis & kirim ke email
// terpisah (BUKAN lewat Discord), sesuai desain: PIN harus independen
// dari kanal Discord yang mungkin di-hack.
export async function initPin() {
  const store = loadStore();
  if (store) return; // sudah ada, tidak perlu generate ulang

  const pin = generateRandomPin();
  const salt = crypto.randomBytes(16).toString('hex');
  saveStore({ hash: hashPin(pin, salt), salt, updatedAt: new Date().toISOString() });

  try {
    await sendPinDeliveryEmail(
      'PIN awal untuk command berbahaya',
      pin,
      'PIN untuk validasi command berbahaya (shutdown/restart/purge/preview folder rahasia). Dibuat otomatis saat bot pertama kali dijalankan. Simpan baik-baik — PIN ini tidak akan berubah sampai kamu ganti sendiri lewat command "chgpin".'
    );
  } catch (err) {
    // Kalau SMTP belum di-setting / gagal kirim, tampilkan di log server
    // sebagai fallback SATU KALI ini saja, supaya owner tidak terkunci
    // total dari fitur PIN sejak hari pertama.
    console.warn(`⚠️ Gagal kirim email PIN awal (${err.message}).`);
    console.warn(`⚠️ PIN awal (fallback, HANYA muncul di log ini): ${pin}`);
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
export async function verifyAndRotatePin(inputPin, reason) {
  verifyPin(inputPin); // lempar Error kalau salah/lockout, tidak lanjut ke bawah

  const newPin = generateRandomPin();
  const salt = crypto.randomBytes(16).toString('hex');
  saveStore({ hash: hashPin(newPin, salt), salt, updatedAt: new Date().toISOString() });

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
```

### `src copy/rclone.js`

```javascript
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import { config } from './config.js';

const execFileAsync = promisify(execFile);

/**
 * Upload file/folder lokal ke folder staging Google Drive lewat rclone.
 * Membutuhkan rclone sudah terinstall & remote sudah dikonfigurasi (`rclone config`).
 */
export async function uploadToDrive(localAbsPath) {
  const remoteTarget = `${config.rcloneRemote}:${config.rcloneStagingFolder}`;
  const fileName = path.basename(localAbsPath);

  await execFileAsync('rclone', ['copy', localAbsPath, remoteTarget, '--progress=false']);

  return { fileName, remoteTarget };
}

/**
 * Cek apakah rclone terinstall & remote bisa diakses. Berguna untuk healthcheck saat startup.
 */
export async function checkRcloneReady() {
  await execFileAsync('rclone', ['lsd', `${config.rcloneRemote}:`]);
}
```

