const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input.push(line.split(' ').map(Number));
});

rl.on('close', () => {
  input.pop();
  for (let i = 0; i < input.length; i++) {
    input[i].shift();
  }
  console.log(solution(input));
});

function solution(num_array) {
  let output = [];
  let answer = '';
  function getCombination(arr, data, s, idx, r) {
    if (s == r) {
      answer += `${data.join(' ')}\n`;
      return;
    }
    for (let i = idx; arr.length - i >= r - s; i++) {
      data[s] = arr[i];
      getCombination(arr, data, s + 1, i + 1, r);
    }
  }

  for (let i = 0; i < num_array.length; i++) {
    getCombination(num_array[i], output, 0, 0, 6);
    answer += '\n';
  }
  return answer;
}
