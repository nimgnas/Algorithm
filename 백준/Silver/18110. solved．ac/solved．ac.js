const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs
  .readFileSync(FILE_PATH)
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

const N = input.shift();
const 절사평균 = Math.round(N * 0.15);

input.sort((a, b) => a - b);

let sum = 0;
for (let i = 0 + 절사평균; i < input.length - 절사평균; i++) {
  sum += input[i];
}

if (N === 0) console.log(0);
else console.log(Math.round(sum / (N - 절사평균 * 2)));
