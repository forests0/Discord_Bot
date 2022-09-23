const discord = require("discord.js");

module.exports = {
  name: "emoji",
  execute(msg) {
    const args = msg.content.split(" ").slice(1);
    var no = args.join(" ");
    if (!no) no = "1";
    if (no == 1) {
      const emoji = new discord.MessageAttachment(
        "https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTVfMTE2/MDAxNTcxMTQ0MjIwODE4.Yd4D6HvDtIQ600HpJJJbadGBT8aVJ91nQ4OUp6jd7oYg.uvrak7O9UOuiIKfWDh7KG906yeEYBSptki2qdXw__YMg.PNG.azzi_01/01_.png?type=w800"
      );
      msg.channel.send(emoji);
      return ;
    }
    if (isNaN(no) || no > 8) return msg.reply("only number 1-8");
    var path = "./emoji/";
    path = path.concat(no, ".png");
    if (!path) path.concat(no, ".jpg");
    const attachment = new discord.MessageAttachment(path);
    msg.channel.send(attachment);
  },
};
