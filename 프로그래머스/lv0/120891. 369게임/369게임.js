function solution(order) {
    var answer = 0;
    
    while(order > 0) {
        const remainder = order % 10
        if(remainder === 3 || remainder === 6 || remainder === 9) answer ++
        order = Math.floor(order / 10)
    }
    
    return answer;
}