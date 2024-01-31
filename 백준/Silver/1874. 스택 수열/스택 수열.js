const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");
const n = input.shift();

input = input.map((v) => Number(v));

let target = 0;

const stack = [];
let answer = "";
for (let i = 1; i <= n; i++) {
  stack.push(i);
  answer += "+";

  if (input[target] === i) {
    while (stack.length >= 1 && stack.at(-1) === input[target]) {
      stack.pop();
      answer += "-";
      target++;
    }
  }
}

if (stack.length >= 1) console.log("NO");
else {
  console.log(answer.split("").join("\n"));
}
