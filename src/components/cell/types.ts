export type CellColor = "white" | "black";

export type CellData = {
  rowIndex: number;
  columnIndex: number;
  color: CellColor;
  number?: number;
}