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
  let answer = [];

  const selecting = Array.from({ length: M }, () => 0);
  const isVisited = Array.from({ length: N }, () => false);

  const dfs = (num) => {
    if (num === M) {
      let temp = [];
      for (let j = 0; j < M; j++) {
        temp.push(selecting[j]);
      }
      temp = temp.sort((a, b) => a - b).join(' ');
      if (!answer.includes(temp)) {
        answer += temp + '\n';
      }

      return answer;
    }

    for (let i = 1; i <= N; i++) {
      if (!isVisited[i]) {
        selecting[num] = i;
        isVisited[i] = true;
        dfs(num + 1);
        isVisited[i] = false;
      }
    }
  };
  dfs(0);

  return answer;
}
