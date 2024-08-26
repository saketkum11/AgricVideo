import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import ExploreLayout from "../layout/ExploreLayout";
const Home = React.lazy(() => import("../pages/Home"));
const RegisterUser = React.lazy(() => import("../pages/auth/RegisterUser"));
const Login = React.lazy(() => import("../pages/auth/Login"));
const Explore = React.lazy(() => import("../pages/Explore"));
const NotFound = React.lazy(() => import("../components/NotFound"));
const AuthenticationLayout = React.lazy(
  () => import("../layout/AuthenticationLayout")
);
const HomeLayout = React.lazy(() => import("../layout/HomeLayout"));
const Playlist = React.lazy(() => import("../pages/PlayList"));
const PlaylistVideo = React.lazy(() => import("../components/PlaylistVideo"));
const WatchLater = React.lazy(() => import("../pages/WatchLater"));
const BrowserRouter = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route element={<ExploreLayout />}>
            <Route path="/explore" element={<Explore />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/playlist/:playlistId" element={<PlaylistVideo />} />
            <Route path="/watchlater" element={<WatchLater />} />
          </Route>
        </Route>
        <Route element={<AuthenticationLayout />}>
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default BrowserRouter;
