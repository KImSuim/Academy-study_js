const contents = document.querySelector("#contents");
const title = document.querySelector("#title");
const desc = document.querySelector("#desc");

const pageTaps = [
  { id: "Home", desc: "Home Home Home", bg: "red" },
  { id: "News", desc: "News News News", bg: "green" },
  { id: "Contact", desc: "Contact Contact Contact", bg: "blue" },
  { id: "About", desc: "About About About", bg: "yellow" },
];

pageTaps.forEach((v) => {
  //요소들을 찾는 거
  const btn = document.querySelector("#" + v.id);
  btn.addEventListener("click", () => {
    list.forEach((v) => {
      const target = document.querySelector("#" + v.id);
      target.backgroundColor = "#efefef";
      target.style.color = "black";
    });
    btn.style.backgroundColor = v.bg;
    pageMation.style.color = "white";
    contesnts.style.backgroundColor = v.bg;
    title.innerHTML = v.id;
    desc.innerHTML = v.desc;
  });
});
