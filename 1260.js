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
    let startVertex = input[0][2];
    for (let i = 1; i <= input[0][0]; i++) {
        graph.addVertex(i);
    }
    for (let j = 0; j < input[0][1]; j++) {
        graph.addEdge(input[j + 1][0], input[j + 1][1]);
        graph.addEdge(input[j + 1][1], input[j + 1][0]);
    }
    console.log(graph.dfs(startVertex));
    console.log(graph.bfs(startVertex));
    console.log(graph);
});

class Graph {
    constructor() {
        this.edge = {};
        this.visited = {};
        this.printNode_dfs = "";
        this.printNode_bfs = "";
    }

    addVertex(value) {
        this.edge[value] = [];
        this.visited[value] = false;
    }

    addEdge(value1, value2) {
        this.edge[value1].push(value2);
        this.edge[value1].sort((a, b) => a - b);
    }

    dfs (startVertex) {
        this._dfsRecursiveVisit(startVertex);
        return this.printNode_dfs;
    }

    _dfsRecursiveVisit (vertex) {
        if (this.visited[vertex]) return;

        this.visited[vertex] = true;
        this.printNode_dfs += (vertex + " ");
        
        let neighbors = this.edge[vertex];
        for (let i = 0; i < neighbors.length; i++) {
            this._dfsRecursiveVisit(neighbors[i]);
        }
    }

    bfs (startVertex) {
        for (let vertex in this.edge) {
            this.visited[vertex] = false;
        }
        this._bfsLoopVisit(startVertex);
        return this.printNode_bfs;
    }

    _bfsLoopVisit (vertex) {
        let queue = [];
        queue.push(vertex);

        while (queue.length !== 0) {
            let vertex = queue.shift();
            
            if (this.visited[vertex]) continue;

            this.visited[vertex] = true;
            this.printNode_bfs += (vertex + ' ');

            let neighbors = this.edge[vertex];
            for(let i = 0; i < neighbors.length; ++i) {
                queue.push(neighbors[i]);
            }
        }
    }
}