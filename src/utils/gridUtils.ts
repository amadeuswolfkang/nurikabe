import { CellData } from "../components/cell/types";

export const DIMENSIONS = 9;

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