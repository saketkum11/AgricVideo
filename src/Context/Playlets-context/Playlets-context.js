import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../Auth-context/Auth-context";

const PlayletsContext = createContext();
const usePlay = () => useContext(PlayletsContext);

const PlayProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const { tokenData } = useAuth();
  const [playlistFlag, setPlaylistFlag] = useState(false);

  const getPlaylist = async () => {
    try {
      const response = await axios.get("/api/user/playlists", {
        headers: { authorization: tokenData },
      });
      setPlaylist(response.data.playlist);
      console.log("respnse forom play context", response);
    } catch (error) {
      console.error(error);
    }
  };
  const createPlaylist = async (playlist) => {
    try {
      const respnse = await axios.post(
        "/api/user/playlists",
        { playlist },
        {
          headers: {
            authorization: tokenData,
          },
        }
      );
      console.log("response from addplaylist", respnse);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PlayletsContext.Provider
      value={{
        items: 0,
        getPlaylist,
        createPlaylist,
        playlistFlag,
        setPlaylistFlag,
      }}
    >
      {children}
    </PlayletsContext.Provider>
  );
};
export { usePlay, PlayProvider };
