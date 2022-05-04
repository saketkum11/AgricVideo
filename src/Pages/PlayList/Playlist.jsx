import React from "react";
import { Card, SideNav } from "../index";
import { usePlay } from "../../Context/Playlets-context/Playlets-context";
const Playlist = () => {
  const { playlist } = usePlay();
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
            {playlist &&
              playlist.map((data) => {
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
