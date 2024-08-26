/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect } from "react";

const LikeContext = createContext({});
const LikeProvider = ({ children }) => {
  useEffect(() => {
    const getWatcherLaterlist = async () => {};
    getWatcherLaterlist();
  }, []);
  const addVideoToLikeList = () => {};
  const deleteVideoFromLikeList = () => {};
  const value = { addVideoToLikeList, deleteVideoFromLikeList };
  return <LikeContext.Provider value={value}>{children}</LikeContext.Provider>;
};
const useLikeVideo = () => useContext(LikeContext);
export { LikeProvider, useLikeVideo };
