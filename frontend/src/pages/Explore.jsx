/* eslint-disable no-unused-vars */

import VideoCard from "../components/VideoCard";
import { VideoGrid } from "../components/VideoToGrid";
import { useVideo } from "../context/VideoContext";
import { useWatchLater } from "../context/WatchLaterContext";
import { DataBase } from "../db/dataBase";
const Explore = () => {
  const { videoData } = useVideo();
  const { watchLaterList } = useWatchLater();
  return (
    <div className="border-l-2 border-zinc-800">
      <VideoGrid>
        {videoData?.map((video) => {
          return (
            <VideoCard
              key={video._id}
              data={video}
              watchList={watchLaterList}
            />
          );
        })}
      </VideoGrid>
    </div>
  );
};

export default Explore;
