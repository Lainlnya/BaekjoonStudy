const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  input = Number(line);
});

rl.on('close', () => {
  console.log(solution(input));
});

function solution(num) {
  let answer = '';
  const selected = Array.from({ length: num }, () => 0);
  const isVisited = Array.from({ length: num }, () => false);

  const dfs = (n) => {
    if (n === num) {
      return (answer += `${selected.join(' ')}\n`);
    }

    for (let i = 1; i <= num; i++) {
      if (!isVisited[i]) {
        selected[n] = i;
        isVisited[i] = true;
        dfs(n + 1);
        isVisited[i] = false;
      }
    }
  };
  dfs(0);
  return answer;
}
