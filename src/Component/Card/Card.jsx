import { FaShareAlt, FaStopwatch } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import "./Card.css";
import { useState } from "react";
import { useWatch } from "../../Context/WatchLater-context/Watch-context";
import { usePlay } from "../../Context/Playlets-context/Playlets-context";
import { AddPlaylist, VideoModal } from "../../Pages/index";
import { useVideo } from "../../Context/Video-Context/video-context";

const Card = ({ video }) => {
  const { _id, thumbnail, title, profile, profileName } = video;
  const { id } = useParams();
  const { playlist } = usePlay();
  const [showToggle, setShowToggel] = useState(false);
  const [playlistFlag, setPlaylistFlag] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="card flex cards cursor  flex-column box-shadow-2 rounded-m bg-black-0 text-color-9 text-dec position-rel">
        <Link to={`/videolist/${_id}`}>
          <div className="card_image flex ">
            <img src={thumbnail} className=" wt-100" alt="" />
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
                addWatchLater(video);
              }}
              className="cursor bg-black-9  border-none  outline-none text-color-0 pd-x-4 pd-y-3 text-s "
            >
              Watch now
            </button>

            <div className="flex items-center justify-btw">
              <button className="cursor  text-color-9  border-none  outline-none text-color-0  card-icon text-s rounded-full">
                <MdDelete />
              </button>
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
