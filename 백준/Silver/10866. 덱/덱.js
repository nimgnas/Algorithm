var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var cases = input[0];
var deque = [];
var answer = '';

for(var i=1; i<=cases; i++){
    if(input[i].split(' ').length === 1){
        if(input[i] === 'size'){
            answer += deque.length + '\n';
        }else if(input[i] === 'empty'){
            if(deque.length === 0){
                answer += '1\n';
            }else{
                answer += '0\n';
            }
        }else if(input[i] === 'front'){
            if(deque.length === 0){
                answer += '-1\n';
            }else{
                answer += deque[0] + '\n';
            }
        }else if(input[i] === 'back'){
            if(deque.length === 0){
                answer += '-1\n';
            }else{
                answer += deque[deque.length-1] + '\n';
            }
        }else if(input[i] === 'pop_front'){
            if(deque.length === 0){
                answer += '-1\n';
            }else{
                answer += deque.shift() + '\n';
            }
        }else if(input[i] === 'pop_back'){
            if(deque.length === 0){
                answer += '-1\n';
            }else{
                answer += deque.pop() + '\n';
            }
        }
    }else{
        if(input[i].split(' ')[0] === 'push_front'){
            deque.unshift(input[i].split(' ')[1]);
        }else{
            deque.push(input[i].split(' ')[1]);
        }
    }
}
console.log(answer);