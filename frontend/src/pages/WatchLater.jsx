import { VideoGrid } from "../components/VideoToGrid";
import VideoCard from "../components/VideoCard";
import { useWatchLater } from "../context/WatchLaterContext";

const WatchLater = () => {
  const { watchLaterList } = useWatchLater();
  console.log("from watchlist", watchLaterList);

  return (
    <div className="border-l-2 border-zinc-800">
      <VideoGrid>
        {[...watchLaterList].map((data) => {
          console.log("from indie videogrid", data);
          const { video } = data;
          return <VideoCard key={video._id} data={video} watch={data} />;
        })}
      </VideoGrid>
      ;
    </div>
  );
};

export default WatchLater;
