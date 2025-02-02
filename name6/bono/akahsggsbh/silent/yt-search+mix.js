const { cmd, commands } = require('../command')
const axios = require('axios');
const { fetchJson } = require("../lib/functions");
const config = require('../config'); // Ensure your API key is in config
const wiki = require('wikipedia');




cmd({
    pattern: "srepo",
    desc: "Fetch information about a GitHub repository.",
    category: "other",
    react: "🍃",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const repo = args.join(' ');
        if (!repo) {
            return reply("Please provide a GitHub repository name in the format 📌`owner/repo`.");
        }

        const apiUrl = `https://api.github.com/repos/${repo}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        let repoInfo = `📁_*GITHUB REPOSITORY INFO BY KD_PANTA_00-MD*_📁\n\n`;
        repoInfo += `📌 *ɴᴀᴍᴇ*: ${data.name}\n`;
        repoInfo += `🔗 *ᴜʀʟ*: ${data.html_url}\n`;
        repoInfo += `📝 *ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ*: ${data.description}\n`;
        repoInfo += `⭐ *ꜱᴛᴀʀꜱ*: ${data.stargazers_count}\n`;
        repoInfo += `🍴 *ꜰᴏʀᴋꜱ*: ${data.forks_count}\n`;
        repoInfo += `\n`;
        repoInfo += `*KD_PANTA_00-MD CREATION*\n`;

        await conn.sendMessage(from, { text: repoInfo }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*please try againg⭕*`);
    }
});

// Define the Wikipedia search command
cmd({
    pattern: "wiki",
    desc: "Search Wikipedia for information",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Check if a query was provided
        if (!q) {
            return reply('Please provide a search query.');
        }

        // Fetch summary from Wikipedia
        const summary = await wiki.summary(q);
        
        // Format the reply
        let replyText = `
*╭───────────╶╶╶╾⦁⦂⦁*
*◈WIKICMD_KD_PANTA_00◈*
*╰───────────╶╶╶╾⦁⦂⦁*

*📚 Wikipedia Summary 📚*

🔍 *Query*: _${q}_

💬 *Title*: _${summary.title}_

📝 *Summary*: _${summary.extract}_

🔗 *URL*: ${summary.content_urls.desktop.page}

*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*`;

        // Send the reply with the thumbnail image
        await conn.sendMessage(from, { image: { url: summary.originalimage.source }, caption: replyText }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});


cmd({
    pattern: "weather",
    desc: "🌤 Get weather information for a location",
    react: "🌤",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply("❗ Please provide a city name. Usage: .weather [city name]");
        const apiKey = '2d61a72574c11c4f36173b627f8cb177'; 
        const city = q;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(url);
        const data = response.data;
        const weather = `
   *[ • 𝙺𝙳_𝙿𝙰𝙽𝚃𝙰_𝙼𝙳_𝚆𝙴𝙰𝚃𝙷𝙴𝚁 • ]*
🌍 *Weather Information for ${data.name}, ${data.sys.country}* 🌍
🌡️ *Temperature*: ${data.main.temp}°C
🌡️ *Feels Like*: ${data.main.feels_like}°C
🌡️ *Min Temp*: ${data.main.temp_min}°C
🌡️ *Max Temp*: ${data.main.temp_max}°C
💧 *Humidity*: ${data.main.humidity}%
☁️ *Weather*: ${data.weather[0].main}
🌫️ *Description*: ${data.weather[0].description}
💨 *Wind Speed*: ${data.wind.speed} m/s
🔽 *Pressure*: ${data.main.pressure} hPa

*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*
`;
        return reply(weather);
    } catch (e) {
        console.log(e);
        if (e.response && e.response.status === 404) {
            return reply("🚫 City not found. Please check the spelling and try again.");
        }
        return reply("⚠️ An error occurred while fetching the weather information. Please try again later.");
    }
});


cmd({
    pattern: "readmore",
    desc: "Readmore message",
    category: "convert",
    react: "📝",
    filename: __filename
}, async (conn, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup, sender
}) => {
    try {
        // Get the message text after the command (.readmore text)
        let readmoreText = q ? q : "No text provided";

        // Create the "Readmore" effect by adding a special character to split the text
        let readmore = "\u200B".repeat(4000); // This creates a large gap between text

        // Full message to send
        let replyText = `... Readmore\n\n${readmore}${readmoreText}`;

        // Send the message with the "Readmore" functionality
        await conn.sendMessage(from, { text: replyText }, { quoted: mek });

        // React to the message
        await conn.sendMessage(from, { react: { text: "", key: mek.key } });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});



cmd({
    pattern: "moviesearch",
    alias: ["movies","msearch"],
    desc: "Fetch detailed information about a movie.",
    category: "utility",
    react: "🎬",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const movieName = args.join(' ');
        if (!movieName) {
            return reply("📽️ Please provide the name of the movie.");
        }

        const apiUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${config.OMDB_API_KEY}`;
        const response = await axios.get(apiUrl);

        const data = response.data;
        if (data.Response === "False") {
            return reply("🚫 Movie not found.");
        }

        const movieInfo = `
🎬 *❮ ⦁ ᴍᴏᴠɪᴇ ɪɴꜰᴏʀᴍɪꜱɪᴏɴ ⦁ ❯* 🎬

🎥 *Title:* ${data.Title}
📅 *Year:* ${data.Year}
🌟 *Rated:* ${data.Rated}
📆 *Released:* ${data.Released}
⏳ *Runtime:* ${data.Runtime}
🎭 *Genre:* ${data.Genre}
🎬 *Director:* ${data.Director}
✍️ *Writer:* ${data.Writer}
🎭 *Actors:* ${data.Actors}
📝 *Plot:* ${data.Plot}
🌍 *Language:* ${data.Language}
🇺🇸 *Country:* ${data.Country}
🏆 *Awards:* ${data.Awards}
⭐ *IMDB Rating:* ${data.imdbRating}
🗳️ *IMDB Votes:* ${data.imdbVotes}
`;

        // Define the image URL
        const imageUrl = data.Poster && data.Poster !== 'N/A' ? data.Poster : config.ALIVE_IMG;

        // Send the movie information along with the poster image
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: `${movieInfo}\n> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ-Sʜᴀʙᴀɴ`
        }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e.message}`);
    }
});

