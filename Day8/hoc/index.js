const arr = [1, 3, 5, 7, 9];

//i는 순번
arr.map((x) => x + 1);

//0,1000까지 배열 만들기 -> 1001개의 배열을 만들고 0으로 채운 다음 순번으로 채운다
const arr1 = Array(1001)
  .fill(0)
  .map((x, i) => i);
console.log(arr1);

//배열 5의 배수 0-100까지 -> 101개의 배열을 만들고 0으로 채운 다음 순번의 5의 배수로 채운다
// 방법1
const arr2 = Array(101)
  .fill(0)
  .map((x, i) => i * 5);
console.log(arr2);
// 방법2
const arr3 = Array(101)
  .fill(0)
  .map((x, i) => i)
  .filter((x) => x % 5 == 0);
console.log(arr3);

//0-100까지 있는 배열에 3의 배수는 쥐, 5의 배수는 돼지, 15의 배수는 토끼가 나오도록
const arr4 = Array(101)
  .fill(0)
  .map((x, i) => i)
  .map((x) => {
    if (x % 15 == 0) x = "토끼";
    else if (x % 5 == 0) x = "돼지";
    else if (x % 3 == 0) x = "쥐";
    // else i;
    return x;
  });
console.log(arr4);

//1900-2025년까지의 띠를 배열로 작성
//예시)[연도: 1900 띠:쥐], [연도: 1991, 띠: 소]

// const arr5 = Array(2026)
//   .fill(0)
//   .map((x, i) => i)
//   .filter((x) => x >= 1900)
//   .map((x, i) => {
//     if (x % 12 == 0) i = "원숭이";
//     else if (x % 12 == 1) i = "닭";
//     else if (x % 12 == 2) i = "개";
//     else if (x % 12 == 3) i = "돼지";
//     else if (x % 12 == 4) i = "쥐";
//     else if (x % 12 == 5) i = "소";
//     else if (x % 12 == 6) i = "호랑이";
//     else if (x % 12 == 7) i = "토끼";
//     else if (x % 12 == 8) i = "용";
//     else if (x % 12 == 9) i = "뱀";
//     else if (x % 12 == 10) i = "말";
//     else if (x % 12 == 11) i = "양";

//     return {
//       연도: x,
//       띠: i,
//     };
//   });

const makeZondiac = (to, from) => {
  const zondiac = {
    0: "원숭이",
    1: "닭",
    2: "개",
    3: "돼지",
    4: "쥐",
    5: "소",
    6: "호랑이",
    7: "토끼",
    8: "용",
    9: "뱀",
    10: "말",
    11: "양",
  };
  return Array(from - to)
    .fill(0)
    .map((v, i) => i + to)
    .map((v) => {
      return { 연도: v, 띠: zondiac[v % 12] };
    });
};

const result = makeZondiac(1000, 3000);
console.log(result);
