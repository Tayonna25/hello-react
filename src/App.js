import React, { useState } from "react";
import "./App.css";

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
              ? "https://cdn.pixabay.com/photo/2013/07/13/01/05/gumball-machine-155068_1280.png"
              : "https://cdn.pixabay.com/photo/2013/07/12/15/56/gumball-machine-151988_1280.png"
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