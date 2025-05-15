import React from "react";
import { useState } from "react";
import { useReducer } from "react";

const intialState = {
  email: "",
  password: "",
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload, error: "" };
    case "SET_PASSWORD":
      return { ...state, password: action.payload, error: "" };
    case "VALIDATE":
      if (!state.email.includes("@")) {
        return { ...state, error: "Invalid email address" };
      }
      if (state.password.length < 6) {
        return { ...state, error: "Password must be at least 6 character" };
      }
      return { ...state, error: "" };
    case "RESET":
      return intialState;
    default:
      return state;
  }
}

function LoginReducer() {
  const [state, dispatch] = useReducer(reducer, intialState);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "VALIDATE" });

    if (!state.error) {
      console.log("submitted");
      setSubmitted(true);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login using Reducer</h2>
      <input
        type="text"
        value={state.email}
        onChange={(e) =>
          dispatch({ type: "SET_EMAIL", payload: e.target.value })
        }
        placeholder="Email..."
      />
      <input
        type="password"
        value={state.password}
        onChange={(e) =>
          dispatch({ type: "SET_PASSWORD", payload: e.target.value })
        }
        placeholder="Password..."
      />
      {submitted && !state.error && (
        <p style={{ color: "green" }}>Form submitted successfully!</p>
      )}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      <button type="submit">Submit</button>
      <button type="button" onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </form>
  );
}

export default LoginReducer;
