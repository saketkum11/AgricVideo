import { Card, Header } from "../index";
import { FaPlayCircle, FaRegEye } from "react-icons/fa";
import "../Home/Home.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useVideo } from "../../Context/Video-Context/video-context";
import { ACTION_TYPE } from "../../Reducer/sevice";
const Home = () => {
  const { videoState, videoDispatch } = useVideo();
  const { categories } = videoState;

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get("/api/categories");
        videoDispatch({
          type: ACTION_TYPE.CATEGORIES,
          payload: response.data.categories,
        });
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, []);

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
          <div className="flex flex-wrap  justify-center  cards">
            {categories.map((categoriesVideo) => {
              return <Card key={categoriesVideo._id} video={categoriesVideo} />;
            })}
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
