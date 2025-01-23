//result : 0
//add 할 수 있음 -> result + x
//minus -> result - x
//multiply -> result * x
//divide -> result % x (0 들어오면 에러)
//square -> 제곱할 수 있음
//clear  -> result 0으로 초기화
//showHistory -> history 결과 보여줌
//history : 계산할 때마다 기록에 남음

const calculator = {
  result: 0,
  history: [],
  pushHistory: function () {
    this.history.push(this.result);
  },
  showHistory: function () {
    console.log(`${this.history}`);
  },
  add: function (x) {
    this.result = this.result + x;
    this.pushHistory();
  },
  minus: function (x) {
    this.result = this.result - x;
    this.pushHistory();
  },
  multiply: function (x) {
    this.result = this.result * x;
    this.pushHistory();
  },
  divide: function (x) {
    if (x == 0) {
      console.log("에러");
      this.history.push("에러");
    } else {
      this.result / x;
      this.pushHistory();
    }
  },
  square: function (x) {
    this.result = this.result ** x;
    this.pushHistory();
  },
  clear: function (x) {
    this.result = 0;
    this.pushHistory();
  },
};

calculator.add(10);
calculator.showHistory();
calculator.minus(4); //6
calculator.showHistory();
calculator.multiply(2); //12
calculator.showHistory();
calculator.divide(0); //error
calculator.showHistory();
calculator.divide(2); //6
calculator.showHistory();
calculator.square(3); //36
calculator.showHistory();
calculator.multiply(2); //72
calculator.showHistory();
calculator.divide(2); //36
calculator.showHistory();
calculator.clear(); //0
calculator.showHistory();
// console.log(calculator.history[6]);
