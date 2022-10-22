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
    for (let i = 0; i <= input[0]; i++) {
        input[i] = input[i].split(' ');
    }
    input.shift();

    let result = '';
    input.sort((a, b) => {
        return parseInt(a[0]) - parseInt(b[0]);
    }).forEach( age_sorting => {
        result += `${age_sorting[0]} ${age_sorting[1]} \n`;
    })
    console.log(result);
});