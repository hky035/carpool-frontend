import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLogined, setIsLogined] = useState(false);
  const [id, setId] = useState("");
  const [studentNumber, setStudentNumber] = useState(0);

  useEffect(() => {
    const sUser = JSON.parse(localStorage.getItem("user"));
    if (sUser) {
      setId(sUser);
    }
  }, []);

  async function register(userId, password, studentNumber) {
    try {
      const res = await axios.post("/api/register", {
        userId,
        password,
        studentNumber,
      });

      if (res.data.userId === userId) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function login(userId, password) {
    try {
      const res = await axios.post("/api/login", { userId, password });

      if (res.data.userId === userId) {
        setIsLogined(true);
        setId(res.data.id);
        console.log(res.data.id);
        localStorage.setItem("user", JSON.stringify(res.data.id));
        setStudentNumber(res.data.studentNumber);
        return true;
      }
    } catch (error) {
      console.error(error);
    }
  }

  function logout() {
    localStorage.removeItem("user");
    setIsLogined(false);
  }

  return (
    <AuthContext.Provider value={{ isLogined, login, logout, register, id }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
