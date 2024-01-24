const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim().split("\n");

const T = input[0];

const checkRoom = (arr) => {
  const [H, W, cnt] = arr.split(" ");
  let roomNum = Math.ceil(cnt / H);
  roomNum = roomNum < 10 ? `0${roomNum}` : roomNum;

  let floor = cnt % H;
  if (floor === 0) floor = H;

  return `${floor}${roomNum}`;
};

for (let i = 0; i < Number(T); i++) {
  console.log(checkRoom(input[i + 1]));
}
