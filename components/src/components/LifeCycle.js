import React, { Component } from 'react';

class Clock extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    componentWillUnmount() {
        console.log(3, "The component has been deleted from the DOM");
    }
    render() {
        return <h3>{this.props.hour}</h3>
    }
}

export default class LifeCyle extends Component {
    constructor(props) {
        super(props);
        console.log(0, "The component has been initialized, but isn't in the DOM yet");
        this.state = {
            hour: new Date().toLocaleTimeString(),
            visible: false,
        }
        this.tempo = null;
    }

    componentDidMount() {
        console.log(1, "The component is in the DOM");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(2, "The state/props component have been updated");
        console.log(prevProps);
        console.log(prevState);
    }

    tictac = () => {
        this.tempo = setInterval(() => {
            this.setState({
                hour: new Date().toLocaleTimeString(),
            })
        }, 1000);
    };
    start = () => {
        this.tictac();
        this.setState({
            visible: true,
        });
    };
    stop = () => {
        clearInterval(this.tempo);
        this.setState({
            visible: false,
        });
    };
    render() {
        console.log(4, "The component has been drawed-redrawed, due to a DOM update");
        return (
            <>
                <h2>Components LifeCyle</h2>
                {this.state.visible && <Clock hour={this.state.hour} />}
                <button onClick={this.start}>start</button>
                <button onClick={this.stop}>stop</button>
            </>
        )
    }
}