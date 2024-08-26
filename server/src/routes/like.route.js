import { Router } from "express";
import { verfiyAuth } from "../middelwares/auth.middelware.js";
import {
  createLikedVideo,
  deletLikedVideo,
  getLikedVideo,
} from "../controllers/likeVideo.contoller.js";

const routers = Router();
routers.use(verfiyAuth);

routers.route("/").get(getLikedVideo);
routers.route("/:videoId").post(createLikedVideo);
routers.route("/:id").delete(deletLikedVideo);

export default routers;
