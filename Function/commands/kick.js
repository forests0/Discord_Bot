module.exports = {
  name: "kick",
  execute(msg) {
    const user = msg.mentions.users.first();
    if (!user) {
      msg.reply("추방하시기 전에 멘션을 먼저 해주세요!");
    } else {
      const member = msg.guild.member(user);

      if (member) {
        member
          .kick(`${msg.author.username}님에 의해 서버에서 추방됨.`)
          .then((member) => {
            msg.reply(`${member.user.tag}님을 추방하였습니다.`);
          })
          .catch(console.error);
      } else {
        msg.reply("이 서버에 존재하지 않는 유저입니다.");
      }
    }
  },
};
