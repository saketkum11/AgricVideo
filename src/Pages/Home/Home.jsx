import { Header } from "../index";
import { FaPlayCircle } from "react-icons/fa";
import "../Home/Home.css";
const Home = () => {
  return (
    <>
      <Header></Header>

      <main className="wt-100 m-auto ">
        <section className=" bg-black-8  wt-80  m-auto flex ">
          <div className="  text-color-0 flex  justify-center pd-11">
            <div className="position-rel">
              <img
                src="./assets/farming.jpg"
                className="object-content wt-70 rounded-m"
                alt=""
              />
              <i class="fa-solid fa-circle-play fa-5x position-ab text-color-5 icon-position"></i>
            </div>

            <div className="flex items-center justify-start">
              <span className="text-color-0 text-xm">
                The ultimate goal of farming is not the growing of crops, but
                the cultivation and perfection of human beings.
              </span>
            </div>
          </div>
        </section>
        <section className="flex pd-y-8 wt-80 m-auto">
          {" "}
          <div className="box-shadow  flex flex-column  wt-30  rounded-s ">
            <div>
              <img
                src="./assets/video.jpg"
                className="object-content wt-100 rounded-m"
                alt=""
              />
              hju7jkio
            </div>

            <div className="pd-4">
              <div className="  ">
                <h4>Cards vertical</h4>
                <small>Text Secondary</small>
              </div>

              <div className="flex flex-column m-y-3 justify-btw ">
                <button className="cursor bg-blue-5 rounded-s border-none  outline-none text-color-0 pd-x-4 pd-y-3 text-s ">
                  Primary
                </button>
                <button className="cursor text-color-0 bg-black-4 rounded-s outline-none border-none pd-x-4 pd-y-3 text-s m-y-                                             2">
                  Secondary
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export { Home };
