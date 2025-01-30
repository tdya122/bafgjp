const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const fs = require('fs');
const axios = require('axios')
var imgmsg = "*Give me a anime name !*"
var descgs = "It gives details of given anime name."
var cants = "I cant find this anime."



/*cmd({
  pattern: "hwaifu",
  category: "Hentai",
  react: "🙄",
  filename:__filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
   try {
const url = 'https://api.waifu.pics/nsfw/waifu'; // Replace with your actual URL
const response = await axios.get(apiUrl);
const data = response.data;

     await conn.sendMessage(origineMessage, { image: { url: imageUrl } }, { caption: "*Powered by Alpha Md*", quoted: ms });
    
  } catch (e) {
      console.log(e);
    reply('Erreur lors de la récupération des données : ' + error);
  }
});
*/


cmd({
    pattern: "dog",
    desc: "Fetch a random dog image.",
    category: "fun",
    react: "🐶",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://dog.ceo/api/breeds/image/random`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.message }, caption: '🐶 *\`DOG IMG\`* 🐶\n\n*•────────────╴╾╴╴•⟢*\n*`© POWER BY KD PANTA 00`*\n*•────────────╴╾╴╴•⟢*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`єяяσя ƒєт¢нιηg ∂σg ιмαgє: ${e.message}`);
    }
});


