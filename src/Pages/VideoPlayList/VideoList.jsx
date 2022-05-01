import { useVideo } from "../../Context/Video-Context/video-context";
import { Card, SideNav } from "../index";
import "./VideoList.css";
const VideoList = () => {
  const { videoData } = useVideo();
  return (
    <>
      <main className="flex ">
        <SideNav />
        <Card />
      </main>
    </>
  );
};
export { VideoList };
