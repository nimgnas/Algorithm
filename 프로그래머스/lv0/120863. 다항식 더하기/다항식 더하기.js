function solution(polynomial) {
    polynomial = polynomial.split(" + ")
    
    let xSum = 0
    let numSum = 0
    for(let i = 0; i < polynomial.length; i++) {
        if(polynomial[i][polynomial[i].length - 1] === "x") {
            Number.isNaN(parseInt(polynomial[i])) ? xSum += 1 : xSum += parseInt(polynomial[i])
        }
        else numSum += parseInt(polynomial[i])
    }
    
    const sum = []
    if(xSum !== 0) sum.push(`${xSum === 1 ? "" : xSum}x`)
    if(numSum !== 0) sum.push(numSum)
    return sum.join(" + ")
}