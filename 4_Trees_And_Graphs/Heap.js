// minHeap
class Heap {
  constructor(heapType = "min") {
    this.heapArr = [];
    if (heapType === "min") {
      this.heapType = "min";
    } else {
      this.heapType = "max";
    }
  }

  root() {
    return this.heapArr[0];
  }

  leftChildValue(parentIndex) {
    return this.heapArr[this.leftChildIndex(parentIndex)];
  }

  rightChildValue(parentIndex) {
    return this.heapArr[this.rightChildIndex(parentIndex)];
  }

  leftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  rightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  parentValue(childIndex) {
    return this.heapArr[this.parentIndex(childIndex)];
  }

  parentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  heapifyUp(currentIndex = this.heapArr.length - 1) {
    const parentIndex = this.parentIndex(currentIndex);
    const isLeftChild = this.leftChildIndex(parentIndex) === currentIndex;
    const isRightChild = this.rightChildIndex(parentIndex) === currentIndex;

    if (isLeftChild && this.heapArr[currentIndex] < this.heapArr[parentIndex]) {
      this.swap(parentIndex, currentIndex);
      this.heapifyUp(parentIndex);
    }

    if (isRightChild) {
      const leftChildIndex = this.leftChildIndex(parentIndex);
      const leftChildValue = this.heapArr[leftChildIndex];
      if (this.heapArr[currentIndex] < leftChildValue && this.heapArr[currentIndex] < this.heapArr[parentIndex]) {
        this.swap(parentIndex, currentIndex);
        this.heapifyUp(parentIndex);
      }
    }
  }

  heapifyDown(currentIndex = 0) {
    // console.log(`Current: ${currentIndex}`);
    const leftChildIndex = this.leftChildIndex(currentIndex);
    const rightChildIndex = this.rightChildIndex(currentIndex);
    const leftChildValue = this.leftChildValue(currentIndex);
    const rightChildValue = this.rightChildValue(currentIndex);
    const maxHeapIndex = this.heapArr.length - 1;

    // console.log(leftChildIndex, rightChildIndex);
    // console.log(maxHeapIndex);
    if ((leftChildIndex <= maxHeapIndex && rightChildIndex <= maxHeapIndex) && this.heapArr[currentIndex] > leftChildValue || this.heapArr[currentIndex] > rightChildValue) {
      if (leftChildValue < rightChildValue) {
        this.swap(currentIndex, leftChildIndex);
        this.heapifyDown(leftChildIndex);
      } else {
        this.swap(currentIndex, rightChildIndex);
        this.heapifyDown(rightChildIndex);
      }
    } else if (leftChildIndex <= maxHeapIndex && this.heapArr[currentIndex] > leftChildValue) {
      this.swap(currentIndex, leftChildIndex);
      this.heapifyDown(leftChildIndex);
    }


  }

  swap(index1, index2) {
    const temp = this.heapArr[index1];
    this.heapArr[index1] = this.heapArr[index2];
    this.heapArr[index2] = temp;
  }
  insert(element) {
    this.heapArr.push(element);
    if (this.heapArr.length === 1) {
      return;
    }
    this.heapifyUp();
  }

  pop() {
    const removedElement = this.heapArr.shift();

    const lastElement = this.heapArr.pop();
    this.heapArr.unshift(lastElement);

    this.heapifyDown();
    return removedElement;
  }
}

const heap = new Heap();
heap.insert(8);
heap.insert(3);
heap.insert(0);
heap.insert(4);
heap.insert(7);
heap.insert(5);
heap.insert(1);
heap.insert(6);
console.log(heap.heapArr);
heap.pop();
heap.pop();
console.log(heap.heapArr);