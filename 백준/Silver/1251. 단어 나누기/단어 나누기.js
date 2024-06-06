const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim();

const res = [];

for (let j = 1; j < input.length - 2; j++) {
  for (let k = j + 1; k < input.length; k++) {
    const arr = [];
    arr.push(input.substring(0, j));
    arr.push(input.substring(j, k));
    arr.push(input.substring(k));
    res.push(arr);
  }
}

const answer = [];
res.forEach((v) => {
  const reverse = v.map((v) => v.split("").reverse().join("")).join("");
  answer.push(reverse);
});

console.log(answer.sort()[0]);
