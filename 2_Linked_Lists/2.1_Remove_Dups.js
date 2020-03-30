const LinkedList = require("./Linked_List");

function removeDups(rootNode) {
  let currentNode = rootNode;
  const duplicates = {};
  while (currentNode.next) {
    duplicates[currentNode.val] = 1;
    if (duplicates[currentNode.next.val]) {
      if (currentNode.next.next) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode.next = null;
      }
    } else {
      currentNode = currentNode.next;
    }
  }

  return rootNode;
}

function removeDupsWithoutBuffer(rootNode) {
  let currentNode1 = rootNode;
  while (currentNode1) {
    const currentNode1Val = currentNode1.val;

    let currentNode2 = currentNode1;
    while (currentNode2) {
      if (currentNode2.next && currentNode1Val === currentNode2.next.val) {
        if (currentNode2.next.next) {
          currentNode2.next = currentNode2.next.next;
        } else {
          currentNode2.next = null;
        }
      }

      currentNode2 = currentNode2.next;
    }
    currentNode1 = currentNode1.next;
  }

  return rootNode;
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
removeDupsWithoutBuffer(rootNode.head());
console.log(rootNode.toArray());