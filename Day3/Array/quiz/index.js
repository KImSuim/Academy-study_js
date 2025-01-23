const fruits = ["딸기", "블루베리", "배", "애플", "바나나"];

//1. 딸기, 블루베리, 나머지 변수 만들기
// const strawberry = fruits[0];
// const Blueberry = fruits[1];
// const Pear = fruits[2];
// const Apple = fruits[3];
// const Banana = fruits[4];
//정답
const [a, b, ...rest] = fruits;
console.log(rest);

//2. 딸기, 배 가져와서 콘솔로 출력
// console.log(fruits(0) + fruits(2));
