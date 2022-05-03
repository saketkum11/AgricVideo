import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../Auth-context/Auth-context";

const WatchContext = createContext();
const useWatch = () => useContext(WatchContext);

const WatchProvider = ({ children }) => {
  const [watchVideo, setWatchVideo] = useState([]);
  const { credentialData } = useAuth();
  const { tokenData, isAuth } = credentialData;

  useEffect(() => {
    async function getWatchLaterData() {
      try {
        const response = await axios.get("/api/user/watchlater", {
          headers: {
            authorization: tokenData,
          },
        });
        setWatchVideo(response.data.watchlater);
      } catch (error) {
        console.error(error);
      }
    }
    getWatchLaterData();
  }, []);

  const addWatchLater = async (video) => {
    console.log("addWatchlater");
    try {
      const response = await axios.post(
        "/api/user/watchlater",
        { video },
        {
          headers: {
            authorization: tokenData,
          },
        }
      );
      setWatchVideo(response.data.watchlater);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("watchlater", watchVideo);
  return (
    <WatchContext.Provider value={{ watchVideo, addWatchLater }}>
      {children}
    </WatchContext.Provider>
  );
};

export { useWatch, WatchProvider };
