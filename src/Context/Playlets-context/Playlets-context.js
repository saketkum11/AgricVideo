import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACTION_TYPE } from "../../Reducer/sevice";
import { useAuth } from "../Auth-context/Auth-context";
import { useVideo } from "../Video-Context/video-context";

const PlayletsContext = createContext();
const usePlay = () => useContext(PlayletsContext);

const PlayProvider = ({ children }) => {
  const { videoDispatch } = useVideo();
  const navigate = useNavigate();
  const { tokenData } = useAuth();

  useEffect(() => {
    const getPlaylist = async () => {
      try {
        const response = await axios.get("/api/user/playlists", {
          headers: { authorization: tokenData },
        });
        videoDispatch({
          type: ACTION_TYPE.PLAYLIST,
          payload: response.data.playlists,
        });
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
      videoDispatch({
        type: ACTION_TYPE.PLAYLIST,
        payload: response.data.playlists,
      });
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
      videoDispatch({
        type: ACTION_TYPE.PLAYLIST,
        payload: response.data.playlists,
      });
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
      videoDispatch({
        type: ACTION_TYPE.SINGLE_PLAYLIST,
        payload: response.data.playlist,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const addedPlaylist = async (playlist, video) => {
    console.log("value", playlist, video);
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
      videoDispatch({
        type: ACTION_TYPE.VIDEO_TO_PLAYLIST,
        payload: response.data.playlist,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deletedPlaylist = async (playlist, video) => {
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playlist._id}/${video._id}`,
        {
          headers: {
            authorization: tokenData,
          },
        }
      );
      console.log("from deleted playlist", response);
      videoDispatch({
        type: ACTION_TYPE.DELETED_VIDEO,
        payload: response.data.playlist,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PlayletsContext.Provider
      value={{
        createPlaylist,
        addedPlaylist,
        deletePlaylist,
        getPlaylistData,
        deletedPlaylist,
      }}
    >
      {children}
    </PlayletsContext.Provider>
  );
};
export { usePlay, PlayProvider };
