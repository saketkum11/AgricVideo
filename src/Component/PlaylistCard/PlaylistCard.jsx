import { NavLink, useNavigate } from "react-router-dom";
import { usePlay } from "../../Context/Playlets-context/Playlets-context";

const PlaylistCard = ({ playlists }) => {
  const { deletePlaylist, playlist, getPlaylistData } = usePlay();
  const navigate = useNavigate();
  return (
    <>
      <NavLink
        onClick={() => {
          getPlaylistData(playlists);
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
                <span>{playlists.title}</span>

                <button
                  onClick={() => {
                    deletePlaylist(playlists);
                  }}
                >
                  remove
                </button>
              </div>
            </div>
          </div>{" "}
        </div>
      </NavLink>
    </>
  );
};
export { PlaylistCard };
