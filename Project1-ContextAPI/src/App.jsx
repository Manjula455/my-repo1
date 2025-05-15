import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sender from "./components/Sender";
import Reciever from "./components/Reciever";
import MessageContext from "./context/MessageContext";

function App() {
  const [message, setMessage] = useState("");
  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      <h1 className="bg-indigo-500 hover:bg-fuchsia-500 text-white px-3 py-2">
        Context API
      </h1>
      <Sender />
      <Reciever />
    </MessageContext.Provider>
  );
}

export default App;
