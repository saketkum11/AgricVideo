/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext } from "react";
const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
  const signup = async (data) => {
    try {
      const response = axios.post("/api/v1/user/register", {
        email: data.email,
        username: data.username,
        fullName: data.fullName,
        password: data.password,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const login = async (data) => {
    try {
      const response = await axios.post("/api/v1/user/login", {
        email: data.email,
        username: data.username,
        fullName: data.fullName,
        password: data.password,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const value = { signup, login };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
