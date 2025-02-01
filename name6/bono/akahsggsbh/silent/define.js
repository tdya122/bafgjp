

const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, sleep, fetchJson} = require("../lib/functions");



cmd({
  pattern: 'qrcode',
  alias: ['qr'],
  react: '🔄',
  desc: 'Generate a QR code.',
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
    if (!q) return reply('*Please give your number 🖋️*\n`👇 Example :`\n\n.qr 94755997160');
    await reply('> *Encrypto Generating QR code...🧩*');
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(q)}&size=200x200`;
    const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'binary');
    
    await conn.sendMessage(m.chat, { image: buffer }, { quoted: m, caption: 'QR Code By Subzero' });
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});



cmd({
  pattern: 'pair',
  alias: ["paircode","pp","pc","pcode"],
  react: '🔢',
  desc: "pair",
  category: 'download',
  use: ".pair +94755997160",
  filename: __filename
}, async (context, message, extra, { 
  from, 
  prefix, 
  quoted, 
  q, 
  reply 
}) => {
  try {
    if (!q) {
      return await reply("*Please your phone number 📞*\n`👇 Example :`\n\n.pair 94755997160");
    }
    const response = await fetchJson("https://kd-panta-web-6ee7fa9f3f26.herokuapp.com/code?number=" + q);
    const code = response.code;
    extra.reply(code + "\n\n" + "*copy code...⌛*\n`peast with link device 📲`");
  } catch (error) {
    console.log(error);
    reply(error);
  }
});

cmd({
    pattern: "githubstalk",
    alias: ["gitstalk","gitprofile","gitprofile","gitpp"],
    desc: "Fetch detailed GitHub user profile including profile picture.",
    category: "other",
    react: "💻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const username = args[0];
        if (!username) {
            return reply("*GitHub username typing...🖋️*\n`👇 Example :`\n\n.gitpp Kdpanta2");
        }

        const apiUrl = `https://api.github.com/users/${username}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        let userInfo = `  
*┌───────────╶╶╶╾⦁⦂⦁*
*◈GITSTALK_KD_PANTA_00◈*
*└───────────╶╶╶╾⦁⦂⦁*
🔮${pushname}

╔═════════════●●►      
║ 👨‍💻 *User name*: ${data.name || data.login}
╟─────────────●●►
║ 🖇️ *Github Link*:(${data.html_url})
╟─────────────●●►
║ 📝 *Bio*: ${data.bio || 'Not available'}
╟─────────────●●►
║ 🌍 *Location*: ${data.location || 'Unknown'}
╟─────────────●●►
║ 📊 *Public Repo*: ${data.public_repos}
╟─────────────●●►
║ 🎰 *Folowers*: ${data.followers} | Following: ${data.following}
╟─────────────●●►
║ 📅 *Created date*: ${new Date(data.created_at).toDateString()}
╟─────────────●●►
║ 📌 *Public Gists*: ${data.public_gists}
╚═════════════●●►

*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*
`;

        await conn.sendMessage(from, { image: { url: data.avatar_url }, caption: userInfo }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*ᴘʟᴇᴀꜱ ᴛʀʏ ᴀɢᴀɪɴ...⌛*`);
    }
});





                         cmd({
                             pattern: "define",
                             desc: "📚 Get the definition of a word",
                             react: "🔍",
                             category: "Auther",
                             filename: __filename
                         },
                         async (conn, mek, m, { from, q, reply }) => {
                             try {
                                 if (!q) return reply("❗ Please provide a word to define. Usage: .define [word]");

                                 const word = q;
                                 const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

                                 const response = await axios.get(url);
                                 const definitionData = response.data[0];

                                 const definition = definitionData.meanings[0].definitions[0].definition;
                                 const example = definitionData.meanings[0].definitions[0].example || 'No example available';
                                 const synonyms = definitionData.meanings[0].definitions[0].synonyms.join(', ') || 'No synonyms available';

const wordInfo = `
📚 *Word*: ${definitionData.word}
🔍 *Definition*: ${definition}
📝 *Example*: ${example}
🔗 *Synonyms*: ${synonyms}

> *@ Powered By Jawad Tech X*`;

                                 return reply(wordInfo);
                             } catch (e) {
                                 console.log(e);
                                 if (e.response && e.response.status === 404) {
                                     return reply("🚫 Word not found. Please check the spelling and try again.");
                                 }
                                 return reply("⚠️ An error occurred while fetching the definition. Please try again later.");
                             }
                         });
