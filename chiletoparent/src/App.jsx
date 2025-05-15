import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Child from "./components/Child";

function App() {
  const [messageOne, setMessageOne] = useState("No message");

  return (
    <>
      <h1>Parent component: {messageOne}</h1>
      <Child handleClick={() => setMessageOne("New message")} />
      <Child handleClick={() => setMessageOne("Second New message")} />
    </>
  );
}

export default App;
