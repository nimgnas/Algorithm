let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();


input = input.split("");

let flag = false;
let s = "";
for (let i = 0; i < input.length; i++) {
  if (input[i] === "<" || input[i] === ">") {
    if (input[i] === ">") s += "|";
    flag = !flag;
    continue;
  }

  if (!flag) s += input[i];
}

s = s.split("|").filter((v) => v !== "");

const arr = [];
for (let i = 0; i < s.length; i++) {
  arr.push(
    s[i]
      .split(" ")
      .map((v) => [...v].reverse().join(""))
      .join(" ")
  );
}

const stack = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "<") {
    stack.push("<");
    flag = !flag;
    continue;
  }
  if (input[i] === ">") {
    stack.push(">");
    flag = !flag;
    continue;
  }
  if (flag) stack.push(input[i]);
  if (!flag) stack.push("|");
}

const newArr = arr.join("");
let j = 0;
for (let i = 0; i < stack.length; i++) {
  if (stack[i] === "|") stack[i] = newArr[j++];
}

console.log(stack.length ? stack.join("") : s.join("").split(" ").reverse().join(" "));

