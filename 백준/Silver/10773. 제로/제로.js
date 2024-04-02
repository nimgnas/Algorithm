const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs
  .readFileSync(FILE_PATH)
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

const K = input[0];

const sum = [];

for (let i = 1; i <= K; i++) {
  if (input[i] !== 0) sum.push(input[i]);
  else sum.pop();
}

console.log(sum.reduce((acc, cur) => acc + cur, 0));
