import { NavLink } from "react-router-dom";
import "./SideNav.css";
const SideNav = () => {
  return (
    <>
      <div className="bg-black-9 position-fixed flex flex-column   text-color-0 pd-4">
        <div className="flex m-auto items-center pd-x-11 pd-y-8 justify-start  h-100">
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
        <ul className="flex  flex-column   style-none pd-x-9 ">
          <li className="  wt-100  ">
            <NavLink
              to="/"
              className="text-dec text-color-0 sidenav-link pd-y-3 pd-x-4  items-start flex   "
            >
              Home
            </NavLink>
          </li>
          <li className="  wt-100   ">
            <NavLink
              to="/"
              className="text-dec text-color-0 sidenav-link pd-y-3 pd-x-4  items-start flex "
            >
              VideoList
            </NavLink>
          </li>
          <li className="wt-100  ">
            <NavLink
              to="/"
              className="text-dec text-color-0 sidenav-link pd-y-3 pd-x-4  items-start flex "
            >
              History
            </NavLink>
          </li>
          <li className=" wt-100 ">
            <NavLink
              to="/"
              className="text-dec text-color-0 sidenav-link pd-y-3 pd-x-4  items-start flex "
            >
              Watch Later
            </NavLink>
          </li>
          <li className="  wt-100  ">
            <NavLink
              to="/"
              className="text-dec text-color-0 sidenav-link pd-y-3 pd-x-4  items-start flex "
            >
              PlayList
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export { SideNav };
