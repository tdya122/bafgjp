//==============KD_PANTA_00==================//

const config = require('../config')
let fs = require('fs')
const os = require("os")
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')


cmd({
    pattern: "private",
    react: "💭",
    alias: ["botoff"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping2',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner) return reply(`*YOUR NOT OWNER 📵*`) ;
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '.update MODE:private'  }, { quoted: mek } )
var final = new Date().getTime();
await conn.sendMessage(from, { delete: ping.key })
return await conn.sendMessage(from , { text: '.restart '   }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})


cmd({
    pattern: "inbox",
    react: "💭",
    alias: ["onlyeinbox"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.setting',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner) return reply(`*YOUR NOT OWNER 📵*`) ;
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '.update MODE:inbox'  }, { quoted: mek } )
var final = new Date().getTime();
await conn.sendMessage(from, { delete: ping.key })
return await conn.sendMessage(from , { text: '.restart '   }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})


//  𝗣𝗨𝗕𝗟𝗜𝗖

cmd({
    pattern: "public",
    react: "💭",
    alias: ["boton"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.setting',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner) return reply(`*YOUR NOT OWNER 📵*`) ;
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '.update MODE:public'  }, { quoted: mek } )
var final = new Date().getTime();
await conn.sendMessage(from, { delete: ping.key })
return await conn.sendMessage(from , { text: '.restart '   }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})





cmd({
    pattern: "group",
    react: "💭",
    alias: ["groupon","groups"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.setting',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner) return reply(`*YOUR NOT OWNER 📵*`) ;
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '.update MODE:group'  }, { quoted: mek } )
var final = new Date().getTime();
await conn.sendMessage(from, { delete: ping.key })
return await conn.sendMessage(from , { text: '.restart '   }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})



//╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►


cmd({
    pattern: "voiceon",
    react: "💭",
    alias: ["autovoiceon"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.setting',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner) return reply(`*YOUR NOT OWNER 📵*`) ;
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '.update AUTO_VOICE:true'  }, { quoted: mek } )
var final = new Date().getTime();
await conn.sendMessage(from, { delete: ping.key })
return await conn.sendMessage(from , { text: '.restart '   }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})



cmd({
    pattern: "voiceoff",
    react: "💭",
    alias: ["autovoiceoff"],
    desc: "voice msg",
    category: "main",
    use: '.setting',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner) return reply(`*YOUR NOT OWNER 📵*`) ;
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '.update AUTO_VOICE:false'  }, { quoted: mek } )
var final = new Date().getTime();
await conn.sendMessage(from, { delete: ping.key })
return await conn.sendMessage(from , { text: '.restart '   }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})

//╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►




cmd({
    pattern: "statuson",
    react: "💭",
    alias: ["statusread"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.setting',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner) return reply(`*YOUR NOT OWNER 📵*`) ;
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '.update AUTO_READ_STATUS:true'  }, { quoted: mek } )
var final = new Date().getTime();
await conn.sendMessage(from, { delete: ping.key })
return await conn.sendMessage(from , { text: '.restart '   }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})




cmd({
    pattern: "statusoff",
    react: "💭",
    alias: ["boton"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.setting',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner) return reply(`*YOUR NOT OWNER 📵*`) ;
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '.update AUTO_READ_STATUS:false'  }, { quoted: mek } )
var final = new Date().getTime();
await conn.sendMessage(from, { delete: ping.key })
return await conn.sendMessage(from , { text: '.restart '   }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})



//╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►

cmd({
    pattern: "stickeron",
    react: "💭",
    alias: ["autostickeron"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.setting',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner) return reply(`*YOUR NOT OWNER 📵*`) ;
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '.update AUTO_STICKER:true'  }, { quoted: mek } )
var final = new Date().getTime();
await conn.sendMessage(from, { delete: ping.key })
return await conn.sendMessage(from , { text: '.restart '   }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})





cmd({
    pattern: "stickeroff",
    react: "💭",
    alias: ["autostickeroff"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.setting',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner) return reply(`*YOUR NOT OWNER 📵*`) ;
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '.update AUTO_STICKER:false'  }, { quoted: mek } )
var final = new Date().getTime();
await conn.sendMessage(from, { delete: ping.key })
return await conn.sendMessage(from , { text: '.restart '   }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})



//╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►╔═══════════════●●►

cmd({
    pattern: "replyon",
    react: "💭",
    alias: ["autoreplyon"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.setting',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner) return reply(`*YOUR NOT OWNER 📵*`) ;
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '.update AUTO_REPLY:true'  }, { quoted: mek } )
var final = new Date().getTime();
await conn.sendMessage(from, { delete: ping.key })
return await conn.sendMessage(from , { text: '.restart '   }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})





cmd({
    pattern: "replyoff",
    react: "💭",
    alias: ["autoreplyoff"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.setting',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner) return reply(`*YOUR NOT OWNER 📵*`) ;
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '.update AUTO_REPLY:false'  }, { quoted: mek } )
var final = new Date().getTime();
await conn.sendMessage(from, { delete: ping.key })
return await conn.sendMessage(from , { text: '.restart '   }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})
