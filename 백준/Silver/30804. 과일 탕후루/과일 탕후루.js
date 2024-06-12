const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const N = +input.shift();
input = input[0].split(" ").map((v) => +v);

const slide = (width) => {
  let result = false;
  let obj = {};
  let st = 0;

  for (let i = 0; i < width - 1; i++) {
    obj[input[i]] = (obj[input[i]] || 0) + 1;
  }

  for (let ed = width - 1; ed < input.length; ed++) {
    obj[input[ed]] = (obj[input[ed]] || 0) + 1;

    if (Object.keys(obj).length <= 2) {
      let sum = 0;
      for (const x in obj) {
        sum += obj[x];
      }
      return sum;
    } else {
      obj[input[st]] = obj[input[st]] - 1;
      if (obj[input[st]] === 0) delete obj[input[st]];
      st++;
    }
  }

  return result;
};

let left = 0;
let right = N;
let answer = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  if (slide(mid)) {
    answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
console.log(answer);
