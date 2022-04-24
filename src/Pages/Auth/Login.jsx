import { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <div className=" m-auto wt-30 flex m-t-8 flex-column justify-even">
        <div className="bg-black-1 text-color-9 justify-even flex flex-column  pd-11">
          <label
            htmlFor="email"
            className="flex items-start pd-y-5 pd-x-3 text-xm text-sm text-light"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className=" pd-4   text-s rounded-xs "
            placeholder="Email Id"
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
          />

          <label
            htmlFor="password"
            className="flex items-start text-xm pd-y-5 pd-x-3 text-sm text-light"
          >
            Password{" "}
          </label>

          <input
            type="password"
            id="password"
            className="pd-4 text-s rounded-xs outline-none "
            placeholder="Password"
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
          />
          <div className="pd-y-9 ">
            <button
              type="submit"
              className="bg-black-9 wt-100  rounded-xs border-none outline-none text-s cursor text-color-0 pd-3 text-light"
            >
              Login
            </button>
          </div>

          <button className="bg-black-0 rounded-xs outline-none pd-2 cursor">
            Login as Guest{" "}
          </button>
        </div>
        <footer className="bg-black-4 "></footer>
      </div>
    </>
  );
};
export { Login };
