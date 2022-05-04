import React from "react";
import { useWatch } from "../../Context/WatchLater-context/Watch-context";

import { SideNav, Card } from "../index";
const WatchLater = () => {
  const { watchVideo } = useWatch();
  return (
    <>
      <main className="flex">
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
            {watchVideo &&
              watchVideo.map((data) => {
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
export { WatchLater };
