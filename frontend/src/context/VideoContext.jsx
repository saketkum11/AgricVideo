/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const VideoContext = createContext({});
const VideoProvider = ({ children }) => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const getALlVideo = async () => {
      try {
        const response = await axios.get("/api/v1/videos/allVideo");
        console.log(response.data);
        setVideoData(response.data.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    getALlVideo();
  }, []);
  const value = { videoData };
  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
};
const useVideo = () => useContext(VideoContext);
export { VideoProvider, useVideo };
