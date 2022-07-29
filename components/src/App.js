// always import React, even if is not needed
import React from 'react';

import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import PropsComponent from './components/Props';
import State from './components/State';
import ConditionalRender from './components/ConditionalRender';
import ElemenetsRender from './components/ElementsRender';
import Events from './components/Events';
import { EventsES7, MoreEvents } from './components/EventsES7';
import ComponentCommunication from './components/ComponentCommunication';
import LifeCyle from './components/LifeCycle';
import AjaxAPIs from './components/AjaxAPIs';
import CounterHooks from './components/CounterHooks';

function FunctionComponent() {
  const cont = 'A component with props';
  return (
    <div className="App">
      <header className="App-header">
        <CounterHooks name="Daniel" />
        <hr />
        <AjaxAPIs />
        <hr />
        <LifeCyle />
        <hr />
        <ComponentCommunication />
        <hr />
        <MoreEvents />
        <hr />
        <EventsES7 />
        <hr />
        <Events />
        <hr />
        <ElemenetsRender />
        <hr />
        <ConditionalRender />
        <hr />
        <PropsComponent
          normalString="Normal string"
          justNumber={17}
          justBoolean={true}
          anArray={[1, 2, 3]}
          anObject={{ 'name': 'hector', 'age': 17 }}
          aFunction={num => num * num}
          reactComponent={<ClassComponent msg={cont} />}
        />
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
        <State />

      </header>
    </div>
  )
}

function App() {
  return (
    <>
      <FunctionComponent />
    </>
  );
}

export default App;
