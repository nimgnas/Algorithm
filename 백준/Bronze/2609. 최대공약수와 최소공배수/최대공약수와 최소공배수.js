const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs
  .readFileSync(FILE_PATH)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const getMin = (number) => {
  const [a, b] = number;
  const minNumber = Math.min(...number);

  let result = 1;
  for (let i = 2; i <= minNumber; i++) {
    if (a % i === 0 && b % i === 0) result = i;
  }

  return result;
};

const getMax = (number) => {
  const [a, b] = number;
  let result = 1;

  while (true) {
    if (result % a === 0 && result % b === 0) return result;
    result++;
  }
};

console.log(getMin(input));
console.log(getMax(input));
