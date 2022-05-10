import { useEffect } from "react";
import { Card } from "../../Component/Card/Card";
import { usePlay } from "../../Context/Playlets-context/Playlets-context";
import { SideNav } from "../index";
const SinglePlaylist = () => {
  const { playlist } = usePlay();

  console.log("data from single playlist page", playlist);
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
            {/*playlist &&
              playlist.map((video) => {
                return (
                  <>
                    <Card key={video._id} data={video} />
                  </>
                );
              })*/}
          </section>
        </div>
      </main>
    </>
  );
};
export { SinglePlaylist };
