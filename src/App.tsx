import Grid from "./components/grid/Grid";
import Instructions from "./components/instructions/Instructions";
import Modal from "./components/modal/Modal";
import './App.css';
import { useState } from "react";

function App() {

    const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="App">
      <Modal isOpen = {isOpen} onClose = {()=>setIsOpen(false)}/>
      <Instructions/>
      <Grid />
    </div>
  );
}

export default App;
