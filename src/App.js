import React, { useState } from 'react';
import { supabase } from './supabaseClient';
import "./App.css";

function Library() {
  const [myBook, setMyBooks ] = useState([]);
  async function getBooks() {
    let { data: books, error } = await supabase
    .from('books')
    .select('*')
    setMyBooks(books);
  }
  getBooks();
  return (
    <table> 
      {
        setMyBooks.map(b => {
            <tr> 
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.isbn}</td>

            </tr>
          })
      }
    </table>

  );
} 

function MagicButton () { 
  const [count , setCount]= useState(0)
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
export { MagicButton };


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
          Click MagicButton
        </button>
      </header>
    </div>
  );
}
export default App;
