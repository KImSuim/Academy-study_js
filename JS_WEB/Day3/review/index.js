//1. 원시적인 방법
//2. 반복되는 패턴 죽이기
//3. 코드가 하드코딩(=유연한 코드인지)이 아닌지

// const btn1 = document.querySelector(".btn1");
// const btn2 = document.querySelector(".btn2");
// const btn3 = document.querySelector(".btn3");

// const btn1Box = document.querySelector(".btn1-box");
// const btn2Box = document.querySelector(".btn2-box");
// const btn3Box = document.querySelector(".btn3-box");

// btn1.addEventListener("click", () => {
//   btn1Box.style.display = "block";
//   btn2Box.style.display = "none";
//   btn3Box.style.display = "none";
// });

// btn2.addEventListener("click", () => {
//   btn1Box.style.display = "none";
//   btn2Box.style.display = "block";
//   btn3Box.style.display = "none";
// });

// btn3.addEventListener("click", () => {
//   btn1Box.style.display = "none";
//   btn2Box.style.display = "none";
//   btn3Box.style.display = "block";
// });

const capital = document.querySelector("#capital");
const desc = document.querySelector("#desc");
const country = [
  { capital: "london", nation: "England" },
  { capital: "paris", nation: "France" },
  { capital: "tokyo", nation: "Japan" },
  { capital: "seoul", nation: "Korea" },
  { capital: "seoul", nation: "Korea" },
];

// country.forEach((v) => {
//   const nation = document.querySelector("#" + v.capital);
//   nation.addEventListener("click", () => {
//     capital.innerHTML = v.capital;
//     desc.innerHTML = `${v.capital} is the capital city of ${v.nation}`;
//   });
// });

country.forEach((v) => {
  const li = document.createElement("li");
  li.innerHTML = v.capital;
  li.addEventListener("click", () => {
    capital.innerHTML = v.capital;
    desc.innerHTML = `${v.capital} is the capital city of ${v.nation}`;
  });
  countryList.appendChild(li);
});
