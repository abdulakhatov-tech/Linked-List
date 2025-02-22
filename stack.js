const LinkedList = require('./tail');

class LinkedListStack {
    constructor() {
        this._list = new LinkedList();
    }

    push(value) {
        return this._list.prepend(value)
    }

    pop() {
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

const stack = new LinkedListStack();

stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.getSize());
console.log(stack.display());
;