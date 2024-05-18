const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs
  .readFileSync(FILE_PATH)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v);

let [N, M, ...rest] = input;

const graph = Array.from({ length: N }, () => Array(+N).fill(0));
const net = rest.map((v) =>
  v
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b)
);

const queue = [];
const answer = [];
net.forEach((v) => {
  if (v[0] === 1) queue.push(v);
});

if (queue.length === 1 && net.length === 1) return console.log(1);

while (queue.length) {
  const [x, y] = queue.shift();

  for (let i = 0; i < net.length; i++) {
    const v = net[i];

    if ((v[0] === x || v[1] === x) && !graph[v[0] - 1][v[1] - 1]) {
      graph[v[0] - 1][v[1] - 1] = 1;
      queue.push(v);
      answer.push(v);
    }

    if ((v[0] === y || v[1] === y) && !graph[v[0] - 1][v[1] - 1]) {
      graph[v[0] - 1][v[1] - 1] = 1;
      queue.push(v);
      answer.push(v);
    }
  }
}

const set = new Set(answer.flat()).size - 1;
console.log(set < 0 ? 0 : set);
