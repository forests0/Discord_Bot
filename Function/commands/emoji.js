const discord = require("discord.js");

module.exports = {
    name : 'emoji',
    execute(msg) {
        const emoji = new discord.MessageAttachment(
            "https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTVfMTE2/MDAxNTcxMTQ0MjIwODE4.Yd4D6HvDtIQ600HpJJJbadGBT8aVJ91nQ4OUp6jd7oYg.uvrak7O9UOuiIKfWDh7KG906yeEYBSptki2qdXw__YMg.PNG.azzi_01/01_.png?type=w800"
          );
          msg.channel.send(emoji);
    }
}

