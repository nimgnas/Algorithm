const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const N = +input.shift();
input = input[0].split(" ").map((v) => +v);

const sortInput = [...input].sort((a, b) => a - b);

let cnt = 0;
const obj = {};
obj[sortInput[0]] = 0;
for (let i = 1; i < sortInput.length; i++) {
  if (sortInput[i - 1] !== sortInput[i]) {
    cnt++;
    obj[sortInput[i]] = cnt;
  }
}

let result = "";
input.forEach((v) => {
  result += obj[v] + " ";
});

console.log(result);
