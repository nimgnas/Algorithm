function solution(array, n) {
    var answer = 0;
    
    array.sort((a, b) => a - b)
    
    let min = 1000
    for(let i = array.length - 1; i >= 0; i--) {
        const a = Math.abs(array[i] - n)
        if(a <= min) {
            min = a
            answer = array[i]
        }
    }
    
    
   
    return answer;
}