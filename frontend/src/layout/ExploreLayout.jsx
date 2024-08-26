import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";

const ExploreLayout = () => {
  return (
    <div className="">
      <main className="w-full ">
        <section className="grid  grid-cols-12">
          <section className="col-span-2 w-full ">
            <SideNav />
          </section>
          <section className="col-span-10 border-l-2 border-zinc-800">
            <Outlet />
          </section>
        </section>
      </main>
    </div>
  );
};

export default ExploreLayout;
