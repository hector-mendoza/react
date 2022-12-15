import { useReducer } from "react";
import { counterReducer, counterInitialState, counterInit } from "../reducers/counterReducer";
import { TYPES } from "../actions/counterActions";

const BetterCounter = () => {

    const [state, dispatch] = useReducer(counterReducer, counterInitialState, counterInit);

    const add = () => dispatch({ type: TYPES.INCREMENT });
    const add_5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
    const remove = () => dispatch({ type: TYPES.DECREMENT });
    const remove_5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
    const reset = () => dispatch({ type: TYPES.RESET });

    return (
        <div style={{ textAlign: "center" }}>
            <h2>BetterCounter - Reducer</h2>
            <nav>
                <button onClick={add}>+</button>
                <button onClick={add_5}>+5</button>
                <button onClick={remove}>-</button>
                <button onClick={remove_5}>-5</button>
                <button onClick={reset}>RESET</button>
            </nav>
            <h3>{state.count}</h3>
        </div>
    );
}

export default BetterCounter;