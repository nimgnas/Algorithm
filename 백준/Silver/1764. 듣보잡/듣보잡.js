const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const [N, M] = input.shift().split(" ");

const obj = {};

for (let i = 0; i < input.length; i++) {
  const target = input[i];
  if (obj[target]) obj[target] = obj[target] + 1;
  else obj[target] = 1;
}

const answer = [];

for (const x in obj) {
  if (obj[x] >= 2) answer.push(x);
}

answer.sort();

console.log(answer.length);
console.log(answer.join("\n"));
