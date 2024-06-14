const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => +v);

input = input.map((v) => v.split(" ").map((v) => +v));

function createGraph(edges) {
  const graph = Array.from({ length: N }, () => Array(N).fill(10000));
  for (let i = 0; i < N; i++) {
    graph[i][i] = 0;
  }
  edges.forEach(([v, u]) => {
    graph[v - 1][u - 1] = 1;
    graph[u - 1][v - 1] = 1;
  });
  return graph;
}
const graph = createGraph(input);

function floydWarshall(graph) {
  const dist = [];
  const size = graph.length;

  // 초기화
  for (let i = 0; i < size; i++) {
    dist[i] = [];
    for (let j = 0; j < size; j++) {
      dist[i][j] = graph[i][j];
    }
  }

  // 경유 지점
  for (let k = 0; k < size; k++) {
    // 출발 지점
    for (let i = 0; i < size; i++) {
      // 도착 지점
      for (let j = 0; j < size; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}
// 예제 사용

const shortestPaths = floydWarshall(graph);

const sum = shortestPaths.map((v) =>
  v.reduce((acc, cur) => {
    return acc + cur;
  }, 0)
);

const min = Math.min(...sum);

for (let i = 0; i < sum.length; i++) {
  if (sum[i] === min) {
    console.log(i + 1);
    break;
  }
}
