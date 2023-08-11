function solution(my_string) {
    const aeiou = ["a","e","i","o","u"]
    
    for(let x of my_string) {
        if(aeiou.indexOf(x) >= 0) my_string = my_string.replace(x, "")
    }
    return my_string;
}