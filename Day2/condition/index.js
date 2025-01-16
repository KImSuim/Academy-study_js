//if문
// const username = prompt("이름이 뭐에요?");
// if (username == "엄준식") {
//   alert("살아있다");
// }

// 숫자 입력 받아 음수인지 양수인지 alert문으로 표시
const num = prompt("숫자 입력");
if (Number(num) > 0) {
  alert("양의 정수");
} else {
  alert("음의 정수");
}

const num1 = prompt("숫자 입력");
if (Number(num) > 0) {
  alert("양의 정수");
} else if (Number(num) == 0) {
  alert("0");
} else {
  alert("음의 정수");
}

//어떤 정수를 입력해서 홀,짝 알려주기
const num2 = prompt("숫자 입력");
if (Number(num2) % 2) {
  // 홀수이면 ture, 짝수이면 false
  alert("홀수");
} else {
  alert("짝수");
}
