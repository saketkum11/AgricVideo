import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { useVideo } from "../Video-Context/video-context";
import { useAuth } from "../Auth-context/Auth-context";
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
        console.log("from liked context likes", response);
      } catch (error) {
        console.error(error);
      }
    };
    getLiked();
  }, []);
  return (
    <LikeContext.Provider value={{ items: 9 }}>{children}</LikeContext.Provider>
  );
};

export { useLike, LikeProvider };
