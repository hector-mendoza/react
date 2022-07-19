import React, { Component } from 'react';

// Property Initializer
export class EventsES7 extends Component {

    state = {
        counter: 0,
    };

    // Arrow function to prevent the default binding
    // so it can inherit the context of the CLASS to which it belongs
    increase = (e) => {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    decrease = (e) => {
        this.setState({
            counter: this.state.counter === 0 ? 0 : this.state.counter - 1,
        })
    }

    render() {
        return (
            <>
                <h2>Component Events on Classes - <small>NEW WAY</small></h2>
                <nav>
                    {/* To call functions in Classes we need to */}
                    {/* we need to call them as this.functionName */}
                    <button onClick={this.increase}>+</button>
                    <button onClick={this.decrease}>-</button>
                </nav>
                <div className='counter'>
                    <span>Counter: </span>
                    <span>{this.state.counter}</span>
                </div>
            </>
        )
    }
}