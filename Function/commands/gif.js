const discord = require("discord.js");

module.exports = {
  name : 'gif',
  execute(msg) {
    const commandBody = msg.content.slice(prefix.length);
    const command = args.shift().toLowerCase();
    const args = msg.content.split(" ").slice(1);
      var no = args.join(" ");
      if (!no) no = "1";
      if (no == 2 || no == 9) {
        return msg.reply("sorry.. this gif is too big. so I can\'t upload it.");
      }
      if (isNaN(no) || no > 9) return msg.reply("only number 1-9");
      var path = "./gif/";
      path = path.concat(no, ".gif");
      const attachment = new discord.MessageAttachment(path);
      msg.channel.send(attachment);
  }
}