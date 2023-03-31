const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  let array = [];
  for (let i = 1; i <= input[0]; i++) {
    array.push(input[i].split(' ').map((el) => parseInt(el)));
  }
  console.log(solution(array));
});

function solution(num_array) {
  let answer = '';
  for (let i = 0; i < num_array.length; i++) {
    let [b, s] =
      num_array[i][0] < num_array[i][1]
        ? [num_array[i][1], num_array[i][0]]
        : [num_array[i][0], num_array[i][1]];

    while (b % s !== 0) {
      [b, s] = [s, b % s];
    }

    answer += (num_array[i][0] * num_array[i][1]) / s;

    if (i !== num_array.length - 1) {
      answer += '\n';
    }
  }
  return answer;
}
