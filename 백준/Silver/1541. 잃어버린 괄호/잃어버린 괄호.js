const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim();

let newInput = input.split("-");
newInput = newInput
  .map((v) => v.split("+").map((v) => +v))
  .map((v) => {
    const sum = v.reduce((acc, cur) => acc + cur, 0);
    return sum;
  });

const result = newInput.reduce((acc, cur) => acc - cur, newInput[0]);
console.log(result + newInput[0]);