cmd({
    pattern: "cat",
    desc: "Fetch a random cat image.",
    category: "fun",
    react: "🐱",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // API URL to fetch a random cat image
        const apiUrl = `https://api.thecatapi.com/v1/images/search`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        // Send the cat image with a caption
        await conn.sendMessage(from, { image: { url: data[0].url }, caption: '*CAT IMG DOWNLOAD🐈*\n\n> *©POWER BY KD PANTA 00*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`${e.message}`);
    }
});
  

cmd({
  'pattern': "hand",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '👊',
  'filename': __filename
}, async (_0x45cd83, _0x286d49, _0x19855e, {
  from: _0x96d404,
  reply: _0x47c6bc
}) => {
  try {
    const _0x1d39fa = await _0x45cd83.sendMessage(_0x96d404, {
      'text': "👊 *STARTED...* 💦"
    });
    const _0x3eccb1 = ['8👊==D', "8=👊=D", "8==👊D", "8=👊=D", "8👊==D", "8=👊=D", "8==👊D", "8=👊=D", "8👊==D", '8👊==D', "8=👊=D", "8==👊D", '8=👊=D', "8👊==D", "8=👊=D", "8==👊D", "8=👊=D", '8👊==D', "8=👊=D", '8==👊D', "8=👊=D", "8👊==D 💦", "8=👊=D💦 💦", "8==👊D 💦💦 💦"];
    for (const _0x406c5e of _0x3eccb1) {
      await new Promise(_0x2b41ff => setTimeout(_0x2b41ff, 0x3e8));
      await _0x45cd83.relayMessage(_0x96d404, {
        'protocolMessage': {
          'key': _0x1d39fa.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x406c5e
          }
        }
      }, {});
    }
  } catch (_0x57d8ae) {
    console.log(_0x57d8ae);
    _0x47c6bc("❌ *Error!* " + _0x57d8ae.message);
  }
});
cmd({
  'pattern': "happy",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '😁',
  'filename': __filename
}, async (_0x353111, _0x52aa7e, _0x362309, {
  from: _0x3d98dd,
  reply: _0x46f413
}) => {
  try {
    const _0xce6d4d = await _0x353111.sendMessage(_0x3d98dd, {
      'text': '😂'
    });
    const _0x47a009 = ['😃', '😄', '😁', '😊', '😎', '🥳', '😸', '😹', '🌞', '🌈', '😃', '😄', '😁', '😊', '😎', '🥳', '😸', '😹', '🌞', '🌈', '😃', '😄', '😁', '😊'];
    for (const _0x445d2a of _0x47a009) {
      await new Promise(_0x3a1a76 => setTimeout(_0x3a1a76, 0x320));
      await _0x353111.relayMessage(_0x3d98dd, {
        'protocolMessage': {
          'key': _0xce6d4d.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x445d2a
          }
        }
      }, {});
    }
  } catch (_0x3d2162) {
    console.log(_0x3d2162);
    _0x46f413("❌ *Error!* " + _0x3d2162.message);
  }
});
cmd({
  'pattern': "hart",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '🫀',
  'filename': __filename
}, async (_0x468a9f, _0x3a7e90, _0xac39dc, {
  from: _0x53a037,
  reply: _0x542a66
}) => {
  try {
    const _0x39d571 = await _0x468a9f.sendMessage(_0x53a037, {
      'text': '❤️'
    });
    const _0x52271e = ['💖', '💗', '💕', '❤️', '💛', '💚', '🫀', '💙', '💜', '🖤', '♥️', '🤍', '🤎', '💗', '💞', '💓', '💘', '💝', '♥️', '💟', '🫀', '❤️'];
    for (const _0x42a679 of _0x52271e) {
      await new Promise(_0xc0ed08 => setTimeout(_0xc0ed08, 0x1f4));
      await _0x468a9f.relayMessage(_0x53a037, {
        'protocolMessage': {
          'key': _0x39d571.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x42a679
          }
        }
      }, {});
    }
  } catch (_0x2f7fbb) {
    console.log(_0x2f7fbb);
    _0x542a66("❌ *Error!* " + _0x2f7fbb.message);
  }
});
cmd({
  'pattern': "angery",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '🤡',
  'filename': __filename
}, async (_0x4c63a0, _0x2a2d0f, _0xfd1920, {
  from: _0x7c1f05,
  reply: _0x2fc617
}) => {
  try {
    const _0x471762 = await _0x4c63a0.sendMessage(_0x7c1f05, {
      'text': '🤡'
    });
    const _0x4383e5 = ['😡', '😠', '🤬', '😤', '😾', '😡', '😠', '🤬', '😤', '😾'];
    for (const _0x562bf3 of _0x4383e5) {
      await new Promise(_0x2be7c0 => setTimeout(_0x2be7c0, 0x3e8));
      await _0x4c63a0.relayMessage(_0x7c1f05, {
        'protocolMessage': {
          'key': _0x471762.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x562bf3
          }
        }
      }, {});
    }
  } catch (_0x44a0c5) {
    console.log(_0x44a0c5);
    _0x2fc617("❌ *Error!* " + _0x44a0c5.message);
  }
});
cmd({
  'pattern': "sad",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '😫',
  'filename': __filename
}, async (_0x33fcee, _0x1876fe, _0xc17cb8, {
  from: _0x15bb18,
  reply: _0xee066f
}) => {
  try {
    const _0x4c06fd = await _0x33fcee.sendMessage(_0x15bb18, {
      'text': '😭'
    });
    const _0x2d9a88 = ['🥺', '😟', '😕', '😖', '😫', '🙁', '😩', '😥', '😓', '😪', '😢', '😔', '😞', '😭', '💔', '😭', '😿'];
    for (const _0x336d71 of _0x2d9a88) {
      await new Promise(_0x6eece4 => setTimeout(_0x6eece4, 0x3e8));
      await _0x33fcee.relayMessage(_0x15bb18, {
        'protocolMessage': {
          'key': _0x4c06fd.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x336d71
          }
        }
      }, {});
    }
  } catch (_0x345651) {
    console.log(_0x345651);
    _0xee066f("❌ *Error!* " + _0x345651.message);
  }
});
cmd({
  'pattern': 'shyy',
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '😳',
  'filename': __filename
}, async (_0x5cfd31, _0x13a257, _0x4fe9cd, {
  from: _0x453318,
  reply: _0x138a01
}) => {
  try {
    const _0x361884 = await _0x5cfd31.sendMessage(_0x453318, {
      'text': "> KHANX-AI"
    });
    const _0x206081 = ['😳', '😊', '😶', '🙈', '🙊', '😳', '😊', '😶', '🙈', '🙊'];
    for (const _0x5ccb6e of _0x206081) {
      await new Promise(_0x23b67b => setTimeout(_0x23b67b, 0x3e8));
      await _0x5cfd31.relayMessage(_0x453318, {
        'protocolMessage': {
          'key': _0x361884.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x5ccb6e
          }
        }
      }, {});
    }
  } catch (_0x3775a4) {
    console.log(_0x3775a4);
    _0x138a01("❌ *Error!* " + _0x3775a4.message);
  }
});
cmd({
  'pattern': "mon",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': 'tools',
  'react': '🌙',
  'filename': __filename
}, async (_0x2adc05, _0x574382, _0xe7924c, {
  from: _0x10f877,
  reply: _0x1797ef
}) => {
  try {
    const _0x16fb04 = await _0x2adc05.sendMessage(_0x10f877, {
      'text': '🌙'
    });
    const _0x226056 = ['🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', "🌚🌝"];
    for (const _0x3ad6c8 of _0x226056) {
      await new Promise(_0x1eba41 => setTimeout(_0x1eba41, 0x3e8));
      await _0x2adc05.relayMessage(_0x10f877, {
        'protocolMessage': {
          'key': _0x16fb04.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x3ad6c8
          }
        }
      }, {});
    }
  } catch (_0x31361e) {
    console.log(_0x31361e);
    _0x1797ef("❌ *Error!* " + _0x31361e.message);
  }
});
cmd({
  'pattern': "cunfuzed",
  'desc': "Displays a dynamic edit msg for fun.",
  'category': 'tools',
  'react': '🙀',
  'filename': __filename
}, async (_0x4e5dcf, _0x197ed7, _0x4e6e55, {
  from: _0x419892,
  reply: _0x1f258d
}) => {
  try {
    const _0x566b9e = await _0x4e5dcf.sendMessage(_0x419892, {
      'text': '🙀'
    });
    const _0x35a517 = ['😕', '😟', '😵', '🤔', '😖', '😲', '😦', '🤷', "🤷‍♂️", '🤷‍♀️'];
    for (const _0x177123 of _0x35a517) {
      await new Promise(_0x19e7ff => setTimeout(_0x19e7ff, 0x3e8));
      await _0x4e5dcf.relayMessage(_0x419892, {
        'protocolMessage': {
          'key': _0x566b9e.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x177123
          }
        }
      }, {});
    }
  } catch (_0x3914f5) {
    console.log(_0x3914f5);
    _0x1f258d("❌ *Error!* " + _0x3914f5.message);
  }
});
cmd({
  'pattern': 'kiss',
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '♥️',
  'filename': __filename
}, async (_0x5534d6, _0xea351e, _0x4a659, {
  from: _0x3549d3,
  reply: _0x38bcdd
}) => {
  try {
    const _0x3d3056 = await _0x5534d6.sendMessage(_0x3549d3, {
      'text': '♥️'
    });
    const _0x548d62 = ['🥵', '❤️', '💋', '😫', '🤤', '😋', '🥵', '🥶', '🙊', '😻', '🙈', '💋', '🫂', '🫀', '👅', '👄', '💋'];
    for (const _0x2ae417 of _0x548d62) {
      await new Promise(_0x3260b1 => setTimeout(_0x3260b1, 0x3e8));
      await _0x5534d6.relayMessage(_0x3549d3, {
        'protocolMessage': {
          'key': _0x3d3056.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x2ae417
          }
        }
      }, {});
    }
  } catch (_0x1763fc) {
    console.log(_0x1763fc);
    _0x38bcdd("❌ *Error!* " + _0x1763fc.message);
  }
});
cmd({
  'pattern': 'nikal',
  'desc': "Displays a dynamic edit msg for fun.",
  'category': "tools",
  'react': '🗿',
  'filename': __filename
}, async (_0x125191, _0x3f957c, _0xb9d01a, {
  from: _0x3ae285,
  reply: _0x30a5f5
}) => {
  try {
    const _0x19567b = await _0x125191.sendMessage(_0x3ae285, {
      'text': "✧FREDI MD✧🗿"
    });
    const _0x1c80f3 = ["   ⣠⣶⡾⠏⠉⠙⠳⢦⡀   ⢠⠞⠉⠙⠲⡀ \n  ⣴⠿⠏          ⢳⡀ ⡏         ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀ ⣀⡀   ⣧ ⢸          ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲     ⣿  ⣸   Nikal   ⡇\n ⣟⣿⡭     ⢱        ⣿  ⢹           ⡇\n  ⠙⢿⣯⠄   __        ⡿  ⡇        ⡼\n   ⠹⣶⠆     ⡴⠃    ⠘⠤⣄⣠⠞ \n    ⢸⣷⡦⢤⡤⢤⣞⣁          \n ⢀⣤⣴⣿⣏⠁  ⠸⣏⢯⣷⣖⣦⡀      \n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿      \n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏    ⣄⢸      `", "   ⣠⣶⡾⠏⠉⠙⠳⢦⡀   ⢠⠞⠉⠙⠲⡀ \n  ⣴⠿⠏          ⢳⡀ ⡏         ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀ ⣀⡀   ⣧ ⢸          ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲     ⣿  ⣸   Lavde   ⡇\n ⣟⣿⡭     ⢱        ⣿  ⢹           ⡇\n  ⠙⢿⣯⠄  |__|     ⡿  ⡇        ⡼\n   ⠹⣶⠆     ⡴⠃    ⠘⠤⣄⣠⠞ \n    ⢸⣷⡦⢤⡤⢤⣞⣁          \n ⢀⣤⣴⣿⣏⠁  ⠸⣏⢯⣷⣖⣦⡀      \n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿      \n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏    ⣄⢸      `", "   ⣠⣶⡾⠏⠉⠙⠳⢦⡀   ⢠⠞⠉⠙⠲⡀ \n  ⣴⠿⠏           ⢳⡀ ⡏         ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀ ⣀⡀   ⣧ ⢸          ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸   Pehli   ⡇\n ⣟⣿⡭     ⢱       ⣿  ⢹            ⡇\n  ⠙⢿⣯⠄  (P)       ⡿  ⡇        ⡼\n   ⠹⣶⠆     ⡴⠃    ⠘⠤⣄⣠⠞ \n    ⢸⣷⡦⢤⡤⢤⣞⣁          \n ⢀⣤⣴⣿⣏⠁  ⠸⣏⢯⣷⣖⣦⡀      \n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿      \n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏    ⣄⢸      `", "   ⣠⣶⡾⠏⠉⠙⠳⢦⡀   ⢠⠞⠉⠙⠲⡀ \n  ⣴⠿⠏           ⢳⡀ ⡏         ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀ ⣀⡀   ⣧ ⢸          ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸  Fursat  ⡇\n ⣟⣿⡭     ⢱         ⣿  ⢹           ⡇\n  ⠙⢿⣯⠄   __        ⡿  ⡇        ⡼\n   ⠹⣶⠆     ⡴⠃    ⠘⠤⣄⣠⠞ \n    ⢸⣷⡦⢤⡤⢤⣞⣁          \n ⢀⣤⣴⣿⣏⠁  ⠸⣏⢯⣷⣖⣦⡀      \n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿      \n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏    ⣄⢸      `", "   ⣠⣶⡾⠏⠉⠙⠳⢦⡀   ⢠⠞⠉⠙⠲⡀ \n  ⣴⠿⠏           ⢳⡀ ⡏         ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀ ⣀⡀   ⣧ ⢸          ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸  Meeee   ⡇\n ⣟⣿⡭     ⢱         ⣿  ⢹           ⡇\n  ⠙⢿⣯⠄  |__|      ⡿  ⡇        ⡼\n   ⠹⣶⠆     ⡴⠃    ⠘⠤⣄⣠⠞ \n    ⢸⣷⡦⢤⡤⢤⣞⣁          \n ⢀⣤⣴⣿⣏⠁  ⠸⣏⢯⣷⣖⣦⡀      \n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿      \n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏    ⣄⢸      `", "   ⣠⣶⡾⠏⠉⠙⠳⢦⡀   ⢠⠞⠉⠙⠲⡀ \n  ⣴⠿⠏           ⢳⡀ ⡏         ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀ ⣀⡀   ⣧ ⢸           ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲   ⣿  ⣸   Nikal   ⡇\n ⣟⣿⡭     ⢱        ⣿  ⢹            ⡇\n  ⠙⢿⣯⠄  lodu     ⡿  ⡇       ⡼\n   ⠹⣶⠆       ⡴⠃    ⠘⠤⣄⣠⠞ \n    ⢸⣷⡦⢤⡤⢤⣞⣁          \n ⢀⣤⣴⣿⣏⠁  ⠸⣏⢯⣷⣖⣦⡀      \n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿      \n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏    ⣄⢸ "];
    for (const _0x77af75 of _0x1c80f3) {
      await new Promise(_0x40d3fb => setTimeout(_0x40d3fb, 0x5dc));
      await _0x125191.relayMessage(_0x3ae285, {
        'protocolMessage': {
          'key': _0x19567b.key,
          'type': 0xe,
          'editedMessage': {
            'conversation': _0x77af75
          }
        }
      }, {});
    }
  } catch (_0x61a6ba) {
    console.log(_0x61a6ba);
    _0x30a5f5("❌ *Error!* " + _0x61a6ba.message);
  }
});


