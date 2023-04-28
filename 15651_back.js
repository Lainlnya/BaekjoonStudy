const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  input = line.split(' ').map(Number);
});

rl.on('close', () => {
  console.log(solution(input[0], input[1]));
});

function solution(N, M) {
  let answer = '';

  const selecting = Array.from({ length: M }, () => 0);

  const dfs = (num) => {
    if (num === M) {
      const arr = [];

      for (let i = 0; i < M; i++) {
        arr.push(selecting[i]);
      }
      return (answer += `${arr.join(' ')}\n`);
    }

    for (let i = 1; i <= N; i++) {
      selecting[num] = i;
      dfs(num + 1);
    }
  };
  dfs(0);

  return answer;
}
