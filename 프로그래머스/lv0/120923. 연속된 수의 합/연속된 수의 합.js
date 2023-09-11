function solution(num, total) {
    for(let i = 0 - num; i <= total; i++) {
        let sum = 0
        const arr = []
        for(let j = i; j < i + num; j++) {
            sum += j
            arr.push(j)
        }
        if(sum === total) return arr
    }
}