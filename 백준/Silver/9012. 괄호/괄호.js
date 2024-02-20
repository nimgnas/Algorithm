const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

input.shift();

const check = (param) => {
  const stack = [];

  for (let i = 0; i < param.length; i++) {
    if (stack.at(-1) === "(" && param[i] === ")") stack.pop();
    else stack.push(param[i]);
  }

  return stack.length ? "NO" : "YES";
};

for (let i = 0; i < input.length; i++) {
  console.log(check(input[i]));
}
