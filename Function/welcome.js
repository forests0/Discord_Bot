const discord = require("discord.js");
const config = require("./config.json");
const client = new discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

bot.on('guildMemberAdd', member) = () => {
    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if(!channel) return;
    channel.send(
        `Welcome to our server, ${member}! When you type !help, You can see the embed!`
        )
}

client.login(config.BOT_TOKEN);