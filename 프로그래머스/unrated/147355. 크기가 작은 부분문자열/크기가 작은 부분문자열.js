function solution(t, p) {
    const arr = []
    
    for(let i = 0; i <= t.length - p.length; i++) {
        let tmp = ""
        for(let j = i; j < p.length + i; j++) {
            tmp += t[j]
        }
        arr.push(Number(tmp))
    }
    
    return arr.filter((v) => Number(v) <= Number(p)).length
}