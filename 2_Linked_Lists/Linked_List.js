class LinkedList {
  constructor() {
    this.root = null;
  }

  head() {
    return this.root;
  }

  delete(val) {
    if (this.root) {
      let currentNode = this.root;
      while (currentNode.next) {
        if (currentNode.next.val === val) {
          if (currentNode.next.next) {
            currentNode.next = currentNode.next.next;
          } else {
            currentNode.next = null;
          }
        }
      }
    }
    return this.root;
  }

  append(val) {
    const nodeToInsert = {
      val,
      next: null
    }
    if (this.root) {
      let currentNode = this.root
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = nodeToInsert
    } else {
      this.root = nodeToInsert
    }
    return nodeToInsert;
  }

  toArray() {
    let currentNode = this.root;
    const arr = [];
    while (currentNode) {
      arr.push(currentNode.val);
      currentNode = currentNode.next;
    }

    return arr;
  }
}

module.exports = LinkedList;