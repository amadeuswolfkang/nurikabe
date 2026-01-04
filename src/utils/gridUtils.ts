import { CellData } from "../components/cell/types";

export const DIMENSIONS = 9;

export const createBlankGrid = (): CellData[][] => {
  return Array.from({ length: DIMENSIONS }, (_, rowIndex) =>
    Array.from({ length: DIMENSIONS }, (_, columnIndex) => ({
      rowIndex,
      columnIndex,
      color: "white",
    }))
  );
};