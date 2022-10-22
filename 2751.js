const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    input.push(line.trim());
});

rl.on("close", () => {
    const [N, ...numList] = input.map((e) => Number(e));
    const result = numList.sort((a, b) => a - b);
    console.log(result.join("\n"));
});