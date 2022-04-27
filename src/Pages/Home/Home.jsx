import { Header } from "../index";
import { FaPlayCircle, FaRegEye } from "react-icons/fa";
import "../Home/Home.css";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Header></Header>

      <main className="wt-100 m-auto ">
        <section className=" bg-black-8  wt-100   flex ">
          <div className="  text-color-0 flex wt-80 m-auto justify-center pd-11">
            <div className="position-rel">
              <img
                src="./assets/farming.jpg"
                className="object-content wt-80 rounded-m"
                alt=""
              />
              <FaPlayCircle className="fa-3x  fa-5x position-ab text-color-5 icon-position"></FaPlayCircle>
            </div>

            <div className="flex flex-column items-center justify-center">
              <span className="text-color-0 text-xm pd-y-3">
                The ultimate goal of farming is not the growing of crops, but
                the cultivation and perfection of human beings.
              </span>

              <button className="cursor bg-black-9 rounded-xs border-none  outline-none text-color-0 pd-x-4 pd-y-3 text-s ">
                <NavLink to="/videolist" className="text-dec text-color-0">
                  Explore Video
                </NavLink>
              </button>
            </div>
          </div>
        </section>
        <section className=" flex  flex-column  pd-y-8 wt-80 m-auto justify-btw">
          <div className="text-m text-semibold flex items-start pd-y-5">
            <span>Recommend Video</span>
          </div>
          <div className="flex card-gap wrap">
            <div className="box-shadow-1 wt-30 flex flex-column ">
              <div className="wt-100 ">
                <img
                  src="./assets/farming.jpg"
                  className="object-content wt-100 h-80 "
                  alt=""
                />
              </div>

              <div className="pd-x-4 flex flex-column">
                <div className=" flex ">
                  <span className="text-s flex items-start">
                    Palm Oil Farming | सरकार उठाएगी खर्च | पाम तेल की खेती |
                    Palm oil tree | Palm farming subsidy
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
            <div className="box-shadow-1 wt-30 flex flex-column ">
              <div className="wt-100 ">
                <img
                  src="./assets/farming.jpg"
                  className="object-content wt-100 h-80 "
                  alt=""
                />
              </div>

              <div className="pd-x-4 flex  flex-column">
                <div className=" flex ">
                  <span className="text-s flex items-start">
                    Palm Oil Farming | सरकार उठाएगी खर्च | पाम तेल की खेती |
                    Palm oil tree | Palm farming subsidy
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
            <div className="box-shadow-1  wt-30 flex flex-column ">
              <div className="wt-100 ">
                <img
                  src="./assets/farming.jpg"
                  className="object-content wt-100 h-80 "
                  alt=""
                />
              </div>

              <div className="pd-x-4 flex flex-column">
                <div className=" flex ">
                  <span className="text-s flex items-start">
                    Palm Oil Farming | सरकार उठाएगी खर्च | पाम तेल की खेती |
                    Palm oil tree | Palm farming subsidy
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
            </div>{" "}
            <div className="box-shadow-1 flex wt-30 flex-column ">
              <div className="wt-100 ">
                <img
                  src="./assets/farming.jpg"
                  className="object-content wt-100  "
                  alt=""
                />
              </div>

              <div className="pd-x-4 flex flex-column">
                <div className=" flex ">
                  <span className="text-s flex items-start">
                    Palm Oil Farming | सरकार उठाएगी खर्च | पाम तेल की खेती |
                    Palm oil tree | Palm farming subsidy
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
        </section>
        <footer className="">
          <div className="pd-y-7">
            <span>Copyright @2022 Agric Video Library</span>
          </div>
        </footer>
      </main>
    </>
  );
};
export { Home };
