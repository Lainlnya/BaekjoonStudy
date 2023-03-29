const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  input = line;
});

rl.on('close', () => {
  console.log(solution(input));
});

function solution(sticks) {
  let stack = [];
  let answer = 0;

  for (let i = 0; i < sticks.length; i++) {
    if (sticks[i] === '(' && sticks[i + 1] === ')') {
      answer += stack.length;
      i++;
    } else if (sticks[i] === '(') {
      stack.push(sticks[i]);
    } else if (sticks[i] === ')') {
      stack.pop();
      answer += 1;
    }
  }
  return answer;
}
