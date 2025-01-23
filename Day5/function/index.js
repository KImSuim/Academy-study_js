//1. cook이라는 함수를 만들고
// 콘솔 요리 시작
// 1. 콘솔 된장국
// 2. 콘솔 김치찌개
// 3. 콘솔 짜파게티
// 4. 콘솔 가자미튀김
// 5. 콘솔 비엔나소시지
// 6. 콘솔 라면
// 콘솔 요리 끝이 나오는 함수 만들기

const cook = (x) => {
  console.log("요리 시작!");
  if (x == 1) console.log("된장국 요리!");
  else if (x == 2) console.log("김치찌개 요리!");
  else if (x == 3) console.log("짜파게티 요리!");
  else if (x == 4) console.log("가자미튀김 요리!");
  else if (x == 5) console.log("비엔나소시지 요리!");
  else if (x == 6) console.log("라면 요리!");
  console.log("요리 시작!");
  //*return은 함수 아래에 넣어야 함!! 그래야 실행됨*
  return;
};

//cook 합성함수로 변환
const cook1 = (recipe) => {
  console.log("요리 시작!");
  recipe();
  console.log("요리 시작!");
  return;
};

const Soybean = () => {
  console.log("된장국");
};
const kimchiStew = () => {
  console.log("김치찌개");
};
const pasteSoup = () => {
  console.log("짜파게티");
};
const flounder = () => {
  console.log("가자미튀김");
};
const vienna = () => {
  console.log("비엔나소시지");
};
const ramen = () => {
  console.log("라면");
};

//2. skill 함수
//1. 불
//2. 얼음
//3. 번개

const skill = (ability) => {
  ability();
};

const ability = () => {
  console.log("불");
};
const ice = () => {
  console.log("얼음");
};
const lightning = () => {
  console.log("번개");
};

skill(lightning);
