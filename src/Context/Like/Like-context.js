import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { useVideo } from "../Video-Context/video-context";
import { useAuth } from "../Auth-context/Auth-context";
import { ACTION_TYPE } from "../../Reducer/sevice";
const LikeContext = createContext();
const useLike = () => useContext(LikeContext);

const LikeProvider = ({ children }) => {
  const { videoState, videoDispatch } = useVideo();
  const { tokenData } = useAuth();
  useEffect(() => {
    const getLiked = async () => {
      try {
        const response = await axios.get("/api/user/likes", {
          headers: {
            authorization: tokenData,
          },
        });
        videoDispatch({
          type: ACTION_TYPE.LIKED_VIDEO,
          payload: response.data.likes,
        });
      } catch (error) {
        console.error(error);
      }
    };
    getLiked();
  }, []);

  const likedVideo = async (video) => {
    try {
      const response = await axios.post(
        "/api/user/likes",
        {
          video,
        },
        {
          headers: {
            authorization: tokenData,
          },
        }
      );
      videoDispatch({
        type: ACTION_TYPE.LIKED_VIDEO,
        payload: response.data.likes,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const removeLikedVideo = async (videoId) => {
    try {
      const response = await axios.delete(`/api/user/likes/${videoId}`, {
        headers: {
          authorization: tokenData,
        },
      });
      videoDispatch({
        type: ACTION_TYPE.REMOVE_LIKED_VIDEO,
        payload: response.data.likes,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <LikeContext.Provider value={{ likedVideo, removeLikedVideo }}>
      {children}
    </LikeContext.Provider>
  );
};

export { useLike, LikeProvider };
