const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim();

class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  // Add an item to the queue
  enqueue(element) {
    this.stack1.push(element);
  }

  // Remove an item from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }

    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }

  // Check if the queue is empty
  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.stack1.length + this.stack2.length;
  }
}

const [start, end] = input.split(" ").map((v) => +v);

if (start === end) return console.log(0);

const queue = new Queue();
queue.enqueue([start - 1, 1]);
queue.enqueue([start + 1, 1]);
queue.enqueue([start * 2, 1]);

const answers = [];
const memo = [];

while (queue.size() > 0) {
  const shift = queue.dequeue();
  const [location, second] = shift;

  if (start < end && location > end + 10) continue;
  if (memo[location]) continue;
  else memo[location] = 1;

  if (location === end) {
    answers.push(second);
    break;
  } else if (start > end) {
    queue.enqueue([location - 1, second + 1]);
  } else {
    queue.enqueue([location - 1, second + 1]);
    queue.enqueue([location + 1, second + 1]);
    queue.enqueue([location * 2, second + 1]);
  }
}

console.log(answers[0]);
