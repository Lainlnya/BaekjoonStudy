const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';
rl.on('line', (line) => {
  1;
  input = line;
});

rl.on('close', () => {
  console.log(solution(input));
});

function solution(word) {
  let answer = [];
  for (let i = 0; i < word.length; i++) {
    answer.push([...word].filter((v, index) => index >= i).join(''));
  }
  return answer.sort().join('\n');
}
