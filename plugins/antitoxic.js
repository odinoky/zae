/*
let = require('@adiwajshing/baileys')
let handler = m => m

let linkRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i // tambahin sendiri

handler.before = function (m, { isOwner, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0
    let chat = global.DATABASE._data.chats[m.chat]
    let user = global.DATABASE._data.users[m.sender]
    let isLink = linkRegex.exec(m.text)

    if (!chat.antiToxic && !chat.isBanned && isLink) {
        user.warn += 1
        this.send2Button(m.chat, `*Malas palabras detectadas!*
*Alerta:* ${user.warn} / 5
*Si la Alerta llega a 5 serás eliminado/a*
“`, 'Gata Dios', 'Activar', '.on antitoxic', 'Desactivar', '.off antitoxic', m)
        if (user.warn >= 5) {
            user.banned = true
            if (m.isGroup) {
                if (isBotAdmin) {
                    this.groupRemove(m.chat, [m.sender])
                }
            }
        }
    }
    return !0
}
module.exports = handler
*/
