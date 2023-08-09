function solution(hp) {
    var answer = 0;
    while(hp > 0) {
        if(hp >= 5) hp -= 5
        else if(hp < 3) hp -= 1
        else if(hp < 5) hp -= 3
        
        
        answer++
    }
    return answer;
}