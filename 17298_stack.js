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

  for (let i = 0; i < input[0]; i++) {
    while (stack.length && input[1][stack[stack.length - 1]] < input[1][i]) {
      input[1][stack.pop()] = input[1][i];
    }
    stack.push(i);
  }

  while (stack.length) {
    input[1][stack.pop()] = -1;
  }

  console.log(input[1].join(' '));
});
