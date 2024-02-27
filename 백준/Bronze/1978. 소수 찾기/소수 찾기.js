const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

let numbers = input[1].split(" ").map((v) => +v);
const answer = [];

const isPrime = (number) => {
  if (number === 1) return false;
  if (number === 2) return true;

  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) return false;
  }

  return true;
};

numbers.forEach((v) => {
  if (isPrime(v)) answer.push(v);
});

console.log(answer.length);
