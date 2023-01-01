import React from 'react';
import './App.scss';
import MainView from './Components/MainView';
import Menu  from './Components/Menu';
import { MenuProvider } from './Providers/MenuContext'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>App header</span>
      </header>
    <MenuProvider>
      <Menu message={'This is a menu header'} menuLinks={['profile', 'gallery', 'ooc', 'view4']} ></Menu>
      <MainView />
    </MenuProvider>
    </div>
  );
};

export default App;
