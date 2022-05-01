import { FaRegEye, FaShareAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useVideo } from "../../Context/Video-Context/video-context";
import { Navigation } from "../Nav/Navbar";
import "./Card.css";
const Card = () => {
  const { videoData } = useVideo();
  return (
    <>
      <div className="flex flex-column   m-y-5 justify-center card-main">
        <div>
          <input
            type="text"
            class=" pd-4  m-y-4 text-s rounded-s search wt-50"
            placeholder="Search"
          />
        </div>
        <section className="flex flex-wrap justify-center cards ">
          {videoData.map((items) => {
            const { _id, title, profile, profileName, thumbnail, duration } =
              items;
            return (
              <>
                <NavLink
                  to="/"
                  className="card flex  flex-column box-shadow rounded-m bg-black-0 text-color-9 text-dec"
                  key={_id}
                >
                  <div className="card_image flex ">
                    <img src={thumbnail} className=" wt-100" alt="" />
                  </div>
                  <div className="card_content flex h-100 flex-column justify-even pd-5">
                    <div className="card_title pd-y-2">
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

                    <div className="card_snippet"></div>
                    <div className="card_footer">
                      <button className="cursor bg-black-9  border-none  outline-none text-color-0 pd-x-4 pd-y-3 text-s ">
                        Watch now
                      </button>
                      <div className="">
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
          })}
        </section>
      </div>
    </>
  );
};
export { Card };
