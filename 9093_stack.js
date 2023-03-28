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
  let answer = '';
  for (let i = 1; i <= parseInt(input[0]); i++) {
    let writing = input[i].split(' ');
    for (let j = 0; j < writing.length; j++) {
      answer += [...writing[j]].reverse().join('');
      answer += ' ';
    }
    answer += '\n';
  }
  console.log(answer);
});
