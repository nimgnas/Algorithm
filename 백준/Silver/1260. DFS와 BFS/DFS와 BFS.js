const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

let [N, M, V] = input.shift().split(" ");
V = +V;

input = input.map((v) => v.split(" ").map((v) => +v));

const graph = createGraph(input);
if (!graph[V]) return console.log(V + "\n" + V);

for (const x in graph) {
  graph[x] = graph[x].sort((a, b) => a - b);
}
const arr1 = [];
const arr2 = [];

DFS(
  graph,
  V,
  Array.from({ length: N + 1 }, () => 0)
);

BFS(
  graph,
  V,
  Array.from({ length: N + 1 }, () => 0)
);

console.log(arr1.join(" ") + "\n" + arr2.join(" "));

function DFS(graph, V, check) {
  arr1.push(V);
  check[V] = 1;

  for (let i = 0; i < graph[V].length; i++) {
    const nextV = graph[V][i];

    if (check[nextV] === 0) DFS(graph, nextV, check);
  }
}

function BFS(graph, V, check) {
  arr2.push(V);
  check[V] = 1;
  const queue = [graph[V]];

  while (queue.length > 0) {
    const shift = queue.shift();

    for (let i = 0; i < shift.length; i++) {
      if (check[shift[i]] === 0) {
        check[shift[i]] = 1;
        arr2.push(shift[i]);
        queue.push(graph[shift[i]]);
      }
    }
  }
}

function createGraph(edges) {
  const graph = {};

  edges.forEach((edge) => {
    const [node1, node2] = edge;

    if (!graph[node1]) {
      graph[node1] = [];
    }
    graph[node1].push(node2);

    if (!graph[node2]) {
      graph[node2] = [];
    }
    graph[node2].push(node1);
  });

  return graph;
}
