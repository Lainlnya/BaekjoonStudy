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
  input[1] = input[1].split(' ').map(Number);
  console.log(solution(Number(input[0]), input[1]));
});

function solution(n, arr) {
  const later = Array.from({ length: n }, (v, i) => i + 1);
  const rLater = later.slice().reverse();

  if (rLater.every((v, i) => arr[i] === v)) return -1;
  else {
    let i = n - 2;
    while (arr[i] > arr[i + 1]) i--;

    let j = n - 1;
    while (arr[i] > arr[j]) j--;

    [arr[i], arr[j]] = [arr[j], arr[i]];
    let rest = arr.slice(i + 1).sort((a, b) => a - b);
    return [...arr.slice(0, i + 1), ...rest].join(' ');
  }
}
