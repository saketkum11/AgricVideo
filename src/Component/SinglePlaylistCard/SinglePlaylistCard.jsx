import { NavLink, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { usePlay } from "../../Context/Playlets-context/Playlets-context";
import { useVideo } from "../../Context/Video-Context/video-context";
import toast from "react-hot-toast";
const SinglePlaylistCard = ({ video }) => {
  const { _id, thumbnail, title, profile, profileName } = video;
  const { deletedPlaylist } = usePlay();
  const { videoState } = useVideo();
  const { playlist } = videoState;
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-column box-shadow-2 rounded-m bg-black-0 text-color-9 text-dec position-rel">
        <NavLink to="/" className="card_image flex ">
          <img src={thumbnail} className=" wt-100" alt="" />
        </NavLink>
        <div className="flex h-100 flex-column justify-even pd-5">
          <div className="  flex flex-wrap items-start pd-y-2">
            <span>{title}</span>
          </div>
          <div className="flex items-center justify-start pd-y-2">
            <img
              src={profile}
              className="object-content card-icon rounded-full"
              alt=""
            />
            <span
              className="text-semibold  text-color-9 pd-x-3 
          "
            >
              {profileName}
            </span>
          </div>

          <div className=" flex flex-wrap justify-btw">
            <button
              onClick={() => {
                navigate(`/videolist/${_id}`);
              }}
              className="cursor bg-black-9  border-none  outline-none text-color-0 pd-x-4 pd-y-3 text-s "
            >
              Watch now
            </button>

            <div className="flex items-center justify-btw">
              <button
                onClick={() => {
                  deletedPlaylist(playlist, video);
                  toast.success("Successfully removed video");
                }}
                className="cursor  text-color-9  border-none  outline-none text-color-0  card-icon text-s rounded-full"
              >
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { SinglePlaylistCard };
