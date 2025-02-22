const LinkedList = require('./tail');

class LinkedListQueue {
    constructor() {
        this._list = new LinkedList();
    }

    enqueue(value) {
        return this._list.append(value)
    }

    dequeue() {
        return this._list.removeFrontFront();
    }

    peek() {
        return this._list.getHeadValue();
    }

    isEmpty() {
        return this._list.isEmpty();
    }

    getSize() {
        return this._list.getSize();
    }

    display() {
        return this._list.display()
    }
}

const stack = new LinkedListQueue();

stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.getSize());
console.log(stack.display());
;