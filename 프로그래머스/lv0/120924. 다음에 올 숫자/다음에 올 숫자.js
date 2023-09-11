function solution(common) {
    let a = []
    let b = []
    for(let i = common.length - 1; i > 0; i--) {
        console.log(i)
        a.push(common[i] - common[i - 1])
        b.push(common[i] / common[i - 1])
    }

    if(a.every((v) => v === a[0])) return common.at(-1) + a[0]
    if(b.every((v) => v === b[0])) return common.at(-1) * b[0]
    
}