const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
const { isModuleNamespaceObject } = require("util/types");
let input = fs.readFileSync(FILE_PATH).toString().trim();

input = +input;

const memo = [];

memo[1] = 0;
memo[2] = 1;
memo[3] = 1;

for (let i = 4; i <= input; i++) {
  const one = i - 1;
  const two = i / 2;
  const three = i / 3;

  // 투쓰리 둘 다 아닌경우
  if (!Number.isInteger(two) && !Number.isInteger(three)) {
    memo[i] = memo[one] + 1;
  }

  // 둘 다 일경우
  if (Number.isInteger(two) && Number.isInteger(three)) {
    let min = Math.min(memo[two], memo[three]);
    min = Math.min(memo[one], min);
    memo[i] = min + 1;
    continue;
  }

  // 둘중 하나인 경우
  if (Number.isInteger(two)) {
    let min = Math.min(memo[one], memo[two]);
    memo[i] = min + 1;
  }
  if (Number.isInteger(three)) {
    let min = Math.min(memo[one], memo[three]);
    memo[i] = min + 1;
  }
}

console.log(memo[input]);
