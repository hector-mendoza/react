import React, { Component } from 'react';

function Login() {
    return (
        <h3>Login</h3>
    );
}

function Logout() {
    return (
        <h3>Logout</h3>
    );
}

export default class ConditionalRender extends Component {

    constructor(props) {
        super(props);

        this.state = {
            session: 'true',
        }
    }

    render() {
        return (
            <>
                <h1>ConditionalRender</h1>
                {/* same as a normal IF */}
                {this.state.session ? <Login /> : <Logout />}
            </>
        );
    }
}