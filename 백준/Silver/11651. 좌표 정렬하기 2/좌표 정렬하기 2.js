const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

input.shift();

input = input.map((v) => v.split(" ")).map((v) => [Number(v[0]), Number(v[1])]);
input.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});

console.log(input.map((v) => v.join(" ")).join("\n"));
