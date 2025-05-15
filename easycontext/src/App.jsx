import { useState } from "react";

import "./App.css";
import ContextMessage from "./contexts/ContextMessage";
import SendMessage from "./components/SendMessage";
import RecieveMessage from "./components/RecieveMessage";

function App() {
  const [message, setMessage] = useState("No message yet");

  return (
    <ContextMessage.Provider value={{ message, setMessage }}>
      <h2>context API</h2>
      <SendMessage />
      <RecieveMessage />
    </ContextMessage.Provider>
  );
}

export default App;
