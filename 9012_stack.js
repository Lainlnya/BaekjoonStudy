const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  let answer = '';
  for (let i = 1; i <= input[0]; i++) {
    let stack = [];
    for (let j = 0; j < input[i].length; j++) {
      if (stack[stack.length - 1] === '(' && input[i][j] === ')') {
        stack.pop();
      } else {
        stack.push(input[i][j]);
      }
    }
    stack.length === 0 ? (answer += 'YES\n') : (answer += 'NO\n');
    stack = [];
  }

  console.log(answer);
});
