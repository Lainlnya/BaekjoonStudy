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
      let total = parseInt(input[0]);
    for (let i = 1; i <= total; i++) {
        let num1 = parseInt(input[i].split(' ')[0]);
        let num2 = parseInt(input[i].split(' ')[1]);
        console.log(num1 + num2);
    }
    process.exit();
});