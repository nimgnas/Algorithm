const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

let [N, K] = input.shift().split(" ");

input = input.map((v) => +v);
let pointer = 0;

for (let i = input.length - 1; i > 0; i--) {
  if (K % input[i] !== +K) {
    pointer = i;
    break;
  }
}

let cnt = 0;
while (K > 0) {
  cnt += Math.floor(K / input[pointer]);
  K = K % input[pointer];
  pointer--;
}

console.log(cnt);
