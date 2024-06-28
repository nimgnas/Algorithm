const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const N = +input.shift();
input = input.map((v) => v.split(""));

const xList = [-1, 0, 1, 0];
const yList = [0, 1, 0, -1];
const board = Array.from({ length: N }, () => Array(N).fill(0));
let number = 1;
const numberCount = [];

const DFS = (coordinate, number, count) => {
  const [currentX, currentY] = coordinate;
  board[currentX][currentY] = number;

  for (let i = 0; i < 4; i++) {
    const nx = currentX + xList[i];
    const ny = currentY + yList[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
      if (input[nx][ny] === "1" && board[nx][ny] === 0) {
        DFS([nx, ny], number, count + 1);
      }
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (input[i][j] === "1" && board[i][j] === 0) {
      cnt = DFS([i, j], number, 1);
      number++;
    }
  }
}

for (let i = 1; i < number; i++) {
  let cnt = 0;
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      if (board[j][k] === i) cnt++;
    }
  }
  numberCount.push(cnt);
}

numberCount.sort((a, b) => a - b);
console.log(numberCount.length);
console.log(numberCount.join("\n"));
