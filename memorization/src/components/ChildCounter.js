import { memo } from "react";

const ChildCounter = ({ counter, add, remove }) => {
    console.log("Children Counter gets rendered");
    return (
        <div style={{ border: "thin solid #000", margin: "1rem 0", padding: "1rem" }}>
            <h3>Children of Counter</h3>
            <nav>
                <button onClick={add}>+</button>
                <button onClick={remove}>-</button>
            </nav>
            <h4>Counter is: {counter}</h4>
        </div>
    );
}

// it will ONLY render again if an internal state or given props get updated
export default memo(ChildCounter);