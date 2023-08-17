function solution(num, k) {
    let answer
    if(String(num).indexOf(k) >= 0) answer = String(num).indexOf(k) + 1
    else answer = -1
    return answer
}