const discord = require("discord.js");
const config = require("./config.json");
const client = new discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

app.on('messageReactionRemove', (msg, user) => {
    let emojiName = msg.emoji.name;
    console.log(`${emojiName}가 삭제되었습니다.`);
});
 
 app.on('messageReactionAdd', (msg, user) => {
     let Ddabong = (msg.emoji.name == '👍') ? '따봉' : '아님';
     console.log(`emoji ${Ddabong}, test : ${msg.emoji.name}`);
});

client.login(config.BOT_TOKEN);