const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs
  .readFileSync(FILE_PATH)
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const factorial = (number) => {
  let sum = 1;
  for (let i = 1; i <= number; i++) {
    sum *= i;
  }

  return sum;
};

console.log(
  factorial(input[0]) / (factorial(input[1]) * factorial(input[0] - input[1]))
);
