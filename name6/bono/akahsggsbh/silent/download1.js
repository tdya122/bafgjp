
const axios = require('axios');
const{fetchJson}=require('../lib/functions');
const config = require("../config");
const { cmd } = require("../command");
const sensitiveData=require('../lib/scrap');
const apkdl = require('../lib/apkdl')
const { igdl } = require('ruhend-scraper')
let baseUrl;(async()=>{try{let baseUrlGet=await fetchJson(sensitiveData.baseUrlPath);baseUrl=baseUrlGet.api}catch(error){console.error('Failed to fetch base URL:',error)}})();const yourName=sensitiveData.nameSignature;cmd({pattern:"fb",alias:["facebook"],desc:"Download FB videos",category:"download",filename:__filename},async(conn,mek,m,{from,q,reply})=>{try{if(!q||!q.startsWith("https://"))return reply(sensitiveData.linkRequestMessage);let data=await fetchJson(`${baseUrl}/api/fdown?url=${q}`);reply("*Downloading... 📥*");if(data.data.hd)await conn.sendMessage(from,{video:{url:data.data.hd},mimetype:"video/mp4",caption:`📺 FB HD VIDEO 🚀✨🎥\n\n ${yourName}`},{quoted:mek});if(data.data.sd)await conn.sendMessage(from,{video:{url:data.data.sd},mimetype:"video/mp4",caption:`📱 FB SD VIDEO 🎬⚡📥\n\n ${yourName}`},{quoted:mek})}catch(e){console.error(e);reply(`Error: ${e.message}`)}});cmd({pattern:"tiktok",alias:["tt"],desc:"Download TikTok videos",category:"download",filename:__filename},async(conn,mek,m,{from,q,reply})=>{try{if(!q||!q.startsWith("https://"))return reply(sensitiveData.linkRequestMessage);let data=await fetchJson(`${baseUrl}/api/tiktokdl?url=${q}`);reply("*Downloading... 📥*");if(data.data.no_wm)await conn.sendMessage(from,{video:{url:data.data.no_wm},mimetype:"video/mp4",caption:`🚀 NO-WATERMARK KD_PANTA_00 TIKTOK DOWNLOADER 🎵✨📥\n\n ${yourName}`},{quoted:mek});if(data.data.wm)await conn.sendMessage(from,{video:{url:data.data.wm},mimetype:"video/mp4",caption:`${sensitiveData.watermarkMessage}\n\n ${yourName}`},{quoted:mek});if(data.data.audio)await conn.sendMessage(from,{audio:{url:data.data.audio},mimetype:"audio/mpeg"},{quoted:mek})}catch(e){console.error(e);reply(`Error: ${e.message}`)}});




cmd({
  pattern: 'fluxpro',
  alias: ['pixel','adobiimg','adobi','aiimg'],
  react: '🪄',
  desc: 'Generate an image using Flux',
  category: 'image',
  filename: __filename
}, async (conn, mek, m, {
  body,
  from,
  quoted,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    const text = body.trim().replace(command, '').trim();
    if (!text) {
      return reply("*please search name 🖇️*\n`👇 Example :`\n\n.aiimg car");
    }

    await reply('> *Processing Image...⌛*');

    const apiUrl = `https://api.davidcyriltech.my.id/flux?prompt=${encodeURIComponent(text)}`;

    await conn.sendMessage(m.chat, { image: { url: apiUrl }, caption: `🎨 *Flux Image Generator*\n\n📄 *Prompt:* ${text}\n\n> *© POWER BY KD PANTA 00*` }, { quoted: m });
  } catch (error) {
    console.error('Error in Flux command:', error);
    reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
  }
});



