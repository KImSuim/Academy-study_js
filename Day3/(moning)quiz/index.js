// const bus1 = 1200;
// const bus2 = 2000;
// const bus3 = 1000;

// const busNum = prompt("노선의 종류 선택");
// const year = prompt("당신의 나이");

// if (7 >= year && yser < 65) {
//   alert("무료");
// } else if (8 <= year <= 19) {
//   if (busNum == 1) alert(bus1 / 3);
//   else if (busNum == 2) {
//     alert(bus2 / 3);
//   } else {
//     alert(bus3 / 3);
//   }
// } else {
//   if (busNum == 1) alert(`${bus1}`);
//   else if (busNum == 2) {
//     alert(`${bus2}`);
//   } else {
//     alert(`${bus3}`);
//   }
// }

//배열로 변환
// const bus = [1, 2, 3];
// const bus_price = [1200, 2000, 1000];

// const busNum = prompt("노선의 종류 선택");
// const year = prompt("당신의 나이");

// if (7 >= year && yser < 65) {
//   alert("무료");
// }
// //
// else if (8 <= year <= 19) {
//   if (busNum == bus[0]) alert(bus_price[0] / 3);
//   else if (busNum == bus[0]) {
//     alert(bus_price[1] / 3);
//   } else {
//     alert(bus_price[2] / 3);
//   }
// }
// //
// else {
//   if (busNum == bus[0]) alert(bus_price[0]);
//   else if (busNum == 2) {
//     alert(bus_price[1]);
//   } else {
//     alert(bus_price[2]);
//   }
// }

// 정답
const age = +prompt("나이 몇살");
const busType = +prompt("버스 타입 입력(1~3)");
const bus_data = ["시내버스", "광역버스", "마을버스"];
const bus_fee = [1200, 2000, 1000];
if (age <= 7 || 65 <= age) alert("무료입니다!");
else if (8 <= age && age <= 19)
  alert(
    `청소년 비용은 ${bus_data[busType - 1]}비용은 ${
      bus_fee[busType - 1]
    } * 0.7원 입니다`
  );
else
  alert(
    `일반 비용은 ${bus_datal[busType - 1]}비용은 ${
      bus_fee[busType - 1] * 1
    }원 입니다.`
  );
