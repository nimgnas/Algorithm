function solution(arr1, arr2) {
    const arr = []
    for(let i = 0; i < arr1.length; i++) {
        const tmp = []
        for(let j = 0; j < arr1[i].length; j++) {
            tmp.push(arr1[i][j] + arr2[i][j])
        }
        arr.push(tmp)
    }
    
    return arr
}