import React, { useState } from "react";
import ChildCounter from "./ChildCounter";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const add = () => setCounter(counter + 1);
    const remove = () => setCounter(counter <= 0 ? 0 : counter - 1);

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Counter</h2>
            <nav>
                <button onClick={add}>+</button>
                <button onClick={remove}>-</button>
            </nav>
            <h3>{counter}</h3>
            <ChildCounter />
        </div>
    );
}

export default Counter;