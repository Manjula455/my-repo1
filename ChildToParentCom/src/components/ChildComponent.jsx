import React from "react";

function ChildComponent({ sendToParent }) {
  return (
    <div>
      <button
        onClick={() => {
          sendToParent("Hi parent, message from child");
        }}
      >
        Send Message to Parent
      </button>
    </div>
  );
}
export default ChildComponent;
