



const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const {
    default: makeWASocket,
    getAggregateVotesInPollMessage, 
    useMultiFileAuthState,
    DisconnectReason,
    getDevice,
    fetchLatestBaileysVersion,
    jidNormalizedUser,
    getContentType,
    Browsers,
    delay,
    makeInMemoryStore,
    makeCacheableSignalKeyStore,
    downloadContentFromMessage,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    prepareWAMessageMedia,
    proto
} = require('@whiskeysockets/baileys')
const fs = require('fs')
const FileType = require('file-type')
const { lyrics, lyricsv2 } = require('@bochilteam/scraper');

var tmsg =''
if(config.LANG === 'SI') tmsg = '*කරුණාකර මට ගීතයක නමක් දෙන්න. !*'
else tmsg = "*Please give me a song name. !*"
var descg = ''
if(config.LANG === 'SI') descg = "එය ලබා දී ඇති සංගීතයේ lyrics දෙයි."
else descg = "It gives lyrics of given song name."
var cantscg = ''
if(config.LANG === 'SI') cantscg = "*මට මේ ගීතයේ lyrics සොයාගත නොහැක !*"
else cantscg = "*I cant find lyrics of this song !*"




cmd({
    pattern: "lyric",
    alias: ["lyrics"],
    react: '🎙️',
    desc: descg,
    category: "search",
    use: '.lyric <song name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(tmsg)
const result = await fetchJson(`https://some-random-api.com/lyrics?title=${text}`)
if(result.lyrics) reply(`
*[ ⦁ ᴋ ᴅ - ᴘ ᴀ ɴ ᴛ ᴀ - ᴍ ᴅ ⦁ ]*

   *LYRICS SEARCH*
   
*${result.title}*
_${result.artist}_


${result.lyrics}

└───────────◉

*╭───────────╶╶╶╾⦁⦂⦁*
> *KD_PANTA_00_LYRICS*
*╰───────────╶╶╶╾⦁⦂⦁*`)
else reply(cantscg)
} catch (e) {
reply(cantscg)
l(e)
}
})





