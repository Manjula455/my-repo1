import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(1);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h2>Count with useState</h2>
      <p>Start Add:{count}</p>

      <button onClick={increase}>Add</button>
      <button onClick={decrease}>Substract</button>
    </>
  );
}
export default Count;
