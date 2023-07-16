function solution(keyinput, board) {
    var answer = [0 ,0];
    
    const obj = {
        up:[0,1],
        down:[0,-1],
        left:[-1,0],
        right:[1,0]
    }
    
    const xl = Math.floor(board[0] / 2)
    const yl = Math.floor(board[1]/ 2)
    
          
    for(x of keyinput) {
        const input = obj[x]
        
        const xm = Math.abs(answer[0] + input[0]) 
        if( xm <= xl) {
            answer[0] = answer[0] + input[0]     
        }
        
        const ym = Math.abs(answer[1] + input[1])
        if(ym <= yl) {
            answer[1] = answer[1] + input[1]
        }
    }
    
    return answer;
}