module.exports.config = {
  name: "tag",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NK Naiem Khan",
  description: "Auto mention multiple times",
  commandCategory: "group",
  usages: "tag @mention <number>",
  cooldowns: 2
};

module.exports.run = async function({ api, event, args }) {
  if (!event.mentions || Object.keys(event.mentions).length === 0) {
    return api.sendMessage("❌ প্রথমে একজনকে mention দিন।", event.threadID, event.messageID);
  }

  let mentionID = Object.keys(event.mentions)[0];
  let mentionName = event.mentions[mentionID];
  let times = parseInt(args[args.length - 1]); // শেষ আর্গুমেন্ট সংখ্যা ধরে নিলাম

  if (isNaN(times) || times <= 0) {
    return api.sendMessage("❌ সঠিক সংখ্যা লিখুন।\n👉 উদাহরণ: tag @user 5", event.threadID, event.messageID);
  }

  let mentions = [];
  for (let i = 0; i < times; i++) {
    mentions.push({ id: mentionID, tag: mentionName });
  }

  let msg = mentions.map(m => m.tag).join(" ");
  api.sendMessage({ body: msg, mentions }, event.threadID);
};
