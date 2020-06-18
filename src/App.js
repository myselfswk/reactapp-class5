import React, { useState } from 'react';
import Parent from './Parent';
import './App.css';
import CounterContext from './CounterContext';

function App() {
  let countState = useState(1);

  return (
    <CounterContext.Provider value={countState}>
      <div className="App">
        <div className="App-header">
          <Parent />
        </div>
      </div>
    </CounterContext.Provider>
  )
}

//CounterContext is the root component of App, it is important to put value in CounterContext.Provider
export default App;