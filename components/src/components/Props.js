import React, { Component } from 'react';
import propTypes from 'prop-types';

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
export default function PropsComponent(props) {
    // const array = Object.values(props.anObject);
    return (
        <ul>
            <li>{props.normalString}</li>
            <li>{props.justNumber}</li>
            <li>{props.justBoolean ? 'true' : 'false'}</li>
            <li>
                {props.anArray.join(', ', '')}
            </li>
            <li>
                {props.anObject.name}
                <br />
                {props.anObject.age}
            </li>
            <li>
                {
                    // a function as a prop
                    props.anArray.map(props.aFunction).join(', ', '')
                }
            </li>
            <li>
                {
                    props.reactComponent
                }
            </li>
        </ul>
    )
}

// Default props (properties)
PropsComponent.defaultProps = {
    default: 'Props value from default'
};

// Give types to props: number, string, etc... 
PropsComponent.propTypes = {
    normalString: propTypes.string.isRequired,
    justNumber: propTypes.number,
};