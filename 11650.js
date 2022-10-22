const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    input.push(line);
});

rl.on("close", () => {
    for (let i = 1; i <= input[0]; i++) {
        input[i] = input[i].split(' ').map((e) => parseInt(e));
    }
    input.shift();

    let result = '';
    let sorting_spot = input.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        else return a[1] - b[1];
    })
    sorting_spot.forEach(sorting => {
        result += `${sorting[0]} ${sorting[1]}\n`;
    });

    console.log(result);
});