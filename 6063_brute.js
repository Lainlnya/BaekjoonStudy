const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let array = [];
  for (let i = 0; i < input[0] * 1; i++) {
    array.push(input[i + 1].split(' ').map(Number));
  }
  console.log(solution(array));
});

function solution(arr) {
  let answer = [];

  arr.forEach((v) => {
    const [M, N, X, Y] = v;
    const lastNum = lcm(M, N);

    let x = X,
      y = Y;

    while (true) {
      if (x > lastNum || y > lastNum) {
        answer.push(-1);
        break;
      } else if (x > y) y += N;
      else if (x < y) x += M;
      else {
        answer.push(x);
        break;
      }
    }
  });

  return answer.join('\n');
}

const gcd = (a, b) => {
  let [x, y] = a < b ? [b, a] : [a, b];

  while (x % y !== 0) {
    [x, y] = [y, x % y];
  }
  return y;
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};
