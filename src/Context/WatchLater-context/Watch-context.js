import axios from "axios";
import { createContext, useContext } from "react";
import { useAuth } from "../Auth-context/Auth-context";

const WatchContext = createContext();
const useWatch = () => useContext(WatchContext);

const WatchProvider = ({ children }) => {
  const { credentialData } = useAuth();
  const { tokenData, isAuth } = credentialData;

  async function getWatchLaterData() {
    try {
      const response = await axios.get("/api/user/watchlater", {
        headers: {
          authorization: tokenData,
        },
      });
      console.log("respopnse from watchcontext", response);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <WatchContext.Provider value={{ getWatchLaterData }}>
      {children}
    </WatchContext.Provider>
  );
};

export { useWatch, WatchProvider };
