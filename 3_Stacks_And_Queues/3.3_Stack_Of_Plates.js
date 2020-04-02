class SetOfStacks {
  constructor(threshold) {
    this.set = [[]];
    this.threshold = threshold;
  }

  push(element) {
    const currentStackIndex = this.set.length - 1;
    const currentStack = this.set[currentStackIndex];
    if (currentStack.length === this.threshold) {
      this.set.push([element]);
    } else {
      currentStack.push(element);
    }
  }

  pop() {
    const currentStackIndex = this.set.length - 1;
    const currentStack = this.set[currentStackIndex];
    if (currentStack.length - 1 === 0 && currentStackIndex !== 0) {
      this.set.pop();
    } else {
      currentStack.pop();
    }
  }

  popAt(stackIndex) {
    const currentStackIndex = this.set.length - 1;
    if (stackIndex > currentStackIndex) {
      return;
    }

    const currentStack = this.set[stackIndex];
    currentStack.pop();

    for (let i = stackIndex; i + 1 < this.set.length; i++) {
      const nextStackStartElement = this.set[i + 1].shift();
      if (this.set[i + 1].length === 0) {
        this.set.splice(i + 1, 1);
      }
      this.set[i].push(nextStackStartElement);
    }

  }
}

const setOfStacks = new SetOfStacks(2);
setOfStacks.push(8);
setOfStacks.push(3);
setOfStacks.push(5);
setOfStacks.push(6);
setOfStacks.push(9);
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.push(5);
setOfStacks.push(6);
setOfStacks.push(9);
setOfStacks.push(5);
setOfStacks.push(6);
setOfStacks.push(8);
setOfStacks.popAt(9);
console.log(setOfStacks);
setOfStacks.popAt(1);
console.log(setOfStacks);
setOfStacks.popAt(0);
console.log(setOfStacks);

