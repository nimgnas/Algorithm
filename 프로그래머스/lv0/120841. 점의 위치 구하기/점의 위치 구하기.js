function solution(dot) {
    var answer = 0;
    
    const [x, y] = dot
    
    if(x > 0 && y > 0) return 1
    if(x < 0 && y > 0) return 2
    if(x < 0 && y < 0) return 3
    if(x > 0 && y < 0) return 4
    
    return answer;
}