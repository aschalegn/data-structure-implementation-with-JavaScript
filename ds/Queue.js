class Queue {
    constructor(array = []) {
        this.queue = array;
        this.length = this.queue.length;
    }

    print() {
        return this.queue;
    }

    enqueue(element) {
        this.length++;
        this.queue.push(element);
    }

    dequeue() {
        if (this.isEmpty()) throw Error("can not deque an emply queue");
        this.length--;
        this.queue.shift();
    }

    isEmpty() {
        if (this.queue.length > 0) return false;
        return true;
    }

    peek() {
        if (this.isEmpty()) return "the queue is empty";
        return this.queue[0];
    }
}

export default Queue;