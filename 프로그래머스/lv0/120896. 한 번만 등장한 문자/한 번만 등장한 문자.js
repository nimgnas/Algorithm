function solution(s) {
    var answer = '';
    
    const map = new Map()
    for(const x of s) {
        if(map.has(x)) map.set(x, map.get(x) + 1)
        else map.set(x, 1)
    }
    
    for(const [a, b] of map) {
        if(b === 1) answer += a
    }
    
    return answer.split("").sort().join("");
}