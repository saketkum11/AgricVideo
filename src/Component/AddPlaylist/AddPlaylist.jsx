import { useState } from "react";
import { usePlay } from "../../Context/Playlets-context/Playlets-context";
import { useVideo } from "../../Context/Video-Context/video-context";
import { useAuth } from "../../Context/Auth-context/Auth-context";
import "./AddPlaylist.css";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const AddPlaylist = ({ video, setPlaylistFlag }) => {
  const { tokenData } = useAuth();
  const [createdPlayList, setCreatedPlayList] = useState({ title: "" });
  const { createPlaylist, addedPlaylist } = usePlay();
  const { videoState } = useVideo();
  const { playlist, playlists } = videoState;
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddPlaylist = () => {
    if (tokenData) {
      createPlaylist(createdPlayList);
      toast.success("created playlist");
    } else if (!tokenData) {
      toast.error("you must login");
      navigate("/login");
    }
  };

  return (
    <>
      {
        <div className="bg-black-0 wt-50 m-auto justify-around flex flex-column pd-4  box-shadow-2 wt-100">
          <div className="flex flex-column m-y-6">
            <span className="text-xm">create playlist</span>
          </div>
          <ul>
            {[...playlists].map((playlist) => {
              return (
                <>
                  <li
                    key={playlist.title}
                    className="pd-x-3 m-y-2 style-none flex items-center pd-y-2 cursor list-cover"
                    onClick={() => {
                      addedPlaylist(playlist, video);
                    }}
                  >
                    {playlist.title}
                  </li>
                </>
              );
            })}
          </ul>
          <div className="flex">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddPlaylist();
              }}
            >
              <input
                type="text"
                required
                className="  pd-4 border-1 border-solid border-black-700  text-s rounded-s text-color-grey-9 "
                value={createdPlayList.title}
                onChange={(e) => {
                  setCreatedPlayList({
                    ...createdPlayList,
                    title: e.target.value,
                  });
                }}
              />
              <div className="flex justify-end items-center m-t-2 ">
                <button
                  onClick={() => {
                    setPlaylistFlag((flag) => !flag);
                  }}
                  className=" bg-red-5 cursor rounded-s border-none  outline-none text-color-grey-0 pd-x-3 pd-y-2"
                >
                  close
                </button>
                <button
                  type="submit"
                  className="bg-green-5  cursor rounded-s border-none  outline-none text-color-grey-0 pd-x-3 m-x-2 pd-y-2"
                >
                  Add
                </button>
              </div>
            </form>
            <div></div>
          </div>
        </div>
      }
    </>
  );
};
export { AddPlaylist };
