const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const N = input.shift();

const findBig = (queue) => {
  let flag = false;

  for (let i = 1; i < queue.length; i++) {
    if (queue[i][0] > queue[0][0]) flag = true;
  }

  if (flag) {
    queue.push(queue.shift());
    findBig(queue);
  } else return;
};

for (let i = 0; i < input.length; i += 2) {
  const [docN, M] = input[i].split(" ");

  const queue = input[i + 1].split(" ").map((v, i) => [Number(v), i]);

  let cnt = 1;
  while (queue.length > 1) {
    findBig(queue);

    if (queue[0][1] === Number(M)) {
      break;
    } else queue.shift();
    cnt++;
  }

  console.log(cnt);
}
