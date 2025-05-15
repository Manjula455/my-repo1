import React, { useReducer } from "react";
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function ReducerComp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ backgroundColor: "greenyellow", padding: "10px" }}>
      <h2>Count useing Reducers</h2>
      <p>Count:{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Add</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Substract</button>
    </div>
  );
}

export default ReducerComp;
