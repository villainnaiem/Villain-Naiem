module.exports.config = {
 name: "owner",
 version: "1.0.3",
 hasPermssion: 0,
 credits: "NK Naiem Khan",
 description: "Owner information command with styled box + clickable name + premium design",
 commandCategory: "Information",
 usages: "",
 cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
 const ownerInfo = 
`🌟──────────🌟──────────🌟
        👑 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 👑
🌟──────────🌟──────────🌟

✨ 👤 𝗡𝗮𝗺𝗲 : 👉 NK Naiem Khan
✨ 🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲 : Naiem
✨ 🎂 𝗔𝗴𝗲 : 𝟭𝟴+
✨ 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : 𝗦𝗶𝗻𝗴𝗹𝗲
✨ 🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻 : 𝗦𝘁𝘂𝗱𝗲𝗻𝘁
✨ 📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : 𝗛𝗦𝗖
✨ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : Dhaka

🌟──────────🌟──────────🌟
        🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦 🔗
🌟──────────🌟──────────🌟

📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :  
👉 https://www.facebook.com/nk.naiem.khan.641816

💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 :  
👉 m.me/nk.naiem.khan.641816

📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :  
👉 https://wa.me/01908143017

✈️ 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 :  
👉 https://t.me/Naiem220

🌟──────────🌟──────────🌟
`;

 const mention = [{
   tag: "👉 NK Naiem Khan",
   id: "61565096330972" // আপনার UID
 }];

 return api.sendMessage({ body: ownerInfo, mentions: mention }, event.threadID, event.messageID);
};
