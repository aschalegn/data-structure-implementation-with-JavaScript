export default class AdjacencyListGraph {
    constructor() {
        this.adjacencyList = {};
        this.isDirected = false;
    }

    addVertex(key) {
        this.adjacencyList[key] = [];
    }

    removeVertex(vertex) {
        delete this.adjacencyList[vertex];
    }

    addEdge(v1, v2) {
        if (v1 === v2) throw Error("a node can not connect to itself");
        if (!v1 || !v2 || !this.adjacencyList[v1] || !this.adjacencyList[v2]) throw Error("method addEdge requires 2 valid vartex");
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        if (v1 === v2) throw Error("unable to delete connection, no connection of node to itself");
        if (!this.adjacencyList[v1] || !this.adjacencyList[v1]) throw Error("method removeEdge requires 2 valid vartex");
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
        if (v1 === v2) throw Error("a vertext con not be connected to itsele");
        if (!this.adjacencyList[v1] || !this.adjacencyList[v1]) throw Error("method isConnected requires 2 valid vartex");
        if (this.adjacencyList[v1].includes(v2)) return true;
        return false;
    }

}