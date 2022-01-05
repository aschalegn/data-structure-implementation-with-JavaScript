class Stack {
    constructor(array = []) {
        this.array = array;
        this.length = this.array.length;
    }

    print() {
        return this.array;
    }

    isEmpty() {
        if (this.array.length > 0) return false;
        return true;

    }

    add(element) {
        this.array.push(element);
        this.length++;
    }

    remove() {
        if (this.isEmpty()) throw Error("Can't remove from empty stack");
        this.length--;
        return this.array.pop();
    }

    peek() {
        if (this.isEmpty()) return "the stack is empty";
        return this.array.at(-1);
    }
}

export default Stack;