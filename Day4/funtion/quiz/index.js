//메뉴 : 아아 4000, 라떼 4500, 유자차 4000
//매출 : 0
//판매기능 : 번호를 물어보고 판매되면 매출이 올라감
//메뉴추가 : 이름과 가격이 주어지면 메뉴에 추가

// const starbucks = {
//   coffee: [
//     { menu: 아아, price: 4000 },
//     { menu: 라떼, price: 4500 },
//     { menu: 유자차, price: 4000 },
//   ],
//   sale: 0,
//   sellIcecream: function (num) {
//     this.sale + this.coffee(num).price;
//   },
//   printSale: function () {
//     console.log(this.sale);
//   },
//   addIcecream: function (name, price) {
//     this.coffee.push[{ name, price }];
//   },
// };

// starbucks.sellIcecream[1];
// starbucks.printSale();
// starbucks.addIcecream("밀크티", 6000);
// starbucks.sellIcecream[3];
// starbucks.printSale();

const starbucks = {
  coffee: [
    { name: "아이스아메리카노", price: 4000 },
    { name: "라떼", price: 4500 },
    { name: "유자차", price: 4000 },
  ],
  sale: 0,
  sellService: function (num) {
    if (!this.coffee[num].name) console.log("없어용");
    else {
      console.log(`${this.coffee[num].name}이 팔렸습니다.`);
      this.sale = this.sale + this.coffee[num].price;
    }
  },
  add: function (a, b) {
    console.log(`${a}메뉴가 추가되었습니다.`);
    this.coffee.push({ name: a, price: b });
  },
};
