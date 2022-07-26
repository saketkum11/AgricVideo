import { Link, useNavigate, useParams } from "react-router-dom";
import { usePlay } from "../../Context/Playlets-context/Playlets-context";
import toast from "react-hot-toast";

const PlaylistCard = ({ playlists }) => {
  const { playlistId } = useParams();
  const { deletePlaylist, playlist, getPlaylistData } = usePlay();
  const navigate = useNavigate();
  return (
    <>
      <div className="card wt-100 flex cards rounded-m  flex-column box-shadow-2  bg-black-0 text-color-9 text-dec pd-3 ">
        <div className=" h-100  flex flex-wrap flex-column items-start pd-3">
          <span className="text-bold m-y-2">{playlists.title}</span>
          <Link
            className="text-dec text-color-9 cursor m-y-5"
            onClick={() => {
              getPlaylistData(playlists);
            }}
            to={`/playlist/${playlists._id}`}
          >
            Open playlist
          </Link>
          <button
            className="bg-black-9 rounded-s border-none cursor outline-none text-color-0 pd-x-3 pd-y-2"
            onClick={() => {
              deletePlaylist(playlists);
              toast.error("Deleted playlist");
            }}
          >
            Delete playlist
          </button>
        </div>{" "}
      </div>
    </>
  );
};
export { PlaylistCard };
