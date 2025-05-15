import { useState, useEffect } from "react";
import "./App.css";

function useDebounce(value, delay) {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounce(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounce;
}

function App() {
  const [input, setInput] = useState("");
  const debounceInput = useDebounce(input, 500);

  useEffect(() => {
    if (debounceInput) {
      console.log(`Fetch API for: ${debounceInput}`);
    }
  }, [debounceInput]);

  return (
    <>
      <h1>Search Input </h1>
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
}

export default App;
