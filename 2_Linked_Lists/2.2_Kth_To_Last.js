const LinkedList = require("./Linked_List");

function kToLast(rootNode, k) {

  const arr = [];

  let currentNode = rootNode;
  while (currentNode) {
    arr.push(currentNode.val);
    currentNode = currentNode.next;
  }

  return arr[arr.length - k];
}



const rootNode = new LinkedList();
rootNode.append(5);
rootNode.append(5);
rootNode.append(6);
rootNode.append(9);
rootNode.append(3);
rootNode.append(3);
rootNode.append(1);
rootNode.append(10);
rootNode.append(9);
console.log(kToLast(rootNode.head(), 3));
console.log(kToLast(rootNode.head(), 4));