cmd({
pattern: "vv",
    react: "😁",
    alias: ["mattu","dakkada","mekada","supiri"],
    desc: "To ViewOnceMessage",
    category: "convert",
    use: '.vv',
    filename: __filename
},
async(conn, mek, m,{from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{         

conn.downloadAndSaveMediaMessage = async(message, filename, attachExtension = true) => {
                let quoted = message.msg ? message.msg : message
                let mime = (message.msg || message).mimetype || ''
                let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
                const stream = await downloadContentFromMessage(quoted, messageType)
                let buffer = Buffer.from([])
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                let type = await FileType.fromBuffer(buffer)
                trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
                    // save to file
                await fs.writeFileSync(trueFileName, buffer)
                return trueFileName
            }	      
   
  
const quot = mek.msg.contextInfo.quotedMessage.viewOnceMessageV2;
if(quot)
{
if(quot.message.imageMessage) 
{ console.log("Quot Entered") 
   let cap =quot.message.imageMessage.caption;
   let anu = await conn.downloadAndSaveMediaMessage(quot.message.imageMessage)
   return conn.sendMessage(from,{image:{url : anu},caption : cap })
}
if(quot.message.videoMessage) 
{
   let cap =quot.message.videoMessage.caption;
   let anu = await conn.downloadAndSaveMediaMessage(quot.message.videoMessage)
   return conn.sendMessage(from,{video:{url : anu},caption : cap })
}
 
}
//else citel.reply("```This is Not A ViewOnce Message```") 
       
       
if(!mek.quoted) return mek.reply("```Uh Please Reply A ViewOnce Message```")           
if(mek.quoted.mtype === "viewOnceMessage")
{ console.log("ViewOnce Entered") 
 if(mek.quoted.message.imageMessage )
{ 
  let cap = mek.quoted.message.imageMessage.caption;
  let anu = await conn.downloadAndSaveMediaMessage(mek.quoted.message.imageMessage)
  conn.sendMessage(from,{image:{url : anu},caption : cap })
}
else if(mek.quoted.message.videoMessage )
{
  let cap =mek.quoted.message.videoMessage.caption;
  let anu = await conn.downloadAndSaveMediaMessage(mek.quoted.message.videoMessage)
  conn.sendMessage(from,{video:{url : anu},caption : cap })
}

}
else return mek.reply("```This is Not A ViewOnce Message```")
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
}catch(e){
console.log(e)
reply(`*THERE IS AN ERRER⛔*`)
}
})



cmd({
    pattern: "alive2",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})



cmd({
  pattern: "menu",
  desc: "Commands panel",
  react: '📃',
  filename: __filename
}, async (bot, message, args, options) => {
  const { from, quoted, reply, pushname } = options;

  try {

    const menuText = `*┌───────────╶╶╶╾⦁⦂⦁*
*👋 WELCOME KD PANTA 00*
*└───────────╶╶╶╾⦁⦂⦁*
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╔═════════════●●►
❯❯ ⦁ *⏳ UPTIME :* ${runtime(process.uptime())} 
❯❯ ⦁ *🤖 RAM USAGE :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
❯❯ ⦁ *✒️ HOST NAME :* ${os.hostname()}
❯❯ ⦁ *👨‍💻 OWNER :* kavishka.
❯❯ ⦁ *🎰 VERSION :* 1.0.0 BETA
╚═════════════●●►

╔═════════════●●►
╟ *1 ▏ DOWUNLOD MENU📥*
╟ *2 ▏ OWNER MENU🤴*
╟ *3 ▏ MAIN MENU👨‍💻*
╟ *4 ▏ GROUP MENU👨‍👦‍👦*
╟ *5 ▏ NEWS MENU📰*
╟ *6 ▏ CONVERT MENU🔮*
╟ *7 ▏ FUN MENU🤣*
╟ *8 ▏ XVDL MENU🔞*
╟ *9 ▏ MOVIE MENU🎬*
╚═════════════●●►

╔═════════════●●►
╟ 𝐋𝐈𝐕𝐄 𝐔𝐏𝐃𝐀𝐓 𝐂𝐎𝐌𝐌𝐀𝐍𝐃
╟ ⌛ .updatcmd
╚═════════════●●►

*•────────────╴╴╴•⟢*
> *© POWER BY KD PANTA*
*•────────────╴╴╴•⟢*`;

    // Send Menu Message
 const sentMenuMessage = await bot.sendMessage(
  from,
  {
    image: { url: "https://i.ibb.co/TcyMWM2/3482.jpg" },
    caption: menuText,
    contextInfo: {
      mentionedJid: [],
      isForwarded: true,
      forwardingScore: 1,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363350910072443@newsletter",
        newsletterName: "👿𝐊𝐃 𝐏么𝐍𝐓么 𝐎𝐎👿",
        serverMessageId: 999,
        
            },
            },
            },
            { quoted: message }
      
);

    const menuMessageId = sentMenuMessage.key.id;

//===============𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗=𝗠𝗘𝗡𝗨================
    const menuResponses = {
      '1': { imageCaption: `
*┌───────────╶╶╶╾⦁⦂⦁*
*◈DOWUNLOD_COMMAND📥*
*└───────────╶╶╶╾⦁⦂⦁*
*👋 HELLO,  WELCOM*
${pushname}

͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏╔═════════════●●►
║ *❏ .SONG  < ꜱᴇᴀʀᴄʜ >*
║ *( song dowunloder )*
║
╟─────────────●●►
║ *❏ .TWITTER  < ʟɪɴᴋ >*
║ *( twtter download )*
║
╟─────────────●●►
║ *❏ .TWITTER2  < ʟɪɴᴋ >*
║ *( facbook dowunloder )*
║
╟─────────────●●►
║ *❏ .PLAY  < ꜱᴇᴀʀᴄʜ >*
║ *( song dowunloder )*
║
╟─────────────●●►
║ *❏ .VIDEO  < ꜱᴇᴀʀᴄɢ >*
║ *(  yt video dowunloder )*
║
╟─────────────●●►
║ *❏ .MP3  < ꜱᴇᴀʀᴄʜ >*
║ *( song dowunloder )*
║
╟─────────────●●►
║ *❏ .MP4  < ꜱᴇᴀʀᴄʜ >*
║ *( yt video dowunloder )*
║
╟─────────────●●►
║ *❏ .TT < ʟɪɴᴋ >*
║ *( tik tok dowunloder )*
║
╟─────────────●●►
║ *❏ .TT2  < ʟɪɴᴋ >*
║ *( tik tok downloader )*
║
╟─────────────●●►
║ *❏ .IMG < ꜱᴇᴀʀᴄʜ >*
║ *( photos dowunloder )*
║
╟─────────────●●►
║ *❏ .IMG2 < ꜱᴇᴀʀᴄʜ >*
║ *( photos dowunloder )*
║
╟─────────────●●►
║ *❏ .LOGO < ꜱᴇᴀʀᴄʜ >*
║ *( logo crate )*
║
╟─────────────●●►
║ *❏ .LOGO2 < ꜱᴇᴀʀᴄʜ >*
║ *( logo crate )*
║
╟─────────────●●►
║ *❏ .AIIMG < ꜱᴇᴀʀᴄʜ >*
║ *( adobe ai photos )*
║
╟─────────────●●►
║ *❏ .FB  < ʟɪɴᴋ >*
║ *( facbook dowunloder )*
║
╟─────────────●●►
║ *❏ .FB2  < ʟɪɴᴋ >*
║ *( facebook downloader )*
║
╟─────────────●●►
║ *❏ .IG  < ʟɪɴᴋ >*
║ *( intagram dowunloder )*
║
╟─────────────●●►
║ *❏ .IG2  < ʟɪɴᴋ >*
║ *( instagram downloader )*
║
╟─────────────●●►
║ *❏ .MEDIAFIRE  < ʟɪɴᴋ >*
║ *( mediafire dowunloder )*
║
╟─────────────●●►
║ *❏ .MEDIAFIRE2  < ʟɪɴᴋ >*
║ *( mediafire downloader )*
║
╟─────────────●●►
║ *❏ .GDRIVE  < ʟɪɴᴋ >*
║ *( google drive dowunloder )*
║
╟─────────────●●►
║ *❏ .GDRIVE2  < ʟɪɴᴋ >*
║ *( google drive downloader )*
║
╟─────────────●●►
║ *❏ .LYRICS  < ꜱᴇᴀʀᴄʜ >*
║ *( yt song lyrics )*
║
╟─────────────●●►
║ *❏ .YTSEARCH  < ꜱᴇᴀʀᴄʜ >*
║ *( youtube search )*
║
╟─────────────●●►
║ *❏ .TIKTOKSEARCH  < ꜱᴇᴀʀᴄʜ >*
║ *( tik tok search )*
║
╟─────────────●●►
║ *❏ .GOOGLE < ꜱᴇᴀʀᴄʜ >*
║ *( google search )*
║
╟─────────────●●►
║ *❏ .RVIDEO  < ꜱᴇᴀʀᴄʜ >*
║ *( yt reply video dowunloder )*
║
╟─────────────●●►
║ *❏ .APK  < ᴀᴘᴘ ɴᴀᴍᴇ >*
║ *( apk app downloader )*
║
╟─────────────●●►
║ *❏ .APK2  < ᴀᴘᴘ ɴᴀᴍᴇ >*
║ *( apk app downloader )*
║
╟─────────────●●►
║ *❏ .APK3  < ᴀᴘᴘ ɴᴀᴍᴇ >*
║ *( apk app downloader )*
║
╟─────────────●●►
║ *❏ .SINHALASUB  < ꜱᴇᴀʀᴄʜ >*
║ *( sinhala subtitle films )*
║
╟─────────────●●►
║ *❏ .GINIDIDILA  < ᴄᴀʀᴛᴏᴏɴ ɴᴀᴍᴇ >*
║ *( cartoon video )*
║
╟─────────────●●►
║ *❏ .WALLPAPER*
║ *( wallpaper dowunlod )*
║
╚═════════════●●►

*•────────────╴╴╴•⟢*
> *© POWER BY KD PANTA*
*•────────────╴╴╴•⟢*
      ` },

//============𝗢𝗪𝗡𝗘𝗥=𝗠𝗘𝗡𝗨========================

      '2': { imageCaption: `
*┌───────────╶╶╶╾⦁⦂⦁*
*◈OWNER_COMMANDS. 🤴*
*└───────────╶╶╶╾⦁⦂⦁*
*👋 HELLO,  WELCOM*
${pushname}
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏╔═════════════●●►
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏║ *❏ .SETAUTOBIO* 
║ *( about name change )*
║
╟─────────────●●►
║ *❏ .SETLOGO* 
║ *( bot image change)*
║
╟─────────────●●►
║ *❏ .BLOCK : < ᴍᴇɴᴛɪᴏɴ >*
║ *( block number )*
║
╟─────────────●●►
║ *❏ .LEFTGC*
║ *( group left me )*
║
╟─────────────●●►
║ *❏ .UNBLOCK  :  < ᴍᴇɴᴛɪᴏɴ >*
║ *( unblock number )*
║
╟─────────────●●►
║ *❏ .RESTART* 
║ *( bot restart )*
║
╟─────────────●●►
║ *❏ SHUTDOWN* 
║ *( bot shutdown )*
║
╟─────────────●●►
║ *❏ .LEAVE* 
║ *( leave massage )*
║
╟─────────────●●►
║ *❏ .JID* 
║ *( jid link )*
║
╟─────────────●●►
║ *❏ .JID2* 
║ *( jid link )*
║
╟─────────────●●►
║ *❏ SV  :  < ꜰᴏʀᴡᴇᴅ ꜱᴛᴀᴛᴜꜱ >*
║ *( status save )*
║
╟─────────────●●►
║ *❏ .BOOM :  < ꜱᴇᴀʀᴄʜ >*
║ *( fun msg to boom )*
║
╟─────────────●●►
║ *❏ .BROADCAST < ᴍꜱɢ >* 
║ *( all group sending msg )*
║
╟─────────────●●►
║ *❏ .SREPO  < ʀᴇᴘᴏ ʟɪɴᴋ >*
║ *( other repo detals)*
║
╚═════════════●●►

*•────────────╴╴╴•⟢*
> *© POWER BY KD PANTA*
*•────────────╴╴╴•⟢*
` },

//==========𝗠𝗔𝗜𝗡=𝗠𝗘𝗡𝗨========================

      '3': { imageCaption: `
*┌───────────╶╶╶╾⦁⦂⦁*
*◈MAIN_COMMANDS. 👨‍💻*
*└───────────╶╶╶╾⦁⦂⦁*
*👋 HELLO,  WELCOM*
${pushname}
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏╔═════════════●●►
║ *❏ .SUPPORT* 
║ *( help group )*
║
╟─────────────●●►
║ *❏ .ALIVE* 
║ *( bot alive msg )*
║
╟─────────────●●►
║ *❏ .MENU* 
║ *( bot menu list )*
║
╟─────────────●●►
║ *❏ .ALLMENU* 
║ *( bot all commands )*
║
╟─────────────●●►
║ *❏ .OWNER* 
║ *( owner tel : number )*
║
╟─────────────●●►
║ *❏ .SETTING*
║ *( bot setting chenge )*
║
╟─────────────●●►
║ *❏ .REPO* 
║ *( KD PANTA 00 bot github repo  )*
║
╟─────────────●●►
║ *❏ .PAIR  < ɴᴜᴍʙᴇʀ >* 
║ *( get pair code )*
║
╟─────────────●●►
║ *❏ .QR < ɴᴜᴍʙᴇʀ >*
║ *( get pair code )*
║
╟─────────────●●►
║ *❏ .SHORTURL < ʟɪɴᴋ >*
║ *( link ta small with link )*
║
╟─────────────●●►
║ *❏ .GITHUBSTALK* 
║ *( github profile viwe )*
║
╟─────────────●●►
║ *❏ .UPDATE* 
║ *( settings chenge )*
║
╟─────────────●●►
║ *❏ .AI* 
║ *( chat ai chat bot )*
║
╟─────────────●●►
║ *❏ .CHATGPT*
║ *( chat gpt chat bot )*
║
╟─────────────●●►
║ *❏ .PING* 
║ *( bot speed )*
║
╟─────────────●●►
║ *❏ .PONG* 
║ *( bot power speed )*
║
╟─────────────●●►
║ *❏ .SYSTEM* 
║ *( bot uptime )*
║
╟─────────────●●►
║ *❏ .SENDDM* 
║ *( send dm  )*
║
╟─────────────●●►
║ *❏ .SETLOGO* 
║ *( bot prifile chenge )*
║
╟─────────────●●►
║ *❏ .CLEARCHATS* 
║ *( all chat clear )*
║
╟─────────────●●►
║ *❏ .WEATHER  < ᴘʟᴀꜱᴇꜱ >*
║ *( weather : කාලගුණය )*
║
╟─────────────●●►
║ *❏ .READMORE  :  < ᴛᴇxᴛ >*
║ *( readmore msg )*
║
╚═════════════●●►

*•────────────╴╴╴•⟢*
> *© POWER BY KD PANTA*
*•────────────╴╴╴•⟢*
` },


//===============ɢʀᴏᴜᴘ_ᴄᴏᴍᴍᴀɴᴅ===========//
      '4': { imageCaption: `

*┌───────────╶╶╶╾⦁⦂⦁*
*◈GROUP_COMMAND. 👨‍👦‍👦*
*└───────────╶╶╶╾⦁⦂⦁*
*👋 HELLO,  WELCOM*
${pushname}

╔═════════════●●►
║ *❏ .TAG  < ᴍᴇꜱꜱᴀɢᴇ >*    
║ *( all tag message )*
║
╟─────────────●●►
║ *❏ .TAGALL*
║ *( all tag message )*
║
╟─────────────●●►
║ *❏ .TAGADMIN*
║ *( admin tag message )*
║
╟─────────────●●►
║ *❏ .GTAGALL*
║ *( all members tagall )*
║
╟─────────────●●►
║ *❏ .HIDETAG  < message >*
║ *( all tag message )*
║
╟─────────────●●►
║ *❏ .KICK  < ᴍᴇɴᴛɪᴏɴ >*
║ *( remove membor)*
║
╟─────────────●●►
║ *❏ .KICAll*
║ *( all membors removed )*
║
╟─────────────●●►
║ *❏ .MUTE*
║ *( group onlye admin on )*
║
╟─────────────●●►
║ *❏ .UNMUTE*
║ *( group onlye admin off )*
║
╟─────────────●●►
║ *❏ .ON*
║ *( group chat open )*
║
╟─────────────●●►
║ *❏ .OFF*
║ *( group chat close )*
║
╟─────────────●●►
║ *❏ .ADD < ɴᴜᴍʙᴇʀ >*
║ *( group add members )*
║
╟─────────────●●►
║ *❏ .JOIN  < ɢʀᴏᴜᴘ ʟɪɴᴋ >*
║ *( join group )*
║
╟─────────────●●►
║ *❏ .LEFT*
║ *( bot admin left )*
║
╟─────────────●●►
║ *❏ .SETNAME < ᴛᴇxᴛ >*
║ *( group name chenge )*
║
╟─────────────●●►
║ *❏ .SETDESC < ᴛᴇxᴛ >*
║ *( description chenge )*
║
╟─────────────●●►
║ *❏ .ENDGC*
║ *( group all left )*
║
╟─────────────●●►
║ *❏ .DEl  < ᴍᴇɴᴛɪᴏɴ >*
║ *( delete message )*
║
╟─────────────●●►
║ *❏ .ADD  < ɴᴜᴍʙᴇʀ >*    
║ *( group add membors )*
║
╟─────────────●●►
║ *❏ .INVITE*
║ *( group link buy )*
║
╟─────────────●●►
║ *❏ .PROMOTE  < ɴᴜᴍʙᴇʀ >*    
║ *( admin send membors )*
║
╟─────────────●●►
║ *.DEMOTR  < ɴᴜᴍʙᴇʀ >*    
║ *( disable admin membors )*
║
╟─────────────●●►
║ *❏ .SETWELCOM  < ᴍᴇꜱꜱᴀɢᴇ >*    
║ *( adding membors to welcom msg )*
║
╟─────────────●●►
║ *❏ .SETGOODBY  < ᴍᴇᴀᴀꜱɢᴇ >*    
║ *( left membors to goodby msg )*
║
╟─────────────●●►
║ *❏ .OPENTIME  < ᴛɪᴍᴇ >*    
║ *( onlye admin open time)*
║
╟─────────────●●►
║ *❏ .CLOSTIME  < ᴛɪᴍᴇ >*   
║ *( group onlye admin clous time )*
║
╟─────────────●●►
║ *❏ .ENDKICK < ꜰᴏʀᴡᴇᴅ >*
║ *( group remove member )*
║
╟─────────────●●►
║ *❏ .ENDKICKALL*
║ *( remove all members )*
║
╚═════════════●●►

*•────────────╴╴╴•⟢*
> *© POWER BY KD PANTA*
*•────────────╴╴╴•⟢*
`},

      
//===========𝗡𝗘𝗪𝗦=𝗠𝗘𝗡𝗨=======================

      '5': { imageCaption: `
*┌───────────╶╶╶╾⦁⦂⦁*
*◈NEWS_COMMANDS.📰*
*└───────────╶╶╶╾⦁⦂⦁*
*👋 HELLO,  WELCOM*
${pushname}
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╔═════════════●●►
║ *❏ .OPENNEWS* 
║ *( auto news start )*
║
╟─────────────●●►
║ *❏ .STOPNEWS* 
║ *( auto news stop )*
║
╟─────────────●●►
║ *❏ .NEWS* 
║ *( usa news )*
║
╚═════════════●●►

*•────────────╴╴╴•⟢*
> *© POWER BY KD PANTA*
*•────────────╴╴╴•⟢*
` },

//==============𝗖𝗢𝗡𝗩𝗘𝗥𝗧=𝗠𝗘𝗡𝗨======================

      '6': {imageCaption: `
*┌───────────╶╶╶╾⦁⦂⦁*
*◈CONVERT_COMMAND.🔮*
*└───────────╶╶╶╾⦁⦂⦁*
*👋 HELLO,  WELCOM*
${pushname}
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╔═════════════●●►
║ *❏ .TTS  < ᴛᴇxᴛ >* 
║ *( msg to voice )*
║
╟─────────────●●►
║ *❏ .TRT < ʟᴀɴɢᴜᴀɢᴇ / ᴛᴇxᴛ >* 
║ *( language translat )*
║
╟─────────────●●►
║ *❏ .CPP*
║ *( love coupls profile )*
║
╟─────────────●●►
║ *❏ .STIKER  < ꜰᴏʀᴡᴇᴅ ɪᴍɢ >* 
║ *( img to stiker )*
║
╟─────────────●●►
║ *❏ .TAKE  < ꜰᴏʀᴡᴇᴅ >*
║ *( your name set sticker )*
║
╟─────────────●●►
║ *❏ .ATTP  < ᴛᴇxᴛ >*
║ *( text set sticker )*
║
╟─────────────●●►
║ *❏ .VV  < ꜰᴏʀᴡᴇᴅ >* 
║ *[ ➀ photo / viwe again photo ]*
║
╟─────────────●●►
║ *❏ .IMGURL  < ꜰᴏʀᴡᴇᴅ >* 
║ *[ img to link ]*
║
╟─────────────●●►
║ *❏ .NPM < ᴘᴀᴄᴋᴀɢᴇ >*
║ *( guthub npm package )*
║
╟─────────────●●►
║ *❏ .COPlEPP < ꜱᴇᴀʀᴄʜ >*
║ *( coples profile dp )*
║
╟─────────────●●►
║ *❏ .LOGO  < ᴛᴇx ɴᴀᴍᴇ >* 
║ *( logo creat )*
║
╚═════════════●●►

*•────────────╴╴╴•⟢*
> *© POWER BY KD PANTA*
*•────────────╴╴╴•⟢*
` },

//============𝗔𝗡𝗜𝗠𝗘=𝗠𝗘𝗠𝗨======================

      '7': { imageCaption: `
*┌───────────╶╶╶╾⦁⦂⦁*
*◈FUN_MENU_ COMMAND.🔮*
*└───────────╶╶╶╾⦁⦂⦁*
*👋 HELLO,  WELCOM*
${pushname}
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏╔═════════════●●►
║ *❏ .LOLI* 
║ *( loli anime girle)*
║
╟─────────────●●►
║ *❏ .AWOO* 
║ *( awoo anime girle)*
║
╟─────────────●●►
║ *❏ .NEKO* 
║ *( neko anime girle )*
║
╟─────────────●●►
║ *❏ .WAIFU* 
║ *( waifu anime girle )*
║
╟─────────────●●►
║ *❏ .ANIME1* 
║ *( anime girle )*
║
╟─────────────●●►
║ *❏ .ANIME2* 
║ *( anime girle )*
║
╟─────────────●●►
║ *❏ .ANIME3* 
║ *( anime girle )*
║
╟─────────────●●►
║ *❏ .ANIME4* 
║ *( anime girle )*
║
╟─────────────●●►
║ *❏ .EMOJIMIX  < ᴛᴏᴡ ᴇᴍᴏᴊɪ >*
║ *( tow emoji mix to sricker )*
║
╟─────────────●●►
║ *❏ .IMOJI*
║ *( all imoji fun )*
║
╟─────────────●●►
║ *❏ .HACK*
║ *( hacking fun )*
║
╟─────────────●●►
║ *❏ .DOG*
║ *( dog image )*
║
╟─────────────●●►
║ *❏ .HAPPY*
║ *( happy imoji fun 🤪)*
║
╟─────────────●●►
║ *❏ .KISS*
║ *( kiss imoji fun 💋)*
║
╟─────────────●●►
║ *❏ .SAD*
║ *( sad imoji fun 😔)*
║
╟─────────────●●►
║ *❏ .HART*
║ *( hart imoji fun ❤️)*
║
╟─────────────●●►
║ *❏ .MON*
║ *( mon imoji fun 🌙)*
║
╟─────────────●●►
║ *❏ .SHYY*
║ *( shyy imoji fun 🤭)*
║
╟─────────────●●►
║ *❏ .ANGERY*
║ *( angery imoji fun 😡)*
║
╟─────────────●●►
║ *❏ .NIKAL*
║ *( nikal mon fun 😼)*
║
╟─────────────●●►
║ *❏ .CUNFUZED*
║ *( cunfuzed imoji fun 🙀)*
║
╟─────────────●●►
║ *❏ .HAND*
║ *( 🔞 18+ hand fun 💦)*
║
╚═════════════●●►

*•────────────╴╴╴•⟢*
> *© POWER BY KD PANTA*
*•────────────╴╴╴•⟢*
` },

//==========18+𝗩𝗜𝗗𝗘𝗢=𝗠𝗘𝗡𝗨=========================

      '8': { imageCaption: `
*┌───────────╶╶╶╾⦁⦂⦁*
*◈18+VIDEO_COMMAND.🔞*
*└───────────╶╶╶╾⦁⦂⦁*
*👋 HELLO,  WELCOM*
${pushname}
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╔═════════════●●►
║ *❏ .XVDL < ꜱᴇᴀʀᴄʜ >* 
║ *( porn hub video )*
║
╟─────────────●●►
║ *❏ .XXX < ꜱᴇᴀʀᴄʜ >* 
║ *( xnxx video )*
║
╟─────────────●●►
║ *❏ .SEX < ꜱᴇᴀʀᴄʜ >* 
║ *( sex video dowunlod )*
║
╟─────────────●●►
║ *❏ .NSFW*
║ *( sex image creat )*
║
╚═════════════●●►

*•────────────╴╴╴•⟢*
> *© POWER BY KD PANTA*
*•────────────╴╴╴•⟢*
` },

    };  

    // Listen for replies to the menu message
    bot.ev.on("messages.upsert", async event => {
      const newMessage = event.messages[0];
      if (!newMessage.message) return;

      const userReply = newMessage.message.conversation || newMessage.message.extendedTextMessage?.text;
      const isReplyToMenu = newMessage.message.extendedTextMessage?.contextInfo?.stanzaId === menuMessageId;

if (isReplyToMenu) {
  const response = menuResponses[userReply];
  if (response) {
    // Send image response

await bot.sendMessage(
  from,
  {
        image: { url: "https://i.ibb.co/TcyMWM2/3482.jpg" },
        caption: menuText,
        contextInfo: {
        mentionedJid: [],
        isForwarded: true,
        forwardingScore: 1,
        forwardedNewsletterMessageInfo: {
        newsletterJid: "120363350910072443@newsletter",
        newsletterName: "👿𝐊𝐃 𝐏么𝐍𝐓么 𝐎𝐎👿",
        serverMessageId: 999,
        
            },
            },
            },
            { quoted: message }
      
);
  } else {
    // Handle invalid input
    await bot.sendMessage(from, {
      text: "Invalid option! Please reply with a valid number."
    }, { quoted: newMessage });
  }
}
    });
  } catch (error) {
    console.error(error);
    reply(`Error: ${error.message}`);
  }
});






