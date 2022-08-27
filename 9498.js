const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = parseInt(line);
    // input = line.split(' ').map(el => parseInt(el));
    rl.close();
});

rl.on("close", () => {
        if (input < 0 || input > 100) {
            return;
        }
        
        if (input >= 90 && input <= 100) {
            console.log("A");
        }
        else if (input < 90 && input >= 80) {
            console.log("B");
        }
        else if (input < 80 && input >= 70) {
            console.log("C");
        }
        else if (input < 70 && input >= 60) {
            console.log("D");
        }
        else if (input < 60) {
            console.log("F");
        }
    });