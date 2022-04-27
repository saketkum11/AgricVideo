import React from "react";
import { Routes, Route } from "react-router-dom";
import { History, Home, Login, Signup, VideoList } from "../Pages";

import Mockman from "mockman-js";
import { RequireAuth } from "../Context/RequireAuth/RequireAuth";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/videolist"
          element={
            <RequireAuth>
              <VideoList />
            </RequireAuth>
          }
        />

        <Route path="/history" element={<History />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signup" element={<Mockman />}></Route>
      </Routes>
    </>
  );
};
export { MyRoutes };
