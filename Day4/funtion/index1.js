// //함수
// //자바스크립트에서는 함수를 일급 객체로 취급함 ->

// //array , object, function
// const a = [];
// const b = {};
// const c = function (a, b) {
//   //함수 이름 c로 정의하겠다는 의미
//   return a + b;
// };
// const d = c(1, 2); //3

// const subway = {
//   name: "부평점 서브웨이",
//   sale: 0,
//   sellBread: function () {
//     this.sale = this.sale + 1000; // this는 나를 가리킴 -> 이 시점에서는 subway를 말함
//   },
//   printSale: function () {
//     console.log(this.sale);
//   },
// };

// subway.sellBread();
// subway.sellBread();
// subway.sellBread();
// subway.printSale(); //3000

const baskinRabbins = {
  icecreams: [
    { name: "민트초코", price: 2000 },
    { name: "엄마는외계인", price: 25000 },
    { name: "초코나무숲", price: 4000 },
  ],
  sale: 0,
  sellIcecream: function (num) {
    if (this.icecreams[num] == undefined) console.log("그런 번호 없습니다.");
    else {
      console.log(`${this.icecreams[num].name} 아이스크림이 판매되었습니다.`);
      this.sale = this.sale + this.icecreams[num].price;
    }
  },
  printSale: function () {
    console.log(`현재 매출 : ${this.sale}`);
  },
  addIcecream: function (name, price) {
    this.icecreams.push({ name: name, price: price });
  },
};

baskinRabbins.sellIcecream(0);
baskinRabbins.sellIcecream(2);
baskinRabbins.addIcecream("asd", 3000);
baskinRabbins.sellIcecream(3);

baskinRabbins.printSale();
