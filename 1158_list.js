const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  input = line.split(' ').map((el) => parseInt(el));
  rl.close();
});

rl.on('close', () => {
  console.log(solution(input[0], input[1]));
});

function solution(people, out) {
  let p_queue = Array.from({ length: people }, (v, i) => i + 1);
  let answer = [];

  let count = 1;
  while (p_queue.length > 0) {
    if (count === out) {
      answer.push(p_queue.shift());
      count = 1;
    } else {
      p_queue.push(p_queue.shift());
      count++;
    }
  }
  return '<' + answer.join(', ') + '>';
}
