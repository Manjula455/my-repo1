import { useState } from "react";
import "./App.css";
import UserProvider from "./context/UserProvider";
import UserList from "./components/UserList";

function App() {
  return (
    <UserProvider>
      <UserList />
    </UserProvider>
  );
}

export default App;
