let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
*❰ ❗️ ❱ No etiquetes a mí creadora, Si es algo urgente ve al chat privado.*
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@5939685853835/i
handler.command = new RegExp

module.exports = handler
