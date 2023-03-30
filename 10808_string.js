const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';
rl.on('line', (line) => {
  input = line;
});

rl.on('close', () => {
  console.log(solution(input));
});

function solution(word) {
  let alphabet = Array.from({ length: 26 }, () => 0);
  for (let i = 0; i < word.length; i++) {
    alphabet[word[i].charCodeAt() - 97]++;
  }
  return alphabet.join(' ');
}
