import axios from "axios";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { ACTION_TYPE } from "../../Reducer/sevice";
import { videoReducer } from "../../Reducer/Reducer";
const VideoContext = createContext();
const useVideo = () => useContext(VideoContext);

const VideoProvider = ({ children }) => {
  const initialState = {
    video: [],
    playlists: [],
    playlist: [],
    watchlater: [],
    like: [],
    dislike: [],
    history: [],
    singleVideo: [],
  };
  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);

  useEffect(() => {
    const getVideoData = async () => {
      try {
        const response = await axios.get("/api/videos");
        if (response.status === 200) {
          videoDispatch({
            type: ACTION_TYPE.DEFAULT_VIDEO,
            payload: response.data.videos,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    getVideoData();
  }, []);

  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

export { useVideo, VideoProvider };
