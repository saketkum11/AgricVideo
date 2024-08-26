/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import { fetchData } from "../utils/fetchData";
const PlaylistContext = createContext({});

const PlaylistProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const getAllPlyalist = async () => {
      try {
        const response = await axios.get("/api/v1/playlist");
        setPlaylist(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getAllPlyalist();
  }, []);
  const createSaveList = async (content) => {
    try {
      await axios.post("/api/v1/playlist", { content });
    } catch (error) {
      console.error(error);
    }
  };
  const addVideoToPlaylist = async ({ videoId, playlistId }) => {
    console.log(videoId, playlistId);
    try {
      const response = await axios.post(
        `/api/v1/playlist/${playlistId}/${videoId}`
      );
      console.log("from playlist line 37", response);
    } catch (error) {
      console.error(error);
    }
  };
  const deletePlaylist = async ({ playlistId }) => {
    try {
      const response = await axios.delete(`/api/v1/playlist/${playlistId}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    createSaveList,
    playlist,
    setPlaylist,
    deletePlaylist,
    addVideoToPlaylist,
  };
  return (
    <PlaylistContext.Provider value={value}>
      {children}
    </PlaylistContext.Provider>
  );
};
const usePlaylist = () => useContext(PlaylistContext);
export { PlaylistProvider, usePlaylist };
