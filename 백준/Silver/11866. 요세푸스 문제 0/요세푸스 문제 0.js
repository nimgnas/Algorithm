const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split(" ");

const N = Number(input[0]);
const K = Number(input[1]);

const circle = Array.from({ length: N }, (_, i) => i + 1);
const answer = [];

let cnt = 1;
let index = 0;
while (circle.length) {
  if (cnt === K) {
    answer.push(circle[index]);
    for (let i = index; i < circle.length; i++) {
      if (i === circle.length - 1) {
        circle.pop();
      } else circle[i] = circle[i + 1];
    }
    cnt = 0;
    index--;
  }
  cnt++;
  if (index === circle.length - 1) index = -1;
  index++;
}

console.log("<" + answer.join(", ") + ">");
