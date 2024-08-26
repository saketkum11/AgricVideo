/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import VideoModal from "./VideoModal";
import { trancate } from "../utils/trancate";
const VideoCard = ({ data, watch, watchList }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const handleToggle = () => {
    setToggleModal((flag) => !flag);
  };
  return (
    <div className="col-span-3 px-2 h-48 relative">
      <div>
        <img
          src={data.thumbnail}
          className="object-cover w-full rounded-lg"
          alt=""
        />
      </div>
      <div className="grid items-center grid-cols-12 ">
        <img
          src={data.profile}
          className="rounded-full w-10 h-10 col-span-2  bg-red-400"
          alt=""
        />
        <div className="col-span-10 flex justify-between mt-2 px-2">
          <div>
            <p className="font-bold text-sm">{trancate(data.title)}</p>
            <p className="text-gray-400 text-sm">{data.channelName}</p>
          </div>
          <div>
            <button onClick={handleToggle}>
              <FaEllipsisV />
            </button>
          </div>
        </div>
      </div>
      {toggleModal && (
        <VideoModal
          key={data._id}
          data={data}
          watchList={watchList}
          watch={watch}
        />
      )}
    </div>
  );
};

export default VideoCard;
