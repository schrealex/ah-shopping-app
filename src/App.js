import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './ShoppingList.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ShoppingList name="Mark" />
    </div>
  );
}

export default App;
