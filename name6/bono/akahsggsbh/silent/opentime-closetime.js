
const config = require('../config')
const { cmd, commands } = require('../command')



cmd({
    pattern: "opentime",
    react: "🔖",
    desc: "To open group to a time",
    category: "group",
    use: '.opentime',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)	
  if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*🔮select:*\n▸ second\n▸ minute\n▸ hour\n\n*🔮example*\n▸ 10 second')
                }
                reply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = mek.participant
                    const open = `*OPEN TIME* THE GROUP WAS OPENED BY KD_PANTA_00 TO APPROVED ADMIN\n NOW MEMBERS CAN SEND MESSAGES 🔓`
                    conn.groupSettingUpdate(from, 'not_announcement')
                    reply(open)
                }, timer)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "closetime",
    react: "🔖",
    desc: "To close group to a time",
    category: "group",
    use: '.closstime',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)	
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*🔮 select:*\n▸ second\n▸ minute\n▸ hour\n\n*🔮Example*\n▸ 10 second')
                }
                reply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*CLOSE TIME* GROUP CLOSED BY KD_PANTA_00 AT APPROVED ADMIN\nNOW ONLY ADMIN CAN SEND MESSAGES 🔐`
                    conn.groupSettingUpdate(from, 'announcement')
                    reply(close)
                }, timer)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
})


//====================kick=================================
cmd({
    pattern: "endkick",
    alias: ["ekick","remove","rimu","rimove","remov"],
    desc: "Kicks replied/quoted user from group.",
    category: "group",
    filename: __filename,
    use: '<quote|reply|number>',
  },           
      async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
     try {
         if (!m.isGroup) return reply(`👨‍👦‍👦 *Onlye Group Command*`);
    if (!isBotAdmins) return reply(`*KD PANTA 00 හිමිකරුට ඇඩ්මින් ලබා දෙන්න* 🤴`);
  
  
      const user = m.quoted.sender;
      if (!user) return reply(`*Please give me a user to kick 📵*`);
      await conn.groupParticipantsUpdate(m.chat, [user], "remove");
     reply(`${user} *has been kicked out of the group!* \n\n${yn} `);
    } catch (e) {
  reply('*Remove done...✅*')
  l(e)
  }
  })


//=========================kickall===========================
cmd({
    pattern: "endkickall",
    desc: "Kicks all non-admin members from the group.",
    category: "group",
    filename: __filename,
},           
async (conn, mek, m, { from, isGroup, groupMetadata, groupAdmins, isBotAdmins, reply }) => {
    try {
        // Check if the command is used in a group
        if (!isGroup) return reply(`*This command is only for groups...⌛*`);
        
        // Check if the bot has admin privileges
        if (!isBotAdmins) return reply(`*I need admin privileges to kick users...✒️*`);

        // Fetch all participants from the group
        const allParticipants = groupMetadata.participants;

        // Filter out the admins (including the bot)
        const nonAdminParticipants = allParticipants.filter(member => !groupAdmins.includes(member.id));

        if (nonAdminParticipants.length === 0) {
            return reply('*There are no non-admin members to kick...📵*');
        }

        // Start removing non-admin participants
        for (let participant of nonAdminParticipants) {
            await conn.groupParticipantsUpdate(m.chat, [participant.id], "remove");
        }

        // Send a confirmation message once done
        reply(`*Kick all Successfully...✅*`);
        
    } catch (e) {
        console.error('Error kicking users:', e);
        reply('*ᴘʟᴇᴀꜱ ᴛʀʏ ᴀɢᴀɪɴ...⌛*');
    }
});




cmd({
    pattern: "tagadmin",
    alais:["tagadmins","alladmin","admintag","admin"],
    react: "🤴",
    desc: "Tags all the admins in the group.",
    category: "group",
    filename: __filename,
},           
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
        // Check if the command is used in a group
        if (!isGroup) return reply(`*This command is only for groups.⛔*`);
        if (!isAdmins) return reply(`*This command is only for group admin.⛔*`);
        
        // Fetch all group admins
        const admins = groupAdmins;
        if (admins.length === 0) {
            return reply('*There are no admins in this group...🔮*');
        }
        // Create a message with all admin tags
        let adminTagMessage = '*🤴 ALL ADMINS IN THE GROUP 🤴*\n\n';
        for (let admin of admins) {
            adminTagMessage += `❯❯ ⦁ @${admin.split('@')[0]}\n`;  // Mention each admin by their number
        }
        // Send the message and tag the admins
        await conn.sendMessage(from, { text: adminTagMessage, mentions: admins }, { quoted: mek });
    } catch (e) {
        console.error('Error tagging admins:', e);
        reply('*📵 ONLYR OWNER COMMAND*');
    }
})


//================================tagall================================
cmd({
    pattern: "gtagall",
    react: "🔖",
    desc: "To tag all Participants",
    category: "group",
    use: '.hidetag <hi>',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isGroup) return reply(ONLGROUP)
if (!isBotAdmins) return reply(botAdmin)
if (!isAdmins) return reply(ADMIN)
let teks = ` *👨‍👦‍👦 ALL GROUP MEMBERS TAG 👨‍👦‍👦*
                   
