const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");
input.shift();

const sortInput = input.map((word) => [word, word.length]);

const newSort = sortInput
  .sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[0] > b[0]) return 1;
      if (a[0] < b[0]) return -1;
    } else return a[1] - b[1];
  })
  .map((word) => word[0]);

const set = new Set(newSort);
console.log([...set].join("\n"));
