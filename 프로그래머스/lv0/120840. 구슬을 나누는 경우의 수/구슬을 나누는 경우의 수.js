function solution(balls, share) {    
  let nume = balls
  for(let i = balls - 1; i > balls - share; i--) {
      nume *= i
  }

  return Math.round(nume / fac(share))
}


function fac(num) {
    let sum = 1
    for(let i = 2; i <= num; i++) {
        sum *= i
    }
    return sum
}
