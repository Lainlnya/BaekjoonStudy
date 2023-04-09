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
  console.log(
    solution(
      parseInt(input[0]),
      input[1].split(' ').map((v) => parseInt(v))
    )
  );
});

function solution(n, cards) {
  const dp = Array.from({ length: n + 1 }).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] + cards[j - 1]);
    }
  }

  return dp[n];
}
