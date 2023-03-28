// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];
// rl.on('line', (line) => {
//   input.push(line);
// });

// rl.on('close', () => {
//   let array = [];
//   for (let i = 2; i < 2 + parseInt(input[1]); i++) {
//     array.push(input[i]);
//   }
//   console.log(solution(input[0], input[1], array));
// });

function solution(original, total, order) {
  let cursor_front = [...original];
  let cursor_end = [];
  for (let i = 0; i < total; i++) {
    switch (order[i]) {
      case 'L':
        if (cursor_front.length !== 0) {
          cursor_end.push(cursor_front.pop());
        }
        break;
      case 'D':
        if (cursor_end.length !== 0) {
          cursor_front.push(cursor_end.pop());
        }
        break;
      case 'B':
        if (cursor_front.length !== 0) {
          cursor_front.pop();
        }
        break;
    }

    if (order[i].split(' ')[0] === 'P') {
      cursor_front.push(order[i].split(' ')[1]);
    }
  }
  return [...cursor_front, ...cursor_end.reverse()].join('');
}

console.log(solution('abcd', 3, ['P x', 'L', 'P y']));
console.log(
  solution('abc', 9, ['L', 'L', 'L', 'L', 'L', 'P x', 'L', 'B', 'P y'])
);
console.log(
  solution('dmih', 11, [
    'B',
    'B',
    'P x',
    'L',
    'B',
    'B',
    'B',
    'P y',
    'D',
    'D',
    'P z',
  ])
);
