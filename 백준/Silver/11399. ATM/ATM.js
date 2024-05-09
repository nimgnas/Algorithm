const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const N = input.shift();

const arr = input[0]
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);

let sum = 0;
for (let i = 0; i < N; i++) {
  let sum2 = 0;
  for (let j = 0; j <= i; j++) {
    sum2 += arr[j];
  }
  sum += sum2;
}

console.log(sum);
