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
    categories: [],
  };
  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);

  const getVideoData = async () => {
    try {
      const response = await axios.get("/api/videos");
      document.title = "VideoList";
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

  return (
    <VideoContext.Provider value={{ videoState, videoDispatch, getVideoData }}>
      {children}
    </VideoContext.Provider>
  );
};

export { useVideo, VideoProvider };
