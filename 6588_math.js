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

function solution(num_array) {
  const nums = Array(1000000 + 1).fill(true);
  nums[0] = false;
  nums[1] = false;
  let guess = [];
  let answer = '';
  for (let i = 2; i <= Math.sqrt(1000000); i++) {
    if (!nums[i]) continue;
    guess.push(i);

    for (let j = i * 2; j <= 1000000; j += i) {
      nums[j] = false;
    }
  }
  num_array.map((v, i) => {
    const minimum = guess.find((num) => nums[v - num]);

    if (v > 1) {
      if (minimum) {
        const maximum = v - minimum;
        answer += `${v} = ${minimum} + ${maximum}`;
      } else answer += `Goldbach's conjecture is wrong.`;
    }

    if (i !== num_array.length - 1) {
      answer += '\n';
    }
  });
  return answer;
}