cmd({
    pattern: "allmenu",
    alias: ["menuall"],
    desc: "allmenu the bot",
    category: "alive",
    react: "📑",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        
        let dec = ` 
*┌───────────╶╶╶╾⦁⦂⦁*
*◈ALLMENU_KD_PANTA_00*
*└───────────╶╶╶╾⦁⦂⦁*
*👋 HELLOW WLCOM*
${pushname}
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╔═════════════●●►
╟ *◈ |* 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐂𝐌𝐃
╟ *◈ |* 𝐌𝐀𝐈𝐍 𝐂𝐌𝐃
╟ *◈ |* 𝐎𝐖𝐍𝐄𝐑 𝐂𝐌𝐃
╟ *◈ |* 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐂𝐌𝐃
╟ *◈ |* 𝐍𝐄𝐖𝐒 𝐂𝐌𝐃
╟ *◈ |* 𝐀𝐈 𝐂𝐌𝐃
╟ *◈ |* 𝐀𝐍𝐈𝐌𝐄 𝐂𝐌𝐃
╚═════════════●●►

╔═════════════●●►
╚ *꧁📥 ᴅᴏᴡɴʟᴏᴀᴅ cmd...*
╔═════════════●●►
╟│☆  *.SONG*          
╟│☆  *.PLAY*     
╟│☆  *.VIDEO*          
╟│☆  *.VIDEOPRO*                
╟│☆  *.MP3* 
╟│☆  *.MP4* 
╟│☆  *.TWITTER* 
╟│☆  *.IMG*  
║│☆  *.IMG2* 
║│☆  *.RVODEO* 
╟│☆  *.IG* 
╟│☆  *.FB*       
╟│☆  *.TT*   
╟│☆  *.LOGO*
╟│☆  *.AIIMG* 
╟│☆  *.TOMP3* 
╟│☆  *.MEDIAFIRE* 
╟│☆  *.LYRICS* 
╟│☆  *.YTSEARCH* 
╟│☆  *.RVIDEO*    
╟│☆  *.APK* 
╟│☆  *.GOOGLE* 
╟│☆  *.VIDEIPRO* 
╚═════════════●●►

╔═════════════●●►
╚ *꧁👨‍👦‍👦 ɢʀᴏᴜᴘ ᴄᴍᴅ...*
╔═════════════●●►
╟│☆  *.TAG*          
╟│☆  *.TAGALL*         
╟│☆  *.TAGADMIN* 
╟│☆  *.HIDETAG*          
╟│☆  *.KICK*          
╟│☆  *.KICKALL*        
╟│☆  *.REMOVE* 
╟│☆  *.JOIN*   
╟│☆  *.MUTE* 
╟│☆  *.UNMUTE*         
╟│☆  *.LEFT*       
╟│☆  *.DELETE* 
╟│☆  *.ADD*  
╟│☆  *.INVITE* 
╟│☆  *.PROMOT* 
╟│☆  *.DEMOTE* 
╟│☆  *.SETWELCOM* 
╟│☆  *.SETGOODBY* 
╟│☆  *.OPENTIME*
╟│☆  *.CLOSTIME* 
║│☆  *.ENDKICK* 
║│☆  *.ENDKICKALL* 
╚═════════════●●►

╔═════════════●●►
╚ *꧁ 🗣️ ᴏᴡɴᴇʀ ᴄᴍᴅ...*
╔═════════════●●►
╟│☆  *.LEFTGC* 
╟│☆  *.SETAUTOBIO* 
╟│☆  *.SETLOGO*
╟│☆  *.BLOCK*    
╟│☆  *.UNBLOCK*         
╟│☆  *.RESTART*
╟│☆  *.SHUTDOWN* 
╟│☆  *.JID*
╟│☆  *.JID2*
╟│☆  *.SAVE* 
╟│☆  *.BOOM* 
╟│☆  *.BROADCAST* 
╟│☆  *.SHUTDOWN*
╟│☆  *.STARTNEWS* 
╟│☆  *.STOPNEWS*
╟│☆  *.NEWS* 
╚═════════════●●►

╔═════════════●●►
╚ *꧁👨‍💻 ᴍᴀɪɴ cmd...*
╔═════════════●●►
╟│☆  *.SUPORT* 
╟│☆  *.ALIVE*       
╟│☆  *.MENU* 
╟│☆  *.ALLMENU* 
╟│☆  *.OWNER*     
╟│☆  *.PAIR* 
╟│☆  *.SETTING* 
╟│☆  *.SCRIPT* 
╟│☆  *.GITHUBSTALK* 
╟│☆  *.REPO*
╟│☆  *.UPDATE* 
╟│☆  *.AI* 
╟│☆  * SV* 
╟│☆  *.PING*          
╟│☆  *.PONG*        
╟│☆  *.JOIN*   
╟│☆  *.VV*
╟│☆  *.HACK* 
╟│☆  *.SHORTURL* 
╟│☆  *.SYSTEM* 
╟│☆  *.SENDDM*         
╟│☆  *.SETPP*
╟│☆  *.CLEARCHATS*
╟│☆  *.NPM* 
╟│☆  *.QR*
╟│☆  *.WEAETHR*
╟│☆  *.READMORE* 
╚═════════════●●►

╔═════════════●●►
╚ *꧁😍 ꜰᴜɴ ᴄᴍᴅ...*
╔═════════════●●►
╟│☆  *.LOLI* 
╟│☆  *.AWOO* 
╟│☆  *.NEKO* 
╟│☆  *.WAIFU* 
╟│☆  *.ANIME1* 
╟│☆  *.ANIME2* 
╟│☆  *.ANIME3* 
╟│☆  *.ANIME4* 
║│☆  *.IMOJI* 
╟│☆  *.HAPPY* 
╟│☆  *.SAD* 
╟│☆  *.HART* 
╟│☆  *.MON* 
╟│☆  *.NIKAL* 
╟│☆  *.CUNFUZED* 
╟│☆  *.SHYY* 
╟│☆  *.UNGRERY* 
╟│☆  *.HAND* 
╚═════════════●●►

╔═════════════●●►
╚ *꧁ 💝 ᴄᴏɴvᴇʀᴛ ᴄᴍᴅ...*
╔═════════════●●►
╟│☆  *.TTS* 
╟│☆  *.TRT* 
╟│☆  *.STICER* 
╟│☆  *.IMGURl* 
╟│☆  *.COULEPP* 
╟│☆  *.REMOVEBG* 
╚═════════════●●►

╔═════════════●●►
╚ *꧁🔞 18+ ᴠɪᴅᴇᴏ cmd...*
╔═════════════●●►
╟│☆  *.XVDL* 
╟│☆  *.XXX* 
╟│☆  *.SEX* 
║│☆  *.XXXIMG* 
╚═════════════●●►

*•────────────╴╴╴•⟢*
> *© POWER BY KD PANTA*
*•────────────╴╴╴•⟢*
`;

  
        await conn.sendMessage(
           from,
         {image: { url: `https://i.ibb.co/55zy3BV/8868.jpg` },
                    caption: dec,
                    contextInfo: {
                    mentionedJid: [m.sender],
                    groupMentions: [],
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363350910072443@newsletter',
                    newsletterName: '👿𝐊𝐃 𝐏么𝐍𝐓么 𝐎𝐎👿',
                    serverMessageId: 999
        },
          externalAdReply: {
          title: "༒𝐊𝐃 𝐏么𝐍𝐓么 𝐎𝐎༒",
          body: "© CRATER TO KAVISHKA",
          mediaType: 1,
          sourceUrl: "https://github.com/Kdpanta2/KD_PANTA_00.git",
          thumbnailUrl: "https://pomf2.lain.la/f/fxhw0z8c.jpg",
          renderLargerThumbnail: false,
          showAdAttribution: true

                    
                    }
                    }
            },
            { quoted: mek }
        );

        // send audio
        await conn.sendMessage(from, {
                   audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/sigma.m4a' },
                   mimetype: 'audio/mp4',
                   ptt: true
             },
             { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});







cmd({
    pattern: "alive",
    alias: ["bot","bottest"],
    desc: "alive the bot",
    category: "alive",
    react: "🏷️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        
        let dec = ` 
*┌───────────╶╶╶╾⦁⦂⦁*
*◈ALIVE_KD_PANTA_00◈*
*└───────────╶╶╶╾⦁⦂⦁*
*👋 HELLO, WELCOME* 
${pushname}
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╔═════════════●●►
╚ 𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗬 𝗗𝗘𝗧𝗔𝗜𝗟𝗦
╔═════════════●●►
╟ ❯❯ ⦁ *ᴘᴏᴡᴇʀ ʙʏ ᴋᴅ ᴘᴀɴᴛᴀ*
╟ ❯❯ ⦁ *ᴄʀᴇᴀᴛᴏʀ ᴋᴀᴠɪꜱʜᴋᴀ*
╟ ❯❯ ⦁ *ᴘʟᴀᴛꜰʀᴏᴍ : ʜᴇʀᴏᴋᴜ*
╟ ❯❯ ⦁ *ɴᴜᴍʙᴇʀ : [ 94755997170 ]*
╟ ❯❯ ⦁ *ᴘʀᴇꜰɪx : [  .  ]*
╟ ❯❯ ⦁ *ʀᴀᴍ ᴜꜱᴇɢᴇ*
╚═════════════●●►

╔═════════════●●►
╚ ❯❯ ⦁ 𝗥𝗘𝗣𝗢 *: https://github.com/Kdpanta2/KD_PANTA_00*
╚═════════════●●►

╔═════════════●●►
╚ ❯❯ ⦁ 𝗣𝗔𝗜𝗥 *94XXXXXXXX*
╚═════════════●●►

*•────────────╴╴╴•⟢*
> *© POWER BY KD PANTA*
*•────────────╴╴╴•⟢*
`;

        await conn.sendMessage(
           from,
        
         {image: { url: `https://i.ibb.co/55zy3BV/8868.jpg` },
                    caption: dec,
                    contextInfo: {
                    mentionedJid: [m.sender],
                    groupMentions: [],
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363350910072443@newsletter',
                    newsletterName: '👿𝐊𝐃 𝐏么𝐍𝐓么 𝐎𝐎👿',
                    serverMessageId: 999
        },
          externalAdReply: {
          title: "༒𝐊𝐃 𝐏么𝐍𝐓么 𝐎𝐎༒",
          body: "© CRATER TO KAVISHKA",
          mediaType: 1,
          sourceUrl: "https://github.com/Kdpanta2/KD_PANTA_00.git",
          thumbnailUrl: "https://pomf2.lain.la/f/fxhw0z8c.jpg",
          renderLargerThumbnail: false,
          showAdAttribution: true

                    
                    }
                    }
            },
            { quoted: mek }
        );

        // send audio
        await conn.sendMessage(from, {
                   audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/sigma.m4a' },
                   mimetype: 'audio/mp4',
                   ptt: true
             },
             { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});






cmd({
    pattern: "support",
    alias: ["help","hepgroup","helping"],
    desc: "alive the bot",
    category: "alive",
    react: "👨‍👦‍👦",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        
        let dec = ` 
*┌───────────╶╶╶╾⦁⦂⦁*
*◈SUPPORT_KD_PANTA_00◈*
*└───────────╶╶╶╾⦁⦂⦁*

╔═════════════●●►
╚ *👨‍👦‍👦 𝐁𝐎𝐓 𝐃𝐈𝐓𝐀𝐋𝐒*
║ ❖ *ꜱɪɴʜᴀʟᴀ ᴛɪᴛʟᴇ*
║ ⦁ *https://whatsapp.com/channel/0029VaxNSDR4SpkEoUszuP3E/135*
║ 
║ ❖ *ᴇɴɢʟɪꜱʜ ᴛɪᴛʟᴇ*
║ ⦁ *https://whatsapp.com/channel/0029VaxNSDR4SpkEoUszuP3E/136*
╚═════════════●●►

╔═════════════●●►
╚ *📲 𝐆𝐈𝐓𝐇𝐔𝐁 𝐑𝐄𝐏𝐎 :*
  ⦁ *https://github.com/Kdpanta2/KD_PANTA_00*
╚═════════════●●►

╔═════════════●●►
╚ *🪀 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐆𝐑𝐎𝐔𝐏 :*
  ⦁ *https://chat.whatsapp.com/BUXYSeJZdPTFccIFvsvNyL*
╚═════════════●●►

*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*
`;

        
        await conn.sendMessage(
           from,
         {image: { url: `https://i.ibb.co/55zy3BV/8868.jpg` },
                    caption: dec,
                    contextInfo: {
                    mentionedJid: [m.sender],
                    groupMentions: [],
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363350910072443@newsletter',
                    newsletterName: '👿𝐊𝐃 𝐏么𝐍𝐓么 𝐎𝐎👿',
                    serverMessageId: 999
        },
          externalAdReply: {
          title: "༒𝐊𝐃 𝐏么𝐍𝐓么 𝐎𝐎༒",
          body: "© CRATER TO KAVISHKA",
          mediaType: 1,
          sourceUrl: "https://github.com/Kdpanta2/KD_PANTA_00.git",
          thumbnailUrl: "https://pomf2.lain.la/f/fxhw0z8c.jpg",
          renderLargerThumbnail: false,
          showAdAttribution: true

                    
                    }
                    }
            },
            { quoted: mek }
        );


        // send audio
        await conn.sendMessage(from, {
                   audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/sigma.m4a' },
                   mimetype: 'audio/mp4',
                   ptt: true
             },
             { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


