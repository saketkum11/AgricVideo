import React from "react";
import { useVideo } from "../../Context/Video-Context/video-context";

import { SideNav, Card } from "../index";
const WatchLater = () => {
  const { videoState } = useVideo();
  const { watchlater } = videoState;
  return (
    <>
      <main className="flex">
        <SideNav />
        <aside className="flex flex-column h-100  m-y-5 justify-center card-main">
          <div className="text-bold text-m ">Watchlater</div>
          <div className="flex justify-center items-start">
            <input
              type="text"
              className=" pd-4  m-y-4 text-s rounded-s search wt-50"
              placeholder="Search"
            />
          </div>

          <section className="flex flex-wrap  justify-center  cards">
            {watchlater &&
              watchlater.map((video) => {
                return (
                  <>
                    <Card key={video.id} video={video} />
                  </>
                );
              })}
          </section>
        </aside>
      </main>
    </>
  );
};
export { WatchLater };
