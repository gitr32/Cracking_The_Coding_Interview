
function breadthFirstSearch(adjacencyList) {
  const firstNode = Object.keys(adjacencyList)[0];
  const queue = [firstNode];
  const visited = {};
  while (queue.length > 0) {
    const node = queue.shift();
    if (!visited[node]) {
      visited[node] = 1;
      console.log(node);
      const adjacentNodes = adjacencyList[node];
      for (let adjacentNode of adjacentNodes) {
        if (!visited[adjacentNode]) {
          queue.push(adjacentNode);
        }
      }
    }
  }
}

const adjacencyList = {
  a: ["b", "d"],
  b: ["c"],
  c: ["d", "e"],
  d: ["g"],
  e: ["a", "f"],
  f: ["b"],
  g: []
}

breadthFirstSearch(adjacencyList);