const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const reverseInput = input.map((number) => [...number].reverse().join(""));

for (let i = 0; i < input.length - 1; i++) {
  if (input[i] === reverseInput[i]) console.log("yes");
  else console.log("no");
}
