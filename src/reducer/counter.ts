import { ActionI, StateI } from "./counter.interfaces";

export const initialState = {
  count: 0
};

export const Counter = (state: StateI, action: ActionI): StateI => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + (action.payload ? action.payload : 1) };

    case "DECREMENT":
      return { count: state.count - (action.payload ? action.payload : 1) };

    case "RESET":
      return { count: initialState.count };

    default:
      return state;
  }
};