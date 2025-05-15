import { useState } from "react";
import "./App.css";
import TodoProvider from "./context/TodoContext";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoProvider>
      <h2>Todo App</h2>
      <TodoInput />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
