import { MdRemoveCircle, MdPlaylistAdd } from "react-icons/md";
import { FaStopwatch } from "react-icons/fa";
import { useWatch } from "../../Context/WatchLater-context/Watch-context";
import { usePlay } from "../../Context/Playlets-context/Playlets-context";
import { useVideo } from "../../Context/Video-Context/video-context";
import { useHistory } from "../../Context/History-context/History-context";
import toast from "react-hot-toast";
import { useAuth } from "../../Context/Auth-context/Auth-context";
import { useNavigate } from "react-router-dom";

const VideoModal = ({ video, playlistFlag, setPlaylistFlag }) => {
  const { tokenData } = useAuth();
  const { removeWatchLater, addWatchLater } = useWatch();
  const { createPlaylist } = usePlay();
  const { videoState } = useVideo();
  const { watchlater, playlist, history } = videoState;
  const isInWatchLater = watchlater.some(
    (watchLater) => watchLater._id === video._id
  );
  const { removeHistoryVideo } = useHistory();
  const navigate = useNavigate();
  const handleWatchLater = () => {
    if (tokenData) {
      addWatchLater(video);
      toast.success("Added to watchLater");
    } else if (!tokenData) {
      navigate("/login");
      toast.error("You must login");
    }
  };
  const handleRemoveWatchLater = () => {
    if (tokenData) {
      removeWatchLater(video);
      toast.error("removed from watchLater");
    } else if (!tokenData) {
      navigate("/login");
      toast.error("You must login");
    }
  };
  const handlePlayListAdd = () => {
    if (!tokenData) {
      navigate("/login");
      toast.error("You must login");
    }
  };
  return (
    <>
      <div className=" bg-black-0  m-auto justify-around flex flex-column pd-4 m-y-8  box-shadow-2">
        <div className="flex flex-column h-100">
          <ul className="flex flex-wrap flex-column items-start ">
            {isInWatchLater ? (
              <li
                onClick={handleRemoveWatchLater}
                className="style-none flex items-center pd-y-2 cursor"
              >
                <MdRemoveCircle className="text-xm"></MdRemoveCircle>
                <span className="">Remove from watchLater</span>
              </li>
            ) : (
              <li
                onClick={handleWatchLater}
                className="style-none flex items-center pd-y-2 cursor"
              >
                <FaStopwatch className="text-xm"></FaStopwatch>
                <span className="pd-x-3">Watch Later</span>
              </li>
            )}
            {tokenData ? (
              <li
                onClick={() => {
                  setPlaylistFlag((flag) => !flag);
                  handlePlayListAdd();
                }}
                className="style-none flex items-center pd-y-2 cursor"
              >
                <MdPlaylistAdd className="text-xm" />
                <span className="pd-x-3">addToPLaylist</span>
              </li>
            ) : (
              <li
                onClick={() => {
                  handlePlayListAdd();
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
