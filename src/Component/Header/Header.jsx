import { NavLink } from "react-router-dom";
import { useState } from "react";
import { SideNav } from "../SideNav/SideNav";

const Header = () => {
  const [sideNavFlag, setSideNavFlag] = useState(false);
  return (
    <>
      <header className="wt-100 ">
        <div className="wt-20 flex flex-column overFlow ">
          {sideNavFlag ? <SideNav></SideNav> : ""}
        </div>

        <div className="flex wt-80 items-center m-auto pd-y-5 text-color-0 ">
          <div className="pd-x-4 cursor flex">
            <button
              onClick={() => {
                setSideNavFlag((flag) => !flag);
              }}
              className="rounded-s border-none cursor  outline-none text-color-9 pd-x-3 pd-y-2 bg-transparent"
            >
              <i class="fa-solid fa-bars"></i>
            </button>
            <NavLink to="/" className="text-dec cursor text-color-9 text-lg">
              Agric
            </NavLink>
          </div>

          <div className="m-lf">
            <ul className="flex style-none justify-around pd-x-4 ">
              <li>
                <button className="bg-green-5 rounded-s border-none  outline-none text-color-0 pd-x-3 pd-y-2">
                  Primary
                </button>
              </li>
              <li>
                <a href="" className="text-dec  text-color-0 pd-4">
                  About
                </a>
              </li>
              <li>
                <a href="" className="text-dec  text-color-0 pd-4">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
export { Header };
