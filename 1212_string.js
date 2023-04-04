const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';
rl.on('line', (line) => {
  input = line;
});

rl.on('close', () => {
  console.log(solution(input));
});

function solution(num) {
  let input = [...num];
  let answer = [];
  for (let i = 0; i < input.length; i++) {
    if (i !== 0) answer.push(parseInt(input[i], 8).toString(2).padStart(3, 0));
    else answer.push(parseInt(input[i], 8).toString(2));
  }
  return answer.join('');
}