cmd({
  pattern: 'surl',
  alias: ['tinyurl','tiny', 'shorten', 'short', 'shorturl'],
  react: '🖇️',
  desc: 'Shorten a URL using TinyURL or ShortURL.',
  category: 'main',
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("*Please give me a url*\n`👇 Example :`\n\n.sorturl https://drive.google.com/file/d/1Wzov7Gznf4Hr8gfm_s6xC3rn_TlA3IQD/view?usp=drivesdk\n\n*ඕනම දිග ලින්ක් එකක් කෙටි ලින්ක් එකක් බවට හැරීම*");

    await reply('*Processing...⌛*');

    let apiUrl = '';
    if (command === 'tiny' || command === 'tinyurl') {
      apiUrl = `https://api.giftedtech.web.id/api/tools/tinyurl?apikey=gifted&url=${encodeURIComponent(q)}`;
    } else {
      apiUrl = `https://api.giftedtech.web.id/api/tools/shorturl?apikey=gifted&url=${encodeURIComponent(q)}`;
    }

    await reply('*Shortening URL...🖇️*');

    const response = await fetchJson(apiUrl);
    const result = response.result;

    const caption = ` \`ENCRYPTO URL SHORTENER\` \n\n\n*⌛ Original Link:* ${q}\n\n*🖇️ Short Link:* ${result}\n\n> *© POWER BY KD PANTA 00*`;

    await conn.sendMessage(m.chat, { text: caption }, { quoted: m });
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});





//==================𝗜𝗠𝗔𝗚𝗘==================================


cmd({
    pattern: "img",
    alias: ["pinterest", "image", "searchpin"],
    react: "🖼️",
    desc: "Search and download Pinterest images using the API.",
    category: "fun",
    use: ".pin <keywords>",
    filename: __filename
}, async (conn, mek, m, { reply, args, from }) => {
    try {
        const query = args.join(" ");
        if (!query) {
            return reply("*Please give me search img name🖼️*\n`👇 Example :`\n\n.img car img");
        }

        
        await reply(`*SEARCHING YOUR IMG ⌛ ${query}...*`);


        const url = `https://api.diioffc.web.id/api/search/pinterest?query=${encodeURIComponent(query)}`;
        const response = await axios.get(url);

        // Validate response
        if (!response.data || !response.data.result || response.data.result.length === 0) {
            return reply("*No results found. Please try another keyword.*");
        }

        const results = response.data.result;  
        const selectedImages = results.sort(() => 0.5 - Math.random()).slice(0, 5);
      
        for (let i = 0; i < selectedImages.length; i++) {
            const image = selectedImages[i];
            await conn.sendMessage(
                from,
                {
                    image: { url: image.src },
                    caption: `*🖼️ Results For :* ${query}\n\n> *© POWER BY KD PANTA 00*`
                },
                { quoted: mek }
            );
        }
    } catch (error) {
        console.error(error);
        reply("*❌ An error occurred while processing your request. Please try again later.*");
    }
});


cmd({
    pattern: "img2",
    react: '🎲',
    alias: ["pic","picture","photo","photos"],
    desc: 'to down images',
    category: "dowunlod",
    use: '.im',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
    if (!q) throw `Example: ${prefix + command} Bike`

    let gis = require('g-i-s')
    gis(q, async (error, result) => {
        if (error) {
            console.error('Error fetching images:', error);
		
            return reply('Error fetching images. Please try again later.')
        }

        const topImages = result.slice(0, 5); // Extract top 5 images

        for (let i = 0; i < topImages.length; i++) {
            const imageUrl = topImages[i].url
          let Message = {
              image: { url: imageUrl },caption: `📥 *Query* : ${q}\n\n🔗 *Image ${i + 1} Url* : ${imageUrl}\n\n> *© POWER BY KD PANTA 00*`,
           }


		
            conn.sendMessage(from, Message, { quoted: mek })
        }
    })
} catch (e) {
l(e)
}
})


//========𝗚𝗢𝗢𝗚𝗟𝗘=𝗗𝗥𝗜𝗩𝗥==========================
/*
cmd({
    pattern: "gdrive",
    alias: ["googledrive"],
    react: "⌛",
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
})*/

