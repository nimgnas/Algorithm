function solution(sides) {
    sides.sort((a, b) => a - b)
    
    const max1 = sides[1]
    const max2 = sides[0] + sides[1] - 1
    
    let cnt = 0
    let [a, b] = [sides[1] - sides[0], sides[1]]
    
    while(a < max1) a++, cnt++
    while(b < max2) b++, cnt++
    
    return cnt
}