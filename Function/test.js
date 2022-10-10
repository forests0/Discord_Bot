const discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const client = new discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const prefix = "!";
client.commands = new discord.Collection();

const commandfiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandfiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.find(
    (channel) => channel.name === "welcome"
  );
  if (!channel) return;
  channel.send(
    `Welcome to our server, @${member}! When you type !help, You can see the embed!`
  );
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setUsername('CHAT_Bot')
  client.user.setActivity("!help", { type: "WATCHING" });
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const comarg = message.content.slice(prefix.length).trim().split(/ +/);
  const commandname = args.shift().toLowerCase();
  const command = client.commands.get(commandname);
  const user = message.mentions.members;
  switch (commandname) {
    case "help":
      command.execute(message, comarg);
      break;
    case "avatar":
      message.channel.send(message.author.displayAvatarURL());
      break;
    case "emoji":
      command.execute(message, comarg);
      break;
    case "ping":
      //message.reply("pong!");
      command.execute(message, comarg);
      break;
    case "sum":
      command.execute(message, comarg);
      break;
    case "kick":
      command.execute(message, comarg);
      break;
    case "getroles":
      command.execute(message, comarg);
      break;
    case "gif":
      command.execute(message, comarg);
      break;
    case "userinfo":
      command.execute(message, comarg);
      break;
    default:
      break;
  }
});

client.login(config.BOT_TOKEN);
