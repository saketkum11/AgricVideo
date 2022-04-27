import { Card, SideNav } from "../index";
import "./VideoList.css";
const VideoList = () => {
  return (
    <>
      <div className="video-grid">
        <SideNav></SideNav>
        <Card></Card>
      </div>
    </>
  );
};
export { VideoList };
