const list = [
  { id: "<<" },
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
  { id: ">>" },
];

list.forEach((v) => {
  //   const li = document.createElement("li");
  const btn = document.querySelector("#btn");
  btn.innerHTML = v.id;
  btn.addEventListener("click", () => {
    list.forEach((v) => {
      const target = document.querySelector(v.id);
      target.backgroundColor = "white";
      target.style.color = "black";
    });
    btn.style.backgroundColor = "blue";
    btn.style.color = "white";

    btn.innerHTML = v.id;

    // btn.style.backgroundColor = "blue";
    // btn.style.color = "white";
    // capital.innerHTML = v.capital;
    // desc.innerHTML = `${v.capital} is the capital city of ${v.nation}`;
  });
  pageMation.appendChild(btn);
  //   const btn = document.querySelector(v.id);
  //   btn.addEventListener("click", () => {
  //     if (btn.style.backgroundColor == "blue") {
  //       btn.style.backgroundColor = "white";
  //       btn.style.color = "black";
  //     } else {
  //       btn.style.backgroundColor = "blue";
  //       btn.style.color = "white";
  //     }
  //   });
});

//사진 참고
