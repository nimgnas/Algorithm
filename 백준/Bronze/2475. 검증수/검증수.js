const FILE_PATH = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split(" ");

const answer = input.reduce((acc, current) => {
  const currentNum = Number(current)
  return acc + currentNum**2
}, 0)

console.log(answer % 10)
