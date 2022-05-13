import { useEffect } from "react";
import { SideNav } from "../index";
import { useVideo } from "../../Context/Video-Context/video-context";
import axios from "axios";
import { MdPlaylistAdd } from "react-icons/md";
import { useParams } from "react-router-dom";
import { ACTION_TYPE } from "../../Reducer/sevice";
import { useLike } from "../../Context/Like/Like-context";

const SingleVideo = () => {
  const { videoState, videoDispatch } = useVideo();
  const { video, singleVideo, like } = videoState;
  const params = useParams();
  const { likedVideo, removeLikedVideo } = useLike();
  const { _id, thumbnail, title, profile, profileName, description } =
    singleVideo;

  console.log("video from singlePage", video, "params", params);
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
        <SideNav />
        <aside className="flex flex-column   m-y-5 justify-center card-main">
          <section className="flex flex-wrap  justify-center  cards">
            <iframe
              src={`https://www.youtube.com/embed/${params.id}`}
              frameBorder="0"
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

              <button className="bg-black-2  outline-none cursor border-none pd-x-3 pd-y-2 m-x-2 flex items-center">
                <MdPlaylistAdd className="text-xm"></MdPlaylistAdd>
                <span className="pd-x-3">Save</span>
              </button>
              <button className="bg-black-2 outline-none cursor border-none pd-x-3 pd-y-2 m-x-2 flex items-center">
                <i className="fa-solid fa-clock"></i>
                <span className="pd-x-3">WatchLater</span>
              </button>
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
