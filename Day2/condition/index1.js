//switch문

const season = prompt("현재 계절은?");

switch (season) {
  case "봄":
    alert("봄이니까 한강가쟈~");
    break;
  case "여름":
    alert("여름이니까 바다가쟈~");
    break;
  case "가을":
    alert("가을이니까 산가쟈~");
    break;
  case "겨울":
    alert("겨울이니까 집가쟈~");
    break;

  default:
    alert("에러");
    break;
}
