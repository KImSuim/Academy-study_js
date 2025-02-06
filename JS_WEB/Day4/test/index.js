const btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
  const { target } = e;
  const { innerHTML } = target;
  target.innerHTML = innerHTML == "버튼" ? "버튼 아낭ㅁ" : "버튼";

  const input = document.querySelector("#input");

  input.addEventListener("input", (e) => {
    const { target } = e;
    console.log(target.value.length);
  });
  //   if (btn.innerHTML == "버튼") btn.innerHTML = "브뤠래어미ㅏ너이";
  //   else btn.innerHTML = "버튼";
});

const coffee = { name: "수임커피", price: 1800 };
const { price } = coffee; //1800원
