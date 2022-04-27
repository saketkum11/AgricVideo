import { useVideo } from "../../Context/Video-Context/video-context";
import { Card, SideNav } from "../index";
import "./VideoList.css";
const VideoList = () => {
  const { videoData } = useVideo();
  return (
    <>
      <div className="video-grid">
        <SideNav></SideNav>
        {videoData.map((items) => {
          const { _id } = items;
          return (
            <>
              <Card key={_id} cardData={items}></Card>
            </>
          );
        })}
      </div>
    </>
  );
};
export { VideoList };
