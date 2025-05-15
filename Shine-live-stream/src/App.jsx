import { useState } from "react";

import "./App.css";
import { useReducer } from "react";
function reducer(state, action) {
  return action;
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  const handleClick = () => {
    dispatch(count + 1);
  };
  return (
    <>
      <button onClick={handleClick}>increase</button>
      <label>count:{count}</label>
      <button>decrease</button>
    </>
  );
}

export default App;
