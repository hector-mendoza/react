import { DECREMENT, DECREMENT_5, INCREMENT, INCREMENT_5, RESET } from "../types";

export const add = () => ({ type: INCREMENT });
export const rem = () => ({ type: DECREMENT });

export const add_5 = () => ({ type: INCREMENT_5, payload: 5 });
export const rem_5 = () => ({ type: DECREMENT_5, payload: 5 });

export const reset = () => ({ type: RESET });