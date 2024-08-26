/* eslint-disable react/prop-types */
import React from "react";
import PlaylistModal from "./PlaylistModal";
import { useWatchLater } from "../context/WatchLaterContext";
const VideoModal = ({ data, watch, watchList }) => {
  const {
    addVideoToWatchLater,
    watchLaterList,
    deleteVideoFromWatchLaterList,
  } = useWatchLater();
  const [archive, setArchive] = React.useState({
    save: false,
    watchLater: false,
  });
  const handleSave = () => {
    setArchive((prev) => {
      return { ...prev, save: !prev.save };
    });
  };
  const removeVideoFromWatchLater = () => {
    deleteVideoFromWatchLaterList({ id: watch._id });
  };
  const addVideoWatchLater = () => {
    addVideoToWatchLater({ videoId: data?._id });
    setArchive((prev) => {
      return { ...prev, watchLater: !prev.watchLater };
    });
  };
  /*const findVideoInWatchLater = watchLaterList.some(data._id);
   */
  console.log("from line 32", watchLaterList, watch);
  const filteredVideos = watchLaterList.filter((videoItem) => {
    if (!watch._id && !videoItem._id) return;
    return videoItem._id === watch._id;
  });
  console.log(filteredVideos, watch);

  return (
    <>
      <ul className="bg-zinc-800   py-4 text-white absolute -right-48 z-30 top-52">
        <li
          onClick={handleSave}
          className="hover:bg-gray-600  cursor-pointer px-8 py-1"
        >
          Save to Playlist
        </li>
        {filteredVideos?.length === 0 ? (
          <li
            onClick={addVideoWatchLater}
            className="hover:bg-gray-600 px-8 py-1 cursor-pointer"
          >
            Save to WatchLater
          </li>
        ) : (
          <li
            onClick={removeVideoFromWatchLater}
            className="hover:bg-gray-600 px-8 py-1 cursor-pointer"
          >
            Saved to WatchLater
          </li>
        )}
      </ul>
      {archive.save && <PlaylistModal data={data} />}
    </>
  );
};

export default VideoModal;
