//1. MBTI 물어보고 외향인지 내향인지 알럿 나타내기
// const mbti = prompt("당신의 성향은?");
// if (mbti.includes("E") || mbti.includes("e")) alert("외향");
// else if (mbti.includes("I") || mbti.includes("i")) alert("내향");

// 정답;
const mbti = prompt("mbti 무엇?");
const first = mbti.slice(0, 1).toUpperCase();
const second = mbti.slice(1, 2).toUpperCase();

const third = mbti.slice(2, 3).toUpperCase();
const fourth = mbti.slice(3, 4).toUpperCase();
const mbtiobj = {
  E: "외향적",
  I: "내향적",
  S: "감각적",
  N: "직관적",
  T: "이성적",
  F: "감성적",
  J: "계획적",
  P: "즉흥적",
};
alert(
  `${mbtiobj[first]} ${mbtiobj[second]} ${mbtiobj[third]} ${mbtiobj[fourth]} 성향이시군요`
);

// const mbti = prompt("mbti 무엇?");
// const first = mbti.slice[0].toUpperCase();
// const second = mbti.slice[1].toUpperCase();

// const third = mbti.slice[2].toUpperCase();
// const fourth = mbti.slice[3].toUpperCase();
// const mbtiobj = {
//   E: "외향적",
//   I: "내향적",
//   S: "감각적",
//   N: "직관적",
//   T: "이성적",
//   F: "감성적",
//   J: "계획적",
//   P: "즉흥적",
// };
// alert(
//   `${mbtiobj[first]} ${mbtiobj[second]} ${mbtiObj[third]} ${mbtiObj[fourth]}`
// );

//2. 유저에게 이메일을 입력 받고 타당한 이메일인지 확인하기
//@, .com || .net, namver kakao yahoo paran, 3가지 포함해야함
// const email = prompt("당신의 이메일은?");
// if (email.includes("@")) {
//   alert("@이 빠졌습니다");
// } else if (email.includes(".com") || email.includes(".net")) {
//   alert(".com .net이 포요함이 되어 있어야 합니다.");
// } else if (
//   email.includes("namver") ||
//   email.includes("kakao") ||
//   email.includes("yahoo") ||
//   email.includes("paran")
// ) {
//   alert("namver kakao yahoo paran 중 하나의 도메인을 사용해야합니다.");
// } else alert("이메일 완성!!");
