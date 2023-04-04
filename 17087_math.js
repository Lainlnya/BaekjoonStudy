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
  let array = input[1].split(' ').map((el) => parseInt(el));
  console.log(solution(input[0].split(' ')[1], array));
});

function solution(loca, younger) {
  let gcd = [];
  younger.forEach((v) => {
    gcd.push(Math.abs(v - loca));
  });
  while (gcd.length !== 1) {
    gcd.push(getGCD(gcd.pop(), gcd.pop()));
  }
  return gcd.join('');
}

const getGCD = (num1, num2) => {
  let [b, s] = num1 < num2 ? [num2, num1] : [num1, num2];

  while (b % s !== 0) {
    [b, s] = [s, b % s];
  }

  return s;
};
