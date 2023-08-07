const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    input = () => {
        for(let i = 1; i <= line - 1; i++) {
            console.log("*".repeat(i))
        }
        return "*".repeat(line)
    }
}).on('close', function () {
    console.log(input());
});