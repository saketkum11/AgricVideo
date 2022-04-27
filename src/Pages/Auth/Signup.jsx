import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/Auth-context/Auth-context";
const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { email, firstName, lastName, password } = values;
  const { signupHandler } = useAuth();
  return (
    <>
      <div className=" m-auto wt-30 flex m-t-8 flex-column justify-even">
        <div className="box-shadow-1 text-color-9 justify-even flex flex-column  pd-11">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              signupHandler(values);
              navigate("/login");
            }}
          >
            <span className="text-semibold text-m">SignUp</span>
            <div className="flex flex-column ">
              <label
                htmlFor="firstName"
                className="flex items-start text-xm pd-y-5 pd-x-3 text-sm text-light"
              >
                Password{" "}
              </label>

              <input
                type="text"
                id="firstName"
                className="pd-4 text-s rounded-xs outline-none "
                placeholder="FirstName"
                value={firstName}
                required
                onChange={(e) => {
                  setValues({ ...values, firstName: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-column ">
              <label
                htmlFor="lastName"
                className="flex items-start text-xm pd-y-5 pd-x-3 text-sm text-light"
              >
                Password{" "}
              </label>

              <input
                type="text"
                id="lastName"
                className="pd-4 text-s rounded-xs outline-none "
                placeholder="LastName"
                value={lastName}
                required
                onChange={(e) => {
                  setValues({ ...values, lastName: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-column ">
              {" "}
              <label
                htmlFor="email"
                className=" flex items-start pd-y-5 pd-x-3 text-xm text-sm text-light"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className=" pd-4   text-s rounded-xs "
                placeholder="Email Id"
                value={email}
                required
                onChange={(e) => {
                  setValues({ ...values, email: e.target.value });
                }}
              />
            </div>

            <div className="flex flex-column ">
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
                className="bg-black-9 wt-100  rounded-xs border-none outline-none text-s cursor text-color-0 pd-3 text-light"
              >
                SignUp
              </button>

              <NavLink to="/login" className="">
                Already Have Account?
              </NavLink>
            </div>
          </form>
        </div>
      </div>
      <footer className="">
        <div className="pd-y-7">
          <span>Copyright @2022 Agric Video Library</span>
        </div>
      </footer>
    </>
  );
};
export { Signup };
