// 1번
const food = prompt("좋아하는 음식?");
const place = prompt("최근 갔던 장소");
window.alert(`최근에 갔던 ${place}에서 ${food}을 먹고 싶어요!`);
console.log(`1번 최근에 갔던 ${place}에서 ${food}을 먹고 싶어요!`);

// 2번
const height = prompt("키는?");
const weight = prompt("몸무게는?");
const bmi = Number(weight) / (Number(height) * Number(height));
window.alert(`${bmi}`);
console.log(`2번 ${bmi}`);

// 3번
const exchange_rate = prompt("오늘의 환율은?");
const money_exchange = prompt("환전 금액");
const won = Number(exchange_rate) * Number(money_exchange);
window.alert(`${won}`);
console.log(`3번 ${won}`);

//4번
const quote = prompt("현제 BTC 시세는?");
const btc_exchange = prompt("환산할 BTC");
const btc = Number(quote) * Number(btc_exchange);
window.alert(`${btc}`);
console.log(`4번 ${btc}`);
