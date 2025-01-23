//Date

const a = new Date();

const date = a.getDate();
const day = a.getDay();
const hour = a.getHours();
const month = a.getMonth();

console.log({ date, day, hour, month });

const iso = a.toISOString(); // 국제시간 -19하면 우리나라 시간이 됨
const locale = a.toLocaleString(); // = date + time
const date1 = a.toLocaleDateString();
const time = a.toLocaleTimeString();

console.log({ iso, locale, date1, time });

//Math

const absolute = Math.abs(-10); //절대값

const max = Math.max(3, 123, 255, 329, 120, 310); //최대값
const min = Math.min(3, 123, 255, 329, 120, 310); //최소값

const ceil = Math.ceil(3.14); //올림
const floor = Math.floor(3.9); //내림

const round = Math.round(3.4); //반올림

const ran = Math.random(); //0 <= x < 1

//0.7123 => 7.123 => 7
//0.2255 => 2.255 => 2
const test = Math.floor(Math.random() * 20);

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
