import { CellData } from "./types";
import "./Cell.css"

type CellProps = {
  cell: CellData;
  onClick: (rowIndex: number, columnIndex: number) => void;
}

export const Cell = ({ cell, onClick }: CellProps) => {
  return(
    <div
      onClick = {() => onClick(cell.rowIndex, cell.columnIndex)}
      className={`cell ${cell.color}`}
    />
  );
};