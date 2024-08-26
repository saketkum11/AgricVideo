import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-zinc-700 border-b-2 border-zinc-700  z-30">
      <nav>
        <div className="flex justify-between items-center px-24 py-5">
          <Link to="/">
            <h1 className="text-3xl font-semibold">AgricVideo</h1>
          </Link>
          <Link
            to="/login"
            className="text-xl border-2 font-normal border-black rounded-lg py-2 px-7"
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
