import { usePlay } from "../../Context/Playlets-context/Playlets-context";

const PlaylistCard = ({ data }) => {
  const { deletePlaylist, playlist } = usePlay();
  const isPlaylist = playlist.some((list) => list._id === data._id);
  console.log("from playlistcard", data, isPlaylist);
  return (
    <>
      <div className="card flex cards  flex-column box-shadow-2  bg-black-0 text-color-9 text-dec ">
        <div className="flex h-100 flex-column justify-even pd-5">
          <div className="  flex flex-wrap items-start pd-y-2">
            <span>{data.title}</span>
            <div>
              {isPlaylist ? (
                <button onClick={() => deletePlaylist(playlist)}>remove</button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};
export { PlaylistCard };
