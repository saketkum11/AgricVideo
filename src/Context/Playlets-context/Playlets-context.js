import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../Auth-context/Auth-context";

const PlayletsContext = createContext();
const usePlay = () => useContext(PlayletsContext);

const PlayProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const { tokenData } = useAuth();

  useEffect(() => {
    const getPlaylist = async () => {
      try {
        const response = await axios.get("/api/user/playlists", {
          headers: { authorization: tokenData },
        });
        setPlaylist(response.data.playlists);
      } catch (error) {
        console.error(error);
      }
    };
    getPlaylist();
  }, []);

  const createPlaylist = async (playlist) => {
    try {
      const response = await axios.post(
        "/api/user/playlists",
        { playlist },
        {
          headers: {
            authorization: tokenData,
          },
        }
      );
      console.log("response from Createplaylist", response.data.playlists);
      setPlaylist(response.data.playlists);
    } catch (error) {
      console.error(error);
    }
  };
  const deletePlaylist = async (playlist) => {
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playlist._id}`,
        {
          headers: {
            authorization: tokenData,
          },
        }
      );
      setPlaylist(response.data.playlists);
      console.log("response from deleteplaylist", response);
    } catch (error) {
      console.error(error);
    }
  };
  const getPlaylistData = async (playlist) => {
    try {
      const response = await axios.get(`/api/user/playlists/${playlist._id}`, {
        headers: {
          authorization: tokenData,
        },
      });
      setPlaylist(response.data.playlist);
      console.log("getPlaylistdata from play context", response);
    } catch (error) {
      console.error(error);
    }
  };
  const addedPlaylist = async (playlist, video) => {
    try {
      const response = await axios.post(
        `/api/user/playlists/${playlist._id}`,
        { video },
        {
          headers: {
            authorization: tokenData,
          },
        }
      );
      console.log("response from addedPlaylist", response);
    } catch (error) {
      console.error(error);
    }
  };

  const deletedPlaylist = async (playlist) => {
    try {
      const response = await axios.delete(
        `/api/user/playlists/:playlistId/${playlist._id}`,
        {
          headers: {
            authorization: tokenData,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  console.log("playlist from play  context", playlist);
  return (
    <PlayletsContext.Provider
      value={{
        createPlaylist,
        playlist,
        addedPlaylist,
        deletePlaylist,
        getPlaylistData,
      }}
    >
      {children}
    </PlayletsContext.Provider>
  );
};
export { usePlay, PlayProvider };
