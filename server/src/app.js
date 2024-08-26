import cookies from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();
const serverPort = 3000 || process.env.PORT;
app.use(cors({ origin: process.env.CROSS_ORIGIN, credentials: true }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookies());

// import routes
import vidoeRouter from "./routes/video.router.js";
import userRouter from "./routes/auth.Router.js";
import likedVideo from "./routes/like.route.js";
import watchLater from "./routes/watchLater.route.js";
import historyVideo from "./routes/history.route.js";
import playlistVideo from "./routes/playlist.route.js";
app.use("/api/v1/user", userRouter);
app.use("/api/v1/videos", vidoeRouter);
app.use("/api/v1/liked", likedVideo);
app.use("/api/v1/watchLater", watchLater);
app.use("/api/v1/history", historyVideo);
app.use("/api/v1/playlist", playlistVideo);
app.listen(serverPort);
export { app };
