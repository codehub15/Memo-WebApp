import React from 'react';
import List from './components/List';
import { RiSendPlaneFill } from 'react-icons/ri';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RiSendPlaneFill className="App-logo" />
      </header>

      <List />
    </div>
  );
}

export default App;
