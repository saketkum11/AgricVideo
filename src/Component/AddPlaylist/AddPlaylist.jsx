import { useState } from "react";
import { usePlay } from "../../Context/Playlets-context/Playlets-context";
import { useVideo } from "../../Context/Video-Context/video-context";
import "./AddPlaylist.css";
const AddPlaylist = ({ data, playlist, setPlaylistFlag, createPlaylist }) => {
  const [createdPlayList, setCreatedPlayList] = useState({ title: "" });
  const { addedPlaylist } = usePlay();
  console.log("from addPlaylist", data);
  return (
    <>
      {
        <div class="bg-black-0 wt-50 m-auto justify-around flex flex-column pd-4  box-shadow-2 wt-100">
          <div class="flex flex-column m-y-6">
            <span class="text-xm">create playlist</span>
          </div>
          <ul>
            <li
              className="style-none flex items-center pd-y-2 cursor list-cover"
              onClick={() => {}}
            ></li>
          </ul>
          <div>
            <input
              type="text"
              className=" pd-y-4  text-s rounded-s "
              onChange={(e) => {
                setCreatedPlayList({
                  ...createdPlayList,
                  title: e.target.value,
                });
              }}
            />
          </div>
          <div class="flex justify-end items-center m-t-2 ">
            (
            <button
              onClick={() => {
                setPlaylistFlag((flag) => !flag);
              }}
              class="bg-black-9 cursor rounded-s border-none  outline-none text-color-0 pd-x-3 pd-y-2"
            >
              close
            </button>
            <button
              onClick={() => {
                createPlaylist(createdPlayList);
                addedPlaylist(playlist, data);
              }}
              class="bg-blue-5 cursor rounded-s border-none  outline-none text-color-0 pd-x-3 m-x-2 pd-y-2"
            >
              Add
            </button>
            )
          </div>
        </div>
      }
    </>
  );
};
export { AddPlaylist };
