import { useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const expensiveValue = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 1_000_000; i++) {
      total = total + i;
    }
    console.log(total);

    // console.log(expensiveValue);
    return total;
  }, []);

  return (
    <>
      <h1>renders only once</h1>
      <div>{expensiveValue}</div>
    </>
  );
}

export default App;
