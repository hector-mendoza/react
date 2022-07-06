import React, { Component } from 'react';

// Functional Component
// function ClassComponent(props) {
//     return (
//         <p>{props.msg}</p>
//     )
// }

// Class Component
// class ClassComponent extends Component {
//     // Class components should always include render() method
//     render() {
//         return (
// for Class Components we need to pass "this" for props
//             <p>{this.props.msg}</p>
//         )
//     }
// }

// Functional with variable Component
// const ClassComponent = (props) => {
//     return (
//         <p>{props.msg} via arrow function</p>
//     )
// }
// export default ClassComponent;

// Functional with variable Component with return on it
// export default function ClassComponent(props) {
//     return (
//         <p>{props.msg}</p>
//     )
// }

// Functional with variable Component with return on it and
// a default props
export default function ClassComponent(props) {
    return (
        <p>{props.default}</p>
    )
}

// Default props (properties)
ClassComponent.defaultProps = {
    default: 'Props value from default'
}