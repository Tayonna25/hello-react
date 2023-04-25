import logo from './logo.svg';
import './App.css';

function MagicButton() {
  return (
    <>
    <h3>This is a magic button</h3>
    <button>Magic</button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MagicButton/>
      </header>
    </div>
  );
}

export default App ;