function solution(age) {
    var answer = '';   
    for(x of age + "") {
        answer += String.fromCharCode(Number(x) + 97)
    }
    return answer;
}