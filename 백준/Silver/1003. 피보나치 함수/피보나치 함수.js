const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const N = +input.shift();
const memo = [];

const go = (n) => {
  if (n[1] === 0) return [1, 0];
  if (n[1] === 1) return [0, 1];

  if (memo[n]) return memo[n];
  const mio = go([n[0], n[1] - 1]);
  const mit = go([n[0], n[1] - 2]);
  const pp = mio[1] + mit[1];
  const zeroC = mio[0] + mit[0];
  memo[n] = [zeroC, pp];
  return [zeroC, pp];
};

const answer = [];
for (let i = 0; i < N; i++) {
  answer.push(go([0, +input[i]]));
}

console.log(answer.map((v) => v.join(" ")).join("\n"));
