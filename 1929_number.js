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
  console.log(solution(input.split(' ').map((el) => parseInt(el))));
});

function solution(number) {
  let answer = [];
  for (let i = number[0]; i <= number[1]; i++) {
    let temp = [];
    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        temp.push(j);
        if (i / j !== j) temp.push(i / j);
      }
    }
    if (temp.length === 2) answer.push(temp[1]);
    temp = [];
  }
  return answer.join('\n');
}

// console.log(solution([3, 16]));
