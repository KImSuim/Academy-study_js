const input = document.querySelector("#input");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  if (input.type == "text") {
    input.type = "password";
    button.innerHTML = "😎";
  } else {
    input.type = "text";
    button.innerHTML = "😶";
  }
});
