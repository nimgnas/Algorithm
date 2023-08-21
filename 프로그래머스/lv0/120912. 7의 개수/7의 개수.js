function solution(array) {
    var answer = 0;
    array = array.join("")
    
    for(const x of array) {
        if(x === "7") answer++
    }
    return answer;
}