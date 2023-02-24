import { NavLink } from "react-router-dom";
import "./SideNav.css";
import {
  FaHome,
  FaVideo,
  FaHistory,
  FaStopwatch,
  FaHeart,
} from "react-icons/fa";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { MdPlaylistAdd } from "react-icons/md";
import { useAuth } from "../../Context/Auth-context/Auth-context";

const SideNav = () => {
  const { tokenData, logout } = useAuth();
  return (
    <>
      <div className="bg-black-9 side-bar flex flex-column  wt-20  text-color-0 pd-x-2 side-position">
        <div className="flex  items-center justify-start  pd-y-8 pd-x-7  ">
          <span
            className="text-semibold  text-color-0 pd-x-3 text-lg
          "
          >
            Agric
          </span>
        </div>
        <ul className="flex  flex-column side-grow style-none pd-x-6 ">
          <li className="  wt-100  ">
            <NavLink
              to="/"
              className="text-dec text-color-0 sidenav-link pd-4  flex items-center   "
            >
              <FaHome className="text-xm" />
              <span className="pd-x-6">Home</span>
            </NavLink>
          </li>
          <li className="  wt-100   ">
            <NavLink
              to="/videolist"
              className="text-dec text-color-0 sidenav-link pd-4  flex items-center"
            >
              <FaVideo className="text-xm" />
              <span className="pd-x-6">VideoList</span>
            </NavLink>
          </li>
          <li className="wt-100  ">
            <NavLink
              to="/history"
              className="text-dec text-color-0 sidenav-link pd-4   items-center flex "
            >
              <FaHistory className="text-xm" />
              <span className="pd-x-6">History</span>
            </NavLink>
          </li>
          <li className=" wt-100 ">
            <NavLink
              to="/watchlater"
              className="text-dec text-color-0 sidenav-link pd-4  items-center flex "
            >
              <FaStopwatch className="text-xm" />
              <span className="pd-x-6">Watch Later</span>
            </NavLink>
          </li>
          <li className="  wt-100  ">
            <NavLink
              to="/playlist"
              className="text-dec text-color-0 sidenav-link pd-y-4 pd-x-4  items-center flex "
            >
              <MdPlaylistAdd className="text-xm" />
              <span className="pd-x-6">PlayList</span>
            </NavLink>
          </li>
          <li className="wt-100  ">
            <NavLink
              to="/like"
              className="text-dec text-color-0 sidenav-link pd-4   items-center flex "
            >
              <FaHeart className="text-xm" />
              <span className="pd-x-6">Liked</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export { SideNav };
