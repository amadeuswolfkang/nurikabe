import { CellData, CellColor } from "../components/cell/types";

export const DIMENSIONS = 9;
export const EASY_DIMENSIONS = 3;

const samplePuzzle: number[][] = [
  [0, 0, 0, 0, 0, 0, 7, 0, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 3, 0, 0],
  [0, 2, 0, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 4, 0],
  [0, 0, 5, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 0, 3, 0, 0, 0, 0, 0, 0],
];

const easyPuzzle: number[][] = [
  [3, 0, 0],
  [0, 0, 0],
  [0, 0, 3]
];

const floodFill = (
  grid: CellData[][],
  startingRow: number,
  startingCol: number,
  visited: boolean[][],
  color: CellColor
) => {
  const stack: [number, number][] = [[startingRow, startingCol]];
  let size = 0;

  while (stack.length > 0) {
    const [row, col] = stack.pop()!;

    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
      continue;
    }
    if (visited[row][col]) continue;
    if (grid[row][col].color !== color) continue;

    visited[row][col] = true;
    size++;

    stack.push([row - 1, col]);
    stack.push([row, col + 1]);
    stack.push([row + 1, col]);
    stack.push([row, col - 1]);
  }
  return size;
};

export const checkSea = (grid: CellData[][]) => {
    const visited = Array.from({ length: grid.length }, () =>
      Array(grid[0].length).fill(false)
  );

  let totalSeaCount = 0;
  let startRow = -1;
  let startCol = -1;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const cell = grid[row][col];

      if (cell.color === "black") {
        totalSeaCount++;

        if (startRow === -1) {
          startRow = row;
          startCol = col;
        }
      }
    }
  }

  if (totalSeaCount === 0) {
    console.log("checkSea false")
    return false;
  }
  const connectedSeaCount = floodFill(grid, startRow, startCol, visited, "black");

  if (totalSeaCount !== connectedSeaCount) {
    console.log("checkSea false")
    return false
  }
  console.log("checkSea true")
  return true;
};

export const checkIslands = (grid: CellData[][]) => {
  const visited = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(false)
  );

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const cell = grid[row][col];

      if (cell.number && !visited[row][col]) {
        const islandSize = floodFill(grid, row, col, visited, "white");
        if (islandSize !== cell.number) {
          console.log("checkIslands false");
          return false;
        }
      }
    }
  }
  console.log("checkIslands true");
  return true;
};

export const createEasyPuzzle = (): CellData[][] => {
  return easyPuzzle.map((row, rowIndex) =>
    row.map((number, columnIndex) => (
    number === 0 ? {
      rowIndex,
      columnIndex,
      color: "white"
    } : {
      rowIndex,
      columnIndex,
      color: "white",
      number: number
    }))
  );
};

export const createBlankGrid = (): CellData[][] => {
  return Array.from({ length: DIMENSIONS }, (_, rowIndex) =>
    Array.from({ length: DIMENSIONS }, (_, columnIndex) => ({
      rowIndex,
      columnIndex,
      color: "white",
    }))
  );
};

export const createSamplePuzzle = (): CellData[][] => {
  return samplePuzzle.map((row, rowIndex) =>
    row.map((number, columnIndex) => (
    number === 0 ? {
      rowIndex,
      columnIndex,
      color: "white"
    } : {
      rowIndex,
      columnIndex,
      color: "white",
      number: number
    }))
  );
};