import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const PlayletsContext = createContext();
const usePlay = () => useContext(PlayletsContext);

const PlayProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const { credentialData } = useAuth();

  const getPlaylist = async () => {
    try {
      const response = await axios.get("/api/user/playlists", {
        headers: {},
      });
      console.log("response from playlist", response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PlayletsContext.Provider value={{ items: 0, getPlaylist }}>
      {children}
    </PlayletsContext.Provider>
  );
};
export { usePlay, PlayProvider };
