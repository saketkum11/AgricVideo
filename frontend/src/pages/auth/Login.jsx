import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const Input = React.lazy(() => import("../../components/Input"));
const Button = React.lazy(() => import("../../components/Button"));
const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    login(form);
  };
  const handleChange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="max-w-sm m-auto">
      <div className="mt-24 mb-14">
        <h1 className="text-2xl font-semibold text-center">Login</h1>
      </div>
      <form action="" onSubmit={handleOnSubmit}>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="" className="">
              Email
            </label>
            <Input
              placeholder="eg xyz@gmail.com"
              name="email"
              value={form?.email}
              onChange={(e) => handleChange(e)}
              className="py-3 mt-3 px-5 rounded-sm  border-2 border-zinc-800 text-base w-full"
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <Input
              placeholder="eg. saket3343409dvbnubvc"
              type="password"
              name="password"
              value={form?.password}
              onChange={(e) => handleChange(e)}
              className="py-3 mt-3 px-5 rounded-sm w-full border-2 border-zinc-800 text-base"
            />
          </div>
          <div className="mt-8 flex flex-col items-center">
            <Button
              type="submit"
              label="Submit"
              className="bg-zinc-800 text-white py-2 px-20 rounded-lg flex  "
            />
            <p className="mt-4">
              Create Account ?
              <Link to="/register" className="text-zinc-800 font-bold ml-2">
                Register
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
