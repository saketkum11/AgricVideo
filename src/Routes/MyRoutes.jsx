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
  SingleVideo,
  Like,
  NotFound,
  RequireAuth,
  HomeOutlet,
} from "../Pages";

import Mockman from "mockman-js";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<HomeOutlet />}>
          <Route path="/videolist" element={<VideoList />} />
          <Route path="/videolist/:id" element={<SingleVideo />} />
          <Route element={<RequireAuth />}>
            <Route path="/watchlater" element={<WatchLater />} />
            <Route path="/history" element={<History />} />
            <Route path="/like" element={<Like />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/playlist/:playlistId" element={<SinglePlaylist />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};
export { MyRoutes };
