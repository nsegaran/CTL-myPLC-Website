import React from 'react';
import Banner from './Banner'; // Import the Banner component
import Categories from './Categories'; // Import the Banner component
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <Banner /> {/* Include the Banner component here */}
      <Categories /> {/* Include the Categories component here */}
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
