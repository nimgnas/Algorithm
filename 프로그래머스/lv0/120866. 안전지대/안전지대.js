function solution(board) {
    var answer = 0;
    const N = board.length
    const x = [-1,-1,0,1,1,1,0,-1]
    const y = [0,1,1,1,0,-1,-1,-1]
          
    
    const check = Array.from({length:N}, ()=>Array(N).fill(0))
    
    for(let i = 0; i<N; i++) {
        for(let j = 0; j<N; j++) {
            if(board[i][j] === 1) {
                check[i][j] = 1
                for(let k = 0; k < 8; k++){
                    const nx = i + x[k]
                    const ny = j + y[k]
                    
                    if(nx >= 0 && ny >= 0 && nx < N && ny < N) {
                         check[nx][ny] = 1    
                    }                    
                }
            }
        }
    }
    
    
    for(let i = 0; i<N; i++){
        for(let j = 0; j<N; j++) {
            if(check[i][j] === 0) answer ++
        }
    }
    return answer;
}