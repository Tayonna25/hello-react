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
              ? "https://example.com/gumball-machine.png"
              : "https://imgbin.com/png/LpshUujS/chewing-gum-gumball-machine-bubble-gum-png")
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