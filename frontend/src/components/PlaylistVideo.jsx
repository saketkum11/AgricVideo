import { VideoGrid } from "./VideoToGrid";
import { usePlaylist } from "../context/PlaylistContext";
import Card from "./Card";
import VideoCard from "./VideoCard";

const PlaylistVideo = () => {
  const { playlist } = usePlaylist();

  console.log("from playlistVideo", playlist);
  return (
    <div>
      <VideoGrid>
        {[{}, {}].map((video) => {
          console.log("from the video ", video);
          return (
            <>
              <Card key={video._id}>
                <VideoCard data={video} />
              </Card>
            </>
          );
        })}
      </VideoGrid>
    </div>
  );
};

export default PlaylistVideo;
