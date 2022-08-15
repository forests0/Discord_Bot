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
    case "help":
      message.reply("It will help you....maybe");
      break;
    case "gif":
      const args = message.content.split(" ").slice(1);
      var no = args.join(" ");
      if (!no) no = "1";
      if (no == 2) {
        return message.reply("sorry.. this gif is too big. so I can\'t upload.");
        break;
      }
      if (isNaN(no) || no > 8) return message.reply("only number 1-8");
      var path = "./gif/";
      path = path.concat(no, ".gif");
      console.log(path);
      const attachment = new discord.MessageAttachment(path);
      message.channel.send(attachment);
      break;
    default:
      message.reply("It's not a funciton");
  }
});

client.login(config.BOT_TOKEN);
