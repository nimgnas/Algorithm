function solution(n) {
    const oneTwoFour = [1, 2, 4]
    const third = []
    let flag = false
    while(n >= 3) {
        let per = n % 3
        n = Math.floor(n / 3)
        
        if(per === 0) {
            if(flag) third.push(2)
            if(!flag) third.push(3)
            flag = true
        }
        
        else if(per !== 0) {
            if(!flag) third.push(per)
            if(flag) {
                per -= 1
                if(per === 0) third.push(3)
                else {
                    third.push(per)
                    flag = false
                }
            }
        }
    }
    
    if(flag & n - 1 !== 0) third.push(n - 1)
    if(!flag) third.push(n)
    
    third.reverse()
    return third.map((number) => oneTwoFour[number - 1]).join("")
}