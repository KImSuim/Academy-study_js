//나의 아이디 : 상태
//구독한 채널 : 상태
//좋아요 눌었던 채널 : 행동
//구독하기 : 행동
//좋아요 누르기 : 행동

const youtube = {
  id: "suim",
  subscribeChannel: ["가", "나", "다"],
  likeChannel: ["fk", "sk", "ek"],
  subscribe: function (a) {
    this.subscribeChannel.push(a);
  },
  pushLike: function (b) {
    this.likeChannel.push(b);
  },
  printyoutube: function () {
    console.log(`${this.subscribeChannel}, ${this.likeChannel}`);
  },
};

youtube.subscribe("asdad");
youtube.pushLike("xzc");
youtube.printyoutube();
