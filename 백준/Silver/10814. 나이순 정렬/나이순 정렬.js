const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

input.shift();
const arr = input
  .map((v) => v.split(" "))
  .sort((a, b) => a[0] - b[0])
  .map((v) => v.join(" "));

console.log(arr.join("\n"));
