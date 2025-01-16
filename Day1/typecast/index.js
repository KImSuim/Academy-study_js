//typecast는 타입 바꿔주는 문법
// string, number

//number화 시키는 방법
const num = Number("100");
console.log(num + 100);

//number가 아닌 다른 데이터 값을 넣으면 NaN으로 나옴
const num1 = Number("사과");
console.log(num1 + 100);

// String화 시키는 방법
const str = String(100 + 200);
console.log(str + "ml");
