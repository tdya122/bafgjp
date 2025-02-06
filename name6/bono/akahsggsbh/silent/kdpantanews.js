



const Hiru = require('hirunews-scrap');
const Esana = require('@sl-code-lords/esana-news');
const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');
const kaliya = `https://kaliya-x-api-aa295bddf395.herokuapp.com/news`



let activeGroups = {};
let lastNewsTitles = {};

async function getLatestNews() {
    let newsData = [];
    
    //====================𝗛𝗜𝗥𝗨=𝗡𝗘𝗪𝗦==============================
    try {
        const hiruApi = new Hiru();
        const hiruNews = await hiruApi.BreakingNews();
        newsData.push({
            title: hiruNews.results.title,
            content: hiruNews.results.news,
            date: hiruNews.results.date
        });
    } catch (err) {
        console.error(`Error fetching Hiru News: ${err.message}`);
    }

    //===============𝗘𝗦𝗔𝗡𝗔=𝗡𝗘𝗪𝗦==================================
    try {
        const esanaApi = new Esana();
        const esanaNews = await esanaApi.getLatestNews(); 
        if (esanaNews && esanaNews.title && esanaNews.description && esanaNews.publishedAt) {
            newsData.push({
                title: esanaNews.title,
                content: esanaNews.description,
                date: esanaNews.publishedAt
            });
        } else {
            console.error("Error: Esana News returned invalid data.");
        }
    } catch (err) {
        console.error(`Error fetching Esana News: ${err.message}`);
    }

    return newsData;
}

//===============𝗡𝗘𝗪𝗦=𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡=======================
async function checkAndPostNews(conn, groupId) {
    const latestNews = await getLatestNews();
    latestNews.forEach(async (newsItem) => {
        if (!lastNewsTitles[groupId]) {
            lastNewsTitles[groupId] = [];
        }

        if (!lastNewsTitles[groupId].includes(newsItem.title)) {
           await conn.sendMessage(groupId, { 
                text: `
*┌───────────╶╶╶╾⦁⦂⦁*
*◈AUTO_NEWS_KD_PANTA_00◈*
*└───────────╶╶╶╾⦁⦂⦁*

╔═══════════════●●►
╚ 📝 \`𝐓𝐈𝐓𝐋𝐄 :\` *${newsItem.title}*
╚═══════════════●●►
  
 📰 \`𝐍𝐄𝐖𝐒 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 :\` ${newsItem.content}

╔═══════════════●●►
╚ 🗓️ \`𝐓𝐈𝐌𝐄 𝐀𝐍𝐃 𝐃𝐀𝐓𝐄 :\` *${newsItem.date}*
╚═══════════════●●►
  
*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA 00*\n*•────────────╴╴╴•⟢*` 
            });
            lastNewsTitles[groupId].push(newsItem.title);

            if (lastNewsTitles[groupId].length > 100) {
                lastNewsTitles[groupId].shift();
            }
        }
    });
}


//=================𝗢𝗣𝗘𝗡=𝗡𝗘𝗪𝗦==============================
cmd({
    pattern: "startnews",
    alias: ["opennews","newson"],
    desc: "Enable Sri Lankan news updates in this group",
    isGroup: true,
    react: "📰",
    filename: __filename
}, async (conn, mek, m, { from, isGroup, participants }) => {
    
    try {
        if (isGroup) {
            const isAdmin = participants.some(p => p.id === mek.sender && p.admin);
            const isBotOwner = mek.sender === conn.user.jid;

            if (isAdmin || isBotOwner) {
                if (!activeGroups[from]) {
                    activeGroups[from] = true;

                    await conn.sendMessage(from, { text: "`𝐀𝐔𝐓𝐎 𝐍𝐄𝐖𝐒 𝐒𝐓𝐀𝐑𝐓 ✅` \n\n> *© POWERDE BY KD PANTA 00*" });

                    if (!activeGroups['interval']) {
                        activeGroups['interval'] = setInterval(async () => {
                            for (const groupId in activeGroups) {
                                if (activeGroups[groupId] && groupId !== 'interval') {
                                    await checkAndPostNews(conn, groupId);
                                }
                                }
                                }, 60000); // Check for news every 60 seconds
                                }

                                } else {
                                    await conn.sendMessage(from, { text: "`𝐀𝐔𝐓𝐎 𝐍𝐄𝐖𝐒 𝐒𝐓𝐀𝐑𝐓 ✅` \n\n> *© POWER BY KD PANTA 00*" });
                                }
                                } else {
                                    await conn.sendMessage(from, { text: "`𝐎𝐍𝐋𝐘𝐄 𝐀𝐃𝐌𝐈𝐍 𝐂𝐎𝐌𝐌𝐀𝐍𝐃...🤴`" });
                                }
                                } else {
                                    await conn.sendMessage(from, { text: "`𝐎𝐍𝐋𝐘𝐄 𝐆𝐑𝐎𝐔𝐏 𝐂𝐎𝐌𝐌𝐀𝐍...⏳`" });
                                }
                                } catch (e) {
        console.error(`Error in news command: ${e.message}`);
                                    await conn.sendMessage(from, { text: "Failed to activate the news service." });
                                }
});

