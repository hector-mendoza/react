import { memo, useMemo } from "react";

const ChildCounter = ({ counter, add, remove }) => {

    // useMemo() => memorizes the result of a function
    const superNum = useMemo(() => {
        let num = 0;
        for (let i = 0; i < 1000000000; i++) {
            num++;
        }

        return num;
    }, []);

    // let superNum = 0;
    // for (let i = 0; i < 1000000000; i++) {
    //     superNum++;
    // }

    console.log("Children Counter gets rendered");
    return (
        <div style={{ border: "thin solid #000", margin: "1rem 0", padding: "1rem" }}>
            <h3>Children of Counter</h3>
            <h4>Counter is: {counter}</h4>
            <nav>
                <button onClick={add}>+</button>
                <button onClick={remove}>-</button>
            </nav>
            <h5>{superNum}</h5>
        </div>
    );
}

// it will ONLY render again if an internal state or given props get updated
export default memo(ChildCounter);