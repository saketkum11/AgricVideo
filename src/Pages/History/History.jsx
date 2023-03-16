import { Card } from "../../Component/Card/Card";
import { useHistory } from "../../Context/History-context/History-context";
import { useVideo } from "../../Context/Video-Context/video-context";
import { useEffect } from "react";
const History = () => {
  const { videoState } = useVideo();
  const { history } = videoState;
  const { removeAllHistoryVideo, getHistory } = useHistory();
  useEffect(() => {
    getHistory();
    document.title = "History";
  }, []);
  return (
    <>
      <main className="flex justify-center items-start wt-100 position-sticky top-0">
        <aside>
          <div className="flex flex-column">
            <div className="text-bold text-m m-y-7">History</div>
            <div>
              <button
                onClick={() => {
                  removeAllHistoryVideo();
                }}
                className="cursor bg-red-5 text-color-grey-0 pd-x-4 pd-y-3 text-s "
              >
                Remove all history
              </button>
            </div>

            <section className="flex flex-wrap  justify-center m-y-8">
              {history &&
                [...history].map((video) => {
                  return <Card video={video} key={video._id} />;
                })}
            </section>
          </div>
        </aside>
      </main>
    </>
  );
};
export { History };
