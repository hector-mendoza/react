// always import React, even if is not needed
import React from 'react';

import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';

function FunctionComponent() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
  )
}

function App() {
  const cont = 'A component with props';
  return (
    <>
      <FunctionComponent />
      <ClassComponent msg={cont} />
    </>
  );
}

export default App;
