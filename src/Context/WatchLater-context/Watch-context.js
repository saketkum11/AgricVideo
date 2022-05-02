import axios from "axios";
import { createContext, useContext } from "react";
import { useAuth } from "../Auth-context/Auth-context";

const WatchContext = createContext();
const useWatch = () => useContext(WatchContext);

const WatchProvider = ({ children }) => {
  const { credentialData } = useAuth();
  const { tokenData, isAuth } = credentialData;

  const getWatchLaterData = async () => {
    try {
      const response = await axios.post("/api/user/watchlater", {
        headers: {
          authorization: tokenData,
        },
      });
      console.log("response from watch context", response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <WatchContext.Provider value={{ getWatchLaterData }}>
      {children}
    </WatchContext.Provider>
  );
};

export { useWatch, WatchProvider };