//=================𝗔𝗣𝗞=𝗗𝗢𝗪𝗡𝗟𝗔𝗗=============================
cmd({
    pattern: "apk2",
    react: '📁',
    desc: 'to down images',
    category: "dowunlod",
    use: '.im',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
if(!q) return await conn.sendMessage(from , { text: '*please give me image name 🖼️*\n`👇 Example :`\n\n.img dog' }, { quoted: mek } ) 
const data = await apkdl.download(q)
let sendapk = await conn.sendMessage(from , { document : { url : data.dllink  } , mimetype : 'application/vnd.android.package-archive' , fileName : data.name + '.' + 'apk',caption: '> *KD PANTA 00 MULTI DEVICE*' } , { quoted: mek })
await conn.sendMessage(from, { react: { text: '📁', key: sendapk.key }})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    } catch (e) { 
		    console.log(e); 
		    reply(`*THERE IS AN ERROR☹️*`); 
	    } })



//================𝗔𝗣𝗞=𝗗𝗢𝗘𝗡𝗟𝗢𝗔𝗗=================================
cmd({
    pattern: "apk",
    alias: ["app","appapk"],
    react: '📁',
    desc: "Download apk.",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("📥")
      
const apiUrl = `http://ws75.aptoide.com/api/7/apps/search/query=${q}/limit=1`;
const response = await axios.get(apiUrl);
const data = response.data;

let step1 = data.datalist.list[0].size % 1000000
let step2 = `.` + step1
let step3 = data.datalist.list[0].size / 1000000
let correctsize = step3 - step2
    
let desc = `
*┌───────────╶╶╶╾⦁⦂⦁*
*◈APKDL_KD_PANTA_00◈*
*└───────────╶╶╶╾⦁⦂⦁*
🔮${pushname}

╔═════════════●●►
║ *❏ NAME :* ${data.datalist.list[0].name}
║ *❏ SIZE :* ${correctsize}MB
║ *❏ PACKAGE :* ${data.datalist.list[0].package}
║ *❏ LAST UPDATE :* ${data.datalist.list[0].updated}
║ *❏ Dᴇᴠᴇʟᴏᴘᴇʀꜱ :* ${data.datalist.list[0].developer.name}
╚═════════════●●►

> *© POWER BY KD PANTA*`

await conn.sendMessage(from,{image: {url: data.datalist.list[0].icon},caption: desc},{quoted: mek})
await conn.sendMessage(from,{document: {url: data.datalist.list[0].file.path_alt},fileName: data.datalist.list[0].name,mimetype: 'application/vnd.android.package-archive',caption: `*📁 APK DOCUMENTS FILE*\n\n> *POWER BY KD PANTA 00*`},{quoted: mek})
        
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})


//===============𝗜𝗡𝗗𝗧𝗔𝗚𝗥𝗔𝗠=𝗩𝗜𝗗𝗘𝗢===============================
cmd({

    pattern: "ig",
    alias: ["igstagram","insta"],
    desc: "To get the bot informations.",
    react: "📥",
    category: "download",
    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
    
if (!q) return m.reply("*please give me url 🖇️*\n`👇 Example :`\n\n.ig https://www.instagram.com/reel/DEM-6moIWhu/?igsh=dzloamI4anNjdHpr");
m.react('⬇️')

         let res = await igdl(q);
        
         let data = await res.data;
         for (let i = 0; i < 20; i++) {
            let media = data[i];
            let downloadurl = media.url
             m.react('⬆️')
            await conn.sendMessage(from,{video: {url:downloadurl},mimetype:"video/mp4",caption: `*📽️ INSTAGRAM DOWNLOAD 📽️*\n\n> *© POWER BY KD PANTA 00*`},{quoted:mek})
             m.react('✅')
         }

}catch(e){
console.log(e)
reply(`${e}`)
}
})



//==============𝗧𝗪𝗜𝗧𝗧𝗘𝗥===========================





	

