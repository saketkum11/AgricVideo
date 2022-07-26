import { Card } from "../../Component/Card/Card";
import { useHistory } from "../../Context/History-context/History-context";
import { useVideo } from "../../Context/Video-Context/video-context";
import { SideNav } from "../index";

const History = () => {
  const { videoState } = useVideo();
  const { history } = videoState;
  const { removeAllHistoryVideo } = useHistory();
  return (
    <>
      <main className="flex video-flex ">
        <SideNav />
        <aside className="flex flex-column h-100   m-y-5 justify-center card-main">
          <div className="text-bold text-m m-y-7">History</div>
          <div>
            <button
              onClick={() => {
                removeAllHistoryVideo();
              }}
              className="cursor bg-black-9  border-none  outline-none text-color-0 pd-x-4 pd-y-3 text-s "
            >
              Remove all history
            </button>
          </div>

          <section className="flex flex-wrap  justify-center  cards">
            {history &&
              history.map((video) => {
                return <Card video={video} key={video._id} />;
              })}
          </section>
        </aside>
      </main>
    </>
  );
};
export { History };
