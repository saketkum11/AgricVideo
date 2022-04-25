import React from "react";
import { Routes, Route } from "react-router-dom";
import { History, Home, Login, VideoList } from "../Pages";
const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videoList" element={<VideoList />} />
        <Route path="/history" element={<History />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
};
export { MyRoutes };
