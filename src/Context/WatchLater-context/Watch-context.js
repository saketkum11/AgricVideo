import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { ACTION_TYPE } from "../../Reducer/sevice";
import { useAuth } from "../Auth-context/Auth-context";
import { useVideo } from "../Video-Context/video-context";

const WatchContext = createContext();
const useWatch = () => useContext(WatchContext);

const WatchProvider = ({ children }) => {
  const { videoDispatch } = useVideo();

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
        videoDispatch({
          type: ACTION_TYPE.WATCHLATER_VIDEO,
          payload: response.data.watchlater,
        });
      } catch (error) {
        console.error(error);
      }
    }
    getWatchLaterData();
  }, []);

  const addWatchLater = async (video) => {
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

      videoDispatch({
        type: ACTION_TYPE.WATCHLATER_VIDEO,
        payload: response.data.watchlater,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const removeWatchLater = async (video) => {
    try {
      const response = await axios.delete(`/api/user/watchlater/${video._id}`, {
        headers: {
          authorization: tokenData,
        },
      });
      videoDispatch({
        type: ACTION_TYPE.REMOVE_WATCHLATER_VIDEO,
        payload: response.data.watchlater,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <WatchContext.Provider value={{ addWatchLater, removeWatchLater }}>
      {children}
    </WatchContext.Provider>
  );
};

export { useWatch, WatchProvider };
