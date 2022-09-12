const discord = require("discord.js");

module.exports = {
  name: "help",
  execute(msg) {
    const embed = new discord.MessageEmbed()
      .setAuthor("헤이", msg.author.displayAvatarURL())
      .setTitle("봇 테스트입니다!")
      .setColor("B5F9FF")
      .setDescription("nodejs를 활용해 만든 챗봇입니다")
      .setThumbnail(msg.author.displayAvatarURL())
      .addFields(
        { name: "사용 가능한 명령어 :", value: "!avatar", inline: true },
        { name: "!emoji", value: "이모지 하나를 보여줍니다", inline: true },
        { name: "!getroles help", value:'역할을 부여해줍니다', inline: true },
        { name: "!gif (num)", value:'local에 있는 gif를 보여드립니다', inline: true },
        { name: "!userinfo", value:'user의 정보를 보여드립니다', inline: true },
        { name: "!sum", value:'값을 더해줍니다', inline: true }
      )
      .addField("오", "음 이제 잘써지네", true)
      .setTimestamp(new Date())
      .setFooter("Made by anonymous");
    msg.channel.send(embed);
  },
};
