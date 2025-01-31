const config = require('../config')
const {cmd , commands} = require('../command')
const {sleep} = require('../lib/functions')

cmd({
    pattern: "restart",
    alias: ["res"],
    desc: "restar𝐭",
    category: "owner",
    react: "⏳",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner) return reply("📵 𝐘𝐎𝐔𝐑 𝐍𝐎𝐓 𝐎𝐖𝐍𝐄𝐑");
try{
const {exec} = require("child_process")
reply("🔄 𝐑𝐄𝐒𝐓𝐑𝐓𝐈𝐍𝐆 𝐊𝐃 𝐏𝐀𝐍𝐓𝐀 ●●○○○")
await sleep(1500)
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
})
