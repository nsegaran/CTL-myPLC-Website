import React from 'react';
import logo from './logo.svg';
import Banner from './Banner'; // Import the Banner component
import Categories from './Categories'; // Import the Banner component

function App() {
  return (
    <div className="App">
      <Banner /> {/* Include the Banner component here */}
      <Categories /> {/* Include the Categories component here */}
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
