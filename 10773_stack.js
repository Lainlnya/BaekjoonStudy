const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input.push(line.split(' ').map((el) => parseInt(el)));
});

rl.on('close', () => {
  let stack = [];
  for (let i = 1; i <= input[0]; i++) {
    if (parseInt(input[i]) === 0) {
      stack.pop();
    } else {
      stack.push(input[i]);
    }
  }

  const total_num = stack.reduce((acc, current) => acc + parseInt(current), 0);
  console.log(total_num);
});
