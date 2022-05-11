import { useEffect } from "react";
import { Card } from "../../Component/Card/Card";
import { SinglePlaylistCard } from "../../Component/SinglePlaylistCard/SinglePlaylistCard";
import { useVideo } from "../../Context/Video-Context/video-context";
import { SideNav } from "../index";
const SinglePlaylist = () => {
  const { videoState } = useVideo();
  const { playlist } = videoState;

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
            {playlistVideo &&
              playlistVideo.map((video) => {
                return (
                  <>
                    <SinglePlaylistCard key={video._id} video={video} />
                  </>
                );
              })}
          </section>
        </div>
      </main>
    </>
  );
};
export { SinglePlaylist };
