const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  line = line.split(' ').map(Number);
  input.push(line);
});

rl.on('close', () => {
  console.log(solution([input[0][0], input[0][1]], input[1]));
});

function solution([N, M], arr) {
  let answer = '';

  const selected = Array.from({ length: M }, () => 0);
  arr.sort((a, b) => a - b);

  const dfs = (num) => {
    const temp = [];
    if (num === M) {
      for (let i = 0; i < M; i++) {
        temp.push(selected[i]);
      }
      return (answer += `${temp.join(' ')}\n`);
    }

    for (let i = 1; i <= N; i++) {
      if (num === 0 || selected[num - 1] <= arr[i - 1]) {
        selected[num] = arr[i - 1];
        dfs(num + 1);
      }
    }
  };

  dfs(0);
  return answer;
}
