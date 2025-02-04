const input = document.querySelector("#inputBox");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  if (input.type == "text") {
    input.type = "password";
    button.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
  } else {
    input.type = "text";
    button.innerHTML = '<i class="fa-regular fa-eye"></i>';
  }
});

if (8 <= button.innerHTML <= 20) {
  if (
    button.innerHTML == "!" ||
    button.innerHTML == "@" ||
    button.innerHTML == "$" ||
    button.innerHTML == "%"
  ) {
  }
}
