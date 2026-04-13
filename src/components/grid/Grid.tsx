import { useEffect, useState } from "react";
import "./Grid.css";
import { checkIslands, checkSea, checkPools } from "../../utils/gridUtils";
import { Cell } from "../cell/Cell";
import { CellData } from '../cell/types';

type GridProps = {
  createPuzzle: () => CellData[][];
  dimensions: string;
  isPuzzleComplete: (T: boolean) => void;
}

const Grid = ({ createPuzzle, dimensions, isPuzzleComplete }: GridProps) => {
  const [grid, setGrid] = useState(createPuzzle());
  //const [grid, setGrid] = useState(createEasyPuzzle);

  useEffect(() => {
    if (checkIslands(grid) && checkSea(grid) && checkPools(grid)) {
      isPuzzleComplete(true);
    }
  }, [grid, isPuzzleComplete])

  const toggleCell = (rowIndex: number, columnIndex: number) => {
    setGrid(prevGrid =>
      prevGrid.map((r, rIndex) =>
        r.map((cell, cIndex) =>
          rIndex === rowIndex && cIndex === columnIndex
            ? { ...cell, color: cell.color === "white" ? "black" : "white" }
            : cell
        )
      ));
  };

  return (
    <div className={ `grid grid-dimensions-${dimensions}`}>
      {grid.map((row) =>
        row.map(cell =>
          <Cell
            key={`${cell.rowIndex}, ${cell.columnIndex}`}
            cell={cell}
            onClick={toggleCell}
          />)
      )}
    </div>
  );
};

export default Grid;
