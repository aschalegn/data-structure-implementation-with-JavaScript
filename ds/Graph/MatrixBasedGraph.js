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
        // this.addEdge(this.adjacencyMatrix.length - 1);
    }

    removeVertex(vertex) {

    }

    addEdge(v1, v2, weight) {
        if (!weight) throw Error("method addEdge requires a weight for the connection");
        const indexV1 = this.map[v1];
        const indexV2 = this.map[v2];
        console.log(indexV1, indexV2);
        if (typeof (indexV1) !== "number" || typeof (indexV2) !== "number") throw Error("method addEdge requires two valid adjecencies");

        this.adjacencyMatrix[indexV1][indexV2] = weight;
        this.adjacencyMatrix[indexV2][indexV1] = weight;
        // for (let i = 0; i < this.adjacencyMatrix.length; i++) {
        //     if (i < this.adjacencyMatrix.length - 1) {
        //         this.adjacencyMatrix[row].push(0);
        //     };
        //     this.adjacencyMatrix[i].push(0);
        // };

        // if (weight) {

        // }
    };

    removeEdge(v1, v2) {

    }

    search(key) {

    }

    isConnected(v1, v2) {

    }



}