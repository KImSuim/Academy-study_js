const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const special = document.querySelector("#special");
const length = document.querySelector("#length");

input.addEventListener("input", (e) => {
  const { target } = e;
  const { innerHTML } = target;

  if (7 < target.value.length && target.value.length < 21) {
    length.style.set = "red";
    if (target.value.includes("!")) {
      btn.style.backgroundColor = "red";
      special.style.color = "red";
    }
  } else (length.style.color = "gray"), (btn.style.backgroundColor = "gray");
  //   special.style.color =
  //     innerHTML == 7 < target.value.length && target.value.length < 21
  //       ? ((special.style.color = "gray"), (btn.style.backgroundColor = "gray"))
  //       : ((special.style.color = "red"), (btn.style.backgroundColor = "red"));
  console.log(target.value.length);
});
