import { FaShareAlt, FaStopwatch } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdPlaylistAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Card.css";
import { useState } from "react";
import { useWatch } from "../../Context/WatchLater-context/Watch-context";
import { usePlay } from "../../Context/Playlets-context/Playlets-context";
import { AddPlaylist, VideoModal } from "../../Pages/index";

const Card = ({ data }) => {
  const { _id, thumbnail, title, profile, profileName } = data;
  const { watchVideo } = useWatch();
  const { playlist, createPlaylist } = usePlay();
  const [showToggle, setShowToggel] = useState(false);
  const [playlistFlag, setPlaylistFlag] = useState(false);

  const [createPlaylistData, setCreatePlaylistData] = useState({
    title: "foo",
    description: "bar bar bar",
  });
  return (
    <>
      <div className="card flex cards  flex-column box-shadow-2 rounded-m bg-black-0 text-color-9 text-dec position-rel">
        <NavLink to="/" className="card_image flex ">
          <img src={thumbnail} className=" wt-100" alt="" />
        </NavLink>
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
                addWatchLater(data);
              }}
              className="cursor bg-black-9  border-none  outline-none text-color-0 pd-x-4 pd-y-3 text-s "
            >
              Watch now
            </button>

            <div className="flex items-center justify-btw">
              <button className="cursor  text-color-9  border-none  outline-none text-color-0  card-icon text-s rounded-full">
                <FaShareAlt />
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
                    watchVideo={watchVideo}
                    data={data}
                    showPlayFlag={playlistFlag}
                    setPlaylistFlag={setPlaylistFlag}
                    playlist={playlist}
                    createplaylist={createPlaylistData}
                  />
                )}
              </div>
              <div className="position-ab z-index card-drawer">
                {playlistFlag && (
                  <AddPlaylist
                    playlist={playlist}
                    setPlaylistFlag={setPlaylistFlag}
                    showPlayFlag={showToggle}
                    createPlaylist={createPlaylist}
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
