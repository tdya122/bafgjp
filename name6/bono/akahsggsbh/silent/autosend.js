const fs = require('fs');
const path = require('path');
const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')





//========𝗔𝗨𝗧𝗢=𝗩𝗢𝗜𝗖𝗘=𝗗𝗢𝗡𝗘✅=====================
cmd({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    const filePath = path.join(__dirname, '../lib/autovoice.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            const config = await readEnv();
            if (config.AUTO_VOICE === 'true') {
                //if (isOwner) return;        
                await conn.sendPresenceUpdate('recording', from);
                await conn.sendMessage(from, { audio: { url: data[text] }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek });
            }
        }
    }                
});





//===========𝗔𝗨𝗧𝗢=𝗦𝗧𝗜𝗖𝗞𝗘𝗥=𝗗𝗢𝗡𝗘✅=====================
cmd({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    const filePath = path.join(__dirname, '../lib/autosticker.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            const config = await readEnv();
            if (config.AUTO_STICKER === 'true') {
                if (isOwner) return;        
                await conn.sendMessage(from,{sticker: { url : data[text]},package: 'Panta-md'},{ quoted: mek })   
            
            }
        }
    }                
});




//========𝗔𝗨𝗧𝗢=𝗥𝗘𝗣𝗟𝗬=𝗗𝗢𝗡𝗘✅=========================
cmd({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    const filePath = path.join(__dirname, '../lib/autoreply.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            const config = await readEnv();
            if (config.AUTO_REPLY === 'true') {
                //if (isOwner) return;        
                await m.reply(data[text])
            
            }
        }
    }                
});            


//============𝗔𝗨𝗧𝗢=𝗥𝗔𝗖𝗢𝗥𝗗𝗜𝗡𝗚=𝗗𝗢𝗡𝗘✅=======================

cmd({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {  
  const config = await readEnv();
     if (config.RECORDING === 'true') { 
        if (isOwner) return;
           await conn.sendPresenceUpdate('recording', from);
     }         
});






// Composing (Auto Typing)
cmd({
    on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    if (config.AUTO_TYPING === 'true') {
        await conn.sendPresenceUpdate('composing', from); // send typing 
    }
});



cmd({
    on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    if (config.FAKE_RECORDING === 'true') {
        await conn.sendPresenceUpdate('composing', from); // send typing 
    }
});
            



//==============𝗔𝗟𝗟𝗪𝗔𝗜𝗦=𝗢𝗡𝗟𝗜𝗡𝗘=𝗗𝗢𝗡𝗘✅=====================













