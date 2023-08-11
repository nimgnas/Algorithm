function solution(my_string) {
    var answer = [];
    
    for(let x of my_string) {
        const num = Number(x)
        if(!Number.isNaN(num)) answer.push(num)
    }
    return answer.sort((a, b) => a - b);
}