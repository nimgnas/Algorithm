const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => +v);

input = input.map((v) => v.split(" "));
const check = Array.from({ length: N + 1 }, () => 0);

const graph = {};
for (let i = 1; i <= N; i++) graph[i] = [];

input.forEach((edge) => {
  const [u, v] = edge;
  graph[u].push(v);
  graph[v].push(u);
});

let cnt = 0;
function DFS(ver) {
  if (check[ver] === 0 && graph[ver].length > 0) {
    check[ver] = 1;
    graph[ver].forEach((v) => {
      DFS(v);
    });
  }
}

for (const x in graph) {
  if (check[x] === 0) cnt++;
  DFS(x);
}
console.log(cnt);
