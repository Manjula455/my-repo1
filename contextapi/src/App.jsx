import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//import Child from "./components/Child";
import ChildContext from "./context/ChildContext";
import ReceivedChild from "./components/ReceivedChild";
import SendChild from "./components/SendChild";

function App() {
  const [message, setMessage] = useState("no message");
  // const newMsg = () => {
  //   setMessage("message from child component");
  // };
  return (
    <ChildContext.Provider value={{ message, setMessage }}>
      {/* <h1>Parent Component</h1>
      <p>message:{message} </p>
      <Child handleClick={newMsg} /> */}
      <h1>Parent Component</h1>
      <ReceivedChild />
      <SendChild />
    </ChildContext.Provider>
  );
}

export default App;
