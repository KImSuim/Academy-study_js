// 연산자 (operator)

// 사칙(산술)연산자 : 더하기 빼기 나누기 곱하기
// 사칙(산술)연산자의 토큰 : + - * / %
const a1 = 1 + 2; //3
const a2 = 1 - 2; //-1
const a3 = 2 * 2; // 4
const a4 = 3 / 2; //1.5
const a5 = 3 % 2; //1
const a6 = 3 ** 2; //9

// 대입 연산
// 대입 연산 토큰 : =
const b = "아하하하";

//비교 연산
// > < >= <= ==(same) !=(diff) ===
//boolean타입으로 변환해줘야 함
const c1 = 5 > 3; // t
const c2 = 5 < 3; //f
const c3 = 5 >= 3; // t
const c4 = 5 <= 3; //f
const c5 = 10 == 9; //f
const c6 = 10 != 9; //t
const c7 = 10 === "10"; //f 타입까지 같은지 물어보는 연산자
const c8 = 10 === 10; //t

//논리 연산
//&&(nad), ||(or), !(not)
const d1 = 5 > 3 && 10 > 5 && 3 > 0; //t
const d2 = false || false || false || true; //t
const d3 = !false; //t
const d4 = !(5 <= 3) || !(3 > 10); // t
const d5 = 5 > 3 && 3 <= 10; // t

//삼한 연산
//조건 ? 값1 : 값2
const e1 = 5 > 3 ? "떡볶이" : "순대"; //떡볶이

//단항 연산
// +
const f = +"100"; // string -> number 변환
