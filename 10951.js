const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
    })
    .on('close', function () {
        let count = 0;
        while (count < input.length) {
            let num1 = parseInt(input[count].split(' ')[0]);
            let num2 = parseInt(input[count].split(' ')[1]);
            console.log(num1 + num2);
            count++;
        }
    process.exit();
});