const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs
  .readFileSync(FILE_PATH)
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

const T = input[0];

const cal = (k, n) => {
  const arr = Array.from({ length: n }, (_, i) => i + 1);

  for (let i = 0; i < k; i++) {
    for (let j = 1; j < arr.length; j++) {
      arr[j] = arr[j - 1] + arr[j];
    }
  }

  console.log(arr[n - 1]);
};

for (let i = 1; i <= input.length - 2; i += 2) {
  cal(input[i], input[i + 1]);
}
