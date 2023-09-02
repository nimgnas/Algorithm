function solution(score) {
    score = score.map((v, i) => [(v[0] + v[1]) / 2, i]).sort((a, b) => b[0] - a[0])
    
    const rank = [[...score[0], 1]]
    for(let i = 1; i < score.length; i++) {
        if(rank.at(-1)[0] === score[i][0]) {
            rank.push([...score[i], rank.at(-1)[2]])
        } else rank.push([...score[i], i + 1])
    }
    
    return rank.sort((a, b) => a[1] - b[1]).map((v) => v[2])
}
