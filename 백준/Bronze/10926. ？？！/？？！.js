let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split(" ")[0].trim(); // 한줄 입력
// const input = fs.readFileSync(filePath).toString().split("\n"); // 여러줄 입력

console.log(input + "??!");
