// reduce는 누적시키는 것 (쌓임)
const result = [1, 2, 3, 4, 5].reduce((acc, current) => acc + current);
// console.log({ acc, current });
console.log(result);

//
const answer = "americano".split("a").reduce((a, c) => a + c);
console.log(answer);
