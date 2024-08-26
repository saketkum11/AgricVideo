import { Outlet } from "react-router-dom";
import { Footer, Header } from "../service";

const HomeLayout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <footer className="mt-5">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
