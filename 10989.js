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
    let result = '';
    input.shift();
    input = input.sort((a, b) => a - b);
    input.forEach((element) => {
        result += `${element}\n`; 
    });
    console.log(result);
});