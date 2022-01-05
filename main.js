import GraphWithList from "./ds/Graph/Graph.js";
import LinkedList from "./ds/LinkedList.js";
import Queue from "./ds/Queue.js";
import Stack from "./ds/Stack.js";
import Tree from "./ds/Tree/Tree.js";

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// console.log(queue);

// const stack= new Stack();
// stack.add(1);
// stack.add(2);
// stack.add(3);
// stack.add(4);
// stack.remove();
// console.log(stack);

// const linked = new LinkedList();
// linked.insertAtHead(1);
// linked.insertAtHead(2);
// linked.insertAtHead(6);
// linked.insertAtEnd(3);
// linked.insertAtEnd(5);
// linked.insertAtEnd(4);
// linked.removeFromEnd();
// linked.removeFromHead();
// linked.removeFromHead();
// linked.removeFromEnd();
// console.log(linked);

// const tree = new Tree();
// const newNode = tree.add({ name: "avraham", age: 80, id: 1 });
// const newNode1 = tree.add({ name: "moshe", age: 50, id: 2 }, newNode);
// const newNode2 = tree.add({ name: "avi", age: 45, id: 3 }, newNode);
// tree.add({ name: "sholomo", age: 25, id: 8 }, newNode1);
// tree.add({ name: "picacho", age: 15, id: 4 }, newNode2);

// console.log(tree);
// const result = tree.dfs({ id: 4 });
// console.log(result);
// const resultBfs = tree.bfs({ id: 4 });
// console.log(resultBfs);

// const deleteResult = tree.remove(2);
// console.log(deleteResult);

const listGraph = new GraphWithList();
listGraph.addVertex("asche");
listGraph.addVertex("noom");
listGraph.addVertex("room");
listGraph.addVertex("appartment");
listGraph.addEdge("asche", "noom");
listGraph.addEdge("appartment", "room");
listGraph.addEdge("asche", "room");

const listGraphBfs = listGraph.search("asche");

console.log(listGraphBfs);

