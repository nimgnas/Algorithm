const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const T = +input.shift();

const arr = [1, 1, 1, 2];

for (let i = 0; i < 100; i++) {
  arr.push(arr.at(-2) + arr.at(-3));
}

for (let i = 0; i < T; i++) {
  console.log(arr[input[i] - 1]);
}
