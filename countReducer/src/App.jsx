import { useReducer } from "react";

import "./App.css";
import { reducerCount } from "./reducer/reducerCount";

const intialState = { count: 0 };

// function reducerCount(state, action) {
//   switch (action.type) {
//     case "increase":
//       return { count: state.count + 1 };
//     case "decrease":
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }

function App() {
  const [state, dispatch] = useReducer(reducerCount, intialState);

  return (
    <>
      <p>Count:{state.count}</p>
      <button onClick={() => dispatch({ type: "increase" })}>add</button>
      <button onClick={() => dispatch({ type: "decrease" })}>substract</button>
    </>
  );
}

export default App;
