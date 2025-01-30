const { cmd } = require('../command')
const fs = require('fs');
const path = require('path');
const config = require('../config')
// List of bad words to check against
 // Replace with actual words
cmd({
  on: "body"
},
async (conn,mek, m, { from, body, isGroup, isAdmins, isBotAdmins, reply, sender }) => {
    try {
    
        const badWords = ["ඇටේ","ඇටෙ","ate","atee","ඇම්ටේ","amte","topa","ටොපා","ටොප්","topaa","lolla","ලොල්ලා","lollo","ලොල්ලො","ලොල්ලෝ","vanacharaya","වනචරයා","වනචරයො","vanacharayo","kona","කොන","කොණ","කොනකපාල","konakapala","kahuththa","කැහුත්ත","පක්කුන්ට","pakkunta","haththa","හැත්ත","ෆුක්","ලොල්ලෙක්","lollek","lollekda","ලොල්ලෙක්ද","ලොල්ලන්","lollan","pippiyo","පිප්පියො","කිබිසිබා","කිඹිසිබා","කිඹිසිඹා","කිබිසිඹා","kimbisiba","kibisiba","kibisibo","kibisibo","moda kariya","gon kariya","මෝඩ කැරියා","ගොන් කැරියා","kakki betta","කක්කි බෙට්ට","චූ","chuu","nosandalaya","නොසන්ඩාලයා","cariyo","cariya","cariyek","cariyo","criyo","asahanakaraya","අසහනකරයා","සමලිංගිකයා","samalingikaya","samalingikayek","සමලිංගිකයෙක්","සමලිංගිකයො","samalingikayo","gani","gaani","ගෑනි","ගැනි","ගෑනියේ","ගෑනියෝ","ගැනියෙ","ganiye","ganiyo","gadaya","gadayo","kondam","කොන්ඩම්","කුක්කු","කුක්කුව","කුම්කුව","kumkuva","kukkuva","kumku","kumkku","කක්කි","කක්කා","kakka","kakki","huththa","huththi","huththo","thuththiyo","huththiye","huth","huththala","huththolla","huththonla","හුත්ති","හුත්තා","හුත්තලා","හුත්තල","huththiyonla","හුත්තියොන්ලා","හුට්ටො","හුත්","හුත්තොන්ලා","හුත්තොලා","හුත්තොල","පකය","pakaya","පම්කය","pamkaya","පම්කයා","pakaiyala","pakayiyala","පකයියලා","පකයියල","පකො","pako","පකෝ","pakoo","පකයො","pakayo","පකයෝ","utti","hutti","උට්ටි","හුට්ටි","හුම්ටි","humti","umti","උම්ටි","උට්ටො","උට්ටා","උට්ට","උට්ටො","utto","http","kariya","කැරිය","කැරියා","kamriya","කැම්‍රියා","kari balla","කැරි බල්ල","gariya","ගැරියා","ගැරිය","gari balla","ගැරි බල්ලා","ගැරි බල්ල","kari","කැරි","kariyo","කැරියො","kariyek","කැරියෙක්","kariyekda","කැරියෙක්ද","kariyada","කැරියද","para balla","පර බල්ලා","para balla","paratta balla","පරට්ට බල්ලා","badu","බඩු","බඩුව","baduva","baduwa","maduwak","බඩුවක්","baduvak","badda","බඩ්ඩ","බඩුවක්","බඩ්ඩක්","baddak","ponnaya","පොන්නයා","ponnayo","ponna","පොන්නයො","humkannek","පොන්න","ponti","පොන්ටි","ponty","සෙක්ස්","සික්සි","ෆක්","ෆකින්","ෆකින්ග්","වත ෆක්","wath fuck","fucking","fuckin","fakin","fucin","xxx","xx","sex","sexy","xnxx","fuck","fuk","fuc","porn","nude","noob","pusy","pussy","boobs","dick","naked","nsfw","ass","mehk","malik","හුම්කන්නෙක්","wesi","vesi","වේසි","වෙසි","වෙසී","veesi","weesi","weesiyo","veesiyo","වේසියො","වේසියෝ","vesavo","wesavo","vesawo","vesawo","veesavo","weesavo","weesawo","weesavo","වේසාවො","වේසාවෝ","vesiyo","wesiyi","weesiyo","veesiyi","වේසියො","වේසියෝ","pakaa","paka","පකා","පක","පුක","puka","paiya","payiya","payya","payia","පයියා","payiyo","paiyo","payyo","පයියෝ","bijja","payiye","බිජ්ජ","පයියෙ","පයියේ","bijjaa","බිජ්ජා","පයියා","payyaa","payoyaa","paiyaa","බිජ්ජො","bijjo","බිජ්ජෙ","bijje","බිජ්ජො","බිජ්ජෝ","bijjo","bijjoo","bichcho","බිච්චො","බිච්චෝ","හැමනියං","හැමනියං","හැමනියන්","හැමනියන්","hamaniyan","hamiyan","avajathakaya","අවජාතකයා","අවජතක","avajathaka","hukapan","hukaapan","හුකපන්","හුකාපන්","හුකපං","හුකාපං","hukapiya","hukapiya","හුකපිය","හුකාපිය","hukanno","hukannoo","හුකන්නො","හුකන්නෝ","hukanava","හුකනවා","හුකනව","hkanava","hu","හු","hikuva","හිකුවා","hikuna","හිකුනා","හිකුන","හිකුව","hikunaa","hikuvaa","hukanavane","හුකනවනෙ","kariyek","කැරියෙක්","පුක සුදුද","puka sududa","puka","පුක","පුකා","pukaa","puka suduida","පුක සුදුයිද","puka sudiuyida","පොන්ටි","ponti","huththak","හුත්තක්","uttak","huttak","හුට්ටක්","උට්ටක්","paraya","පරයා","පරය","sakkiliya","සක්කිලියා","sakkiliyo","සක්කිලියො","kariyonta","කැරියොන්ට","pakayonta","පකයොන්ට","pakayata","පකයට","පකයාට"]
        if (!isGroup || isAdmins || !isBotAdmins) return; // Skip if not in group, or sender is admin, or bot is not admin
      
        const lowerCaseMessage = body.toLowerCase();
        const containsBadWord = badWords.some(word => lowerCaseMessage.includes(word));
        
        if (containsBadWord & config.ANTI_BAD === 'true') {
        await conn.sendMessage(from, { delete: mek.key }, { quoted: mek });
          //await conn.sendMessage(from, { text: "*කුනුහල්ප කියන්න එපා සුදු මහත්තයෝ...🥺💝*\n*හලිම නලකයි 😌*" }, { quoted: mek });
        }
    } catch (error) {
        console.error(error)
        reply("An error occurred while processing the message.")
    }
    })

