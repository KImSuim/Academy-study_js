//커피메뉴 배열로 선언
const menu = ["아메리카노", "라떼", "바닐라"];
// 배열은 "0번부터 번호" 샘! 1부터 아님!!!!!
console.log(menu[1]); // 라떼

// 배열안에 배열 넣을 수 있음
const test = [100, false, "지각", ["아메리카노", "라떼", "바닐라"]];
//축구선수 배열로 선언
const sccoer = ["손층민", "황희찬", "이강인", "김민재"];

//배열 관련된 연산자
//1. indexing 연산자 (=꺼내기)
const test1 = [menu, sccoer];
// ["아메리카노", "라떼", "바닐라"]
// ["손층민", "황희찬", "이강인", "김민재"]
console.log(test1[0][2]); // 바닐라
console.log(test1[1][1]); // 황희찬

//2.Destructuring 연산자 (=분해)
const test2 = [...menu, ...sccoer];
// ["아메리카노", "라떼", "바닐라", "손층민", "황희찬", "이강인", "김민재"]
console.log(test2);

//3.Rest 연산자
const [son, ...rest] = sccoer; // ["손층민", "황희찬", "이강인", "김민재"];
console.log(son); //손흥민
console.log(rest); //황희찬, 이강인, 김민재

const [son1, rest1] = sccoer;
console.log(son1); // 손흥민
console.log(rest1); // 황희찬

//4. add 및 update 연산자
sccoer[4] = "박지성";
sccoer[1] = "씨찬이형";
console.log(sccoer);

//5. delete 연산자 (=삭제)
delete sccoer[3];
console.log(sccoer); //"손층민", "씨찬이형", "이강인", "박지성"
