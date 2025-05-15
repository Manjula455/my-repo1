import { useReducer, useState } from "react";
import "./App.css";
import { CountReducer } from "./Reducers/CountReducer";

const intialCount = { count: 0 };

function App() {
  const [state, dispatch] = useReducer(CountReducer, intialCount);
  return (
    <>
      <h1>Reducers</h1>
      <p>Count:{state.count}</p>
      <button onClick={() => dispatch({ type: "increase" })}>Add</button>
      <button onClick={() => dispatch({ type: "decrease" })}>Subtract</button>
    </>
  );
}

export default App;
