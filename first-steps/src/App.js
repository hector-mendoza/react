import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';

class Formulario extends Component {
    render() {
        return ( <
            form >
            <
            input type = "email"
            placeholder = "email" / >
            <
            input type = "password"
            placeholder = "pass" / >
            <
            /form>

        )
    }
}

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >

        <
        /header> <
        /div>
    );
}

export default App;