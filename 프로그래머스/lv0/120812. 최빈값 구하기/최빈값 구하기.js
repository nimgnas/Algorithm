function solution(array) {
    var answer = 0;
    const check = Array(1001).fill(0)
    for(let i = 0; i < array.length; i++) check[array[i]] ++
    
    const maxNum = Math.max(...check)
    let idx = check.indexOf(maxNum)
    
    if(check.indexOf(maxNum, idx + 1) > 0) idx = -1
    
    return idx;
}