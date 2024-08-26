/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const WatchLaterContext = createContext({});

const WatchLaterProvider = ({ children }) => {
  const [watchLaterList, setWatchLaterList] = useState([]);
  useEffect(() => {
    const getWatcherLaterlist = async () => {
      try {
        const response = await axios.get("/api/v1/watchLater");
        setWatchLaterList(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getWatcherLaterlist();
  }, []);
  const addVideoToWatchLater = async ({ videoId }) => {
    try {
      const response = await axios.post(`/api/v1/watchLater/${videoId}`);
      setWatchLaterList(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteVideoFromWatchLaterList = async ({ id }) => {
    try {
      const response = await axios.delete(`/api/v1/watchLater/${id}`);
      setWatchLaterList(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const value = {
    addVideoToWatchLater,
    deleteVideoFromWatchLaterList,
    watchLaterList,
    setWatchLaterList,
  };
  return (
    <WatchLaterContext.Provider value={value}>
      {children}
    </WatchLaterContext.Provider>
  );
};
const useWatchLater = () => useContext(WatchLaterContext);
export { WatchLaterProvider, useWatchLater };
