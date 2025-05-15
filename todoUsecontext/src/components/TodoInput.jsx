import React from "react";
import { useState } from "react";
import { useTodos } from "../context/TodoContext";

function TodoInput() {
  const [input, setInput] = useState("");
  const { addTodo } = useTodos();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Add todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoInput;
