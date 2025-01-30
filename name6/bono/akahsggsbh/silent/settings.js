const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")




cmd({
    pattern: "logo2",
    desc: "image.",
    react: "🔮",
    category: "logo",
    use: '.logo1',
    filename: __filename
},
async(conn, mek, m, {from, mnu, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try {
    if (!q) return reply('Please Provide A Name');
    await conn.sendMessage(from, { 
        image: { url: `https://dummyimage.com/600x400/&text=${q}` }, 
        caption: '> *@ POWERDE BY KD PANTA 00*' 
    }, {quoted: mek});

} catch (e) {
    console.log(e);
    reply(`*please try againg⭕*`);
}
})





cmd({
    pattern: "settings",
    alias: ["setting"],
    desc: "settings the bot",
    category: "owner",
    react: "⚙",
    filename: __filename


},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("`📵 𝐎𝐍𝐋𝐘𝐄 𝐎𝐖𝐍𝐄𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃`");
    try {
        let desc = `
*┌───────────╶╶╶╾⦁⦂⦁*
*◈SETTING_KD_PANTA_00◈*
*└───────────╶╶╶╾⦁⦂⦁*

⚒️ *Select settings what you want to on or off to reply below number* 🔢

*[ 01 ]* 𝗠𝗢𝗗𝗘...
╔═════════════●●►
*◈  1.1 | ON  | OFF 👨‍👦‍👦public*
*◈  1.2 | ON  | OFF 🧑‍💻privet*
*◈  1.3 | ON  | OFF 👥groups*
*◈  1.4 | ON  | OFF 👮‍♂️inbox*
╚═════════════●●►

*[ 02 ]* 𝗔𝗨𝗧𝗢 𝗩𝗢𝗜𝗖𝗘...
╔═════════════●●►
*◈  2.1 | ON  ✅*
*◈  2.2 | OFF 🔐*
╚═════════════●●►

*[ 03 ]* 𝗔𝗨𝗧𝗢 𝗦𝗧𝗜𝗖𝗞𝗘𝗥...
╔═════════════●●►
*◈  3.1 | ON  ✅*
*◈  3.2 | OFF 🔐*
╚═════════════●●►

*[ 04 ]* 𝗔𝗨𝗧𝗢 𝗥𝗘𝗣𝗟𝗬...
╔═════════════●●►
*◈  4.1 | ON  ✅*
*◈  4.2 | OFF 🔐*
╚═════════════●●►

*[ 05 ]* 𝗔𝗨𝗧𝗢 𝗥𝗘𝗔𝗖𝗧...
╔═════════════●●►
*◈  5.1 | ON  ✅*
*◈  5.2 | OFF 🔐*
╚═════════════●●►

*[ 06 ]* 𝗢𝗪𝗡𝗘𝗥 𝗥𝗘𝗔𝗖𝗧...
╔═════════════●●►
*◈  6.1 | ON  ✅*
*◈  6.2 | OFF 🔐*
╚═════════════●●►

*[ 07 ]* 𝗛𝗘𝗔𝗥𝗧 𝗥𝗘𝗔𝗖𝗧...
╔═════════════●●►
*◈  7.1 | ON  ✅*
*◈  7.2 | OFF 🔐*
╚═════════════●●►

*[ 08 ]* 𝗔𝗨𝗧𝗢 𝗦𝗧𝗔𝗧𝗨𝗦 𝗥𝗘𝗣𝗟𝗬...
╔═════════════●●►
*◈  8.1 | ON  ✅*
*◈  8.2 | OFF 🔐*
╚═════════════●●►

*[ 09 ]* 𝗔𝗨𝗧𝗢 𝗥𝗘𝗔𝗗 𝗦𝗧𝗔𝗧𝗨𝗦...
╔═════════════●●►
*◈  9.1 | ON  ✅*
*◈  9.2 | OFF 🔐*
╚═════════════●●►

*[ 10 ]* 𝗔𝗨𝗧𝗢 𝗥𝗘𝗔𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘...
╔═════════════●●►
*◈  10.1 | ON  ✅*
*◈  10.2 | OFF 🔐*
╚═════════════●●►

*[ 11 ]* 𝗔𝗡𝗧𝗜 𝗟𝗜𝗡𝗞...
╔═════════════●●►
*◈  11.1 | ON  ✅*
*◈  11.2 | OFF 🔐*
╚═════════════●●►

*[ 12 ]* 𝗔𝗡𝗧𝗜 𝗕𝗔𝗗...
╔═════════════●●►
*◈  12.1 | ON  ✅*
*◈  12.2 | OFF 🔐*
╚═════════════●●►

*[ 13 ]* 𝗔𝗡𝗧𝗜 𝗕𝗢𝗧...
╔═════════════●●►
*◈  13.1 | ON  ✅*
*◈  13.2 | OFF 🔐*
╚═════════════●●►

*[ 14 ]* 𝗔𝗟𝗟𝗪𝗔𝗜𝗦 𝗢𝗡𝗟𝗜𝗡𝗘...
╔═════════════●●►
*◈  14.1 | ON  ✅*
*◈  14.2 | OFF 🔐*
╚═════════════●●►

*[ 15 ]* 𝗔𝗨𝗧𝗢 𝗧𝗬𝗣𝗜𝗡𝗚...
╔═════════════●●►
*◈  15.1 | ON  ✅*
*◈  15.2 | OFF 🔐*
╚═════════════●●►

*[ 16 ]* 𝗙𝗔𝗖𝗘 𝗥𝗔𝗖𝗢𝗥𝗗𝗜𝗡𝗚...
╔═════════════●●►
*◈  16.1 | ON  ✅*
*◈  16.2 | OFF 🔐*
╚═════════════●●►

*[ 17 ]* 𝗕𝗔𝗗 𝗡𝗨𝗠𝗕𝗘𝗥 𝗕𝗟𝗢𝗖𝗞...
╔═════════════●●►
*◈  17.1 | ON  ✅*
*◈  17.2 | OFF 🔐*
╚═════════════●●►

*[ 18 ]* 𝗦𝗧𝗔𝗧𝗨𝗦 𝗠𝗘𝗦𝗦𝗔𝗚𝗘...
╔═════════════●●►
*◈  18.1 | ON  ✅*
*◈  18.2 | OFF 🔐*
╚═════════════●●►

*•────────────╴╴╴•⟢*
> *© POWER BY KD PANTA*
*•────────────╴╴╴•⟢*
`;



   const vv = await conn.sendMessage(from, { image: { url: "https://i.ibb.co/ZJKfz86/6196.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                        
                    /*===========MODE=============*/
                    case '1.1':                    
                        reply(".update MODE:public" );
                        reply(".restart");
                    break;
                        
                    case '1.2':               
                        reply(".update MODE:private");
                        reply(".restart");
                    break;
                    case '1.3':               
                          reply(".update MODE:group");
                          reply(".restart");
                    break;
                    case '1.4':     
                        reply(".update MODE:inbox");
                        reply(".restart");
                    break;
                        
                    /*===========AUTO_VOIVE=============*/
                    case '2.1':     
                        reply(".update AUTO_VOICE:true");
                        reply(".restart");
                    break;
                    case '2.2':     
                        reply(".update AUTO_VOICE:false");
                        reply(".restart");
                    break;
                        
                    /*===========AUTO_STICKER=============*/
                    
                    case '3.1': 
                        reply(".update AUTO_STICKER:true");
                        reply(".restart");
                    break;
                    case '3.2': 
                        reply(".update AUTO_STICKER:false");
                        reply(".restart");
                    break;
                        
                    /*===========AUTO_REPLY=============*/
                    
                    case '4.1': 
                        reply(".update AUTO_REPLY:true");
                        reply(".restart");
                    break;
                    case '4.2': 
                        reply(".update AUTO_REPLY:false");
                        reply(".restart");
                    break;


                    /*===========AUTO_REACT=============*/
                   
                    case '5.1': 
                        reply(".update AUTO_REACT:true");
                        reply(".restart");
                    break;
                    case '5.2':   
                        reply(".update AUTO_REACT:false");
                        reply(".restart");
                    break;
                        

                    /*===========OWNER_REACT=============*/
                   
                   case '6.1': 
                        reply(".update OWNER_REACT:true");
                        reply(".restart");
                    break;
                    case '6.2':   
                        reply(".update OWNER_REACT:false");
                        reply(".restart"); 
                    break;
                        

                    /*===========HEART_REACT=============*/
                    
                    case '7.1': 
                        reply(".update HEART_REACT:true");
                        reply(".restart");
                    break;
                    case '7.2':   
                        reply(".update HEART_REACT:false");
                        reply(".restart");
                    break;
                        
                   //==========AUTO_STATUS_REPLY=========//

                    case '8.1':
                        reply(".update AUTO_STATUS_REPLY:true");
                        reply(".restart");
                    break;

                    case '8.2':
                        reply(".update AUTO_STATUS_REPLY:false");
                        reply(".restart");
                    break;

                     /*===========AUTO_READ_STATUS=============*/
                    
                    case '9.1':    
                        reply(".update AUTO_READ_STATUS:true");
                        reply(".restart");
                    break;
                    case '9.2':    
                        reply(".update AUTO_READ_STATUS:false");
                        reply(".restart");
                    break;
                        
                    //=========AUTO_READ_MESSAGE================//
                    case '10.1':
                        reply(".update READ_MESSAGE:true");
                        reply(".restart");
                    break;

                    case '10.2':
                        reply(".update READ_MESSAGE:false");
                        reply(".restart");
                    break;
                        
                    
                    /*===========ANTI_LINK=============*/
                    
                    case '11.1':      
                        reply(".update ANTI_LINK:true");
                        reply(".restart");
                    break;
                    case '11.2':   
                        reply(".update ANTI_LINK:false");
                        reply(".restart");
                    break;
                        
                    /*===========ANTI_BAD=============*/
                    
                    case '12.1': 
                        reply(".update ANTI_BAD:true");
                        reply(".restart");
                    break;
                    case '12.2':   
                        reply(".update ANTI_BAD:false");
                        reply(".restart");
                    break;


                    /*===========ANTI_BOT=============*/    
                    
                    case '13.1': 
                        reply(".update ANTI_BOT:true");
                        reply(".restart");
                    break;
                    case '13.2':   
                        reply(".update ANTI_BOT:false");
                        reply(".restart"); 
                    break;

                    /*===========ALLWAYS_ONLINE=============*/
                    
                    case '14.1': 
                        reply(".update ALLWAYS_OFFLINE:true");
                        reply(".restart");
                    break;
                    case '14.2':   
                        reply(".update ALLWAYS_OFFLINE:false");
                        reply(".restart"); 
                    break;
                        
                    
                        
                    //==========AUTO_TYPING==============//
                        
                    case '15.1':
                        reply(".update AUTO_TYPING:true");
                        reply(".restart");
                    break;

                    case '15.2':
                        reply(".update AUTO_TYPING:false");
                        reply(".restart");
                    break;

                    
                    /*===========FAKE_RECORDING=============*/
                   
                    case '16.1': 
                        reply(".update RECORDING:true");
                        reply(".restart");
                    break;
                    case '16.2':   
                        reply(".update RECORDING:false");
                        reply(".restart");
                    break;
                        
                    
                    //============BAD_NO_BLOCK==============//
                    case '17.1':
                        reply(".update BAD_NO_BLOCK:true");
                        reply(".restart");
                    break;

                    case '17.2':
                        reply(".update BAD_NO_BLOCK:false");
                        reply(".restart");
                    break;

                        //=============AUTO_STATUS_MSG==========//
                    case '18.1':
                        reply(".update AUTO_STATUS_MSG:true");
                        reply(".restart");
                    break;

                    case '18.2':
                        reply(".update AUTO_STATUS_MSG:false");
                        reply(".restart");
                    break;

                     //=============anti_bad_link==========//
               //     case '19.1':
                     //   reply(".update ANTI_BAD_LINK:true");
                   //     reply(".restart");
                //    break;

                 //   case '19.2':
                   //     reply(".update ANTI_BAD_LINK:false");
               //         reply(".restart");
                  //  break;


                        
                    /*===========INVITE_NUMBERS=============*/
                    default:
                        reply("🔢 𝐈𝐍𝐕𝐈𝐓𝐄 𝐎𝐏𝐓𝐈𝐎𝐍 𝐓𝐎 𝐍𝐔𝐌𝐁𝐄𝐑");
              }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});




cmd({
    pattern: "ximg",
    alias: ["seximg","xxximg","nsfw"],
    desc: "sex image bot",
    category: "nsfw img",
    react: "🍑",
    filename: __filename


},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
  //  if (!isOwner) return reply("📵 𝐎𝐍𝐋𝐘𝐄 𝐎𝐖𝐍𝐄𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃");
    try {
        let desc = `
*┌───────────╶╶╶╾⦁⦂⦁*
*◈XIMGDL_KD_PANTA_00◈*
*└───────────╶╶╶╾⦁⦂⦁*

❯❯ ⦁ *🔞KD PANTA 00 XXX IMAGE🔞* 

╔═════════════●●►
║ 1   ❯❯ *EJACULATION💦*
║ 2   ❯❯ *PENIS🍆*
║ 3   ❯❯ *EREC🥵*
║ 4   ❯❯ *NUDE🍜*
║ 5   ❯❯ *SEX🫦*
║ 6   ❯❯ *CUTE🩷*
║ 7   ❯❯ *ORGASM🤤* 
║ 8   ❯❯ *ANAL🕳️*
║ 9   ❯❯ *SUSPENSION🍑*
║ 10 ❯❯ *KISS💋*
╚═════════════●●►

\`Reply you like img number 🔢\`

*•────────────╴╴╴•⟢*
> *© POWER BY KD PANTA*
*•────────────╴╴╴•⟢*
`;



   const vv = await conn.sendMessage(from, { image: { url: "https://i.ibb.co/ZJKfz86/6196.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                        
                    /*===========MODE=============*/
                    case '1':                    
                      //  reply(".EJACULATION https://i.ibb.co/pwzMCCd/9557.png" );
                        reply(".ejaculation https://i.ibb.co/pwzMCCd/9557.png");
                    break;
                        
                    case '2':               
                       // reply(".PENIS https://i.ibb.co/pwzMCCd/9557.png");
                         reply(".penis https://i.ibb.co/pwzMCCd/9557.png");
                    break;
                    case '3':               
                        //  reply(".EREC https://i.ibb.co/pwzMCCd/9557.png");
                          reply(".erec https://i.ibb.co/pwzMCCd/9557.png");
                    break;
                    case '4':     
                       // reply(".nude https://i.ibb.co/pwzMCCd/9557.png");
                        reply(".nude https://i.ibb.co/pwzMCCd/9557.png");
                    break;
                        
                    /*===========AUTO_VOIVE=============*/
                    case '5':     
                      //  reply(".sex2 https://i.ibb.co/pwzMCCd/9557.png");
                        reply(".sex2 https://i.ibb.co/pwzMCCd/9557.png");
                    break;
                    case '6':     
                       // reply(".cute https://i.ibb.co/pwzMCCd/9557.png");
                        reply(".cute https://i.ibb.co/pwzMCCd/9557.png");
                    break;
                        
                    /*===========AUTO_READ_STATUS=============*/
                    
                    case '7':    
                       // reply(".orgasm https://i.ibb.co/pwzMCCd/9557.png");
                        reply(".orgasm https://i.ibb.co/pwzMCCd/9557.png");
                    break;
                    case '8':    
                       // reply(".anal https://i.ibb.co/pwzMCCd/9557.png");
                        reply(".anal https://i.ibb.co/pwzMCCd/9557.png");
                    break;
                        
                    /*===========AUTO_STICKER=============*/
                    
                    case '9': 
                      //  reply(".suspension https://i.ibb.co/pwzMCCd/9557.png");
                        reply(".suspension https://i.ibb.co/pwzMCCd/9557.png");
                    break;
                    case '10': 
                       // reply(".kiss2 https://i.ibb.co/pwzMCCd/9557.png");
                        reply(".kiss2 https://i.ibb.co/pwzMCCd/9557.png");
                    break;
                        
                    
                        
                    /*===========INVITE_NUMBERS=============*/
                    default:
                        reply("🔢 𝐏𝐥𝐞𝐚𝐝 𝐢𝐧𝐯𝐢𝐭𝐞 𝐎𝐩𝐭𝐢𝐨𝐧 𝐭𝐨 𝐍𝐮𝐦𝐛𝐞𝐫");
              }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});




