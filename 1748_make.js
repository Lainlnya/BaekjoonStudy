const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => (input = line));

rl.on('close', () => {
  console.log(solution(input));
});

function solution(s_num) {
  let answer = 0,
    i = 1;
  let order = s_num.length;

  while (i <= order) {
    if (i === order) {
      answer += (s_num - 10 ** (i - 1) + 1) * i;
    } else {
      answer += 9 * i * 10 ** (i - 1);
    }

    i++;
  }

  return answer;
}
