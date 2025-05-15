import React, { useContext } from "react";
import ContextMessage from "../context/ContextMessage";

function SendChild() {
  const { setMessage } = useContext(ContextMessage);
  return (
    <>
      <h2>Send message on click</h2>
      <button onClick={() => setMessage("new message")}>Send</button>
    </>
  );
}
export default SendChild;
