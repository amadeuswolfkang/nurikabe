import React from 'react';
import logo from './logo.svg';
import Grid from "./components/grid/Grid";
import Instructions from './components/instructions/Instructions';
import './App.css';

function App() {
  return (
    <div className="App">
      <Instructions/>
      <Grid />
    </div>
  );
}

export default App;
