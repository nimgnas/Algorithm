def solution(n):
    oddSum = 0
    evenSum = 0
    
    for i in range(n):
        oddSum += i + 1 if(i + 1) % 2 != 0 else 0
        evenSum += (i + 1) ** 2 if(i + 1) % 2 == 0 else 0
    
    return oddSum if(n % 2 == 1) else evenSum