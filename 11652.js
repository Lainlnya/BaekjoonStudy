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
    input.shift();
    const sorted_arr = mergeSort(input.map(v => BigInt(v)));
    let max_count = 0;
    let current_count = 0;
    let prev_number = "";
    let largest_num = 2**62;

    sorted_arr.forEach(v => {
        if (prev_number !== v) {
            prev_number = v;
            current_count = 0;
        }
        current_count++;

        if ((current_count > max_count) || (current_count === max_count && largest_num > v)) {
            max_count = current_count;
            largest_num = v;
        }
    });
    console.log(String(largest_num));
});

let mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    const mid = (arr.length / 2).toFixed(0);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    const sorted = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted.push(left[i]);
            i++;
        }
        else {
            sorted.push(right[j]);
            j++;
        }
    }

    if (i < left.length) sorted.push(...left.slice(i));
    if (j < right.length) sorted.push(...right.slice(j));

    return sorted;
}