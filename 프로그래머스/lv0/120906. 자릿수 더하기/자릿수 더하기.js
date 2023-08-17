function solution(n) {
    let answer = 0
    n = String(n)
    for(const x of n) answer += Number(x)
    return answer
}