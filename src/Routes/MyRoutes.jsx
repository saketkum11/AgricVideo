import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  History,
  Home,
  Login,
  Playlist,
  Signup,
  VideoList,
  WatchLater,
} from "../Pages";

import Mockman from "mockman-js";
import { RequireAuth } from "../Context/RequireAuth/RequireAuth";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videolist" element={<VideoList />} />
        <Route path="/history" element={<History />}></Route>
        <Route
          path="/watchlater"
          element={
            <RequireAuth>
              <WatchLater />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/playlist"
          element={
            <RequireAuth>
              <Playlist />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/mock" element={<Mockman />}></Route>
      </Routes>
    </>
  );
};
export { MyRoutes };
