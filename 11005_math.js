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

function solution(nums) {
  let answer = nums[0].toString(nums[1]).toUpperCase();
  return answer;
}
