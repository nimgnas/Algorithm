function solution(my_string) {
    const arr = []
    
    let tmp = ""
    for(let i = 0; i < my_string.length; i++) {
        const isNan = Number.isNaN(parseInt(my_string[i]))
        if(!isNan) tmp += my_string[i]
        if(isNan || i === my_string.length -1) {
            arr.push(tmp)
            tmp = ""
        }
    }
    
    return arr.reduce((a, c) => {
        const num = parseInt(c)
        return Number.isNaN(num) ? a : a + num
    }, 0)
}