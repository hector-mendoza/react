import React, { Component } from 'react';

// function ClassComponent(props) {
//     return (
//         <p>{props.msg}</p>
//     )
// }

const ClassComponent = (props) => {
    return (
        <p>{props.msg} via arrow function</p>
    )
}

// class ClassComponent extends Component {
//     // Class components should always include render() method
//     render() {
//         return (
// for Class Components we need to pass "this" for props
//             <p>{this.props.msg}</p>
//         )
//     }
// }

export default ClassComponent;