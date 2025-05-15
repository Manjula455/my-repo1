import React from "react";

function Child({ handleClick }) {
  return (
    <>
      <h3>Child Component</h3>
      <button onClick={() => handleClick()}>Child Click</button>
    </>
  );
}

export default Child;
