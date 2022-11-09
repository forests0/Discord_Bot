module.exports = {
  name: "sum",
  execute(msg) {
    const prefix = "!";
    const commandBody = msg.content.slice(prefix.length);
    const args = commandBody.split(" ");
    const numArgs = args.map((x) => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => (counter += x));
    msg.channel.send(`합계 : ${sum}`);
    //뭔 이유인지 모르겠는데 sum 변수가 제 일을 하지 못하는 중, 수정해야됨
  },
};
