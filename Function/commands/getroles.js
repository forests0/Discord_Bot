module.exports = {
  name: "getroles",
  execute(msg) {
    const commandBody = msg.content.slice(prefix.length);
    const command = args.shift().toLowerCase();
    const args = msg.content.split(" ").slice(1);
    var roles = args.join(" ");
    if (!roles) msg.reply('Write the roles. I don\'t know what do you want!');
    switch(roles) {
      case 'basic' :
        msg.member.roles.add("1009659511717494854");
        break;
    }
    //msg.member.setNickname(`✓${msg.member.user.username}`);
    msg.reply("설정 완료!");
  },
};
