// HOOKS!!!
import React, { useState } from 'react';

export default function CounterHooks(props) {
    // defining our useState HOOK, in this case 0 is the default value
    const [counter, setCounter] = useState(0);

    const increase = () => setCounter(counter + 1);
    const decrease = () => setCounter(counter === 0 ? 0 : counter - 1);

    return (
        <>
            <h2>Hooks - useState</h2>
            <nav>
                <button onClick={decrease}>-</button>
                <button onClick={increase}>+</button>
            </nav>
            <div className='counter'>
                <span>Counter: </span>
                <span>{counter}</span>
                <br />
                {props.name}
            </div>
        </>
    )
}

// Default props
CounterHooks.defaultProps = {
    'name': 'Hector'
}