import React from "react";
import { SideNav } from "../index";
import { usePlay } from "../../Context/Playlets-context/Playlets-context";
import { PlaylistCard } from "../../Component/PlaylistCard/PlaylistCard";
const Playlist = () => {
  const { playlist } = usePlay();
  console.log("from playlist page", playlist);
  return (
    <>
      <main className="flex  ">
        <SideNav />
        <div className="flex flex-column   m-y-5 justify-center card-main position-rel">
          <div>
            <input
              type="text"
              className=" pd-4  m-y-4 text-s rounded-s search wt-50"
              placeholder="Search"
            />
          </div>
          <div></div>

          <section className="flex flex-wrap  justify-center  cards">
            {playlist &&
              playlist.map((data) => {
                return (
                  <>
                    <PlaylistCard data={data} key={data._id} />
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
