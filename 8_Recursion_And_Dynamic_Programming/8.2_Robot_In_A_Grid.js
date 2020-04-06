/*
  [0, 1, 0]
  [0, 0, 0]
  [0, 1, 0]

  [0, 1, 0, 1]
  [0, 0, 1, 0]
  [0, 0, 0, 1]
  [1, 1, 0, 0]
*/



const robotInAGrid = (grid, path, currentRow = 0, currentColumn = 0) => {
  const endRow = grid.length - 1;
  const endColumn = grid[0].length - 1;

  if (currentRow === endRow && currentColumn === endColumn) {
    return path;
  }

  let nextRow = currentRow;
  let nextColumn = currentColumn;
  if (currentColumn + 1 < grid[currentRow].length && grid[nextRow][currentColumn + 1] !== 1) {
    nextColumn += 1;
  } else if (currentRow + 1 < grid.length && grid[currentRow + 1][nextColumn] !== 1) {
    nextRow += 1;
  }

  path.push([nextRow, nextColumn]);
  return robotInAGrid(grid, path, nextRow, nextColumn);
}


const grid = [[0, 1, 0], [0, 0, 0], [0, 1, 0]]
const grid2 = [[0, 1, 0, 1], [0, 0, 1, 0], [0, 0, 0, 1], [1, 1, 0, 0]]
const path = [[0, 0]];
console.log(robotInAGrid(grid2, path));