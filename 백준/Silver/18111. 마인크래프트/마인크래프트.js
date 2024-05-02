const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

let [N, M, B] = input
  .shift()
  .split(" ")
  .map((v) => Number(v));

input = input.map((v) => v.split(" ").map((v) => Number(v)));

const max = Math.max(...input.flatMap((v) => v));
const min = Math.min(...input.flatMap((v) => v));

// 각각의 높이에 맞춰서 평탄화
const result = [];

for (let i = min; i <= max; i++) {
  let time = 0;
  const height = i;
  let copyB = B;

  // 블럭제거, 인벤토리 넣는 과정
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (input[j][k] > height) {
        const cal = input[j][k] - height;
        copyB += cal;
        time += 2 * cal;
      }
    }
  }

  // 부족한 높이를 채우는 과정
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (input[j][k] < height) {
        const cal = height - input[j][k];
        copyB -= cal;
        if (copyB < 0) {
          time = Number.MAX_SAFE_INTEGER;
          break;
        }
        time += cal;
      }
    }
  }
  if (time >= 0) result.push([time, height]);
}
result.sort((a, b) => {
  if (a[0] === b[0]) return b[1] - a[1];
  else return a[0] - b[0];
});

console.log(result[0].join(" "));
