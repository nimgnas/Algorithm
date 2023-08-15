function solution(my_string, num1, num2) {
    var answer = '';
    const a = my_string[num1]
    const b = my_string[num2]
    
    my_string = my_string.split("")
    my_string[num1] = b
    my_string[num2] = a
    
    return my_string.join("")
}