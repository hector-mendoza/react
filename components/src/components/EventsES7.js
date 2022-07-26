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
                    <button onClick={this.decrease}>-</button>
                    <button onClick={this.increase}>+</button>
                </nav>
                <div className='counter'>
                    <span>Counter: </span>
                    <span>{this.state.counter}</span>
                </div>
            </>
        )
    }
}

// We need props for "Event Attributes"
// function SimpleButton(props) {
//     return (
//         <button onClick={props.ownClick}>Button made as a Component</button>
//     )
// }

// Arrow function en component
// const SimpleButton = (props) => {
//     <button onClick={props.ownClick}>Button made as a Component</button>
// }

// Deestructuracion props
const SimpleButton = ({ ownClick }) => {
    <button onClick={ownClick}>Button made as a Component</button>
}

// Event attributes are for JSX Tags, not for Components!!
export class MoreEvents extends Component {
    handleClick = (e) => {
        // synthetic event from React
        console.log(e);

        // native event from Js
        console.log(e.nativeEvent);
    }

    // if we need to pass more params
    handleClickEvent = (e, message) => {
        console.log(message);
    }
    render() {
        return (
            <>
                {/* Synthetic, Native and Customized */}
                <h2>More about EVENTS</h2>
                <button onClick={this.handleClick}>Hey</button>

                <button onClick={(e) => this.handleClickEvent(e, 'passing param from an event!')}>Hey from event</button>

                {/* Customized Event */}
                <SimpleButton ownClick={(e) => this.handleClickEvent(e, 'passing param from an event!')} />
            </>
        )
    }
}