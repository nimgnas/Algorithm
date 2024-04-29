const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const N = input.shift();
input = input.map((v) => Number(v));

const sum = input.reduce((acc, cur) => acc + cur, 0);
const sort = input.sort((a, b) => a - b);
const max = Math.max(...sort);
const min = Math.min(...sort);

const check = Array.from({ length: 8001 }, () => 0);
sort.forEach((v) => {
  if (v < 0) {
    check[Math.abs(v) - 1] = check[Math.abs(v) - 1] + 1;
  } else {
    check[v + 4000] = check[v + 4000] + 1;
  }
});

const checkMax = Math.max(...check);
let checkMaxArr = [];

check.forEach((v, i) => {
  let index = i <= 3999 ? -(i + 1) : i - 4000;

  if (v === checkMax) checkMaxArr.push([v, index]);
});

checkMaxArr.sort((a, b) => a[1] - b[1]);

console.log(
  Math.round(sum / N) === 0
    ? Math.abs(Math.round(sum / N))
    : Math.round(sum / N)
);
console.log(sort[Math.floor(N / 2)]);
console.log(
  checkMaxArr.length >= 2 ? checkMaxArr[1][1] : checkMaxArr.at(-1)[1]
);
console.log(max - min);
