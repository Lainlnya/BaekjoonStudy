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

function solution(sentence) {
  let answer = '';
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].search(/[0-9]/g) !== -1) {
      answer += sentence[i];
    } else {
      if (sentence[i].charCodeAt() + 13 > 122) {
        answer += String.fromCharCode(sentence[i].charCodeAt() + 13 - 26);
      } else if (
        sentence[i].charCodeAt() + 13 > 90 &&
        sentence[i].charCodeAt() < 97
      ) {
        answer += String.fromCharCode(sentence[i].charCodeAt() + 13 - 26);
      } else if (sentence[i] === ' ') {
        answer += sentence[i];
      } else answer += String.fromCharCode(sentence[i].charCodeAt() + 13);
    }
  }
  return answer;
}
