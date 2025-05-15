import React from "react";
import { useContext } from "react";
import ChildContext from "../context/ChildContext";
function ReceivedChild() {
  const { message } = useContext(ChildContext);
  return (
    <>
      <h2>Reciever from Child</h2>
      <p>Reciever:{message}</p>
    </>
  );
}
export default ReceivedChild;
