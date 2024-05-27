const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim();

input = +input;

const DP = [0, 1, 3];

for (let i = 3; i <= input; i++) {
  DP[i] = (DP[i - 1] + DP[i - 2] * 2) % 10007;
}

console.log(DP[input]);
