import { useReducer  } from "react";

const initialState = { count : 0 };

function reducer (state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }

        case "DECREMENT":
            return { count: state.count - 1 }

        default:
            return state;
    }
}

const Counter = () => {
    // const [count, setCount] = useState(0);

    // Hook useReducer
    const [state, dispatch] = useReducer(reducer, initialState);

    const add = () => dispatch({ type: "INCREMENT" });
    const remove = () => dispatch({ type: "DECREMENT" });

    return (
        <div style={{textAlign: "center"}}>
            <h2>Counter - Reducer</h2>
            <nav>
                <button onClick={add}>+</button>
                <button onClick={remove}>-</button>
            </nav>
            <h3>{ state.count }</h3>
        </div>
      );
}
 
export default Counter;