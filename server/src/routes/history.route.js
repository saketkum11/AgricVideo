import { Router } from "express";
import { verfiyAuth } from "../middelwares/auth.middelware.js";
import {
  addVideohistory,
  deletVideoFromHistory,
  getAllHistoryVideo,
} from "../controllers/history.controller.js";

const routers = Router();
routers.use(verfiyAuth);

routers.route("/").get(getAllHistoryVideo);
routers.route("/:videoId").post(addVideohistory);
routers.route("/:id").delete(deletVideoFromHistory);

export default routers;
