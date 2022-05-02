import axios from "axios";
import { createContext, useContext } from "react";
import { useEffect } from "react/cjs/react.production.min";
import { useAuth } from "../Auth-context/Auth-context";
const WatchContext = createContext();
const useWatch = () => useContext(WatchContext);
const WatchProvider = ({ children }) => {
  const { credentialData } = useAuth();
  const { tokenData, isAuth } = credentialData;

  useEffect(() => {}, []);
  const getWatchLaterData = async () => {
    try {
      const response = await axios.get("/api/user/watchlater", {
        headers: {
          authorization: tokenData,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return <WatchContext.Provider value={{}}>{children}</WatchContext.Provider>;
};

export { useWatch, WatchProvider };
