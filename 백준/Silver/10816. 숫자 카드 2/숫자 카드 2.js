const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const Narray = input[1].split(" ").map((v) => +v);
const Marray = input[3].split(" ").map((v) => +v);

const obj = {};

Narray.forEach((v) => {
  if (!obj[v]) obj[v] = 1;
  else obj[v] = obj[v] + 1;
});

const result = [];
Marray.forEach((v) => {
  if (obj[v]) result.push(obj[v]);
  else result.push(0);
});

console.log(result.join(" "));
