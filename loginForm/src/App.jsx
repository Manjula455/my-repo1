import { useState } from "react";

import "./App.css";
import LoginUseState from "./components/LoginUseState";
import LoginReducer from "./components/LoginReducer";

function App() {
  return (
    <>
      <h1>Login Form</h1>
      <LoginUseState />
      <LoginReducer />
    </>
  );
}

export default App;
