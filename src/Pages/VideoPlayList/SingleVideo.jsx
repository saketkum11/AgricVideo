import { useEffect, useState } from "react";
import { useVideo } from "../../Context/Video-Context/video-context";
import axios from "axios";

import { useParams } from "react-router-dom";
import { ACTION_TYPE } from "../../Reducer/sevice";
import { useLike } from "../../Context/Like/Like-context";
import { useWatch } from "../../Context/WatchLater-context/Watch-context";
import { AddPlaylist } from "../../Component/AddPlaylist/AddPlaylist";
import { usePlay } from "../../Context/Playlets-context/Playlets-context";

const SingleVideo = () => {
  const { videoState, videoDispatch } = useVideo();
  const { video, singleVideo, like, watchlater } = videoState;
  const params = useParams();
  const { likedVideo, removeLikedVideo } = useLike();
  const { _id, thumbnail, title, profile, profileName, description } =
    singleVideo;
  const isInWatchLater = watchlater.find(
    (watchLater) => watchLater._id === singleVideo._id
  );
  const { removeWatchLater, addWatchLater } = useWatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${params.id}`);
        videoDispatch({
          type: ACTION_TYPE.SINGLE_VIDEO,
          payload: response.data.video,
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <>
      <main className="flex video-flex ">
        <aside className="flex flex-column   m-y-5 justify-center card-main">
          <section className="flex flex-wrap  justify-center  cards">
            <iframe
              src={`https://www.youtube.com/embed/${params.id}`}
              width="90%"
              height="650px"
            ></iframe>
            <div className="flex justify-start  wt-100 m-x-11 ">
              {like.find((video) => video._id === _id) ? (
                <button
                  onClick={() => removeLikedVideo(_id)}
                  className="bg-black-2 outline-none cursor border-none pd-x-3 pd-y-2 m-x-2 flex items-center"
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="pd-x-3">remove</span>
                </button>
              ) : (
                <button
                  onClick={() => likedVideo(singleVideo)}
                  className="bg-black-2 outline-none cursor border-none pd-x-3 pd-y-2 m-x-2 flex items-center"
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="pd-x-3">like</span>
                </button>
              )}

              {isInWatchLater ? (
                <button
                  onClick={() => {
                    removeWatchLater(singleVideo);
                  }}
                  className="bg-black-2 outline-none cursor border-none pd-x-3 pd-y-2 m-x-2 flex items-center"
                >
                  <i className="fa-solid fa-clock"></i>
                  <span className="pd-x-3">Remove </span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    addWatchLater(singleVideo);
                  }}
                  className="bg-black-2 outline-none cursor border-none pd-x-3 pd-y-2 m-x-2 flex items-center"
                >
                  <i className="fa-solid fa-clock"></i>
                  <span className="pd-x-3">Watch Later</span>
                </button>
              )}
            </div>
            <div className="flex flex-column justify-start items-start wt-100 m-x-11">
              <div className="  flex flex-wrap items-start pd-y-2">
                <span className="text-lg text-semibold">{title}</span>
              </div>
              <div className="flex items-center justify-start pd-y-2">
                <img
                  src={profile}
                  className="object-content card-icon text-lg rounded-full"
                  alt=""
                />
                <span
                  className="text-semibold  text-color-9 pd-x-3 
          "
                >
                  {profileName}
                </span>
              </div>
              <p className="flex">{description}</p>
            </div>
          </section>
        </aside>
      </main>
    </>
  );
};

export { SingleVideo };
