import React, { useContext } from "react";
import ContextMessage from "../context/ContextMessage";

function RecieveChild() {
  const { message } = useContext(ContextMessage);
  return (
    <>
      <h2>Recieve Message</h2>
      <p>Message:{message}</p>
    </>
  );
}

export default RecieveChild;
