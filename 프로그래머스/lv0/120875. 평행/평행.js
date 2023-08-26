function solution(dots) {
  return [
    [getSlope(dots[1], dots[3]), getSlope(dots[0], dots[2])],
    [getSlope(dots[2], dots[3]), getSlope(dots[0], dots[1])],
    [getSlope(dots[3], dots[2]), getSlope(dots[0], dots[1])]
  ].find((v) => v[0] === v[1]) ? 1 : 0;
}

function getSlope(a, b) {
  return (a[1] - b[1]) / (a[0] - b[0]);
}
