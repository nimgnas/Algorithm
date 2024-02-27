const FILE_PATH = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(FILE_PATH).toString().trim();

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  isEmpty() {
    return this.front == null && this.rear === null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) this.front = newNode;
    else this.rear.next = newNode;

    this.rear = newNode;
    this.length++;
  }

  remove() {
    if (this.isEmpty()) return;
    else this.front = this.front.next;
    if (!this.front) this.rear = null;
    this.length--;
  }

  display() {
    const arr = [];
    let target = this.front;
    arr.push(target.data);
    while (target !== this.rear) {
      target = target.next;
      arr.push(target.data);
    }

    return arr;
  }

  getFront() {
    if (this.isEmpty()) return;
    return this.front.data;
  }
}

const cards = Array.from({ length: +input }, (_, i) => i + 1);

let flag = true;

const queue = new Queue();

cards.forEach((v) => {
  queue.insert(v);
});

while (queue.length > 1) {
  const frontNumber = queue.getFront();
  if (flag) {
    queue.remove();
  } else {
    queue.remove();
    queue.insert(frontNumber);
  }
  flag = !flag;
}
console.log(queue.getFront());
