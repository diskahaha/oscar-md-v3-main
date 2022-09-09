const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: 𝕭𝖔𝖙 • Andii ༢࿔ྀ
item.ORG: 𝕭𝖔𝖙 • Andii ༢࿔ྀ
item1.TEL;waid=6282114579641:6282114579641
item1.X-ABLabel:owner selalu ada 
item2.YOUTUBE;type=INTERNET: https://www.youtube.com/channel/UC1esKQw-DKM5Xa5hF7vqdGA
item2.X-ABLabel:YOUTUBE
item3.ADR:;;🎍AMERIKA SERIKAT;;;;
item3.X-ABADR:ac
item3.X-ABLabel:asal kota
item4.URL:https//github.com/𝕭𝖔𝖙 • Andii ༢࿔ྀ 
item4.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER BOT', 
            contacts: [{ vcard }]  
        }
    }
)
let jarot = 'https://telegra.ph/file/00ca947f49354f6c108da.jpg'
await conn.send3ButtonImg(m.chat, jarot, `*Hai kak @${m.sender.split('@')[0]} 👋,  Itu Nomer Owner Aku*`, '📮: Jangan Di Spam', '𝘽𝙖𝙘𝙠', '.menu', sentMsg)}
handler.help = ['owner2', 'creator2']
handler.tags = ['info']

handler.command = /^(owner2|creator2)$/i

module.exports = handler
