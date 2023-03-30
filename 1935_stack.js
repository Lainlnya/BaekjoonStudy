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
  for (let i = 2; i < 2 + parseInt(input[0]); i++) {
    array.push(parseInt(input[i]));
  }
  console.log(solution(parseInt(input[0]), input[1], array));
});

function solution(num, culcu, array) {
  let answer = [];
  let count = 0;
  let culcu_map = new Map();

  for (let i = 0; i < culcu.length; i++) {
    if (culcu[i].match(/[A-Z]/)) {
      if (!culcu_map.has(culcu[i])) {
        culcu_map.set(culcu[i], array[count]);
        count++;
      }

      answer.push(culcu_map.get(culcu[i]));
    } else {
      const num1 = answer.pop();
      const num2 = answer.pop();
      if (culcu[i] === '*') answer.push(num2 * num1);
      else if (culcu[i] === '+') answer.push(num2 + num1);
      else if (culcu[i] === '/') answer.push(num2 / num1);
      else if (culcu[i] === '-') answer.push(num2 - num1);
    }
  }
  return Number(answer[0]).toFixed(2);
}
