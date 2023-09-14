function solution(s){
    s = s.toLowerCase().split("")
    return s.filter((v) => v === "p").length === s.filter((v) => v === "y").length ? true : false
}