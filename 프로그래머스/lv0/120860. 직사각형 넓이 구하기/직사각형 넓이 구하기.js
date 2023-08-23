function solution(dots) {
    const [a, b] = [...new Set(dots.map((v) => v[0]))]
    const [c, d] = [...new Set(dots.map((v) => v[1]))]
    
    return Math.abs((a - b) * (c - d))
} 