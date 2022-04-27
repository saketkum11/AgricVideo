import { FaRegEye } from "react-icons/fa";
import { useVideo } from "../../Context/Video-Context/video-context";
import "./Card.css";
const Card = ({ items }) => {
  const { getVideoData } = useVideo();
  const { _id, title, thumbnail } = items;
  return (
    <>
      <div className="card-grid overFlow">
        <div className="box-shadow-1  flex flex-column ">
          <div className="wt-100 ">
            <img
              src={thumbnail}
              className="object-content wt-100 h-80 "
              alt=""
            />
          </div>

          <div className="pd-x-4 flex  flex-column">
            <div className=" flex ">
              <span className="text-s flex items-start">
                Palm Oil Farming | सरकार उठाएगी खर्च | पाम तेल की खेती | Palm
                oil tree | Palm farming subsidy
              </span>
            </div>
            <div className=" flex items-start   text-semibold">
              <div className="flex items-center pd-y-3 pd-x-3">
                <img
                  src="./assets/video.jpg"
                  className="avatar rounded-full sm"
                  alt="farming indian"
                />
                <span className="pd-x-2">Indian Farmer</span>
              </div>
            </div>
            <div className="flex justify-btw pd-3">
              <span>1 day ago</span>
              <div className="flex items-center ">
                <FaRegEye> </FaRegEye>
                <span>16.7k</span>
              </div>
            </div>

            <div className="flex flex-column pd-y-3 justify-btw ">
              <button className="cursor bg-black-9 rounded-xs border-none  outline-none text-color-0 pd-x-4 pd-y-3 text-s ">
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { Card };