//====================𝗦𝗧𝗢𝗣=𝗡𝗘𝗪𝗦============================
cmd({
    pattern: "stopnews",
    alias: ["offnews","newsoff"],
    desc: "Disable Sri Lankan news updates in this group",
    isGroup: true,
    react: "♻️",
    filename: __filename
}, async (conn, mek, m, { from, isGroup, participants }) => {
   try {
                if (isGroup) {
                const isAdmin = participants.some(p => p.id === mek.sender && p.admin);
                const isBotOwner = mek.sender === conn.user.jid;

                if (isAdmin || isBotOwner) {
                if (activeGroups[from]) {
                    delete activeGroups[from];
                    await conn.sendMessage(from, { text: "`𝐀𝐔𝐓𝐎 𝐍𝐄𝐖𝐒 𝐒𝐓𝐎𝐏 ⛔`\n\n> *© POWER BY KD PANTA 00*" });

                if (Object.keys(activeGroups).length === 1 && activeGroups['interval']) {
                        clearInterval(activeGroups['interval']);
                               delete activeGroups['interval'];
                }
                } else {
                    await conn.sendMessage(from, { text: "`𝐀𝐔𝐓𝐎 𝐍𝐄𝐖𝐒 𝐒𝐓𝐎𝐏 ⛔` \n\n> *© POWER BY KD PANTA 00*" });
                }
                } else {
                    await conn.sendMessage(from, { text: "`𝐎𝐍𝐋𝐘𝐄 𝐀𝐃𝐌𝐈𝐍 𝐂𝐎𝐌𝐌𝐀𝐍 👨‍👦‍👦`" });
                }
                } else {
                    await conn.sendMessage(from, { text: "`𝐎𝐍𝐋𝐘𝐄 𝐆𝐑𝐎𝐔𝐏 𝐂𝐎𝐌𝐌𝐀𝐍𝐃...⏳`" });
                }
                } catch (e) {
                console.error(`Error in news command: ${e.message}`);
                    await conn.sendMessage(from, { text: "Failed to deactivate the news service." });
    }
});



//=================𝗨𝗦𝗔=𝗡𝗘𝗪𝗦====================
cmd({
    pattern: "news",
    desc: "Get the latest news headlines.",
    category: "news",
    react: "📰",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const apiKey="0f2c43ab11324578a7b1709651736382";
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        const articles = response.data.articles;

        if (!articles.length) return reply("No news articles found.");

        // Send each article as a separate message with image and title
        for (let i = 0; i < Math.min(articles.length, 5); i++) {
            const article = articles[i];
            let message = `
*┌───────────╶╶╶╾⦁⦂⦁*
*◈USA_NEWS_KD_PANTA_00◈*
*└───────────╶╶╶╾⦁⦂⦁*

╔═════════════●●►
╚ *📰 Title :*\n${article.title}
╚═════════════●●►

╔═════════════●●►
╚ *🔗 Url :*\n${article.url}
╚═════════════●●►

╔═════════════●●►
╚ *💬 Description :*\n${article.description}
╚═════════════●●►

*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*
            `;

            console.log('Article URL:', article.urlToImage); // Log image URL for debugging

            if (article.urlToImage) {
                // Send image with caption
                await conn.sendMessage(from, { image: { url: article.urlToImage }, caption: message });
            } else {
                // Send text message if no image is available
                await conn.sendMessage(from, { text: message });
            }
        };
    } catch (e) {
        console.error("Error fetching news:", e);
        reply("DONE ✅");
    }
});






