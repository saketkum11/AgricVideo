import { createContext, useContext, useState } from "react";
import axios from "axios";
const authContext = createContext();
const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
  const [credentialData, setCredentailData] = useState({
    tokenData: localStorage.getItem("token"),
    isAuth: localStorage.getItem("token") ? true : false,
  });
  const { tokenData, isAuth } = credentialData;

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
    } catch (error) {
      console.error(error);
    }
  };
  const loginHandler = async ({ email, password }) => {
    if (isAuth) {
      try {
        const response = await axios.post("/api/auth/login", {
          email: email,
          password: password,
        });
        // saving the encodedToken in the localStorage
        localStorage.setItem("token", response.data.encodedToken);
        console.log("response from login", response);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("signup");
    }
  };

  console.log("usedata", credentialData);
  return (
    <authContext.Provider
      value={{
        loginHandler,
        signupHandler,
        credentialData,
        setCredentailData,
        isAuth,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export { useAuth, AuthProvider };
