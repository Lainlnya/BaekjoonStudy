const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line.split(' ').map(el => parseInt(el));
    rl.close();
});

rl.on("close", () => {
    if (input[0] > input[1]) console.log(">");
    else if (input[0] < input[1]) console.log("<");
    else if (input[0] == input[1]) console.log("==");

    process.exit();
});