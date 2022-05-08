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
  SinglePlaylist,
} from "../Pages";

import Mockman from "mockman-js";
import { RequireAuth } from "../Context/RequireAuth/RequireAuth";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videolist" element={<VideoList />} />
        <Route path="/history" element={<History />} />
        <Route
          path="/watchlater"
          element={
            <RequireAuth>
              <WatchLater />
            </RequireAuth>
          }
        />
        <Route
          path="/playlist"
          element={
            <RequireAuth>
              <Playlist />
            </RequireAuth>
          }
        />
        <Route
          path="/playlist/:playlistId"
          element={
            <RequireAuth>
              <SinglePlaylist />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </>
  );
};
export { MyRoutes };
