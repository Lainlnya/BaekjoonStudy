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
  console.log(solution(Number(input.shift()), input));
});

const solution = (n, arr) => {
  let answer = [];
  let visited = new Array(n).fill(0);
  let tmp = [];
  const dfs = (cnt, curNode) => {
    if (cnt === n - 1) visited[0] = false;
    if (cnt === n) {
      if (visited.every((e) => e === 1)) {
        answer.push(tmp.reduce((a, c) => a + c, 0));
      }
    } else {
      for (let i = 0; i < n; i++) {
        if (!arr[curNode][i]) continue;
        if (!visited[i] && curNode !== i) {
          visited[i] = true;
          tmp.push(arr[curNode][i]);
          dfs(cnt + 1, i);
          tmp.pop();
          visited[i] = false;
        }
      }
    }
  };
  visited[0] = true;
  dfs(0, 0);

  return Math.min(...answer);
};
