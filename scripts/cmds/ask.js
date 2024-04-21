const axios = require('axios');

const Prefixes = [
  '/ai',
  'kr',
  'jr ',
  '+ai',
  'shinmon',
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("✌️🤑💎T¥$TEUR jr✊📱✌️ \n\n あなたの質問 .....?  ");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: `👁️‍🗨️🤝🤝ALTRUISTE MAN 🇮🇲 👁️
_______________________
${answer}
🔴`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
}
