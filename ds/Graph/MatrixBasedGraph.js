import Queue from "../Queue.js";

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
        const index = this.map[vertex];
        if (index === undefined) throw Error("can not delete non existing vertex");
        this.adjacencyMatrix.splice(index, 1);
        for (let i = 0; i < this.adjacencyMatrix.length; i++) {
            this.adjacencyMatrix[i].splice(index, 1);
        };
        delete (this.map[vertex]);
    }

    addEdge(v1, v2, weight) {
        if (!weight) throw Error("method addEdge requires a weight for the connection");
        if (v1 === v2) throw Error("a vertex can not connect to itself");
        const indexV1 = this.map[v1];
        const indexV2 = this.map[v2];
        if (indexV1 === undefined || indexV2 === undefined) throw Error("method addEdge requires 2 valid vartex");
        this.adjacencyMatrix[indexV1][indexV2] = weight;
        this.adjacencyMatrix[indexV2][indexV1] = weight;
        return true;
    };

    removeEdge(v1, v2) {
        if (v1 === v2) throw Error("unable to delete connection, no connection of vertex to itself");
        const indexV1 = this.map[v1];
        const indexV2 = this.map[v2];
        if (indexV1 === undefined || indexV2 === undefined) throw Error("method removeEdge requires 2 valid vartex");
        this.adjacencyMatrix[indexV1][indexV2] = 0;
        this.adjacencyMatrix[indexV2][indexV1] = 0;
        return true;
    };

    isConnectedDirectly(v1, v2) {
        if (v1 === v2) throw Error("no connection of vertex to itself");
        const indexV1 = this.map[v1];
        const indexV2 = this.map[v2];
        if (indexV1 === undefined || indexV2 === undefined) throw Error("method isConnectedDirectly requires 2 valid vartex");
        if (this.adjacencyMatrix[indexV1][indexV2] !== 0 && this.adjacencyMatrix[indexV2][indexV1] !== 0) return true;
        return false;
    };

    isConnected(v1, v2) {
        if (v1 === v2) throw Error("no connection of vertex to itself");
        const indexV1 = this.map[v1];
        const indexV2 = this.map[v2];
        if (indexV1 === undefined || indexV2 === undefined) throw Error("method isConnected requires 2 valid vartex");
        if (this.adjacencyMatrix[indexV1][indexV2] !== 0 && this.adjacencyMatrix[indexV2][indexV1] !== 0)
            return {
                connected: true,
                level: 1
            };
        const queue = new Queue;
        let currentIndex = indexV1;
        let levels = 0;
        while (queue) {
            console.log(currentIndex);
            for (let i = 0; i < this.adjacencyMatrix[currentIndex].length; i++) {
                if (i === indexV2 && this.adjacencyMatrix[currentIndex][i] !== 0)
                    return {
                        connected: true,
                        level: levels
                    };
                if (this.adjacencyMatrix[currentIndex][i] !== 0) queue.enqueue(i);
            }
            levels++;
            currentIndex = queue.dequeue();
        }
        return { connected: false };
    };
};