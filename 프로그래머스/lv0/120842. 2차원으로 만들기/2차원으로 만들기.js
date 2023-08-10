function solution(num_list, n) {
    const arr = Array.from({length : num_list.length / n}, () => [])
    
    for(let i = 0; i < num_list.length; i++) {
        const a = Math.floor(i / n)
        arr[a].push(num_list[i])
    }
    return arr;
}