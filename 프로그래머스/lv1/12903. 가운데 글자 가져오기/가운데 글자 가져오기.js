function solution(s) {
    const isOdd = s.length % 2
    return isOdd ? s[Math.floor(s.length / 2)] : s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)]
}