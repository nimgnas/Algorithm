const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const [N, M] = input.shift().split(" ");

const zukanObj = {};
const zukanArr = [];

for (let i = 0; i < N; i++) {
  zukanObj[input[i]] = i + 1;
  zukanArr.push([input[i], i + 1]);
}

for (let i = N; i < input.length; i++) {
  if (+input[i] > 0) console.log(zukanArr[+input[i] - 1][0]);
  else console.log(zukanObj[input[i]]);
}
