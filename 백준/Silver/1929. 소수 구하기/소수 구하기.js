const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs
  .readFileSync(FILE_PATH)
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const [start, end] = input;

const isPrime = (number) => {
  if (number === 1) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
};

const answer = [];

for (let i = start; i <= end; i++) {
  if (isPrime(i)) answer.push(i);
}

console.log(answer.join("\n"));