cmd({
pattern: "boom",
desc: "Send a custom message any number of times (owner only).",
category: "main",
react: "💣",
filename: __filename
},
async (conn, mek, m, { from, args, senderNumber, isOwner, reply }) => {
try {
if (!isOwner) {
return reply('*📵 ONLY OWNER COMMAND*');
}
const count = parseInt(args[0]) || 10;
const customText = args.slice(1).join(' ') || 'Boom!';
for (let i = 0; i < count; i++) {
await conn.sendMessage(from, { text: customText });
}
reply(`✅ Sent ${count} messages.`);
} catch (e) {
console.log(e);
reply(`${e}`);
 }
});




//====================================================================================
cmd({
    pattern: "loli",
    alias: ["imgloli"],
    react: '🥰',
    desc: "Download anime loli images.",
    category: "anime",
    use: '.loli',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let res = await axios.get('https://api.lolicon.app/setu/v2?num=1&r18=0&tag=lolicon')
let wm = `
╔══════════════●●►
*\`LOLI_IMG_KD_PANTA_00\`*
╚══════════════●●►`
await conn.sendMessage(from, { image: { url: res.data.data[0].urls.original }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})

//=====================================================================
cmd({
    pattern: "waifu",
    alias: ["imgwaifu"],
    react: '🥰',
    desc: "Download anime waifu images.",
    category: "anime",
    use: '.waifu',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.pics/sfw/waifu')
let wm = `
╔══════════════●●►
*\`WAIFU_IMG_KD_PANTA_00\`*
╚══════════════●●►`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})

//================================================================
cmd({
    pattern: "neko",
    alias: ["imgneko"],
    react: '🥰',
    desc: "Download anime neko images.",
    category: "anime",
    use: '.neko',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.pics/sfw/neko')
let wm = `
╔══════════════●●►
*\`NEKO_IMG_KD_PANTA_00\`*
╚══════════════●●►`
await conn.sendMessage(from, { image: { url: res.data.url  }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})
  
//=====================================================================
/*
cmd({
    pattern: "megumin",
    alias: ["imgmegumin"],
    react: '🥰',
    desc: "Download anime megumin images.",
    category: "anime",
    use: '.megumin',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.pics/sfw/megumin')
let wm = `
*╭───────────╶╶╶╾⦁⦂⦁*
> *MEGUMIN_KD_PANTA_00*
*╰───────────╶╶╶╾⦁⦂⦁*`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})
*/
//================================================================
/*
cmd({
    pattern: "maid",
    alias: ["imgmaid"],
    react: '🥰',
    desc: "Download anime maid images.",
    category: "anime",
    use: '.maid',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.im/search/?included_tags=maid')
let wm = `
*╭───────────╶╶╶╾⦁⦂⦁*
> *MADI_KD_PANTA_00*
*╰───────────╶╶╶╾⦁⦂⦁*`
await conn.sendMessage(from, { image: { url: res.data.images[0].url  }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})
*/
//=====================================================================
cmd({
    pattern: "awoo",
    alias: ["imgawoo"],
    react: '🥰',
    desc: "Download anime awoo images.",
    category: "anime",
    use: '.awoo',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.pics/sfw/awoo')
let wm = `
╔══════════════●●►
*\`AWOO_IMG_KD_PANTA_00\`*
╚══════════════●●►`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})











cmd({
    pattern: "anime1",
    desc: "Fetch a random anime boy image.",
    category: "fun",
    react: "🥰",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '*`🥰ANIME IMAGE 01`*\n\n*•────────────╴╴╴•⟢*\n*`© POWER BY KD PANTA`*\n*•────────────╴╴╴•⟢*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Boy image*: ${e.message}`);
    }
});

cmd({
    pattern: "anime2",
    desc: "Fetch a random anime boy image.",
    category: "fun",
    react: "🥰",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '🥰*`ANIME IMAGE 02`*\n\n*•────────────╴╴╴•⟢*\n*`© POWER BY KD PANTA`*\n*•────────────╴╴╴•⟢*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Boy image*: ${e.message}`);
    }
});

cmd({
    pattern: "anime3",
    desc: "Fetch a random anime boy image.",
    category: "fun",
    react: "🥰",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '*`🥰ANIME IMAGE 03`*\n\n*•────────────╴╴╴•⟢*\n*`© POWER BY KD PANTA`*\n*•────────────╴╴╴•⟢*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Boy image*: ${e.message}`);
    }
});

cmd({
    pattern: "anime4",
    desc: "Fetch a random anime boy image.",
    category: "fun",
    react: "🥰",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '*`🥰ANIME IMAGE 04`*\n\n*•────────────╴╴╴•⟢*\n*`© POWER BY KD PANTA`*\n*•────────────╴╴╴•⟢*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime boy image*: ${e.message}`);
    }
});
