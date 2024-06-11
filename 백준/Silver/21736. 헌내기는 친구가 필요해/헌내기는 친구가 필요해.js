const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => +v);

const xArr = [-1, 0, 1, 0];
const yArr = [0, 1, 0, -1];
const check = Array.from({ length: N }, () => Array(M).fill(false));

let answer = 0;

const DFS = (x, y) => {
  check[x][y] = true;

  if (input[x][y] === "P") answer++;

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [xArr[i] + x, yArr[i] + y];
    if (nx >= 0 && nx < N && ny >= 0 && ny < M && check[nx][ny] === false) {
      if (input[nx][ny] !== "X") DFS(nx, ny);
    }
  }
};
// console.log(check);
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (input[i][j] === "I") {
      DFS(i, j);
    }
  }
}

console.log(answer || "TT");
