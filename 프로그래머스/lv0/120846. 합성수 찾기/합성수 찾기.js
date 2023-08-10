function solution(n) {
  var answer = 0;
    
    
  for (let i = 1; i <= n; i++) {
    if (findDivisor(i) >= 3) answer++;
  }

  return answer;
}

function findDivisor(num) {
  let cnt = 0
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) cnt++;
  }
  return cnt;
}
