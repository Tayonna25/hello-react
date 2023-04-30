import { useState } from 'react';
import { supabase } from './supabaseClient';
import React, { useState } from "react";
import "./App.css";
import {MagicButton} from "./MagicButton"


function MagicButton () { 
  const [count, setCount]= useState(0)
  function doMagic() {
    setCount(count + 1);
  }
  return (
  <>
   <h3>This is a magic button</h3>
   <button onClick={doMagic}>Magic {count}</button>
   </>



  );
}



function App() {
  const [isGreen, setIsGreen] = useState(false);

  const handleButtonClick = () => {
    setIsGreen(!isGreen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          className="gumballMachine"
          src={
            isGreen
              ? "ggreengumball.png"
              : "rredgumball.png"
          }
          alt="Gumball Machine"
        />
        {isGreen ? (
          <p>You like 449!</p>
        ) : (
          <p>You like EB and BBC!</p>
        )}
        <button onClick={handleButtonClick}>
          Click to Change Gumball Machine
        </button>
      </header>
    </div>
  );
}

export default App;
