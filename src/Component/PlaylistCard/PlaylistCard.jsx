import { Link, useNavigate, useParams } from "react-router-dom";
import { usePlay } from "../../Context/Playlets-context/Playlets-context";
import toast from "react-hot-toast";

const PlaylistCard = ({ playlists }) => {
  const { playlistId } = useParams();
  const { deletePlaylist, playlist, getPlaylistData } = usePlay();
  const navigate = useNavigate();
  return (
    <>
      <div className=" width-scaled4-4 flex  rounded-m  flex-column box-shadow-2  text-dec pd-3 ">
        <div className=" h-100  flex flex-wrap flex-column items-start pd-3">
          <span className="text-bold m-y-2 ">{playlists.title}</span>
          <Link
            className="text-dec text-color-red-5 cursor m-y-5"
            onClick={() => {
              getPlaylistData(playlists);
            }}
            to={`/playlist/${playlists._id}`}
          >
            Open playlist
          </Link>
          <button
            className="bg-red-5 rounded-s border-none cursor outline-none text-color-grey-0 text-xm pd-x-3 pd-y-2"
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
