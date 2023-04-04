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
  while (input.length) {
    let temp_answer = 0;
    for (let i = 0; i < 3; i++) {
      let temp = parseInt(input.pop());
      if (!temp) continue;
      temp_answer += 1 << i;
    }
    answer.push(temp_answer);
  }
  return answer.reverse().join('');
}
