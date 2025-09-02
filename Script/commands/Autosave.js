const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const archiver = require("archiver");

module.exports.config = {
  name: "autosave",
  version: "1.1.0",
  hasPermssion: 0,
  credits: "NK Naiem Khan",
  description: "গ্রুপে পাঠানো ছবি/ভিডিও/অডিও/ফাইল অটো সেভ করে + ZIP সিস্টেম",
  commandCategory: "system",
  usages: "autosave getzip",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event }) {
  try {
    if (event.type !== "message" || !event.attachments || event.attachments.length === 0) return;

    for (const attachment of event.attachments) {
      let fileUrl = attachment.url;
      let fileType = attachment.type;
      let fileExt = "";

      if (fileType === "photo") fileExt = ".jpg";
      else if (fileType === "video") fileExt = ".mp4";
      else if (fileType === "audio") fileExt = ".mp3";
      else fileExt = path.extname(fileUrl) || ".dat";

      let fileName = `${Date.now()}_${Math.floor(Math.random() * 9999)}${fileExt}`;
      let cachePath = __dirname + `/cache/`;

      if (!fs.existsSync(cachePath)) fs.mkdirSync(cachePath);

      let filePath = cachePath + fileName;

      const response = await axios.get(fileUrl, { responseType: "arraybuffer" });
      fs.writeFileSync(filePath, Buffer.from(response.data, "utf-8"));

      api.sendMessage(`✅ ফাইল সেভ হয়েছে: ${fileName}`, event.threadID, event.messageID);
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports.run = async function ({ api, event, args }) {
  try {
    if (args[0] === "getzip") {
      let cachePath = __dirname + `/cache/`;
      let zipPath = __dirname + `/cache/saved_files.zip`;

      if (!fs.existsSync(cachePath) || fs.readdirSync(cachePath).length === 0) {
        return api.sendMessage("❌ এখনো কোনো ফাইল সেভ হয়নি।", event.threadID, event.messageID);
      }

      let output = fs.createWriteStream(zipPath);
      let archive = archiver("zip", { zlib: { level: 9 } });

      archive.pipe(output);
      archive.directory(cachePath, false);
      await archive.finalize();

      output.on("close", () => {
        api.sendMessage(
          { body: "📦 সব ফাইল ZIP করে দিলাম:", attachment: fs.createReadStream(zipPath) },
          event.threadID,
          () => fs.unlinkSync(zipPath)
        );
      });
    } else {
      return api.sendMessage("ℹ️ ব্যবহার: autosave getzip (সব ফাইল ZIP আকারে পেতে)", event.threadID, event.messageID);
    }
  } catch (e) {
    console.log(e);
  }
};
