class GraphWithList {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(key) {
        this.adjacencyList[key] = [];
    }

    removeVertex(vertex) {
        this.adjacencyList.delete[vertex];
    }

    addEdge(v1, v2) {
        if (!v1 || !v2 || !this.adjacencyList[v1] || !this.adjacencyList[v2])
            throw Error("method addEdge requires two valid adjecencies");
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v1]) {
            throw Error("method removeedge requires tw0 valid adjecencies");
        }

        const v2Index = this.adjacencyList[v1].indexOf(v2);
        if (v2Index !== -1) {
            console.log("exists");
            this.adjacencyList[v1].splice(v2Index, 1);
        }
        const v1Index = this.adjacencyList[v2].indexOf(v1);
        if (v1Index !== -1) {
            console.log("exists");
            this.adjacencyList[v2].splice(v1Index, 1);
        }
        console.log({ v1Index, v2Index });
    }

    search(key) {
        return this.adjacencyList[key];
    }
}

export default GraphWithList;