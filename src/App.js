import logo from './logo.svg';
import './App.css';
import React from "react";

const Header = () => {
  return <h1>Welcome to my React Lab</h1>;
};

export default Header;

const List = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};



const App = () => {
  const data = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ];

  const isDataEmpty = data.length === 0;

  return (
    <div>
      <Header />
      {isDataEmpty ? <p>No data available</p> : <List data={data} />}
    </div>
  );
};

export default App;

function Bookshelf() {
  return (
    <div>
      <h2>{book.title}  ({book.published})</h2>
      <p>{book.author}</p>
      <img
      className="bookCover"
      src={book.image}
      alt={book.title + ' cover'}
      style={{
        width: book.width,
        height: book.height,
      }}
      />
      </div>




  );
}

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
        <Bookshelf/>
      </header>
    </div>
  );
}

export default App ;