/*cmd({
    pattern: "mds",
    desc: "Check bot setting.",
    react: "🎬",
    category: "movie",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
      const msr = (await fetchJson('https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/Mreply.json')).replyMsg

        // Premium users බලනවා
     const premiumUsers = await getPremiumUsers();

        // User එක premium user එකක්ද කියලා බලනවා
        const isPreUser = premiumUsers.includes(sender);

        // Premium user එකක් නොවේ නම්, command එක deny කරනවා
        if (!isPreUser) {
            return reply(msr.pre_cmd);
        }

        const config = await readEnv();
        const data2 = await SinhalaSub.movie(q);
        const sss = await getMovieDL(q);

        // Optional chaining (?.) සහ Nullish coalescing (??) operators වලින් default values දෙනවා
        let cc = `
☘️ *Tɪᴛʟᴇ :* ${sss?.result?.title ?? 'cannot be found'}

▫️📅 *Rᴇʟᴇᴀꜱᴇ Dᴀᴛᴇ :* ${sss?.result?.date ?? 'cannot be found'}
▫️🌎 *Cᴏᴜɴᴛʀʏ :* ${sss?.result?.country ?? 'cannot be found'}
▫️⏱️ *Dᴜʀᴀᴛɪᴏɴ :* ${data2?.result?.duration ?? 'cannot be found'}
▫️🎭 *Gᴇɴʀᴇꜱ :* ${data2?.result?.categories?.length > 0 ? data2.result.categories.join(', ') : 'cannot be found'}
▫️🖊️ *Sᴜʙᴛɪᴛʟᴇ Aᴜᴛʜᴏʀ :* ${data2?.result?.subtitle_author ?? 'cannot be found'}
▫️👨🏻‍💼 *Dɪʀᴇᴄᴛᴏʀ :* ${data2?.result?.director?.name ?? 'cannot be found'}
▫️🕵️‍♂️ *Cᴀsᴛ :* ${data2?.result?.cast?.length > 0 ? data2.result.cast.map(cast => cast.name).join(', ') : 'cannot be found'}

*➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*
▫️🔗 *Url :* ${q} 
*➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*

> *POWERED by ASITHA-MD*
`;

        const quality = "SD 480p";
        const quality1 = "HD 720p";
        const quality2 = "FHD 1080p";

        const directLink = await PixaldrainDL(q, quality, "direct");
        const directLink1 = await PixaldrainDL(q, quality1, "direct");
        const directLink2 = await PixaldrainDL(q, quality2, "direct");

        let abc = `
🔢 *Please reply the number you want to select*

  🎬 *1 | 480p :* ${directLink ?? 'cannot be found'}
  🎬 *2 | 720p :* ${directLink1 ?? 'cannot be found'}
  🎬 *3 | 1080p :* ${directLink2 ?? 'cannot be found'}

> *POWERED by ASITHA-MD*
`;

        await conn.sendMessage(from, { image: { url: data2?.result?.images?.[0] ?? 'https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg' }, caption: cc }, { quoted: mek });
        const sentMsg = await conn.sendMessage(from, { text: abc }, { quoted: mek });

        const messageID = sentMsg.key.id;

        conn.ev.on('messages.upsert', async (messageUpdate) => {
            const mek = messageUpdate.messages[0];
            if (!mek.message) return;
            const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
            const from = mek.key.remoteJid;
            const sender = mek.key.participant || mek.key.remoteJid;

            // Message එක reply එකක්ද කියලා බලනවා
            const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

            if (isReplyToSentMsg) {
                await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key } });
                await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });
                if (messageType === '1') {
                    await conn.sendMessage(from, { document: { url: directLink }, mimetype: "video/mp4", fileName: `🎬 ASITHA-MD 🎬\n${sss?.result?.title ?? 'Movie'}.mkv`, caption: `> ${sss?.result?.title ?? 'Movie'}\n\n> 480p\n\n> *POWERED by ASITHA-MD*` }, { quoted: mek });
                } else if (messageType === '2') {
                    await conn.sendMessage(from, { document: { url: directLink1 }, mimetype: "video/mp4", fileName: `🎬 ASITHA-MD 🎬\n${sss?.result?.title ?? 'Movie'}.mkv`, caption: `> ${sss?.result?.title ?? 'Movie'}\n\n> 720p\n\n> *POWERED by ASITHA-MD*` }, { quoted: mek });
                } else if (messageType === '3') {
                    await conn.sendMessage(from, { document: { url: directLink2 }, mimetype: "video/mp4", fileName: `🎬 ASITHA-MD 🎬\n${sss?.result?.title ?? 'Movie'}.mkv`, caption: `> ${sss?.result?.title ?? 'Movie'}\n\n> 1080p\n\n> *POWERED by ASITHA-MD*` }, { quoted: mek });
                }
              await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });

            }
        });
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

*/
