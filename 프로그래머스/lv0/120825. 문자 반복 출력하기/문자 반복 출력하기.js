function solution(my_string, n) {
    var answer = '';
    for(x of my_string) {
        answer += x.repeat(n)
    }
    return answer;
}