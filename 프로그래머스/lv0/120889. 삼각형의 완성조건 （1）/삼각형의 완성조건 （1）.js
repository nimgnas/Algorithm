function solution(sides) {
    const max = Math.max(...sides)
    const sum = sides.reduce((a, b) => a + b, 0) - max
    
    return sum > max ? 1 : 2
}