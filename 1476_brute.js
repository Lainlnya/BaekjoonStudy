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
    let count = 1;
    while (true) {
        if (
            ((count - input[0]) % 15 === 0) && 
            ((count - input[1]) % 28 === 0) && 
            ((count - input[2]) % 19 === 0)
            ) 
            {
                console.log(count);
                break;
            }
        count++;
    }
})