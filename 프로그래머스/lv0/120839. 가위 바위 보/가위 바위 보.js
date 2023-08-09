function solution(rsp) {
    var answer = '';
    const arr = ["5","0","0","0","0","2"]
    
    for(let x of rsp) {
        answer += arr[x]
    }
    return answer;
}