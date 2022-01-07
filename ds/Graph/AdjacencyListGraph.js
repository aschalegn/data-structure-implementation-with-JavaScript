export default class AdjacencyListGraph {
    constructor() {
        this.adjacencyList = {};
        this.isDirected = false;
    }

    addVertex(key) {
        this.adjacencyList[key] = [];
    }

    removeVertex(vertex) {
        this.adjacencyList.delete[vertex];
    }

    addEdge(v1, v2) {
        if (!v1 || !v2 || !this.adjacencyList[v1] || !this.adjacencyList[v2]) {
            throw Error("method addEdge requires two valid adjecencies");
        }
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v1]) {
            throw Error("method removeedge requires tw0 valid adjecencies");
        }

        const v2Index = this.adjacencyList[v1].indexOf(v2);
        const v1Index = this.adjacencyList[v2].indexOf(v1);
        if (v2Index !== -1 && v1Index !== -1) {
            this.adjacencyList[v1].splice(v2Index, 1);
            this.adjacencyList[v2].splice(v1Index, 1);
            return true;
        }
        return -1;
    }

    search(key) {
        return this.adjacencyList[key];
    }

    isConnected(v1, v2) {
        if (this.adjacencyList[v1].includes(v2)) return true;
        return false;
    }

}