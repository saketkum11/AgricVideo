import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaVideo,
  FaHistory,
  FaStopwatch,
  FaHeart,
} from "react-icons/fa";
import { MdPlaylistAdd } from "react-icons/md";
const Navigation = () => {
  return (
    <>
      <div className=" flex flex-column  text-color-grey-9 pd-x-2 m-y-4 border-right-1 border-right-solid border-black-500 h-100 sideNav-show">
        <ul className="flex  flex-column style-none pd-x-6 ">
          <li className="wt-100  ">
            <NavLink
              to="/"
              className="text-dec text-color-grey-9 pd-4 items-center flex hover-grey-200 rounded-m"
            >
              <FaHome className="text-xm" />
              <span className="pd-x-6">Home</span>
            </NavLink>
          </li>
          <li className="wt-100">
            <NavLink
              to="/videolist"
              className="text-dec text-color-grey-9 pd-4 items-center flex hover-grey-200 rounded-m"
            >
              <FaVideo className="text-xm" />
              <span className="pd-x-6">VideoList</span>
            </NavLink>
          </li>
          <li className="wt-100">
            <NavLink
              to="/history"
              className="text-dec text-color-grey-9 pd-4 items-center flex hover-grey-200 rounded-m"
            >
              <FaHistory className="text-xm" />
              <span className="pd-x-6">History</span>
            </NavLink>
          </li>
          <li className="wt-100">
            <NavLink
              to="/watchlater"
              className="text-dec text-color-grey-9 pd-4 items-center flex hover-grey-200 rounded-m"
            >
              <FaStopwatch className="text-xm" />
              <span className="pd-x-6">WatchLater</span>
            </NavLink>
          </li>
          <li className="wt-100">
            <NavLink
              to="/playlist"
              className="text-dec text-color-grey-9 pd-4 items-center flex hover-grey-200 rounded-m"
            >
              <MdPlaylistAdd className="text-xm" />
              <span className="pd-x-6">PlayList</span>
            </NavLink>
          </li>
          <li className="wt-100">
            <NavLink
              to="/like"
              className="text-dec text-color-grey-9 pd-4 items-center flex hover-grey-200 rounded-m"
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
export { Navigation };
