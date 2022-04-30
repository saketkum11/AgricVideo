import { NavLink } from "react-router-dom";
import "./SideNav.css";
import { FaHome, FaVideo, FaHistory, FaStopwatch } from "react-icons/fa";
import { MdPlaylistAdd } from "react-icons/md";

const SideNav = () => {
  return (
    <>
      <div className="bg-black-9  flex flex-column  wt-20 h-100 text-color-0 pd-x-2 side-position">
        <div className="flex  items-center justify-center  pd-y-8  ">
          <img
            src="./assets/video.jpg"
            className="object-content wt-20  rounded-full"
            alt=""
          />
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
              <FaHome className="text-xm"></FaHome>
              <span className="pd-x-6">Home</span>
            </NavLink>
          </li>
          <li className="  wt-100   ">
            <NavLink
              to="/"
              className="text-dec text-color-0 sidenav-link pd-4  flex items-center"
            >
              <FaVideo className="text-xm"></FaVideo>
              <span className="pd-x-6">VideoList</span>
            </NavLink>
          </li>
          <li className="wt-100  ">
            <NavLink
              to="/"
              className="text-dec text-color-0 sidenav-link pd-4   items-center flex "
            >
              <FaHistory className="text-xm"></FaHistory>
              <span className="pd-x-6">History</span>
            </NavLink>
          </li>
          <li className=" wt-100 ">
            <NavLink
              to="/"
              className="text-dec text-color-0 sidenav-link pd-4  items-center flex "
            >
              <FaStopwatch className="text-xm"></FaStopwatch>
              <span className="pd-x-6">Watch Later</span>
            </NavLink>
          </li>
          <li className="  wt-100  ">
            <NavLink
              to="/"
              className="text-dec text-color-0 sidenav-link pd-y-4 pd-x-4  items-center flex "
            >
              <MdPlaylistAdd className="text-xm"></MdPlaylistAdd>
              <span className="pd-x-6">PlayList</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export { SideNav };
