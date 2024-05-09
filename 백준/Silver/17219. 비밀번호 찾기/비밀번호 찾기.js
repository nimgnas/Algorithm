const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const [N, M] = input.shift().split(" ");

const obj = {};
for (let i = 0; i <= N; i++) {
  const [url, password] = input[i].split(" ");
  if (!obj[url]) obj[url] = password;
}

let result = [];
for (let i = Number(N); i < input.length; i++) {
  result.push(obj[input[i]]);
}

console.log(result.join("\n"));
