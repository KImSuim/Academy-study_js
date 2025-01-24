//콜솔로 로또번호 나타내기
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//중복 된 거
const getLotto = () => {
  while (true) {
    const lotto = Array(6)
      .fill(1)
      .map((v) => String(getRandom(1, 45)));

    const newLotto = lotto
      .reduce((a, c) => {
        if (a.includes(c)) return a;
        else return a + "," + c;
      })
      .split(",");
    if (newLotto.length == 6) return newLotto;
  }
};

//중복 삭제된 거 (set을 사용하여 중복제거)
const getLotto1 = () => {
  while (true) {
    const lotto = [
      ...new Set(
        Array(6)
          .fill(1)
          .map((v) => String(getRandom(1, 45)))
      ),
    ];
    if (lotto.length == 6) return lotto;
  }
};

console.log(getLotto());
