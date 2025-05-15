import React from "react";

function Child({ handleClick }) {
  return (
    <>
      <h1>Child Component</h1>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Send
      </button>
    </>
  );
}

export default Child;