cmd({
  pattern: "twitter",
  alias: ["tweet","twit","twdl"],
  desc: "Download Twitter videos",
  category: "download",
  filename: __filename
}, async (client, message, chat, {
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
    if (!q || !q.startsWith('https://')) {
      return client.sendMessage(from, {
        text: "*please give me url 🖇️*\n`👇 Example :`\n\n.twitter https://x.com/Ro45Kuljot/status/1858448116477026368"
      }, { quoted: message });
    }

    await client.sendMessage(from, {
      react: {
        text: '⏳',
        key: message.key
      }
    });

    const response = await axios.get("https://www.dark-yasiya-api.site/download/twitter?url=" + q);
    const data = response.data;

    if (!data || !data.status || !data.result) {
      return reply("Failed to retrieve Twitter video. Please check the link and try again.");
    }

    const { desc, thumb, video_sd, video_hd } = data.result;

    const sentMessage = await client.sendMessage(from, {
      image: { url: thumb },
      caption: `
*┌───────────╶╶╶╾⦁⦂⦁*
*◈TWITTER_KD_PANTA_00◈*
*└───────────╶╶╶╾⦁⦂⦁

*DOWNLOAD  VIDEO* 
╔═══════════════●●►
║ ❯❯ ⦁ *1.1 ┃  SD Quality🪫*
║ ❯❯ ⦁ *1.2 ┃  HD Quality🔋*
╚═══════════════●●►

*DOWUNLOAD AUDIO* 
╔═══════════════●●► 
║ ❯❯ ⦁ *2.1 ┃  Audio🎧*
║ ❯❯ ⦁ *2.2 ┃  Document📁*
║ ❯❯ ⦁ *2.3 ┃  Voice🎙️*
╚═══════════════●●►

*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*`
    }, { quoted: message });

    const sentMessageId = sentMessage.key.id;

    client.ev.on("messages.upsert", async update => {
      const msg = update.messages[0];
      if (!msg.message) return;

      const userMessage = msg.message.conversation || msg.message.extendedTextMessage?.text;
      const remoteJid = msg.key.remoteJid;
      const isReplyToMenu = msg.message.extendedTextMessage && msg.message.extendedTextMessage.contextInfo.stanzaId === sentMessageId;

      if (isReplyToMenu) {
        await client.sendMessage(remoteJid, {
          react: {
            text: '📥',
            key: msg.key
          }
        });

        switch (userMessage) {
          case "1.1":
            await client.sendMessage(remoteJid, {
              video: { url: video_sd },
              caption: "*SD QUALITY VIDEO 🪫*\n> *© POWER BY KD PANTA*"
            }, { quoted: msg });
            break;
          case "1.2":
            await client.sendMessage(remoteJid, {
              video: { url: video_hd },
              caption: "*HD QUALITY VIDEO 🔋*\n> *© POWER BY KD PANTA*"
            }, { quoted: msg });
            break;
          case "2.1":
            await client.sendMessage(remoteJid, {
              audio: { url: video_sd },
              mimetype: "audio/mpeg"
            }, { quoted: msg });
            break;
          case "2.2":
            await client.sendMessage(remoteJid, {
              document: { url: video_sd },
              mimetype: "audio/mpeg",
              fileName: "KD_PANTA_00/TWDL.mp3",
              caption: "*AUDIO DOCUMENTS FILE 📁*\n> *© POWER BY KD PANTA 00*"
            }, { quoted: msg });
            break;
          case "2.3":
            await client.sendMessage(remoteJid, {
              audio: { url: video_sd },
              mimetype: "audio/mp4",
              ptt: true
            }, { quoted: msg });
            break;
        }
      }
    });
  } catch (error) {
    console.error(error);
    reply("An error occurred: " + error.message);
  }
});





cmd({
    pattern: "yts",
    react: "🔍",
    alias: ["youtubesearch","ytsearch"],
    desc: "Search for YouTube videos using a query",
    category: "search",
    use: ".yts2 ",
    filename: __filename
}, async (conn, mek, m, { from, quoted, q, reply }) => {
    try {
       
        if (!q) return reply("Please provide a search query.");

       
      await conn.sendMessage(from, { text: "*🔍 SEARCHING YOUTUB●●●○○*" }, { quoted: mek });

        
        const apiUrl = `https://saviya-kolla-api.up.railway.app/api/search?query=${encodeURIComponent(q)}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            console.error(`API Error: ${response.status} ${response.statusText}`);
            return reply("Failed to fetch results. Please try again later.");
        }

        const data = await response.json();

       
        if (!data || !Array.isArray(data.results) || data.results.length === 0) {
            return reply("No YouTube videos found for your search query.");
        }

       
        let videoInfo = "*┌───────────╶╶╶╾⦁⦂⦁*\n*◈ YTS_KD_PANTA_00 ◈*\n*└───────────╶╶╶╾⦁⦂⦁*\n📥*\n\n";
        data.results.forEach(video => {
            const views = video.views ? video.views.toLocaleString() : "N/A"; 
            videoInfo += `╔══════════════●●►\n`;
            videoInfo += `║ *📝 Title:* ${video.title || 'N/A'}\n`;
            videoInfo += `║ *⏳ Duration:* ${video.duration?.timestamp || 'N/A'}\n`;
            videoInfo += `║ *👀 Views:* ${views}\n`;
            videoInfo += `║ *📆 Uploaded:* ${video.ago || 'N/A'}\n`;
            videoInfo += `║ *🔗 Video URL:* ${video.url || 'N/A'}\n`;
            videoInfo += `║ *📲 Author:* ${video.author?.name || 'N/A'} (${video.author?.url || 'N/A'})\n`;
            videoInfo += `╚══════════════●●►\n\n`;
        });

      
        await conn.sendMessage(from, { text: videoInfo }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`*please try againg⭕*`);
    }
});
