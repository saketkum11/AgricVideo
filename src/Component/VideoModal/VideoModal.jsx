import { MdRemoveCircle, MdPlaylistAdd } from "react-icons/md";
import { FaStopwatch } from "react-icons/fa";
import { useWatch } from "../../Context/WatchLater-context/Watch-context";
import { usePlay } from "../../Context/Playlets-context/Playlets-context";
import { useVideo } from "../../Context/Video-Context/video-context";
import { useHistory } from "../../Context/History-context/History-context";

const VideoModal = ({ video, playlistFlag, setPlaylistFlag }) => {
  const { removeWatchLater, addWatchLater } = useWatch();
  const { createPlaylist } = usePlay();
  const { videoState } = useVideo();
  const { watchlater, playlist, history } = videoState;
  const isInWatchLater = watchlater.some(
    (watchLater) => watchLater._id === video._id
  );
  const { removeHistoryVideo } = useHistory();

  return (
    <>
      <div className=" bg-black-0  m-auto justify-around flex flex-column pd-4 m-y-8  box-shadow-2">
        <div className="flex flex-column h-100">
          <ul className="flex flex-wrap flex-column items-start ">
            {history.some((historyVideo) => historyVideo._id === video._id) ? (
              <li
                onClick={() => {
                  removeHistoryVideo(video._id);
                }}
                className="style-none flex items-center pd-y-2 cursor"
              >
                <MdRemoveCircle className="text-xm"></MdRemoveCircle>
                <span className="pd-x-3">Remove from history</span>
              </li>
            ) : (
              ""
            )}
            {isInWatchLater ? (
              <li
                onClick={() => {
                  removeWatchLater(video);
                }}
                className="style-none flex items-center pd-y-2 cursor"
              >
                <MdRemoveCircle className="text-xm"></MdRemoveCircle>
                <span className="pd-x-3">Remove from watchLater</span>
              </li>
            ) : (
              <li
                onClick={() => {
                  addWatchLater(video);
                }}
                className="style-none flex items-center pd-y-2 cursor"
              >
                <FaStopwatch className="text-xm"></FaStopwatch>
                <span className="pd-x-3">Watch Later</span>
              </li>
            )}
            {playlistFlag ? (
              <li
                onClick={() => {
                  console.log("click");
                }}
                className="style-none flex items-center pd-y-2 cursor"
              >
                <MdRemoveCircle className="text-xm" />
                <span className="pd-x-3">Remove from PLaylist</span>
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
