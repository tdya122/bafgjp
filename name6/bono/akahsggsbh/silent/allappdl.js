const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson,clockString, jsonformat, forwardMessage} = require('../lib/functions')
const { facebook } = require('@mrnima/facebook-downloader');
const { downloadTiktok } = require("@mrnima/tiktok-downloader");
const axios = require("axios");


cmd({
    pattern: "ringtone",
    alias: ["ringtones","ringer","ring"],
    desc: "Get a random ringtone from the API.",
    react: "🎵",
    category: "fun",
    filename: __filename,
},
async (conn, mek, m, { from, reply, args }) => {
    try {
        const query = args.join(" ");
        if (!query) {
            return reply("Please provide a search query! Example: .ringtone Suna");
        }

        const { data } = await axios.get(`https://www.dark-yasiya-api.site/download/ringtone?text=${encodeURIComponent(query)}`);

        if (!data.status || !data.result || data.result.length === 0) {
            return reply("No ringtones found for your query. Please try a different keyword.");
        }

        const randomRingtone = data.result[Math.floor(Math.random() * data.result.length)];

        await conn.sendMessage(
            from,
            {
                audio: { url: randomRingtone.dl_link },
                mimetype: "audio/mpeg",
                fileName: `${randomRingtone.title}.mp3`,
            },
            { quoted: m }
        );
    } catch (error) {
        console.error("Error in ringtone command:", error);
        reply("Sorry, something went wrong while fetching the ringtone. Please try again later.");
    }
});




