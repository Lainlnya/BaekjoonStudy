const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = parseInt(line);
    rl.close();
});

rl.on("close", () => {
    let result = -1;
    let max_five = Math.floor(input / 5);
    
    while (max_five >= 0) {
        let remain = input - max_five * 5;

        if (remain % 3 === 0) {
            result = max_five;
            result += (remain / 3);
            break;
        } else {
            max_five -= 1;
        }
    }
    console.log(result);
});
