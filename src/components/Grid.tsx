import './Grid.css';

const Grid = () => {
  const rows = 9;
  const cols = 9;
  const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));

  return (
    <div className="grid">
      {matrix.map((row, rowIndex) =>
        row.map((col, colIndex) =>
        <div key={`${rowIndex}, ${colIndex}`}>
            <div className="cell" onClick={(e) => e.currentTarget.classList.toggle("black")}/>
        </div>)
      )}
    </div>
  );
};

export default Grid;
