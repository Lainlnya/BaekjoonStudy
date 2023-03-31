const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input = line.split(' ').map((el) => parseInt(el));
});

rl.on('close', () => {
  console.log(solution(input));
});

function solution(nums) {
  let [b, s] = nums[0] < nums[1] ? [nums[1], nums[0]] : [nums[0], nums[1]];

  while (b % s !== 0) {
    [b, s] = [s, b % s];
  }

  return s + '\n' + (nums[0] * nums[1]) / s;
}
