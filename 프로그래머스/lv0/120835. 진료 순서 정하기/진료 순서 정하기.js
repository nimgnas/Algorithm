function solution(emergency) {
    var answer = [];
    const sortEmer = [...emergency].sort((a, b) => b - a)
    for(let x of emergency) {
        answer.push(sortEmer.indexOf(x) + 1)
    }
    return answer;
}