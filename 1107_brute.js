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
  input[2]
    ? (input[2] = input[2].split(' ').map((v) => parseInt(v)))
    : (input[2] = {});
  console.log(input[2]);
  console.log(solution(input[0] * 1, input[1] * 1, input[2]));
});

function solution(channel, bNum, buttons) {
  const brokens = {};
  for (let k = 0; k < bNum; k++) {
    brokens[buttons[k]] = true;
  }

  let count = Math.abs(100 - channel);

  for (let i = 0; i < 1000000; i++) {
    const tempNum = i.toString();
    let isValid = true;

    for (let j = 0; j < tempNum.length; j++) {
      if (brokens[tempNum[j]]) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      count = Math.min(count, Math.abs(i - channel) + tempNum.length);
    }
  }
  return count;
}
