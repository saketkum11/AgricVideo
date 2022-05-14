import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { ACTION_TYPE } from "../../Reducer/sevice";
import { useAuth } from "../Auth-context/Auth-context";
import { useVideo } from "../Video-Context/video-context";

const HistoryContext = createContext();
const useHistory = () => useContext(HistoryContext);

const HistoryProvider = ({ children }) => {
  const { tokenData } = useAuth();
  const { videoState, videoDispatch } = useVideo();
  useEffect(() => {
    const getHistory = async () => {
      try {
        const response = await axios.get("/api/user/history", {
          headers: { authorization: tokenData },
        });
        videoDispatch({
          type: ACTION_TYPE.HISTORY,
          payload: response.data.history,
        });
      } catch (error) {
        console.error(error);
      }
    };
    getHistory();
  }, []);

  const addHistoryVideo = async (video) => {
    try {
      const response = await axios.post(
        "/api/user/history",
        { video },
        {
          headers: {
            authorization: tokenData,
          },
        }
      );
      videoDispatch({
        type: ACTION_TYPE.HISTORY,
        payload: response.data.history,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const removeHistoryVideo = async (id) => {
    try {
      const response = await axios.delete(`/api/user/history/${id}`, {
        headers: {
          authorization: tokenData,
        },
      });
      videoDispatch({
        type: ACTION_TYPE.HISTORY,
        payload: response.data.history,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const removeAllHistoryVideo = async () => {
    try {
      const response = await axios.delete("/api/user/history/all", {
        headers: {
          authorization: tokenData,
        },
      });
      videoDispatch({
        type: ACTION_TYPE.HISTORY,
        payload: response.data.history,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <HistoryContext.Provider
      value={{ addHistoryVideo, removeHistoryVideo, removeAllHistoryVideo }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export { useHistory, HistoryProvider };
