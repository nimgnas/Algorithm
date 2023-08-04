function solution(numer1, denom1, numer2, denom2) {
  var answer;

  let lcm = 1;
  while (true) {
    if (lcm % denom1 == 0 && lcm % denom2 == 0) {
      break;
    }
    lcm++;
  }

  answer = [numer1 * (lcm / denom1) + numer2 * (lcm / denom2), lcm];

  let gcd = 1;

  for (let i = 2; i <= Math.min(answer[0], answer[1]); i++) {
    if (answer[0] % i === 0 && answer[1] % i === 0) {
      gcd = i;
    }
  }

  return (answer = [answer[0] / gcd, answer[1] / gcd]);
}
