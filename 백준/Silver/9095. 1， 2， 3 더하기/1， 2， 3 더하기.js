const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs
  .readFileSync(FILE_PATH)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const [N, ...number] = input;
const answer = [];

const memo = [];
memo[1] = 1;
memo[2] = 2;
memo[3] = 4;

const solution = (num) => {
  for (let i = 4; i <= num; i++) {
    memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
  }
  answer.push(memo[num]);
};

number.forEach((n) => {
  solution(n);
});

console.log(answer.join("\n"));
