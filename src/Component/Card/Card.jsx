import { FaRegEye } from "react-icons/fa";
import { useVideo } from "../../Context/Video-Context/video-context";
import "./Card.css";
const Card = () => {
  const { videoData } = useVideo();
  return (
    <>
      <div className="flex flex-column wt-80 card-grow m-y-5  ">
        <div className="card-grow">
          <input
            type="text"
            className="wt-50 pd-4 m-y-5 text-s rounded-m "
            placeholder="Search"
          />
        </div>
        <div
          className="flex flex-wrap  card-gap pd-x-7 justify-
        "
        >
          {videoData.map((data) => {
            const { _id, thumbnail, title, profile, profileName } = data;
            return (
              <section
                key={_id}
                className="box-shadow-2 wt-max-70   flex card-grow flex-wrap flex-column"
              >
                <div className="flex flex-start">
                  <img
                    src={thumbnail}
                    className=" object-content width card-grow"
                    alt="no image"
                  />
                </div>

                <div className="pd-x-4 flex  flex-column  ">
                  <div className=" flex ">
                    <span className="text-s flex items-start">{title}</span>
                  </div>
                  <div className=" flex items-start   text-semibold">
                    <div className="flex items-center pd-y-3 pd-x-3">
                      <img
                        src={profile}
                        className="avatar rounded-full sm"
                        alt="farming indian"
                      />
                      <span className="pd-x-2">{profileName}</span>
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
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
};
export { Card };
