// verify users
// what things we need
//  we need req , res
//  accessToken and Refresh token , cookies
//  accessToken - give us the three thing id , username , password , email.
//   req.user = user
//   next()
import Jwt from "jsonwebtoken";
import { ApiErrorHandler } from "../utils/ApiErrorHandler.js";
import { User } from "../models/user.model.js";
const verfiyAuth = async (req, res, next) => {
  const token =
    req.cookies.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(403).json(new ApiErrorHandler(404, "Token Error"));
  }
  const decode = Jwt.verify(token, process.env.ACCESS_TOKEN_SCERET);
  if (!decode) {
    return res.status(403).json(new ApiErrorHandler(404, "access token worng"));
  }
  const user = await User.findById(decode._id).select(
    "-password -refreshToken"
  );

  if (!user) {
    return res.status(404).json(new ApiErrorHandler(404, "token is wrong "));
  }
  req.user = user;
  next();
};

export { verfiyAuth };
