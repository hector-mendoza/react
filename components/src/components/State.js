import React, { Component } from 'react';

function ChildState(props) {
    return (
        <div>
            <h3>
                {
                    props.childCounter
                }
            </h3>
        </div>
    );
}

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                counter: this.state.counter += 1,
            })
        }, 1000);
    }

    render() {
        return (
            <div>
                <h2>The State</h2>
                <p>
                    {
                        this.state.counter
                    }
                </p>
                <ChildState childCounter={this.state.counter} />
            </div>
        );
    }
}