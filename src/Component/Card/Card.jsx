import { FaShareAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./Card.css";
import { useWatch } from "../../Context/WatchLater-context/Watch-context";
import { useState } from "react";
const Card = ({ data }) => {
  const { thumbnail, title, profile, profileName } = data;
  const { getWatchLaterData } = useWatch();
  const [showToggle, setSHowToggel] = useState(false);
  return (
    <>
      <div className="card flex cards  flex-column box-shadow-2 rounded-m bg-black-0 text-color-9 text-dec position-rel">
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
            <button className="cursor bg-black-9  border-none  outline-none text-color-0 pd-x-4 pd-y-3 text-s ">
              Watch now
            </button>
            <div className="position-ab z-index card-drawer">
              {showToggle ? (
                <div class="z-index bg-black-0  m-auto justify-around flex flex-column pd-4 m-y-8  box-shadow-2">
                  <div class="flex flex-column m-y-6">
                    <span class="text-xm">Dialog header</span>
                    <small>Lorem ipsum dolor sit amet.</small>
                  </div>
                  <div class="flex justify-end items-center m-t-2">
                    <a
                      href=""
                      class="pd-y-2 pd-x-4 text-dec text-color-0  bg-black-5 rounded-m m-x-1"
                    >
                      close
                    </a>
                    <a
                      href=""
                      class="pd-y-2 pd-x-4 text-dec rounded-m bg-blue-5 text-color-0 m-x-1"
                    >
                      continue
                    </a>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="flex items-center justify-btw">
              <button className="cursor  text-color-9  border-none  outline-none text-color-0  card-icon text-s rounded-full">
                <FaShareAlt />
              </button>
              <button
                onClick={() => {
                  setSHowToggel(!showToggle);
                }}
                className="cursor   border-none  outline-none text-color-9 text-s card-icon rounded-full "
              >
                <BsThreeDotsVertical />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { Card };
