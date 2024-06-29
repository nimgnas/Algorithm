const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

let [N, M, S] = input;

S = [...S];

for (let i = 0; i < S.length - 2; i++) {
  const ioi = S[i] + S[i + 1] + S[i + 2];

  if (ioi === "IOI") {
    S[i] = "*";
    S[i + 1] = "";
    i++;
  }
}

S = S.join("");

let flag = false;
const arr = [];
let str = "";
for (let i = 0; i < S.length; i++) {
  if (S[i] === "*") {
    flag = true;
    str += "*";
  } else if (flag && S[i] !== "*") {
    flag = false;
    arr.push(str);
    str = "";
  }
}

let cnt = 0;
arr.forEach((v) => {
  const len = v.length;
  if (len >= +N) {
    cnt += len - +N + 1;
  }
});

console.log(cnt);
