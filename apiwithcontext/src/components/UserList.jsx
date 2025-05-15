import React from "react";
import { useUsers } from "../context/UserContext";

function UserList() {
  const { users, loading, error } = useUsers();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <h2>User List</h2>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </>
  );
}
export default UserList;
