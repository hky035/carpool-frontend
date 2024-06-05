import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    
    const [isLogined, setIsLogined] = useState(false);
    const [userId, setUserId] = useState("");
    const [studentNumber, setStudentNumber] = useState(0);

    async function register(userId, password, studentNumber) {
        try {
            const res = await axios.post('/api/register', { userId, password, studentNumber });
            console.log('register res : ' + res.data)
            return res.data;
        } catch (error) {
            console.error(error)
        }
    }

    async function login(userId, password) {
        console.log('userId', userId);
        console.log('password', password);
        try{
            const res = await axios.post('/api/login', { userId, password });

            console.log('res' + res);
            console.log('login data' + res.data);
            if (res.data.userId === userId) {
                setIsLogined(true);
                setUserId(res.data.userId);
                setStudentNumber(res.data.studentNumber);
                return true;
                }
        } catch (error) {
            console.error(error);
        }

    }

    function logout() {
        setIsLogined(false);
    }

  return (
      <AuthContext.Provider value={{ isLogined, login, logout, register}}>
          {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider