const arr = [1, 3, 5, 7, 9];

//어떤 수가 들어오면 2배로 나오는 함수
const double2 = (num) => num * 2;

//어떤 수가 들어오면 더하기 10해서 나오는 함수
const plus10 = (num) => num + 10;

//어떤 수가 들어오면 제곱해서 10보다 작으면 "짜장면", 아니면 "탕수육"이 나오는 함수
const square = (num) => (num ** 2 < 10 ? "짜장면" : "탕수육");

//세제곱을 하고 자리수가 2자리 이하면 "커피", 아니면 "붕어빵"이 나오는 함수

//⭐️질문 : "숫자라서 langth를 쓰면 안되는 건가요?" -> 문자가 아니라서 숫자는 자릿수가 안됨
// const cubes = (num) => ((num ** 3).length < 3 ? "커피" : "붕어빵");
const cubes = (num) => (num ** 3 < 100 ? "커피" : "붕어빵");

//map : 요소들을 바꿔주는 함수
const newArr1 = arr.map(double2);
const newArr2 = arr.map(plus10);
const newArr3 = arr.map(square);
const newArr4 = arr.map(cubes);

// console.log(newArr4);

//3이면 true 아니면 false
const trueFalse3 = (num) => num == 3;

//정수 5보다 작으면 true 크면 false
const trueFalse5 = (num) => num < 5;

//짝수를 가지고 있으면 true 아니면 false
const evenOdd = (num) => num % 2 == 0;

//some : 요소중에 하나라도 있으면 true 없으면 false
const hasThree1 = arr.some(trueFalse3);
const hasThree2 = arr.some(trueFalse5);
const hasThree3 = arr.some(evenOdd);

// console.log(hasThree2);

//every : 요소중에 모두 있으면 true 없으면 false

//filter[입구컷]
const numArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isSixOver = (x) => (x) => 6;
const nuwArr3 = numArr2.filter(isSixOver);

//제곱했을 떄, 100보다 작으면 살리고 +10하기
const a = numArr2.filter((x) => x ** 2 < 100).map((x) => x + 10);

//string -> array
const strArr1 = "엄준식".split(" ");
const strArr2 = [..."엄준식"];

// array -> string
const arrStr1 = ["김밥", "천국"].join("");
