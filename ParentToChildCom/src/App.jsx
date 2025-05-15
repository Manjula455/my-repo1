import { useState } from "react";

import "./App.css";
import Child from "./components/Child";
import NewChild from "./components/newChild";

function App() {
  const userName = "Alice";
  return (
    <>
      <h1>Parent</h1>
      <Child name="Aryan" />
      <Child name="Aryan M" />
      <Child name={userName} />
      <NewChild name="Manjula" />
    </>
  );
}

export default App;
