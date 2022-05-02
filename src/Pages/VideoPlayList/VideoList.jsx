import { useVideo } from "../../Context/Video-Context/video-context";
import { Card, SideNav } from "../index";
import "./VideoList.css";
const VideoList = () => {
  const { videoData } = useVideo();
  console.log("videiData from ", videoData);
  return (
    <>
      <main className="flex  ">
        <SideNav />

        <section className="flex flex-wrap  justify-center  cards">
          {videoData &&
            videoData.map((data) => {
              return (
                <>
                  <Card key={data._id} data={data} />
                </>
              );
            })}
        </section>
      </main>
    </>
  );
};
export { VideoList };
