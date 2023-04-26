const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let [N, M] = input[0].split(' ').map(Number);
  let array = Array.from({ length: N }, () => []);
  for (let i = 0; i < N; i++) {
    array[i] = input[i + 1].split(' ').map(Number);
  }
  console.log(solution(N, M, array));
});

function solution(N, M, testArr) {
  const visited = Array.from({ length: testArr.length }, () =>
    Array.from({ length: testArr[0].length }, () => 0)
  );

  let ans = 0;

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  const dfs = (x, y, sum, count) => {
    if (count === 4) {
      ans = Math.max(sum, ans);
      return;
    }

    for (let i = 0; i < 4; i++) {
      let [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

      if (!visited[nx][ny]) {
        if (count === 2) {
          visited[nx][ny] = true;
          dfs(x, y, sum + testArr[nx][ny], count + 1);
          visited[nx][ny] = false;
        }

        visited[nx][ny] = true;
        dfs(nx, ny, sum + testArr[nx][ny], count + 1);
        visited[nx][ny] = false;
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      visited[i][j] = true;
      dfs(i, j, testArr[i][j], 1);
      visited[i][j] = false;
    }
  }

  return ans;
}
