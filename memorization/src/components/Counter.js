import React, { useCallback, useState } from "react";
import ChildCounter from "./ChildCounter";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [input, setInput] = useState("");

    // useCallback HOOK
    // useCallback(() => {
    // callback;
    // }, [input]);
    const add = useCallback(() => setCounter(counter + 1), [counter]);
    const remove = useCallback(() => setCounter(counter <= 0 ? 0 : counter - 1), [counter]);

    // const add = () => setCounter(counter + 1);
    // const remove = () => setCounter(counter <= 0 ? 0 : counter - 1);
    const handleInput = (e) => setInput(e.target.value);

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Counter</h2>
            <nav>
                <button onClick={add}>+</button>
                <button onClick={remove}>-</button>
            </nav>
            <h3>{counter}</h3>
            <input type="text" onChange={handleInput} value={input} />

            {/* React Memo memorizes the component, but when the component receives functions we need to use 
            useCallback HOOK in order to memorize functions too */}
            <ChildCounter counter={counter} add={add} remove={remove} />
        </div>
    );
}

export default Counter;