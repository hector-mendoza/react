import { useReducer  } from "react";

const initialState = { count : 0 };

const init = (initialState) => {
    return { count: initialState.count + 100 }
};

const TYPES = {
    INCREMENT: "INCREMENT",
    INCREMENT_5: "INCREMENT_5",
    DECREMENT: "DECREMENT",
    DECREMENT_5: "DECREMENT_5",
    RESET: "RESET"
};

function reducer (state, action) {
    switch (action.type) {
        case TYPES.INCREMENT:
            return { count: state.count + 1 }

        case TYPES.INCREMENT_5:
            return { count: state.count + action.payload }

        case TYPES.DECREMENT:
            return { count: state.count - 1 }

        case TYPES.DECREMENT_5:
            return { count: state.count - action.payload }

        case TYPES.RESET:
            return { count: initialState.count }

        default:
            return state;
    }
}

const Counter = () => {
    // const [count, setCount] = useState(0);

    // Hook useReducer
    // init: OPTIONAL - it gets applied only when the component has been mounted.
    const [state, dispatch] = useReducer(reducer, initialState, init);

    // type => defines the action type that the REDUCER function will follow
    // payload => will be the new value => action on the REDUCER function
    const add = () => dispatch({ type: TYPES.INCREMENT });
    const add_5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
    const remove = () => dispatch({ type: TYPES.DECREMENT });
    const remove_5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
    const reset = () => dispatch({ type: TYPES.RESET });

    return (
        <div style={{textAlign: "center"}}>
            <h2>Counter - Reducer</h2>
            <nav>
                <button onClick={add}>+</button>
                <button onClick={add_5}>+5</button>
                <button onClick={remove}>-</button>
                <button onClick={remove_5}>-5</button>
                <button onClick={reset}>RESET</button>
            </nav>
            <h3>{ state.count }</h3>
        </div>
      );
}
 
export default Counter;