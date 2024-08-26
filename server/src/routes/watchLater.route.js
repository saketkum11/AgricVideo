import { Router } from "express";
import { verfiyAuth } from "../middelwares/auth.middelware.js";
import {
  createWatcherLaterVideo,
  deleteWatcherLaterVideo,
  getWatchListLaterVideo,
} from "../controllers/watchlist.controller.js";

const routers = Router();
routers.use(verfiyAuth);

routers.route("/").get(getWatchListLaterVideo);
routers.route("/:videoId").post(createWatcherLaterVideo);
routers.route("/:id").delete(deleteWatcherLaterVideo);

export default routers;
