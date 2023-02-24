import React from "react";
import { useVideo } from "../../Context/Video-Context/video-context";

import { SideNav, Card } from "../index";
const WatchLater = () => {
  const { videoState } = useVideo();
  const { watchlater } = videoState;
  return (
    <>
      <main className="flex">
        <aside className="flex flex-column h-100  m-y-5 justify-center card-main">
          <div className="text-bold text-m m-y-7 ">Watchlater</div>

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
