import { useEffect } from "react";
import { Card } from "../../Component/Card/Card";
import { SinglePlaylistCard } from "../../Component/SinglePlaylistCard/SinglePlaylistCard";
import { useVideo } from "../../Context/Video-Context/video-context";
import { SideNav } from "../index";
const SinglePlaylist = () => {
  const { videoState } = useVideo();
  const { playlist } = videoState;
  const playlistVideo = playlist?.videos;
  return (
    <>
      <main className="flex  ">
        <SideNav />

        <aside className="flex flex-column h-100  m-y-5 justify-center card-main position-rel">
          <div className="text-bold text-m ">Single Playlist</div>
          <div>
            <input
              type="text"
              className=" pd-4  m-y-4 text-s rounded-s search wt-50"
              placeholder="Search"
            />
          </div>

          <section className="flex flex-wrap  justify-center  cards">
            {playlistVideo &&
              playlistVideo.map((video) => {
                return (
                  <>
                    <SinglePlaylistCard key={video._id} video={video} />
                  </>
                );
              })}
          </section>
        </aside>
      </main>
    </>
  );
};
export { SinglePlaylist };
