const coffee = "americano";
console.log(coffee.includes("can"));

// 문제1) 유저에게 아이디를 프롬프트 입력 받고 / @,it 모두 포함 시 합격! // 아니면 불합격
const user_id = prompt("id 입략헤주세요");
// if (user_id.includes("@") && user_id.includes("IT")) alert("합격");
// else alert("불합격");
// 정답
user_id.includes("@") && user_id.includes("IT")
  ? alert("합격")
  : alert("불합격");

"choco".toUpperCase(); //대문자화
"choco".toLowerCase(); //소문자화

// 문제2) 유저에게 단어를 입력받고, 소문자이면 대문자 출력, 대문자면 소문자 출력
const word = prompt("단어 입력");
// word.includes(word.toUpperCase())
//   ? alert(`${word.toLowerCase()}`)
//   : alert(`${word.toUpperCase()}`);
// 정답
alert(word == word.toUpperCase() ? word.toLowerCase() : word.toUpperCase());

const a = "ice".repeat(3); //ice ice ice (_번 반복해서 출력)
"americano".replaceAll("a", "k"); //kmerickno (_글자로 변환해서 출력)
"icecream".slice(1, 4); //cec (자른 거만 출력 - 1-3까지 출력)
"icecream".length; //7 (글자 길이 출력)

// 문제 3) 유저에게 만들고 싶은 아이디를 물어보기 조건3가지 모두 통과하면 "아이디 완성" 알럿창 나오기

// 조건 1. 아이디의 길이가 4-16글자 사이 | 틀리면 - 아이디 길이가 유효하지 않습니다.
// 조건 2. !,@,#,& 분 하나의 특수문자 들어가야 함 | 틀리면 - 반드시 특수문자 (!,@,#,&) 하나 포함해야 합니다!
// 조건 3. 마지막 글자가 알파벳 대문자로 끝나야함 | 틀리면 - 마지막 알파벳은 무조건 대문자여야 합니다.

const user_make_id = prompt("만들고 싶은 아이디 적으세요!");
if (4 <= user_make_id.length && user_make_id.length <= 16) {
  if (
    user_make_id.includes("!") ||
    user_make_id.includes("@") ||
    user_make_id.includes("#") ||
    user_make_id.includes("&")
  ) {
    if (user_make_id.slice(user_make_id.length) == user_make_id.toUpperCase()) {
      alert("아이디 완성");
    } else alert("마지막은 무조건 알파벳 대문자여야 합니다.");
  } else alert("반드시 특수문자 (!,@,#,&) 하나 포함해야 합니다!");
} else alert("아이디 길이가 유효하지 않습니다.");
