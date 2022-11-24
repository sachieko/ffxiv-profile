import React from 'react';
import './App.css';
import Menu  from './Components/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>App header</span>
      </header>
    <Menu message={'This is a menu header'} menuLinks={['Link 1', 'Link 2', 'Link 3']} ></Menu>
    </div>
  );
};

export default App;
