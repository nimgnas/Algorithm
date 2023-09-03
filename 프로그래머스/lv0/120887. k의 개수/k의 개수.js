function solution(i, j, k) {
    let cnt = 0
    for(let st = i; st <= j; st++) {
        cnt += [...st + ""].filter((v) => v === k + "").length
    }
    
    return cnt
}