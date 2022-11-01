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
        if (i !== 0) {
            input[i][1] = parseInt(input[i][1]);
            input[i][2] = parseInt(input[i][2]);
            input[i][3] = parseInt(input[i][3]);
        }
    }
    input.shift();

    let result = '';
    input.sort((a, b) => {
        if (a[1] < b[1]) return 1
            else if (a[1] > b[1]) return -1
            else {
                if (a[2] > b[2]) return 1
                else if (a[2] < b[2]) return -1
                else {
                    if (a[3] < b[3]) return 1
                    else if (a[3] > b[3]) return -1
                    else {
                        if (a[0] > b[0]) return 1
                        else if (a[0] < b[0]) return -1
                        else return 0
                    }
                }
            }
    });
    input.forEach((element) => {
        result += `${element[0]} \n`;
    });
    console.log(result);
});