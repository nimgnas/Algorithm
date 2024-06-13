const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs
  .readFileSync(FILE_PATH)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const [N, r, c] = input;

let sum = 0;
const search = (row, col, size) => {
  if (r === row && col === c) {
    console.log(sum);
    return;
  }

  if (row <= r && col <= c && r < row + size && c < col + size) {
    size = Math.floor(size / 2);
    search(row, col, size);
    search(row, col + size, size);
    search(row + size, col, size);
    search(row + size, col + size, size);
  } else {
    sum += size ** 2;
  }
};

search(0, 0, Math.pow(2, N));
