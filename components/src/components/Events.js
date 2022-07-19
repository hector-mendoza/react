import React, { Component } from 'react';

export default class Events extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };

        // only for Classes Components
        // so "this" can be accessible via methods
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase(e) {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    decrease(e) {
        this.setState({
            counter: this.state.counter === 0 ? 0 : this.state.counter - 1,
        })
    }

    render() {
        return (
            <>
                <h2>Component Events on Classes</h2>
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