const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim();
input = Number(input);

const one = Math.floor(input / 5);
const two = Math.floor(input / 25);
const three = Math.floor(input / 125);

console.log(one + two + three);
