export default class AdjacencyMatrixGraph {
    constructor() {
        this.adjacencyMatrix = [];
        this.map = {}
        this.isDirected = false;
    }

    addVertex(vertex) {
        this.map[vertex] = this.adjacencyMatrix.length;
        vertex = [];
        this.adjacencyMatrix.push(vertex);
        for (let i = 0; i < this.adjacencyMatrix.length; i++) {
            if (i < this.adjacencyMatrix.length - 1) {
                this.adjacencyMatrix[this.adjacencyMatrix.length - 1].push(0);
            };
            this.adjacencyMatrix[i].push(0);
        };
    }

    removeVertex(vertex) {

    }

    addEdge(v1, v2, weight) {
        if (!weight) throw Error("method addEdge requires a weight for the connection");
        if (v1 === v2) throw Error("a node can not connect to itself");
        const indexV1 = this.map[v1];
        const indexV2 = this.map[v2];
        if (typeof (indexV1) !== "number" || typeof (indexV2) !== "number") throw Error("method addEdge requires two valid adjecencies");
        this.adjacencyMatrix[indexV1][indexV2] = weight;
        this.adjacencyMatrix[indexV2][indexV1] = weight;
    };

    removeEdge(v1, v2) {
        if (v1 === v2) throw Error("unable to dlete connection, no connection of node to itself");
        const indexV1 = this.map[v1];
        const indexV2 = this.map[v2];
        if (typeof (indexV1) !== "number" || typeof (indexV2) !== "number") throw Error("method addEdge requires two valid adjecencies");
        this.adjacencyMatrix[indexV1].splice(indexV2, 1);
        this.adjacencyMatrix[indexV2].splice(indexV1, 1);
    };

    search(key) {

    }

    isConnected(v1, v2) {

    }



}