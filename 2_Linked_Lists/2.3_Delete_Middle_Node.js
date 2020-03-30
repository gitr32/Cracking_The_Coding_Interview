const LinkedList = require("./Linked_List");

function deleteMiddleNode(nodeToDelete) {
  let currentNode = nodeToDelete;
  while (currentNode) {
    if (currentNode.next) {
      currentNode.val = currentNode.next.val;
    }

    if (!currentNode.next.next) {
      currentNode.next = null;
    }

    currentNode = currentNode.next;
  }
}



const rootNode = new LinkedList();
rootNode.append(5);
rootNode.append(5);
rootNode.append(6);
const node9 = rootNode.append(9);
rootNode.append(3);
rootNode.append(3);
rootNode.append(1);
rootNode.append(10);
rootNode.append(9);
deleteMiddleNode(node9);
console.log(rootNode.toArray());
