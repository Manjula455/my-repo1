import React from "react";
import { useContext } from "react";
import ContextMessage from "../contexts/ContextMessage";

function RecieveMessage() {
  const { message } = useContext(ContextMessage);
  return (
    <div>
      <h2>Recived Message:{message}</h2>
    </div>
  );
}

export default RecieveMessage;
