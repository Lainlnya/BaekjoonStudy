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
  let array = [];
  for (let i = 1; i <= parseInt(input[0]); i++) {
    array.push(parseInt(input[i]));
  }
  console.log(solution(input[0], array));
});

function solution(total, t_array) {
  const stack = [];
  let count = 1;
  let answer = '';

  for (let i = 0; i < total; i++) {
    const numbers = t_array.shift();

    while (count <= numbers) {
      stack.push(count++);
      answer += '+\n';
    }

    const poppedItem = stack.pop();
    if (poppedItem !== numbers) {
      return 'NO';
    }

    answer += '-\n';
  }

  return answer;
}
