const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input = line.split(' ');
});

rl.on('close', () => {
  console.log(solution(input));
});

function solution(array) {
  return parseInt(array[0] + array[1]) + parseInt(array[2] + array[3]);
}
