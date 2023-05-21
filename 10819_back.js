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
  console.log(solution(input[0], input[1]));
});

function solution([n], array) {
  let answer = 0;
  const selected = Array.from({ length: n }, () => 0);
  const isVisited = Array.from({ length: n }, () => 0);

  const dfs = (num) => {
    if (num === n) {
      let total = 0;
      for (let j = 0; j < n - 1; j++) {
        total += Math.abs(selected[j] - selected[j + 1]);
      }
      return total > answer ? (answer = total) : answer;
    }

    for (let i = 1; i <= n; i++) {
      if (!isVisited[i]) {
        selected[num] = array[i - 1];
        isVisited[i] = true;
        dfs(num + 1);
        isVisited[i] = false;
      }
    }
  };
  dfs(0);
  return answer;
}
