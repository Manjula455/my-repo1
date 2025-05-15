import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContextMessage from "./context/ContextMessage";
import RecieveChild from "./components/RecieveChild";
import SendChild from "./components/SendChild";

function App() {
  const [message, setMessage] = useState("No message yet");

  return (
    <ContextMessage.Provider value={{ message, setMessage }}>
      <h1>Context API</h1>
      <h2>Parent Component</h2>
      <RecieveChild />
      <SendChild />
    </ContextMessage.Provider>
  );
}

export default App;
