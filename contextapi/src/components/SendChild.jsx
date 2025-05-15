import React from "react";
import { useContext } from "react";
import ChildContext from "../context/ChildContext";

function SendChild() {
  const { setMessage } = useContext(ChildContext);
  return (
    <>
      <h2>Child Sender</h2>
      <button onClick={() => setMessage("Recieved from child")}>Sender</button>
    </>
  );
}
export default SendChild;
