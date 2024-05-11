import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );

  const login = async (userData) => {
    const res = await axios.post(
      "http://localhost:8000/api/auth/login",
      userData,
      {
        withCredentials: true,
      }
    );
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await axios.post("http://localhost:8000/api/auth/logout");
    setCurrentUser(null);
  }

  const register = async (userData) => {
    await axios.post("http://localhost:8000/api/auth/register", userData);
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser))
  }, [currentUser]);

  //wrap code in main.jsx using this context provider to used these functions anywhere in the app
  return (
    <authContext.Provider value={{currentUser, login, register, logout}}>
      {children}
    </authContext.Provider>
  )
};
