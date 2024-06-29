const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

let [N, M, S] = input;

const createP = (n) => {
  let result = "";

  let cnt = 0;
  let flag = true;
  while (cnt <= n) {
    if (flag) {
      result += "I";
      cnt++;
    } else result += "O";

    flag = !flag;
  }

  return result;
};

const ioi = createP(N);
let cnt = 0;

let SS = S.slice(0, ioi.length);
if (SS.endsWith(ioi)) cnt++;

for (let i = ioi.length; i < +M; i++) {
  SS += S[i];
  if (SS.endsWith(ioi)) cnt++;
}
console.log(cnt);
