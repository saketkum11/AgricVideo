import React from "react";
import { usePlaylist } from "../context/PlaylistContext";
import { VideoGrid } from "../components/VideoToGrid";

const Card = React.lazy(() => import("../components/Card"));
const PlaylistListCard = React.lazy(
  () => import("../components/PlaylistCardList")
);
const PlayList = () => {
  const { playlist } = usePlaylist();
  if (playlist.length === 0) {
    return <h2>There is not playlist</h2>;
  }

  return (
    <>
      <div>
        {playlist && (
          <VideoGrid>
            {playlist.map((playlist) => {
              return (
                <Card key={playlist._id}>
                  <PlaylistListCard list={playlist} />
                </Card>
              );
            })}
          </VideoGrid>
        )}
      </div>
    </>
  );
};

export default PlayList;
