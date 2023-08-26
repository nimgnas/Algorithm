function solution(a, b) {
    const GCD = getGCD(a, b)
    
    a = a / GCD
    b = b / GCD
    
    return getPrimeFactor(b).every((v) => v === 2 || v === 5) ? 1 : 2
}

function getGCD(num1, num2) {
    let gcd = 1
    
    for(let i = 2; i <= Math.min(num1, num2); i++) {
        if(num1 % i === 0 && num2 % i === 0) gcd = i
    }
    
    return gcd
}

function getPrimeFactor(num) {
    const primes = []
    for(let i = 2; i <= num; i++) {
        while(num % i === 0) {
            num = num / i
            
            if(num % i !== 0) {
                primes.push(i)
            }
        }
    }
    return primes
}