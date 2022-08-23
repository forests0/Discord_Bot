const discord = require("discord.js");

module.exports = {
  name: "help",
  execute(msg) {
    const embed = new discord.MessageEmbed()
      .setAuthor("헤이", msg.author.displayAvatarURL())
      .setTitle("봇 테스트입니다!")
      .setColor("B5F9FF")
      .setDescription("!avatar 을 하면 프로필 사진을 얻을 수 있습니다!")
      .setThumbnail(msg.author.displayAvatarURL())
      .addFields(
        { name: "사용 가능한 명령어 :", value: "!avatar", inline: true },
        { name: "!emoji", inline: true }
      )
      .addField("오", "음 이제 잘써지네", true)
      .setTimestamp(new Date())
      .setFooter("Made by anonymous");
    msg.channel.send(embed);
  },
};
