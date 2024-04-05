const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

let a = [];

const check = (str) => {
  if (str === "(" || str === "[") a.push(str);
  if (str === "]") {
    if (a.at(-1) === "[") a.pop();
    else a.push("X");
  }

  if (str === ")") {
    if (a.at(-1) === "(") a.pop();
    else a.push("X");
  }
};

for (let i = 0; i < input.length; i++) {
  if (input[i] === ".") continue;
  for (let j = 0; j < input[i].length; j++) {
    check(input[i][j]);
  }

  if (a.length === 0) console.log("yes");
  else console.log("no");

  a = [];
}
