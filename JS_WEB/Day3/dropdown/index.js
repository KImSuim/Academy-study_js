const btn = document.querySelector("#clickMeBtn");
const list = document.querySelector("#list");
btn.addEventListener("click", () => {
  if (list.style.display == "none") list.style.display = "block";
  else list.style.display = "none";
});
