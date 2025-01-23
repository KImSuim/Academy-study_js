//체력 : 100
//마나 : 100 -> 스킬을 쓸 때 소모하는 거
//레벨 : 1
//경험치 : 0 (경험치 100이 되면 레벨오름+0됨)
//단, 매직클로와 텔레포트는 마나가 충분할 때 가능
//매직클로 : 마나 -10 달고, 매직클로 발동! (1번 경험치 10 오름)
//텔레포트 : 마나 -50 달고, 텔레포트 발동! (2번 경험치 50 오름)
//포션마시기 : 체력, 마나 50 충전

// const magician = {
//   hp: 100,
//   mp: 100,
//   lv: 1,
//   exp: function (expVolume) {
//     if (expVolume / 100 > 1)
//       (this.exp = 0), (this.lv = this.lv + parseInt(expVolume / 100));
//     else this.exp;
//   },
//   mc: function (a) {
//     a < 0 ? console.log("매직클로 발동 안됨") : (this.mp = this.mp - 10),
//       (this.exp = this.exp + 10);
//   },
//   tp: function (b) {
//     b < 0 ? console.log("텔레포트 발동 안됨") : (this.mp = this.mp - 50),
//       (this.exp = this.exp + 50);
//   },
//   drinkpostion: function (c) {
//     c < 0 ? console.log("포션이 필요함") : (this.hp = this.hp + 50),
//       (this.mp = this.mp + 50);
//   },
//   printSale: function () {
//     console.log(
//       `현재 체력 : ${this.hp}, 현재 마나 : ${this.mp}, 현제 레벨 : ${this.lv}, 경험치 : ${this.exp}`
//     );
//   },
// };

//정답
const magician = {
  hp: 100,
  mana: 100,
  level: 1,
  exp: 0,
  //solid 법칙이 뭔지 찾아보기
  getExp: function (exp) {
    this.exp = this.exp + exp;
    if (this.exp >= 100) {
      this.level = this.level + 1;
      this.exp = this.exp - 100;
    }
    console.log(`레벨 없 현제 레벨 ${this.level}`);
  },
  magicClaw: function () {
    if (this.mana < 10) {
      console.log(`현제 마나 ${this.mana}이므로 마나가 부족합니다.`);
    } else {
      this.mana = this.mana - 10;
      this.getExp(10);
      console.log(`매직 클로 발동`);
    }
  },
  telePort: function () {
    if (this.mana < 50) {
      console.log(`현제 마나 ${this.mp}이므로 마나가 부족합니다.`);
    } else {
      this.mana = this.mana - 50;
      this.getExp(50);
      console.log(`텔레포트 발동`);
    }
  },
  drinkPostion: function () {
    this.hp = this.hp + 50;
    this.mp = this.mp + 50;
    console.log(
      `포션을 마십니다. 현제 체력 : ${this.hp} 현재 마나 : ${this.mana}`
    );
  },
  printSale: function () {
    console.log(
      `현재 체력 : ${this.hp}, 현재 마나 : ${this.mp}, 현제 레벨 : ${this.lv}, 경험치 : ${this.exp}`
    );
  },
};
