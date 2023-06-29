let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(filePath).toString().split(" "); // 한줄 입력
const input = fs.readFileSync(filePath).toString().split("\n"); // 여러줄 입력

const x = input[0].split(" ")[0];
const y = input[0].split(" ")[1];

const arr = [];

for (let i = 1; i <= x; i++) {
  arr.push(input[i].split(""));
}

// white = true
// black = false

let check;

// 왼쪽위가 w일 경우
check = true;
const whiteArr = arr.map((i) => [...i]);
for (let i = 0; i < x; i++) {
  for (let j = 0; j < y; j++) {
    let target;
    if (arr[i][j] === "W") target = true;
    if (arr[i][j] === "B") target = false;
    if (target !== check) {
      whiteArr[i][j] = check;
    }
    check = !check;
  }
  if (y % 2 === 0) check = !check;
}

// 왼쪽위가 B일 경우
check = false;
const blackArr = arr.map((i) => [...i]);
for (let i = 0; i < x; i++) {
  for (let j = 0; j < y; j++) {
    let target;
    if (arr[i][j] === "W") target = true;
    if (arr[i][j] === "B") target = false;
    if (target !== check) {
      blackArr[i][j] = check;
    }
    check = !check;
  }
  if (y % 2 === 0) check = !check;
}

let a = [];
for (let i = 0; i < x - 7; i++) {
  const RP = i;
  for (let j = 0; j < y - 7; j++) {
    const CP = j;
    let bCnt = 0;
    let wCnt = 0;
    for (let a = 0; a < 8; a++) {
      for (let r = 0; r < 8; r++) {
        if (typeof blackArr[RP + a][CP + r] === "boolean") bCnt++;
        if (typeof whiteArr[RP + a][CP + r] === "boolean") wCnt++;
      }
    }
    a.push(bCnt, wCnt);
  }
}

console.log(Math.min(...a));
