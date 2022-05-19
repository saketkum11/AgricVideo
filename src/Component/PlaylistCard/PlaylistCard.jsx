import { Link, useNavigate, useParams } from "react-router-dom";
import { usePlay } from "../../Context/Playlets-context/Playlets-context";

const PlaylistCard = ({ playlists }) => {
  const { playlistId } = useParams();
  const { deletePlaylist, playlist, getPlaylistData } = usePlay();
  const navigate = useNavigate();
  console.log("Pramas", playlistId);
  return (
    <>
      <Link
        onClick={() => {
          getPlaylistData(playlists);
        }}
        to={`/playlist/${playlists._id}`}
      >
        <div className="card wt-100 flex cards  flex-column box-shadow-2  bg-black-0 text-color-9 text-dec ">
          <div className="flex  flex-column justify-even pd-5">
            <div className=" h-100 flex flex-wrap items-start pd-y-2">
              <span>{playlists.title}</span>

              <button
                onClick={() => {
                  deletePlaylist(playlists);
                }}
              >
                remove
              </button>
            </div>
          </div>{" "}
        </div>
      </Link>
    </>
  );
};
export { PlaylistCard };
