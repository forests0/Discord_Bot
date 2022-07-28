const discord = require("discord.js");
const config = require("./config.json");
const client = new discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const prefix = "!";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Just", { type: "WATCHING" });
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();
  
  switch (command) {
    case "play":
      if (message.member.voiceChannel) {
        message.member.voiceChannel
          .join()
          .then((connection) => {
            message.reply("playing music!");
            const dispatcher = connection.playFile("./music.mp3");
            dispatcher.on("end", (end) => {});
          })
          .catch(console.log);
      } else {
        message.reply("Nobody in the room!");
      }
      break;
    case "leave":
      if (message.member.voiceChannel) {
        message.member.voiceChannel.leave();
        message.reply("bye!");
      } else {
        message.reply("Who do you want to leave? It's not me?");
      }
      break;
  }
});

client.login(config.BOT_TOKEN);
