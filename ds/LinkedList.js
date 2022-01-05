class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertAtHead(data) {
        const newNode = { value: data, next: null };
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    insertAtEnd(data) {
        const newNode = { value: data, next: null };
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    removeFromHead() {
        this.head = this.head.next;
        this.length--;
    }

    removeFromEnd() {
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
        this.tail = current;
        this.length--;
    }
};



export default LinkedList;