const linkPatterns = [
    /https?:\/\/(?:chat\.whatsapp\.com|wa\.me)\/\S+/gi,   // WhatsApp group or chat links
    /https?:\/\/(?:t\.me|telegram\.me)\/\S+/gi,           // Telegram links
    /https?:\/\/(?:www\.)?youtube\.com\/\S+/gi,           // YouTube links
    /https?:\/\/youtu\.be\/\S+/gi,                        // YouTube short links
    /https?:\/\/(?:www\.)?facebook\.com\/\S+/gi,          // Facebook links
    /https?:\/\/fb\.me\/\S+/gi,                           // Facebook short links
    /https?:\/\/(?:www\.)?instagram\.com\/\S+/gi,         // Instagram links
    /https?:\/\/(?:www\.)?twitter\.com\/\S+/gi,           // Twitter links
    /https?:\/\/(?:www\.)?tiktok\.com\/\S+/gi,            // TikTok links
    /https?:\/\/(?:www\.)?linkedin\.com\/\S+/gi,          // LinkedIn links
    /https?:\/\/(?:www\.)?snapchat\.com\/\S+/gi,          // Snapchat links
    /https?:\/\/(?:www\.)?pinterest\.com\/\S+/gi,         // Pinterest links
    /https?:\/\/(?:www\.)?reddit\.com\/\S+/gi,            // Reddit links
    /https?:\/\/ngl\/\S+/gi,                              // NGL links
    /https?:\/\/(?:www\.)?discord\.com\/\S+/gi,           // Discord links
    /https?:\/\/(?:www\.)?twitch\.tv\/\S+/gi,             // Twitch links
    /https?:\/\/(?:www\.)?vimeo\.com\/\S+/gi,             // Vimeo links
    /https?:\/\/(?:www\.)?dailymotion\.com\/\S+/gi,       // Dailymotion links
    /https?:\/\/(?:www\.)?medium\.com\/\S+/gi,            // Medium links
    /https?:\/\/(?:www\.)?pornhub.com\/\S+/gi,            // mideafire links
    /https?:\/\/(?:www\.)?mediafire.com\/\S+/gi,          // pornhub links
    /https?:\/\/?whatsapp.com\/\S+/gi                     // whatsapp chalels links
];

cmd({
    on: "body"
}, async (conn, mek, m, { from, body, sender, isGroup, isAdmins, isBotAdmins, reply }) => {
    try {
        if (!isGroup || isAdmins || !isBotAdmins) return; // Skip if not in group, or sender is admin, or bot is not admin

        const containsLink = linkPatterns.some(pattern => pattern.test(body));

        if (containsLink && config.ANTI_LINK === 'true') {
            // Delete the message
            await conn.sendMessage(from, { delete: mek.key }, { quoted: mek });

            // Warn the user
            //await conn.sendMessage(from, { text: `⛔ Links are not allowed in this group.🖇️\n@${sender.split('@')[0]} has been removed. 🚮`, mentions: [sender] }, { quoted: mek });

            // Remove the user from the group
            //await conn.groupParticipantsUpdate(from, [sender], 'remove');
        }
    } catch (error) {
        console.error(error);
        reply("An error occurred while processing the message.");
    }
});
