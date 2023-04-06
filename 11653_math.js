const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;
rl.on('line', (line) => {
  input = line;
});

rl.on('close', () => {
  console.log(solution(parseInt(input)));
});

function solution(num) {
  let count = 2;
  let temp = num;
  let answer = [];
  while (temp !== 1) {
    if (temp % count === 0) {
      temp = temp / count;
      answer.push(count);
    } else {
      count++;
    }
  }
  return answer.join('\n');
}
