module.exports.config = {
  name: "bot",
  version: "2.0.0",
  hasPermission: 0,
  credits: "NK Naiem Khan",
  description: "Stylish Facebook profile link",
  commandCategory: "other",
  usages: "bot",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event }) {
  const message = {
    body: `✨━━━━━━━━━━━━━━━✨
🌐 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 𝗣𝗿𝗼𝗳𝗶𝗹𝗲  
👑 👉 NK Naiem Khan  
✨━━━━━━━━━━━━━━━✨`,
    mentions: [{
      tag: "👉 NK Naiem Khan",
      id: "61565096330972"
    }]
  };
  api.sendMessage(message, event.threadID, event.messageID);
};
