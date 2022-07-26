import React, { Component } from 'react';

export default class ComponentCommunication extends Component {
    state = {
        counter: 0,
    };

    increaseCounter = (e) => {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    render() {
        return (
            <>
                <h2>Communication between Components</h2>
                <Child increaseCounter={this.increaseCounter} message="Message for Child" />
                <Child increaseCounter={this.increaseCounter} message="Message for other Child" />
                <p>Counter: {this.state.counter}</p>
            </>
        )
    }
}

// Send info from Parent to Child - use PROPS
// Send info from Child to Parent - use EVENTS & STATE
function Child(props) {
    return (
        <>
            <h3>{props.message}</h3>
            <button onClick={props.increaseCounter}>Increase Counter</button>
        </>
    )
}

