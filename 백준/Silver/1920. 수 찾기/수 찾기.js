const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const A = input[1]
  .split(" ")
  .map((v) => Number(v))
  .sort((a, b) => a - b);
const B = input[3].split(" ").map((v) => Number(v));

const answer = [];

const binarySearch = (target) => {
  let left = 0;
  let right = A.length - 1;

  let mid = 0;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (A[mid] === target) {
      return true;
    }

    if (A[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

B.forEach((v) => {
  if (binarySearch(v)) answer.push(1);
  else answer.push(0);
});

console.log(answer.join("\n"));
