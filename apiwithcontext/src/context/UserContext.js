import React from "react";
import { useContext } from "react";
import { createContext } from "react";

const UserContext = createContext();

export default UserContext;

export const useUsers = () => useContext(UserContext);
