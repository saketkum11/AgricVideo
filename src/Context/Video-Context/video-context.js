import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const VideoContext = createContext();
const useVideo = () => useContext(VideoContext);

const VideoProvider = ({ children }) => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const getVideoData = async () => {
      try {
        const response = await axios.get("/api/videos");
        setVideoData(response.data.videos);
      } catch (error) {
        console.error(error);
      }
    };
    getVideoData();
  }, []);
  console.log("data from sever", videoData);
  return (
    <VideoContext.Provider value={{ videoData }}>
      {children}
    </VideoContext.Provider>
  );
};

export { useVideo, VideoProvider };
