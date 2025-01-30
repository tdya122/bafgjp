const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')
const { readEnv } = require('../lib/database');


/*let baseUrl;
(async () => {
    let baseUrlGet = await fetchJson(`https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json`)
    baseUrl = baseUrlGet.api
})();
*/
cmd({
    pattern: "mediafire",
    alias: ["mf","mfire"],
    react: "🔥",
    desc: "download mediafire",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{
  
if(!q) return await reply("*please give me url 🖇️*\n`👇 Example :`\n\n.mf https://www.mediafire.com/file/ggnuy5vod1k4xpq/delta+v14+ORI.zip/file");
  if(!q.includes('mediafire.com')) return await reply("*This url is invalid...💭*");
  
const mfire = await fetchJson(`https://www.dark-yasiya-api.site/download/mfire?url=${q}`);
  
const msg = `
*┌───────────╶╶╶╾⦁⦂⦁*
*◈MEDIAFIRE_KD_PANTA_00◈*
*└───────────╶╶╶╾⦁⦂⦁*

╔═════════════●●►
╚ *📝 File Name :* ${mfire.result.fileName}

╔═════════════●●►
╚ *🎛️ File Size :* ${mfire.result.size}

╔═════════════●●►
╚ *📥 Upload Date and Time :* ${mfire.result.date}

*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*
`
  
// SEND DETAILS
await conn.sendMessage( from, { image: { url: 'https://i.ibb.co/dPw1fHD/mfire.jpg' }, caption: msg }, { quoted: mek });

// SEND FILE
await conn.sendMessage(from, { document: { url: mfire.result.dl_link }, mimetype: mfire.result.fileType , fileName: mfire.result.fileName, caption: mfire.result.fileName }, { quoted: mek });

}catch(e){
console.log(e)
reply(`*ᴘʟᴇᴀꜱ ᴛʀʏ ᴀɢᴀɪɴ...⌛**`)
}
})



//gdrive(google drive) dl
/*cmd({
    pattern: "gdrive",
    alias: ["googledrive"],
    react: "📀",
    desc: "download gdrive files",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("*give me gdrive url ❌*")
        m.react('⬇️')
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/gdrivedl?url=${q}`)
        reply("*Downloading...⏳*")
        m.react('⬆️')
        await conn.sendMessage(from, { document: { url: data.data.download }, fileName: data.data.fileName, mimetype: data.data.mimeType, caption: `${data.data.fileName}\n\n> ${yourName}` }, { quoted: mek })  
        m.react('✅')
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
*/
//=================================XVIDEO============================================
cmd({
    pattern: "xnxx",
    alias: ["xdown","sex"],
    react: "🔞",
    desc: "Download xvideo.com porn video",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{

  if(!q) return await reply("Please give me few word !")
    
const xv_list = await fetchJson(`https://www.dark-yasiya-api.site/search/xvideo?q=${q}`)
if(xv_list.result.length < 0) return await reply("Not results found !")

const xv_info = await fetchJson(`https://www.dark-yasiya-api.site/download/xvideo?url=${xv_list.result[0].url}`)
    
  // FIRST VIDEO
  
const msg = `
*[ • 𝙺𝙳_𝙿𝙰𝙽𝚃𝙰_𝙼𝙳_𝚇𝚅𝙳𝙻‎ • ]*

*╭─────────────●●►*
*| 📑 Video Title :* ${xv_info.result.title}

*╭─────────────●●►*
*| 👁️ Views :* ${xv_info.result.views}

*╭─────────────●●►*
*| 📌 Like :* ${xv_info.result.like}

*╭─────────────●●►*
*| 🖇️ Deslink :* ${xv_info.result.deslike}

*╭─────────────●●►*
*| 🎰 Size :* ${xv_info.result.size}

*╭───────────╶╶╶╾⦁⦂⦁*
> *KD_PANTA_00 XVDL*
*╰───────────╶╶╶╾⦁⦂⦁*
`
// Send video
await conn.sendMessage(from, { video: { url: xv_info.result.dl_link }, caption: `> *© POWER BY KD PANTA 00*`}, { quoted: mek })
    
// SEND Documents 
await conn.sendMessage(from, { document: { url: xv_info.result.dl_link }, mimetype: "video/mp4", fileName: xv_info.result.title, caption: xv_info.result.title }, { quoted: mek });

}catch(e){
console.log(e)
reply(`*ᴘʟᴇᴀꜱ ᴛʀʏ ᴀɢᴀɪɴ...⌛*`)
}
})





cmd({
    pattern: "xvideo",
    alias: ["xvdl","xxx"],
    react: "🔞",
    desc: "Download xvideo.com porn video",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{

  if(!q) return await reply("Please give me few word !")
    
const xv_list = await fetchJson(`https://www.dark-yasiya-api.site/search/xvideo?q=${q}`)
if(xv_list.result.length < 0) return await reply("Not results found !")

const xv_info = await fetchJson(`https://www.dark-yasiya-api.site/download/xvideo?url=${xv_list.result[0].url}`)
    
  // FIRST VIDEO
  
const msg = `
*[ • 𝙺𝙳_𝙿𝙰𝙽𝚃𝙰_𝙼𝙳_𝚇𝚅𝙳𝙻‎ • ]*

*╭─────────────●●►*
*| 📑 Video Title :* ${xv_info.result.title}

*╭─────────────●●►*
*| 👁️ Views :* ${xv_info.result.views}

*╭─────────────●●►*
*| 📌 Like :* ${xv_info.result.like}

*╭─────────────●●►*
*| 🖇️ Deslink :* ${xv_info.result.deslike}

*╭─────────────●●►*
*| 🎰 Size :* ${xv_info.result.size}

*╭───────────╶╶╶╾⦁⦂⦁*
> *KD_PANTA_00 XVDL*
*╰───────────╶╶╶╾⦁⦂⦁*
`


await conn.sendMessage( from, { image: { url: xv_info.result.image || '' }, caption: msg }, { quoted: mek })

// SEND VIDEO
await conn.sendMessage(from, { document: { url: xv_info.result.dl_link }, mimetype: "video/mp4", fileName: xv_info.result.title, caption: xv_info.result.title }, { quoted: mek });

}catch(e){
console.log(e)
reply(`*please try againg⭕*`)
}
})


