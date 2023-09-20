function solution(s) {
    return (s.length === 4 || s.length === 6) && !Number.isNaN(Number(s.split("").sort().join("")))
}