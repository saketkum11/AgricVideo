import { usePlay } from "../../Context/Playlets-context/Playlets-context";

const AddPlaylist = ({ data, playlist }) => {
  const isInPlaylist = playlist.some((playlist) => playlist._id === data._id);
  return (
    <>
      {isInPlaylist.some((video) => video._id === _id) ? (
        <div class="bg-black-0 wt-50 m-auto justify-around flex flex-column pd-4  box-shadow-2 wt-100">
          <div class="flex flex-column m-y-6">
            <span class="text-xm">create playlist</span>
          </div>
          <div>
            <input type="text" />
          </div>
          <div class="flex justify-end items-center m-t-2">
            <button
              onClick={() => {
                setPlaylistFlag(!playlistFlag);
              }}
              class="bg-black-9 cursor rounded-s border-none  outline-none text-color-0 pd-x-3 pd-y-2"
            >
              close
            </button>
            <button class="pd-y-2 pd-x-4 outline-none text-dec rounded-m bg-blue-5 text-color-0 m-x-1">
              continue
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export { AddPlaylist };
