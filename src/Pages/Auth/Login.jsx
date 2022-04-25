import { useState } from "react";
import { useAuth } from "../../Context/Auth-context/Auth-context";

const Login = () => {
  const { loginHandler } = useAuth();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { email, password } = values;

  return (
    <>
      <div className=" m-auto wt-30 flex m-t-8 flex-column justify-even">
        <div className="box-shadow-1 text-color-9 justify-even flex flex-column  pd-11">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              loginHandler(email, password);
            }}
          >
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
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export { Login };
