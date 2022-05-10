import { NavLink } from "react-router-dom";
import { usePlay } from "../../Context/Playlets-context/Playlets-context";

const PlaylistCard = ({ data }) => {
  const { deletePlaylist, playlist, getPlaylistData } = usePlay();
  const isPlaylist = playlist.some((list) => list._id === data._id);
  return (
    <>
      <NavLink
        onClick={() => {
          getPlaylistData(playlist);
        }}
        to="/playlist/:playlistId"
      >
        <div className="card flex cards  flex-column box-shadow-2  bg-black-0 text-color-9 text-dec ">
          <div className="flex h-100 flex-column justify-even pd-5">
            <div className="  flex flex-wrap items-start pd-y-2">
              <div>
                <button>getListData</button>
              </div>

              <div>
                <span>{data.title}</span>
                {isPlaylist ? (
                  <button onClick={() => deletePlaylist(data)}>remove</button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>{" "}
        </div>
      </NavLink>
    </>
  );
};
export { PlaylistCard };
