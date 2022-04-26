import { createContext, useContext, useState } from "react";
import axios from "axios";
const authContext = createContext();
const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
  const signupHandler = async (data) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      console.log("response from signup handler", response);
    } catch (error) {
      console.error(error);
    }
  };
  const loginHandler = async ({ email, password }) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <authContext.Provider value={{ loginHandler, signupHandler }}>
      {children}
    </authContext.Provider>
  );
};

export { useAuth, AuthProvider };
