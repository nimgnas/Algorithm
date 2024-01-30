const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const [K, N] = input.shift().split(" ");
input = input.map((v) => Number(v));

let left = 1;
let right = Math.ceil(input.reduce((acc, cur) => acc + cur, 0));

const lineArr = [];

while (left <= right) {
  mid = Math.floor((left + right) / 2);

  const cutLineCnt = cutting(mid);

  if (cutLineCnt >= Number(N)) {
    lineArr.push(mid);
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(Math.max(...lineArr));

function cutting(length) {
  let cnt = 0;

  input.forEach((line) => {
    let restLine = line;

    while (restLine >= length) {
      restLine -= length;
      cnt++;
    }
  });

  return cnt;
}
