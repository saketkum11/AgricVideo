import { createContext, useContext, useState } from "react";
import axios from "axios";
const authContext = createContext();
const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  const loginHandler = async ({ email, password }) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: email,
        password: password,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      setUserData(response.data.encodedToken);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <authContext.Provider value={{ loginHandler }}>
      {children}
    </authContext.Provider>
  );
};

export { useAuth, AuthProvider };
