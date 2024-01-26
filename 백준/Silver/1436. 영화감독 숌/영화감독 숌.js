const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim();
input = Number(input);

const answer = [];
for (let i = 0; i < 10000000; i++) {
  const toStr = i.toString();
  if (toStr.includes("666")) answer.push(i);
  if (answer.length === input) break;
}

console.log(answer.at(-1));
