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
    case "clear":
      const clargs = message.content.split(" ").slice(1);
      const amount = clargs.join(" ");

      if (!amount)
        return message.reply(
          "You haven't given an amount of messages which should be deleted!"
        );
      if (isNaN(amount)) return message.reply("It's not number!");

      if (amount > 10)
        return message.reply("You can`t delete more than 10 messages at once!");
      if (amount < 1)
        return message.reply("You have to delete at least 1 message!");

      message.channel.fetchMessages({ limit: amount }).then((dmsg) => {
        message.channel.bulkDelete(dmsg).catch(console.log);
      });
  }
});

client.login(config.BOT_TOKEN);
