function routeBetweenNodes(adjacencyList, node1, node2) {

  const startNode = Object.keys(adjacencyList)[0];
  const queue = [startNode];
  const visited = { [startNode]: "visited" };

  while (queue.length > 0) {
    const currentNode = queue.shift();
    console.log(currentNode);
    for (let adjacentNode of adjacencyList[currentNode]) {
      if (!visited[adjacentNode]) {
        queue.push(adjacentNode);
        visited[adjacentNode] = currentNode;
      }
    }
  }

  let count = 0;
  let currentVisitNode = node2;
  while (count <= Object.keys(adjacencyList).length) {
    currentVisitNode = visited[currentVisitNode];
    if (currentVisitNode === node1) {
      return true;
    }
    count++;
  }
  return false;
}

const adjacencyList = {
  a: ["b", "d"],
  b: ["c"],
  c: ["d", "e"],
  d: ["f"],
  e: ["a", "f"],
  f: ["g"],
  g: []
}

console.log(routeBetweenNodes(adjacencyList, "a", "g"));
