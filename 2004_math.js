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
  const [n_1, n_2] = getNumber(nums[0]);
  const [m_1, m_2] = getNumber(nums[1]);
  const [nm_1, nm_2] = getNumber(nums[0] - nums[1]);

  const [re_1, re_2] = [n_1 - m_1 - nm_1, n_2 - m_2 - nm_2];

  return Math.min.apply(null, [re_1, re_2]);
}

function getNumber(n) {
  let five = 0;
  let two = 0;

  for (let i = 2; i <= n; i *= 2) {
    two += parseInt(n / i);
  }

  for (let i = 5; i <= n; i *= 5) {
    five += parseInt(n / i);
  }
  return [two, five];
}
