import { Router } from "express";
import { verfiyAuth } from "../middelwares/auth.middelware.js";
import { getVideoList } from "../controllers/video.controller.js";

const routers = Router();

routers.route("/allVideo").get(getVideoList);

export default routers;
