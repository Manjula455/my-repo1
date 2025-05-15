import React from "react";
import { useContext } from "react";
import ContextMessage from "../contexts/ContextMessage";

function SendMessage() {
  const { setMessage } = useContext(ContextMessage);
  return (
    <div>
      <h3>Send Message</h3>
      <button
        onClick={() => {
          setMessage("New Message");
        }}
      >
        Send Message
      </button>
    </div>
  );
}

export default SendMessage;
