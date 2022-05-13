import { SideNav } from "../../Component/SideNav/SideNav";
import { useVideo } from "../../Context/Video-Context/video-context";

const Like = () => {
  const { videoState, videoDispatch } = useVideo();
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

          <section className="flex flex-wrap  justify-center  cards"></section>
        </aside>
      </main>
    </>
  );
};
export { Like };
