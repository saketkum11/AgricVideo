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
          <div className="text-bold text-m m-y-7">Video List</div>

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
