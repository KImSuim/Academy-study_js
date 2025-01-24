// 정규표현식 타입 => /문자열/
//i : 대소문자 무시하는 옵션임
const a = /hello/i;

//문자열에 "hello"가 있는지 물어봄 -> 있어서 true 출력
const b = a.test("HELLO world!");
console.log(b);

const str = "hello world!";
//match : 일치하는 부분이 있으면 배열로 바꿔줌
const result = str.match(a);
console.log(result);

const c = /a{2,4}/;
//aa or aaa or aaaa가 있는지 물어보는 것
console.log(c.test("a"));
console.log(c.test("aa"));
console.log(c.test("aaa"));
console.log(c.test("aaaa"));
console.log(c.test("aaaaa")); // aa aaa 라서 true
