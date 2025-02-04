// document.getElementsByClassName
const red = document.querySelector(".red");
const box = document.querySelector(".box");

if (red && box) {
    red.addEventListener("click", () => {
      box.style.backgroundColor = box.style.backgroundColor === "red" ? "" : "red";
    });
  }


const blue = document.querySelector(".blue");
if (blue && box) {
    blue.addEventListener("click", () => {
      box.style.backgroundColor = box.style.backgroundColor === "blue" ? "" : "blue";
    });
  }

const green = document.querySelector(".green");

if (green && box) {
    green.addEventListener("click", () => {
      box.style.backgroundColor = box.style.backgroundColor === "green" ? "" : "green";
    });
  }

const yellow = document.querySelector(".yellow");

if (yellow && box) {
    yellow.addEventListener("click", () => {
      box.style.backgroundColor = box.style.backgroundColor === "yellow" ? "" : "yellow";
    });
  }

  const square = document.querySelector(".square");
  square.addEventListener("click", () => box.style.borderRadius="0px");
  const soft = document.querySelector(".soft");
  soft.addEventListener("click", () => box.style.borderRadius="70px");
  const hard = document.querySelector(".hard");
  hard.addEventListener("click", () => box.style.borderRadius="999px");
 

  const small = document.querySelector(".small");
 
  small.addEventListener("click", () => {
    box.style.width="100px",
    box.style.height="100px"
});
  const medium = document.querySelector(".medium");
 
  medium.addEventListener("click", () => {
    box.style.width="200px",
    box.style.height="200px"
});
  const large = document.querySelector(".large");

  large.addEventListener("click", () => {
    box.style.width="300px",
    box.style.height="300px"
});












// const makeAlert = () => {
//     alert(msg);
// };


// [".red",".blue",".green"]
// .forEach((v)=>document.querySelector(v).addEventListener(`click`, () => makeAlert(v)));