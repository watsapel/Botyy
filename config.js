const fs = require('fs')
const chalk = require('chalk')

///Gantinya Ngerti Kan Lu Kan dah Gede

global.domain = " " // Isi Domain Lu
global.apikey = ' ' // Isi Apikey Plta Lu
global.capikey = ' ' // Isi Apikey Pltc Lu
global.aipikey = ' ' //apikey ai lu 
global.creAtor = "6287786879103@s.whatsapp.net"
global.owner = ['6287786879103','6285713888398']
global.namabotnya = 'GX-MD'
global.namabotnya2 = 'BOT BY GRIZE OFFC X XIETY'
global.namaownernya = 'Grize Offc x Xiety'
global.packname = 'GX-MD'
global.author = 'YT: XieTy\nYT :GrizeBot'
global.themeemoji = '🔹'
global.sessionName = 'session'
global.email = '-'
global.group = 'https://—————————'
global.youtube = 'https://youtube.com/@XieTyy'
global.website = 'kaga ada'
global.github = 'https://github.com/'
global.nomorowner = 'https://wa.me/6285713888398'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']
global.anticall = true
global.wm = "Subscribe YT *XieTy*"
global.mess = 
{
success: '```Success Banh```',
admin: '```Fitur Khusus Admin Group!!!```',
botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
owner: '```Lu Siapa Bang? Kok Lu Nyuruh-nyuruh Gw?```',
group: '```Fitur Digunakan Hanya Untuk Group!!!```',
private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
banned: '*Kamu Telah Dibanned Untuk Menggunakan Bot Ini Untuk Membuka Banned Chat Owner .Owner*',
bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Chat Owner Untuk Beli Premium Ketik .Owner',
error: '```Mungkin Lagi Error Kak Harap Lapor ke Owner Agar Langsung Di Benerin🙏```',
wait: '```Waittt...```'
}

global.thumb = fs.readFileSync('./image/thumb.png')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})