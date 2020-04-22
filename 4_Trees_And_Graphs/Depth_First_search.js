const visited = {};
const adjacencyList = {
  a: ["b", "d"],
  b: ["c"],
  c: ["d", "e"],
  d: ["g"],
  e: ["a", "f"],
  f: ["b"],
  g: []
}

const depthFirstSearch = (currentNode) => {
  if (!currentNode || visited[currentNode]) {
    return;
  }
  console.log(currentNode);
  visited[currentNode] = true;

  for (let adjacentNode of adjacencyList[currentNode]) {
    if (!visited[adjacentNode]) {
      depthFirstSearch(adjacentNode);
    }
  }
}

const startNode = Object.keys(adjacencyList)[0];
depthFirstSearch(startNode);
