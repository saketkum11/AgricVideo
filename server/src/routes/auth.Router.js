import { Router } from "express";
import {
  login,
  logoutUser,
  registerUser,
} from "../controllers/endUser.controller.js";
import { verfiyAuth } from "../middelwares/auth.middelware.js";

const routers = Router();

routers.route("/register").post(registerUser);
routers.route("/login").post(login);
routers.route("/logout").post(verfiyAuth, logoutUser);
export default routers;
