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
    // 45분 빨리 알람을 맞춰야한다고 가정
    if (input[0] < 0 || input[0] > 23 || input[1] < 0 || input[1] > 59) {
        return;
    }
    if (input[1] >= 45) {
        input[1] -= 45;
    } else if (input[1] < 45) {
        if (input[0] == 0) {
            input[0] = 23;
        } else {
            input[0] -= 1;
        }
        input[1] = 60 + (input[1] - 45);
    }
    console.log(`${input[0]} ${input[1]}`);
    // 1. input[1] > 45 -> 자리수 변함없이 그냥 출력
    // 2. input[1] < 45 => 
    // 30 - 45 = -15, 45분이 되어야 한다. 즉 60 - 15
    // 27 - 45 = -18 즉, 42분이 되어야 한다. 즉 60 - 18
    // 앞자리도 1 빼줄 것
    // 만약 앞자리가 0이라면 앞자리는 23이 되면 된다.
});