❖ 𝗠𝗘𝗦𝗦𝗔𝗚𝗘 ❖....✒️\n\n*${q ? q : 'blank'}*\n\n`
for (let mem of participants) {
teks += `❯❯ ⦁  @${mem.id.split('@')[0]}\n`
     }
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id)})
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*📵 ONLYE ADMIN COMMAND*')
l(e)
}
})
 
                                        
cmd({
    pattern: "off",	
    alias: ["offg","onlyadmin","onliadmin","goff"],
    react: "🔒",
    desc: "mute group.",
    category: "group",
    filename: __filename,
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
if (!isOwner || !isAdmins) return;


if (!m.isGroup) return reply(mg.onlygroup);
if (!isBotAdmins) return reply(mg.needbotadmins);     
            await conn.groupSettingUpdate(m.chat, "announcement")
           const mass = await conn.sendMessage(m.chat, { text: '*🔐 GROUP CHAT CLOSE 🔐*\n\n> *© POWER KD PANTA 00*' }, { quoted: mek });
            return await conn.sendMessage(m.chat, { react: { text: '🔒', key: mass.key } });
} catch(e) {
console.log(e);
reply('*📵 ONLYE ADMIN COMMAND*')    
} 
})

cmd({
    pattern: "on",	
    alias: ["ong","gon"],
    react: "🔓",
    desc: "unmute group.",
    category: "group",
    filename: __filename,
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
if (!isOwner || !isAdmins) return;


if (!m.isGroup) return reply(mg.onlygroup);
if (!isBotAdmins) return reply(mg.needbotadmins);     
            await conn.groupSettingUpdate(m.chat, "not_announcement")
           const mass = await conn.sendMessage(m.chat, { text: '*🔮 GROUP CHAT OPEN 🔮*\n\n> *© KD PANTA 00 MD*' }, { quoted: mek });
            return await conn.sendMessage(m.chat, { react: { text: '✅', key: mass.key } });
} catch(e) {
console.log(e);
reply('*📵 ONLYE ADMIN COMMAND*')    
} 
})


cmd({
    pattern: "setname",
    alias: ["setgname","groupname","gname"],
    desc: "Change the group's name.",
    category: "group",
    use: '<new group name>',
    filename: __filename
},
async (conn, mek, m, { from, q, isGroup, isBotAdmins, isAdmins, reply }) => {
    try {
        // Check if the command is used in a group
        if (!isGroup) return reply("This command is only for groups.");
        
        // Check if the bot has admin privileges
        if (!isBotAdmins) return reply("I need to be an admin to change the group name.");
        
        // Check if the user running the command is an admin
        if (!isAdmins) return reply("Only group admins can change the group name.");

        // Check if the new name is provided
        if (!q) return reply("Please provide a new name for the group.");

        // Change the group name
        await conn.groupUpdateSubject(from, q);
        reply(`*✒️ Group name has been updated to:* *${q}*`);
    } catch (e) {
        console.error(e);
        reply('🛑 An error occurred while changing the group name.');
    }
});

//==========================setdesc========================
cmd({
    pattern: "setdesc",
    alias: ["gdesc","groupdesc"],
    desc: "Change the group's description.",
    category: "group",
    use: '<new group description>',
    filename: __filename
},
async (conn, mek, m, { from, q, isGroup, isBotAdmins, isAdmins, reply }) => {
    try {
        // Check if the command is used in a group
        if (!isGroup) return reply("*ONlYE GROUP COMMAND* 👨‍👦‍👦");
        
        // Check if the bot has admin privileges
        if (!isBotAdmins) return reply("*KD PANTA 00 හිමිකරුට ඇඩ්මින් ලබා දෙන්න...⌛*");
        
        // Check if the user running the command is an admin
        if (!isAdmins) return reply("*Only group admins can change the group description...⌛*");

        // Check if the new description is provided
        if (!q) return reply("*Please provide a new description for the group...*");

        // Change the group description
        await conn.groupUpdateDescription(from, q);
        reply(`*✒️ Group description has been updated to :*\n\n*${q}*`);
    } catch (e) {
        console.error(e);
        reply('*📵 ONLYE ADMIN COMMAND*');
    }
});

                                          
cmd({
    pattern: "add",
    alias: ["aja"],
    react: "➕",
    desc: "Adds a user to the group.",
    category: "group",
    filename: __filename,
    use: '<number>',
},           
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Check if the command is used in a group
        if (!m.isGroup) return reply(`*This command is only for groups...⌛*`);
        
        // Check if the bot has admin privileges
        if (!isBotAdmins) return reply(`*KD PANTA 00 හිමිකරුර ඇඩ්මින් ලබා දෙන්න...⌛*`);
        
        // Check if the number is provided (from q or args)
        if (!q || isNaN(q)) return reply('*please give me number 🖋️*');
        
        const userToAdd = `${q}@s.whatsapp.net`;  // Format the phone number
        // Add the user to the group
        await conn.groupParticipantsUpdate(m.chat, [userToAdd], "add");
        // Confirm the addition
        reply(`User ${q} has been added to the group.`);
    } catch (e) {
        console.error('Error adding user:', e);
        reply('*📵 ONLYE ADMIN COMMAND*');
    }
})


cmd({
    pattern: "invite",
    desc: "Get the invite link for the current group.",
    category: "group",
    use: '.invite',
    filename: __filename
},
async (conn, mek, m, { from, isGroup, isBotAdmins, isAdmins, reply }) => {
    try {
        // Check if the command is used in a group
        if (!isGroup) return reply("*Onlye group command* 👨‍👦‍👦");

        // Check if the bot has admin privileges
        if (!isBotAdmins) return reply("*KD PANTA 00 හිමිකරුට ඇඩ්මින් ලබා දෙන්න...⌛*");

        // Generate the invite link for the group
        const inviteLink = await conn.groupInviteCode(from);

        // Send the invite link as a message
        reply(`Here is the invite link for the group: http://chat.whatsapp.com/${inviteLink}`);

    } catch (e) {
        console.error(e);
        reply('🛑 An error occurred while trying to get the invite link.');
    }
});


