import { useDispatch, useSelector } from "react-redux";
import { add, rem, add_5, rem_5, reset } from "../actions/counterActions";

const Counter = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter with Redux</h2>
      <p>{state.counter}</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          margin: "0 auto",
          gap: "0 25px",
          maxWidth: "250px",
        }}
      >
        <button onClick={() => dispatch(add_5)}>+5</button>
        <button onClick={() => dispatch(add)}>+</button>
        <button onClick={() => dispatch(rem)}>-</button>
        <button onClick={() => dispatch(rem_5)}>-5</button>
        <button onClick={() => dispatch(reset)}>RESET</button>
      </div>
    </div>
  );
};

export default Counter;
