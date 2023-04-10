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

function solution(num, cards) {
  cards.unshift(0);
  let dp = [0, cards[0]];

  for (let i = 1; i <= num; i++) {
    let priceList = [];
    for (let j = 1; j < i; j++) {
      priceList.push(dp[i - j] + cards[j]);
    }
    priceList.push(cards[i]);
    dp[i] = Math.min(...priceList);
  }
  return dp[num];
}
