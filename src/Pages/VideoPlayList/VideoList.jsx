import { useEffect } from "react";
import { useVideo } from "../../Context/Video-Context/video-context";
import { Card, SideNav } from "../index";
import "./VideoList.css";
const VideoList = () => {
  const { videoState, getVideoData } = useVideo();
  const { video } = videoState;
  useEffect(() => {
    getVideoData();
  }, []);
  return (
    <>
      <main className="flex justify-center items-start wt-100  position-sticky top-0 ">
        <aside className="flex flex-column h-100  m-y-11 justify-center gap-2">
          <section className="flex flex-wrap justify-center  gap-2">
            {video &&
              [...video].map((video) => {
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
