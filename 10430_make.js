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
  let answer = '';
  answer += ((nums[0] + nums[1]) % nums[2]) + '\n';
  answer += (((nums[0] % nums[2]) + (nums[1] % nums[2])) % nums[2]) + '\n';
  answer += ((nums[0] * nums[1]) % nums[2]) + '\n';
  answer += ((nums[0] % nums[2]) * (nums[1] % nums[2])) % nums[2];

  return answer;
}
