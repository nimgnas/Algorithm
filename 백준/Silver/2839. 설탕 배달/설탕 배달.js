const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim();

let answer = 0;

while (input > 0) {
  if (input % 5 === 0) {
    answer += input / 5;
    input = 0;
  } else {
    answer += 1;
    input -= 3;
  }
}

if (input !== 0) {
  console.log(-1);
} else console.log(answer);
