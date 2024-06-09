const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => +v);

input = input[0].split(" ").map((v) => +v);

const answers = [];

let left = 0;
let right = Number.MAX_SAFE_INTEGER;

while (left <= right) {
  const high = Math.floor(left + (right - left) / 2);

  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    const cal = input[i] - high;
    if (cal > 0) sum += cal;
  }

  if (sum >= M) {
    left = high + 1;
    answers.push(high);

    if (sum === M) break;
  }

  if (sum < M) right = high - 1;
}

console.log(answers.at(-1));
