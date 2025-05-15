import { useState, useCallback } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("no users found");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error.message || "Error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error:{error}</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
      <button onClick={fetchUsers}>🔄 Refresh</button>
    </div>
  );
}

export default App;
