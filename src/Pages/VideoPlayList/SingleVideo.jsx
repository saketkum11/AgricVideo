import { useEffect } from "react";
import { SideNav } from "../index";
import { useVideo } from "../../Context/Video-Context/video-context";
import axios from "axios";
import { MdPlaylistAdd } from "react-icons/md";
import { useParams } from "react-router-dom";
import { ACTION_TYPE } from "../../Reducer/sevice";
const SingleVideo = () => {
  const { videoState, videoDispatch } = useVideo();
  const { video } = videoState;
  const params = useParams();
  const { _id, thumbnail, title, profile, profileName } = video;
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
              frameborder="0"
              width="90%"
              height="650px"
            ></iframe>
            <div className="flex justify-start wt-100">
              <button class="bg-black-2 outline-none border-none pd-x-3 pd-y-2 ">
                <i class="fa-solid fa-thumbs-up"></i>
                <span className="pd-x-3">Like</span>
              </button>
              <button class="bg-black-2  outline-none border-none pd-x-3 pd-y-2">
                <MdPlaylistAdd className="text-xm"></MdPlaylistAdd>
                <span className="pd-x-3">PlayList</span>
              </button>
              <button class="bg-black-2 outline-none border-none pd-x-3 pd-y-2">
                <i class="fa-solid fa-clock"></i>
                <span>WatchLater</span>
              </button>
            </div>
            <div className="flex flex-column justify-start">
              <span>Saksjkdj</span>
              <div>
                <span></span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi a
                provident aliquid facilis debitis.
              </p>
            </div>
          </section>
        </aside>
      </main>
    </>
  );
};

export { SingleVideo };
