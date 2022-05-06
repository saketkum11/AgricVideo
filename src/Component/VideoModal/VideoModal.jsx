import { MdRemoveCircle, MdPlaylistAdd } from "react-icons/md";
import { FaStopwatch } from "react-icons/fa";
import { useWatch } from "../../Context/WatchLater-context/Watch-context";
import { usePlay } from "../../Context/Playlets-context/Playlets-context";
const VideoModal = ({
  data,
  watchVideo,
  playlistFlag,
  createplaylist,
  setPlaylistFlag,
}) => {
  const { removeWatchLater, addWatchLater } = useWatch();
  const { createPlaylist } = usePlay();
  const isInWatchLater = watchVideo.some((video) => video._id === data._id);
  console.log("data from videoModal", createplaylist);
  return (
    <>
      <div className=" bg-black-0  m-auto justify-around flex flex-column pd-4 m-y-8  box-shadow-2">
        <div className="flex flex-column h-100">
          <ul className="flex flex-wrap flex-column items-start ">
            {isInWatchLater ? (
              <li
                onClick={() => {
                  removeWatchLater(data);
                }}
                className="style-none flex items-center pd-y-2 cursor"
              >
                <MdRemoveCircle className="text-xm"></MdRemoveCircle>
                <span className="pd-x-3">Remove from watchLater</span>
              </li>
            ) : (
              <li
                onClick={() => {
                  addWatchLater(data);
                }}
                className="style-none flex items-center pd-y-2 cursor"
              >
                <FaStopwatch className="text-xm"></FaStopwatch>
                <span className="pd-x-3">Watch Later</span>
              </li>
            )}
            {playlistFlag ? (
              <li
                onClick={() => {}}
                className="style-none flex items-center pd-y-2 cursor"
              >
                <MdRemoveCircle className="text-xm" />
                <span className="pd-x-3">Remove from watchLater</span>
              </li>
            ) : (
              <li
                onClick={() => {
                  setPlaylistFlag((flag) => !flag);
                }}
                className="style-none flex items-center pd-y-2 cursor"
              >
                <MdPlaylistAdd className="text-xm" />
                <span className="pd-x-3">addToPLaylist</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
export { VideoModal };
