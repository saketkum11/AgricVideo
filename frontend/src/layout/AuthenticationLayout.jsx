import { Outlet } from "react-router-dom";
const AuthenticationLayout = () => {
  return (
    <div className="flex  min-h-screen">
      <div className=" max-w-5xl w-full  bg-black">
        <div className=" w-full  min-h-screen flex justify-center items-center text-white text-8xl font-semibold">
          Lets go
        </div>
      </div>
      <div className="bg-white max-w-2xl w-full mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthenticationLayout;
