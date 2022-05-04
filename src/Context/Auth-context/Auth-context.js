import { createContext, useContext, useState } from "react";
import axios from "axios";
const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [credentialData, setCredentailData] = useState({
    tokenData: localStorage.getItem("token"),
    isAuth: localStorage.getItem("token") ? true : false,
  });
  const { tokenData, isAuth } = credentialData;
  const signupHandler = async ({ email, password, firstName, lastName }) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
    } catch (error) {
      console.error(error);
    }
  };

  const loginHandler = async ({ email, password }) => {
    if (!isAuth) {
      try {
        const response = await axios.post("/api/auth/login", {
          email,
          password,
        });

        // saving the encodedToken in the localStorage
        localStorage.setItem("token", response.data.encodedToken);
        setCredentailData({
          isAuth: true,
          tokenData: response.data.encodedToken,
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("signup");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loginHandler,
        signupHandler,
        credentialData,
        setCredentailData,
        isAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
