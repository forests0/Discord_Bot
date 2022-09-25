module.exports = {
  name: "getroles",
  execute(msg) {
    const args = msg.content.split(" ").slice(1);
    var roles = args.join(" ");
    if (!roles) msg.reply('Write the roles. If you don\'t know what is the roles, type \'!getroles help\'.');
    switch(roles) {
      case 'help' :
        msg.channel.send('```roles : basic | intermediate | advanced || You type !getroles (rolename)```')
        break;
      case 'basic' :
        msg.member.roles.add("1009659511717494854");
        msg.reply("설정 완료!");
        break;
      case 'intermediate' :
        msg.member.roles.add('1011077927925989426');
        msg.reply("설정 완료!");
        break;
      case 'advanced' :
        msg.member.roles.add('1011079971088896191');
        msg.reply("설정 완료!");
        break;
    }
    //msg.member.setNickname(`✓${msg.member.user.username}`);
    
  },
};
