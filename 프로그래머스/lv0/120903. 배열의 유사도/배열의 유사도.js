function solution(s1, s2) {
    var answer = 0;
    for(const x of s1) {
        if(s2.indexOf(x) >= 0) answer++
    }
    return answer;
}