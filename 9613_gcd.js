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
  let array = Array.from({ length: input[0] });
  for (let i = 0; i < input[0]; i++) {
    array[i] = input[i + 1]
      .split(' ')
      .map((el) => parseInt(el))
      .filter((v, i) => i !== 0);
  }
  console.log(solution(array));
});

function solution(nums) {
  let answer = '';
  let combination = [];
  for (let i = 0; i < nums.length; i++) {
    combination.push(getCombination(nums[i], 2));
  }

  combination.forEach((v) => {
    let temp = 0;
    v.forEach((v1) => {
      temp += getGCD(v1[0], v1[1]);
    });
    answer += temp + '\n';
  });

  return answer;
}

let getCombination = (numArray, pick) => {
  if (pick === 1) return numArray.map((el) => [el]);

  let combinations = [];

  numArray.forEach((v, i) => {
    const smallerCombination = getCombination(numArray.slice(i + 1), pick - 1);
    smallerCombination.forEach((combination) => {
      combinations.push([v].concat(combination));
    });
  });
  return combinations;
};

let getGCD = (num1, num2) => {
  let [b, s] = num1 > num2 ? [num1, num2] : [num2, num1];

  while (b % s !== 0) {
    [b, s] = [s, b % s];
  }
  return s;
};
