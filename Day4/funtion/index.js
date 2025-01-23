function plus100(x) {
  // 함수이름 : plus100
  return x + 100;
}

const a = plus100(500);
console.log(a); // 600

//함수 이름은 twice이고, x가 들어오면 두배를 돌려주는 함수 만들고, 실행까지 해서 콘솔로 나타냄

function twice(x) {
  return x * 2;
}

const b = twice(500);
console.log(b); // 1000

//luckybiky 함수 만들고, 어떠한 문구를 넣으면 콘솔에 마지막에 러키비키잖아 붙혀서 돌려주는 함수 만들기

function luckybiky(x) {
  return x + "러키비키잖아";
}

const c = luckybiky("나 완전");
console.log(c); // 나 완전러키비키잖아

//홀수 짝수 판별 함수 만들기
function discriminator(x) {
  return x % 2 ? "홀수" : "짝수";
}

const num = discriminator(124);
console.log(num);
