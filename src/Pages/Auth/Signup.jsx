import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Header } from "../../Component/Header/Header";
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
      <Header />
      <div className=" m-y-9 m-x-9 ">
        <div className="m-auto flex flex-column gap-1 box-shadow-1 pd-11 wt-max-100 width-scaled4-7 rounded-m">
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
                FirstName
              </label>
              <input
                type="text"
                id="firstName"
                className=" wt-100 pd-4  border-1 border-solid border-black-700  text-s rounded-s text-color-grey-9"
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
                LastName
              </label>

              <input
                type="text"
                id="lastName"
                className=" wt-100 pd-4  border-1 border-solid border-black-700  text-s rounded-s text-color-grey-9"
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
                className=" wt-100 pd-4  border-1 border-solid border-black-700  text-s rounded-s text-color-grey-9"
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
                className=" wt-100 pd-4  border-1 border-solid border-black-700  text-s rounded-s text-color-grey-9"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => {
                  setValues({ ...values, password: e.target.value });
                }}
              />
            </div>

            <div className="pd-y-9 flex flex-column gap-1">
              <button
                type="Submit"
                className="bg-red-5 wt-100  rounded-s  text-s cursor text-color-grey-0 pd-3 text-light"
              >
                SignUp
              </button>

              <Link to="/login" className="text-dec text-color-grey-9">
                Already Have Account?
              </Link>
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
