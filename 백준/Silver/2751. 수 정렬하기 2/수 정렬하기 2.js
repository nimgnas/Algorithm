const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");
input.shift();
input = input.map((v) => Number(v)).sort((a, b) => a - b);

console.log(input.join("\n"));