//===========================join=====================
cmd({
    pattern: "join",
    desc: "Join a group using an invite link.",
    category: "group",
    use: '<invite link>',
    filename: __filename
},
async (conn, mek, m, { from, q, isGroup, reply }) => {
    try {
        // Check if an invite link is provided
        if (!q || !q.startsWith("https://")) return reply("*Please provide a valid invite link...🖇️*");

        // Extract the invite link
        const inviteLink = q;

        // Use the invite link to make the bot join the group
        // If your library has a different method for joining, replace the line below with the correct one
        const code = inviteLink.split('/').pop(); // Extracting the invite code from the link
        await conn.groupAcceptInvite(code); // Use this method to join the group using the code

        reply(`*✅ Successfully joined the group using the invite link.*`);
    } catch (e) {
        console.error(e);
        reply('🛑 An error occurred while trying to join the group. Please check the invite link or try again later.');
    }
});




cmd({
    pattern: "setgoodbye",
    desc: "Set the goodbye message for the group.",
    category: "group",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply('*_This command can only be used in a group._*')
        if (!isBotAdmins) return reply('*_Bot must be an admin to use this command._*')
        if (!isAdmins) return reply('*_You must be an admin to use this command._*')

        const goodbye = q
        if (!goodbye) return reply('*_Please provide a goodbye message._*')

        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: goodbye })
        await reply('Goodbye message has been set.')
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

cmd({
    pattern: "setwelcome",
    desc: "Set the welcome message for the group.",
    category: "group",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply('*_This command can only be used in a group._*')
        if (!isBotAdmins) return reply('*_Bot must be an admin to use this command._*')
        if (!isAdmins) return reply('*_You must be an admin to use this command._*')

        const welcome = q
        if (!welcome) return reply('*_Please provide a welcome message._*')

        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: welcome })
        await reply('Welcome message has been set.')
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
});

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
if (!m.quoted) return reply("*KD PANTA 00 හිමිකරුර ඇඩ්මින් ලබා දෙන්න...⌛*");
const key = {
            remoteJid: m.chat,
            fromMe: false,
            id: m.quoted.id,
            participant: m.quoted.sender
        }
        await conn.sendMessage(m.chat, { delete: key })
} catch(e) {
console.log(e);
reply('*✅successful...*')
} 
});

