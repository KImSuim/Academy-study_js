//add 함수 x,y
function add(x, y) {
  return x + y;
}

//
function minus(x, y) {
  return x - y;
}

// hello 함수 : 이름이 들어오면 "~님 안녕" 돌려줌
function hello(name) {
  return `${name} + "님 안녕"`;
}

//tolength 함수  : 문자가 들어오면 "~문자 : 문자 길이" 돌려줌
function tolength(srt) {
  return `${srt} + "문자 : " + ${srt.length}`;
}

//double_three: x가 들어오면:"제곱의 세배" 돌려줌
function double_three(x) {
  return x ** 2 * 3;
}
//lunch : x가 들어오면 "점심메뉴 : ~ 입니다" 돌려줌
function lunch(menu) {
  return `"점심메뉴 : ${manu}입니다"`;
}

//allergy_test : 길 글에 [새우, 땅콩, 조개 등] 하나믜 단어가 포함되어 있으면 알러지 있다고 돌려줌 / 없으면 없다고 돌려줌
function allergy_test(str) {
  str.includes("새우") ||
  str.includes("땅콩") ||
  str.includes("조개") ||
  str.includes("새우")
    ? "알러지 있음"
    : "알러지 없음";
}

//threeToArrow 세개의 단어를 넣으면 배열로 돌려주는 함수
//고기, 야체,스프

function threeToArrow(a, b, c) {
  return [a, b, c];
}

//getIphone version, model, storage
function getIphone(a, b, c) {
  return { version: a, model: b, storage: c };
}

//몇도를 넣으면 -> 평각, 직각, 둔각, 예각 돌려주는 함수
// flat angle, right angle, obtuse angle, acute angle
//180°는 평각
//둔각은 크기가 90°보다 크고 180°보다 작은 각
//직각은 크기가 90°인 각,
//예각은 크기가 90°보다 작은 각,
function getAngle(x) {
  if (x == 180) return "flatAngle";
  else if (90 < x < 180) return "obtuseAngle";
  else if (90 == x) return "rightAngle";
  else if (90 > x) return "acuteAngle";
}

//어떠한 단어를 입력하고, 하나의 알파벳을 입력하면
//그 알파벳 기분으로 앞뒤로 쪼개서 앞의 단어를 대문자로 돌려줌
//icecream , r -> ICEC
function getStr(x, y) {
  return x.split(y)[0].toUpperCase();
}

//어떠한 단어를 입력하면 단어의 길이가 4-10 사이면 길이가 "적당" 아니면 "안적당" 돌려주는 함수
function isValid(x) {
  return 3 < x.length && x.length < 11 ? "적당" : "안적당";
}
