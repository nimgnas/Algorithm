function solution(quiz) {
    var answer = [];
    
    quiz = quiz.map((v) => v.split(" = "))
    for(const x of quiz) {
        const rst = parseInt(x.pop())
        
        if(eval(x[0]) === rst) answer.push("O")
        else answer.push("X")
    }

    return answer;
}