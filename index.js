class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._size = 0;
  }

  isEmpty() {
    return this._size === 0;
  }

  getSize() {
    return this._size;
  }

  prepend(value) {
    const node = new Node(value);

    if (!this.isEmpty()) {
      node.next = this._head;
    }

    this._head = node;
    this._size++;
  }

  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this._head = node;
    } else {
      let prev = this._head;

      while (prev.next) {
        prev = prev.next;
      }

      prev.next = node;
    }

    this._size++;
  }

  insert(value, idx) {
    if (idx < 0 || idx >= this._size) {
      console.log(`Index must be between 0 and ${this._size - 1}`);
      return;
    }

    if (idx === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);

      let prev = this._head;

      for (let i = 0; i < idx - 1; i++) {
        prev = prev.next;
      }

      node.next = prev.next;
      prev.next = node;
    }

    this._size++;
  }

  removeFrom(index) {
    if (index < 0 || index >= this._size) {
      return null;
    }

    let removedNode;

    if (index === 0) {
      removedNode = this._head;
      this._head = this._head.next;
    } else {
      let prev = this._head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this._size--;

    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }

    if (this._head.value === value) {
      this._head = this._head.next;
      this._size--;
      return value;
    } else {
      let prev = this._head;

      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }

      if (prev.next) {
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this._size--;

        return removedNode.value;
      }

      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }

    let idx = 0;
    let current = this._head;

    while (current) {
      if (current.value === value) {
        return idx;
      }

      current = current.next;
      idx++;
    }

    return -1;
  }

  reverse() {
    let prev = null;
    let current = this._head;

    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this._head = prev;
  }

  display() {
    let current = this._head;
    let listValues = "";

    while (current) {
      listValues += `${current.value}${current.next ? ", " : ""}`;
      current = current.next;
    }

    return listValues;
  }
}

const list = new LinkedList();

// List
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);

// list.append(40);
// list.append(50);
// list.append(60);

// list.insert(70, 2);
// list.insert(80, 5);

// console.log(list);
// console.log("Size:", list.getSize());
// console.log("isEmpty:", list.isEmpty());

// console.log("Display:", list.display());
