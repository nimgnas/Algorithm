const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");
input.pop();

input.forEach((v) => {
  const lengthArr = v
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => b - a);

  if (lengthArr[0] ** 2 === lengthArr[1] ** 2 + lengthArr[2] ** 2) {
    console.log("right");
  } else console.log("wrong");
});
