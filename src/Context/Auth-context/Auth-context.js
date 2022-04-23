import { createContext, useContext, useState } from "react";

const authContext = createContext();
const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  const loginHandler = async (email, password) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        email: "adarshbalika@neog.camp",
        password: "adarshBalika",
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      setUserData(response.data.encodedToken);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <authContext.Provider value={{ items: 9 }}>{children}</authContext.Provider>
  );
};
