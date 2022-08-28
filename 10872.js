const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line;
    rl.close();
})

rl.on("close", () => {
    console.log(factorial(input));
});

function factorial(number) {
    if (number == 0) {
        return 1;
    }
    if (number == 1) {
        return number;
    }
    return factorial(number - 1) * number; 
}
