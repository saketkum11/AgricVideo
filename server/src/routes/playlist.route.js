import { Router } from "express";
import { verfiyAuth } from "../middelwares/auth.middelware.js";
import {
  addVideoToPlaylist,
  createPlaylist,
  deletePlaylist,
  getAllPlaylist,
  removeVideoFromPlayList,
} from "../controllers/playlist.controller.js";

const routers = Router();
routers.use(verfiyAuth);

routers.route("/").get(getAllPlaylist);
routers.route("/").post(createPlaylist);
routers.route("/:playlistId/:videoId").post(addVideoToPlaylist);
routers.route("/:playlistId/:videoId").delete(removeVideoFromPlayList);
routers.route("/:playlistId").delete(deletePlaylist);

export default routers;
