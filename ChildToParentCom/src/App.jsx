import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChildComponent from "./components/ChildComponent";

function App() {
  const [message, setMessage] = useState("No message yet");
  const handleMessage = (newMassage) => {
    setMessage(newMassage);
  };
  return (
    <>
      <h1>Parent</h1>
      <p>Massage:{message}</p>
      <ChildComponent sendToParent={handleMessage} />
    </>
  );
}

export default App;
