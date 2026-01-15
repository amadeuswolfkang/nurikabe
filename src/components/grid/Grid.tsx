import { useEffect, useState } from "react";
import "./Grid.css";
import { createSamplePuzzle, createEasyPuzzle, checkIslands } from "../../utils/gridUtils";
import { Cell } from "../cell/Cell";

const Grid = () => {
  const [grid, setGrid] = useState(createSamplePuzzle);
  //const [grid, setGrid] = useState(createEasyPuzzle);

  useEffect(() => {
    checkIslands(grid);
  }, [grid])

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
    <div className="grid">
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
