//퀴즈
const fruits = [
  "peach",
  "mango",
  "strawberry",
  "apple",
  "orange",
  "mandarin",
  "plum",
  "persimmon",
  "fig",
];

//1. 문자 길이가 6글자 이상이면 💙 아니면 💔
const length = (str) => (str.length > 6 ? "💙" : "💔");
const newFruits1 = fruits.map(length);

//2. 문자길이를 두배 했을 때, 15보다 작으면 "과일이름 짧음" 아니면 "과일이름 김"
const lengthDouble = (str) =>
  str.length * 2 < 15 ? "과일이름 짧음" : "과일이름 김";
const newFruits2 = fruits.map(lengthDouble);

//3. 과일 이름 중에 k,b,s로 시작하는게 있으면 true 없으면 false
//startsWith : 첫 글자를 말함
const trueFalsekbs = (str) =>
  //   str.slice(0) == str.includes("k") ||
  //   str.slice(0) == str.includes("b") ||
  //   str.slice(0) == str.includes("s");
  //정답
  str.startsWith("k") || str.startsWith("b") || str.startsWith("s");
const newFruits3 = fruits.some(trueFalsekbs);

//4. 과일 이름 중에 길이가 모두 4-12글자 사이면 true 없으면 false
const length412 = (str) => 4 <= str.length && str.length <= 12;
const newFruits4 = fruits.every(length412);

//5. 과일 이름 중에 i,o,u가 있으면 ⭕️ 아니면 ❌ 바꾸기
const trueFalseiou = (str) =>
  str.includes("i") || str.includes("o") || str.includes("u") ? "⭕️" : "❌";
const newFruits5 = fruits.map(trueFalseiou);

//6. song을 배열로 바꾸고, 각각 문자 길이로 바꾼 다음에 문자 길이가 6글자 넘으면 💜 아니면 그대로 출력되는 함수
const song = `I, I just woke up from a dream
Where you and I had to say goodbye
And I don't know what it all means
But since I survived, I realized

Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night
Like it's the last night
Like it's the last night

If the world was ending
I'd wanna be next to you
If the party was over
And our time on Earth was through
I'd wanna hold you just for a while
And die with a smile
If the world was ending
I'd wanna be next to you

(Ooh, ooh)

Ooh, lost, lost in the words that we scream
I don't even wanna do this anymore
'Cause you already know what you mean to me
And our love's the only one worth fighting for

Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night
Like it's the last night
Like it's the last night

If the world was ending
I'd wanna be next to you
If the party was over
And our time on Earth was through
I'd wanna hold you just for a while
And die with a smile
If the world was ending
I'd wanna be next to you

Right next to you
Next to you
Right next to you
Oh-oh

If the world was ending
I'd wanna be next to you
If the party was over
And our time on Earth was through
I'd wanna hold you just for a while
And die with a smile
If the world was ending
I'd wanna be next to you
If the world was ending
I'd wanna be next to you

(Ooh, ooh)
I'd wanna be next to you`;

const newFruits6 = song
  .split(" ")
  .map((str) => (str.length > 6 ? "💜" : str))
  .join(" ");

// console.log(newFruits6);

// 메뉴 문제
const menu = [
  {
    name: "부대찌개",
    price: 13000,
    kcal: 700,
    ingredients: ["햄", "라면", "파", "두부", "김치", "콩"],
  },
  {
    name: "소고기죽",
    price: 4200,
    kcal: 200,
    ingredients: ["소고기", "밥", "물"],
  },
  {
    name: "샌드위치",
    price: 0,
    kcal: 400,
    ingredients: ["고구마", "참치", "빵", "치즈"],
  },
  {
    name: "해장국",
    price: 10000,
    kcal: 700,
    ingredients: ["뼈다귀", "시래기", "감자", "수제비"],
  },
];

//7. 메뉴에서 가격 10% 올린 배열 출력하는 함수
const upPrice10 = (x) => {
  x.price = x.price * 1.1;
  return x;
};
const a = menu.map(upPrice10);
console.log(a);

//8. 모든 메뉴에 설탕 추가, kcal +100 더해서 콘솔로 나타내기
const upSugger = (x) => {
  x.kcal = x.kcal + 100;
  x.ingredients.push("설탕");
  return x;
};
const b = menu.map(upSugger);
// console.log(b);

//9. 성분에 소고기 또는 햄 들어가면 거름
// const vegan = (x) => {
//   x.ingredients == x.ingredients.includes("소고기", "햄");
//   delete x;
//   return x;
// };

// 정답
const vegan = (x) => x.ingredients.every((v) => v != "햄" && v != "소고기");

const newMenu2 = menu.filter(vegan);
// console.log(newMenu2);

//스타벅스 문제
const starbucks = [
  {
    name: "카페모카",
    price: 6000,
    shots: 2,
    ingredients: ["커피콩", "물", "초코"],
  },
  {
    name: "레몬에이드",
    price: 4000,
    shots: 0,
    ingredients: ["레몬", "사이다", "시럽"],
  },
  {
    name: "아메리카노",
    price: 3000,
    shots: 2,
    ingredients: ["커피콩", "물"],
  },
  {
    name: "자몽허니블랙티",
    price: 4000,
    shots: 0,
    ingredients: ["자몽", "꿀", "홍차"],
  },
  {
    name: "화이트초코",
    price: 5000,
    shots: 1,
    ingredients: ["크림", "초코", "우유", "얼음"],
  },
];

//10. 카페인 없는 음료 콘솔로 나타내기
const numCaffeine = (x) => x.shots == 0;

const newCafe = starbucks.filter(numCaffeine);

//11. 커피대란발생!!! 성분에 커피콩이 들어가면 20%(1.2) 할인 들어감
const coffee = (x) => {
  x.price = x.ingredients.some((x) => x == "커피콩") ? x.price * 0.2 : x.price;
  return x;
};

const newCafe2 = starbucks.filter(coffee);

//성분에 꿀이 없으면 꿀 추가, 이름 뒤에 꿀❤️ 바뀌고, 가격 +300
const honey = (x) => {
  // 방법 1
  //   !x.ingredients.includes("꿀")
  //     ? (x.name = x.name + "꿀❤️") &&
  //       x.ingredients.push("꿀") &&
  //       (x.price = x.price + 300)
  //     : x;
  //   return x;
  // 방법 2
  x.name = x.ingredients.every((x) => x != "꿀") ? x.name + "꿀❤️" : x.name;
  x.price = x.ingredients.every((x) => x != "꿀") ? x.price + 300 : x.price;
  // "x.ingredients=..."하고 push를 하게 되면 배열에 몇개가 있는건지 나와서 "x = ..."해야함
  x = x.ingredients.every((x) => x != "꿀")
    ? x.ingredients.push("꿀")
    : x.ingredients;

  return x;
};

const newCafe3 = starbucks.filter(honey);

// console.log(newCafe3);

const teacher = {
  name: "저스틴비버",
  lectures: ["음악", "미술", "영어"],
  age: 25,
  nickname: "뜨또",
  money: "$9.15",
};

const newTeacher = { ...teacher, isMale: true }; //isMale 추가 (스프레드)
//
console.log(teacher.money.split("$")[1] * 1435.66);
