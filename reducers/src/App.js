import BetterCounter from "./components/BetterCounter";
import Counter from "./components/Counter";
import CrudApi from "./components/CrudApi";
import ShoppingCart from "./components/ShoppingCart";


function App() {
  return (
    <div>
      <h1>
        useReducer
      </h1>
      <CrudApi />
      <hr />
      <ShoppingCart />
      <hr />
      <BetterCounter />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