cmd({
    pattern: "google",
    alias: ["gsearch", "search"],
    desc: "Search Google for a query.",
    category: "tools",
    react: "🌐",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {
    try {
        // Vérifiez si un mot-clé est fourni
        if (args.length === 0) {
            return reply("*Please provide a search query 🖋️*\n`👇 Example :`\n\n.google how to bot deploy");
        }

        const query = args.join(" ");
        const apiKey = "AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI"; // Votre clé API Google
        const cx = "baf9bdb0c631236e5"; // Votre ID de moteur de recherche personnalisé
        const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${cx}`;

        // Appel API
        const response = await axios.get(apiUrl);

        // Vérifiez si l'API a renvoyé des résultats
        if (response.status !== 200 || !response.data.items || response.data.items.length === 0) {
            return reply(`❌ *No results found for:* ${query}`);
        }

        // Format et envoi des résultats
        let results = `🔎 *Google Search Results for:* "${query}"\n\n`;
        response.data.items.slice(0, 5).forEach((item, index) => {
            results += `*${index + 1}. ${item.title}*\n${item.link}\n${item.snippet}\n\n`;
        });

        reply(results.trim());
    } catch (error) {
        console.error(error);
        reply(`⚠️ *An error occurred while fetching search results.*\n\n${error.message}`);
    }
});



//=========Facbook==============
cmd({
  pattern: "fb",
  react: '🔮',
  alias: ["fbdl","facebook"],
  desc: "",
  category: "download",
  use: '.fb <Fb video link>',
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if (!q) return await  reply("*please give me url 🖇️*\n`👇 Example :`\n\n.fb https://www.facebook.com/share/r/1KbYrxqz8m/")

 // let data = await fetchJson(`${baseUrl}/api/fdown?url=${q}`)
const result = await facebook(q)
const info = `
*┌───────────╶╶╶╾⦁⦂⦁*
*◈FBDL_KD_PANTA_00◈*
*└───────────╶╶╶╾⦁⦂⦁*
🔮${pushname}

╔═════════════●●►
╚ *⏳ \`TIME :\`* ${result.result.duration}
╚═════════════●●►

╔═════════════●●►
╚ *📌 \`URL :\`* ${q}
╚═════════════●●►

*•────────────╴╴╴•⟢*
> *© POWER BY KD PANTA*
*•────────────╴╴╴•⟢*
`
await conn.sendMessage(from, { image: { url:`${result.result.thumbnail}`}, caption: info } , { quoted: mek })
await conn.sendMessage(from, { react: { text: '⬆', key: mek.key }})
await conn.sendMessage(from, { video: { url: result.result.links.SD }, mimetype: "video/mp4", caption: `*SD QUALITY FACBOOKDL🪫*\n\n> *POWERED BY KD PANTA 00*` }, { quoted: mek })  
await conn.sendMessage(from, { video: { url: result.result.links.HD }, mimetype: "video/mp4", caption: `*HD QUALITY FACBOOKDL🔋*\n\n> *POWERED BY KD PANTA 00*` }, { quoted: mek })  	
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
}catch(e){
await conn.sendMessage(from, { react: { text: `❌`, key: mek.key } })
console.log(e)
reply(`*ᴘʟᴇᴀꜱ ᴛʀʏ ᴀɢᴀɪɴ...⌛*`)
}
})





cmd({
    pattern: "tiktok2",
    alias: ["ttdl","tt2"],
    react: '🏷️',
    desc: "",
    category: "download",
    use: '.tiktok <Tiktok link>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply("*please give me url 🖇️*\n`👇 Example :`\n\n.tt https://vt.tiktok.com/ZS6DovU5F/")
let data = await downloadTiktok(q);	
let msg = `
*┌───────────╶╶╶╾⦁⦂⦁*
*◈TTDL_KD_PANTA_00◈*
*└───────────╶╶╶╾⦁⦂⦁*
🔮${pushname}

╔═════════════●●►
╚ *📝 \`Title :\`* ${data.result.title}
╚═════════════●●►

╔═════════════●●►
╚ *📌 \`URL :\`* ${q}
╚═════════════●●►

*•────────────╴╴╴•⟢*
> *© POWER BY KD PANTA*
*•────────────╴╴╴•⟢*
`
await conn.sendMessage( from, { image: { url:`${data.result.image}`}, caption: msg }, { quoted: mek })	
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
await conn.sendMessage(from, { document: { url: q }, mimetype: 'audio/mpeg', fileName: 'TikTok Audio' + '.mp3',caption: "*AUDIO DOCUMENT FILE📁*\n\n> *POWERED BY KD PANTA 00*" }, { quoted: mek })
await conn.sendMessage(from, { video: { url: data.result.dl_link.download_mp4_1}, mimetype: "video/mp4", caption: `*SD QUALITY TIKTOKDL🪫*\n\n> *POWERED BY KD PANTA 00*` }, { quoted: mek })	
await conn.sendMessage(from, { video: { url: data.result.dl_link.download_mp4_2 }, mimetype: "video/mp4", caption: `*HD QUALITY TIKTOKDL🔋*\n\n> *POWERED BY KD PANTA 00*` }, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ᴘʟᴇᴀꜱ ᴛʀʏ ᴀɢᴀɪɴ...⌛*')
l(e)
}
})
	


/*
cmd({
    pattern: "song",
    alias: ["play2"], 
    desc: "To download songs.",
    react: "🎵",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*search song name 🖇️*\n`👇 Example :`\n\n.song lelena")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
*┌───────────╶╶╶╾⦁⦂⦁*
*◈SONGDL_KD_PANTA_00◈*
*└───────────╶╶╶╾⦁⦂⦁*

╔═════════════●●►
╚ \`⌛ TITLE :\` ${data.title}
╚═════════════●●►

╔═════════════●●►
╚ \`🖇️ URL :\` ${data.url}
╚═════════════●●►

╔═════════════●●►
╚ \`👨‍💻 DURATION :\` ${data.description}
╚═════════════●●►

╔═════════════●●►
╚ \`⏰ TIME :\` ${data.timestamp}
╚═════════════●●►

╔═════════════●●►
╚ \`📊 AGO :\` ${data.ago}
╚═════════════●●►

╔═════════════●●► 
╚ \`👁️ VIEWS :\` ${data.views}
╚═════════════●●►

*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

const data1 = await fetchJson(`https://www.dark-yasiya-api.site/download/ytmp3?url=${url}`)
const dl = data1.result.dl_link

//const apiUrl = `https://www.dark-yasiya-api.site/download/ytmp3`;
//const apiResponse = await axios.get(apiUrl, { params: { url: video.url } });

	
    
//send audio message
await conn.sendMessage(from,{audio: {url:dl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"> *© POWER BY KD PANTA*"},{quoted:mek})
await conn.sendMessage(from,{document: {url:dl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"*📁 AUDIO DOCUMENT FIlE*\n\n> *© POWER BY KD PANTA*"},{quoted:mek})

}catch(e){
console.log(e)
  reply(`*ᴘʟᴇᴀꜱ ᴛʀʏ ᴀɢᴀɪɴ...⌛*`)
}
})
*/

//====================video_dl=======================

/*cmd({
    pattern: "video2",
    desc: "To download videos.",
    react: "🎥",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*search video name 🖇️*\n`👇 Example :`\n\n.video2 lelena")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
*┌───────────╶╶╶╾⦁⦂⦁*
*◈SONGDL_KD_PANTA_00◈*
*└───────────╶╶╶╾⦁⦂⦁*

╔═════════════●●►
╚  \`⌛ TITLE :\` ${data.title}
╚═════════════●●►

╔═════════════●●►
╚ \`🖇️ URL :\` ${data.url}
╚═════════════●●►

╔═════════════●●►
╚ \`👨‍💻 DURATION :\` ${data.description}
╚═════════════●●►

╔═════════════●●►
╚ \`⏰ TIME :\` ${data.timestamp}
╚═════════════●●►

╔═════════════●●►
╚ \`📊 AGO :\` ${data.ago}
╚═════════════●●►

╔═════════════●●► 
╚ \`👁️ VIEWS :\` ${data.views}
╚═════════════●●►

*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

const data1 = await fetchJson(`https://apitest1-f7dcf17bd59b.herokuapp.com/download/ytmp4?url=${url}`)
const dl = data1.result.dl_link

//const apiUrl = `https://api.davidcyriltech.my.id/download/ytmp4`;
//const apiResponse = await axios.get(apiUrl, { params: { url: video.url } });



//send video message
await conn.sendMessage(from,{video: {url:dl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*"},{quoted:mek})
await conn.sendMessage(from,{document: {url:dl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('*ᴘʟᴇᴀꜱ ᴛʀʏ ᴀɢᴀɪɴ...⌛*')
}
})*/
