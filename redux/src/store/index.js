import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterReducer";

const reducer = {
  counter: counterReducer,
};

const store = configureStore({
  reducer,
});

// const store = createStore(reducer);

store.subscribe(() => console.log(store));

export default store;
