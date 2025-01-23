// 화살표 함수로 구현
// 1. 어떠한 음식 이모지 넣으면 음식이모지 피자 나오는 함수 만들기
// ex) 🍱 -> 🍱피자

const pizz = (emoji) => {
  return `${emoji}피자`;
};

//2. 영단어를 넣으면 그 영단어를 3제곱해서 돌려주는 함수
// ex) kim -> kimkimkim
const outStr = (str) => str.repeat(3);

// 3. 원화를 넣으면 달러를 돌려주는 함수
const getWon = (won) => {
  return won * 0.0007;
};

//4. gotoAcademy 함수
// 시작 - 콘솔로 집에서 출발
//이동 수단 : 택시, 버스, 걷기, 자전거
// 끝 - 콘솔로 학원 도착

const gotoAcademy = (moving) => {
  console.log("집에서 출발");
  moving();
  console.log("학원 도착");
  return;
};

const taxi = () => console.log("택시");
const bus = () => console.log("버스");
const work = () => console.log("걷기");
const bick = () => console.log("자전거");

//4. makeBeverage 함수
// 시작 - 콘솔로 주문 받기
// 주문 - 커피 만들기(원두갈기, 원두 평평하게, 기계 넣기, 즙짜기) | 스무디(재료넣기 얼음넣기 갈기) | 차(티백넣기, 뜨거운 물 넣기, 후 불기)
// 끝 - 콘솔로 주문 완료

const makeBeverage = (order) => {
  console.log("주문 받기");
  order();
  console.log("주문 완료");
};

const coffee = () => {
  console.log("1. 원두갈기");
  console.log("2. 원두 평평하게");
  console.log("3. 기계 넣기");
  console.log("4. 즙짜기");
};
const smoothie = () => {
  console.log("1. 재료넣기");
  console.log("2. 얼음넣기");
  console.log("3. 갈기");
};
const tea = () => {
  console.log("1. 티백넣기");
  console.log("2. 뜨거운 물 넣기");
  console.log("3. 후 불기");
};

console.log(makeBeverage(coffee));
