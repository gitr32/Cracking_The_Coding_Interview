const Node = require("./Node");

InOrder = (node) => {
  if (!node) {
    return;
  }
  InOrder(node.left);
  console.log(node.val);
  InOrder(node.right);
}

let node8 = new Node(8);
let node3 = new Node(3);
let node5 = new Node(5);
let node10 = new Node(10);
let node11 = new Node(11);
let node6 = new Node(6);
let node7 = new Node(7);

node8.left = node3;
node8.right = node5;
node3.left = node10;
node3.right = node11;
node5.left = node6;
node5.right = node7;

/*
          8
        /   \
      3       5
    /   \   /   \
   10   11  6    7    
*/

InOrder(node8);