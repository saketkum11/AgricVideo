import { useVideo } from "../../Context/Video-Context/video-context";
import { Card, SideNav } from "../index";
import "./VideoList.css";
const VideoList = () => {
  const { videoState } = useVideo();
  const { video } = videoState;

  return (
    <>
      <main className="flex video-flex ">
        <SideNav />
        <aside className="flex flex-column h-100  m-y-5 justify-center  card-main">
          <div>
            <input
              type="text"
              className=" pd-4  m-y-4 text-s rounded-s search wt-50"
              placeholder="Search"
            />
          </div>

          <section className="flex flex-wrap  justify-center  cards">
            {video &&
              video.map((video) => {
                return (
                  <>
                    <Card key={video._id} video={video} />
                  </>
                );
              })}
          </section>
        </aside>
      </main>
    </>
  );
};
export { VideoList };
