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
      <div className="width-scaled4-5 box-shadow-2 rounded-m">
        <div className="position-rel">
          <div className=" flex flex-column">
            <div>
              <Link to={`/videolist/${_id}`}>
                <img
                  onClick={() => {
                    addHistoryVideo(video);
                  }}
                  src={thumbnail}
                  className="object-content-center rounded-top-3 wt-100"
                  alt={profileName}
                />
              </Link>
            </div>

            <div className="flex flex-column pd-5 gap-2">
              <span className="text-start text-s">{title}</span>
              <div className="flex items-center gap-1">
                <img src={profile} className="width-2 rounded-full" alt="" />
                <span className="">{profileName}</span>
              </div>
            </div>

            <div className="flex justify-btw pd-5">
              <button
                onClick={() => {
                  navigate(`/videolist/${_id}`);
                  addHistoryVideo(video);
                }}
                className="text-dec bg-red-5 rounded-s text-s text-color-grey-0 pd-y-3 pd-x-3 "
              >
                Watch now
              </button>

              <div className="flex ">
                {like.find((video) => video._id === _id) ? (
                  <button
                    onClick={handleRemoveLikedVideo}
                    className="m-x-2 pd-3 bg-none"
                  >
                    <i className=""></i>
                  </button>
                ) : (
                  <button
                    onClick={handleLikedVideo}
                    className="m-x-2 pd-3 bg-none"
                  >
                    <i className="fa-solid fa-thumbs-up"></i>
                  </button>
                )}

                <button
                  onClick={() => {
                    setShowToggel((showToggel) => !showToggel);
                  }}
                  className="pd-3 bg-none"
                >
                  <BsThreeDotsVertical />
                </button>

                <div className="position-ab z-index-1 top-10 left-25 ">
                  {showToggle && (
                    <VideoModal
                      video={video}
                      showPlayFlag={playlistFlag}
                      setPlaylistFlag={setPlaylistFlag}
                    />
                  )}
                </div>
                <div className="position-ab z-index-1 ">
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
      </div>
    </>
  );
};
export { Card };
