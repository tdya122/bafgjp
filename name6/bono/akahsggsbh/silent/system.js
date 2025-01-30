
const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')


cmd({
    pattern: "runtime",
    alias: ["status","botinfo"],
    desc: "check up time",
    category: "main",
    react: "⏳",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{ 

let status =`🔮 *_RUN_TIME_* ═▤⫸  ${runtime(process.uptime())}* `
return reply(`${status}`)
}catch(e){
console.log(e)
reply(`*please try againg⭕*`)
}
})




cmd({
    pattern: "system",
    react: "🎛️",
    alias: ["uptime","status"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    
let status = `
*┌───────────╶╶╶╾⦁⦂⦁*
*◈SYSTEM_KD_PANTA_00◈*
*└───────────╶╶╶╾⦁⦂⦁*
👋${pushname}

╔═════════════●●►
╚ *◈ UPTIME :* ${runtime(process.uptime())}
╚═════════════●●►

╔═════════════●●►
╚ *◈ RAM USAGE :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
╚═════════════●●►

╔═════════════●●►
╚ *◈ HOSTNAME :* ${os.hostname()}
╚═════════════●●►

*•────────────╴╴╴•⟢*
> *©POWER BY KD PANTA 00*
*•────────────╴╴╴•⟢*

`
await conn.sendMessage (from, { image: { url: "https://i.ibb.co/D11XQmL/IMG-20241230-WA0010.jpg"}, caption: `${status}` }, { quoted: mek });

}catch(e){
console.log(e)
reply(`*ᴘʟᴇᴀꜱ ᴛʀʏ ᴀɢᴀɪɴ...⌛*`)
}
})

cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "👨‍💻",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*┌───────────╶╶╶╾⦁⦂⦁*
*◈REPO_KD_PANTA_00◈*
*└───────────╶╶╶╾⦁⦂⦁*
🔥 ${pushname}
╔═════════════●●►
╚ *◈ BOT : ©KD PANTA 00*
╚═════════════●●►

╔═════════════●●►
╚ *◈TEL : +94755925192*
╚═════════════●●►

╔═════════════●●►
╚ *◈ REPO : https://github.com/Kdpanta2/KD_PANTA_00*
╚═════════════●●►

╔═════════════●●►
╚ *◈ CHANEL : https://shorturl.at/6PDAo*
╚═════════════●●►

*•────────────╴╴╴•⟢*
> *© POWER BY KD PANTA*
*•────────────╴╴╴•⟢*
`
 
    
        await conn.sendMessage(from, { text: repo ,
                    contextInfo: {
                    mentionedJid: [''],
                    externalAdReply: {
                    title: "👿𝐊𝐃 𝐏么𝐍𝐓么 𝐎𝐎👿",
                    body: `${pushname}`,
                    thumbnailUrl: "https://files.catbox.moe/qss49i.jpg",
                    sourceUrl: "https://whatsapp.com/channel/0029VaxNSDR4SpkEoUszuP3E",
                    mediaType: 1,
                    renderLargerThumbnail: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`*please try againg⭕*`)
}
});
