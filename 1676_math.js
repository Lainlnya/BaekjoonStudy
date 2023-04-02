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
  console.log(solution(parseInt(input)));
});

function solution(num) {
  let answer = 0;
  if (num === 0) return answer;

  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0) answer++;
    if (i % 25 === 0) answer++;
    if (i % 125 === 0) answer++;
  }
  return answer;
}
