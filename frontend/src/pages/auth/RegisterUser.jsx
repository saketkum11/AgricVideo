import { Link } from "react-router-dom";
import { Button, Input } from "../../service";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const RegisterUser = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
  });
  const { signup } = useAuth();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    signup(form);
  };
  const handleChange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="max-w-sm m-auto">
      <div className="mt-24 mb-14">
        <h1 className="text-2xl font-semibold text-center">Register</h1>
      </div>
      <form action="" onSubmit={(e) => handleOnSubmit(e)}>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="">FullName</label>
            <Input
              placeholder="FullName"
              name="fullName"
              type="text"
              value={form.fullName}
              onChange={(e) => handleChange(e)}
              required={true}
              className="py-3 mt-3 px-5 rounded-sm  border-2 border-zinc-800 text-base w-full"
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <Input
              placeholder="eg xyz@gmail.com"
              name="email"
              required={true}
              value={form.email}
              onChange={(e) => handleChange(e)}
              className="py-3 mt-3 px-5 rounded-sm  border-2 border-zinc-800 text-base w-full"
            />
          </div>
          <div>
            <label htmlFor="">UserName</label>
            <Input
              placeholder="eg saket123"
              name="username"
              required={true}
              value={form.username}
              onChange={(e) => handleChange(e)}
              className="py-3 mt-3 px-5 rounded-sm  border-2 border-zinc-800 text-base w-full"
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <Input
              placeholder="eg. saket3343409dvbnubvc"
              type="password"
              required={true}
              value={form.password}
              onChange={(e) => handleChange(e)}
              name="password"
              className="py-3 mt-3 px-5 rounded-sm w-full border-2 border-zinc-800 text-base"
            />
          </div>

          <div className="mt-8 flex flex-col items-center">
            <Button
              type="submit"
              label="Register"
              className="bg-zinc-800 text-white py-3 px-28 rounded-lg flex  text-lg"
            />
            <p className="mt-4">
              Create Account ?
              <Link to="/login" className="text-zinc-800 font-bold ml-2">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
export default RegisterUser;