//============================================
cmd({
    pattern: "itn",
    react: "📄",
    desc: "news",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        let news = await fetchJson(`${kaliya}/itn`);
        
        if (news.status) {
            
            // Craft the message
            const message = `            
📰 ITN NEWS 📰
            
*News Title:* ${news.result.title}

*Date:*: ${news.result.date}

*Description:* ${news.result.desc}


*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*
            `;

            // Sending the message to the user
            await conn.sendMessage(from, { image: { url: news.result.image }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, no news available at the moment.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "derana",
    react: "📄",
    desc: "news",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        let news = await fetchJson(`${kaliya}/derana`);
        
        if (news.status) {
            
            // Craft the message
            const message = `            
📰 DERANA NEWS 📰
            
*News Title:* ${news.result.title}

*Date:*: ${news.result.date}

*Description:* ${news.result.desc}


*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*
            `;

            // Sending the message to the user
            await conn.sendMessage(from, { image: { url: news.result.image }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, no news available at the moment.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "hiru",
    react: "📄",
    desc: "news",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        let news = await fetchJson(`${kaliya}/hiru`);
        
        if (news.status) {
            
            // Craft the message
            const message = `            
📰 HIRU NEWS 📰
            
*News Title:* ${news.result.title}

*Date:*: ${news.result.date}

*Description:* ${news.result.desc}


*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*
            `;

            // Sending the message to the user
            await conn.sendMessage(from, { image: { url: news.result.img }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, no news available at the moment.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "siyatha",
    react: "📄",
    desc: "news",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        let news = await fetchJson(`${kaliya}/siyatha`);
        
        if (news.status) {
            
            // Craft the message
            const message = `            
📰 SIYATHA NEWS 📰
            
*News Title:* ${news.result.title}

*Date:*: ${news.result.date}

*Description:* ${news.result.desc}


*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*
            `;

            // Sending the message to the user
            await conn.sendMessage(from, { image: { url: news.result.image }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, no news available at the moment.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "dasathalanka",
    react: "📄",
    desc: "news",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        let news = await fetchJson(`${kaliya}/dasathalankanews`);
        
        if (news.status) {
            
            // Craft the message
            const message = `            
📰 DASATHA LANKA NEWS 📰
            
*News Title:* ${news.result.title}

*Date:*: ${news.result.date}

*Description:* ${news.result.desc}


*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*
            `;

            // Sending the message to the user
            await conn.sendMessage(from, { image: { url: news.result.image }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, no news available at the moment.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "bbc",
    react: "📄",
    desc: "news",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        let news = await fetchJson(`${kaliya}/bbc`);
        
        if (news.status) {
            
            // Craft the message
            const message = `            
📰 BBC NEWS 📰
            
*News Title:* ${news.result.title}


*Description:* ${news.result.desc}


*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*
            `;

            // Sending the message to the user
            await conn.sendMessage(from, { image: { url: news.result.image }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, no news available at the moment.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "lankadeepa",
    react: "📄",
    desc: "news",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        let news = await fetchJson(`${kaliya}/lankadeepa`);
        
        if (news.status) {
            
            // Craft the message
            const message = `            
📰 LANKADEEPA NEWS 📰
            
*News Title:* ${news.result.title}

*Date:*: ${news.result.date}

*Description:* ${news.result.desc}


*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*
            `;

            // Sending the message to the user
            await conn.sendMessage(from, { image: { url: news.result.image }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, no news available at the moment.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "siyatha",
    react: "📄",
    desc: "news",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        let news = await fetchJson(`${kaliya}/siyatha`);
        
        if (news.status) {
            
            // Craft the message
            const message = `            
📰 SIYATHA NEWS 📰
            
*News Title:* ${news.result.title}

*Date:*: ${news.result.date}

*Description:* ${news.result.desc}


*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*
            `;

            // Sending the message to the user
            await conn.sendMessage(from, { image: { url: news.result.image }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, no news available at the moment.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "silumina",
    react: "📄",
    desc: "news",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        let news = await fetchJson(`${kaliya}/silumina`);
        
        if (news.status) {
            
            // Craft the message
            const message = `            
📰 SILUMINA NEWS 📰
            
*News Title:* ${news.result.title}

*Date:*: ${news.result.date}

*Description:* ${news.result.desc}


*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*
            `;

            // Sending the message to the user
            await conn.sendMessage(from, { image: { url: news.result.image }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, no news available at the moment.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "gosiplanka",
    react: "📄",
    desc: "news",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        let news = await fetchJson(`${kaliya}/gossiplankanews`);
        
        if (news.status) {
            
            // Craft the message
            const message = `            
📰 GOSSIPLANKA NEWS 📰
            
*News Title:* ${news.result.title}

*Date:*: ${news.result.date}

*Description:* ${news.result.desc}


*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*
            `;

            // Sending the message to the user
            await conn.sendMessage(from, { image: { url: news.result.image }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, no news available at the moment.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});


