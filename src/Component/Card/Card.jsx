import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Card.css";
import { useState } from "react";
import { useWatch } from "../../Context/WatchLater-context/Watch-context";
import { usePlay } from "../../Context/Playlets-context/Playlets-context";
import { AddPlaylist, VideoModal } from "../../Pages/index";
import { useVideo } from "../../Context/Video-Context/video-context";
import { useLike } from "../../Context/Like/Like-context";
import { useHistory } from "../../Context/History-context/History-context";
import toast from "react-hot-toast";
import { useAuth } from "../../Context/Auth-context/Auth-context";

const Card = ({ video }) => {
  const { _id, thumbnail, title, profile, profileName } = video;
  const { tokenData } = useAuth();
  const { playlist } = usePlay();
  const [showToggle, setShowToggel] = useState(false);
  const [playlistFlag, setPlaylistFlag] = useState(false);
  const navigate = useNavigate();
  const { videoState } = useVideo();
  const { like } = videoState;
  const { likedVideo, removeLikedVideo } = useLike();
  const { addHistoryVideo } = useHistory();

  const handleLikedVideo = () => {
    if (tokenData) {
      likedVideo(video);
      toast.success("Liked video");
    } else if (!tokenData) {
      navigate("/login");
      toast.error("You must login");
    }
  };
  const handleRemoveLikedVideo = () => {
    if (tokenData) {
      removeLikedVideo(_id);
      toast.error("removed liked video");
    } else if (!tokenData) {
      navigate("/login");
      toast.error("You must login");
    }
  };
  return (
    <>
      <div className="card flex cards cursor  flex-column box-shadow-2 rounded-m bg-black-0 text-color-9 text-dec position-rel">
        <Link to={`/videolist/${_id}`}>
          <div className="card_image flex ">
            <img
              onClick={() => {
                addHistoryVideo(video);
              }}
              src={thumbnail}
              className="object-content wt-100"
              alt=""
            />
          </div>
        </Link>

        <div className="flex h-100 flex-column justify-even pd-5">
          <div className="  flex flex-wrap items-start pd-y-2">
            <span>{title}</span>
          </div>
          <div className="flex items-center justify-start pd-y-2">
            <img
              src={profile}
              className="object-content card-icon rounded-full"
              alt=""
            />
            <span
              className="text-semibold  text-color-9 pd-x-3 
          "
            >
              {profileName}
            </span>
          </div>

          <div className=" flex flex-wrap justify-btw">
            <button
              onClick={() => {
                navigate(`/videolist/${_id}`);
                addHistoryVideo(video);
              }}
              className="cursor bg-black-9  border-none  outline-none text-color-0 pd-x-4 pd-y-3 text-s "
            >
              Watch now
            </button>

            <div className="flex items-center justify-btw">
              {like.find((video) => video._id === _id) ? (
                <button
                  onClick={handleRemoveLikedVideo}
                  className="bg-red-6 outline-none cursor border-none pd-x-3 pd-y-2 m-x-2 flex items-center"
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                </button>
              ) : (
                <button
                  onClick={handleLikedVideo}
                  className="bg-black-2 outline-none cursor border-none pd-x-3 pd-y-2 m-x-2 flex items-center   "
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                </button>
              )}

              <button
                onClick={() => {
                  setShowToggel((showToggel) => !showToggel);
                }}
                className="cursor   border-none  outline-none text-color-9 text-s card-icon rounded-full "
              >
                <BsThreeDotsVertical />
              </button>
              <div className="position-ab z-index card-drawer">
                {showToggle && (
                  <VideoModal
                    video={video}
                    showPlayFlag={playlistFlag}
                    setPlaylistFlag={setPlaylistFlag}
                  />
                )}
              </div>
              <div className="position-ab z-index card-drawer">
                {playlistFlag && (
                  <AddPlaylist
                    video={video}
                    playlist={playlist}
                    setPlaylistFlag={setPlaylistFlag}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { Card };
