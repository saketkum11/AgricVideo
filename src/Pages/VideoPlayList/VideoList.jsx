import { useVideo } from "../../Context/Video-Context/video-context";
import { Card, SideNav } from "../index";
import "./VideoList.css";
const VideoList = () => {
  return (
    <>
      <main className="flex ">
        <SideNav></SideNav>
        <Card></Card>
      </main>
    </>
  );
};
export { VideoList };
