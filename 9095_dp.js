const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input.push(parseInt(line));
});

rl.on('close', () => {
  console.log(solution(input));
});

function solution(nums) {
  let answer = [];
  let small_num = [0, 1, 2, 4];
  for (let j = 1; j <= nums[0]; j++) {
    let temp = nums[j];
    for (let i = 4; i <= temp; i++) {
      small_num[i] = small_num[i - 3] + small_num[i - 2] + small_num[i - 1];
    }
    answer.push(small_num[temp]);
  }

  return answer.join('\n');
}
