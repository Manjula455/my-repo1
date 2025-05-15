import React from "react";
import { useTodos } from "../context/TodoContext";

function TodoList() {
  const { todos, toggleTodo } = useTodos();
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
