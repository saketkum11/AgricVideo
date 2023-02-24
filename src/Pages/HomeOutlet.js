import { SideNav } from "../Component/SideNav/SideNav";
import { Outlet } from "react-router-dom";
import { Header } from "../Component/Header/Header";
const HomeOutlet = () => {
  return (
    <>
      <div>
        <Header />
        <SideNav />
        <Outlet />
      </div>
    </>
  );
};

export { HomeOutlet };
