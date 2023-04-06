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
  console.log(solution(input.split(' ')));
});

function solution(nums) {
  let answer = parseInt(nums[0], nums[1]);
  return answer;
}
