import ReactPlayer from "react-player";
import { useEffect } from "react";
import { SideNav } from "../index";
import { useVideo } from "../../Context/Video-Context/video-context";
import axios from "axios";
const SingleVideo = () => {
  const { videoState, videoDispatch } = useVideo();
  const { video } = videoState;
  const { _id, thumbnail, title, profile, profileName } = video;
  console.log("video from singlePage", video, _id);

  useEffect(() => {
    const getIndividualVideo = async () => {
      try {
        const response = await axios.get(`/api/video/${_id}`);
        console.log("response from singleVideo page", response);
      } catch (error) {
        console.error(error);
      }
    };
    getIndividualVideo();
  }, []);
  return (
    <>
      <main className="flex video-flex ">
        <SideNav />
        <aside className="flex flex-column   m-y-5 justify-center card-main">
          <div>
            <input
              type="text"
              className=" pd-4  m-y-4 text-s rounded-s search wt-50"
              placeholder="Search"
            />
          </div>

          <section className="flex flex-wrap  justify-center  cards">
            <ReactPlayer
              className="border-shadow bg-black-9"
              width="100%"
              height="100%"
              url={`https://www.youtube.com/watch?v=${_id}`}
              controls={true}
              playing
              light={true}
              type="audio/mp3"
              style={{
                aspectRatio: 1.777,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            ></ReactPlayer>
          </section>
        </aside>
      </main>
    </>
  );
};

export { SingleVideo };
