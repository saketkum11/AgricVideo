import { SideNav } from "../Component/SideNav/SideNav";
import { Outlet } from "react-router-dom";
import { Header } from "../Component/Header/Header";
const HomeOutlet = () => {
  return (
    <>
      <div className="flex flex-column">
        <Header />
        <div className="flex  ">
          <SideNav />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export { HomeOutlet };
