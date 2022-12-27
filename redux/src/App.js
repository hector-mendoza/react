import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h1>Redux</h1>
        <hr />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
