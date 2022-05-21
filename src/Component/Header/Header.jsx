import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { SideNav } from "../SideNav/SideNav";
import { FaBars } from "react-icons/fa";
import { useAuth } from "../../Context/Auth-context/Auth-context";

const Header = () => {
  const [sideNavFlag, setSideNavFlag] = useState(false);
  const { credentialData, setCredentailData, logout } = useAuth();
  const { tokenData, isAuth } = credentialData;
  return (
    <>
      <header className="wt-100 ">
        <div className="wt-20 flex flex-column overFlow "></div>

        <div className="flex wt-80 items-center m-auto pd-y-5 text-color-0 ">
          <div className="pd-x-4 cursor flex">
            <NavLink
              to="/"
              className="text-dec cursor text-color-9 text-lg pd-x-3"
            >
              Agric
            </NavLink>
          </div>

          <div className="m-lf">
            <ul className="flex style-none justify-around pd-x-4 ">
              <li>
                {isAuth ? (
                  <button
                    onClick={() => {
                      logout();
                    }}
                    className="bg-black-9 rounded-xs border-none  outline-none text-color-0 pd-3 text-s"
                  >
                    logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="bg-black-9 rounded-xs border-none  outline-none text-color-0 pd-3 text-s"
                  >
                    login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
export { Header };
