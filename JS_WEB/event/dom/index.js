const h1 = document.createElement("h1");
h1.innerText = "고기싸롱 어서오고";
//css 입혀주는 것
h1.style.color = "red";
document.body.appendChild(h1);

//meats를 버튼에 넣어랏!
const meats = ["삼겹살", "목살", "돼지갈비", "양념갈비"];

meats.map((x, i) => {
  const btn = document.createElement("button");
  btn.innerText = x;
  document.body.appendChild(btn);
  btn.addEventListener("click", () => {
    alert(`${x}`);
  });
  i % 2
    ? (btn.style.backgroundColor = "blue")
    : (btn.style.backgroundColor = "red");
});

// //forEach : 스캔
// meats.forEach((x, i) => {
//   const btn = document.createElement("button");
//   btn.innerText = x;
//   document.body.appendChild(btn);
// });
