const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const N = Number(input.shift());

input = input.map((v) => v.split(" ").map((v) => Number(v)));

input.sort((a, b) => {
  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
  if (a[0] === b[0]) {
    if (a[1] < b[1]) return -1;
  }
});

console.log(input.map((v) => v.join(" ")).join("\n"));
