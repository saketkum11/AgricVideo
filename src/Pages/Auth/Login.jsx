import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Header } from "../../Component/Header/Header";
import { useAuth } from "../../Context/Auth-context/Auth-context";

const Login = () => {
  const { loginHandler } = useAuth();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { credentialData, setCredentailData } = useAuth();
  const { email, password } = values;

  return (
    <>
      <Header />
      <div className="  wt-100  m-y-9">
        <div className="m-auto flex flex-column gap-1 box-shadow-2 pd-11 wt-max-100 width-scaled4-7 ">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              loginHandler(values);
              setCredentailData({
                ...credentialData,
                isAuth: !credentialData.isAuth,
              });
            }}
            className=""
          >
            <div className=" flex flex-column gap-1 ">
              <div>
                <span className="text-semibold text-m">Login</span>
              </div>
              <div className="flex flex-column wt-100">
                <label
                  htmlFor="email"
                  className=" flex items-start pd-y-5 pd-x-3 text-xm text-sm text-light"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className=" wt-100 pd-4  border-1 border-solid border-black-700  text-s rounded-s text-color-grey-9"
                  placeholder="Email Id"
                  value={email}
                  required
                  onChange={(e) => {
                    setValues({ ...values, email: e.target.value });
                  }}
                />
              </div>

              <div className="flex flex-column wt-100">
                <label
                  htmlFor="password"
                  className="flex items-start text-xm pd-y-5 pd-x-3 text-sm text-light"
                >
                  Password{" "}
                </label>

                <input
                  type="password"
                  id="password"
                  className="wt-100 pd-4  border-1 border-solid border-black-700  text-s rounded-s text-color-grey-9"
                  placeholder="Password"
                  value={password}
                  required
                  onChange={(e) => {
                    setValues({ ...values, password: e.target.value });
                  }}
                />
              </div>

              <div className="pd-y-9 ">
                <button
                  type="Submit"
                  className="bg-red-5 wt-100  rounded-s border-none outline-none text-s cursor text-color-grey-0 pd-3 text-light"
                >
                  Login
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    setValues({
                      ...values,
                      email: "test@gmail.com",
                      password: "test123",
                    });
                  }}
                  className="bg-red-5 wt-100  rounded-s border-none outline-none text-s cursor text-color-grey-0 pd-3 m-y-3 text-light"
                >
                  Login as Guest
                </button>
                <Link to="/signup" className="text-dec text-color-grey-9">
                  Create your account
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export { Login };
