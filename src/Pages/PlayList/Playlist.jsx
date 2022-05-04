import React from "react";
import { Card } from "../index";
import { SideNav } from "../index";
import { useVideo } from "../../Context/Video-Context/video-context";
const Playlist = () => {
  const { videoData } = useVideo();
  return (
    <>
      <main className="flex  ">
        <SideNav />
        <div className="flex flex-column   m-y-5 justify-center card-main">
          <div>
            <input
              type="text"
              className=" pd-4  m-y-4 text-s rounded-s search wt-50"
              placeholder="Search"
            />
          </div>

          <section className="flex flex-wrap  justify-center  cards">
            {videoData &&
              videoData.map((data) => {
                return (
                  <>
                    <Card key={data.id} data={data} />
                  </>
                );
              })}
          </section>
        </div>
      </main>
    </>
  );
};

export { Playlist };
