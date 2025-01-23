//자동차 이름        - 상태
//자동차 현재 속도    - 상태
//자동차 속도 올리기   - 행동
//자동차 속도 내리기   - 행동
//자동차 브레이크 밟기  - 행동

const carSpeed = {
  name: "lay",
  nowSpeed: 0,
  upSpeed: function (numup) {
    this.nowSpeed = this.nowSpeed + numup;
    console.log(`현재 속도는 ${this.nowSpeed}입니다.`);
  },
  downSpeed: function (numdown) {
    if (this.nowSpeed >= numdown) {
      (this.nowSpeed = this.nowSpeed - numdown),
        console.log(`현재 속도는 ${this.nowSpeed}입니다.`);
    } else
      console.log(
        `현재 속도는 ${this.nowSpeed}이러므로 속도를 내릴 수 없습니다.`
      );
  },
  // this.nowSpeed = this.nowSpeed ? this.nowSpeed -1 : 0;
  break: function () {
    this.nowSpeed = 0;
    console.log(`자동차가 멈췄습니다.`);
  },
};

carSpeed.upSpeed(50);
carSpeed.downSpeed(70);
carSpeed.upSpeed(50);
carSpeed.break();
