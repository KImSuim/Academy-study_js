// //1
const height = prompt("키는?");
const a = 140 < height ? "탑승가능" : "탑승불가";
window.alert(`${a}`);

// //2
const num = prompt("숫자입력");
const b = num % 2 == 0 ? "짝수" : "홀수";
alert(`${b}`);

// //3
const year = prompt("태어난 연도");
const c = 2026 - year > 19 ? "성인" : "미성년자";
alert(`${c}`);

//4
const h = prompt("몇초?");
const m = prompt("몇초?");
const s = prompt("몇초?");
const d = h * m * s;
alert(`${d}초`);

//5
const num1 = prompt("첫번째 숫자 입략");
const num2 = prompt("두번째 숫자 입략");
const e = num1 > num2 ? num1 : num2;
alert(`${e}`);
