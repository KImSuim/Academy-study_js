//정수를 입력 -> (양의 짝.홀 / 0 / 음의 짝.홀 / 숫자 외는 오류로 출력)로 출력
// const num = +prompt("숫자 입력");
// if (num > 0) {
//   if (num % 2) {
//     alert("양의 홀수");
//   } else {
//     alert("양의 짝수");
//   }
// } else if (num < 0) {
//   if (num % 2) {
//     alert("음의 홀수");
//   } else {
//     alert("음의 짝수");
//   }
// } else if (num == 0) {
//   alert("0");
// } else {
//   alert("숫자 외 다른 것을 입력하였습니다.");
// }

// 정답
// const isPositive = num > 0;
// const isNegative = num < 0;
// const isOdd = num % 2 == 1;
// const isNegaOdd = num % 2 == -1;
// const isEven = num % 2 == 0;

// if (isPositive && isOdd) {
//   alert("양의 홀수");
// } else if (isPositive && isEven) {
//   alert("양의 짝수");
// } else if (isNegative && isNegaodd) {
//   alert("음의 홀수");
// } else if (isNegative && isEven) {
//   alert("음의 짝수");
// } else {
//   const result = num == 0 ? "0입니다." : "에러입니다.";
//   alert(result);
// }

// 몇년생인지 물어보고 알럿으로 띠 나타내기
const year = +prompt("몇년생");
if (year % 12 == 0) {
  alert("원숭이");
} else if (year % 12 == 1) {
  alert("닭");
} else if (year % 12 == 2) {
  alert("개");
} else if (year % 12 == 3) {
  alert("돼지");
} else if (year % 12 == 4) {
  alert("쥐");
} else if (year % 12 == 5) {
  alert("소");
} else if (year % 12 == 6) {
  alert("호랑이");
} else if (year % 12 == 7) {
  alert("토끼");
} else if (year % 12 == 8) {
  alert("용");
} else if (year % 12 == 9) {
  alert("뱀");
} else if (year % 12 == 10) {
  alert("말");
} else {
  alert("양");
}
