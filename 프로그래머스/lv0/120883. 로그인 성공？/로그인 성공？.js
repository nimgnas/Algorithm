function solution(id_pw, db) {
    var answer = 'fail';
    const [userId, userPw] = id_pw
    let dbPw = ""
    
    db.forEach((item) => {
        if(userId === item[0]) {
            dbPw = item[1]
            if(userPw === dbPw) answer = "login"
            else answer = "wrong pw"
        }
        
    })
    

    
    return answer;
}