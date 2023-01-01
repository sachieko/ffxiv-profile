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
      <Menu message={'Nagisa Shibata 柴田の凪沙'} menuLinks={['profile', 'gallery', 'connect', 'ooc']} ></Menu>
      <MainView />
    </MenuProvider>
    </div>
  );
};

export default App;
