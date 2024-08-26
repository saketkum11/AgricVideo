/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { usePlaylist } from "../context/PlaylistContext";
import PlaylistCard from "./PlaylistCard";
const PlaylistModal = ({ data }) => {
  const [playlistContent, setPlaylistContent] = useState({
    content: "",
  });
  const { playlist, createSaveList } = usePlaylist();
  const handlePlaylistContent = (e) => {
    setPlaylistContent((prev) => {
      return { ...prev, content: e.target.value };
    });
  };
  const handleCreatePlaylist = () => {
    createSaveList(playlistContent.content);
    setPlaylistContent({ content: "" });
  };

  return (
    <div
      className="relative z-40"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-80 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 text-white">
          <div className="bg-zinc-800 px-4 py-3 flex flex-col justify-start sm:px-6">
            <input
              type="text"
              onChange={handlePlaylistContent}
              value={playlistContent.content}
              className="bg-transparent outline-none py-2"
              placeholder="enter playlist name"
            />
            <ul className="flex flex-col justify-start gap-4">
              {playlist.map((playlist) => {
                return (
                  <>
                    <PlaylistCard
                      key={playlist._id}
                      playlistData={playlist}
                      videoData={data}
                    />
                  </>
                );
              })}
            </ul>
            <button
              onClick={handleCreatePlaylist}
              className=" hover:bg-zinc-600 py-2 mt-5 j"
            >
              + Create Playlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistModal;
