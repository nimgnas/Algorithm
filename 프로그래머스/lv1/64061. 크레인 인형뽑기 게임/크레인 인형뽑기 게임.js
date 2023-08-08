function solution(board, moves) {
       let answer = 0;
        const n = board.length;

        const stack = [];
        for (let i = 0; i < moves.length; i++) {
          const targetCol = moves[i] - 1;
          for (let j = 0; j < n; j++) {
            if (board[j][targetCol] > 0) {
              if (stack[stack.length - 1] === board[j][targetCol]) {
                stack.pop();
                answer += 2;
              } else {
                stack.push(board[j][targetCol]);
              }
              board[j][targetCol] = 0;
              break;
            }
          }
        }

        return answer;
}