import { FaRegEye, FaShareAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useVideo } from "../../Context/Video-Context/video-context";
import "./Card.css";
const Card = ({ data }) => {
  const { thumbnail, title, profile, profileName } = data;

  return (
    <>
      <NavLink
        to="/"
        className="card flex cards  flex-column box-shadow-2 rounded-m bg-black-0 text-color-9 text-dec"
      >
        <div className="card_image flex ">
          <img src={thumbnail} className=" wt-100" alt="" />
        </div>
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
            <div className="flex items-center justify-btw">
              <button className="cursor  text-color-9  border-none  outline-none text-color-0  card-icon text-s rounded-full">
                <FaShareAlt />
              </button>
              <button className="cursor   border-none  outline-none text-color-9 text-s card-icon rounded-full ">
                <BsThreeDotsVertical />
              </button>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};
export { Card };
