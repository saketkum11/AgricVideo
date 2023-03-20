import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { SideNav } from "../SideNav/SideNav";
import { FaBars } from "react-icons/fa";
import { useAuth } from "../../Context/Auth-context/Auth-context";
import { Navigation } from "../Navigation/Navigation";

const Header = () => {
  const [sideNavFlag, setSideNavFlag] = useState(false);
  const { credentialData, setCredentailData, logout } = useAuth();
  const { tokenData, isAuth } = credentialData;
  return (
    <>
      <header className="wt-100 position-sticky top-0 z-index-2 bg-black-0">
        <div className="flex wt-80 items-center justify-btw m-auto pd-y-5 text-color-0 ">
          <div className=" cursor flex gap-1">
            <button
              className="cursor bg-none text-m nav-show "
              onClick={() => setSideNavFlag((flag) => !flag)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
            <NavLink
              to="/"
              className="text-dec cursor text-color-red-5 text-lg text-semibold pd-x-3"
            >
              AgricVideo
            </NavLink>
          </div>

          <div>
            <ul className="flex style-none justify-around pd-x-4 ">
              <li>
                {isAuth ? (
                  <button
                    onClick={() => {
                      logout();
                    }}
                    className="text-dec bg-red-5 rounded-s text-xm text-color-grey-0 pd-y-3 pd-x-5 "
                  >
                    logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="bg-red-5 rounded-s text-xm text-color-grey-0 pd-y-3 pd-x-5  text-dec "
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
      {sideNavFlag && <Navigation />}
    </>
  );
};
export { Header };
