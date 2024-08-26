import { TbPlaylistAdd } from "react-icons/tb";
import { FaHistory, FaHome } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { MdWatchLater } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const SideNav = () => {
  const navigate = useNavigate();

  return (
    <div className=" min-h-screen  px-4 py-4 pt-12">
      <nav>
        <div>
          <ul className="flex flex-col gap-4">
            <li
              onClick={() => navigate("/")}
              className="flex items-center gap-4"
            >
              <FaHome className="h-5 w-5 " />
              <p className="">Home</p>
            </li>
            <li
              onClick={() => navigate("/playlist")}
              className="flex items-center gap-4"
            >
              <TbPlaylistAdd className="h-5 w-5 " />
              <p className="">PlayList</p>
            </li>
            <li
              onClick={() => navigate("/history")}
              className="flex items-center gap-4"
            >
              <FaHistory className="h-5 w-5 " />
              <p className="">History</p>
            </li>
            <li
              onClick={() => navigate("/explore")}
              className="flex items-center gap-4"
            >
              <FaHistory className="h-5 w-5 " />
              <p className="">Explore</p>
            </li>
            <li
              onClick={() => navigate("/like")}
              className="flex items-center gap-4"
            >
              <AiOutlineLike className="h-5 w-5 " />
              <p className="">Liked</p>
            </li>
            <li
              onClick={() => navigate("/watchlater")}
              className="flex items-center gap-4 cursor-pointer"
            >
              <MdWatchLater className="h-5 w-5 " />
              <p className="">WatchLater</p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideNav;
