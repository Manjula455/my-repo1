import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Count from "./components/Count";
import ReducerComp from "./components/ReducerComp";

function App() {
  return (
    <>
      <Count />
      <ReducerComp />
    </>
  );
}

export default App;
