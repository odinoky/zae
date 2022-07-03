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
	'https://zenzapi.xyz': '805a6c3fa9', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['51918303426','51923513366'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['51918303426'] //another owner number
global.premium = ['51918303426'] //premium number
global.pengguna = 'Darlyn' //username
global.botnma = '<div> 𝑆𝑜𝑓𝑓𝑓 </div>' //bot name
global.ownernma = 'Darlyn' //owner name
global.packname = '->' //sticker package name
global.author = 'Darlyn | ≛ ⃝🧋•𝑫𝒂𝒓𝒍𝒚𝒏⸙𔘓ৎ୭🩹៸៸◗ ⋆ 🪜 ⏜⃞ჩ ♞ ᵈᵃʳˡʸⁿ — 𖦹࣪ᰍ\nhttps://appweb-darlyn.vercel.app𓈃ּ ៹🍏𝗱𝑎𝙧̲𝘭𝐲̲𝘯̲𐂂!s⁹⁷☻‹𝟹' //sticker author name |#⃞＠𝑫𝒂𝒓𝒍𝒚𝒏•𝒎𝒂𝒋𝒐✞𔘓 𒈔⃟🍂𝑫𝒂𝒓𝒍𝒚𝒏🍁⃟𒈔 
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '⭔' //design
global.mess = {
    success: 'Done ✓',
    admin: '¡Esta función es solo para administradores!',
    botAdmin: '¡El bot debe ser administrador primero!',
    owner: 'Esta función es solo para el propietario/owner',
    group: '¡Función utilizada solo para grupos!',
    private: '¡Características utilizadas solo para chat privado!',
    bot: 'Esta característica es solo para el número de bot',
    wait: 'En proceso, por favor espera...',
    endLimit: 'Su límite diario ha expirado, el límite se restablecerá cada 12 horas',
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
