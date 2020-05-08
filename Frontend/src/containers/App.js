import Canvas from '../components/threeJS/canvas'
import Menu from '../components/menu'
import Keyboard from '../components/toneJS/littleKeyboard'
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Menu/>
      <Canvas/>
      <Keyboard/>
    </div>
  );
}

export default App;
