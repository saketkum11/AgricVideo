import React from "react";
import { SideNav } from "../index";
import { usePlay } from "../../Context/Playlets-context/Playlets-context";
import { PlaylistCard } from "../../Component/PlaylistCard/PlaylistCard";
import { useVideo } from "../../Context/Video-Context/video-context";
const Playlist = () => {
  const { videoState, videoDispatch } = useVideo();
  const { playlists, video } = videoState;

  return (
    <>
      <main className="flex  ">
        <SideNav />
        <aside className="flex flex-column h-100   m-y-5 justify-center card-main position-rel">
          <div>
            <input
              type="text"
              className=" pd-4  m-y-4 text-s rounded-s search wt-50"
              placeholder="Search"
            />
          </div>

          <section className="flex flex-wrap  justify-center  cards">
            {playlists &&
              playlists.map((playlists) => {
                return (
                  <>
                    <PlaylistCard playlists={playlists} key={playlists._id} />
                  </>
                );
              })}
          </section>
        </aside>
      </main>
    </>
  );
};

export { Playlist };
