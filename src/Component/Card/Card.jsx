import { FaShareAlt, FaStopwatch } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdPlaylistAdd, MdRemoveCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Card.css";
import { useWatch } from "../../Context/WatchLater-context/Watch-context";
import { useState } from "react";
import { usePlay } from "../../Context/Playlets-context/Playlets-context";
import { useVideo } from "../../Context/Video-Context/video-context";

const Card = ({ data }) => {
  const { _id, thumbnail, title, profile, profileName } = data;
  const { addWatchLater, watchVideo, removeWatchLater } = useWatch();

  const { getPlaylist, createPlaylist, setPlaylistFlag, playlistFlag } =
    usePlay();
  const [playlistTag, setPlaylistTag] = useState({
    title: "check",
  });

  const [showToggle, setShowToggel] = useState(false);

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
                  setShowToggel(!showToggle);
                }}
                className="cursor   border-none  outline-none text-color-9 text-s card-icon rounded-full "
              >
                <BsThreeDotsVertical />
              </button>
              <div className="position-ab z-index card-drawer">
                {showToggle ? (
                  <div className=" bg-black-0  m-auto justify-around flex flex-column pd-4 m-y-8  box-shadow-2">
                    <div className="flex flex-column h-100">
                      <ul className="flex flex-wrap flex-column items-start ">
                        {watchVideo.some((video) => video._id === _id) ? (
                          <li
                            onClick={() => {
                              removeWatchLater(data);
                            }}
                            className="style-none flex items-center pd-y-2 cursor"
                          >
                            <MdRemoveCircle className="text-xm"></MdRemoveCircle>
                            <span className="pd-x-3">
                              Remove from watchLater
                            </span>
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
                        <li
                          onClick={() => {
                            getPlaylist();
                            setPlaylistFlag(!playlistFlag);
                          }}
                          className="style-none flex items-centers pd-y-2 cursor"
                        >
                          <MdPlaylistAdd className="text-xm"></MdPlaylistAdd>
                          <span className="pd-x-3">Add to playlist</span>
                        </li>
                        <div className="z-index position-ab card-modal  flex">
                          {playlistFlag ? (
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
                        </div>
                      </ul>
                    </div>
                  </div>
                ) : (
                  ""
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
