class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  isEmpty() {
    return this._size === 0;
  }

  getSize() {
    return this._size;
  }

  getHeadValue() {
    return this._head.value;
  }

  display() {
    if(this.isEmpty()) {
        return 'List is empty!';
    } else {
        let current = this._head;
        let listValues = "";
    
        while (current) {
          listValues += `${current.value}${current.next ? ", " : ""}`;
          current = current.next;
        }
    
        return listValues;
    }
  }

  prepend(value) {
    const node = new Node(value);

    if(this.isEmpty()) {
        this._head = node;
        this._tail = node;
    } else {
        node.next = this._head;
        this._head = node;
    }

    this._size++
  }

  append(value) {
    const node = new Node(value);

    if(this.isEmpty()) {
        this._head = node;
        this._tail = node;
    } else {
        this._tail.next = node;
        this._tail = node;
    }

    this._size++;
  }

  removeFromFront() {
    if(this.isEmpty()) {
        return null;
    } 

    const value = this._head.value;
    this._head = this._head.next;
    this._size--;

    return value;
  }

  removeFromEnd() {
    if(this.isEmpty()) {
        return null;
    } 

    const value = this._tail.value;

    if(this._size === 1) {
        this._head = null;
        this._tail = null;
    } else {
        let prev = this._head;

        while(prev.next !== this._tail) {
            prev = prev.next
        }

        prev.next = null
        this._tail = prev;
    }

    this._size--;

    return value;
  }
}

module.exports = LinkedList

// const list = new LinkedList();

// list.append(1)
// list.append(2)
// list.append(3)

// list.prepend(4)
// list.prepend(5)
// list.prepend(6)

// list.removeFromEnd();
// list.removeFromFront();

// console.log(list);
// console.log("Size:", list.getSize());
// console.log("isEmpty:", list.isEmpty());

// console.log("Display:", list.display());