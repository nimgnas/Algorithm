function solution(n) {
    var answer = 0;
    
    for(let i = 1; i <= 11; i++) {
        if(fac(i) > n) {
            answer = i - 1
            break
        }
    }
    
    return answer;
}

function fac(num) {
    let sum = 1
    for(let i = 1; i <= num; i++) {
        sum *= i
    }
    
    return sum
}