import { useState } from "react";
import { usePlaylist } from "../context/PlaylistContext";
import { useDebounce } from "../hooks/useDebounce";
import axios from "axios";

/* eslint-disable react/prop-types */
const PlaylistCard = ({ playlistData, videoData }) => {
  const { addVideoToPlaylist } = usePlaylist();
  const [addVideo, setAddVideo] = useState({
    videoId: "",
    playlistId: "",
  });
  const [playlistContent, setPlaylistContent] = useState("");

  const { videoId, playlistId } = addVideo;
  const handleChange = (e) => {
    console.log(e.target.value);
    setAddVideo((prev) => {
      return {
        ...prev,
        videoId: videoData?._id,
        playlistId: playlistData?._id,
      };
    });
    setPlaylistContent(e.target.value);
  };

  return (
    <li>
      <div className="flex justify-start items-center">
        <input
          type="checkbox"
          onChange={handleChange}
          value={playlistData.content}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <label className="ml-4 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
          {playlistData.content}
        </label>
      </div>
    </li>
  );
};

export default PlaylistCard;
