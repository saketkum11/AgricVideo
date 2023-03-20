import { useEffect } from "react";
import { useLike } from "../../Context/Like/Like-context";
import { useVideo } from "../../Context/Video-Context/video-context";
import { SideNav, Card } from "../index";
const Like = () => {
  const { videoState, videoDispatch } = useVideo();
  const { like } = videoState;
  const { getLiked } = useLike();
  useEffect(() => {
    getLiked();
    document.title = "Liked";
  }, []);
  return (
    <>
      <main className="flex justify-center items-start wt-100 ">
        <aside className="flex flex-column   justify-center ">
          <div className="text-bold text-m m-y-7">Liked</div>
          <section className="flex flex-wrap  justify-center ">
            {like &&
              [...like].map((video) => {
                return (
                  <>
                    <Card video={video} key={video._id} />
                  </>
                );
              })}
          </section>
        </aside>
      </main>
    </>
  );
};
export { Like };
