const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim();
input = Number(input);
const constructor = (number) => {
  number = String(number);
  numArr = [...number].map((v) => Number(v));

  return Number(number) + numArr.reduce((acc, cur) => acc + cur, 0);
};

const arr = [];
for (let i = 0; i <= input; i++) {
  if (constructor(i) === input) arr.push(i);
}

if (arr.length === 0) console.log(0);
else console.log(Math.min(...arr));
