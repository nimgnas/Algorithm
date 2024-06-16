const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const N = +input.shift();

input = input
  .map((v) => v.split(" ").map((v) => +v))
  .sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

let cnt = 1;

let ed = input[0][1];
for (let i = 1; i < input.length; i++) {
  const st = input[i][0];
  if (ed <= st) {
    cnt++;
    ed = input[i][1];
  }
}

console.log(cnt);
