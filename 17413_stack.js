const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  input = line;
});

rl.on('close', () => {
  console.log(solution(input));
});

function solution(input) {
  const changed = input.replace(/<[a-z0-9 ]+>|[a-z0-9]+/g, (match) => {
    if (match.startsWith('<')) return match;

    return [...match].reverse().join('');
  });
  return changed;
}
