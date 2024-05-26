const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const T = +input.shift();

let N = 0;

for (let i = 0; i < T; i++) {
  const M = +input[N];
  const obj = {};
  for (let j = N + 1; j < M + N + 1; j++) {
    const [옷, 종류] = input[j].split(" ");
    if (!obj[종류]) obj[종류] = [];
    obj[종류].push(옷);
  }

  let sum = 1;
  for (const x in obj) {
    sum *= obj[x].length + 1;
  }
  console.log(sum - 1);

  N += M + 1;
}
