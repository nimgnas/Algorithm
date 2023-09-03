function solution(babbling) {
    const baby = ["aya", "ye", "woo", "ma"]
    let cnt = 0
    
    for(let i = 0; i < babbling.length; i++) {
        let replaceBabbling = babbling[i]
        for(let j = 0; j < baby.length; j++) {
            replaceBabbling = replaceBabbling.replaceAll(baby[j], j)
        }
    
        if(!Number.isNaN(Number(replaceBabbling))) {
            const obj = {}
            
            for(let j = 0; j < replaceBabbling.length; j++) {
                if(obj[replaceBabbling[j]] || replaceBabbling[j] === "e") break
                if(j === replaceBabbling.length - 1) cnt++
                obj[replaceBabbling[j]] = true
            }
        }
    }
    
    return cnt
}