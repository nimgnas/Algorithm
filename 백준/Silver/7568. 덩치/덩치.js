const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const N = input[0];
input.shift();

input = input.map((v) => v.split(" ").map((v) => Number(v)));
const answer = [];

for (let i = 0; i < N; i++) {
  let k = 1;

  for (let j = 0; j < N; j++) {
    if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) k++;
  }

  answer.push(k);
}

console.log(answer.join(" "));
