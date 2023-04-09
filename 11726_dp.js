const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  input = parseInt(line);
  rl.close();
});

rl.on('close', () => {
  let memo = {
    1: 1,
    2: 2,
  };

  for (let i = 3; i <= input; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 10007;
  }

  console.log(memo[input]);
});
