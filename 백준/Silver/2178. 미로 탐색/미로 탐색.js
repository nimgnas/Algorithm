const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

let [N, M] = input
  .shift()
  .split(" ")
  .map((v) => +v);

input = input.map((v) => [...v]);

const memo = Array.from({ length: N + 1 }, () =>
  Array(M + 1).fill(Number.MAX_SAFE_INTEGER)
);

const xList = [-1, 0, 1, 0];
const yList = [0, 1, 0, -1];

const results = [];
let min = Number.MAX_SAFE_INTEGER;

const DFS = (coordinate, cnt) => {
  const [curX, curY] = coordinate;
  memo[curX][curY] = cnt;

  if (curX + 1 === +N && curY + 1 === +M) {
    results.push(cnt);
    min = Math.min(min, cnt);
    return;
  }
  for (let i = 0; i < 4; i++) {
    const nx = curX + xList[i];
    const ny = curY + yList[i];

    if (nx >= 0 && nx < input.length && ny >= 0 && ny < input[0].length) {
      if (input[nx][ny] == 1 && memo[nx][ny] > cnt + 1) {
        input[curX][curY] = "0";
        DFS([nx, ny], cnt + 1);
        input[curX][curY] = "1";
      }
    }
  }
};

DFS([0, 0], 0);

console.log(Math.min(...results) + 1);
