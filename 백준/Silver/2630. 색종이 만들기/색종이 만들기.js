const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const N = +input.shift();

input = input.map((v) => v.split(" "));

// 712점

const count = {
  0: 0,
  1: 0,
};

function search(graph, N) {
  const main = graph[0][0];
  let flag = true;

  graph.forEach((v) => {
    v.forEach((u) => {
      if (main !== u) flag = false;
    });
  });
  if (flag) {
    count[main] = count[main] + 1;
    if (N === 1) return;
  } else {
    let newGraph = [];
    for (let i = 0; i < N / 2; i++) {
      const arr = [];
      for (let j = 0; j < N / 2; j++) {
        arr.push(graph[i][j]);
      }
      newGraph.push(arr);
    }
    search(newGraph, N / 2);

    newGraph = [];
    for (let i = 0; i < N / 2; i++) {
      const arr = [];
      for (let j = N / 2; j < N; j++) {
        arr.push(graph[i][j]);
      }
      newGraph.push(arr);
    }
    search(newGraph, N / 2);

    newGraph = [];
    for (let i = N / 2; i < N; i++) {
      const arr = [];
      for (let j = 0; j < N / 2; j++) {
        arr.push(graph[i][j]);
      }
      newGraph.push(arr);
    }
    search(newGraph, N / 2);

    newGraph = [];
    for (let i = N / 2; i < N; i++) {
      const arr = [];
      for (let j = N / 2; j < N; j++) {
        arr.push(graph[i][j]);
      }
      newGraph.push(arr);
    }
    search(newGraph, N / 2);
  }
}

search(input, N);

for (const x in count) {
  console.log(count[x]);
}
