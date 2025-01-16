// 1.
const name = window.prompt("이름?");
const num = window.prompt("몇살?");
const color = window.prompt("좋아하는 색?");
window.alert(
  `제 이름은 ${name}, 나이는 ${num}살이고, 좋아하는 색은 ${color}입니다!`
);

// 2.
const day = window.prompt("오늘의 날짜");
const schedule = window.prompt("오늘의 일정");
window.alert(`오늘은 ${day}, 계획하신 일정은 ${schedule}입니다.`);

// 3.
const num2 = window.prompt("숫자를 입력하세요");
const num3 = window.prompt("숫자를 입력하세요");
const sum = Number(num2) + Number(num3);
const subtraction = Number(num2) - Number(num3);
window.alert(`덧셈 : ${sum} 뺄셈 : ${subtraction}`);

// 4.
const price = window.prompt("떡볶이의 가격");
const count = window.prompt("떡볶이 몇인분 구매");
const food_sum = Number(price) * Number(count);
window.alert(`${food_sum}`);

// 5.
const Celsius = window.prompt("섭씨 온도");
const Fahrenheit = Number(Celsius) * (9 / 5) + 32;
window.alert(`${Fahrenheit}`);

// 6.
const square = window.prompt("정사각형 한 변의 길이");
const square_area = Number(square) * 2;
window.alert(`${square_area}`);
