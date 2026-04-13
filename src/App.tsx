import Grid from "./components/grid/Grid";
import Instructions from "./components/instructions/Instructions";
import Modal from "./components/modal/Modal";
import './App.css';
import { useState, useEffect } from "react";
import { createSamplePuzzle } from "./utils/gridUtils";


function App() {

  const [isOpen, setIsOpen] = useState(true);
  const [isPuzzleComplete, setIsPuzzleComplete] = useState(false);

  useEffect(() => {
    if (isPuzzleComplete) {
      alert("Win!");
    }
  }, [isPuzzleComplete])

  return (
    <div className="App">
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Instructions />
      <Grid createPuzzle={createSamplePuzzle} dimensions={'9'} isPuzzleComplete={setIsPuzzleComplete} />
    </div>
  );
}

export default App;
