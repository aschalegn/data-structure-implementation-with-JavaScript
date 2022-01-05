import Stack from "../Stack.js";

class Node {
    constructor(data) {
        data.children = [];
        return data;
    }
};

export default class Tree {
    constructor() {
        this.root = null;
    }

    add(data, parent) {
        const newNode = new Node(data);
        if (!this.root && !parent) return this.root = newNode;
        if (!parent) throw Error("non root element must have a parent");
        else parent.children.push(newNode);
        return newNode;
    };

    remove(query) {
        const key = Object.keys(query);
        const value = query[key];
        let tree = this.root;
        const queue = [tree];
        let index = 0;

        while (queue.length) {
            for (let i = 0; i < tree.children.length; i++) {
                if (tree.children[i][key] === value) {
                    tree.children.splice(i, 1);
                    return true;
                };
                queue.unshift(tree.children[i]);
            };
            tree = queue.pop();
        }
        return false;
    }

    dfs(query) {
        const key = Object.keys(query);
        const value = query[key];
        let tree = this.root;
        const stack = [tree];

        while (stack.length) {
            for (let i = 0; i < tree.children.length; i++) {
                if (tree.children[i][key] === value) return tree.children[i];
                stack.push(tree.children[i]);
            };
            tree = stack.pop();
        };
        return false;
    };

    bfs(query) {
        const key = Object.keys(query);
        const value = query[key];
        let tree = this.root;
        const queue = [tree];

        while (queue.length) {
            //enqueue all children of the current tree
            for (let i = 0; i < tree.children.length; i++) {
                if (tree.children[i][key] === value) return tree.children[i];
                queue.unshift(tree.children[i]);
            };
            // dequeue
            tree = queue.pop();
        }
        return false;
    };
};
