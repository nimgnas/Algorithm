const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const stack = [];
const result = [];
for (let i = 1; i < input.length; i++) {
  const target = input[i].split(" ");

  switch (target[0]) {
    case "push":
      stack.push(target[1]);
      break;
    case "top":
      stack.length === 0 ? result.push(-1) : result.push(stack.at(-1));
      break;
    case "pop":
      stack.length === 0 ? result.push(-1) : result.push(stack.pop());
      break;
    case "size":
      result.push(stack.length);
      break;
    case "empty":
      stack.length === 0 ? result.push(1) : result.push(0);
  }
}

console.log(result.join("\n"));
