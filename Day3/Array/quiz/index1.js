const movieType = +prompt("영화 타입 입력(1~3)");
const age = +prompt("나이 몇살");
const movie = ["액션 영화", "로맨틱 코미디", "공포 영화"];
const moviePrice = [10000, 8000, 9000];

// ${bus_data[busType - 1]}
if (age < 13)
  alert(
    `선택하신 영화는 ${movie[movieType - 1]}이고, 티켓의 가격은 ${
      moviePrice[movieType - 1] * 0.5
    }`
  );
else if (60 <= age)
  alert(
    `선택하신 영화는 ${movie[movieType - 1]}이고, 티켓의 가격은 ${
      moviePrice[movieType - 1] * 0.7
    }`
  );
else
  alert(
    `선택하신 영화는 ${movie[movieType - 1]}이고, 티켓의 가격은 ${
      moviePrice[movieType - 1]
    }`
  );
