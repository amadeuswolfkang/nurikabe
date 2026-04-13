import "./Tutorial.css";
import Grid from "../grid/Grid"
import { createStepOnePuzzle } from "../../utils/gridUtils"
import { useState, useEffect } from "react"

type TutorialProps = {
    isButtonEnabled: (T: boolean) => void;
}

const Tutorial = ({ isButtonEnabled }: TutorialProps) => {

      const [isPuzzleComplete, setIsPuzzleComplete] = useState(false);
    
      useEffect(() => {
        if (isPuzzleComplete) {
          isButtonEnabled(true);
        }
      }, [isPuzzleComplete])

    return (
        <div className="container">
            <span>
                Each white square is an <strong>island</strong> square. 🏝️ Each black square is a <strong>sea</strong> square. 🌊 <br></br>
                A numbered square indicates the size of an island.<br></br>

                Click a square to switch it between island and sea.<br></br>

                Try finishing the puzzle below.
            </span>

            <div className="grid-container">
                <Grid createPuzzle={createStepOnePuzzle} dimensions={'3'} isPuzzleComplete={setIsPuzzleComplete} />
            </div>

        </div>
    );


}

export default Tutorial;