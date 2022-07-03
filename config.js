//═══════[© 2022 Darlyn Bot Inc.]════════\\

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': '192e24e3a9b2', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['996755994412'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['996755994412'] //another owner number
global.premium = ['996755994412'] //premium number
global.pengguna = 'Darlyn' //username
global.botnma = '<div> 𝑆𝑜𝑓𝑓𝑓 </div>' //bot name
global.ownernma = 'Darlyn' //owner name
global.packname = '->' //sticker package name
global.author = 'Darlyn | ≛ ⃝🧋•𝑫𝒂𝒓𝒍𝒚𝒏⸙𔘓ৎ୭🩹៸៸◗ ⋆ 🪜 ⏜⃞ჩ ♞ ᵈᵃʳˡʸⁿ — 𖦹࣪ᰍ\nhttps://appweb-darlyn.vercel.app𓈃ּ ៹🍏𝗱𝑎𝙧̲𝘭𝐲̲𝘯̲𐂂!s⁹⁷☻‹𝟹' //sticker author name |#⃞＠𝑫𝒂𝒓𝒍𝒚𝒏•𝒎𝒂𝒋𝒐✞𔘓 𒈔⃟🍂𝑫𝒂𝒓𝒍𝒚𝒏🍁⃟𒈔 
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '⭔' //design
global.mess = {
    success: 'Выполнено! ✓*',
    admin: '*Эта команда, для админов*',
    botAdmin: '*Для этой команды, БОТ должен быть админом!*',
    owner: '*Эта команда только для владельца БОТА*',
    group: '*Эта команда для группы*',
    private: '*Эта команда, для приватного чата*',
    bot: '*Эта функция предназначена только для бота!*',
    wait: '*ЗАГРУЖАЕТСЯ...*',
    endLimit: '*Срок действия дневного лимита истек, лимит будет обнуляться каждые 12 часов*',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100 //free user limit
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
