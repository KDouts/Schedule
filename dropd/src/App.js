
import React from 'react';
import './App.css';
import Import from "./components/Import/Import";
import DateTime from './components/DateTime/DateTime';
import Schedule from './components/Schedule/Schedule';

function App() {
  return (
    <div className="App">
      <p>Hello World!</p>
      <DateTime />
      {/* <Import /> */}
      <Schedule />
    </div>
  );
}

export default App;
