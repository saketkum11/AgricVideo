import { useVideo } from "../../Context/Video-Context/video-context";
import { SideNav, Card } from "../index";
const Like = () => {
  const { videoState, videoDispatch } = useVideo();
  const { like } = videoState;

  return (
    <>
      <main className="flex video-flex ">
        <aside className="flex flex-column h-100  m-y-5 justify-center card-main">
          <div className="text-bold text-m m-y-7">Liked</div>
          <section className="flex flex-wrap  justify-center  cards">
            {like &&
              like.map((video) => {
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
