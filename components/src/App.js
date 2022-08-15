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
import ScrollHooks from './components/ScrollHooks';
import ClockHooks from './components/ClockHooks';
import AjaxHooks from './components/AjaxHooks';
import HooksCustom from './components/HooksCustom';
import References from './components/References';
import Forms from './components/Forms';
import Styles from './components/Styles';
import StylesCSS from './components/Styles.css';

function FunctionComponent() {
  const cont = 'A component with props';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Styles />
        <hr />
        <Forms />
        <hr />
        <References />
        <hr />
        <CounterHooks name="Daniel" />
        {/* <AjaxAPIs /> */}
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
        <State />
        <hr />
        <ScrollHooks />
        <hr />
        <ClockHooks />
        <hr />
        <AjaxHooks />
        <hr />
        <HooksCustom />
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
