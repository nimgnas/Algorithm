function solution(n) {
  var answer = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && isPrime(i)) answer.push(i);
  }

  return answer;
}

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
