const EnvVar = require('../lib/mongodbenv');
const { cmd ,commands } = require('../command');
const { exec } = require('child_process');
const config = require('../config');
const { updateEnv, readEnv } = require('../lib/database');
const {sleep} = require('../lib/functions')



// 1. Shutdown Bot
cmd({
    pattern: "shutdown",
    desc: "Shutdown the bot.",
    category: "owner",
    react: "🛑",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, reply }) => {
    if (!isOwner) return reply("*📵 ONLY OWNER COMMAND*");
    reply("⛔ Shutting down...").then(() => process.exit());
});


// 2. Broadcast Message to All Groups
cmd({
    pattern: "broadcast",
      alias: ["sendall","bcast"],
    desc: "Broadcast a message to all groups.",
    category: "owner",
    react: "📢",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, args, reply }) => {
    if (!isOwner) return reply("*📵 ONLY OWNER COMMAND*");
    if (args.length === 0) return reply("*pleas provide message 📢*\n`👇 Example :`\n\n.bcast Hellow👋 I'm KD PANTA 00");
    const message = args.join(' ');
    const groups = Object.keys(await conn.groupFetchAllParticipating());
    for (const groupId of groups) {
        await conn.sendMessage(groupId, { text: message }, { quoted: mek });
    }
    reply("📢 Message broadcasted to all groups.");
});



// 3. Set Profile Picture
cmd({
    pattern: "setlogo",
    desc: "Set bot profile picture.",
    category: "owner",
    react: "🖼️",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("*📵 ONLY OWNER COMMAND*");
    if (!quoted || !quoted.message.imageMessage) return reply("❌ Please reply to an image.");
    try {
        const media = await conn.downloadMediaMessage(quoted);
        await conn.updateProfilePicture(conn.user.jid, { url: media });
        reply("🖼️ Profile picture updated successfully!");
    } catch (error) {
        reply(`❌ Error updating profile picture: ${error.message}`);
    }
});



// 4. Block User
cmd({
    pattern: "block",
    desc: "Block a user.",
    category: "owner",
    react: "🚫",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("*📵 ONLY OWNER COMMAND*");
    if (!quoted) return reply("Reply to number with block* 📲");
    const user = quoted.sender;
    try {
        await conn.updateBlockStatus(user, 'block');
        reply(`*BLOCKED SUCCESSFULL...⛔*`);
    } catch (error) {
        reply(`*please try againg⭕*`);
    }
});




// 5. Unblock User
cmd({
    pattern: "unblock",
    desc: "Unblock a user.",
    category: "owner",
    react: "✅",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("*📵 ONLY OWNER COMMAND*");
    if (!quoted) return reply("Reply to number with Unblock* 📲");
    const user = quoted.sender;
    try {
        await conn.updateBlockStatus(user, 'unblock');
        reply(`*UNBLOCK SUCCESSFULL...✅*`);
    } catch (error) {
        reply(`*please try againg⭕*`);
    }
});


//========𝗝𝗜𝗗===============//
/*cmd({
    pattern: "jid",
    desc: "Get the bot's JID.",
    category: "owner",
    react: "🤖",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, reply }) => {
    if (!isOwner) return reply("*_📵Only Owner Command_*");
    reply(`🤖 *Bot JID:* ${conn.user.jid}`);
});*/





// 8. Group JIDs List
cmd({
    pattern: "gjid",
    desc: "Get the list of JIDs for all groups the bot is part of.",
    category: "owner",
    react: "📝",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, reply }) => {
    if (!isOwner) return reply("**📵 ONLY OWNER COMMAND*");
    const groups = await conn.groupFetchAllParticipating();
    const groupJids = Object.keys(groups).join('\n');
    reply(`📝 *Group JIDs:*\n\n${groupJids}`);
});


// 3. Set Profile Picture
cmd({
    pattern: "setpp",
    desc: "Set bot profile picture.",
    category: "owner",
    react: "🖼️",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("*📵 ONLY OWNER COMMAND*");
    if (!quoted || !quoted.message.imageMessage) return reply("❌ ρℓєαѕє яєρℓу тσ αη ιмαgє.");
    try {
        const media = await conn.downloadMediaMessage(quoted);
        await conn.updateProfilePicture(conn.user.jid, { url: media });
        reply("🖼️ ρяσƒιℓє ρι¢тυяє υρ∂αтє∂ ѕυ¢¢єѕѕƒυℓℓу!");
    } catch (error) {
        reply(`*ᴘʟᴇᴀꜱ ᴛʀʏ ᴀɢᴀɪɴ...⌛*`);
    }
});


// 6. Clear All Chats
cmd({
    pattern: "clearchats",
    desc: "Clear all chats from the bot.",
    category: "owner",
    react: "🧹",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, reply }) => {
    if (!isOwner) return reply("*📵 ONLY OWNER COMMAND*");
    try {
        const chats = conn.chats.all();
        for (const chat of chats) {
            await conn.modifyChat(chat.jid, 'delete');
        }
        reply("*🧹 Chat clear successfull ✅*");
    } catch (error) {
        reply(`*ᴘʟᴇᴀꜱ ᴛʀʏ ᴀɢᴀɪɴ...⌛*`);
    }
});


//=========𝗢𝗪𝗡𝗘𝗥============//
cmd({
    pattern: "owner",
    desc: "im owner",
    react: "👩‍💻",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:👿𝐊𝐃 𝐏么𝐍𝐓么 𝐎𝐎👿\n` 
            + `ORG: Owner;\n` 
            + `TEL;type=CELL;type=VOICE;waid=94755925192:+94755925192\n` 
            + 'END:VCARD'
await conn.sendMessage(from, { 
    contacts: { 
        displayName: `KD PANTA 00`, 
        contacts: [{ vcard }] 
    },  quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
});

//=========𝗗𝗘𝗟𝗘𝗧𝗘=========//
cmd({
pattern: "delete",
react: "🚮",
alias: ["del"],
desc: "delete message",
category: "group",
use: '.del',
filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner ||  !isAdmins) return;
try{
if (!m.quoted) return reply("*delete message forwer 🚮*\n`👇 Example :`\n\n.del < msg forwed >*");
const key = {
            remoteJid: m.chat,
            fromMe: false,
            id: m.quoted.id,
            participant: m.quoted.sender
        }
        await conn.sendMessage(m.chat, { delete: key })
} catch(e) {
console.log(e);
reply('successful..👨‍💻✅')
} 
})
