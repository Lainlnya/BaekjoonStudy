const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input.push(line.split(' ').map(v => parseInt(v)));
});

rl.on("close", () => {
    let graph = new Graph();
    let count = 0;
    for (let i = 0; i < input[0][0]; i++) {
        graph.addVertex(i + 1);
    }

    for (let i = 1; i <= input[0][1]; i++) {
        graph.addEdge(input[i][0], input[i][1]);
    }
    for (let i = 1; i <= input[0][0]; i++) {
        if (!graph.visited[i]) {
            graph.dfs(i);
            count++;
        }
    }
    console.log(count);
});

class Graph {
    constructor() {
        this.edge = {};
        this.visited = {};
    }

    addVertex (value) {
        this.edge[value] = [];
        this.visited[value] = false;
    }

    addEdge (v1, v2) {
        this.edge[v1].push(v2);
        this.edge[v2].push(v1);
    }

    dfs (startVertex) {
        this._dfsStackVisit(startVertex);
    }

    _dfsStackVisit (vertex) {
        let stack = [];
        stack.push(vertex);

        while (stack.length !== 0) {
            let vertex = stack.pop();

            if (this.visited[vertex]) {
                continue;
            }
            this.visited[vertex] = true;
            
            let neighbors = this.edge[vertex];
            for (let i = neighbors.length - 1; i >= 0; i--) {
                stack.push(neighbors[i]);
            }
        }
    }
}