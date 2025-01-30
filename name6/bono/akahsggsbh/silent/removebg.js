const { File } = require('megajs');
const fs = require('fs');
const fileType = require("file-type");
const { igdl } = require('ruhend-scraper');
const axios = require('axios');
const config = require('../config');
const {cmd , commands} = require('../command')
const path = require('path');
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k, removebg,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require('../lib/functions');

const commandDetails = {
  pattern: "removebg",
  react: "✂️",
  alias: ["rb"],
  category: "convert",
  use: ".removebg <reply image>",
  filename: __filename
};

cmd(commandDetails, async (bot, message, args, { from, reply, quoted }) => {
  try {
    const { image2url } = require("@dark-yasiya/imgbb.js");
    const fileType = require("file-type");
    const fs = require("fs");

    const isViewOnce = quoted ? quoted.type === "viewOnceMessage" : false;
    const isImageMessage =
      quoted ? quoted.type === "imageMessage" || (isViewOnce && quoted.msg.type === "imageMessage") : false;

    if (message.type === "imageMessage" || isImageMessage) {
      const randomName = getRandom(""); 
      const imageBuffer = isImageMessage ? await quoted.download(randomName) : await message.download(randomName);

      const fileTypeInfo = await fileType.fromBuffer(imageBuffer);
      if (!fileTypeInfo || (fileTypeInfo.ext !== "jpg" && fileTypeInfo.ext !== "png")) {
        return reply("Only JPG or PNG images are supported!");
      }

      const filePath = `./${randomName}.${fileTypeInfo.ext}`;
      await fs.promises.writeFile(filePath, imageBuffer);

      const uploadedImage = await image2url(filePath);
      const imageUrl = await removebg(uploadedImage.result.url);

      await bot.sendMessage(
        from,
        {
          image: { url: imageUrl },
          caption: "*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*\n"
        },
        { quoted: message }
      );

      await fs.promises.unlink(filePath);
    } else {
      reply("⚠️ Please reply to an image message.");
    }
  } catch (error) {
    console.error("Error:", error);
    reply("❌ An error occurred while processing the image.");
  }
});

const img2UrlCommand = {
  pattern: "img2url",
  react: "🔗",
  alias: ["tourl", "imgurl", "telegraph", "imgtourl"]
};

function helperFunction(param1, param2, param3, param4, param5) {
  return someOtherFunction(param4 - 0xe8, param3);
}

img2UrlCommand.category = "convert";
img2UrlCommand.use = ".img2url <reply image>";
img2UrlCommand.filename = __filename;

cmd(img2UrlCommand, async (context, args, utils, { reply, quoted }) => {
  try {
    const { image2url } = require("@dark-yasiya/imgbb.js");
    const isViewOnceMessage = quoted ? quoted.type === "viewOnceMessage" : false;
    const isImageMessage = quoted
      ? quoted.type === "imageMessage" || (isViewOnceMessage ? quoted.msg.type === "imageMessage" : false)
      : false;

    if (utils.type === "imageMessage" || isImageMessage) {
      const randomFileName = getRandom('');
      const downloadedFile = isImageMessage
        ? await quoted.download(randomFileName)
        : await utils.download(randomFileName);
      const fileType = await require('file-type').fromBuffer(downloadedFile);

      if (!fileType || (fileType.ext !== "jpg" && fileType.ext !== "png")) {
        return reply("Only JPG or PNG images are supported!");
      }

      const savedFilePath = `./${randomFileName}.${fileType.ext}`;
      await require('fs').promises.writeFile(savedFilePath, downloadedFile);

      const uploadedImageUrl = await image2url(savedFilePath);
      console.log(uploadedImageUrl);
      await reply(
        `*📌Generated Url:* \n${uploadedImageUrl.result.url}\n\n*•────────────╴╴╴•⟢*\n> *© POWER BY KD PANTA*\n*•────────────╴╴╴•⟢*`
      );

      await require('fs').promises.unlink(savedFilePath);
    } else {
      reply("⚠️ Please reply to an image message.");
    }
  } catch (error) {
    console.error("Error:", error);
    reply("❌ An error occurred while processing the image.");
  }
});
