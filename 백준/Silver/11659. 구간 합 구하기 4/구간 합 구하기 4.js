const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => +v);

const numbers = input
  .shift()
  .split(" ")
  .map((v) => +v);

const sumNum = [];

let sum = 0;
numbers.forEach((number) => {
  sum += number;
  sumNum.push(sum);
});

let result = [];

for (let i = 0; i < M; i++) {
  let [st, ed] = input[i].split(" ").map((v) => +v);

  result.push(sumNum[ed - 1] - (st === 1 ? 0 : sumNum[st - 2]));
}

console.log(result.join("\n"));
