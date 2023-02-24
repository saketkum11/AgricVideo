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
      <Header />
      <main className=" m-auto ">
        <section className="    m-y-8 pd-9 ">
          <div className="  text-color-0 flex m-auto justify-center flex-wrap wt-100 gap-2 m-y-6">
            <div className="width-scaled5-6">
              <img
                src="./assets/tech.jpg"
                className="object-content rounded-s"
                alt=""
              />
            </div>

            <div className="width-scaled5-8 flex flex-column items-center justify-center">
              <span className="text-color-grey-9 text-xm pd-y-3">
                The ultimate goal of farming is not the growing of crops, but
                the cultivation and perfection of human beings.
              </span>

              <button className="text-dec bg-red-5 rounded-s text-xm  pd-y-3 pd-x-5 ">
                <NavLink to="/videolist" className="text-dec text-color-grey-0">
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
